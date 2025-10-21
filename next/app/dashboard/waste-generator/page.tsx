import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Coins, Leaf, TrendingUp, Plus, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function WasteGeneratorDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2 text-emerald-400">Welcome back, John!</h1>
          <p className="text-slate-400">
            Track your waste collection schedule and environmental impact from your dashboard.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Collections</CardTitle>
              <Calendar className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">24</div>
              <p className="text-xs text-emerald-400">+3 from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Waste Diverted</CardTitle>
              <Leaf className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">156 kg</div>
              <p className="text-xs text-slate-400">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Rewards Earned</CardTitle>
              <Coins className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">KSh 480</div>
              <p className="text-xs text-slate-400">Available for withdrawal</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Impact Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">85</div>
              <p className="text-xs text-slate-400">Environmental impact</p>
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
                <CardDescription className="text-slate-400">
                  Schedule collections and manage your waste pickup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                    asChild
                  >
                    <Link href="/dashboard/waste-generator/schedule">
                      <Plus className="w-6 h-6" />
                      <span>Schedule Collection</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                    asChild
                  >
                    <Link href="/dashboard/waste-generator/history">
                      <Calendar className="w-6 h-6" />
                      <span>View History</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Collections */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Upcoming Collections</CardTitle>
                <CardDescription className="text-slate-400">Your scheduled waste pickups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Tomorrow, 9:00 AM</div>
                        <div className="text-sm text-muted-foreground">Organic waste collection</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Scheduled</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium">Friday, 2:00 PM</div>
                        <div className="text-sm text-muted-foreground">Kitchen waste collection</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Scheduled</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Recent Activity</CardTitle>
                <CardDescription className="text-slate-400">Your latest waste collection activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Collection completed</div>
                      <div className="text-sm text-muted-foreground">15 kg organic waste collected - KSh 45 earned</div>
                    </div>
                    <div className="text-sm text-muted-foreground">2 hours ago</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Collection scheduled</div>
                      <div className="text-sm text-muted-foreground">Next pickup scheduled for tomorrow at 9:00 AM</div>
                    </div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Collection reminder</div>
                      <div className="text-sm text-muted-foreground">
                        Prepare your organic waste for pickup tomorrow
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Environmental Impact */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Environmental Impact</CardTitle>
                <CardDescription className="text-slate-400">
                  Your contribution to Lake Victoria protection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Monthly Goal</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">156 kg of 200 kg target</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CO₂ Saved</span>
                    <span className="text-sm font-medium">234 kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Water Protected</span>
                    <span className="text-sm font-medium">1,240 L</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Biogas Generated</span>
                    <span className="text-sm font-medium">78 m³</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rewards Summary */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Rewards Summary</CardTitle>
                <CardDescription className="text-slate-400">Your earnings and incentives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">KSh 480</div>
                  <p className="text-sm text-muted-foreground">Available balance</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">This month</span>
                    <span className="text-sm font-medium text-green-600">+KSh 180</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Last payout</span>
                    <span className="text-sm font-medium">KSh 300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total earned</span>
                    <span className="text-sm font-medium">KSh 2,340</span>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  Request Payout
                </Button>
              </CardContent>
            </Card>

            {/* Educational Resources */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Learn & Grow</CardTitle>
                <CardDescription className="text-slate-400">Educational resources and tips</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="#"
                  className="block p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="font-medium text-sm">Waste Sorting Guide</div>
                  <div className="text-xs text-muted-foreground">Learn proper organic waste separation</div>
                </Link>
                <Link
                  href="#"
                  className="block p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="font-medium text-sm">Composting at Home</div>
                  <div className="text-xs text-muted-foreground">Start your own composting system</div>
                </Link>
                <Link
                  href="#"
                  className="block p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="font-medium text-sm">Environmental Impact</div>
                  <div className="text-xs text-muted-foreground">Understanding your contribution</div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
