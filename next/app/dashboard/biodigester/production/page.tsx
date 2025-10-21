"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Factory, Thermometer, Gauge, Zap, TrendingUp, AlertTriangle, Play, Pause, Settings } from "lucide-react"

export default function ProductionPage() {
  const [isProducing, setIsProducing] = useState(true)
  const [temperature, setTemperature] = useState(38)
  const [pressure, setPressure] = useState(2.5)
  const [gasOutput, setGasOutput] = useState(85)

  const productionData = [
    { id: "BD001", status: "active", temperature: 38, pressure: 2.5, output: 85, efficiency: 92 },
    { id: "BD002", status: "maintenance", temperature: 0, pressure: 0, output: 0, efficiency: 0 },
    { id: "BD003", status: "active", temperature: 36, pressure: 2.2, output: 78, efficiency: 88 },
    { id: "BD004", status: "active", temperature: 39, pressure: 2.7, output: 92, efficiency: 95 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "maintenance":
        return "bg-yellow-500"
      case "offline":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return "text-green-400"
    if (efficiency >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Biogas Production</h1>
          <p className="text-slate-400">Monitor and control biodigester operations</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={isProducing ? "destructive" : "default"}
            onClick={() => setIsProducing(!isProducing)}
            className={isProducing ? "" : "bg-emerald-600 hover:bg-emerald-700"}
          >
            {isProducing ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isProducing ? "Pause Production" : "Start Production"}
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Daily Production</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2,450 L</div>
            <p className="text-xs text-emerald-400">+8% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Active Digesters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3/4</div>
            <p className="text-xs text-green-400">Operating normally</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Avg Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">37.8°C</div>
            <p className="text-xs text-blue-400">Optimal range</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">91.7%</div>
            <p className="text-xs text-green-400">Above target</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-600">
            Overview
          </TabsTrigger>
          <TabsTrigger value="digesters" className="data-[state=active]:bg-emerald-600">
            Digesters
          </TabsTrigger>
          <TabsTrigger value="control" className="data-[state=active]:bg-emerald-600">
            Control Panel
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-red-400" />
                  Temperature Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Current Temperature</span>
                    <span className="text-white">{temperature}°C</span>
                  </div>
                  <Progress value={(temperature / 50) * 100} className="h-2" />
                </div>
                <div className="text-xs text-slate-400">Optimal range: 35-40°C</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-blue-400" />
                  Pressure Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Current Pressure</span>
                    <span className="text-white">{pressure} bar</span>
                  </div>
                  <Progress value={(pressure / 5) * 100} className="h-2" />
                </div>
                <div className="text-xs text-slate-400">Safe range: 1.5-3.0 bar</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Gas Output
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Current Output</span>
                    <span className="text-white">{gasOutput} L/hr</span>
                  </div>
                  <Progress value={gasOutput} className="h-2" />
                </div>
                <div className="text-xs text-slate-400">Target: 80-100 L/hr</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Production Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">This Week</span>
                    <span className="text-emerald-400">+12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">This Month</span>
                    <span className="text-emerald-400">+8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Efficiency</span>
                    <span className="text-green-400">91.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="digesters" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionData.map((digester) => (
              <Card key={digester.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Factory className="w-5 h-5 text-emerald-400" />
                      Digester {digester.id}
                    </CardTitle>
                    <Badge className={`${getStatusColor(digester.status)} text-white`}>{digester.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Temperature</p>
                      <p className="text-lg font-semibold text-white">{digester.temperature}°C</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Pressure</p>
                      <p className="text-lg font-semibold text-white">{digester.pressure} bar</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Output</p>
                      <p className="text-lg font-semibold text-white">{digester.output} L/hr</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Efficiency</p>
                      <p className={`text-lg font-semibold ${getEfficiencyColor(digester.efficiency)}`}>
                        {digester.efficiency}%
                      </p>
                    </div>
                  </div>
                  {digester.status === "maintenance" && (
                    <div className="flex items-center gap-2 p-2 bg-yellow-500/10 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400">Scheduled maintenance in progress</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="control" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Production Control Panel</CardTitle>
              <CardDescription>Adjust production parameters and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="target-temp" className="text-slate-300">
                    Target Temperature (°C)
                  </Label>
                  <Input
                    id="target-temp"
                    type="number"
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-pressure" className="text-slate-300">
                    Target Pressure (bar)
                  </Label>
                  <Input
                    id="target-pressure"
                    type="number"
                    step="0.1"
                    value={pressure}
                    onChange={(e) => setPressure(Number(e.target.value))}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-output" className="text-slate-300">
                    Target Output (L/hr)
                  </Label>
                  <Input
                    id="target-output"
                    type="number"
                    value={gasOutput}
                    onChange={(e) => setGasOutput(Number(e.target.value))}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Settings</Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Reset to Default
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
