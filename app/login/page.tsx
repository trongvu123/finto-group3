import Link from "next/link"
import Image from "next/image"
import { PawPrint, Mail, Lock, Github, Facebook, Apple } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-orange-50 to-background">
      <div className="container flex flex-1 items-center justify-center py-12">
        <div className="grid w-full gap-8 md:grid-cols-2 lg:gap-16">
          <div className="hidden flex-col justify-center md:flex">
            <div className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-orange-500" />
              <h1 className="text-3xl font-bold">Finto</h1>
            </div>
            <p className="mt-2 text-xl text-muted-foreground">Welcome back to the pet service platform</p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Find the Perfect Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with trusted pet service providers in your area
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Book with Confidence</h3>
                  <p className="text-sm text-muted-foreground">Read verified reviews and book services with ease</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Manage Your Pets</h3>
                  <p className="text-sm text-muted-foreground">Keep track of your pets' services and appointments</p>
                </div>
              </div>
            </div>

            <div className="relative mt-12">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Happy pets"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-none shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 md:hidden">
                  <PawPrint className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold">Finto</h2>
                </div>
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>Sign in to your account to continue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="Email address" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="password" placeholder="Password" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm font-medium text-orange-500 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Sign In</Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Apple className="mr-2 h-4 w-4" />
                    Apple
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link href="/customer-registration" className="text-orange-500 hover:underline">
                    Sign up
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

