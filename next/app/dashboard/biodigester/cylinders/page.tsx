"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cylinder, Package, QrCode, Plus, Search, Filter } from "lucide-react"

export default function CylindersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const cylinders = [
    {
      id: "CYL001",
      size: "5kg",
      status: "filled",
      location: "Storage A",
      pressure: 15,
      lastFilled: "2024-01-15",
      customer: "John Doe",
    },
    {
      id: "CYL002",
      size: "10kg",
      status: "empty",
      location: "Collection Point",
      pressure: 0,
      lastFilled: "2024-01-10",
      customer: "",
    },
    {
      id: "CYL003",
      size: "15kg",
      status: "filled",
      location: "Storage B",
      pressure: 18,
      lastFilled: "2024-01-14",
      customer: "Mary Smith",
    },
    {
      id: "CYL004",
      size: "5kg",
      status: "in-transit",
      location: "Delivery Truck 1",
      pressure: 14,
      lastFilled: "2024-01-15",
      customer: "Peter Wilson",
    },
    {
      id: "CYL005",
      size: "10kg",
      status: "maintenance",
      location: "Workshop",
      pressure: 0,
      lastFilled: "2024-01-08",
      customer: "",
    },
    {
      id: "CYL006",
      size: "15kg",
      status: "filled",
      location: "Storage A",
      pressure: 16,
      lastFilled: "2024-01-15",
      customer: "",
    },
  ]

  const inventory = [
    { size: "5kg", total: 50, filled: 32, empty: 15, maintenance: 3 },
    { size: "10kg", total: 30, filled: 18, empty: 10, maintenance: 2 },
    { size: "15kg", total: 20, filled: 12, empty: 6, maintenance: 2 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "filled":
        return "bg-green-500"
      case "empty":
        return "bg-gray-500"
      case "in-transit":
        return "bg-blue-500"
      case "maintenance":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const filteredCylinders = cylinders.filter((cylinder) => {
    const matchesSearch =
      cylinder.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cylinder.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || cylinder.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Gas Cylinders</h1>
          <p className="text-slate-400">Manage gas cylinder inventory and tracking</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Cylinder
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <QrCode className="w-4 h-4 mr-2" />
            Scan QR
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Cylinders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">100</div>
            <p className="text-xs text-slate-400">All sizes combined</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Filled Cylinders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">62</div>
            <p className="text-xs text-green-400">Ready for delivery</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Empty Cylinders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">31</div>
            <p className="text-xs text-yellow-400">Need refilling</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">7</div>
            <p className="text-xs text-blue-400">Out for delivery</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="inventory" className="data-[state=active]:bg-emerald-600">
            Inventory
          </TabsTrigger>
          <TabsTrigger value="tracking" className="data-[state=active]:bg-emerald-600">
            Tracking
          </TabsTrigger>
          <TabsTrigger value="filling" className="data-[state=active]:bg-emerald-600">
            Filling Station
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inventory.map((item) => (
              <Card key={item.size} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Cylinder className="w-5 h-5 text-emerald-400" />
                    {item.size} Cylinders
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Total</p>
                      <p className="text-2xl font-bold text-white">{item.total}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Filled</p>
                      <p className="text-2xl font-bold text-green-400">{item.filled}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Empty</p>
                      <p className="text-2xl font-bold text-gray-400">{item.empty}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Maintenance</p>
                      <p className="text-2xl font-bold text-yellow-400">{item.maintenance}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                    <Package className="w-4 h-4 mr-2" />
                    Manage Stock
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Cylinder Tracking</CardTitle>
                  <CardDescription>Track individual cylinder status and location</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      placeholder="Search cylinders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-32 bg-slate-700 border-slate-600">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="filled">Filled</SelectItem>
                      <SelectItem value="empty">Empty</SelectItem>
                      <SelectItem value="in-transit">In Transit</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredCylinders.map((cylinder) => (
                  <div key={cylinder.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Cylinder className="w-8 h-8 text-emerald-400" />
                      <div>
                        <p className="font-medium text-white">{cylinder.id}</p>
                        <p className="text-sm text-slate-400">
                          {cylinder.size} • {cylinder.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Pressure: {cylinder.pressure} bar</p>
                        <p className="text-sm text-slate-400">Last filled: {cylinder.lastFilled}</p>
                        {cylinder.customer && <p className="text-sm text-blue-400">Customer: {cylinder.customer}</p>}
                      </div>
                      <Badge className={`${getStatusColor(cylinder.status)} text-white`}>{cylinder.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="filling" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Filling Station</CardTitle>
              <CardDescription>Fill empty cylinders with biogas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cylinder-id" className="text-slate-300">
                    Cylinder ID
                  </Label>
                  <Input id="cylinder-id" placeholder="Enter cylinder ID" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-pressure" className="text-slate-300">
                    Target Pressure (bar)
                  </Label>
                  <Input
                    id="target-pressure"
                    type="number"
                    placeholder="15"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Cylinder className="w-4 h-4 mr-2" />
                  Start Filling
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <QrCode className="w-4 h-4 mr-2" />
                  Scan Cylinder
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
