import os
import django
import sys

# WARNING: Replace 'gks.settings' with your actual Django project settings module if different.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gks.settings') 
django.setup()

from django.contrib.auth import get_user_model
from django.db import connection

User = get_user_model()

# --- CONFIGURATION ---
# The primary key column might be different in your setup. 
# Adjust 'users_user' if your custom user model is not in an app named 'users'.
CUSTOM_USER_TABLE_NAME = 'users_user'
# ---------------------

def reset_database():
    print("Resetting database...")
    
    # Delete all users
    User.objects.all().delete()
    print("Deleted all existing users.")
    
    # Reset SQLite sequences (Crucial for fresh IDs in SQLite)
    if 'sqlite' in connection.settings_dict['ENGINE']:
        with connection.cursor() as cursor:
            # The table name must be correct for the custom user model (e.g., appname_modelname)
            cursor.execute(f"DELETE FROM sqlite_sequence WHERE name='{CUSTOM_USER_TABLE_NAME}'")
            print(f"Reset sequence for table '{CUSTOM_USER_TABLE_NAME}'.")
    
    print("Database reset complete.")

def create_users():
    print("\nCreating users...")
    
    users_to_create = [
        # Regular Admin User
        {"username": "admin_user", "password": "passwordadmin", "email": "admin@example.com", 
         "user_type": "admin", "company_name": "Platform Admin", "phone_number": "0700111222"},
         
        # Seller User
        {"username": "seller1", "password": "passwordseller1", "email": "seller1@example.com", 
         "user_type": "seller", "company_name": "MegaStore Co.", "phone_number": "0711333444"},
         
        # Supplier User
        {"username": "supplier_a", "password": "passwordsupplierA", "email": "supplier_a@example.com", 
         "user_type": "supplier", "company_name": "Global Supply Ltd.", "phone_number": "0722555666"},
    ]

    # Create normal users
    for data in users_to_create:
        try:
            # create_user handles password hashing
            user = User.objects.create_user(
                username=data["username"],
                email=data["email"],
                password=data["password"],
                user_type=data["user_type"],
                company_name=data["company_name"],
                phone_number=data["phone_number"]
            )
            print(f"[OK] User created: {user.username} / {data['password']} (Type: {user.user_type}, Company: {user.company_name})")
        except Exception as e:
            print(f"[ERROR] Error creating user {data['username']}: {e}")

    # Create Superuser (Requested as another user, but with superuser rights)
    superuser_data = {
        "username": "superadmin", 
        "password": "supersecretpassword", 
        "email": "superadmin@example.com",
        "user_type": "admin",
        "company_name": "Super Admin Global",
        "phone_number": "0799888777"
    }

    try:
        # create_superuser automatically sets is_staff=True and is_superuser=True
        superuser = User.objects.create_superuser(
            username=superuser_data["username"],
            email=superuser_data["email"],
            password=superuser_data["password"],
            user_type=superuser_data["user_type"],
            company_name=superuser_data["company_name"],
            phone_number=superuser_data["phone_number"]
        )
        print(f"[OK] **Superuser** created: {superuser.username} / {superuser_data['password']} (Company: {superuser.company_name})")
    except Exception as e:
        print(f"[ERROR] Error creating superuser: {e}")

def verify_users():
    print("\nVerifying users...")
    users = User.objects.all()
    
    for user in users:
        # Retrieve the plain-text password for verification (best effort guess)
        if user.username == 'superadmin':
            test_password = 'supersecretpassword'
        elif user.username == 'admin_user':
            test_password = 'passwordadmin'
        elif user.username == 'seller1':
            test_password = 'passwordseller1'
        elif user.username == 'supplier_a':
            test_password = 'passwordsupplierA'
        else:
            # Fallback for unexpected users
            test_password = 'testpassword'

        print(f"User: {user.username}, Type: {user.user_type}, Is Superuser: {user.is_superuser}")
        
        # Test password
        if user.check_password(test_password):
            print(f"  [OK] Password verification successful (Used: {test_password})")
        else:
            print(f"  [ERROR] Password verification failed (Attempted: {test_password})")

if __name__ == '__main__':
    reset_database()
    create_users()
    verify_users()
    print("\n" + "="*70)
    print("SETUP COMPLETE! Credentials:")
    print("  Admin User:     admin_user / passwordadmin")
    print("  Seller User:    seller1 / passwordseller1")
    print("  Supplier User:  supplier_a / passwordsupplierA")
    print("  Superuser:      superadmin / supersecretpassword")
    print("="*70)
