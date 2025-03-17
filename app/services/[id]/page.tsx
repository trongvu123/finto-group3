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
      {/* Nút quay lại */}
      <div className="container mt-4">
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Quay lại Dịch vụ
        </Link>
      </div>

      {/* Banner chính */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Dịch vụ Chăm sóc Chó Cao cấp"
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
                  <h1 className="text-2xl font-bold md:text-3xl">Chăm sóc Chó Cao cấp</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">bởi PawPerfect Grooming</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">4.8</span>
                      <span className="ml-1 text-sm text-muted-foreground">(124 đánh giá)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">$45</span>
                <Badge className="bg-green-100 text-green-800">Bán chạy nhất</Badge>
              </div>
            </div>

            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                    <TabsTrigger value="gallery">Thư viện</TabsTrigger>
                    <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold">Mô tả Dịch vụ</h2>
                        <p className="mt-2 text-muted-foreground">
                          Dịch vụ chăm sóc chó cao cấp của chúng tôi bao gồm tắm toàn thân với dầu gội và dầu xả cao cấp,
                          sấy khô, chải lông, cắt tỉa lông, cắt móng, vệ sinh tai và đánh răng. Thú cưng của bạn sẽ trông
                          và cảm thấy tuyệt vời sau buổi chăm sóc toàn diện của chúng tôi.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">Bao gồm những gì</h2>
                        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Tắm toàn thân với sản phẩm cao cấp</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Cắt tỉa lông chuyên nghiệp</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Cắt móng</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Vệ sinh tai</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Đánh răng</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>Nước hoa & khăn cổ</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg bg-orange-50 p-4">
                          <Clock className="mb-2 h-5 w-5 text-orange-500" />
                          <h3 className="font-medium">Thời lượng</h3>
                          <p className="text-sm text-muted-foreground">1.5 - 2 giờ</p>
                        </div>
                        <div className="rounded-lg bg-green-50 p-4">
                          <MapPin className="mb-2 h-5 w-5 text-green-500" />
                          <h3 className="font-medium">Địa điểm</h3>
                          <p className="text-sm text-muted-foreground">Tại cửa hàng hoặc Di động</p>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-4">
                          <Calendar className="mb-2 h-5 w-5 text-blue-500" />
                          <h3 className="font-medium">Lịch trình</h3>
                          <p className="text-sm text-muted-foreground">Thứ 2 - Thứ 7, 9h - 18h</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold">Tại sao Chọn Chúng Tôi</h2>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-start gap-2">
                            <Badge className="mt-1 bg-orange-100 text-orange-800">Chứng nhận</Badge>
                            <p>Tất cả chuyên viên đều được chứng nhận với ít nhất 3 năm kinh nghiệm</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge className="mt-1 bg-green-100 text-green-800">Cao cấp</Badge>
                            <p>Chúng tôi chỉ sử dụng sản phẩm cao cấp an toàn cho thú cưng</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge className="mt-1 bg-blue-100 text-blue-800">Tiện nghi</Badge>
                            <p>
                              Tiệm của chúng tôi được thiết kế để giảm căng thẳng và tạo môi trường thoải mái cho thú cưng
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
                              <span className="ml-2 text-xs text-muted-foreground">2 ngày trước</span>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">
                          Dịch vụ chăm sóc thật tuyệt vời! Chú chó của tôi trông và ngửi thật thơm tho. Chuyên viên rất kiên nhẫn
                          với chú chó hay lo lắng của tôi. Chắc chắn sẽ đặt lịch lại!
                        </p>
                        <div className="mt-2 flex gap-2 overflow-x-auto">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            width={80}
                            height={80}
                            alt="Ảnh đánh giá"
                            className="rounded-md"
                          />
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            width={80}
                            height={80}
                            alt="Ảnh đánh giá"
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
                              <span className="ml-2 text-xs text-muted-foreground">1 tuần trước</span>
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
                          Dịch vụ tốt. Chú chó golden của tôi trông rất đẹp sau khi được chăm sóc.
                          Lý do cho 4 sao là vì tôi phải đợi lâu hơn dự kiến.
                        </p>
                      </div>

                      <ReviewForm />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h2 className="text-lg font-semibold">Đặt Dịch vụ</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chọn ngày và giờ bạn muốn đặt lịch chăm sóc thú cưng
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm font-medium">Chọn Ngày</label>
                    <input type="date" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Chọn Giờ</label>
                    <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>9:00 SA</option>
                      <option>10:00 SA</option>
                      <option>11:00 SA</option>
                      <option>1:00 CH</option>
                      <option>2:00 CH</option>
                      <option>3:00 CH</option>
                      <option>4:00 CH</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Thú cưng</label>
                    <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>Max (Golden Retriever)</option>
                      <option>Bella (Poodle)</option>
                      <option>Thêm thú cưng mới</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Yêu cầu Đặc biệt</label>
                    <textarea
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                      rows={3}
                      placeholder="Bất kỳ yêu cầu đặc biệt nào cho chuyên viên..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Link href={"/booking"}>
                      Đặt Lịch Hẹn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Nút đặt lịch cố định (Chỉ mobile) */}
      <div className="sticky bottom-0 border-t bg-background p-4 md:hidden">
        <Button className="w-full bg-orange-500 hover:bg-orange-600">Đặt Ngay - $45</Button>
      </div>
    </div>
  )
}