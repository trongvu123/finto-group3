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
          Quay lại Trang chủ
        </Link>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">Đăng ký làm Nhà cung cấp trên Finto</h1>
          <p className="mt-2 text-muted-foreground">Kết nối với chủ thú cưng và phát triển doanh nghiệp của bạn</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <ProviderRegistrationSteps />

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Thông tin Cá nhân</CardTitle>
              <CardDescription>
                Hãy cho chúng tôi biết về bạn. Thông tin này sẽ được xác minh trong quá trình đánh giá.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Họ</label>
                  <Input placeholder="Nhập họ của bạn" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tên</label>
                  <Input placeholder="Nhập tên của bạn" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Địa chỉ Email</label>
                  <Input type="email" placeholder="Nhập email của bạn" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Số điện thoại</label>
                  <Input placeholder="Nhập số điện thoại của bạn" />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Thông tin Doanh nghiệp</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tên Doanh nghiệp</label>
                    <Input placeholder="Nhập tên doanh nghiệp của bạn" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Loại hình Doanh nghiệp</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại hình doanh nghiệp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Cá nhân</SelectItem>
                        <SelectItem value="salon">Tiệm chăm sóc thú cưng</SelectItem>
                        <SelectItem value="clinic">Phòng khám thú y</SelectItem>
                        <SelectItem value="training">Trung tâm huấn luyện</SelectItem>
                        <SelectItem value="boarding">Cơ sở lưu trú thú cưng</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <label className="text-sm font-medium">Địa chỉ Doanh nghiệp</label>
                  <Input placeholder="Địa chỉ đường" />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Input placeholder="Thành phố" />
                    <Input placeholder="Tỉnh/Thành phố" />
                    <Input placeholder="Mã bưu điện" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Dịch vụ & Chuyên môn</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Danh mục Dịch vụ</label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="grooming" />
                        <label htmlFor="grooming" className="text-sm">
                          Chăm sóc thú cưng
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="boarding" />
                        <label htmlFor="boarding" className="text-sm">
                          Lưu trú thú cưng
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="training" />
                        <label htmlFor="training" className="text-sm">
                          Huấn luyện thú cưng
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="veterinary" />
                        <label htmlFor="veterinary" className="text-sm">
                          Dịch vụ thú y
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="walking" />
                        <label htmlFor="walking" className="text-sm">
                          Dắt chó đi dạo
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sitting" />
                        <label htmlFor="sitting" className="text-sm">
                          Trông giữ thú cưng
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Số năm Kinh nghiệm</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn số năm kinh nghiệm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Dưới 1 năm</SelectItem>
                        <SelectItem value="1-3">1-3 năm</SelectItem>
                        <SelectItem value="3-5">3-5 năm</SelectItem>
                        <SelectItem value="5-10">5-10 năm</SelectItem>
                        <SelectItem value="10+">Trên 10 năm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Giới thiệu Chuyên môn</label>
                    <Textarea
                      placeholder="Mô tả kinh nghiệm, chuyên môn và điều làm nên sự khác biệt của dịch vụ bạn cung cấp..."
                      className="min-h-[120px]"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Chứng chỉ & Hồ sơ</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Chứng chỉ & Giấy phép</label>
                    <div className="rounded-lg border border-dashed p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm font-medium">Tải lên chứng chỉ của bạn</p>
                      <p className="text-xs text-muted-foreground">
                        Kéo thả hoặc nhấp để tải lên. Định dạng hỗ trợ: PDF, JPG, PNG
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Chọn Tệp
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Hình ảnh Hồ sơ</label>
                    <div className="rounded-lg border border-dashed p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm font-medium">Tải lên hình ảnh công việc của bạn</p>
                      <p className="text-xs text-muted-foreground">
                        Cho thấy những công việc tốt nhất của bạn. Những hình ảnh này sẽ hiển thị trên hồ sơ của bạn.
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Chọn Hình ảnh
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">Lịch làm việc</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Calendar className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Thiết lập Giờ làm việc</p>
                      <p className="text-xs text-muted-foreground">Xác định thời gian bạn có thể cung cấp dịch vụ</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Thứ Hai</label>
                        <Badge variant="outline">Có sẵn</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Giờ bắt đầu" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">9:00 SA</SelectItem>
                            <SelectItem value="10">10:00 SA</SelectItem>
                            <SelectItem value="11">11:00 SA</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Giờ kết thúc" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5:00 CH</SelectItem>
                            <SelectItem value="6">6:00 CH</SelectItem>
                            <SelectItem value="7">7:00 CH</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Thứ Ba</label>
                        <Badge variant="outline">Có sẵn</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Giờ bắt đầu" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">9:00 SA</SelectItem>
                            <SelectItem value="10">10:00 SA</SelectItem>
                            <SelectItem value="11">11:00 SA</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Giờ kết thúc" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5:00 CH</SelectItem>
                            <SelectItem value="6">6:00 CH</SelectItem>
                            <SelectItem value="7">7:00 CH</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="mt-2">
                    Thêm Ngày
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-start gap-2 rounded-lg bg-muted p-4">
                <Shield className="mt-0.5 h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm font-medium">Quy trình Xác minh</p>
                  <p className="text-xs text-muted-foreground">
                    Tất cả đơn đăng ký của nhà cung cấp sẽ được đội ngũ của chúng tôi xem xét để đảm bảo tiêu chuẩn chất
                    lượng. Quá trình này thường mất 1-3 ngày làm việc.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  Tôi đồng ý với{" "}
                  <Link href="/terms" className="text-primary underline">
                    Điều khoản Dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link href="/privacy" className="text-primary underline">
                    Chính sách Bảo mật
                  </Link>{" "}
                  của Finto
                </label>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Gửi để Xem xét</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}