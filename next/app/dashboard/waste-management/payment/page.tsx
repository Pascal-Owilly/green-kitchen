"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, DollarSign, Receipt, Clock, CheckCircle, AlertCircle, Smartphone } from "lucide-react"

export default function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState("")
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const recentPayments = [
    { id: "PAY001", generator: "John Doe", amount: 450, method: "M-Pesa", status: "completed", date: "2024-01-15" },
    { id: "PAY002", generator: "Mary Smith", amount: 320, method: "Cash", status: "pending", date: "2024-01-15" },
    { id: "PAY003", generator: "Peter Wilson", amount: 680, method: "M-Pesa", status: "completed", date: "2024-01-14" },
    {
      id: "PAY004",
      generator: "Sarah Johnson",
      amount: 290,
      method: "Bank Transfer",
      status: "processing",
      date: "2024-01-14",
    },
  ]

  const paymentMethods = [
    { id: "mpesa", name: "M-Pesa", icon: Smartphone, description: "Mobile money payment" },
    { id: "cash", name: "Cash", icon: DollarSign, description: "Cash payment" },
    { id: "bank", name: "Bank Transfer", icon: CreditCard, description: "Bank transfer" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "processing":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "pending":
        return <Clock className="w-4 h-4" />
      case "processing":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Payment Management</h1>
          <p className="text-slate-400">Process payments for waste collection services</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Receipt className="w-4 h-4 mr-2" />
          Generate Receipt
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Today's Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">KES 2,450</div>
            <p className="text-xs text-emerald-400">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-yellow-400">Awaiting processing</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">M-Pesa Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">24</div>
            <p className="text-xs text-blue-400">This week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">98.5%</div>
            <p className="text-xs text-green-400">Payment success</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="process" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="process" className="data-[state=active]:bg-emerald-600">
            Process Payment
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-emerald-600">
            Payment History
          </TabsTrigger>
          <TabsTrigger value="methods" className="data-[state=active]:bg-emerald-600">
            Payment Methods
          </TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Process New Payment</CardTitle>
              <CardDescription>Process payment for waste collection services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="generator" className="text-slate-300">
                    Waste Generator
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select generator" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="mary">Mary Smith</SelectItem>
                      <SelectItem value="peter">Peter Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-slate-300">
                    Amount (KES)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="method" className="text-slate-300">
                    Payment Method
                  </Label>
                  <Select value={selectedPayment} onValueChange={setSelectedPayment}>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mpesa">M-Pesa</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {selectedPayment === "mpesa" && (
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0722290417"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-slate-700 border-slate-600"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Process Payment
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Generate Invoice
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Payments</CardTitle>
              <CardDescription>View and manage payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(payment.status)}
                        <div>
                          <p className="font-medium text-white">{payment.generator}</p>
                          <p className="text-sm text-slate-400">
                            {payment.id} • {payment.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-white">KES {payment.amount}</p>
                        <p className="text-sm text-slate-400">{payment.method}</p>
                      </div>
                      <Badge className={`${getStatusColor(payment.status)} text-white`}>{payment.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card key={method.id} className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8 text-emerald-400" />
                      <div>
                        <CardTitle className="text-white">{method.name}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                      Configure
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
