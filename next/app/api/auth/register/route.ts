import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password, role, firstName, lastName, phone, location } = await request.json()

    // Mock registration - in production, save to database
    if (email && password && role && firstName && lastName) {
      // Simulate successful registration
      const user = {
        id: Date.now(), // Mock ID
        email,
        role,
        firstName,
        lastName,
        phone,
        location,
      }

      return NextResponse.json({
        success: true,
        user,
        message: "Registration successful",
      })
    }

    return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}
