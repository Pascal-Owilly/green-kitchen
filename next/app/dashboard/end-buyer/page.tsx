import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Cylinder, ShoppingCart, Truck, CreditCard, TrendingDown, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function EndBuyerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cylinder className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Green Kitchen System</span>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">End-Buyer</Badge>
              <Button variant="ghost" size="sm">
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2">Welcome back, David!</h1>
          <p className="text-muted-foreground">
            Manage your biogas cylinder orders and track your clean energy usage from your dashboard.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Cylinders</CardTitle>
              <Cylinder className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 full, 1 in use</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Usage</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4 m³</div>
              <p className="text-xs text-muted-foreground">-8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">KSh 840</div>
              <p className="text-xs text-muted-foreground">vs traditional fuel</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Delivery</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 days</div>
              <p className="text-xs text-muted-foreground">Scheduled delivery</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your biogas cylinder orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button className="h-auto p-4 flex flex-col items-center gap-2" asChild>
                    <Link href="/dashboard/end-buyer/order">
                      <ShoppingCart className="w-6 h-6" />
                      <span>Order Cylinders</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent"
                    asChild
                  >
                    <Link href="/dashboard/end-buyer/deliveries">
                      <Truck className="w-6 h-6" />
                      <span>Track Deliveries</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent"
                    asChild
                  >
                    <Link href="/dashboard/end-buyer/usage">
                      <TrendingDown className="w-6 h-6" />
                      <span>Usage Analytics</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Current Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Current Orders</CardTitle>
                <CardDescription>Your recent and active cylinder orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-blue-500/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <Truck className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">2 Biogas Cylinders</div>
                        <div className="text-sm text-muted-foreground">Order #GKS-2024-0156 • KSh 600</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-700">
                        In Transit
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">Est. delivery: Tomorrow</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-green-500/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">1 Biogas Cylinder</div>
                        <div className="text-sm text-muted-foreground">Order #GKS-2024-0142 • KSh 300</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        Delivered
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">3 days ago</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">3 Biogas Cylinders</div>
                        <div className="text-sm text-muted-foreground">Order #GKS-2024-0134 • KSh 900</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">Processing</Badge>
                      <div className="text-sm text-muted-foreground mt-1">Expected: 5 days</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cylinder Inventory */}
            <Card>
              <CardHeader>
                <CardTitle>Your Cylinder Inventory</CardTitle>
                <CardDescription>Current status of your biogas cylinders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-border rounded-lg bg-green-500/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Cylinder #001</span>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        Full
                      </Badge>
                    </div>
                    <Progress value={100} className="h-2 mb-2" />
                    <div className="text-xs text-muted-foreground">Ready for use • 15 kg capacity</div>
                  </div>

                  <div className="p-4 border border-border rounded-lg bg-green-500/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Cylinder #002</span>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        Full
                      </Badge>
                    </div>
                    <Progress value={100} className="h-2 mb-2" />
                    <div className="text-xs text-muted-foreground">Backup cylinder • 15 kg capacity</div>
                  </div>

                  <div className="p-4 border border-border rounded-lg bg-yellow-500/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Cylinder #003</span>
                      <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700">
                        In Use
                      </Badge>
                    </div>
                    <Progress value={35} className="h-2 mb-2" />
                    <div className="text-xs text-muted-foreground">35% remaining • Est. 4 days left</div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                  <div className="text-sm font-medium mb-1">Recommendation</div>
                  <div className="text-xs text-muted-foreground">
                    Consider ordering a replacement cylinder when current usage drops below 20% to avoid interruption.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Analytics Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Usage Overview</CardTitle>
                <CardDescription>Your biogas consumption patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2.4 m³</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">0.8 m³</div>
                    <div className="text-sm text-muted-foreground">Weekly average</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">28.8 m³</div>
                    <div className="text-sm text-muted-foreground">Total consumed</div>
                  </div>
                </div>

                <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingDown className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Usage trend chart</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">M-Pesa</div>
                      <div className="text-xs text-muted-foreground">+254 700 *** 456</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                    Primary
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Bank Transfer</div>
                      <div className="text-xs text-muted-foreground">KCB Bank *** 789</div>
                    </div>
                  </div>
                  <Badge variant="outline">Backup</Badge>
                </div>

                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            {/* Cost Savings */}
            <Card>
              <CardHeader>
                <CardTitle>Cost Savings</CardTitle>
                <CardDescription>Compared to traditional fuel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">KSh 840</div>
                  <p className="text-sm text-muted-foreground">Saved this month</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Biogas cost</span>
                    <span className="text-sm font-medium">KSh 720</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Charcoal equivalent</span>
                    <span className="text-sm font-medium text-muted-foreground line-through">KSh 1,560</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-2">
                    <span className="text-sm font-medium">Monthly savings</span>
                    <span className="text-sm font-medium text-green-600">KSh 840</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">Annual projected savings: KSh 10,080</div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact</CardTitle>
                <CardDescription>Your contribution to sustainability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">28.8 m³</div>
                  <div className="text-sm text-muted-foreground">Clean energy consumed</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CO₂ avoided</span>
                    <span className="text-sm font-medium">142 kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Trees equivalent</span>
                    <span className="text-sm font-medium">6.4 trees</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Waste diverted</span>
                    <span className="text-sm font-medium">96 kg</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Preferences</CardTitle>
                <CardDescription>Your delivery settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Preferred Time</div>
                  <div className="text-sm text-muted-foreground">Weekdays, 9:00 AM - 5:00 PM</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Delivery Address</div>
                  <div className="text-sm text-muted-foreground">
                    123 Lake View Estate
                    <br />
                    Kisumu, Kenya
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Update Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
