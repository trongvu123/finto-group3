"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import BookingSteps from "@/components/booking-steps"
import TimeSlotPicker from "@/components/time-slot-picker"
import { Metadata } from "next"

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-8">
        <Link
          href="/services/premium-dog-grooming"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Service
        </Link>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">Book Your Appointment</h1>
          <p className="mt-2 text-muted-foreground">Complete your booking for Premium Dog Grooming</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <BookingSteps currentStep={currentStep} />

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {currentStep === 1 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">Select Date & Time</h2>
                    <p className="text-sm text-muted-foreground">Choose your preferred appointment date and time</p>

                    <div className="mt-6 space-y-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-orange-500" />
                          <h3 className="font-medium">Select Date</h3>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-7">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                            <div
                              key={i}
                              className={`flex cursor-pointer flex-col items-center rounded-lg border p-3 transition-colors hover:border-orange-500 hover:bg-orange-50 ${selectedDate === day ? "border-orange-500 bg-orange-50" : ""
                                }`}
                              onClick={() => setSelectedDate(day)}
                            >
                              <span className="text-sm text-muted-foreground">{day}</span>
                              <span className="text-lg font-medium">{i + 10}</span>
                              <span className="text-xs text-muted-foreground">May</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <h3 className="font-medium">Select Time</h3>
                        </div>
                        <TimeSlotPicker selectedTime={selectedTime} onSelectTime={setSelectedTime} />
                      </div>

                      <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
                        <AlertCircle className="mt-0.5 h-5 w-5 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium">Appointment Duration</p>
                          <p className="text-xs text-muted-foreground">
                            This service typically takes 1.5 - 2 hours to complete. Please ensure you have enough time
                            allocated.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          onClick={handleNextStep}
                          disabled={!selectedDate || !selectedTime}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Continue to Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">Booking Details</h2>
                    <p className="text-sm text-muted-foreground">
                      Confirm your appointment details and add any special requests
                    </p>

                    <div className="mt-6 space-y-6">
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="PawPerfect Grooming" />
                              <AvatarFallback>PG</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">Premium Dog Grooming</h3>
                              <p className="text-sm text-muted-foreground">by PawPerfect Grooming</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">$45.00</div>
                            <div className="text-sm text-muted-foreground">1.5 - 2 hours</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-orange-500" />
                            <h3 className="font-medium">Date & Time</h3>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm">Wednesday, May 12, 2023</p>
                            <p className="text-sm">10:30 AM - 12:30 PM</p>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium">Your Pet</h3>
                          <div className="mt-2 flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                              <Image
                                src="/placeholder.svg?height=40&width=40"
                                alt="Pet"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Max</p>
                              <p className="text-xs text-muted-foreground">Golden Retriever, 3 years</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-2 font-medium">Special Requests</h3>
                        <Textarea placeholder="Any special instructions for the groomer..." className="min-h-[100px]" />
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={handlePreviousStep}>
                          Back
                        </Button>
                        <Button onClick={handleNextStep} className="bg-orange-500 hover:bg-orange-600">
                          Continue to Payment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 3 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">Payment Method</h2>
                    <p className="text-sm text-muted-foreground">Choose how you'd like to pay for your appointment</p>

                    <div className="mt-6 space-y-6">
                      <RadioGroup
                        value={selectedPayment || ""}
                        onValueChange={setSelectedPayment}
                        className="space-y-3"
                      >
                        <div
                          className={`rounded-lg border p-4 transition-colors ${selectedPayment === "card" ? "border-orange-500 bg-orange-50" : ""
                            }`}
                        >
                          <div className="flex items-start">
                            <RadioGroupItem value="card" id="card" className="mt-1" />
                            <div className="ml-3 flex-1">
                              <Label htmlFor="card" className="font-medium">
                                Credit or Debit Card
                              </Label>
                              <p className="text-sm text-muted-foreground">Pay securely with your card</p>
                              <div className="mt-4 space-y-3">
                                <div>
                                  <Label htmlFor="cardNumber" className="text-sm">
                                    Card Number
                                  </Label>
                                  <input
                                    id="cardNumber"
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <Label htmlFor="expiry" className="text-sm">
                                      Expiry Date
                                    </Label>
                                    <input
                                      id="expiry"
                                      type="text"
                                      placeholder="MM/YY"
                                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="cvc" className="text-sm">
                                      CVC
                                    </Label>
                                    <input
                                      id="cvc"
                                      type="text"
                                      placeholder="123"
                                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`rounded-lg border p-4 transition-colors ${selectedPayment === "paypal" ? "border-orange-500 bg-orange-50" : ""
                            }`}
                        >
                          <div className="flex items-start">
                            <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                            <div className="ml-3">
                              <Label htmlFor="paypal" className="font-medium">
                                PayPal
                              </Label>
                              <p className="text-sm text-muted-foreground">Pay using your PayPal account</p>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`rounded-lg border p-4 transition-colors ${selectedPayment === "later" ? "border-orange-500 bg-orange-50" : ""
                            }`}
                        >
                          <div className="flex items-start">
                            <RadioGroupItem value="later" id="later" className="mt-1" />
                            <div className="ml-3">
                              <Label htmlFor="later" className="font-medium">
                                Pay After Service
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Pay in person after the service is completed
                              </p>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={handlePreviousStep}>
                          Back
                        </Button>
                        <Button
                          onClick={handleNextStep}
                          disabled={!selectedPayment}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Confirm & Pay
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 4 && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <div className="rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                      <h2 className="mt-4 text-2xl font-bold">Booking Confirmed!</h2>
                      <p className="mt-2 text-muted-foreground">Your appointment has been successfully booked</p>

                      <div className="mt-8 w-full max-w-md rounded-lg border p-6">
                        <h3 className="font-medium">Booking Details</h3>
                        <div className="mt-4 space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Service:</span>
                            <span className="text-sm font-medium">Premium Dog Grooming</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Provider:</span>
                            <span className="text-sm font-medium">PawPerfect Grooming</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Date:</span>
                            <span className="text-sm font-medium">Wednesday, May 12, 2023</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Time:</span>
                            <span className="text-sm font-medium">10:30 AM - 12:30 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Pet:</span>
                            <span className="text-sm font-medium">Max (Golden Retriever)</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Total:</span>
                            <span className="text-sm font-bold">$45.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Payment Method:</span>
                            <span className="text-sm font-medium">Credit Card</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Booking ID:</span>
                            <span className="text-sm font-medium">#FNT12345</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button variant="outline">View Booking Details</Button>
                        <Button className="bg-orange-500 hover:bg-orange-600">Book Another Service</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold">Order Summary</h2>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-md">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Service"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm">Premium Dog Grooming</span>
                      </div>
                      <span className="font-medium">$45.00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Subtotal</span>
                      <span className="font-medium">$45.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Tax</span>
                      <span className="font-medium">$3.60</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="text-lg font-bold text-green-600">$48.60</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="rounded-lg bg-orange-50 p-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-500">New Customer</Badge>
                        <span className="text-sm font-medium">First-Time Discount</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        10% off your first booking with code WELCOME10
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-2 text-sm font-medium">Provider Information</h3>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="PawPerfect Grooming" />
                        <AvatarFallback>PG</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">PawPerfect Grooming</p>
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground">4.8 ★</span>
                          <span className="ml-1 text-xs text-muted-foreground">(124 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">123 Main Street, Anytown, CA 12345</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-2 text-sm font-medium">Cancellation Policy</h3>
                    <p className="text-xs text-muted-foreground">
                      Free cancellation up to 24 hours before your appointment. Cancellations within 24 hours may be
                      subject to a fee.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

