import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogIn, UserPlus } from "lucide-react"
import Image from "next/image"

export default function AuthNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <Image
            src="/images/edscon-logo.png"
            alt="Edscon Investment LTD"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Authentication Page Not Found</h2>
          <p className="text-muted-foreground mb-8">The authentication page you're looking for doesn't exist.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/auth/login">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/auth/register">
              <UserPlus className="w-4 h-4 mr-2" />
              Register
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
