import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Edscon Investment LTD - Organic Waste Management Platform",
  description:
    "Digital platform by Edscon Investment LTD connecting waste generators, collectors, and biodigester kitchens in Western Kenya for sustainable waste management and Lake Victoria protection.",
  generator: "Edscon Investment LTD",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <div className="flex">
          <Navigation />
          <main className="flex-1 md:ml-64">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
