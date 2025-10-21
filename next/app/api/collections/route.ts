import { type NextRequest, NextResponse } from "next/server"

// Mock data for collections
const mockCollections = [
  {
    id: 1,
    wasteType: "Food Waste",
    weight: 24.5,
    date: "2024-01-15",
    time: "08:00",
    status: "collected",
    collector: "Peter Ochieng",
    price: 500,
    location: "Kisumu Central",
  },
  {
    id: 2,
    wasteType: "Vegetable Waste",
    weight: 16.2,
    date: "2024-01-14",
    time: "10:30",
    status: "collected",
    collector: "Samuel Kiprotich",
    price: 350,
    location: "Kondele Market",
  },
  {
    id: 3,
    wasteType: "Mixed Organic",
    weight: null,
    date: "2024-01-16",
    time: "09:00",
    status: "assigned",
    collector: "Peter Ochieng",
    price: 400,
    location: "Nyalenda B",
  },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    collections: mockCollections,
  })
}

export async function POST(request: NextRequest) {
  try {
    const collectionData = await request.json()

    // Mock creating a new collection request
    const newCollection = {
      id: Date.now(),
      ...collectionData,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      collection: newCollection,
      message: "Collection request created successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create collection request" }, { status: 500 })
  }
}
