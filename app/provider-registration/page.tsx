import Link from "next/link"
import { ChevronLeft, Upload, Calendar, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import ProviderRegistrationSteps from "@/components/provider-registration-steps"

export default function ProviderRegistrationPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">Join Finto as a Service Provider</h1>
          <p className="mt-2 text-muted-foreground">Connect with pet owners and grow your business</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <ProviderRegistrationSteps />

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Tell us about yourself. This information will be verified during the review process.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="Enter your phone number" />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Business Information</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Name</label>
                    <Input placeholder="Enter your business name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Provider</SelectItem>
                        <SelectItem value="salon">Grooming Salon</SelectItem>
                        <SelectItem value="clinic">Veterinary Clinic</SelectItem>
                        <SelectItem value="training">Training Center</SelectItem>
                        <SelectItem value="boarding">Boarding Facility</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <label className="text-sm font-medium">Business Address</label>
                  <Input placeholder="Street address" />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Input placeholder="City" />
                    <Input placeholder="State/Province" />
                    <Input placeholder="Zip/Postal Code" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Services & Expertise</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Categories</label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="grooming" />
                        <label htmlFor="grooming" className="text-sm">
                          Pet Grooming
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="boarding" />
                        <label htmlFor="boarding" className="text-sm">
                          Pet Boarding/Hotel
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="training" />
                        <label htmlFor="training" className="text-sm">
                          Pet Training
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="veterinary" />
                        <label htmlFor="veterinary" className="text-sm">
                          Veterinary Services
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="walking" />
                        <label htmlFor="walking" className="text-sm">
                          Dog Walking
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sitting" />
                        <label htmlFor="sitting" className="text-sm">
                          Pet Sitting
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Years of Experience</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Professional Bio</label>
                    <Textarea
                      placeholder="Describe your experience, expertise, and what makes your services unique..."
                      className="min-h-[120px]"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Certifications & Portfolio</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Certifications & Licenses</label>
                    <div className="rounded-lg border border-dashed p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm font-medium">Upload your certifications</p>
                      <p className="text-xs text-muted-foreground">
                        Drag and drop or click to upload. Supported formats: PDF, JPG, PNG
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Select Files
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Portfolio Images</label>
                    <div className="rounded-lg border border-dashed p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm font-medium">Upload your work samples</p>
                      <p className="text-xs text-muted-foreground">
                        Show your best work. These images will be visible on your profile.
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Select Images
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Calendar className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Set Your Working Hours</p>
                      <p className="text-xs text-muted-foreground">Define when you're available to provide services</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Monday</label>
                        <Badge variant="outline">Available</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Start time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">9:00 AM</SelectItem>
                            <SelectItem value="10">10:00 AM</SelectItem>
                            <SelectItem value="11">11:00 AM</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="End time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5:00 PM</SelectItem>
                            <SelectItem value="6">6:00 PM</SelectItem>
                            <SelectItem value="7">7:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Tuesday</label>
                        <Badge variant="outline">Available</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Start time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">9:00 AM</SelectItem>
                            <SelectItem value="10">10:00 AM</SelectItem>
                            <SelectItem value="11">11:00 AM</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="End time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5:00 PM</SelectItem>
                            <SelectItem value="6">6:00 PM</SelectItem>
                            <SelectItem value="7">7:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="mt-2">
                    Add More Days
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-start gap-2 rounded-lg bg-muted p-4">
                <Shield className="mt-0.5 h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm font-medium">Verification Process</p>
                  <p className="text-xs text-muted-foreground">
                    All provider applications are reviewed by our team to ensure quality standards. This process
                    typically takes 1-3 business days.
                  </p>
                </div>
              </div>
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
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Submit for Review</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

