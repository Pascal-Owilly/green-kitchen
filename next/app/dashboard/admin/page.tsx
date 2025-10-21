"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Truck,
  Factory,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  Leaf,
  BarChart3,
  Settings,
  UserCheck,
  Bell,
} from "lucide-react"

export default function AdminDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month")

  // Mock data for demonstration
  const systemStats = {
    totalUsers: 1247,
    activeCollectors: 89,
    biodigesterKitchens: 12,
    endBuyers: 456,
    wasteProcessed: 2847, // kg this month
    biogasProduced: 1423, // cubic meters
    co2Reduced: 5.2, // tons
    revenue: 45670, // KES
  }

  const recentAlerts = [
    { id: 1, type: "warning", message: "Biodigester Kitchen #3 temperature high", time: "2 hours ago" },
    { id: 2, type: "info", message: "New collector registration pending approval", time: "4 hours ago" },
    { id: 3, type: "success", message: "Monthly waste processing target achieved", time: "1 day ago" },
    { id: 4, type: "warning", message: "Payment delay for Route #7 collections", time: "2 days ago" },
  ]

  const topPerformers = [
    { name: "John Ochieng", role: "Collector", metric: "847 kg collected", rating: 4.9 },
    { name: "Green Valley Kitchen", role: "Biodigester", metric: "234 m³ biogas", rating: 4.8 },
    { name: "Mary Wanjiku", role: "Waste Generator", metric: "156 kg provided", rating: 4.7 },
    { name: "Kisumu Restaurant", role: "End Buyer", metric: "89 cylinders", rating: 4.6 },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-emerald-400 mb-2">Admin Dashboard</h1>
            <p className="text-slate-400">Green Kitchen System - Central Command</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 bg-transparent">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Users</CardTitle>
              <Users className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">{systemStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-emerald-400">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Waste Processed</CardTitle>
              <Leaf className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">{systemStats.wasteProcessed.toLocaleString()} kg</div>
              <p className="text-xs text-emerald-400">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Biogas Produced</CardTitle>
              <Factory className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">{systemStats.biogasProduced.toLocaleString()} m³</div>
              <p className="text-xs text-emerald-400">+15% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">KES {systemStats.revenue.toLocaleString()}</div>
              <p className="text-xs text-emerald-400">+22% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-900 border-slate-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-emerald-600">
              User Management
            </TabsTrigger>
            <TabsTrigger value="operations" className="data-[state=active]:bg-emerald-600">
              Operations
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-emerald-600">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Alerts */}
              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-emerald-400">System Alerts</CardTitle>
                  <CardDescription className="text-slate-400">Recent system notifications and alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800">
                      {alert.type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />}
                      {alert.type === "info" && <Clock className="w-5 h-5 text-blue-400 mt-0.5" />}
                      {alert.type === "success" && <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm text-slate-200">{alert.message}</p>
                        <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Performers */}
              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Top Performers</CardTitle>
                  <CardDescription className="text-slate-400">Highest performing users this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPerformers.map((performer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-200">{performer.name}</p>
                          <p className="text-xs text-slate-400">{performer.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-emerald-400">{performer.metric}</p>
                        <p className="text-xs text-slate-400">★ {performer.rating}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Environmental Impact */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Environmental Impact</CardTitle>
                <CardDescription className="text-slate-400">Lake Victoria protection metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">{systemStats.co2Reduced} tons</div>
                    <p className="text-sm text-slate-400">CO₂ Emissions Reduced</p>
                    <Progress value={65} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">89%</div>
                    <p className="text-sm text-slate-400">Waste Diverted from Lake</p>
                    <Progress value={89} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">234</div>
                    <p className="text-sm text-slate-400">Green Jobs Created</p>
                    <Progress value={78} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">User Management</CardTitle>
                <CardDescription className="text-slate-400">Manage all platform users and their roles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-800 text-center">
                    <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-100">689</div>
                    <p className="text-sm text-slate-400">Waste Generators</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800 text-center">
                    <Truck className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-100">89</div>
                    <p className="text-sm text-slate-400">Collectors</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800 text-center">
                    <Factory className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-100">12</div>
                    <p className="text-sm text-slate-400">Biodigester Kitchens</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800 text-center">
                    <ShoppingCart className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-100">456</div>
                    <p className="text-sm text-slate-400">End Buyers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Approve Pending Users
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-slate-300 bg-transparent">
                    Export User Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="operations" className="space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Operations Control</CardTitle>
                <CardDescription className="text-slate-400">Monitor and control system operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-200">Collection Routes</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                        <span className="text-slate-200">Route #1 - Kisumu Central</span>
                        <Badge className="bg-emerald-600">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                        <span className="text-slate-200">Route #2 - Kondele</span>
                        <Badge className="bg-emerald-600">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                        <span className="text-slate-200">Route #3 - Nyalenda</span>
                        <Badge variant="secondary">Scheduled</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-200">Biodigester Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                        <span className="text-slate-200">Kitchen #1 - Optimal</span>
                        <Badge className="bg-emerald-600">Online</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                        <span className="text-slate-200">Kitchen #2 - High Temp</span>
                        <Badge className="bg-amber-600">Warning</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                        <span className="text-slate-200">Kitchen #3 - Maintenance</span>
                        <Badge variant="destructive">Offline</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">System Analytics</CardTitle>
                <CardDescription className="text-slate-400">Comprehensive system performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg bg-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                      <h3 className="font-semibold text-slate-200">Collection Efficiency</h3>
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1">94.2%</div>
                    <p className="text-sm text-slate-400">Average collection success rate</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                      <h3 className="font-semibold text-slate-200">Growth Rate</h3>
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1">+18.5%</div>
                    <p className="text-sm text-slate-400">Monthly user growth</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <h3 className="font-semibold text-slate-200">Coverage Area</h3>
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1">847 km²</div>
                    <p className="text-sm text-slate-400">Service coverage area</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
