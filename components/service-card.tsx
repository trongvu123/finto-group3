import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ServiceCardProps {
  image: string
  title: string
  price: string
  rating: number
  reviews: number
  provider: string
}

export default function ServiceCard({ image, title, price, rating, reviews, provider }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">by {provider}</p>
          </div>
          <div className="text-lg font-bold text-green-600">{price}</div>
        </div>
        <div className="mt-2 flex items-center">
          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="mr-1 text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full rounded-full bg-orange-500 hover:bg-orange-600">Book Now</Button>
      </CardFooter>
    </Card>
  )
}

