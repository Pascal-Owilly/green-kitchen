"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Plus, Edit, Trash2, Lock, Unlock, Settings } from "lucide-react"

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = useState("")

  const roles = [
    {
      id: "admin",
      name: "Administrator",
      description: "Full system access and management",
      users: 2,
      permissions: ["all"],
      color: "bg-red-500",
    },
    {
      id: "waste-generator",
      name: "Waste Generator",
      description: "Submit waste for collection and track payments",
      users: 15,
      permissions: ["submit_waste", "view_payments", "schedule_collection"],
      color: "bg-green-500",
    },
    {
      id: "collector",
      name: "Collector",
      description: "Collect and transport waste to biodigester",
      users: 8,
      permissions: ["view_routes", "update_collection", "manage_weighing"],
      color: "bg-blue-500",
    },
    {
      id: "biodigester-operator",
      name: "Biodigester Operator",
      description: "Manage biogas production and cylinder filling",
      users: 5,
      permissions: ["manage_production", "fill_cylinders", "monitor_systems"],
      color: "bg-yellow-500",
    },
    {
      id: "end-buyer",
      name: "End Buyer",
      description: "Purchase biogas products and manage orders",
      users: 12,
      permissions: ["place_orders", "view_products", "make_payments"],
      color: "bg-purple-500",
    },
  ]

  const permissions = [
    { id: "submit_waste", name: "Submit Waste", category: "Waste Management" },
    { id: "view_payments", name: "View Payments", category: "Financial" },
    { id: "schedule_collection", name: "Schedule Collection", category: "Waste Management" },
    { id: "view_routes", name: "View Routes", category: "Collection" },
    { id: "update_collection", name: "Update Collection", category: "Collection" },
    { id: "manage_weighing", name: "Manage Weighing", category: "Collection" },
    { id: "manage_production", name: "Manage Production", category: "Biodigester" },
    { id: "fill_cylinders", name: "Fill Cylinders", category: "Biodigester" },
    { id: "monitor_systems", name: "Monitor Systems", category: "Biodigester" },
    { id: "place_orders", name: "Place Orders", category: "Sales" },
    { id: "view_products", name: "View Products", category: "Sales" },
    { id: "make_payments", name: "Make Payments", category: "Financial" },
    { id: "manage_users", name: "Manage Users", category: "Admin" },
    { id: "manage_roles", name: "Manage Roles", category: "Admin" },
    { id: "view_reports", name: "View Reports", category: "Admin" },
    { id: "system_settings", name: "System Settings", category: "Admin" },
  ]

  const permissionCategories = [...new Set(permissions.map((p) => p.category))]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Role Management</h1>
          <p className="text-slate-400">Manage user roles and permissions</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Role
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
            <CardTitle className="text-sm font-medium text-slate-400">Total Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-slate-400">System roles</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">42</div>
            <p className="text-xs text-green-400">Across all roles</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">16</div>
            <p className="text-xs text-blue-400">Available permissions</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">6</div>
            <p className="text-xs text-slate-400">Permission categories</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="roles" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="roles" className="data-[state=active]:bg-emerald-600">
            All Roles
          </TabsTrigger>
          <TabsTrigger value="permissions" className="data-[state=active]:bg-emerald-600">
            Permissions
          </TabsTrigger>
          <TabsTrigger value="create" className="data-[state=active]:bg-emerald-600">
            Create Role
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Card key={role.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-emerald-400" />
                      {role.name}
                    </CardTitle>
                    <Badge className={`${role.color} text-white`}>{role.users} users</Badge>
                  </div>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Permissions:</p>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.slice(0, 3).map((permission) => (
                        <Badge key={permission} variant="outline" className="text-xs border-slate-600 text-slate-300">
                          {permission.replace("_", " ")}
                        </Badge>
                      ))}
                      {role.permissions.length > 3 && (
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                          +{role.permissions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-600 text-slate-300 bg-transparent"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-600 text-red-400 bg-transparent">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-6">
          {permissionCategories.map((category) => (
            <Card key={category} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  {category} Permissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {permissions
                    .filter((p) => p.category === category)
                    .map((permission) => (
                      <div key={permission.id} className="flex items-center space-x-2 p-3 bg-slate-700 rounded-lg">
                        <Checkbox id={permission.id} />
                        <div className="flex-1">
                          <label htmlFor={permission.id} className="text-sm font-medium text-white cursor-pointer">
                            {permission.name}
                          </label>
                        </div>
                        <Unlock className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Create New Role</CardTitle>
              <CardDescription>Define a new role with specific permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role-name" className="text-slate-300">
                    Role Name
                  </Label>
                  <Input id="role-name" placeholder="Enter role name" className="bg-slate-700 border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role-description" className="text-slate-300">
                    Description
                  </Label>
                  <Input
                    id="role-description"
                    placeholder="Enter role description"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-slate-300">Assign Permissions</Label>
                {permissionCategories.map((category) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-sm font-medium text-emerald-400">{category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {permissions
                        .filter((p) => p.category === category)
                        .map((permission) => (
                          <div key={permission.id} className="flex items-center space-x-2">
                            <Checkbox id={`new-${permission.id}`} />
                            <label htmlFor={`new-${permission.id}`} className="text-sm text-slate-300 cursor-pointer">
                              {permission.name}
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Role
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
