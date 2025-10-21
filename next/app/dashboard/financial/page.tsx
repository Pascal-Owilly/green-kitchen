import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  Receipt,
  CreditCard,
  TrendingUp,
  Users,
  Scale,
  Smartphone,
  PiggyBank,
  BarChart3,
  FileText,
  Coins,
} from "lucide-react"

export default function FinancialDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-balance mb-2 text-emerald-400">Financial Management</h1>
        <p className="text-slate-400">
          Comprehensive financial overview of waste collection, payments, and redemptions
        </p>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">KSh 847,230</div>
            <p className="text-xs text-green-400">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Waste Payments</CardTitle>
            <Scale className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">KSh 234,560</div>
            <p className="text-xs text-slate-400">2,847 kg collected</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Credits Issued</CardTitle>
            <CreditCard className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">KSh 156,780</div>
            <p className="text-xs text-slate-400">Monthly payment users</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Paybill Revenue</CardTitle>
            <Smartphone className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">KSh 455,890</div>
            <p className="text-xs text-green-400">Cylinder & kitchen sales</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 bg-slate-900 border-slate-800">
          <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-600">
            Overview
          </TabsTrigger>
          <TabsTrigger value="receipts" className="data-[state=active]:bg-emerald-600">
            Receipts
          </TabsTrigger>
          <TabsTrigger value="credits" className="data-[state=active]:bg-emerald-600">
            Credits
          </TabsTrigger>
          <TabsTrigger value="paybill" className="data-[state=active]:bg-emerald-600">
            Paybill
          </TabsTrigger>
          <TabsTrigger value="market" className="data-[state=active]:bg-emerald-600">
            Market Kitchens
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-emerald-600">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue Breakdown */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Revenue Breakdown</CardTitle>
                  <CardDescription className="text-slate-400">Monthly financial performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-slate-300">Waste Collection Payments</span>
                      </div>
                      <span className="font-medium text-slate-100">KSh 234,560 (28%)</span>
                    </div>
                    <Progress value={28} className="h-2" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-300">Cylinder Sales (Paybill)</span>
                      </div>
                      <span className="font-medium text-slate-100">KSh 345,670 (41%)</span>
                    </div>
                    <Progress value={41} className="h-2" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-slate-300">Market Kitchen Usage</span>
                      </div>
                      <span className="font-medium text-slate-100">KSh 110,220 (13%)</span>
                    </div>
                    <Progress value={13} className="h-2" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-300">Credit Redemptions</span>
                      </div>
                      <span className="font-medium text-slate-100">KSh 156,780 (18%)</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700">
                    <Receipt className="w-4 h-4 mr-2" />
                    Generate Receipt
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Process Redemption
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Paybill Reconciliation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Financial Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-emerald-400">Today's Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Receipts Generated</span>
                    <span className="font-medium text-slate-100">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Credits Redeemed</span>
                    <span className="font-medium text-slate-100">KSh 12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Paybill Transactions</span>
                    <span className="font-medium text-slate-100">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Market Kitchen Revenue</span>
                    <span className="font-medium text-slate-100">KSh 3,670</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="receipts" className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Payment Receipts</CardTitle>
              <CardDescription className="text-slate-400">
                Waste collection payment receipts and weighing records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Recent Receipts */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                        <Receipt className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">Receipt #GKS-2024-001247</div>
                        <div className="text-sm text-slate-400">Mary Wanjiku - 24.5 kg @ KSh 20/kg</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-100">KSh 490</div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                        Paid
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                        <Receipt className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">Receipt #GKS-2024-001246</div>
                        <div className="text-sm text-slate-400">John Otieno - 16.2 kg @ KSh 22/kg</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-100">KSh 356</div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                        Paid
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                        <Receipt className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">Receipt #GKS-2024-001245</div>
                        <div className="text-sm text-slate-400">Grace Akinyi - 18.7 kg @ KSh 21/kg (Credit)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-100">KSh 393</div>
                      <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
                        Credit
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  View All Receipts
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="credits" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Credit Management</CardTitle>
                <CardDescription className="text-slate-400">Monthly payment users and credit balances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">247</div>
                      <div className="text-sm text-slate-400">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">KSh 156K</div>
                      <div className="text-sm text-slate-400">Total Credits</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">KSh 89K</div>
                      <div className="text-sm text-slate-400">Redeemed</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">Grace Akinyi</div>
                        <div className="text-sm text-slate-400">Monthly Credit User</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-emerald-400">KSh 1,247</div>
                        <div className="text-xs text-slate-400">Available</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">Peter Ouma</div>
                        <div className="text-sm text-slate-400">Monthly Credit User</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-emerald-400">KSh 890</div>
                        <div className="text-xs text-slate-400">Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-emerald-400">Redemption Options</CardTitle>
                <CardDescription className="text-slate-400">How credits are being redeemed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Coins className="w-5 h-5 text-blue-400" />
                      <span className="text-slate-300">Gas Cylinders</span>
                    </div>
                    <span className="font-medium text-slate-100">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <PiggyBank className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Fertilizer</span>
                    </div>
                    <span className="font-medium text-slate-100">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-yellow-400" />
                      <span className="text-slate-300">Cash Payment</span>
                    </div>
                    <span className="font-medium text-slate-100">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="paybill" className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Paybill Transactions</CardTitle>
              <CardDescription className="text-slate-400">M-Pesa paybill payments for cylinder sales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">156</div>
                        <div className="text-sm text-slate-400">Today's Transactions</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">KSh 234K</div>
                        <div className="text-sm text-slate-400">Today's Revenue</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">98.5%</div>
                        <div className="text-sm text-slate-400">Success Rate</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">+254701234567</div>
                        <div className="text-sm text-slate-400">Cylinder GV001 - Receipt: QR45X7Y9</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-100">KSh 1,500</div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                        Completed
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">+254702345678</div>
                        <div className="text-sm text-slate-400">Market Kitchen Usage - Receipt: QR45X7Y8</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-100">KSh 450</div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                        Completed
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market" className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Market Kitchen Revenue</CardTitle>
              <CardDescription className="text-slate-400">Pay-per-use biogas kitchens in local markets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-slate-800 border-slate-700">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-emerald-400">12</div>
                          <div className="text-sm text-slate-400">Active Kitchens</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-emerald-400">347</div>
                          <div className="text-sm text-slate-400">Daily Users</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">Kondele Market Kitchen</div>
                        <div className="text-sm text-slate-400">4 burners - KSh 50/hour</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-emerald-400">KSh 2,450</div>
                        <div className="text-xs text-slate-400">Today</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">Kisumu CBD Kitchen</div>
                        <div className="text-sm text-slate-400">6 burners - KSh 60/hour</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-emerald-400">KSh 3,120</div>
                        <div className="text-xs text-slate-400">Today</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-slate-200 mb-3">Usage Patterns</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Peak Hours (11AM-2PM)</span>
                      <span className="font-medium text-slate-100">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />

                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Evening (5PM-8PM)</span>
                      <span className="font-medium text-slate-100">23%</span>
                    </div>
                    <Progress value={23} className="h-2" />

                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Other Hours</span>
                      <span className="font-medium text-slate-100">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Financial Reports</CardTitle>
              <CardDescription className="text-slate-400">
                Comprehensive financial analytics and reporting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-200">Quick Reports</h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Daily Financial Summary
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Monthly Revenue Report
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Credit Utilization Analysis
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Payment Method Analysis
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-slate-200">Key Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Average Transaction Value</span>
                      <span className="font-medium text-slate-100">KSh 387</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Credit Redemption Rate</span>
                      <span className="font-medium text-slate-100">73%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Payment Success Rate</span>
                      <span className="font-medium text-slate-100">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Monthly Growth</span>
                      <span className="font-medium text-green-400">+12.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
