import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Clock, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ScheduleCollectionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/waste-generator">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Green Kitchen System</span>
              </div>
            </div>
            <Badge variant="secondary">Waste Generator</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-balance mb-2">Schedule Collection</h1>
          <p className="text-muted-foreground">
            Schedule a pickup for your organic waste and contribute to Lake Victoria protection.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Collection Details</CardTitle>
                <CardDescription>Provide information about your waste collection request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4:00 PM - 6:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wasteType">Waste Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select waste type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Kitchen Waste</SelectItem>
                      <SelectItem value="garden">Garden Waste</SelectItem>
                      <SelectItem value="mixed">Mixed Organic Waste</SelectItem>
                      <SelectItem value="restaurant">Restaurant Waste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity (kg)</Label>
                  <Input id="quantity" type="number" placeholder="e.g., 15" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Pickup Location</Label>
                  <Textarea
                    id="location"
                    placeholder="Provide detailed pickup address and any special instructions..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special instructions or information for the collector..."
                    rows={3}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">Schedule Collection</Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/waste-generator">Cancel</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Collection Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Collection Guidelines</CardTitle>
                <CardDescription>Prepare your waste for pickup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Sort Your Waste</div>
                      <div className="text-xs text-muted-foreground">
                        Separate organic waste from non-organic materials
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Use Proper Containers</div>
                      <div className="text-xs text-muted-foreground">
                        Place waste in biodegradable bags or containers
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Be Available</div>
                      <div className="text-xs text-muted-foreground">Ensure someone is present during pickup time</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Information */}
            <Card>
              <CardHeader>
                <CardTitle>Rewards & Pricing</CardTitle>
                <CardDescription>Earn rewards for your contribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Kitchen Waste</span>
                    <span className="text-sm font-medium text-primary">KSh 3/kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Garden Waste</span>
                    <span className="text-sm font-medium text-primary">KSh 2/kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mixed Organic</span>
                    <span className="text-sm font-medium text-primary">KSh 2.5/kg</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    Minimum collection: 5kg
                    <br />
                    Payment via M-Pesa within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Contact our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Response time: 2-4 hours</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
