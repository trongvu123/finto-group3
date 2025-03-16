import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProviderCardProps {
  image: string
  name: string
  profession: string
  rating: number
  reviews: number
}

export default function ProviderCard({ image, name, profession, rating, reviews }: ProviderCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{profession}</p>
          <div className="my-2 flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="mr-1 text-sm font-medium">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
          <Button variant="outline" className="mt-2 w-full rounded-full">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

