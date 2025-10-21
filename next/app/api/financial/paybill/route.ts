import { type NextRequest, NextResponse } from "next/server"

// Mock data for demonstration
const mockPaybillTransactions = [
  {
    id: 1,
    paybill_number: "247247",
    account_number: "GV001",
    customer_phone: "+254701234567",
    amount: 1500,
    mpesa_receipt_number: "QR45X7Y9Z1",
    transaction_time: new Date().toISOString(),
    reference_type: "cylinder_order",
    status: "completed",
  },
  {
    id: 2,
    paybill_number: "247247",
    account_number: "KITCHEN001",
    customer_phone: "+254702345678",
    amount: 450,
    mpesa_receipt_number: "QR45X7Y9Z2",
    transaction_time: new Date(Date.now() - 1800000).toISOString(),
    reference_type: "market_kitchen",
    status: "completed",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date") || new Date().toISOString().split("T")[0]

    // In a real application, you would fetch from database
    // const transactions = await db.query(`
    //   SELECT * FROM paybill_transactions
    //   WHERE DATE(transaction_time) = $1
    //   ORDER BY transaction_time DESC
    // `, [date])

    return NextResponse.json({
      success: true,
      data: mockPaybillTransactions,
      summary: {
        total_transactions: mockPaybillTransactions.length,
        total_amount: mockPaybillTransactions.reduce((sum, t) => sum + t.amount, 0),
        success_rate: 98.5,
      },
    })
  } catch (error) {
    console.error("[v0] Error fetching paybill transactions:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch paybill transactions" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      paybill_number,
      account_number,
      customer_phone,
      amount,
      mpesa_receipt_number,
      reference_id,
      reference_type,
    } = body

    // In a real application, you would:
    // 1. Validate M-Pesa transaction
    // 2. Insert into paybill_transactions table
    // 3. Update related records (cylinder_orders, kitchen_usage_sessions)
    // 4. Send confirmation SMS to customer

    console.log("[v0] Processing paybill transaction:", {
      paybill_number,
      account_number,
      customer_phone,
      amount,
      mpesa_receipt_number,
      reference_type,
    })

    // Mock successful response
    const transaction = {
      id: Date.now(),
      paybill_number,
      account_number,
      customer_phone,
      amount,
      mpesa_receipt_number,
      transaction_time: new Date().toISOString(),
      reference_id,
      reference_type,
      status: "completed",
    }

    return NextResponse.json({
      success: true,
      data: transaction,
      message: "Paybill transaction processed successfully",
    })
  } catch (error) {
    console.error("[v0] Error processing paybill transaction:", error)
    return NextResponse.json({ success: false, error: "Failed to process paybill transaction" }, { status: 500 })
  }
}
