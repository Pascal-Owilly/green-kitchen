"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, Package, MapPin, Clock, Route, Plus, Navigation, Phone } from "lucide-react"

export default function DeliveryPage() {
  const [selectedRoute, setSelectedRoute] = useState("")

  const deliveries = [
    {
      id: "DEL001",
      customer: "John Doe",
      address: "123 Kenyatta Ave, Nairobi",
      phone: "0722290417",
      cylinders: "2x 10kg",
      status: "in-transit",
      driver: "James Mwangi",
      estimatedTime: "2:30 PM",
      distance: "5.2 km",
    },
    {
      id: "DEL002",
      customer: "Mary Smith",
      address: "456 Uhuru Highway, Nairobi",
      phone: "0733383339",
      cylinders: "1x 15kg",
      status: "pending",
      driver: "Peter Kamau",
      estimatedTime: "3:15 PM",
      distance: "8.1 km",
    },
    {
      id: "DEL003",
      customer: "Wilson Ochieng",
      address: "789 Moi Ave, Nairobi",
      phone: "0711217216",
      cylinders: "3x 5kg",
      status: "delivered",
      driver: "Samuel Kiprotich",
      estimatedTime: "Completed",
      distance: "3.7 km",
    },
  ]

  const routes = [
    { id: "R001", name: "Central Route", deliveries: 5, driver: "James Mwangi", status: "active", progress: 60 },
    { id: "R002", name: "Eastlands Route", deliveries: 3, driver: "Peter Kamau", status: "pending", progress: 0 },
    {
      id: "R003",
      name: "Westlands Route",
      deliveries: 4,
      driver: "Samuel Kiprotich",
      status: "completed",
      progress: 100,
    },
  ]

  const drivers = [
    { id: "D001", name: "James Mwangi", phone: "0722290417", vehicle: "KCA 123A", status: "active", deliveries: 5 },
    { id: "D002", name: "Peter Kamau", phone: "0733383339", vehicle: "KCB 456B", status: "available", deliveries: 0 },
    { id: "D003", name: "Samuel Kiprotich", phone: "0711217216", vehicle: "KCC 789C", status: "active", deliveries: 4 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500"
      case "in-transit":
        return "bg-blue-500"
      case "pending":
        return "bg-yellow-500"
      case "active":
        return "bg-emerald-500"
      case "completed":
        return "bg-green-500"
      case "available":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Delivery Management</h1>
          <p className="text-slate-400">Manage gas cylinder deliveries and routes</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Delivery
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Route className="w-4 h-4 mr-2" />
            Optimize Routes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Today's Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-emerald-400">8 completed, 4 pending</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Active Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2/3</div>
            <p className="text-xs text-blue-400">Currently on routes</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Avg Delivery Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">28 min</div>
            <p className="text-xs text-green-400">-5 min from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">96.5%</div>
            <p className="text-xs text-green-400">On-time deliveries</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="deliveries" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="deliveries" className="data-[state=active]:bg-emerald-600">
            Active Deliveries
          </TabsTrigger>
          <TabsTrigger value="routes" className="data-[state=active]:bg-emerald-600">
            Routes
          </TabsTrigger>
          <TabsTrigger value="drivers" className="data-[state=active]:bg-emerald-600">
            Drivers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="deliveries" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Today's Deliveries</CardTitle>
              <CardDescription>Track current delivery status and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deliveries.map((delivery) => (
                  <div key={delivery.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Package className="w-8 h-8 text-emerald-400" />
                      <div>
                        <p className="font-medium text-white">{delivery.customer}</p>
                        <p className="text-sm text-slate-400 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {delivery.address}
                        </p>
                        <p className="text-sm text-blue-400 flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {delivery.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-white">{delivery.cylinders}</p>
                        <p className="text-sm text-slate-400">Driver: {delivery.driver}</p>
                        <p className="text-sm text-slate-400 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {delivery.estimatedTime} • {delivery.distance}
                        </p>
                      </div>
                      <Badge className={`${getStatusColor(delivery.status)} text-white`}>{delivery.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="routes" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routes.map((route) => (
              <Card key={route.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Route className="w-5 h-5 text-emerald-400" />
                      {route.name}
                    </CardTitle>
                    <Badge className={`${getStatusColor(route.status)} text-white`}>{route.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-white">{route.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${route.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">
                      Deliveries: <span className="text-white">{route.deliveries}</span>
                    </p>
                    <p className="text-sm text-slate-400">
                      Driver: <span className="text-white">{route.driver}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-600 text-slate-300 bg-transparent"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Track
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drivers" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Driver Management</CardTitle>
              <CardDescription>Manage delivery drivers and vehicle assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {drivers.map((driver) => (
                  <div key={driver.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Truck className="w-8 h-8 text-emerald-400" />
                      <div>
                        <p className="font-medium text-white">{driver.name}</p>
                        <p className="text-sm text-slate-400">Vehicle: {driver.vehicle}</p>
                        <p className="text-sm text-blue-400 flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {driver.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-white">Active Deliveries</p>
                        <p className="text-2xl font-bold text-emerald-400">{driver.deliveries}</p>
                      </div>
                      <Badge className={`${getStatusColor(driver.status)} text-white`}>{driver.status}</Badge>
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
