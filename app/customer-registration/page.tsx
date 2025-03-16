import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, PawPrint, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CustomerRegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-background">
      <div className="container py-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-orange-500" />
              <h1 className="text-3xl font-bold">Join Finto</h1>
            </div>
            <p className="mt-2 text-xl text-muted-foreground">Create your account and find the perfect pet services</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Create Your Pet Profiles</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your furry friends to your account and keep track of their needs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Book Services with Ease</h3>
                  <p className="text-sm text-muted-foreground">
                    Find and book grooming, boarding, training, and more in just a few clicks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Manage Appointments</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep track of upcoming appointments and service history
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 hidden md:block">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Happy pets"
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>Fill in your details to get started with Finto</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="pet">Pet Information</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="Enter your phone number" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input type="password" placeholder="Create a password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm Password</label>
                        <Input type="password" placeholder="Confirm your password" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Address</label>
                      <Input placeholder="Street address" />
                      <div className="grid gap-4 sm:grid-cols-3">
                        <Input placeholder="City" />
                        <Input placeholder="State/Province" />
                        <Input placeholder="Zip/Postal Code" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="pet" className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pet Name</label>
                      <Input placeholder="Enter your pet's name" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Pet Type</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select pet type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dog">Dog</SelectItem>
                            <SelectItem value="cat">Cat</SelectItem>
                            <SelectItem value="bird">Bird</SelectItem>
                            <SelectItem value="small-animal">Small Animal</SelectItem>
                            <SelectItem value="reptile">Reptile</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Breed</label>
                        <Input placeholder="Enter breed" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Age</label>
                        <Input placeholder="Enter age" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Weight (lbs)</label>
                        <Input placeholder="Enter weight" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pet Photo</label>
                      <div className="rounded-lg border border-dashed p-6 text-center">
                        <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                        <p className="mt-2 text-sm font-medium">Upload a photo of your pet</p>
                        <p className="text-xs text-muted-foreground">This helps service providers recognize your pet</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Select Photo
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Medical Conditions or Special Needs</label>
                      <Textarea
                        placeholder="Enter any medical conditions, allergies, or special needs your pet has..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm font-medium">Preferred Services</h3>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="grooming-pref" />
                          <label htmlFor="grooming-pref" className="text-sm">
                            Pet Grooming
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="boarding-pref" />
                          <label htmlFor="boarding-pref" className="text-sm">
                            Pet Boarding/Hotel
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="training-pref" />
                          <label htmlFor="training-pref" className="text-sm">
                            Pet Training
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="veterinary-pref" />
                          <label htmlFor="veterinary-pref" className="text-sm">
                            Veterinary Services
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="mt-2">
                      Add Another Pet
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to Finto's{" "}
                    <Link href="/terms" className="text-primary underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Create Account & Find Services</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary underline">
                    Sign in
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

