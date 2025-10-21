import { type NextRequest, NextResponse } from "next/server"

// Mock data for biodigester operations
const mockOperations = [
  {
    id: 1,
    digesterNumber: 1,
    wasteInput: 150.5,
    biogasOutput: 45.2,
    temperature: 35.5,
    phLevel: 7.2,
    pressure: 1.2,
    date: "2024-01-15",
    status: "normal",
  },
  {
    id: 2,
    digesterNumber: 2,
    wasteInput: 142.3,
    biogasOutput: 42.8,
    temperature: 36.1,
    phLevel: 7.0,
    pressure: 1.1,
    date: "2024-01-15",
    status: "normal",
  },
  {
    id: 3,
    digesterNumber: 3,
    wasteInput: 98.7,
    biogasOutput: 29.6,
    temperature: 38.2,
    phLevel: 6.8,
    pressure: 1.4,
    date: "2024-01-15",
    status: "warning",
  },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    operations: mockOperations,
  })
}

export async function POST(request: NextRequest) {
  try {
    const operationData = await request.json()

    const newOperation = {
      id: Date.now(),
      ...operationData,
      date: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      operation: newOperation,
      message: "Operation data recorded successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to record operation data" }, { status: 500 })
  }
}
