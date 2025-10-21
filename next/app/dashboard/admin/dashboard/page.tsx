"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  Users,
  Truck,
  Factory,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  Download,
} from "lucide-react"

export default function AdminDashboardPage() {
  const systemStats = [
    { label: "Total Users", value: "42", change: "+3", trend: "up", icon: Users },
    { label: "Active Collections", value: "18", change: "+5", trend: "up", icon: Truck },
    { label: "Biogas Production", value: "2,450L", change: "+12%", trend: "up", icon: Factory },
    { label: "Monthly Revenue", value: "KES 125K", change: "+8%", trend: "up", icon: DollarSign },
  ]

  const recentActivities = [
    { id: 1, type: "user", message: "New user John Doe registered", time: "2 minutes ago", status: "info" },
    {
      id: 2,
      type: "collection",
      message: "Collection route completed by James Mwangi",
      time: "15 minutes ago",
      status: "success",
    },
    {
      id: 3,
      type: "production",
      message: "Biodigester BD001 reached optimal temperature",
      time: "1 hour ago",
      status: "success",
    },
    {
      id: 4,
      type: "payment",
      message: "Payment of KES 1,500 received from Mary Smith",
      time: "2 hours ago",
      status: "success",
    },
    { id: 5, type: "alert", message: "Biodigester BD002 requires maintenance", time: "3 hours ago", status: "warning" },
  ]

  const systemHealth = [
    { component: "Database", status: "healthy", uptime: "99.9%" },
    { component: "Payment Gateway", status: "healthy", uptime: "99.8%" },
    { component: "M-Pesa Integration", status: "healthy", uptime: "99.5%" },
    { component: "Biodigester Monitoring", status: "warning", uptime: "98.2%" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-400"
      case "warning":
        return "text-yellow-400"
      case "error":
        return "text-red-400"
      case "info":
        return "text-blue-400"
      case "healthy":
        return "bg-green-500"
      default:
        return "text-slate-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4" />
      case "warning":
        return <AlertTriangle className="w-4 h-4" />
      case "error":
        return <AlertTriangle className="w-4 h-4" />
      case "info":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-slate-400">System overview and management</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className={`text-xs ${stat.trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-600">
            System Overview
          </TabsTrigger>
          <TabsTrigger value="activities" className="data-[state=active]:bg-emerald-600">
            Recent Activities
          </TabsTrigger>
          <TabsTrigger value="health" className="data-[state=active]:bg-emerald-600">
            System Health
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">User Engagement</span>
                    <span className="text-white">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Collection Efficiency</span>
                    <span className="text-white">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Production Uptime</span>
                    <span className="text-white">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Payment Success</span>
                    <span className="text-white">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Growth Trends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">New Users</p>
                    <p className="text-2xl font-bold text-emerald-400">+23%</p>
                    <p className="text-xs text-slate-500">vs last month</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Revenue</p>
                    <p className="text-2xl font-bold text-emerald-400">+18%</p>
                    <p className="text-xs text-slate-500">vs last month</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Collections</p>
                    <p className="text-2xl font-bold text-emerald-400">+15%</p>
                    <p className="text-xs text-slate-500">vs last month</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Production</p>
                    <p className="text-2xl font-bold text-emerald-400">+12%</p>
                    <p className="text-xs text-slate-500">vs last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent System Activities</CardTitle>
              <CardDescription>Latest activities and events across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 bg-slate-700 rounded-lg">
                    <div className={`${getStatusColor(activity.status)}`}>{getStatusIcon(activity.status)}</div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-slate-400 text-xs">{activity.time}</p>
                    </div>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">System Health Status</CardTitle>
              <CardDescription>Monitor the health of system components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemHealth.map((component) => (
                  <div
                    key={component.component}
                    className="flex items-center justify-between p-4 bg-slate-700 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${component.status === "healthy" ? "bg-green-500" : "bg-yellow-500"}`}
                        />
                        <span className="text-white font-medium">{component.component}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Uptime</p>
                        <p className="text-white font-semibold">{component.uptime}</p>
                      </div>
                      <Badge className={`${getStatusColor(component.status)} text-white`}>{component.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
