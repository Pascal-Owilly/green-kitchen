from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import *

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'first_name', 'last_name', 'phone', 'user_type', 'zone')

class WasteCollectionPointForm(forms.ModelForm):
    class Meta:
        model = WasteCollectionPoint
        fields = ['name', 'zone', 'location', 'manager', 'is_active']
        
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-input'}),
            'zone': forms.Select(attrs={'class': 'form-select'}),
            'location': forms.TextInput(attrs={'class': 'form-input'}),
            'manager': forms.Select(attrs={'class': 'form-select'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-checkbox'}),
        }
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Apply the general Tailwind styling class to all fields for consistency
        tailwind_classes = 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
        
        for field_name, field in self.fields.items():
            if field_name != 'is_active': # Skip the checkbox
                current_classes = field.widget.attrs.get('class', '')
                field.widget.attrs['class'] = f'{current_classes} {tailwind_classes}' 

class WasteCollectionForm(forms.ModelForm):
    class Meta:
        model = WasteCollection
        fields = ['collection_point', 'customer', 'waste_type', 'quantity_kg', 'payment_type']
    
    def __init__(self, *args, **kwargs):
        self.collector = kwargs.pop('collector', None)
        super().__init__(*args, **kwargs)
        
        if self.collector:
            self.fields['collection_point'].queryset = WasteCollectionPoint.objects.filter(manager=self.collector)
            self.fields['customer'].queryset = CustomUser.objects.filter(user_type='customer')

class GasCylinderForm(forms.ModelForm):
    class Meta:
        model = GasCylinder
        fields = ['cylinder_id', 'size', 'max_capacity', 'location', 'is_available']
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        # Apply Tailwind classes to all fields for consistent styling
        tailwind_classes = 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
        
        for field_name, field in self.fields.items():
            if field_name != 'is_available':  # Skip the checkbox field
                field.widget.attrs['class'] = tailwind_classes
            else:
                field.widget.attrs['class'] = 'form-checkbox h-4 w-4 text-green-600 border-gray-300 rounded'

class DistributionForm(forms.ModelForm):
    class Meta:
        model = Distribution
        fields = ['cylinder', 'customer', 'gas_amount_kg', 'payment_method']
    
    def __init__(self, *args, **kwargs):
        self.distributor = kwargs.pop('distributor', None)
        super().__init__(*args, **kwargs)
        
        if self.distributor:
            self.fields['cylinder'].queryset = GasCylinder.objects.filter(is_available=True)
            self.fields['customer'].queryset = CustomUser.objects.filter(user_type='customer')

class OpenKitchenSessionForm(forms.ModelForm):
    class Meta:
        model = OpenKitchenSession
        fields = ['kitchen_manager', 'duration_minutes', 'gas_used_kg']
    
    def __init__(self, *args, **kwargs):
        self.customer = kwargs.pop('customer', None)
        super().__init__(*args, **kwargs)
        
        self.fields['kitchen_manager'].queryset = CustomUser.objects.filter(user_type='kitchen_manager')

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'phone', 'zone']