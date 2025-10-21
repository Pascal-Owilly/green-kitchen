import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Leaf, Gauge, Cylinder, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function BiodigesterKitchenDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Green Kitchen System</span>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Biodigester Kitchen</Badge>
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
          <h1 className="text-3xl font-bold text-balance mb-2">Welcome back, Lake View Biodigester!</h1>
          <p className="text-muted-foreground">
            Monitor your biogas production and manage waste processing operations from your dashboard.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Production</CardTitle>
              <Gauge className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.8 m³</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waste Processed</CardTitle>
              <Leaf className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">186 kg</div>
              <p className="text-xs text-muted-foreground">Today's intake</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cylinders Ready</CardTitle>
              <Cylinder className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">Available for distribution</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Efficiency Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">Production efficiency</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current biodigester operations overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="font-medium">Digester 1</div>
                    <div className="text-sm text-muted-foreground">Operating Normal</div>
                    <div className="text-xs text-green-600 mt-1">85% capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="font-medium">Digester 2</div>
                    <div className="text-sm text-muted-foreground">Operating Normal</div>
                    <div className="text-xs text-green-600 mt-1">92% capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div className="font-medium">Digester 3</div>
                    <div className="text-sm text-muted-foreground">Maintenance Due</div>
                    <div className="text-xs text-yellow-600 mt-1">Schedule service</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Production Monitoring */}
            <Card>
              <CardHeader>
                <CardTitle>Production Monitoring</CardTitle>
                <CardDescription>Real-time biogas production metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Daily Production Target</span>
                    <span className="text-sm text-muted-foreground">24.8 / 30 m³</span>
                  </div>
                  <Progress value={83} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">83% of daily target achieved</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">7.2°C</div>
                    <div className="text-sm text-muted-foreground">Temperature</div>
                    <div className="text-xs text-green-600">Optimal range</div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">6.8</div>
                    <div className="text-sm text-muted-foreground">pH Level</div>
                    <div className="text-xs text-green-600">Within range</div>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">2.1 bar</div>
                    <div className="text-sm text-muted-foreground">Gas Pressure</div>
                    <div className="text-xs text-green-600">Normal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Waste Intake Log */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Waste Intake</CardTitle>
                <CardDescription>Incoming organic waste deliveries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-green-500/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Sarah's Collection Route</div>
                        <div className="text-sm text-muted-foreground">45 kg mixed organic waste</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">8:30 AM</div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        Processed
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-blue-500/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">Market Vendors Collection</div>
                        <div className="text-sm text-muted-foreground">67 kg kitchen waste</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">11:15 AM</div>
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-700">
                        Processing
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">Hotel Collection</div>
                        <div className="text-sm text-muted-foreground">74 kg restaurant waste</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">2:00 PM</div>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cylinder Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Cylinder Distribution</CardTitle>
                <CardDescription>Biogas cylinder inventory and orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">18</div>
                    <div className="text-sm text-muted-foreground">Ready for Pickup</div>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-accent">12</div>
                    <div className="text-sm text-muted-foreground">In Production</div>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-secondary">6</div>
                    <div className="text-sm text-muted-foreground">Pending Orders</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Kisumu Energy Distributors</div>
                      <div className="text-xs text-muted-foreground">8 cylinders • KSh 2,400</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                      Ready
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Local Community Center</div>
                      <div className="text-xs text-muted-foreground">4 cylinders • KSh 1,200</div>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700">
                      In Progress
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/biodigester-kitchen/intake">Log Waste Intake</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/dashboard/biodigester-kitchen/production">Monitor Production</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/dashboard/biodigester-kitchen/distribution">Manage Distribution</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Alerts & Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts & Notifications</CardTitle>
                <CardDescription>Important system updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">Maintenance Due</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Digester 3 requires scheduled maintenance</div>
                </div>
                <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Large Delivery</span>
                  </div>
                  <div className="text-xs text-muted-foreground">74 kg waste delivery expected at 2:00 PM</div>
                </div>
                <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Production Target</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Daily target 83% achieved - on track</div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>This month's performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Production Efficiency</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Waste Processed</span>
                    <span className="text-sm font-medium">4.2 tons</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Biogas Produced</span>
                    <span className="text-sm font-medium">672 m³</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cylinders Distributed</span>
                    <span className="text-sm font-medium">224</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Revenue Generated</span>
                    <span className="text-sm font-medium text-green-600">KSh 67,200</span>
                  </div>
                </div>
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
                  <div className="text-2xl font-bold text-primary">4.2 tons</div>
                  <div className="text-sm text-muted-foreground">Waste Diverted from Lake Victoria</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CO₂ Reduction</span>
                    <span className="text-sm font-medium">1.8 tons</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Clean Energy</span>
                    <span className="text-sm font-medium">672 m³</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Families Served</span>
                    <span className="text-sm font-medium">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
