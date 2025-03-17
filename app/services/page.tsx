"use client"
import { useState } from "react"
import { Search, Filter, Star, Grid, List, ChevronDown, X, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceCard from "@/components/service-cart-listing"
import Link from "next/link"
export default function ServicesPage() {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [activeFilters, setActiveFilters] = useState<string[]>([])
    const toggleFilter = (filter: string) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter((f) => f !== filter))
        } else {
            setActiveFilters([...activeFilters, filter])
        }
    }
    const clearFilters = () => {
        setActiveFilters([])
    }
    // Dữ liệu mẫu cho dịch vụ
    const services = [
        {
            id: "1",
            title: "Chăm sóc chó cao cấp",
            category: "Chăm sóc",
            provider: "PawPerfect Grooming",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.8,
            reviews: 124,
            price: "$45",
            image: "/placeholder.svg?height=200&width=300",
            featured: true,
            location: "Trung tâm",
            distance: "1.2 dặm",
        },
        {
            id: "2",
            title: "Dịch vụ nuôi mèo cao cấp",
            category: "Nuôi dưỡng",
            provider: "Kitty Haven",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.7,
            reviews: 98,
            price: "$35/đêm",
            image: "/placeholder.svg?height=200&width=300",
            featured: false,
            location: "Phía Tây",
            distance: "2.5 dặm",
        },
        {
            id: "3",
            title: "Lớp huấn luyện chó con",
            category: "Huấn luyện",
            provider: "Good Boy Academy",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.9,
            reviews: 156,
            price: "$120",
            image: "/placeholder.svg?height=200&width=300",
            featured: true,
            location: "Phía Bắc",
            distance: "3.1 dặm",
        },
        {
            id: "4",
            title: "Kiểm tra thú y",
            category: "Thú y",
            provider: "PetCare Clinic",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.6,
            reviews: 210,
            price: "$75",
            image: "/placeholder.svg?height=200&width=300",
            featured: false,
            location: "Phía Đông",
            distance: "1.8 dặm",
        },
        {
            id: "5",
            title: "Dịch vụ dắt chó đi dạo",
            category: "Đi dạo",
            provider: "Happy Tails",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.5,
            reviews: 87,
            price: "$20/giờ",
            image: "/placeholder.svg?height=200&width=300",
            featured: false,
            location: "Trung tâm",
            distance: "0.9 dặm",
        },
        {
            id: "6",
            title: "Dịch vụ trông giữ thú cưng tại nhà",
            category: "Trông giữ",
            provider: "Comfort Paws",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.8,
            reviews: 65,
            price: "$30/giờ",
            image: "/placeholder.svg?height=200&width=300",
            featured: false,
            location: "Phía Nam",
            distance: "2.2 dặm",
        },
        {
            id: "7",
            title: "Chăm sóc mèo cao cấp",
            category: "Chăm sóc",
            provider: "Feline Finesse",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.9,
            reviews: 42,
            price: "$55",
            image: "/placeholder.svg?height=200&width=300",
            featured: true,
            location: "Phía Tây",
            distance: "3.4 dặm",
        },
        {
            id: "8",
            title: "Huấn luyện chó nâng cao",
            category: "Huấn luyện",
            provider: "Elite K9",
            providerImage: "/placeholder.svg?height=50&width=50",
            rating: 4.7,
            reviews: 118,
            price: "$150",
            image: "/placeholder.svg?height=200&width=300",
            featured: false,
            location: "Phía Bắc",
            distance: "4.0 dặm",
        },
    ]
    return (
        <div className="min-h-screen bg-background">
            {/* Tiêu đề với thanh tìm kiếm */}
            <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container py-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-1 items-center">
                            <div className="relative w-full max-w-md">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Tìm kiếm dịch vụ thú cưng..."
                                    className="w-full pl-9 md:w-[300px] lg:w-[400px]"
                                />
                            </div>
                            <div className="container mt-4">
                                <Link
                                    href="/"
                                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                                >
                                    <ChevronLeft className="mr-1 h-4 w-4" />
                                    Quay lại Trang chủ
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="sm" className="md:hidden">
                                        <Filter className="mr-2 h-4 w-4" />
                                        Bộ lọc
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                    <SheetHeader>
                                        <SheetTitle>Bộ lọc</SheetTitle>
                                        <SheetDescription>Thu hẹp kết quả tìm kiếm của bạn</SheetDescription>
                                    </SheetHeader>
                                    <div className="mt-6 space-y-6">
                                        {/* Bộ lọc trên điện thoại - giống như trên máy tính nhưng nằm trong bảng */}
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="category">
                                                <AccordionTrigger>Danh mục dịch vụ</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="space-y-2">
                                                        {["Chăm sóc", "Nuôi dưỡng", "Huấn luyện", "Thú y", "Đi dạo", "Trông giữ"].map(
                                                            (category) => (
                                                                <div key={category} className="flex items-center space-x-2">
                                                                    <Checkbox
                                                                        id={`mobile-${category}`}
                                                                        checked={activeFilters.includes(category)}
                                                                        onCheckedChange={() => toggleFilter(category)}
                                                                    />
                                                                    <label
                                                                        htmlFor={`mobile-${category}`}
                                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                    >
                                                                        {category}
                                                                    </label>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="price">
                                                <AccordionTrigger>Khoảng giá</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="space-y-2">
                                                        {["Dưới $25", "$25-$50", "$50-$100", "$100-$200", "$200+"].map((price) => (
                                                            <div key={price} className="flex items-center space-x-2">
                                                                <Checkbox id={`mobile-${price}`} />
                                                                <label
                                                                    htmlFor={`mobile-${price}`}
                                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                >
                                                                    {price}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="rating">
                                                <AccordionTrigger>Đánh giá</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="space-y-2">
                                                        {["4.5 & up", "4.0 & up", "3.5 & up", "3.0 & up"].map((rating) => (
                                                            <div key={rating} className="flex items-center space-x-2">
                                                                <Checkbox id={`mobile-${rating}`} />
                                                                <label
                                                                    htmlFor={`mobile-${rating}`}
                                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                >
                                                                    {rating}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="location">
                                                <AccordionTrigger>Vị trí</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="space-y-2">
                                                        {["Trong vòng 1 dặm", "Trong vòng 5 dặm", "Trong vòng 10 dặm", "Trong vòng 20 dặm"].map(
                                                            (distance) => (
                                                                <div key={distance} className="flex items-center space-x-2">
                                                                    <Checkbox id={`mobile-${distance}`} />
                                                                    <label
                                                                        htmlFor={`mobile-${distance}`}
                                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                    >
                                                                        {distance}
                                                                    </label>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <div className="flex justify-between">
                                            <Button variant="outline" size="sm" onClick={clearFilters}>
                                                Xóa tất cả
                                            </Button>
                                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                                Áp dụng bộ lọc
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                            <div className="hidden md:flex md:items-center md:gap-2">
                                <Select defaultValue="recommended">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Sắp xếp theo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="recommended">Đề xuất</SelectItem>
                                        <SelectItem value="price-low">Giá: Thấp đến cao</SelectItem>
                                        <SelectItem value="price-high">Giá: Cao đến thấp</SelectItem>
                                        <SelectItem value="rating">Được đánh giá cao nhất</SelectItem>
                                        <SelectItem value="distance">Gần nhất</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="flex items-center rounded-md border p-1">
                                    <Button
                                        variant={viewMode === "grid" ? "default" : "ghost"}
                                        size="icon"
                                        className={`h-8 w-8 ${viewMode === "grid" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <Grid className="h-4 w-4" />
                                        <span className="sr-only">Xem dạng lưới</span>
                                    </Button>
                                    <Button
                                        variant={viewMode === "list" ? "default" : "ghost"}
                                        size="icon"
                                        className={`h-8 w-8 ${viewMode === "list" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                                        onClick={() => setViewMode("list")}
                                    >
                                        <List className="h-4 w-4" />
                                        <span className="sr-only">Xem dạng danh sách</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bộ lọc đang hoạt động */}
                    {activeFilters.length > 0 && (
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="text-sm text-muted-foreground">Bộ lọc đang hoạt động:</span>
                            {activeFilters.map((filter) => (
                                <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                                    {filter}
                                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(filter)} />
                                </Badge>
                            ))}
                            <Button variant="link" size="sm" onClick={clearFilters} className="h-auto p-0 text-xs">
                                Xóa tất cả
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <div className="container py-8">
                <div className="grid grid-cols-12 gap-8">
                    {/* Bộ lọc - Máy tính */}
                    <div className="hidden md:col-span-3 md:block">
                        <div className="sticky top-24 space-y-6">
                            <div>
                                <h3 className="mb-2 text-lg font-semibold">Bộ lọc</h3>
                                <Separator className="mb-4" />
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="mb-3 font-medium">Danh mục dịch vụ</h4>
                                        <div className="space-y-2">
                                            {["Chăm sóc", "Nuôi dưỡng", "Huấn luyện", "Thú y", "Đi dạo", "Trông giữ"].map((category) => (
                                                <div key={category} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={category}
                                                        checked={activeFilters.includes(category)}
                                                        onCheckedChange={() => toggleFilter(category)}
                                                    />
                                                    <label
                                                        htmlFor={category}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {category}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-3 font-medium">Khoảng giá</h4>
                                        <div className="space-y-2">
                                            {["Dưới $25", "$25-$50", "$50-$100", "$100-$200", "$200+"].map((price) => (
                                                <div key={price} className="flex items-center space-x-2">
                                                    <Checkbox id={price} />
                                                    <label
                                                        htmlFor={price}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {price}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-3 font-medium">Đánh giá</h4>
                                        <div className="space-y-2">
                                            {["4.5 & up", "4.0 & up", "3.5 & up", "3.0 & up"].map((rating) => (
                                                <div key={rating} className="flex items-center space-x-2">
                                                    <Checkbox id={rating} />
                                                    <label
                                                        htmlFor={rating}
                                                        className="flex items-center space-x-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        <span>{rating}</span>
                                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-3 font-medium">Vị trí</h4>
                                        <div className="space-y-2">
                                            {["Trong vòng 1 dặm", "Trong vòng 5 dặm", "Trong vòng 10 dặm", "Trong vòng 20 dặm"].map((distance) => (
                                                <div key={distance} className="flex items-center space-x-2">
                                                    <Checkbox id={distance} />
                                                    <label
                                                        htmlFor={distance}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {distance}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Dịch vụ dạng lưới/danh sách */}
                    <div className="col-span-12 md:col-span-9">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Dịch vụ thú cưng</h2>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Sắp xếp theo:</span>
                                <Select defaultValue="recommended">
                                    <SelectTrigger className="h-8 w-[140px]">
                                        <SelectValue placeholder="Sắp xếp theo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="recommended">Đề xuất</SelectItem>
                                        <SelectItem value="price-low">Giá: Thấp đến cao</SelectItem>
                                        <SelectItem value="price-high">Giá: Cao đến thấp</SelectItem>
                                        <SelectItem value="rating">Được đánh giá cao nhất</SelectItem>
                                        <SelectItem value="distance">Gần nhất</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="flex items-center rounded-md border p-1 md:hidden">
                                    <Button
                                        variant={viewMode === "grid" ? "default" : "ghost"}
                                        size="icon"
                                        className={`h-8 w-8 ${viewMode === "grid" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <Grid className="h-4 w-4" />
                                        <span className="sr-only">Xem dạng lưới</span>
                                    </Button>
                                    <Button
                                        variant={viewMode === "list" ? "default" : "ghost"}
                                        size="icon"
                                        className={`h-8 w-8 ${viewMode === "list" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                                        onClick={() => setViewMode("list")}
                                    >
                                        <List className="h-4 w-4" />
                                        <span className="sr-only">Xem dạng danh sách</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {viewMode === "grid" ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {services
                                    .filter((service) => activeFilters.length === 0 || activeFilters.includes(service.category))
                                    .map((service) => (
                                        <ServiceCard
                                            key={service.id}
                                            id={service.id}
                                            title={service.title}
                                            category={service.category}
                                            provider={service.provider}
                                            providerImage={service.providerImage}
                                            rating={service.rating}
                                            reviews={service.reviews}
                                            price={service.price}
                                            image={service.image}
                                            featured={service.featured}
                                            location={service.location}
                                            distance={service.distance}
                                            viewMode="grid"
                                        />
                                    ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {services
                                    .filter((service) => activeFilters.length === 0 || activeFilters.includes(service.category))
                                    .map((service) => (
                                        <ServiceCard
                                            key={service.id}
                                            id={service.id}
                                            title={service.title}
                                            category={service.category}
                                            provider={service.provider}
                                            providerImage={service.providerImage}
                                            rating={service.rating}
                                            reviews={service.reviews}
                                            price={service.price}
                                            image={service.image}
                                            featured={service.featured}
                                            location={service.location}
                                            distance={service.distance}
                                            viewMode="list"
                                        />
                                    ))}
                            </div>
                        )}
                        {/* Phân trang */}
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <Button variant="outline" size="icon" disabled>
                                    <ChevronDown className="h-4 w-4 rotate-90" />
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 bg-orange-500 text-white hover:bg-orange-600">
                                    1
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    2
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    3
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    4
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    5
                                </Button>
                                <Button variant="outline" size="icon">
                                    <ChevronDown className="h-4 w-4 -rotate-90" />
                                </Button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}