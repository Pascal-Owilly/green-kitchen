"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Scale, Receipt, User, CheckCircle, Clock } from "lucide-react"

export default function WeighingStation() {
  const [currentWeight, setCurrentWeight] = useState("0.00")
  const [isWeighing, setIsWeighing] = useState(false)

  const handleStartWeighing = () => {
    setIsWeighing(true)
    // Simulate weighing process
    setTimeout(() => {
      setCurrentWeight((Math.random() * 50 + 10).toFixed(2))
      setIsWeighing(false)
    }, 3000)
  }

  const handleGenerateReceipt = () => {
    // Generate receipt logic
    alert("Receipt generated successfully!")
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2 text-emerald-400">Weighing Station</h1>
          <p className="text-slate-400">Kondele Collection Center - Waste weighing and payment processing</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Weighing Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Collection */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Active Collection
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Process waste collection and generate payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Collection Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="generator" className="text-slate-300">
                      Waste Generator
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select generator" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="mary">Mary Wanjiku - Wanjiku Hotel</SelectItem>
                        <SelectItem value="john">John Otieno - Otieno Fresh Produce</SelectItem>
                        <SelectItem value="grace">Grace Akinyi - Akinyi Catering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="collector" className="text-slate-300">
                      Collector
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select collector" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="peter">Peter Ochieng - KBZ 123A</SelectItem>
                        <SelectItem value="samuel">Samuel Kiprotich - KBZ 456B</SelectItem>
                        <SelectItem value="david">David Mwangi - KMCA 789C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="waste-type" className="text-slate-300">
                      Waste Type
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="food">Food Waste</SelectItem>
                        <SelectItem value="vegetable">Vegetable Waste</SelectItem>
                        <SelectItem value="mixed">Mixed Organic</SelectItem>
                        <SelectItem value="fruit">Fruit Waste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estimated" className="text-slate-300">
                      Estimated Weight (kg)
                    </Label>
                    <Input id="estimated" type="number" placeholder="0.00" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>

                {/* Weighing Display */}
                <div className="text-center py-8 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/50">
                  <div className="space-y-4">
                    <Scale
                      className={`w-16 h-16 mx-auto ${isWeighing ? "text-yellow-400 animate-pulse" : "text-emerald-400"}`}
                    />
                    <div>
                      <div className="text-4xl font-bold text-emerald-400 mb-2">
                        {isWeighing ? "Weighing..." : `${currentWeight} kg`}
                      </div>
                      <div className="text-slate-400">
                        {isWeighing ? "Please wait while we measure the waste" : "Current weight reading"}
                      </div>
                    </div>
                    <Button
                      onClick={handleStartWeighing}
                      disabled={isWeighing}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      {isWeighing ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Weighing...
                        </>
                      ) : (
                        <>
                          <Scale className="w-4 h-4 mr-2" />
                          Start Weighing
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Payment Calculation */}
                {currentWeight !== "0.00" && !isWeighing && (
                  <div className="space-y-4 p-4 bg-slate-800 rounded-lg">
                    <h4 className="font-medium text-slate-200">Payment Calculation</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="rate" className="text-slate-300">
                          Rate per kg (KSh)
                        </Label>
                        <Input id="rate" type="number" defaultValue="20" className="bg-slate-700 border-slate-600" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payment-type" className="text-slate-300">
                          Payment Type
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-slate-700 border-slate-600">
                            <SelectValue placeholder="Select payment type" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="immediate">Immediate M-Pesa</SelectItem>
                            <SelectItem value="credit">Monthly Credit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                      <span className="text-slate-300">Total Amount:</span>
                      <span className="text-2xl font-bold text-emerald-400">
                        KSh {(Number.parseFloat(currentWeight) * 20).toFixed(2)}
                      </span>
                    </div>
                    <Button onClick={handleGenerateReceipt} className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Receipt className="w-4 h-4 mr-2" />
                      Generate Receipt & Process Payment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Summary */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Today's Summary</CardTitle>
                <CardDescription className="text-slate-400">Kondele Collection Center</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">47</div>
                  <p className="text-sm text-slate-400">Collections Processed</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Total Weight</span>
                    <span className="text-sm font-medium text-slate-200">1,247 kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Total Payments</span>
                    <span className="text-sm font-medium text-slate-200">KSh 24,940</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">M-Pesa Payments</span>
                    <span className="text-sm font-medium text-green-400">32</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Credit Payments</span>
                    <span className="text-sm font-medium text-yellow-400">15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Recent Transactions</CardTitle>
                <CardDescription className="text-slate-400">Latest processed collections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-200">Mary W.</div>
                    <div className="text-xs text-slate-400">24.5 kg - KSh 490</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                    Paid
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-200">John O.</div>
                    <div className="text-xs text-slate-400">16.2 kg - KSh 356</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                    Paid
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-200">Grace A.</div>
                    <div className="text-xs text-slate-400">18.7 kg - KSh 393</div>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20 text-xs">
                    Credit
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Station Status */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Station Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Scale Status</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                    Online
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">M-Pesa Connection</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Receipt Printer</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                    Ready
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Last Calibration</span>
                  <span className="text-sm text-slate-400">2 days ago</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
