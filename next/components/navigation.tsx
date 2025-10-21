"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Home,
  Users,
  Truck,
  Scale,
  CreditCard,
  Factory,
  Cylinder,
  ChefHat,
  Package,
  DollarSign,
  Settings,
  BarChart3,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  {
    label: "Waste Management",
    icon: Truck,
    children: [
      { href: "/dashboard/waste-management/collection", label: "Collection", icon: Truck },
      { href: "/dashboard/waste-management/weighing", label: "Weighing", icon: Scale },
      { href: "/dashboard/waste-management/payment", label: "Payment", icon: CreditCard },
    ],
  },
  {
    label: "Biodigester Kitchen",
    icon: Factory,
    children: [
      { href: "/dashboard/biodigester/production", label: "Production", icon: Factory },
      { href: "/dashboard/biodigester/cylinders", label: "Gas Cylinders", icon: Cylinder },
      { href: "/dashboard/biodigester/market-kitchen", label: "Open Market Kitchen", icon: ChefHat },
      { href: "/dashboard/biodigester/delivery", label: "Delivery", icon: Package },
      { href: "/dashboard/biodigester/customer-payments", label: "Customer Payments", icon: DollarSign },
    ],
  },
  {
    label: "Admin",
    icon: Settings,
    children: [
      { href: "/dashboard/admin/users", label: "Users", icon: Users },
      { href: "/dashboard/admin/roles", label: "Roles", icon: Settings },
      { href: "/dashboard/admin/dashboard", label: "Dashboard", icon: BarChart3 },
    ],
  },
  { href: "/dashboard/reporting", label: "Reporting", icon: BarChart3 },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>(["Waste Management", "Biodigester Kitchen", "Admin"])
  const pathname = usePathname()

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const isItemActive = (item: any) => {
    if (item.href) {
      return pathname === item.href || pathname.startsWith(item.href + "/")
    }
    if (item.children) {
      return item.children.some((child: any) => pathname === child.href || pathname.startsWith(child.href + "/"))
    }
    return false
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 md:hidden bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </div>
      </Button>

      {/* Navigation Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mb-8 hover:bg-slate-800 rounded-lg p-2 transition-colors duration-300 cursor-pointer">
            <div className="flex items-center gap-3">
              <Image
                src="/images/edscon-logo.png"
                alt="Edscon Investment LTD"
                width={40}
                height={40}
                className="rounded-lg hover:scale-110 transition-transform duration-300"
              />
              <div>
                <span className="text-lg font-bold text-emerald-400">EDSCON</span>
                <p className="text-xs text-slate-400">Investment LTD</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 flex-1 overflow-y-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = isItemActive(item)
              const isExpanded = expandedItems.includes(item.label)

              if (item.children) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-lg"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                      <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <div
                      className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.children.map((child) => {
                        const ChildIcon = child.icon
                        const isChildActive = pathname === child.href || pathname.startsWith(child.href + "/")

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                              isChildActive
                                ? "bg-emerald-500 text-white shadow-md"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <ChildIcon className="w-4 h-4" />
                            <span className="text-sm">{child.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="mt-6">
            <Button
              variant="ghost"
              className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
