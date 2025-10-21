import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, ArrowLeft, Search, Filter, Navigation } from "lucide-react"
import Link from "next/link"

export default function CollectorRoutesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/collector">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Green Kitchen System</span>
              </div>
            </div>
            <Badge variant="secondary">Collector</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2">Collection Routes</h1>
          <p className="text-muted-foreground">
            Manage and optimize your waste collection routes for maximum efficiency.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search routes or customers..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Routes</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Navigation className="w-4 h-4 mr-2" />
            Optimize Route
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Route List */}
          <div className="lg:col-span-3 space-y-4">
            {/* Today's Route */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Today's Route - Kisumu Central</CardTitle>
                    <CardDescription>8 stops • 15.2 km • Est. 4.5 hours</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">In Progress</Badge>
                    <Button size="sm">View Map</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-green-500/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">1</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Mama Njeri's Restaurant</div>
                        <div className="text-xs text-muted-foreground">15 kg • KSh 45 • 9:30 AM</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                      Completed
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-blue-500/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Kisumu Market Vendors</div>
                        <div className="text-xs text-muted-foreground">25 kg • KSh 62.50 • 11:00 AM</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-700">
                      Current
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-muted-foreground">3</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Green Valley Apartments</div>
                        <div className="text-xs text-muted-foreground">12 kg • KSh 36 • 2:00 PM</div>
                      </div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-muted-foreground">4</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Lakeside Hotel</div>
                        <div className="text-xs text-muted-foreground">30 kg • KSh 90 • 4:30 PM</div>
                      </div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View All 8 Stops
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tomorrow's Route */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Tomorrow's Route - Nyanza Region</CardTitle>
                    <CardDescription>6 stops • 22.8 km • Est. 5 hours</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Scheduled</Badge>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Edit Route
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-muted-foreground">1</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Siaya County Hospital</div>
                        <div className="text-xs text-muted-foreground">40 kg • KSh 100 • 8:00 AM</div>
                      </div>
                    </div>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-muted-foreground">2</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Bondo Market</div>
                        <div className="text-xs text-muted-foreground">35 kg • KSh 87.50 • 10:30 AM</div>
                      </div>
                    </div>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View All 6 Stops
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Route Summary */}
            <Card>
              <CardHeader>
                <CardTitle>This Week's Summary</CardTitle>
                <CardDescription>Your collection performance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">28</div>
                    <div className="text-sm text-muted-foreground">Total Stops</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">847 kg</div>
                    <div className="text-sm text-muted-foreground">Waste Collected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">KSh 2,118</div>
                    <div className="text-sm text-muted-foreground">Earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">94%</div>
                    <div className="text-sm text-muted-foreground">On-time Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Route Optimization Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Optimization Tips</CardTitle>
                <CardDescription>Improve your route efficiency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="font-medium text-sm text-primary">Fuel Savings</div>
                  <div className="text-xs text-muted-foreground">
                    Group nearby customers to reduce travel distance by 15%
                  </div>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <div className="font-medium text-sm text-accent">Time Management</div>
                  <div className="text-xs text-muted-foreground">
                    Start with largest collections to maximize truck capacity
                  </div>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <div className="font-medium text-sm">Customer Service</div>
                  <div className="text-xs text-muted-foreground">
                    Send pickup reminders to reduce missed collections
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather & Traffic */}
            <Card>
              <CardHeader>
                <CardTitle>Route Conditions</CardTitle>
                <CardDescription>Current conditions affecting routes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weather</span>
                  <span className="text-sm font-medium text-green-600">Clear</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Traffic</span>
                  <span className="text-sm font-medium text-yellow-600">Moderate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Road Conditions</span>
                  <span className="text-sm font-medium text-green-600">Good</span>
                </div>
                <div className="text-xs text-muted-foreground">Best collection time: 8:00 AM - 11:00 AM</div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>Important numbers for collectors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dispatch</span>
                  <span className="text-sm font-medium">+254 700 123 456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Support</span>
                  <span className="text-sm font-medium">+254 700 123 457</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Emergency</span>
                  <span className="text-sm font-medium">999</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
