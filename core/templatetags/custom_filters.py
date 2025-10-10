# core/templatetags/custom_filters.py

from django import template

register = template.Library()

@register.filter
def get_item(dictionary, key):
    """
    Looks up a key in a dictionary.
    Usage: {{ dictionary|get_item:key }}
    """
    return dictionary.get(key)
