-- Green Kitchen System Database Schema
-- Create all necessary tables for the organic waste management platform

-- Users table for authentication and basic user info
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('waste_generator', 'collector', 'biodigester_kitchen', 'end_buyer', 'admin')),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    location VARCHAR(255),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Waste generators profile
CREATE TABLE IF NOT EXISTS waste_generators (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    business_name VARCHAR(255),
    business_type VARCHAR(100),
    daily_waste_volume DECIMAL(10,2),
    address TEXT,
    coordinates POINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Collectors profile
CREATE TABLE IF NOT EXISTS collectors (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    vehicle_type VARCHAR(100),
    vehicle_capacity DECIMAL(10,2),
    license_number VARCHAR(50),
    service_areas TEXT[],
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_collections INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Biodigester kitchens profile
CREATE TABLE IF NOT EXISTS biodigester_kitchens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    facility_name VARCHAR(255) NOT NULL,
    capacity DECIMAL(10,2) NOT NULL,
    location TEXT NOT NULL,
    coordinates POINT,
    operational_status VARCHAR(20) DEFAULT 'active' CHECK (operational_status IN ('active', 'maintenance', 'offline')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- End buyers profile
CREATE TABLE IF NOT EXISTS end_buyers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    business_name VARCHAR(255),
    business_type VARCHAR(100),
    monthly_consumption DECIMAL(10,2),
    delivery_address TEXT,
    coordinates POINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Waste collection requests
CREATE TABLE IF NOT EXISTS collection_requests (
    id SERIAL PRIMARY KEY,
    waste_generator_id INTEGER REFERENCES waste_generators(id),
    collector_id INTEGER REFERENCES collectors(id),
    waste_type VARCHAR(100) NOT NULL,
    estimated_weight DECIMAL(10,2) NOT NULL,
    actual_weight DECIMAL(10,2),
    collection_date DATE NOT NULL,
    collection_time TIME NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'assigned', 'collected', 'delivered', 'cancelled')),
    pickup_address TEXT NOT NULL,
    special_instructions TEXT,
    price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Biodigester operations
CREATE TABLE IF NOT EXISTS biodigester_operations (
    id SERIAL PRIMARY KEY,
    kitchen_id INTEGER REFERENCES biodigester_kitchens(id),
    digester_number INTEGER NOT NULL,
    waste_input_kg DECIMAL(10,2) NOT NULL,
    biogas_output_m3 DECIMAL(10,2),
    temperature DECIMAL(5,2),
    ph_level DECIMAL(4,2),
    pressure_kpa DECIMAL(8,2),
    operation_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'normal' CHECK (status IN ('normal', 'warning', 'critical')),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Biogas cylinders inventory
CREATE TABLE IF NOT EXISTS biogas_cylinders (
    id SERIAL PRIMARY KEY,
    kitchen_id INTEGER REFERENCES biodigester_kitchens(id),
    cylinder_code VARCHAR(50) UNIQUE NOT NULL,
    capacity_m3 DECIMAL(8,2) NOT NULL,
    current_volume DECIMAL(8,2) DEFAULT 0,
    status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'filled', 'delivered', 'maintenance')),
    last_filled DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders for biogas cylinders
CREATE TABLE IF NOT EXISTS cylinder_orders (
    id SERIAL PRIMARY KEY,
    end_buyer_id INTEGER REFERENCES end_buyers(id),
    cylinder_id INTEGER REFERENCES biogas_cylinders(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    delivery_date DATE,
    delivery_address TEXT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
    delivery_status VARCHAR(20) DEFAULT 'pending' CHECK (delivery_status IN ('pending', 'in_transit', 'delivered', 'cancelled')),
    payment_method VARCHAR(50),
    mpesa_transaction_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments tracking
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    payer_id INTEGER REFERENCES users(id),
    payee_id INTEGER REFERENCES users(id),
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'KES',
    payment_type VARCHAR(50) NOT NULL CHECK (payment_type IN ('collection_fee', 'cylinder_purchase', 'commission')),
    reference_id INTEGER, -- Can reference collection_requests or cylinder_orders
    reference_type VARCHAR(50),
    payment_method VARCHAR(50) NOT NULL,
    mpesa_transaction_id VARCHAR(100),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- System analytics and metrics
CREATE TABLE IF NOT EXISTS system_metrics (
    id SERIAL PRIMARY KEY,
    metric_date DATE NOT NULL DEFAULT CURRENT_DATE,
    total_waste_collected_kg DECIMAL(12,2) DEFAULT 0,
    total_biogas_produced_m3 DECIMAL(12,2) DEFAULT 0,
    co2_emissions_reduced_kg DECIMAL(12,2) DEFAULT 0,
    active_users INTEGER DEFAULT 0,
    total_revenue DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(metric_date)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_collection_requests_status ON collection_requests(status);
CREATE INDEX IF NOT EXISTS idx_collection_requests_date ON collection_requests(collection_date);
CREATE INDEX IF NOT EXISTS idx_cylinder_orders_status ON cylinder_orders(delivery_status);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_biodigester_operations_date ON biodigester_operations(operation_date);
