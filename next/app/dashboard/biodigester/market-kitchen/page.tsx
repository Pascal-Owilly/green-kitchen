"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChefHat, Clock, MapPin, Plus, Play, Pause, Settings } from "lucide-react"

export default function MarketKitchenPage() {
  const [selectedKitchen, setSelectedKitchen] = useState("")

  const kitchens = [
    {
      id: "MK001",
      name: "Central Market Kitchen",
      location: "Nairobi Central Market",
      status: "active",
      customers: 12,
      revenue: 2450,
      sessions: 28,
      avgSession: 45,
    },
    {
      id: "MK002",
      name: "Eastlands Kitchen",
      location: "Eastlands Market",
      status: "active",
      customers: 8,
      revenue: 1680,
      sessions: 19,
      avgSession: 38,
    },
    {
      id: "MK003",
      name: "Westlands Kitchen",
      location: "Westlands Market",
      status: "maintenance",
      customers: 0,
      revenue: 0,
      sessions: 0,
      avgSession: 0,
    },
  ]

  const sessions = [
    {
      id: "S001",
      kitchen: "Central Market",
      customer: "Jane Doe",
      startTime: "09:30",
      duration: 45,
      cost: 180,
      status: "completed",
    },
    {
      id: "S002",
      kitchen: "Eastlands",
      customer: "John Smith",
      startTime: "10:15",
      duration: 30,
      cost: 120,
      status: "active",
    },
    {
      id: "S003",
      kitchen: "Central Market",
      customer: "Mary Wilson",
      startTime: "11:00",
      duration: 60,
      cost: 240,
      status: "completed",
    },
    {
      id: "S004",
      kitchen: "Westlands",
      customer: "Peter Johnson",
      startTime: "11:30",
      duration: 25,
      cost: 100,
      status: "active",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "maintenance":
        return "bg-yellow-500"
      case "offline":
        return "bg-red-500"
      case "completed":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Open Market Kitchens</h1>
          <p className="text-slate-400">Manage pay-per-use biogas cooking stations</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Kitchen
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
            <CardTitle className="text-sm font-medium text-slate-400">Active Kitchens</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2/3</div>
            <p className="text-xs text-green-400">Operating normally</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Today's Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">KES 4,130</div>
            <p className="text-xs text-emerald-400">+15% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2</div>
            <p className="text-xs text-blue-400">Currently cooking</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Avg Session Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">42 min</div>
            <p className="text-xs text-slate-400">Per cooking session</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="kitchens" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="kitchens" className="data-[state=active]:bg-emerald-600">
            Kitchen Status
          </TabsTrigger>
          <TabsTrigger value="sessions" className="data-[state=active]:bg-emerald-600">
            Active Sessions
          </TabsTrigger>
          <TabsTrigger value="pricing" className="data-[state=active]:bg-emerald-600">
            Pricing & Setup
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kitchens" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kitchens.map((kitchen) => (
              <Card key={kitchen.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <ChefHat className="w-5 h-5 text-emerald-400" />
                      {kitchen.name}
                    </CardTitle>
                    <Badge className={`${getStatusColor(kitchen.status)} text-white`}>{kitchen.status}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {kitchen.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Customers Today</p>
                      <p className="text-xl font-bold text-white">{kitchen.customers}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Revenue</p>
                      <p className="text-xl font-bold text-emerald-400">KES {kitchen.revenue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Sessions</p>
                      <p className="text-xl font-bold text-blue-400">{kitchen.sessions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Avg Time</p>
                      <p className="text-xl font-bold text-slate-300">{kitchen.avgSession}m</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {kitchen.status === "active" ? (
                      <Button size="sm" variant="destructive" className="flex-1">
                        <Pause className="w-4 h-4 mr-2" />
                        Pause
                      </Button>
                    ) : (
                      <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                        <Play className="w-4 h-4 mr-2" />
                        Start
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Active Cooking Sessions</CardTitle>
              <CardDescription>Monitor current and recent cooking sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="font-medium text-white">{session.customer}</p>
                          <p className="text-sm text-slate-400">
                            {session.kitchen} • Started: {session.startTime}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-white">{session.duration} minutes</p>
                        <p className="text-sm text-emerald-400">KES {session.cost}</p>
                      </div>
                      <Badge className={`${getStatusColor(session.status)} text-white`}>{session.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Pricing Configuration</CardTitle>
                <CardDescription>Set rates for pay-per-use cooking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="base-rate" className="text-slate-300">
                    Base Rate (KES per minute)
                  </Label>
                  <Input id="base-rate" type="number" placeholder="4" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minimum-charge" className="text-slate-300">
                    Minimum Charge (KES)
                  </Label>
                  <Input id="minimum-charge" type="number" placeholder="50" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="peak-multiplier" className="text-slate-300">
                    Peak Hours Multiplier
                  </Label>
                  <Input
                    id="peak-multiplier"
                    type="number"
                    step="0.1"
                    placeholder="1.5"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Update Pricing</Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Kitchen Setup</CardTitle>
                <CardDescription>Configure new market kitchen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="kitchen-name" className="text-slate-300">
                    Kitchen Name
                  </Label>
                  <Input id="kitchen-name" placeholder="Enter kitchen name" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-slate-300">
                    Location
                  </Label>
                  <Input id="location" placeholder="Market location" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity" className="text-slate-300">
                    Cooking Stations
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select capacity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 Stations</SelectItem>
                      <SelectItem value="4">4 Stations</SelectItem>
                      <SelectItem value="6">6 Stations</SelectItem>
                      <SelectItem value="8">8 Stations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Kitchen
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
