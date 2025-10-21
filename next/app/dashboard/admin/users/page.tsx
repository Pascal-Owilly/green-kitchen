"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Plus, Search, Filter, Edit, Trash2, Mail, Phone, Shield } from "lucide-react"

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")

  const users = [
    {
      id: "U001",
      name: "John Doe",
      email: "john@example.com",
      phone: "0722290417",
      role: "waste-generator",
      status: "active",
      lastLogin: "2024-01-15 14:30",
      joinDate: "2024-01-01",
    },
    {
      id: "U002",
      name: "Mary Smith",
      email: "mary@example.com",
      phone: "0733383339",
      role: "collector",
      status: "active",
      lastLogin: "2024-01-15 15:15",
      joinDate: "2024-01-02",
    },
    {
      id: "U003",
      name: "Peter Wilson",
      email: "peter@example.com",
      phone: "0711217216",
      role: "biodigester-operator",
      status: "inactive",
      lastLogin: "2024-01-10 10:20",
      joinDate: "2024-01-03",
    },
    {
      id: "U004",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "0733454944",
      role: "admin",
      status: "active",
      lastLogin: "2024-01-15 16:45",
      joinDate: "2024-01-01",
    },
  ]

  const roles = [
    { id: "admin", name: "Administrator", description: "Full system access", users: 2, color: "bg-red-500" },
    {
      id: "waste-generator",
      name: "Waste Generator",
      description: "Submit waste for collection",
      users: 15,
      color: "bg-green-500",
    },
    { id: "collector", name: "Collector", description: "Collect and transport waste", users: 8, color: "bg-blue-500" },
    {
      id: "biodigester-operator",
      name: "Biodigester Operator",
      description: "Manage biogas production",
      users: 5,
      color: "bg-yellow-500",
    },
    { id: "end-buyer", name: "End Buyer", description: "Purchase biogas products", users: 12, color: "bg-purple-500" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "inactive":
        return "bg-gray-500"
      case "suspended":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getRoleColor = (role: string) => {
    const roleData = roles.find((r) => r.id === role)
    return roleData?.color || "bg-gray-500"
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterRole === "all" || user.role === filterRole
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <p className="text-slate-400">Manage system users and their permissions</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Mail className="w-4 h-4 mr-2" />
            Send Invites
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">42</div>
            <p className="text-xs text-emerald-400">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">38</div>
            <p className="text-xs text-green-400">90.5% active rate</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">New This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-blue-400">New registrations</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">User Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-slate-400">Different roles</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="users" className="data-[state=active]:bg-emerald-600">
            All Users
          </TabsTrigger>
          <TabsTrigger value="roles" className="data-[state=active]:bg-emerald-600">
            Roles
          </TabsTrigger>
          <TabsTrigger value="create" className="data-[state=active]:bg-emerald-600">
            Create User
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">System Users</CardTitle>
                  <CardDescription>Manage user accounts and permissions</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600"
                    />
                  </div>
                  <Select value={filterRole} onValueChange={setFilterRole}>
                    <SelectTrigger className="w-40 bg-slate-700 border-slate-600">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="waste-generator">Waste Generator</SelectItem>
                      <SelectItem value="collector">Collector</SelectItem>
                      <SelectItem value="biodigester-operator">Biodigester Operator</SelectItem>
                      <SelectItem value="end-buyer">End Buyer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Users className="w-8 h-8 text-emerald-400" />
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-sm text-slate-400 flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {user.email}
                        </p>
                        <p className="text-sm text-blue-400 flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {user.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Last login: {user.lastLogin}</p>
                        <p className="text-sm text-slate-400">Joined: {user.joinDate}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={`${getRoleColor(user.role)} text-white`}>{user.role.replace("-", " ")}</Badge>
                        <Badge className={`${getStatusColor(user.status)} text-white`}>{user.status}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-600 text-red-400 bg-transparent">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Card key={role.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    {role.name}
                  </CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Active Users</span>
                    <Badge className={`${role.color} text-white`}>{role.users}</Badge>
                  </div>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                    Manage Permissions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Create New User</CardTitle>
              <CardDescription>Add a new user to the system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">
                    Full Name
                  </Label>
                  <Input id="name" placeholder="Enter full name" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">
                    Phone Number
                  </Label>
                  <Input id="phone" type="tel" placeholder="0722290417" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-300">
                    User Role
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="waste-generator">Waste Generator</SelectItem>
                      <SelectItem value="collector">Collector</SelectItem>
                      <SelectItem value="biodigester-operator">Biodigester Operator</SelectItem>
                      <SelectItem value="end-buyer">End Buyer</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create User
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Invitation
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
