import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Leaf, ArrowLeft, Gauge, Thermometer, Droplets, Zap } from "lucide-react"
import Link from "next/link"

export default function ProductionMonitoringPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/biodigester-kitchen">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Green Kitchen System</span>
              </div>
            </div>
            <Badge variant="secondary">Biodigester Kitchen</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2">Production Monitoring</h1>
          <p className="text-muted-foreground">Real-time monitoring of biogas production across all digesters.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Production Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Production</CardTitle>
                  <Gauge className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.8 m³</div>
                  <p className="text-xs text-muted-foreground">Today's total output</p>
                  <Progress value={83} className="h-2 mt-2" />
                  <p className="text-xs text-muted-foreground mt-1">83% of daily target</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Production Rate</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.8 m³/hr</div>
                  <p className="text-xs text-muted-foreground">Current rate</p>
                  <div className="text-xs text-green-600 mt-2">+12% from yesterday</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
                  <Gauge className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground">System efficiency</p>
                  <div className="text-xs text-green-600 mt-2">Optimal range</div>
                </CardContent>
              </Card>
            </div>

            {/* Individual Digester Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Digester 1</span>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                      Active
                    </Badge>
                  </CardTitle>
                  <CardDescription>Primary biogas digester</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Temperature</span>
                      </div>
                      <span className="text-sm font-medium">37.2°C</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-green-600">Optimal range</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">pH Level</span>
                      </div>
                      <span className="text-sm font-medium">6.8</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-green-600">Within range</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Gas Pressure</span>
                      </div>
                      <span className="text-sm font-medium">2.1 bar</span>
                    </div>
                    <Progress value={70} className="h-2" />
                    <p className="text-xs text-green-600">Normal</p>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">8.4 m³</div>
                      <div className="text-xs text-muted-foreground">Today's production</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Digester 2</span>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                      Active
                    </Badge>
                  </CardTitle>
                  <CardDescription>Secondary biogas digester</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Temperature</span>
                      </div>
                      <span className="text-sm font-medium">36.8°C</span>
                    </div>
                    <Progress value={82} className="h-2" />
                    <p className="text-xs text-green-600">Optimal range</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">pH Level</span>
                      </div>
                      <span className="text-sm font-medium">7.1</span>
                    </div>
                    <Progress value={80} className="h-2" />
                    <p className="text-xs text-green-600">Within range</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Gas Pressure</span>
                      </div>
                      <span className="text-sm font-medium">2.3 bar</span>
                    </div>
                    <Progress value={77} className="h-2" />
                    <p className="text-xs text-green-600">Normal</p>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">9.2 m³</div>
                      <div className="text-xs text-muted-foreground">Today's production</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Digester 3</span>
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700">
                      Maintenance
                    </Badge>
                  </CardTitle>
                  <CardDescription>Tertiary biogas digester</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Temperature</span>
                      </div>
                      <span className="text-sm font-medium">32.1°C</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-xs text-yellow-600">Below optimal</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">pH Level</span>
                      </div>
                      <span className="text-sm font-medium">6.2</span>
                    </div>
                    <Progress value={55} className="h-2" />
                    <p className="text-xs text-yellow-600">Needs adjustment</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Gas Pressure</span>
                      </div>
                      <span className="text-sm font-medium">1.2 bar</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <p className="text-xs text-yellow-600">Low pressure</p>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-muted-foreground">7.2 m³</div>
                      <div className="text-xs text-muted-foreground">Today's production</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Production History Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Production History</CardTitle>
                <CardDescription>Biogas production over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Gauge className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <div className="text-muted-foreground">Production Chart</div>
                    <div className="text-sm text-muted-foreground">
                      Interactive chart showing daily production trends
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Production Targets */}
            <Card>
              <CardHeader>
                <CardTitle>Production Targets</CardTitle>
                <CardDescription>Daily and monthly goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Daily Target</span>
                    <span>24.8 / 30 m³</span>
                  </div>
                  <Progress value={83} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">83% achieved</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Monthly Target</span>
                    <span>672 / 900 m³</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">75% achieved</p>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    At current rate, monthly target will be achieved in 18 days.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Important notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                  <div className="text-sm font-medium text-yellow-700">Maintenance Required</div>
                  <div className="text-xs text-muted-foreground">Digester 3 needs scheduled maintenance</div>
                </div>
                <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <div className="text-sm font-medium text-green-700">Production On Track</div>
                  <div className="text-xs text-muted-foreground">Daily target 83% achieved</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Production management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="sm">
                  Schedule Maintenance
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Adjust Parameters
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Export Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
