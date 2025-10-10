from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (
    CustomUser,
    WasteCollectionPoint,
    WasteCollection,
    Biodigester,
    GasCylinder,
    Distribution,
    CustomerAccrual,
    OpenKitchenSession,
    SystemReport
)


# 1. CustomUser Admin Registration
class CustomUserAdmin(UserAdmin):
    # Add your custom fields to the fieldsets and list display
    model = CustomUser
    list_display = UserAdmin.list_display + ('user_type', 'phone', 'is_verified')
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('user_type', 'phone', 'zone', 'is_verified')}),
    )
    # Ensure add_fieldsets is also updated if you use a custom user creation form
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('user_type', 'phone', 'zone', 'is_verified')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
# ---

# 2. Register other models
@admin.register(WasteCollectionPoint)
class WasteCollectionPointAdmin(admin.ModelAdmin):
    list_display = ('name', 'zone', 'manager', 'is_active')
    list_filter = ('zone', 'is_active')
    search_fields = ('name', 'location')
    raw_id_fields = ('manager',) # Use raw_id_fields for ForeignKey to CustomUser

@admin.register(WasteCollection)
class WasteCollectionAdmin(admin.ModelAdmin):
    list_display = ('invoice_number', 'customer', 'collection_point', 'quantity_kg', 'total_amount', 'payment_type', 'collection_date')
    list_filter = ('collection_point', 'waste_type', 'payment_type', 'is_paid')
    search_fields = ('invoice_number', 'customer__username')
    readonly_fields = ('total_amount',)
    raw_id_fields = ('collection_point', 'customer')

@admin.register(Biodigester)
class BiodigesterAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'capacity_kg', 'current_level', 'efficiency', 'manager', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name', 'location')
    raw_id_fields = ('manager',)

@admin.register(GasCylinder)
class GasCylinderAdmin(admin.ModelAdmin):
    list_display = ('cylinder_id', 'size', 'max_capacity', 'current_gas_level', 'is_available', 'location')
    list_filter = ('size', 'is_available')
    search_fields = ('cylinder_id', 'location')

@admin.register(Distribution)
class DistributionAdmin(admin.ModelAdmin):
    list_display = ('customer', 'cylinder', 'distributor', 'gas_amount_kg', 'total_price', 'payment_method', 'is_delivered', 'distribution_date')
    list_filter = ('payment_method', 'is_delivered')
    search_fields = ('customer__username', 'cylinder__cylinder_id')
    readonly_fields = ('total_price',)
    raw_id_fields = ('cylinder', 'distributor', 'customer')

@admin.register(CustomerAccrual)
class CustomerAccrualAdmin(admin.ModelAdmin):
    list_display = ('customer', 'balance', 'last_updated')
    search_fields = ('customer__username',)
    readonly_fields = ('last_updated',)
    raw_id_fields = ('customer',)

@admin.register(OpenKitchenSession)
class OpenKitchenSessionAdmin(admin.ModelAdmin):
    list_display = ('customer', 'kitchen_manager', 'duration_minutes', 'gas_used_kg', 'cost', 'payment_method', 'is_paid', 'session_date')
    list_filter = ('payment_method', 'is_paid')
    search_fields = ('customer__username', 'kitchen_manager__username')
    raw_id_fields = ('kitchen_manager', 'customer')

@admin.register(SystemReport)
class SystemReportAdmin(admin.ModelAdmin):
    list_display = ('report_type', 'generated_by', 'generation_date', 'period_start', 'period_end')
    list_filter = ('report_type',)
    readonly_fields = ('generation_date', 'report_data')
    raw_id_fields = ('generated_by',)