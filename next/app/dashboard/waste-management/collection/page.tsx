"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Truck, MapPin, Clock, Users, Package, Search, Plus } from "lucide-react"

export default function CollectionPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const collections = [
    {
      id: "COL001",
      location: "Kisumu Central Market",
      status: "In Progress",
      collector: "John Ochieng",
      scheduledTime: "09:00 AM",
      estimatedWaste: "150 kg",
      generators: 12,
    },
    {
      id: "COL002",
      location: "Kondele Residential",
      status: "Pending",
      collector: "Mary Akinyi",
      scheduledTime: "11:00 AM",
      estimatedWaste: "200 kg",
      generators: 18,
    },
    {
      id: "COL003",
      location: "Nyamasaria Estate",
      status: "Completed",
      collector: "Peter Otieno",
      scheduledTime: "07:30 AM",
      estimatedWaste: "180 kg",
      generators: 15,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 hover:bg-green-600"
      case "In Progress":
        return "bg-blue-500 hover:bg-blue-600"
      case "Pending":
        return "bg-yellow-500 hover:bg-yellow-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const filteredCollections = collections.filter((collection) => {
    const matchesSearch =
      collection.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      collection.collector.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || collection.status.toLowerCase() === selectedStatus.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Waste Collection</h1>
          <p className="text-slate-400 mt-2">Manage and track waste collection routes</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Collection
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            placeholder="Search by location or collector..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedStatus === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus("all")}
            className="bg-slate-800 border-slate-700 hover:bg-slate-700"
          >
            All
          </Button>
          <Button
            variant={selectedStatus === "pending" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus("pending")}
            className="bg-slate-800 border-slate-700 hover:bg-slate-700"
          >
            Pending
          </Button>
          <Button
            variant={selectedStatus === "in progress" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus("in progress")}
            className="bg-slate-800 border-slate-700 hover:bg-slate-700"
          >
            In Progress
          </Button>
          <Button
            variant={selectedStatus === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedStatus("completed")}
            className="bg-slate-800 border-slate-700 hover:bg-slate-700"
          >
            Completed
          </Button>
        </div>
      </div>

      {/* Collection Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Today's Collections</p>
                <p className="text-xl sm:text-2xl font-bold text-white">8</p>
              </div>
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Total Waste (kg)</p>
                <p className="text-xl sm:text-2xl font-bold text-white">1,250</p>
              </div>
              <Package className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Active Collectors</p>
                <p className="text-xl sm:text-2xl font-bold text-white">5</p>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Completion Rate</p>
                <p className="text-xl sm:text-2xl font-bold text-white">92%</p>
              </div>
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Collection Routes */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Today's Collection Routes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCollections.map((collection) => (
              <div
                key={collection.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300 gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-white">{collection.location}</span>
                    <span className="text-sm text-slate-400">ID: {collection.id}</span>
                  </div>
                  <Badge
                    className={`${getStatusColor(collection.status)} text-white transition-colors duration-300 w-fit`}
                  >
                    {collection.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="truncate">{collection.collector}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{collection.scheduledTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Package className="w-4 h-4" />
                    <span>{collection.estimatedWaste}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{collection.generators} generators</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-600 bg-transparent w-full lg:w-auto"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
