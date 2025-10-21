-- Seed data for Green Kitchen System
-- Insert sample data for demonstration purposes

-- Insert admin user
INSERT INTO users (email, password_hash, role, first_name, last_name, phone, location) VALUES
('admin@greenkitchen.co.ke', '$2b$10$example_hash', 'admin', 'System', 'Administrator', '+254700000000', 'Kisumu, Kenya');

-- Insert sample waste generators
INSERT INTO users (email, password_hash, role, first_name, last_name, phone, location) VALUES
('mary.wanjiku@email.com', '$2b$10$example_hash', 'waste_generator', 'Mary', 'Wanjiku', '+254701234567', 'Kisumu Central'),
('john.otieno@email.com', '$2b$10$example_hash', 'waste_generator', 'John', 'Otieno', '+254702345678', 'Kondele'),
('grace.akinyi@email.com', '$2b$10$example_hash', 'waste_generator', 'Grace', 'Akinyi', '+254703456789', 'Nyalenda');

-- Insert sample collectors
INSERT INTO users (email, password_hash, role, first_name, last_name, phone, location) VALUES
('peter.ochieng@email.com', '$2b$10$example_hash', 'collector', 'Peter', 'Ochieng', '+254704567890', 'Kisumu'),
('samuel.kiprotich@email.com', '$2b$10$example_hash', 'collector', 'Samuel', 'Kiprotich', '+254705678901', 'Kisumu'),
('david.mwangi@email.com', '$2b$10$example_hash', 'collector', 'David', 'Mwangi', '+254706789012', 'Kisumu');

-- Insert sample biodigester kitchens
INSERT INTO users (email, password_hash, role, first_name, last_name, phone, location) VALUES
('green.valley@email.com', '$2b$10$example_hash', 'biodigester_kitchen', 'Green Valley', 'Kitchen', '+254707890123', 'Kisumu East'),
('eco.waste@email.com', '$2b$10$example_hash', 'biodigester_kitchen', 'Eco Waste', 'Solutions', '+254708901234', 'Kisumu West');

-- Insert sample end buyers
INSERT INTO users (email, password_hash, role, first_name, last_name, phone, location) VALUES
('kisumu.restaurant@email.com', '$2b$10$example_hash', 'end_buyer', 'Kisumu', 'Restaurant', '+254709012345', 'Kisumu CBD'),
('mama.mboga@email.com', '$2b$10$example_hash', 'end_buyer', 'Mama', 'Mboga', '+254710123456', 'Kondele Market');

-- Insert waste generator profiles
INSERT INTO waste_generators (user_id, business_name, business_type, daily_waste_volume, address) VALUES
(2, 'Wanjiku Hotel', 'Restaurant', 25.5, 'Kisumu Central, Oginga Odinga Street'),
(3, 'Otieno Fresh Produce', 'Market Vendor', 15.2, 'Kondele Market'),
(4, 'Akinyi Catering', 'Catering Service', 18.7, 'Nyalenda B, Kisumu');

-- Insert collector profiles
INSERT INTO collectors (user_id, vehicle_type, vehicle_capacity, license_number, service_areas, rating, total_collections) VALUES
(5, 'Pickup Truck', 500.0, 'KBZ 123A', ARRAY['Kisumu Central', 'Kondele'], 4.8, 156),
(6, 'Small Truck', 750.0, 'KBZ 456B', ARRAY['Nyalenda', 'Kisumu East'], 4.6, 134),
(7, 'Motorcycle', 100.0, 'KMCA 789C', ARRAY['Kisumu CBD', 'Tom Mboya'], 4.9, 89);

-- Insert biodigester kitchen profiles
INSERT INTO biodigester_kitchens (user_id, facility_name, capacity, location, operational_status) VALUES
(8, 'Green Valley Biodigester', 1000.0, 'Kisumu East Industrial Area', 'active'),
(9, 'Eco Waste Solutions', 750.0, 'Kisumu West, Mamboleo', 'active');

-- Insert end buyer profiles
INSERT INTO end_buyers (user_id, business_name, business_type, monthly_consumption, delivery_address) VALUES
(10, 'Kisumu Grand Restaurant', 'Restaurant', 45.5, 'Kisumu CBD, Oginga Odinga Street'),
(11, 'Mama Mboga Kitchen', 'Small Business', 12.3, 'Kondele Market, Stall 45');

-- Insert sample collection requests
INSERT INTO collection_requests (waste_generator_id, collector_id, waste_type, estimated_weight, actual_weight, collection_date, collection_time, status, pickup_address, price) VALUES
(1, 1, 'Food Waste', 25.0, 24.5, CURRENT_DATE, '08:00:00', 'collected', 'Kisumu Central, Oginga Odinga Street', 500.00),
(2, 2, 'Vegetable Waste', 15.0, 16.2, CURRENT_DATE, '10:30:00', 'collected', 'Kondele Market', 350.00),
(3, 1, 'Mixed Organic', 18.0, NULL, CURRENT_DATE + 1, '09:00:00', 'assigned', 'Nyalenda B, Kisumu', 400.00);

-- Insert sample biodigester operations
INSERT INTO biodigester_operations (kitchen_id, digester_number, waste_input_kg, biogas_output_m3, temperature, ph_level, pressure_kpa, operation_date, status) VALUES
(1, 1, 150.5, 45.2, 35.5, 7.2, 1.2, CURRENT_DATE, 'normal'),
(1, 2, 142.3, 42.8, 36.1, 7.0, 1.1, CURRENT_DATE, 'normal'),
(2, 1, 98.7, 29.6, 34.8, 7.3, 1.3, CURRENT_DATE, 'normal');

-- Insert sample biogas cylinders
INSERT INTO biogas_cylinders (kitchen_id, cylinder_code, capacity_m3, current_volume, status, last_filled) VALUES
(1, 'GV001', 15.0, 15.0, 'filled', CURRENT_DATE),
(1, 'GV002', 15.0, 12.5, 'filled', CURRENT_DATE - 1),
(1, 'GV003', 15.0, 0.0, 'available', NULL),
(2, 'EW001', 10.0, 10.0, 'filled', CURRENT_DATE),
(2, 'EW002', 10.0, 8.5, 'filled', CURRENT_DATE - 2);

-- Insert sample cylinder orders
INSERT INTO cylinder_orders (end_buyer_id, cylinder_id, quantity, order_date, delivery_address, total_price, payment_status, delivery_status, payment_method) VALUES
(1, 1, 1, CURRENT_DATE, 'Kisumu CBD, Oginga Odinga Street', 1500.00, 'paid', 'delivered', 'M-Pesa'),
(2, 4, 1, CURRENT_DATE, 'Kondele Market, Stall 45', 1200.00, 'paid', 'in_transit', 'M-Pesa');

-- Insert sample payments
INSERT INTO payments (payer_id, payee_id, amount, payment_type, reference_id, reference_type, payment_method, status) VALUES
(2, 5, 500.00, 'collection_fee', 1, 'collection_requests', 'M-Pesa', 'completed'),
(3, 6, 350.00, 'collection_fee', 2, 'collection_requests', 'M-Pesa', 'completed'),
(10, 8, 1500.00, 'cylinder_purchase', 1, 'cylinder_orders', 'M-Pesa', 'completed');

-- Insert sample system metrics
INSERT INTO system_metrics (metric_date, total_waste_collected_kg, total_biogas_produced_m3, co2_emissions_reduced_kg, active_users, total_revenue) VALUES
(CURRENT_DATE - 30, 2450.5, 1234.6, 4901.0, 1156, 42350.00),
(CURRENT_DATE - 15, 2687.3, 1356.2, 5374.6, 1203, 45120.00),
(CURRENT_DATE, 2847.1, 1423.8, 5694.2, 1247, 47890.00);
