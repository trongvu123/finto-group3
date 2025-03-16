import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Check, MapPin, Calendar, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import ReviewForm from "@/components/review-form"
import GallerySection from "@/components/gallery-section"

export default function ServiceDetailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Back Button */}
      <div className="container mt-4">
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Premium Dog Grooming Service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <main className="flex-1">
        <div className="container relative -mt-20 px-4">
          <div className="rounded-xl bg-background p-6 shadow-lg">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="PawPerfect Grooming" />
                  <AvatarFallback>PG</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold md:text-3xl">Premium Dog Grooming</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">by PawPerfect Grooming</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">4.8</span>
                      <span className="ml-1 text-sm text-muted-foreground">(124 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">$45</span>
                <Badge className="bg-green-100 text-green-800">Best Seller</Badge>
              </div>
            </div>

            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold">Service Description</h2>
                        <p className="mt-2 text-muted-foreground">
                          Our premium dog grooming service includes a full bath with premium shampoo and conditioner,
                          blow dry, brush out, haircut, nail trimming, ear cleaning, and teeth brushing. Your furry
                          friend will look and feel their best after our comprehensive grooming session.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">What's Included</h2>
                        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Full bath with premium products</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Professional haircut</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Nail trimming</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Ear cleaning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Teeth brushing</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Cologne & bandana</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg bg-orange-50 p-4">
                          <Clock className="mb-2 h-5 w-5 text-orange-500" />
                          <h3 className="font-medium">Duration</h3>
                          <p className="text-sm text-muted-foreground">1.5 - 2 hours</p>
                        </div>
                        <div className="rounded-lg bg-green-50 p-4">
                          <MapPin className="mb-2 h-5 w-5 text-green-500" />
                          <h3 className="font-medium">Location</h3>
                          <p className="text-sm text-muted-foreground">In-store or Mobile</p>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-4">
                          <Calendar className="mb-2 h-5 w-5 text-blue-500" />
                          <h3 className="font-medium">Availability</h3>
                          <p className="text-sm text-muted-foreground">Mon-Sat, 9am-6pm</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">Why Choose Us</h2>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-start gap-2">
                            <Badge className="mt-1 bg-orange-100 text-orange-800">Certified</Badge>
                            <p>All our groomers are certified professionals with at least 3 years of experience</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge className="mt-1 bg-green-100 text-green-800">Premium</Badge>
                            <p>We use only premium, pet-safe products for all our grooming services</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge className="mt-1 bg-blue-100 text-blue-800">Comfort</Badge>
                            <p>
                              Our salon is designed to minimize stress and create a comfortable environment for your pet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="gallery" className="mt-6">
                    <GallerySection />
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-6">
                    <div className="space-y-6">
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jessica T." />
                            <AvatarFallback>JT</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">Jessica T.</h3>
                              <span className="ml-2 text-xs text-muted-foreground">2 days ago</span>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">
                          The grooming service was amazing! My dog looks and smells fantastic. The groomer was very
                          patient with my anxious pup and made him feel comfortable. Will definitely book again.
                        </p>
                        <div className="mt-2 flex gap-2 overflow-x-auto">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            width={80}
                            height={80}
                            alt="Review photo"
                            className="rounded-md"
                          />
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            width={80}
                            height={80}
                            alt="Review photo"
                            className="rounded-md"
                          />
                        </div>
                      </div>

                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael R." />
                            <AvatarFallback>MR</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">Michael R.</h3>
                              <span className="ml-2 text-xs text-muted-foreground">1 week ago</span>
                            </div>
                            <div className="flex">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              {[...Array(1)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-muted text-muted" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">
                          Great service overall. My golden retriever looks fantastic after the grooming session. The
                          only reason for 4 stars instead of 5 is that I had to wait a bit longer than the scheduled
                          time.
                        </p>
                      </div>

                      <ReviewForm />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h2 className="text-lg font-semibold">Book This Service</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Select your preferred date and time to book this premium grooming service.
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm font-medium">Select Date</label>
                    <input type="date" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Select Time</label>
                    <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Pet</label>
                    <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>Max (Golden Retriever)</option>
                      <option>Bella (Poodle)</option>
                      <option>Add New Pet</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Special Requests</label>
                    <textarea
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                      rows={3}
                      placeholder="Any special instructions for the groomer..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Link href={"/booking"}>
                      Book Appointment

                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Book Now Button (Mobile Only) */}
      <div className="sticky bottom-0 border-t bg-background p-4 md:hidden">
        <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Now - $45</Button>
      </div>
    </div>
  )
}

