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
          Quay lại Dịch vụ
        </Link>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">Đặt Lịch Hẹn Của Bạn</h1>
          <p className="mt-2 text-muted-foreground">Hoàn thành đặt lịch của bạn cho Dịch vụ Chăm sóc Chó Cao cấp</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <BookingSteps currentStep={currentStep} />

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {currentStep === 1 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">Chọn Ngày & Giờ</h2>
                    <p className="text-sm text-muted-foreground">Chọn ngày và giờ hẹn ưa thích của bạn</p>

                    <div className="mt-6 space-y-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-orange-500" />
                          <h3 className="font-medium">Chọn Ngày</h3>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-7">
                          {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((day, i) => (
                            <div
                              key={i}
                              className={`flex cursor-pointer flex-col items-center rounded-lg border p-3 transition-colors hover:border-orange-500 hover:bg-orange-50 ${selectedDate === day ? "border-orange-500 bg-orange-50" : ""
                                }`}
                              onClick={() => setSelectedDate(day)}
                            >
                              <span className="text-sm text-muted-foreground">{day}</span>
                              <span className="text-lg font-medium">{i + 10}</span>
                              <span className="text-xs text-muted-foreground">Tháng 5</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <h3 className="font-medium">Chọn Giờ</h3>
                        </div>
                        <TimeSlotPicker selectedTime={selectedTime} onSelectTime={setSelectedTime} />
                      </div>

                      <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
                        <AlertCircle className="mt-0.5 h-5 w-5 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium">Thời gian Buổi hẹn</p>
                          <p className="text-xs text-muted-foreground">
                            Dịch vụ này thường mất 1.5 - 2 giờ để hoàn thành. Vui lòng đảm bảo bạn có đủ thời gian.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          onClick={handleNextStep}
                          disabled={!selectedDate || !selectedTime}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Tiếp tục đến Chi tiết
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">Chi tiết Đặt lịch</h2>
                    <p className="text-sm text-muted-foreground">
                      Xác nhận chi tiết cuộc hẹn của bạn và thêm bất kỳ yêu cầu đặc biệt nào
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
                              <h3 className="font-medium">Dịch vụ Chăm sóc Chó Cao cấp</h3>
                              <p className="text-sm text-muted-foreground">bởi PawPerfect Grooming</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">45.000đ</div>
                            <div className="text-sm text-muted-foreground">1.5 - 2 giờ</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-orange-500" />
                            <h3 className="font-medium">Ngày & Giờ</h3>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm">Thứ Tư, ngày 12 tháng 5, 2023</p>
                            <p className="text-sm">10:30 - 12:30</p>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium">Thú cưng của bạn</h3>
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
                              <p className="text-xs text-muted-foreground">Golden Retriever, 3 tuổi</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-2 font-medium">Yêu cầu Đặc biệt</h3>
                        <Textarea placeholder="Bất kỳ hướng dẫn đặc biệt nào cho người cắt tỉa..." className="min-h-[100px]" />
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={handlePreviousStep}>
                          Quay lại
                        </Button>
                        <Button onClick={handleNextStep} className="bg-orange-500 hover:bg-orange-600">
                          Tiếp tục đến Thanh toán
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 3 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">Phương thức Thanh toán</h2>
                    <p className="text-sm text-muted-foreground">Chọn cách bạn muốn thanh toán cho cuộc hẹn</p>

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
                                Thẻ Tín dụng hoặc Ghi nợ
                              </Label>
                              <p className="text-sm text-muted-foreground">Thanh toán an toàn bằng thẻ của bạn</p>
                              <div className="mt-4 space-y-3">
                                <div>
                                  <Label htmlFor="cardNumber" className="text-sm">
                                    Số Thẻ
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
                                      Ngày hết hạn
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
                              <p className="text-sm text-muted-foreground">Thanh toán bằng tài khoản PayPal của bạn</p>
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
                                Thanh toán Sau Dịch vụ
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Thanh toán trực tiếp sau khi dịch vụ hoàn thành
                              </p>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={handlePreviousStep}>
                          Quay lại
                        </Button>
                        <Button
                          onClick={handleNextStep}
                          disabled={!selectedPayment}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Xác nhận & Thanh toán
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
                      <h2 className="mt-4 text-2xl font-bold">Đặt lịch Thành công!</h2>
                      <p className="mt-2 text-muted-foreground">Cuộc hẹn của bạn đã được đặt thành công</p>

                      <div className="mt-8 w-full max-w-md rounded-lg border p-6">
                        <h3 className="font-medium">Chi tiết Đặt lịch</h3>
                        <div className="mt-4 space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Dịch vụ:</span>
                            <span className="text-sm font-medium">Dịch vụ Chăm sóc Chó Cao cấp</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Nhà cung cấp:</span>
                            <span className="text-sm font-medium">PawPerfect Grooming</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Ngày:</span>
                            <span className="text-sm font-medium">Thứ Tư, 12 tháng 5, 2023</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Giờ:</span>
                            <span className="text-sm font-medium">10:30 - 12:30</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Thú cưng:</span>
                            <span className="text-sm font-medium">Max (Golden Retriever)</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Tổng cộng:</span>
                            <span className="text-sm font-bold">45.000đ</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Phương thức Thanh toán:</span>
                            <span className="text-sm font-medium">Thẻ Tín dụng</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Mã Đặt lịch:</span>
                            <span className="text-sm font-medium">#FNT12345</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button variant="outline">Xem Chi tiết Đặt lịch</Button>
                        <Button className="bg-orange-500 hover:bg-orange-600">Đặt Dịch vụ Khác</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold">Tóm tắt Đơn hàng</h2>
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
                        <span className="text-sm">Dịch vụ Chăm sóc Chó Cao cấp</span>
                      </div>
                      <span className="font-medium">45.000đ</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Tạm tính</span>
                      <span className="font-medium">45.000đ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Thuế</span>
                      <span className="font-medium">3.600đ</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-medium">Tổng cộng</span>
                      <span className="text-lg font-bold text-green-600">48.600đ</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="rounded-lg bg-orange-50 p-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-500">Khách hàng Mới</Badge>
                        <span className="text-sm font-medium">Giảm giá Lần đầu</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Giảm 10% cho lần đặt đầu tiên với mã WELCOME10
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-2 text-sm font-medium">Thông tin Nhà cung cấp</h3>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="PawPerfect Grooming" />
                        <AvatarFallback>PG</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">PawPerfect Grooming</p>
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground">4.8 ★</span>
                          <span className="ml-1 text-xs text-muted-foreground">(124 đánh giá)</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">123 Đường Chính, Anytown, CA 12345</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-2 text-sm font-medium">Chính sách Hủy</h3>
                    <p className="text-xs text-muted-foreground">
                      Hủy miễn phí đến 24 giờ trước cuộc hẹn của bạn. Việc hủy trong vòng 24 giờ có thể bị tính phí.
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