import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Cylinder, ArrowLeft, Plus, Minus, CreditCard } from "lucide-react"
import Link from "next/link"

export default function OrderCylindersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/end-buyer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Cylinder className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Green Kitchen System</span>
              </div>
            </div>
            <Badge variant="secondary">End-Buyer</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2">Order Biogas Cylinders</h1>
          <p className="text-muted-foreground">Order clean, sustainable biogas cylinders for your energy needs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
                <CardDescription>Select your biogas cylinder requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Cylinder Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Cylinder Type & Quantity</Label>

                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">Standard Biogas Cylinder</div>
                        <div className="text-sm text-muted-foreground">
                          15 kg capacity • 3-4 weeks usage for family of 4
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary">KSh 300</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-lg font-medium w-8 text-center">2</span>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4 opacity-60">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">Large Biogas Cylinder</div>
                        <div className="text-sm text-muted-foreground">
                          25 kg capacity • 5-6 weeks usage for family of 4
                        </div>
                      </div>
                      <div className="text-lg font-bold">KSh 450</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" disabled className="bg-transparent">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-lg font-medium w-8 text-center">0</span>
                      <Button variant="outline" size="sm" disabled className="bg-transparent">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="mt-2">
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Delivery Information</Label>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
                      <Input id="deliveryDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryTime">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4:00 PM - 6:00 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryAddress">Delivery Address</Label>
                    <Textarea
                      id="deliveryAddress"
                      placeholder="Enter your complete delivery address..."
                      rows={3}
                      defaultValue="123 Lake View Estate, Kisumu, Kenya"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                    <Textarea id="specialInstructions" placeholder="Any special delivery instructions..." rows={2} />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Payment Method</Label>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-primary/5">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" defaultChecked className="text-primary" />
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-primary" />
                          <span className="font-medium">M-Pesa</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">+254 700 *** 456</div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" />
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">Bank Transfer</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">KCB Bank *** 789</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">Place Order</Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/end-buyer">Cancel</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your order details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Standard Cylinders (2x)</span>
                    <span className="text-sm font-medium">KSh 600</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Delivery Fee</span>
                    <span className="text-sm font-medium">KSh 100</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-2">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-primary">KSh 700</span>
                  </div>
                </div>

                <div className="p-3 bg-green-500/5 rounded-lg">
                  <div className="text-sm font-medium text-green-700">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">Orders over KSh 500 qualify for free delivery</div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
                <CardDescription>What to expect</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Order Confirmation</div>
                      <div className="text-xs text-muted-foreground">
                        You'll receive SMS confirmation within 30 minutes
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Preparation</div>
                      <div className="text-xs text-muted-foreground">Cylinders prepared and quality checked</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Delivery</div>
                      <div className="text-xs text-muted-foreground">Safe delivery to your specified address</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Contact our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Questions about your order? Our support team is here to help.
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
