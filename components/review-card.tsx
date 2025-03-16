import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ReviewCardProps {
  image: string
  name: string
  rating: number
  review: string
  date: string
}

export default function ReviewCard({ image, name, rating, review, date }: ReviewCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{review}</p>
        <p className="mt-2 text-xs text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  )
}

