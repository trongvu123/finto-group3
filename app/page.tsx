import Link from "next/link"
import Image from "next/image"
import { Search, PawPrint, Scissors, Hotel, Award, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import ServiceCard from "@/components/service-card"
import ProviderCard from "@/components/provider-card"
import ReviewCard from "@/components/review-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Finto</span>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:px-20">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm dịch vụ chăm sóc thú cưng..."
                className="w-full rounded-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline">
              Đăng nhập
            </Link>
            <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
              <Link href={"/customer-registration"}>
                Đăng kí
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="container px-4 py-16 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Tìm dịch vụ chăm sóc thú cưng hoàn hảo
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Kết nối với các nhà cung cấp dịch vụ thú cưng đáng tin cậy để chải chuốt, chăm sóc, huấn luyện và chăm sóc thú y.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600">
                    <Link href="/services">
                      Tìm dịch vụ ngay
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    <Link href="/provider-registration">
                      Trở thành nhà cung cấp
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Happy pets"
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-pastel-blue py-16">
          <div className="container px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">Dịch vụ của chúng tôi</h2>
              <p className="mt-2 text-muted-foreground">Tìm sự chăm sóc hoàn hảo cho những người bạn đáng yêu của bạn</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-orange-100 p-3">
                    <Scissors className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Grooming</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Dịch vụ chải chuốt chuyên nghiệp cho mọi giống chó, mèo
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-green-100 p-3">
                    <Hotel className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Khách sạn thú cưng</h3>
                  <p className="text-center text-sm text-muted-foreground">Nơi thú cưng của bạn được thư giản</p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <Award className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Training</h3>
                  <p className="text-center text-sm text-muted-foreground">Lớp huấn luyện hành vi và vâng lời</p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-purple-100 p-3">
                    <Stethoscope className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Veterinary Care</h3>
                  <p className="text-center text-sm text-muted-foreground">Kiểm tra sức khỏe và dịch vụ y tế</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 flex justify-center">
              <Button className="rounded-full bg-green-500 hover:bg-green-600">Xem tất cả các dịch vụ</Button>
            </div>
          </div>
        </section>

        {/* Featured Service Listings */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">Dịch vụ nổi bật</h2>
              <p className="mt-2 text-muted-foreground">Các dịch vụ được đánh giá cao nhất </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                image="/placeholder.svg?height=200&width=300"
                title="Premium Dog Grooming"
                price="$45"
                rating={4.8}
                reviews={124}
                provider="PawPerfect Grooming"
              />
              <ServiceCard
                image="/placeholder.svg?height=200&width=300"
                title="Cat Boarding Deluxe"
                price="$35/night"
                rating={4.7}
                reviews={98}
                provider="Kitty Haven"
              />
              <ServiceCard
                image="/placeholder.svg?height=200&width=300"
                title="Puppy Training Classes"
                price="$120"
                rating={4.9}
                reviews={156}
                provider="Good Boy Academy"
              />
            </div>
            <div className="mt-10 flex justify-center">
              <Button className="rounded-full bg-orange-500 hover:bg-orange-600">Tìm thêm dịch vụ</Button>
            </div>
          </div>
        </section>

        {/* Top Providers */}
        <section className="bg-green-50 py-16">
          <div className="container px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">Nhà cung cấp dịch vụ hàng đầu</h2>
              <p className="mt-2 text-muted-foreground">Trusted professionals for your pets</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ProviderCard
                image="/placeholder.svg?height=150&width=150"
                name="Sarah Johnson"
                profession="Dog Groomer"
                rating={4.9}
                reviews={215}
              />
              <ProviderCard
                image="/placeholder.svg?height=150&width=150"
                name="Michael Chen"
                profession="Veterinarian"
                rating={4.8}
                reviews={189}
              />
              <ProviderCard
                image="/placeholder.svg?height=150&width=150"
                name="Emily Rodriguez"
                profession="Pet Trainer"
                rating={4.7}
                reviews={167}
              />
              <ProviderCard
                image="/placeholder.svg?height=150&width=150"
                name="David Wilson"
                profession="Pet Sitter"
                rating={4.9}
                reviews={203}
              />
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">What Pet Parents Say</h2>
              <p className="mt-2 text-muted-foreground">Hear from our happy customers</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ReviewCard
                image="/placeholder.svg?height=80&width=80"
                name="Jessica T."
                rating={5}
                review="The grooming service was amazing! My dog looks and smells fantastic. Will definitely book again."
                date="2 days ago"
              />
              <ReviewCard
                image="/placeholder.svg?height=80&width=80"
                name="Robert M."
                rating={4}
                review="Great pet hotel. My cat was well taken care of while I was on vacation. The staff sent daily updates."
                date="1 week ago"
              />
              <ReviewCard
                image="/placeholder.svg?height=80&width=80"
                name="Amanda K."
                rating={5}
                review="The training classes have made such a difference! Our puppy is so much better behaved now."
                date="3 weeks ago"
              />
            </div>
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="rounded-full">
                View All Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-50 py-16">
          <div className="container px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold">Bạn đã sẵn sàng tìm dịch vụ chăm sóc thú cưng hoàn hảo chưa?</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground">
                Hãy tham gia cùng hàng ngàn bậc cha mẹ nuôi thú cưng hạnh phúc đã tìm thấy dịch vụ chăm sóc đáng tin cậy và yêu thương cho những người bạn đáng yêu của mình.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600">
                  Đặt lịch hẹn
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Duyệt qua các dịch vụ
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <PawPrint className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">Finto</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Kết nối các bậc phụ người thú cưng với các nhà cung cấp dịch vụ đáng tin cậy kể từ năm 2025.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Dịch vụ</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Chăm sóc thú cưng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Khách sạn & Nhà trọ cho thú cưng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Training & Behavior
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Dịch vụ thú y
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Giới thiệu về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Nghề nghiệp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Finto. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

