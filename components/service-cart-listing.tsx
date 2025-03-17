import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ServiceCardProps {
    id: string
    title: string
    category: string
    provider: string
    providerImage: string
    rating: number
    reviews: number
    price: string
    image: string
    featured: boolean
    location: string
    distance: string
    viewMode: "grid" | "list"
}

export default function ServiceCard({
    id,
    title,
    category,
    provider,
    providerImage,
    rating,
    reviews,
    price,
    image,
    featured,
    location,
    distance,
    viewMode,
}: ServiceCardProps) {
    if (viewMode === "grid") {
        return (
            <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative">
                    <div className="relative h-48 w-full">
                        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                    </div>
                    {featured && <Badge className="absolute left-2 top-2 bg-orange-500">Featured</Badge>}
                    <Badge className="absolute right-2 top-2 bg-green-100 text-green-800">{category}</Badge>
                </div>
                <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <Link href={`/services/${id}`} className="hover:underline">
                                <h3 className="font-medium">{title}</h3>
                            </Link>
                            <div className="mt-1 flex items-center">
                                <Avatar className="mr-1 h-5 w-5">
                                    <AvatarImage src={providerImage} alt={provider} />
                                    <AvatarFallback>{provider.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <p className="text-xs text-muted-foreground">{provider}</p>
                            </div>
                        </div>
                        <div className="text-lg font-bold text-green-600">{price}</div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="mr-1 text-sm font-medium">{rating}</span>
                            <span className="text-xs text-muted-foreground">({reviews})</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{distance}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full rounded-full bg-orange-500 hover:bg-orange-600">
                        <Link href={`/services/${id}`}>Xem chi tiết</Link>
                    </Button>
                </CardFooter>
            </Card>
        )
    }

    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="flex flex-col sm:flex-row">
                <div className="relative h-48 sm:h-auto sm:w-1/3">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                    {featured && <Badge className="absolute left-2 top-2 bg-orange-500">Featured</Badge>}
                </div>
                <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Link href={`/services/${id}`} className="hover:underline">
                                    <h3 className="text-lg font-medium">{title}</h3>
                                </Link>
                                <Badge className="bg-green-100 text-green-800">{category}</Badge>
                            </div>
                            <div className="mt-1 flex items-center">
                                <Avatar className="mr-1 h-5 w-5">
                                    <AvatarImage src={providerImage} alt={provider} />
                                    <AvatarFallback>{provider.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <p className="text-sm text-muted-foreground">{provider}</p>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-green-600">{price}</div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="mr-1 text-sm font-medium">{rating}</span>
                            <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>
                                {location} • {distance}
                            </span>
                        </div>
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Professional {category.toLowerCase()} service with experienced staff and premium facilities.
                    </p>

                    <div className="mt-auto flex justify-end pt-4">
                        <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600">
                            <Link href={`/services/${id}`}>Xem chi tiết</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

