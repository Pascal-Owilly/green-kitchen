import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password, role } = await request.json()

    // Mock authentication - in production, verify against database
    if (email && password && role) {
      // Simulate successful login
      const user = {
        id: 1,
        email,
        role,
        name: "Demo User",
      }

      return NextResponse.json({
        success: true,
        user,
        token: "demo_jwt_token",
      })
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}
