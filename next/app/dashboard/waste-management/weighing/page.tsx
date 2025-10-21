"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Scale, User, Receipt, CheckCircle } from "lucide-react"

export default function WeighingPage() {
  const [currentWeight, setCurrentWeight] = useState("0.00")
  const [isWeighing, setIsWeighing] = useState(false)

  const recentWeighings = [
    {
      id: "W001",
      generator: "Jane Wanjiku",
      weight: "25.5 kg",
      time: "10:30 AM",
      amount: "KSh 510",
      status: "Paid",
    },
    {
      id: "W002",
      generator: "David Ouma",
      weight: "18.2 kg",
      time: "10:15 AM",
      amount: "KSh 364",
      status: "Pending",
    },
    {
      id: "W003",
      generator: "Grace Nyong'o",
      weight: "32.1 kg",
      time: "09:45 AM",
      amount: "KSh 642",
      status: "Paid",
    },
  ]

  const startWeighing = () => {
    setIsWeighing(true)
    // Simulate weighing process
    let weight = 0
    const interval = setInterval(() => {
      weight += Math.random() * 2
      setCurrentWeight(weight.toFixed(2))
      if (weight > 25) {
        clearInterval(interval)
        setIsWeighing(false)
      }
    }, 100)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Waste Weighing Station</h1>
          <p className="text-slate-400 mt-2">Weigh waste and generate payment receipts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weighing Interface */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Digital Scale Interface
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Scale Display */}
            <div className="bg-slate-900 p-8 rounded-lg text-center">
              <div className="text-6xl font-mono font-bold text-emerald-400 mb-2">{currentWeight}</div>
              <div className="text-slate-400 text-lg">kg</div>
              {isWeighing && (
                <div className="mt-4">
                  <div className="animate-pulse text-blue-400">Weighing in progress...</div>
                </div>
              )}
            </div>

            {/* Generator Info */}
            <div className="space-y-4">
              <div>
                <Label className="text-slate-300">Generator Name</Label>
                <Input placeholder="Enter generator name" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div>
                <Label className="text-slate-300">Generator ID</Label>
                <Input placeholder="Scan ID or enter manually" className="bg-slate-700 border-slate-600 text-white" />
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <Button
                onClick={startWeighing}
                disabled={isWeighing}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                <Scale className="w-4 h-4 mr-2" />
                {isWeighing ? "Weighing..." : "Start Weighing"}
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                Reset Scale
              </Button>
            </div>

            {/* Payment Calculation */}
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300">Weight:</span>
                <span className="text-white font-medium">{currentWeight} kg</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300">Rate:</span>
                <span className="text-white font-medium">KSh 20/kg</span>
              </div>
              <div className="border-t border-slate-600 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-medium">Total Amount:</span>
                  <span className="text-emerald-400 font-bold text-lg">
                    KSh {(Number.parseFloat(currentWeight) * 20).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Receipt className="w-4 h-4 mr-2" />
              Generate Receipt & Process Payment
            </Button>
          </CardContent>
        </Card>

        {/* Recent Weighings */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Weighings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentWeighings.map((weighing) => (
                <div key={weighing.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <User className="w-8 h-8 text-slate-400" />
                    <div>
                      <div className="font-medium text-white">{weighing.generator}</div>
                      <div className="text-sm text-slate-400">
                        ID: {weighing.id} • {weighing.time}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-medium text-white">{weighing.weight}</div>
                    <div className="text-emerald-400 font-medium">{weighing.amount}</div>
                  </div>

                  <Badge className={weighing.status === "Paid" ? "bg-green-500" : "bg-yellow-500"}>
                    {weighing.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Weighed Today</p>
                <p className="text-2xl font-bold text-white">1,247 kg</p>
              </div>
              <Scale className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Transactions</p>
                <p className="text-2xl font-bold text-white">47</p>
              </div>
              <Receipt className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Payments</p>
                <p className="text-2xl font-bold text-white">KSh 24,940</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Average Weight</p>
                <p className="text-2xl font-bold text-white">26.5 kg</p>
              </div>
              <Scale className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
