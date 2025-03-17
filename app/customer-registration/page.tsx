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
          Quay lại trang chủ
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-orange-500" />
              <h1 className="text-3xl font-bold">Join Finto</h1>
            </div>
            <p className="mt-2 text-xl text-muted-foreground">Tạo tài khoản của bạn và tìm các dịch vụ thú cưng hoàn hảo</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Tạo hồ sơ thú cưng của bạn</h3>
                  <p className="text-sm text-muted-foreground">
                    Thêm bạn thú cưng của bạn vào tài khoản của bạn và theo dõi nhu cầu của chúng
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Dịch dịch vụ một cách dễ dàng</h3>
                  <p className="text-sm text-muted-foreground">
                    Tìm và đặt sách chải chuốt, đào tạo, và nhiều hơn nữa chỉ trong một vài cú nhấp chuột
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Quản lý các cuộc hẹn</h3>
                  <p className="text-sm text-muted-foreground">
                    Theo dõi các cuộc hẹn sắp tới và lịch sử dịch vụ
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
                <CardTitle>Tạo tài khoản của bạn</CardTitle>
                <CardDescription>Điền vào thông tin của bạn để bắt đầu với Finto</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Tài khoản</TabsTrigger>
                    <TabsTrigger value="pet">Thông tin thú cưng</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tên</label>
                        <Input placeholder="Nhập tên của bạn" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Họ</label>
                        <Input placeholder="Nhập họ của bạn" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Địa chỉ email</label>
                      <Input type="email" placeholder="Nhập địa chỉ email của bạn" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Số điện thoại</label>
                      <Input placeholder="Nhập số điện thoại của bạn" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Mật khẩu</label>
                        <Input type="password" placeholder="Nhập mật khẩu " />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm Password</label>
                        <Input type="password" placeholder="Xác nhận mật khẩu" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Địa chỉ</label>
                      <Input placeholder="Street address" />
                      <div className="grid gap-4 sm:grid-cols-3">
                        <Input placeholder="Tỉnh/thành phố" />
                        <Input placeholder="Quận/huyện" />
                        <Input placeholder="Xã/phường" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="pet" className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tên thú cưng</label>
                      <Input placeholder="Nhập tên thú cưng của bạn" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Loại thú cưng</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn loại thú cưng" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dog">Chó</SelectItem>
                            <SelectItem value="cat">Mèo</SelectItem>
                            <SelectItem value="bird">Chim</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Giống</label>
                        <Input placeholder="Nhập tên giống" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tuổi</label>
                        <Input placeholder="Nhập tuổi thú cưng" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Cân nặng</label>
                        <Input placeholder="Nhập cân nặng thú cưng" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ảnh thú cưng</label>
                      <div className="rounded-lg border border-dashed p-6 text-center">
                        <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                        <p className="mt-2 text-sm font-medium">Tải lên ảnh thú cưng của bạn</p>
                        <p className="text-xs text-muted-foreground">Điều này giúp các nhà cung cấp dịch vụ nhận ra thú cưng của bạn</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Chọn ảnh
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Điều kiện y tế hoặc nhu cầu đặc biệt</label>
                      <Textarea
                        placeholder="Nhập bất kỳ tình trạng bệnh lý, dị ứng hoặc nhu cầu đặc biệt nào của thú cưng của bạn..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm font-medium">Dịch vụ ưa thích</h3>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="grooming-pref" />
                          <label htmlFor="grooming-pref" className="text-sm">
                            Chăm sóc cho thú cưng
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
                            Huấn luyện thú cưng
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="veterinary-pref" />
                          <label htmlFor="veterinary-pref" className="text-sm">
                            Dịch vụ thú y
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="mt-2">
                      Thêm thú cưng khác
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    Tôi đồng ý với các điều khoản của Finto
                  </label>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Tạo tài khoản</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Đã có tài khoản?{" "}
                  <Link href="/login" className="text-primary underline">
                    Đăng nhập
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

