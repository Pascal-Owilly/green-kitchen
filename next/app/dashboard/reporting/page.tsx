"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Download, Calendar, DollarSign, Recycle, Users, Factory } from "lucide-react"

export default function ReportingPage() {
  const reports = [
    {
      title: "Monthly Waste Collection Report",
      period: "November 2024",
      status: "Ready",
      type: "Collection",
      size: "2.4 MB",
    },
    {
      title: "Financial Summary Report",
      period: "Q4 2024",
      status: "Processing",
      type: "Financial",
      size: "1.8 MB",
    },
    {
      title: "Biogas Production Analysis",
      period: "November 2024",
      status: "Ready",
      type: "Production",
      size: "3.1 MB",
    },
    {
      title: "Customer Payment Report",
      period: "November 2024",
      status: "Ready",
      type: "Payments",
      size: "1.2 MB",
    },
  ]

  const kpis = [
    {
      title: "Total Waste Collected",
      value: "45,230 kg",
      change: "+12.5%",
      trend: "up",
      icon: Recycle,
      color: "text-green-500",
    },
    {
      title: "Revenue Generated",
      value: "KSh 2,456,780",
      change: "+8.3%",
      trend: "up",
      icon: DollarSign,
      color: "text-blue-500",
    },
    {
      title: "Active Users",
      value: "1,247",
      change: "+15.2%",
      trend: "up",
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "Biogas Production",
      value: "12,450 m³",
      change: "+6.7%",
      trend: "up",
      icon: Factory,
      color: "text-emerald-500",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Reporting & Analytics</h1>
          <p className="text-slate-400 mt-2">Comprehensive reports and business intelligence</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Date Range
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <BarChart3 className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Card key={kpi.title} className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 ${kpi.color}`} />
                  <div className="flex items-center gap-1 text-green-500 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {kpi.change}
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">{kpi.title}</p>
                  <p className="text-2xl font-bold text-white">{kpi.value}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Available Reports */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-8 h-8 text-slate-400" />
                  <div>
                    <div className="font-medium text-white">{report.title}</div>
                    <div className="text-sm text-slate-400">
                      {report.period} • {report.size}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Badge className={`${report.status === "Ready" ? "bg-green-500" : "bg-yellow-500"} text-white`}>
                    {report.status}
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {report.type}
                  </Badge>
                  {report.status === "Ready" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-600 bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Operational Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Daily Collection Summary
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Waste Processing Report
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Route Efficiency Analysis
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Equipment Utilization
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Financial Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Revenue Analysis
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Payment Tracking
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Cost Analysis
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Profit & Loss Statement
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Environmental Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Carbon Footprint Reduction
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Biogas Production Metrics
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Waste Diversion Rates
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700">
              Environmental Impact Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
