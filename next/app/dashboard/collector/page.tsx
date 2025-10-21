import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Truck, Coins, Users, Route, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CollectorDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2 text-emerald-400">Welcome back, Sarah!</h1>
          <p className="text-slate-400">
            Manage your collection routes and track your earnings from the collector dashboard.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Today's Collections</CardTitle>
              <MapPin className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">8</div>
              <p className="text-xs text-slate-400">5 completed, 3 pending</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Waste Collected</CardTitle>
              <Truck className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">127 kg</div>
              <p className="text-xs text-slate-400">Today's total</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Earnings</CardTitle>
              <Coins className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">KSh 1,240</div>
              <p className="text-xs text-slate-400">This week</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">34</div>
              <p className="text-xs text-slate-400">Regular clients</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Quick Actions</CardTitle>
                <CardDescription className="text-slate-400">Manage your collection activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                    asChild
                  >
                    <Link href="/dashboard/collector/routes">
                      <Route className="w-6 h-6" />
                      <span>View Routes</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                    asChild
                  >
                    <Link href="/dashboard/collector/collections">
                      <MapPin className="w-6 h-6" />
                      <span>Start Collection</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                    asChild
                  >
                    <Link href="/dashboard/collector/customers">
                      <Users className="w-6 h-6" />
                      <span>Manage Customers</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Today's Route */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Today's Collection Route</CardTitle>
                <CardDescription className="text-slate-400">Your scheduled pickups for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg bg-green-500/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">Mama Njeri's Restaurant</div>
                        <div className="text-sm text-slate-400">15 kg kitchen waste - KSh 45</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                        Completed
                      </Badge>
                      <span className="text-sm text-slate-400">9:30 AM</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">Kisumu Market Vendors</div>
                        <div className="text-sm text-slate-400">25 kg mixed organic - KSh 62.50</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        In Progress
                      </Badge>
                      <span className="text-sm text-slate-400">11:00 AM</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">Green Valley Apartments</div>
                        <div className="text-sm text-slate-400">12 kg household waste - KSh 36</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        Scheduled
                      </Badge>
                      <span className="text-sm text-slate-400">2:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">Lakeside Hotel</div>
                        <div className="text-sm text-slate-400">30 kg restaurant waste - KSh 90</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        Scheduled
                      </Badge>
                      <span className="text-sm text-slate-400">4:30 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Performance Metrics</CardTitle>
                <CardDescription className="text-slate-400">Your collection performance this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">96%</div>
                    <div className="text-sm text-slate-400">On-time Rate</div>
                    <Progress value={96} className="h-2 mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">4.8</div>
                    <div className="text-sm text-slate-400">Customer Rating</div>
                    <div className="flex justify-center mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className={`w-3 h-3 rounded-full ${star <= 5 ? "bg-yellow-400" : "bg-slate-600"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">1.2T</div>
                    <div className="text-sm text-slate-400">Total Collected</div>
                    <div className="text-xs text-slate-500 mt-2">This month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Earnings Summary */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Earnings Summary</CardTitle>
                <CardDescription className="text-slate-400">Your collection earnings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">KSh 1,240</div>
                  <p className="text-sm text-slate-400">This week</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Today</span>
                    <span className="text-sm font-medium text-green-400">+KSh 233</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Yesterday</span>
                    <span className="text-sm font-medium text-slate-200">KSh 187</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">This month</span>
                    <span className="text-sm font-medium text-slate-200">KSh 4,680</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Pending payment</span>
                    <span className="text-sm font-medium text-yellow-400">KSh 890</span>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  View Payment History
                </Button>
              </CardContent>
            </Card>

            {/* Route Efficiency */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Route Efficiency</CardTitle>
                <CardDescription className="text-slate-400">Optimize your collection routes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Route Completion</span>
                    <span className="text-slate-200">62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                  <p className="text-xs text-slate-400 mt-1">5 of 8 stops completed</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Distance Traveled</span>
                    <span className="text-sm font-medium text-slate-200">12.4 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Time Spent</span>
                    <span className="text-sm font-medium text-slate-200">3.2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Fuel Efficiency</span>
                    <span className="text-sm font-medium text-green-400">Good</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training & Resources */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Training & Resources</CardTitle>
                <CardDescription className="text-slate-400">Improve your collection skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="#"
                  className="block p-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <div className="font-medium text-sm text-slate-200">Route Optimization</div>
                  <div className="text-xs text-slate-400">Learn efficient collection strategies</div>
                </Link>
                <Link
                  href="#"
                  className="block p-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <div className="font-medium text-sm text-slate-200">Customer Service</div>
                  <div className="text-xs text-slate-400">Build better client relationships</div>
                </Link>
                <Link
                  href="#"
                  className="block p-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <div className="font-medium text-sm text-slate-200">Safety Guidelines</div>
                  <div className="text-xs text-slate-400">Safe waste handling practices</div>
                </Link>
              </CardContent>
            </Card>

            {/* Customer Feedback */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Recent Feedback</CardTitle>
                <CardDescription className="text-slate-400">What customers are saying</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm font-medium text-slate-200">Mama Njeri</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-2 h-2 rounded-full bg-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">"Always on time and very professional. Great service!"</div>
                </div>
                <div className="p-3 bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm font-medium text-slate-200">Green Valley</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <div key={star} className="w-2 h-2 rounded-full bg-yellow-400" />
                      ))}
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">"Good service, would like earlier pickup times."</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
