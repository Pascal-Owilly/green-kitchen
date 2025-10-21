import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Users, TrendingUp, MapPin, Shield, User, LogOut, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/images/edscon-logo.png"
                alt="Edscon Investment LTD"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <div>
                <span className="text-lg font-bold text-primary">EDSCON</span>
                <p className="text-xs text-muted-foreground">Investment LTD</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
              <Button variant="ghost" asChild className="text-sm">
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button asChild className="text-sm">
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                Protecting Lake Victoria
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight mb-6">
                Transform organic waste into <span className="text-primary">sustainable revenue</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Join Kenya's first digital platform connecting waste generators, collectors, and biodigester kitchens.
                Create a circular economy while protecting our environment and generating income for communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/auth/register">Start Your Journey</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-6 sm:p-8 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-card rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/90 transition-colors duration-300">
                      <Recycle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Circular Economy</h3>
                    <p className="text-muted-foreground">Waste to Wealth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 hover:bg-card/50 rounded-lg transition-colors duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground text-sm sm:text-base">Pollution Reduction Target</div>
            </div>
            <div className="text-center p-4 hover:bg-card/50 rounded-lg transition-colors duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground text-sm sm:text-base">Green Jobs Created</div>
            </div>
            <div className="text-center p-4 hover:bg-card/50 rounded-lg transition-colors duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground text-sm sm:text-base">Households Served</div>
            </div>
            <div className="text-center p-4 hover:bg-card/50 rounded-lg transition-colors duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground text-sm sm:text-base">Counties Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">How the Green Kitchen System Works</h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our platform connects all stakeholders in the organic waste value chain, creating sustainable income
              opportunities while protecting Lake Victoria.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Waste Generators</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Households and businesses register and schedule waste collection
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Collectors</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Trained collectors pick up organic waste and transport to biodigester kitchens
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Biodigester Kitchens</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Convert organic waste into biogas and distribute cylinders to end-buyers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">End-Buyers</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Purchase clean biogas cylinders for cooking and other energy needs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-balance mb-4">Join as Any Role</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Whether you generate waste, collect it, process it, or need clean energy, there's a place for you in our
              ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Waste Generator
                </CardTitle>
                <CardDescription>Households, restaurants, markets</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Schedule waste collection</li>
                  <li>• Track pickup status</li>
                  <li>• Earn rewards for participation</li>
                  <li>• Access educational resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Collector
                </CardTitle>
                <CardDescription>Waste collection entrepreneurs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Manage collection routes</li>
                  <li>• Track earnings and payments</li>
                  <li>• Access training materials</li>
                  <li>• Build customer relationships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  Biodigester Kitchen
                </CardTitle>
                <CardDescription>Waste processing facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Manage waste intake</li>
                  <li>• Monitor biogas production</li>
                  <li>• Track cylinder distribution</li>
                  <li>• Optimize operations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  End-Buyer
                </CardTitle>
                <CardDescription>Clean energy consumers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Order biogas cylinders</li>
                  <li>• Track delivery status</li>
                  <li>• Manage payment methods</li>
                  <li>• Access usage analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-balance mb-6">Environmental Impact</h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                By diverting organic waste from Lake Victoria and converting it into clean energy, we're creating a
                sustainable solution that benefits both the environment and local communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Protecting Lake Victoria ecosystem</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-primary" />
                  <span>Reducing greenhouse gas emissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Recycle className="w-6 h-6 text-primary" />
                  <span>Creating circular economy opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Empowering local communities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
                <div className="w-full h-full bg-card rounded-2xl shadow-xl p-8 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Lake Victoria Protection</h3>
                    <p className="text-muted-foreground">Our mission for a cleaner future</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Pollution Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Renewable Energy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-balance mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Join the Green Kitchen System today and be part of Kenya's sustainable waste management revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/register">Get Started Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/edscon-logo.png"
                  alt="Edscon Investment LTD"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div>
                  <span className="text-lg font-bold text-primary">EDSCON</span>
                  <p className="text-xs text-muted-foreground">Investment LTD</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Transforming organic waste into sustainable revenue while protecting Lake Victoria.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/auth/register" className="hover:text-foreground">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="hover:text-foreground">
                    Impact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#contact" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Training
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:Edsconinvestment@gmail.com" className="hover:text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Edsconinvestment@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:0722290417" className="hover:text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    0722290417
                  </a>
                </li>
                <li>
                  <a href="tel:0733383339" className="hover:text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    0733383339
                  </a>
                </li>
                <li>
                  <a href="tel:0711217216" className="hover:text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    0711217216
                  </a>
                </li>
                <li>
                  <a href="tel:0733454944" className="hover:text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    0733454944
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2025 Edscon Investment LTD. All rights reserved. Protecting Lake Victoria through sustainable waste
              management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
