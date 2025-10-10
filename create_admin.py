import os
import django
import sys

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gks.settings')
django.setup()

from django.contrib.auth import get_user_model
from django.db import connection

User = get_user_model()

def reset_database():
    print("Resetting database...")
    
    # Delete all users
    User.objects.all().delete()
    print("Deleted all existing users")
    
    # Reset SQLite sequences
    with connection.cursor() as cursor:
        cursor.execute("DELETE FROM sqlite_sequence WHERE name='core_customuser'")
    
    print("Database reset complete")

def create_users():
    print("Creating users...")
    
    # Create admin user
    try:
        admin = User.objects.create_user(
            username='admin',
            email='admin@greenkitchen.com',
            password='admin123'
        )
        admin.user_type = 'admin'
        admin.phone = '0722290417'
        admin.zone = 'kisumu'
        admin.is_staff = True
        admin.is_superuser = True
        admin.save()
        print("[OK] Admin user created: admin / admin123")
    except Exception as e:
        print(f"[ERROR] Error creating admin: {e}")

    # Create customer user
    try:
        customer = User.objects.create_user(
            username='customer1',
            email='customer@greenkitchen.com',
            password='customer123'
        )
        customer.user_type = 'customer'
        customer.phone = '0711000000'
        customer.zone = 'nyakach'
        customer.save()
        print("[OK] Customer user created: customer1 / customer123")
    except Exception as e:
        print(f"[ERROR] Error creating customer: {e}")

    # Create waste collector
    try:
        collector = User.objects.create_user(
            username='collector1',
            email='collector@greenkitchen.com',
            password='collector123'
        )
        collector.user_type = 'waste_collector'
        collector.phone = '0733383339'
        collector.zone = 'western'
        collector.save()
        print("[OK] Collector user created: collector1 / collector123")
    except Exception as e:
        print(f"[ERROR] Error creating collector: {e}")

    # Create kitchen manager
    try:
        kitchen = User.objects.create_user(
            username='kitchen1',
            email='kitchen@greenkitchen.com',
            password='kitchen123'
        )
        kitchen.user_type = 'kitchen_manager'
        kitchen.phone = '0711217216'
        kitchen.zone = 'kisumu'
        kitchen.save()
        print("[OK] Kitchen manager created: kitchen1 / kitchen123")
    except Exception as e:
        print(f"[ERROR] Error creating kitchen manager: {e}")

    # Create distributor
    try:
        distributor = User.objects.create_user(
            username='distributor1',
            email='distributor@greenkitchen.com',
            password='distributor123'
        )
        distributor.user_type = 'distributor'
        distributor.phone = '0733454944'
        distributor.zone = 'kakamega'
        distributor.save()
        print("[OK] Distributor created: distributor1 / distributor123")
    except Exception as e:
        print(f"[ERROR] Error creating distributor: {e}")

def verify_users():
    print("\nVerifying users...")
    users = User.objects.all()
    
    for user in users:
        print(f"User: {user.username}, Type: {user.user_type}")
        # Test password
        test_password = 'admin123' if user.username == 'admin' else f'{user.username.replace("1", "")}123'
        if user.check_password(test_password):
            print(f"  [OK] Password verification successful")
        else:
            print(f"  [ERROR] Password verification failed")

if __name__ == '__main__':
    reset_database()
    create_users()
    verify_users()
    print("\n" + "="*50)
    print("SETUP COMPLETE! Try logging in with:")
    print("   admin / admin123")
    print("   customer1 / customer123")
    print("   collector1 / collector123")
    print("   kitchen1 / kitchen123")
    print("   distributor1 / distributor123")
    print("="*50)