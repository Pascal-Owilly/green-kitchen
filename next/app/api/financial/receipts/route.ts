import { type NextRequest, NextResponse } from "next/server"

// Mock data for demonstration
const mockReceipts = [
  {
    id: 1,
    receipt_number: "GKS-2024-001247",
    waste_generator: "Mary Wanjiku",
    collector: "Peter Ochieng",
    actual_weight: 24.5,
    rate_per_kg: 20,
    total_amount: 490,
    payment_method: "M-Pesa",
    mpesa_transaction_id: "QR45X7Y9Z1",
    receipt_date: new Date().toISOString(),
    status: "paid",
  },
  {
    id: 2,
    receipt_number: "GKS-2024-001246",
    waste_generator: "John Otieno",
    collector: "Samuel Kiprotich",
    actual_weight: 16.2,
    rate_per_kg: 22,
    total_amount: 356,
    payment_method: "M-Pesa",
    mpesa_transaction_id: "QR45X7Y9Z2",
    receipt_date: new Date(Date.now() - 3600000).toISOString(),
    status: "paid",
  },
]

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from database
    // const receipts = await db.query('SELECT * FROM payment_receipts ORDER BY receipt_date DESC LIMIT 50')

    return NextResponse.json({
      success: true,
      data: mockReceipts,
    })
  } catch (error) {
    console.error("[v0] Error fetching receipts:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch receipts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      waste_generator_id,
      collector_id,
      collection_center_id,
      actual_weight,
      rate_per_kg,
      payment_method,
      waste_type,
    } = body

    // Generate receipt number
    const receipt_number = `GKS-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`
    const total_amount = actual_weight * rate_per_kg

    // In a real application, you would:
    // 1. Insert into payment_receipts table
    // 2. Process M-Pesa payment or credit transaction
    // 3. Update waste_credits if payment_method is 'credit'
    // 4. Update collection_requests status

    console.log("[v0] Processing receipt:", {
      receipt_number,
      waste_generator_id,
      collector_id,
      actual_weight,
      total_amount,
      payment_method,
    })

    // Mock successful response
    const newReceipt = {
      id: Date.now(),
      receipt_number,
      actual_weight,
      rate_per_kg,
      total_amount,
      payment_method,
      mpesa_transaction_id:
        payment_method === "M-Pesa" ? `QR${Math.random().toString(36).substr(2, 8).toUpperCase()}` : null,
      receipt_date: new Date().toISOString(),
      status: "paid",
    }

    return NextResponse.json({
      success: true,
      data: newReceipt,
      message: "Receipt generated successfully",
    })
  } catch (error) {
    console.error("[v0] Error generating receipt:", error)
    return NextResponse.json({ success: false, error: "Failed to generate receipt" }, { status: 500 })
  }
}
