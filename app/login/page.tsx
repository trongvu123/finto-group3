import Link from "next/link"
import Image from "next/image"
import { PawPrint, Mail, Lock, Github, Facebook, Apple, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-orange-50 to-background">
      <div className="container mt-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Quay lại Trang chủ
        </Link>
      </div>
      <div className="container flex flex-1 items-center justify-center py-12">
        <div className="grid w-full gap-8 md:grid-cols-2 lg:gap-16">
          <div className="hidden flex-col justify-center md:flex">
            <div className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-orange-500" />
              <h1 className="text-3xl font-bold">Finto</h1>
            </div>
            <p className="mt-2 text-xl text-muted-foreground">Chào mừng trở lại nền tảng dịch vụ thú cưng</p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Tìm dịch vụ hoàn hảo</h3>
                  <p className="text-sm text-muted-foreground">
                    Kết nối với các nhà cung cấp dịch vụ thú cưng đáng tin cậy trong khu vực của bạn
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Đặt dịch vụ với sự tự tin</h3>
                  <p className="text-sm text-muted-foreground">Đọc các đánh giá đã được xác minh và dịch vụ sách một cách dễ dàng</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <PawPrint className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Quản lý vật nuôi của bạn</h3>
                  <p className="text-sm text-muted-foreground">Theo dõi các dịch vụ và cuộc hẹn của thú cưng của bạn</p>
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
                <CardTitle className="text-2xl">Chào mừng trở lại</CardTitle>
                <CardDescription>Đăng nhập vào tài khoản của bạn để tiếp tục</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="Địa chỉ email" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="password" placeholder="Mật khẩu" className="pl-10" />
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
                    Quên mật khẩu?
                  </Link>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Đăng nhập</Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Hoặc tiếp tục với</span>
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
                  Không có tài khoản??{" "}
                  <Link href="/customer-registration" className="text-orange-500 hover:underline">
                    Đăng ký
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

