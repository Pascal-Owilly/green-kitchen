"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Smartphone, Receipt, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react"

export default function CustomerPaymentsPage() {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [amount, setAmount] = useState("")

  const payments = [
    {
      id: "PAY001",
      customer: "John Doe",
      amount: 1500,
      method: "M-Pesa",
      type: "Cylinder Purchase",
      status: "completed",
      date: "2024-01-15 14:30",
      reference: "MPE123456",
    },
    {
      id: "PAY002",
      customer: "Mary Smith",
      amount: 240,
      method: "M-Pesa",
      type: "Market Kitchen",
      status: "pending",
      date: "2024-01-15 15:15",
      reference: "MPE123457",
    },
    {
      id: "PAY003",
      customer: "Peter Wilson",
      amount: 3000,
      method: "Bank Transfer",
      type: "Cylinder Purchase",
      status: "completed",
      date: "2024-01-15 10:20",
      reference: "BT789012",
    },
    {
      id: "PAY004",
      customer: "Sarah Johnson",
      amount: 180,
      method: "Cash",
      type: "Market Kitchen",
      status: "processing",
      date: "2024-01-15 16:45",
      reference: "CSH001",
    },
  ]

  const paybillStats = [
    { period: "Today", transactions: 45, amount: 67500, success: 98.5 },
    { period: "This Week", transactions: 312, amount: 468000, success: 97.8 },
    { period: "This Month", transactions: 1248, amount: 1872000, success: 98.2 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "processing":
        return "bg-blue-500"
      case "failed":
        return "bg-red-500"
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
          <h1 className="text-3xl font-bold text-white">Customer Payments</h1>
          <p className="text-slate-400">Manage customer payments and paybill transactions</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Process Payment
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Receipt className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Today's Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">KES 67,500</div>
            <p className="text-xs text-emerald-400">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">M-Pesa Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">42</div>
            <p className="text-xs text-blue-400">Today's paybill</p>
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

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <p className="text-xs text-yellow-400">Awaiting confirmation</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="transactions" className="data-[state=active]:bg-emerald-600">
            Recent Transactions
          </TabsTrigger>
          <TabsTrigger value="paybill" className="data-[state=active]:bg-emerald-600">
            Paybill Stats
          </TabsTrigger>
          <TabsTrigger value="process" className="data-[state=active]:bg-emerald-600">
            Process Payment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Payment Transactions</CardTitle>
              <CardDescription>View and manage customer payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(payment.status)}
                        <div>
                          <p className="font-medium text-white">{payment.customer}</p>
                          <p className="text-sm text-slate-400">
                            {payment.type} • {payment.date}
                          </p>
                          <p className="text-sm text-blue-400">Ref: {payment.reference}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-white">KES {payment.amount.toLocaleString()}</p>
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

        <TabsContent value="paybill" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paybillStats.map((stat) => (
              <Card key={stat.period} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                    {stat.period}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Transactions</span>
                      <span className="text-white font-semibold">{stat.transactions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Amount</span>
                      <span className="text-emerald-400 font-semibold">KES {stat.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Success Rate</span>
                      <span className="text-green-400 font-semibold">{stat.success}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${stat.success}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Paybill Configuration</CardTitle>
              <CardDescription>M-Pesa paybill settings and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-slate-300">Paybill Number</Label>
                    <p className="text-2xl font-bold text-emerald-400">522533</p>
                  </div>
                  <div>
                    <Label className="text-slate-300">Account Number Format</Label>
                    <p className="text-white">Customer Phone Number</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-slate-300">Business Name</Label>
                    <p className="text-white">Edscon Investment LTD</p>
                  </div>
                  <div>
                    <Label className="text-slate-300">Contact</Label>
                    <p className="text-white">0722290417</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="process" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Process Customer Payment</CardTitle>
              <CardDescription>Manually process customer payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customer" className="text-slate-300">
                    Customer
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="mary">Mary Smith</SelectItem>
                      <SelectItem value="peter">Peter Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="payment-type" className="text-slate-300">
                    Payment Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cylinder">Cylinder Purchase</SelectItem>
                      <SelectItem value="kitchen">Market Kitchen</SelectItem>
                      <SelectItem value="delivery">Delivery Fee</SelectItem>
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
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mpesa">M-Pesa</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {paymentMethod === "mpesa" && (
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone" className="text-slate-300">
                      Customer Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="0722290417" className="bg-slate-700 border-slate-600" />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Process Payment
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <Receipt className="w-4 h-4 mr-2" />
                  Generate Invoice
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
