import { type NextRequest, NextResponse } from "next/server"

// Mock data for demonstration
const mockCredits = [
  {
    id: 1,
    waste_generator_id: 1,
    waste_generator_name: "Grace Akinyi",
    credit_balance: 1247.5,
    total_earned: 3456.8,
    total_redeemed: 2209.3,
    last_updated: new Date().toISOString(),
  },
  {
    id: 2,
    waste_generator_id: 2,
    waste_generator_name: "Peter Ouma",
    credit_balance: 890.25,
    total_earned: 2134.75,
    total_redeemed: 1244.5,
    last_updated: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from database with joins
    // const credits = await db.query(`
    //   SELECT wc.*, wg.business_name, u.first_name, u.last_name
    //   FROM waste_credits wc
    //   JOIN waste_generators wg ON wc.waste_generator_id = wg.id
    //   JOIN users u ON wg.user_id = u.id
    //   WHERE wc.credit_balance > 0
    //   ORDER BY wc.credit_balance DESC
    // `)

    return NextResponse.json({
      success: true,
      data: mockCredits,
    })
  } catch (error) {
    console.error("[v0] Error fetching credits:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch credits" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      waste_generator_id,
      transaction_type, // 'earned' or 'redeemed'
      amount,
      reference_id,
      reference_type,
      description,
    } = body

    // In a real application, you would:
    // 1. Insert into credit_transactions table
    // 2. Update waste_credits balance
    // 3. If redemption, process the redemption (cylinder order, fertilizer, etc.)

    console.log("[v0] Processing credit transaction:", {
      waste_generator_id,
      transaction_type,
      amount,
      reference_type,
      description,
    })

    // Mock successful response
    const transaction = {
      id: Date.now(),
      waste_generator_id,
      transaction_type,
      amount,
      reference_id,
      reference_type,
      description,
      transaction_date: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      data: transaction,
      message: `Credit ${transaction_type} processed successfully`,
    })
  } catch (error) {
    console.error("[v0] Error processing credit transaction:", error)
    return NextResponse.json({ success: false, error: "Failed to process credit transaction" }, { status: 500 })
  }
}
