from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib import messages
from django.db.models import Sum, Count, Avg, F 
from django.utils import timezone
from datetime import timedelta
from .models import *
from .forms import *

@login_required
def dashboard(request):
    context = {}
    today = timezone.now().date()
    
    if request.user.user_type == 'admin':
        # Admin Dashboard
        
        # --- FIX: Use F expression to calculate total_price in the database ---
        total_revenue_aggregation = Distribution.objects.aggregate(
            total_price_sum=Sum(F('gas_amount_kg') * F('price_per_kg'))
        )['total_price_sum']
        # --------------------------------------------------------------------
        
        context.update({
            'total_waste_collected': WasteCollection.objects.aggregate(Sum('quantity_kg'))['quantity_kg__sum'] or 0,
            'total_customers': CustomUser.objects.filter(user_type='customer').count(),
            'total_revenue': total_revenue_aggregation or 0, # Use the fixed aggregation
            'active_biodigesters': Biodigester.objects.filter(is_active=True).count(),
            'recent_collections': WasteCollection.objects.select_related('customer', 'collection_point').order_by('-collection_date')[:10],
            'zone_performance': WasteCollection.objects.values('collection_point__zone').annotate(
                total_waste=Sum('quantity_kg'),
                total_transactions=Count('id')
            ).order_by('-total_waste')
        })
        
    # --- NEW KITCHEN MANAGER DASHBOARD LOGIC ---
    elif request.user.user_type == 'kitchen_manager':
        # Kitchen Manager Dashboard
        
        today_sessions_queryset = OpenKitchenSession.objects.filter(
            kitchen_manager=request.user,
            session_date__date=today
        )
        
        today_metrics = today_sessions_queryset.aggregate(
            total_sessions=Count('id'),
            total_gas_used=Sum('gas_used_kg'),
            total_revenue=Sum('cost') # Assuming 'cost' is the revenue
        )

        context.update({
            'today_sessions': today_metrics['total_sessions'] or 0,
            'today_gas_used': today_metrics['total_gas_used'] or 0,
            'today_revenue': today_metrics['total_revenue'] or 0,
            'recent_kitchen_sessions': OpenKitchenSession.objects.filter(
                kitchen_manager=request.user
            ).select_related('customer').order_by('-session_date')[:10]
        })
        
    # --- EXISTING WASTE COLLECTOR DASHBOARD LOGIC ---
    elif request.user.user_type == 'waste_collector':
        # Waste Collector Dashboard
        collector_points = WasteCollectionPoint.objects.filter(manager=request.user)
        
        context.update({
            'my_collection_points': collector_points,
            'today_collections': WasteCollection.objects.filter(
                collection_point__in=collector_points,
                collection_date__date=today
            ).aggregate(Sum('quantity_kg'))['quantity_kg__sum'] or 0,
            'pending_payments': WasteCollection.objects.filter(
                collection_point__in=collector_points,
                is_paid=False
            ).count()
        })
        
    # --- EXISTING DISTRIBUTOR DASHBOARD LOGIC ---
    elif request.user.user_type == 'distributor':
        # Distributor Dashboard
        
        cylinders_in_transit_count = GasCylinder.objects.filter(is_available=False).count()

        active_customers = Distribution.objects.filter(
            distributor=request.user,
            distribution_date__date=today
        ).values('customer').distinct().count()

        total_gas_distributed_today = Distribution.objects.filter(
            distributor=request.user,
            distribution_date__date=today
        ).aggregate(Sum('gas_amount_kg'))['gas_amount_kg__sum'] or 0
        
        recent_distributions_list = Distribution.objects.filter(
            distributor=request.user
        ).select_related('customer', 'cylinder').order_by('-distribution_date')[:10]
        
        context.update({
            'cylinders_in_transit': cylinders_in_transit_count,
            'active_customers_served': active_customers,
            'total_gas_distributed': total_gas_distributed_today,
            'recent_distributions': recent_distributions_list,
        })
        
    # --- EXISTING CUSTOMER DASHBOARD LOGIC ---
    elif request.user.user_type == 'customer':
        # Customer Dashboard
        try:
            accrual = CustomerAccrual.objects.get(customer=request.user)
        except CustomerAccrual.DoesNotExist:
            # You should not typically create objects in a GET view, 
            # but leaving it here to maintain existing logic flow
            accrual = CustomerAccrual.objects.create(customer=request.user, balance=0)
            
        waste_deliveries = WasteCollection.objects.filter(customer=request.user)
        recent_gas_purchases = Distribution.objects.filter(customer=request.user).order_by('-distribution_date')[:5]
        # FIX: The original code used 'recent_kitchen_sessions' but didn't fetch them, 
        # now we fetch based on the customer (not manager, as this is the customer view).
        recent_kitchen_sessions_list = OpenKitchenSession.objects.filter(customer=request.user).order_by('-session_date')[:5] 
            
        context.update({
            'accrual_balance': accrual.balance,
            'recent_waste_deliveries': waste_deliveries.order_by('-collection_date')[:5],
            'recent_gas_purchases': recent_gas_purchases,
            'recent_kitchen_sessions': recent_kitchen_sessions_list, # Added for completeness/future use
            'total_waste_delivered': waste_deliveries.aggregate(total=Sum('quantity_kg'))['total'] or 0
        })
    
    return render(request, 'core/dashboard.html', context)
    
def add_collection_point(request):
    if request.method == 'POST':
        form = WasteCollectionPointForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Collection Point added successfully! 🎉')
            return redirect('dashboard') # Redirect to a page that lists all points
        else:
            messages.error(request, 'Error adding Collection Point. Please check the form.')
    else:
        form = WasteCollectionPointForm()

    context = {
        'form': form,
    }
    return render(request, 'core/add_collection_point.html', context)

@login_required
def waste_collection_view(request):
    if request.user.user_type != 'waste_collector':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
    
    collector_points = WasteCollectionPoint.objects.filter(manager=request.user)
    
    if request.method == 'POST':
        form = WasteCollectionForm(request.POST, collector=request.user)
        if form.is_valid():
            waste_collection = form.save(commit=False)
            waste_collection.collection_point = form.cleaned_data['collection_point']
            waste_collection.save()
            
            # Update customer accrual if payment type is accrual
            if waste_collection.payment_type == 'accrual':
                accrual, created = CustomerAccrual.objects.get_or_create(
                    customer=waste_collection.customer,
                    defaults={'balance': 0}
                )
                accrual.balance += waste_collection.total_amount
                accrual.save()
                waste_collection.is_paid = True
                waste_collection.save()
            
            messages.success(request, f'Waste collection recorded successfully. Invoice: {waste_collection.invoice_number}')
            return redirect('waste_collections')
    else:
        form = WasteCollectionForm(collector=request.user)
    
    collections = WasteCollection.objects.filter(collection_point__manager=request.user)
    return render(request, 'core/waste_collection.html', {
        'collections': collections,
        'form': form,
        'collector_points': collector_points
    })

@login_required
def biodigester_management(request):
    if request.user.user_type != 'kitchen_manager':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
    
    biodigesters = Biodigester.objects.filter(manager=request.user)
    return render(request, 'core/biodigester_management.html', {'biodigesters': biodigesters})

def add_gas_cylinder(request):
    if request.method == 'POST':
        form = GasCylinderForm(request.POST)
        if form.is_valid():
            # current_gas_level is intentionally excluded from the form
            # and defaults to 0 in the model.
            form.save()
            messages.success(request, f'Gas Cylinder {form.instance.cylinder_id} added successfully! ⛽')
            
            # TODO: Change 'cylinder_list' to the actual URL name for viewing cylinders
            return redirect('add_gas_cylinder') 
        else:
            messages.error(request, 'Error adding cylinder. Please check the form details.')
    else:
        form = GasCylinderForm()

    context = {
        'form': form,
        'recent_cylinders': GasCylinder.objects.all().order_by('-id')[:5] # Example list
    }
    return render(request, 'core/add_gas_cylinder.html', context)

@login_required
def distribution_management(request):
    if request.user.user_type != 'distributor':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
    
    if request.method == 'POST':
        form = DistributionForm(request.POST, distributor=request.user)
        if form.is_valid():
            distribution = form.save(commit=False)
            distribution.distributor = request.user
            distribution.save()
            
            # Update cylinder gas level
            cylinder = distribution.cylinder
            cylinder.current_gas_level -= distribution.gas_amount_kg
            if cylinder.current_gas_level <= 0:
                cylinder.is_available = False
            cylinder.save()
            
            messages.success(request, f'Gas distribution recorded successfully for {distribution.customer.username}')
            return redirect('distribution_management')
    else:
        form = DistributionForm(distributor=request.user)
    
    distributions = Distribution.objects.filter(distributor=request.user)
    return render(request, 'core/distribution_management.html', {
        'distributions': distributions,
        'form': form
    })

@login_required
def my_accruals(request):
    if request.user.user_type != 'customer':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
    
    accrual, created = CustomerAccrual.objects.get_or_create(customer=request.user)
    
    # 1. Fetch relevant querysets
    waste_deliveries = WasteCollection.objects.filter(customer=request.user).order_by('-collection_date') # Added order_by for history list
    distributions = Distribution.objects.filter(customer=request.user).order_by('-distribution_date') # Added order_by for history list
    
    # 2. FIX: Calculate the total waste delivered in the view
    total_waste_delivered = waste_deliveries.aggregate(total=Sum('quantity_kg'))['total'] or 0
    
    return render(request, 'core/my_accruals.html', {
        'accrual': accrual,
        'waste_deliveries': waste_deliveries, # The list of deliveries for the history table
        'distributions': distributions,
        'total_waste_delivered_kg': total_waste_delivered, # The calculated total
    })

@login_required
def open_kitchens(request):
    """View for customers to access open kitchen sessions"""
    if request.user.user_type != 'customer':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
    
    if request.method == 'POST':
        form = OpenKitchenSessionForm(request.POST, customer=request.user)
        if form.is_valid():
            session = form.save(commit=False)
            session.customer = request.user
            session.cost = session.gas_used_kg * 150  # Example rate
            session.payment_method = 'pending'
            session.save()
            messages.success(request, 'Open kitchen session booked successfully!')
            return redirect('open_kitchens')
    else:
        form = OpenKitchenSessionForm(customer=request.user)
    
    # Get recent sessions for this customer
    recent_sessions = OpenKitchenSession.objects.filter(customer=request.user).order_by('-session_date')[:10]
    
    return render(request, 'core/open_kitchens.html', {
        'form': form,
        'recent_sessions': recent_sessions
    })

@login_required
def admin_reports(request):
    # 1. Access Control
    if request.user.user_type != 'admin':
        messages.error(request, "Access denied. Only administrators can view reports.")
        return redirect('dashboard')
    
    # 2. Generate Report Data
    
    # Waste Trends (e.g., WasteCollection model)
    waste_trends = WasteCollection.objects.values('waste_type').annotate(
        total=Sum('quantity_kg')
    ).order_by('-total')
    
    # Zone Performance (e.g., WasteCollection model, joining through collection_point)
    zone_performance = WasteCollection.objects.values('collection_point__zone').annotate(
        total_waste=Sum('quantity_kg'),
        avg_rate=Avg('rate_per_kg')
    )
    
    # Biodigester Efficiency (e.g., Biodigester model)
    biodigester_efficiency = Biodigester.objects.annotate(
        # Note: This is a simplified efficiency calculation for demonstration
        efficiency=(Avg('current_level') * 100) / Avg('capacity_kg') 
    )
    
    # Sales & Revenue Data (e.g., Distribution model)
    # FIX: Calculate 'calculated_total_price' using F() expression 
    # since 'total_price' does not exist as a model field.
    sales_data = Distribution.objects.annotate(
        # Calculate the price for each record: quantity * unit price
        calculated_total_price=F('gas_amount_kg') * F('price_per_kg') 
    ).values('distribution_date__date').annotate(
        # Group and sum the calculated price and volume
        daily_sales=Sum('calculated_total_price'),
        daily_volume=Sum('gas_amount_kg')
    ).order_by('distribution_date__date')[:30]
    
    # 3. Render Template
    return render(request, 'core/admin_reports.html', {
        'waste_trends': waste_trends,
        'zone_performance': zone_performance,
        'biodigester_efficiency': biodigester_efficiency,
        'sales_data': sales_data,
    })

# In core/views.py (requires imports for Sum, F, and your models)
from django.http import HttpResponse
import csv
from django.db.models import Sum, Avg, F
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.contrib import messages

# ... (Assume your other models and functions are defined) ...

@login_required
def export_report_data(request):
    if request.user.user_type != 'admin':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
        
    # 1. Set up CSV response
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="system_report_data.csv"'

    # 2. Get the data (e.g., Waste Trends data from your admin_reports view)
    data = WasteCollection.objects.values('waste_type').annotate(
        total=Sum('quantity_kg')
    ).order_by('-total')
    
    writer = csv.writer(response)
    
    # 3. Write CSV header
    writer.writerow(['Waste Type', 'Total Quantity (kg)']) 
    
    # 4. Write data rows
    for row in data:
        writer.writerow([row['waste_type'], row['total']])
        
    return response

# --- Placeholder Views for Other Actions ---
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.contrib import messages

@login_required
def generate_charts_view(request):
    """
    Handles the 'Generate Charts' quick action link.
    It simply redirects the user to the dedicated chart dashboard page.
    """
    if request.user.user_type != 'admin':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
    
    # Redirects the user to the URL defined as 'chart_dashboard' 
    # to render the charts on a dedicated page.
    messages.info(request, "Displaying charts dashboard for detailed analytics.")
    return redirect('chart_dashboard')

# In core/views.py (Make sure to import models and necessary functions like Sum, Avg, F)

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db.models import Sum, Avg, F

# Placeholder for the old view (now removed)
# @login_required
# def generate_charts_view(request):
#     # This view is now replaced by the direct chart_dashboard_view URL
#     return redirect('chart_dashboard') 


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db.models import Sum, Avg, F 

@login_required
def chart_dashboard_view(request):
    """
    Renders the Chart Dashboard with all analytical data structured for charting.
    """
    if request.user.user_type != 'admin':
        messages.error(request, "Access denied. Only administrators can view charts.")
        return redirect('dashboard')

    # --- Data Generation ---
    
    # 1. Waste Trends
    waste_trends_qs = WasteCollection.objects.values('waste_type').annotate(
        total=Sum('quantity_kg')
    ).order_by('-total')
    
    # 2. Zone Performance
    zone_performance_qs = WasteCollection.objects.values('collection_point__zone').annotate(
        total_waste=Sum('quantity_kg'),
        avg_rate=Avg('rate_per_kg')
    )
    
    # 3. Biodigester Efficiency (Ensured .values() is present)
    biodigester_efficiency_qs = Biodigester.objects.annotate(
        efficiency=(Avg('current_level') * 100) / Avg('capacity_kg') 
    ).values('efficiency') 
    
    # 4. Sales Data
    sales_data_qs = Distribution.objects.annotate(
        calculated_total_price=F('gas_amount_kg') * F('price_per_kg') 
    ).values('distribution_date__date').annotate(
        daily_sales=Sum('calculated_total_price'),
        daily_volume=Sum('gas_amount_kg')
    ).order_by('distribution_date__date')[:30]
    
    # --- CRITICAL FIX: Convert QuerySets to lists ---
    # This guarantees the data is a standard Python structure (list of dicts)
    # before it is passed to the template for JSON serialization.
    return render(request, 'core/chart_dashboard.html', {
        'waste_trends': list(waste_trends_qs),
        'zone_performance': list(zone_performance_qs),
        'biodigester_efficiency': list(biodigester_efficiency_qs),
        'sales_data': list(sales_data_qs),
    })
     
@login_required
def print_reports_view(request):
    # This view would typically render a simplified, print-friendly version 
    # of the admin report template.
    messages.info(request, "Opening print preview...")
    return redirect('admin_reports') # Or render a specific print template

@login_required
def user_management(request):
    if request.user.user_type != 'admin':
        messages.error(request, "Access denied.")
        return redirect('dashboard')
    
    users = CustomUser.objects.all().order_by('-date_joined')
    return render(request, 'core/user_management.html', {'users': users})

# views.py (Update)

from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Count
from collections import defaultdict # Import defaultdict

@login_required
def admin_management_view(request):
    if request.user.user_type != 'admin':
        messages.error(request, "Access denied. Only administrators can view this page.")
        return redirect('dashboard')

    # ... Reports Data (Keep as is) ...
    recent_reports = SystemReport.objects.select_related('generated_by').order_by('-generation_date')[:10]
    report_type_counts = SystemReport.objects.values('report_type').annotate(
        count=Count('id')
    ).order_by('-count')

    # --- 2. User Data (CRITICAL CHANGE HERE) ---
    all_users = CustomUser.objects.all().order_by('user_type', 'username')
    
    # Aggregate counts into a list of dictionaries (original)
    user_count_list = CustomUser.objects.values('user_type').annotate(
        count=Count('user_type')
    )
    
    # Convert the list of dictionaries into a single lookup dictionary
    # Example: {'admin': {'count': 3}, 'customer': {'count': 50}}
    user_counts_dict = {
        item['user_type']: item for item in user_count_list
    }

    # --- 3. Context Preparation ---
    context = {
        # Reports
        'recent_reports': recent_reports,
        'report_type_counts': report_type_counts,
        
        # Users
        'all_users': all_users,
        'user_counts': user_counts_dict, # Pass the dictionary
        'user_types': CustomUser.USER_TYPES
    }

    return render(request, 'core/admin_management.html', context)
@login_required
def profile(request):
    if request.method == 'POST':
        form = UserProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated successfully!')
            return redirect('profile')
    else:
        form = UserProfileForm(instance=request.user)
    
    return render(request, 'core/profile.html', {'form': form})

from django.views.generic import ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import SystemReport
from django.shortcuts import get_object_or_404, render

# NOTE: Assumes 'CustomUser' is available and SystemReport is imported correctly.

class SystemReportListView(LoginRequiredMixin, ListView):
    """
    Displays a list of all system reports.
    Requires user login.
    """
    model = SystemReport
    template_name = 'core/admin_reports.html'
    context_object_name = 'reports'
    paginate_by = 10 # Optional: Add pagination

    def get_queryset(self):
        # Optional: Only show reports generated by the current user,
        # or all reports if the user has specific permission.
        # For simplicity, let's show all reports, ordered by generation date.
        return SystemReport.objects.all().order_by('-generation_date')

class SystemReportDetailView(LoginRequiredMixin, DetailView):
    """
    Displays the details of a single system report.
    Requires user login.
    """
    model = SystemReport
    template_name = 'core/report_detail.html'
    context_object_name = 'report'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # The 'report_data' is a JSONField, which can be passed directly to the template
        # for rendering (e.g., iterating through keys/values or using a specific
        # rendering logic based on report_type).
        report = self.get_object()
        # You might want to process the JSON data here before sending it to the template
        # to simplify template logic, e.g., context['processed_data'] = process(report.report_data)
        return context

# Note: For 'Create', 'Update', and 'Delete' views, you would typically use 
# CreateView, UpdateView, and DeleteView, respectively, and potentially 
# forms.ModelForm for form handling.