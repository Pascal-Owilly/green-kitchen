from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from django.views.generic import RedirectView
from core import views
from django.conf import settings # <-- Must be imported
from django.conf.urls.static import static # <-- Must be imported

urlpatterns = [
    # ----------------------------------------------------------------------
    # 1. CRITICAL FIX: CUSTOM ADMIN URLs MUST COME BEFORE admin.site.urls
    # ----------------------------------------------------------------------
    
    # Quick Action URLs (These must be highest priority to avoid being caught by admin.site.urls)
    path('admin/reports/export/', views.export_report_data, name='export_report_data'),
    # path('admin/reports/charts/', views.generate_charts_view, name='generate_charts'), # <-- REMOVE THIS DUPLICATE LINE
    path('admin/reports/print/', views.print_reports_view, name='print_reports'),

    # Keep the line that points to the actual chart rendering view:
    path('admin/reports/charts/', views.chart_dashboard_view, name='chart_dashboard'),

    # Admin Dashboard/Management URLs (Also prioritized)
    path('admin/reports/', views.admin_reports, name='admin_reports'), 
    path('admin/users/', views.user_management, name='user_management'),
    path('admin-management/', views.admin_management_view, name='admin_management'), 
    
    # -----------------------------------------------------
    # 2. STANDARD DJANGO ADMIN & AUTHENTICATION URLs
    # -----------------------------------------------------
    path('admin/', admin.site.urls), # Everything starting with 'admin/' NOT matched above goes here.
    path('login/', auth_views.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    
    # -----------------------------------------------------
    # 3. GENERAL USER & CORE FUNCTIONALITY URLs
    # -----------------------------------------------------
    path('', views.dashboard, name='dashboard'), # Root/Dashboard
    path('profile/', views.profile, name='profile'),
    
    # Waste Collector URLs
    path('collection-points/add/', views.add_collection_point, name='add_collection_point'),
    path('waste-collections/', views.waste_collection_view, name='waste_collections'),
    
    # Kitchen Manager URLs
    path('biodigester/', views.biodigester_management, name='biodigester_management'),
    
    # Distributor URLs
    path('cylinders/add/', views.add_gas_cylinder, name='add_gas_cylinder'),
    path('distribution/', views.distribution_management, name='distribution_management'),
    
    # Customer URLs
    path('my-accruals/', views.my_accruals, name='my_accruals'),
    path('open-kitchens/', views.open_kitchens, name='open_kitchens'),
    
    # -----------------------------------------------------
    # 4. SYSTEM REPORT LIST/DETAIL URLs (Adjusted)
    # -----------------------------------------------------
    # NOTE: You previously mapped 'reports/' to views.admin_reports (a function view).
    # If you want to use the SystemReportListView you created earlier, replace
    # views.admin_reports with views.SystemReportListView.as_view().
    path('reports/', views.admin_reports, name='report_list'), 
    
    # If you have a SystemReportDetailView, ensure it is also prefixed (e.g., 'reports/<int:pk>/')
    # to avoid conflict with other URLs. (It was missing in your last update)
    # path('reports/<int:pk>/', views.SystemReportDetailView.as_view(), name='report_detail'),
]

# ADD THIS BLOCK at the very bottom:
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0]) 
    # NOTE: Using STATICFILES_DIRS[0] is often more reliable than STATIC_ROOT in development.