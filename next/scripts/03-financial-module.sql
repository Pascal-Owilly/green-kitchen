-- Financial Module Enhancement for Green Kitchen System
-- Add tables for weighing stations, receipts, redemptions, and market kitchens

-- Collection centers/weighing stations
CREATE TABLE IF NOT EXISTS collection_centers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location TEXT NOT NULL,
    coordinates POINT,
    manager_id INTEGER REFERENCES users(id),
    operational_status VARCHAR(20) DEFAULT 'active' CHECK (operational_status IN ('active', 'maintenance', 'closed')),
    weighing_scale_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payment receipts for waste collection
CREATE TABLE IF NOT EXISTS payment_receipts (
    id SERIAL PRIMARY KEY,
    receipt_number VARCHAR(50) UNIQUE NOT NULL,
    collection_request_id INTEGER REFERENCES collection_requests(id),
    collection_center_id INTEGER REFERENCES collection_centers(id),
    waste_generator_id INTEGER REFERENCES waste_generators(id),
    collector_id INTEGER REFERENCES collectors(id),
    actual_weight DECIMAL(10,2) NOT NULL,
    rate_per_kg DECIMAL(8,2) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    mpesa_transaction_id VARCHAR(100),
    receipt_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'paid' CHECK (status IN ('paid', 'pending', 'cancelled'))
);

-- Waste credits for monthly payment users
CREATE TABLE IF NOT EXISTS waste_credits (
    id SERIAL PRIMARY KEY,
    waste_generator_id INTEGER REFERENCES waste_generators(id),
    credit_balance DECIMAL(10,2) DEFAULT 0.00,
    total_earned DECIMAL(10,2) DEFAULT 0.00,
    total_redeemed DECIMAL(10,2) DEFAULT 0.00,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Credit transactions (earning and redemption)
CREATE TABLE IF NOT EXISTS credit_transactions (
    id SERIAL PRIMARY KEY,
    waste_generator_id INTEGER REFERENCES waste_generators(id),
    transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('earned', 'redeemed')),
    amount DECIMAL(10,2) NOT NULL,
    reference_id INTEGER, -- collection_request_id or cylinder_order_id
    reference_type VARCHAR(50),
    description TEXT,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Market biogas kitchens for pay-per-use
CREATE TABLE IF NOT EXISTS market_kitchens (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    market_location TEXT NOT NULL,
    coordinates POINT,
    manager_id INTEGER REFERENCES users(id),
    number_of_burners INTEGER DEFAULT 1,
    hourly_rate DECIMAL(8,2) NOT NULL,
    operational_status VARCHAR(20) DEFAULT 'active' CHECK (operational_status IN ('active', 'maintenance', 'closed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Market kitchen usage sessions
CREATE TABLE IF NOT EXISTS kitchen_usage_sessions (
    id SERIAL PRIMARY KEY,
    market_kitchen_id INTEGER REFERENCES market_kitchens(id),
    customer_phone VARCHAR(20) NOT NULL,
    customer_name VARCHAR(255),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    duration_minutes INTEGER,
    total_cost DECIMAL(10,2),
    payment_method VARCHAR(50),
    mpesa_transaction_id VARCHAR(100),
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Paybill transactions for cylinder sales
CREATE TABLE IF NOT EXISTS paybill_transactions (
    id SERIAL PRIMARY KEY,
    paybill_number VARCHAR(20) NOT NULL,
    account_number VARCHAR(50) NOT NULL, -- cylinder_id or customer_id
    customer_phone VARCHAR(20) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    mpesa_receipt_number VARCHAR(100) UNIQUE NOT NULL,
    transaction_time TIMESTAMP NOT NULL,
    reference_id INTEGER, -- cylinder_order_id
    reference_type VARCHAR(50),
    status VARCHAR(20) DEFAULT 'completed' CHECK (status IN ('completed', 'failed', 'reversed')),
    processed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Monthly payment preferences for waste generators
CREATE TABLE IF NOT EXISTS payment_preferences (
    id SERIAL PRIMARY KEY,
    waste_generator_id INTEGER REFERENCES waste_generators(id) UNIQUE,
    payment_type VARCHAR(20) NOT NULL CHECK (payment_type IN ('immediate', 'monthly_credit')),
    preferred_redemption VARCHAR(50) CHECK (preferred_redemption IN ('gas_cylinder', 'fertilizer', 'cash')),
    auto_redeem_threshold DECIMAL(10,2) DEFAULT 500.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Financial summary for reporting
CREATE TABLE IF NOT EXISTS financial_summary (
    id SERIAL PRIMARY KEY,
    summary_date DATE NOT NULL DEFAULT CURRENT_DATE,
    total_waste_payments DECIMAL(12,2) DEFAULT 0,
    total_cylinder_sales DECIMAL(12,2) DEFAULT 0,
    total_market_kitchen_revenue DECIMAL(12,2) DEFAULT 0,
    total_credits_issued DECIMAL(12,2) DEFAULT 0,
    total_credits_redeemed DECIMAL(12,2) DEFAULT 0,
    total_commission_paid DECIMAL(12,2) DEFAULT 0,
    net_revenue DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(summary_date)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_payment_receipts_date ON payment_receipts(receipt_date);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_date ON credit_transactions(transaction_date);
CREATE INDEX IF NOT EXISTS idx_kitchen_usage_sessions_date ON kitchen_usage_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_paybill_transactions_time ON paybill_transactions(transaction_time);
CREATE INDEX IF NOT EXISTS idx_waste_credits_generator ON waste_credits(waste_generator_id);
