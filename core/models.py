from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from django.utils import timezone
from decimal import Decimal 

class CustomUser(AbstractUser):
    USER_TYPES = (
        ('admin', 'Admin'),
        ('waste_collector', 'Waste Collector'),
        ('kitchen_manager', 'Community Kitchen Manager'),
        ('distributor', 'Distributor'),
        ('customer', 'Customer'),
    )
    
    user_type = models.CharField(max_length=20, choices=USER_TYPES, default='customer')
    phone = models.CharField(max_length=15, blank=True, null=True)
    zone = models.CharField(max_length=50, blank=True, null=True)
    is_verified = models.BooleanField(default=False)
    
    # Fix the groups and user_permissions conflicts
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name="customuser_groups",
        related_query_name="customuser",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="customuser_permissions",
        related_query_name="customuser",
    )
    
    def __str__(self):
        return f"{self.username} - {self.get_user_type_display()}"

class WasteCollectionPoint(models.Model):
    ZONES = (
        ('western', 'Western'),
        ('kisumu', 'Kisumu'),
        ('kakamega', 'Kakamega'),
        ('nyakach', 'Nyakach'),
        ('nyando', 'Nyando'),
    )
    
    WASTE_TYPES = (
        ('agricultural', 'Agricultural Waste'),
        ('household', 'Household Waste'),
        ('animal', 'Animal Waste'),
    )
    
    name = models.CharField(max_length=100)
    zone = models.CharField(max_length=20, choices=ZONES)
    location = models.CharField(max_length=200)
    manager = models.ForeignKey(CustomUser, on_delete=models.CASCADE, limit_choices_to={'user_type': 'waste_collector'})
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.name} - {self.zone}"

class WasteCollection(models.Model):
    collection_point = models.ForeignKey(WasteCollectionPoint, on_delete=models.CASCADE)
    customer = models.ForeignKey(
        'CustomUser', 
        on_delete=models.CASCADE, 
        limit_choices_to={'user_type': 'customer'}
    )
    waste_type = models.CharField(max_length=20, choices=WasteCollectionPoint.WASTE_TYPES)
    quantity_kg = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    collection_date = models.DateTimeField(auto_now_add=True)
    
    # FIX for TypeError: Use Decimal() for the default value
    rate_per_kg = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('10.00'))
    
    payment_type = models.CharField(max_length=10, choices=[('cash', 'Cash'), ('accrual', 'Accrual')])
    is_paid = models.BooleanField(default=False)
    invoice_number = models.CharField(max_length=20, unique=True, blank=True) # Added blank=True for model creation
    
    @property
    def total_amount(self):
        # This calculation is now safe as both operands are Decimal types
        return self.quantity_kg * self.rate_per_kg
    
    def save(self, *args, **kwargs):
        # FIX for AttributeError: 'NoneType' object has no attribute 'strftime'
        # Generate the invoice number only upon creation (when it's missing)
        if not self.invoice_number:
            # Use timezone.now() instead of the unsaved self.collection_date
            current_time = timezone.now()
            
            # Note: Using .count() for the sequential number is prone to race conditions 
            # in production, but keeps your current logic intact for now.
            next_id = WasteCollection.objects.count() + 1
            self.invoice_number = f"INV-{current_time.strftime('%Y%m%d')}-{next_id}"
            
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.invoice_number} - {self.customer.username}"

class Biodigester(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    capacity_kg = models.DecimalField(max_digits=10, decimal_places=2)
    current_level = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    manager = models.ForeignKey(CustomUser, on_delete=models.CASCADE, limit_choices_to={'user_type': 'kitchen_manager'})
    is_active = models.BooleanField(default=True)
    
    def efficiency(self):
        if self.capacity_kg > 0:
            return (self.current_level / self.capacity_kg) * 100
        return 0
    
    def __str__(self):
        return f"{self.name} - {self.location}"

class GasCylinder(models.Model):
    CYLINDER_SIZES = (
        ('6kg', '6kg'),
        ('13kg', '13kg'),
        ('50kg', '50kg'),
    )
    
    cylinder_id = models.CharField(max_length=50, unique=True)
    size = models.CharField(max_length=10, choices=CYLINDER_SIZES)
    current_gas_level = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    max_capacity = models.DecimalField(max_digits=10, decimal_places=2)
    is_available = models.BooleanField(default=True)
    location = models.CharField(max_length=200)
    
    def __str__(self):
        return f"{self.cylinder_id} - {self.size}"

class Distribution(models.Model):
    cylinder = models.ForeignKey(GasCylinder, on_delete=models.CASCADE)
    distributor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, limit_choices_to={'user_type': 'distributor'})
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='distributions', limit_choices_to={'user_type': 'customer'})
    distribution_date = models.DateTimeField(auto_now_add=True)
    gas_amount_kg = models.DecimalField(max_digits=10, decimal_places=2)
    price_per_kg = models.DecimalField(max_digits=10, decimal_places=2, default=150.00)
    payment_method = models.CharField(max_length=20, choices=[('mpesa', 'M-Pesa'), ('cash', 'Cash'), ('accrual', 'Accrual Redemption')])
    is_delivered = models.BooleanField(default=False)
    
    @property
    def total_price(self):
        return self.gas_amount_kg * self.price_per_kg
    
    def __str__(self):
        return f"Distribution {self.id} - {self.customer.username}"

class CustomerAccrual(models.Model):
    customer = models.OneToOneField(CustomUser, on_delete=models.CASCADE, limit_choices_to={'user_type': 'customer'})
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    last_updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.customer.username} - KES {self.balance}"

class OpenKitchenSession(models.Model):
    kitchen_manager = models.ForeignKey(
        CustomUser, 
        on_delete=models.CASCADE, 
        limit_choices_to={'user_type': 'kitchen_manager'},
        related_name='managed_kitchen_sessions'  # Add related_name
    )
    customer = models.ForeignKey(
        CustomUser, 
        on_delete=models.CASCADE, 
        limit_choices_to={'user_type': 'customer'},
        related_name='customer_kitchen_sessions'  # Add related_name
    )
    session_date = models.DateTimeField(auto_now_add=True)
    duration_minutes = models.IntegerField()
    gas_used_kg = models.DecimalField(max_digits=10, decimal_places=2)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=20)
    is_paid = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Kitchen Session - {self.customer.username}"

class SystemReport(models.Model):
    REPORT_TYPES = (
        ('waste_trends', 'Waste Trends'),
        ('zone_performance', 'Zone Performance'),
        ('biodigester_efficiency', 'Biodigester Efficiency'),
        ('sales_revenue', 'Sales & Revenue'),
        ('compliance', 'Compliance Report'),
    )
    
    report_type = models.CharField(max_length=30, choices=REPORT_TYPES)
    generated_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    generation_date = models.DateTimeField(auto_now_add=True)
    period_start = models.DateField()
    period_end = models.DateField()
    report_data = models.JSONField()
    
    def __str__(self):
        return f"{self.get_report_type_display()} - {self.period_start} to {self.period_end}"