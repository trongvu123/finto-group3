"use client"

import { useState } from "react"
import { Star, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-medium">Write a Review</h3>
      <div className="mt-4 space-y-4">
        <div>
          <p className="mb-2 text-sm font-medium">Your Rating</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-6 w-6 cursor-pointer ${
                  star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                }`}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Your Review</p>
          <Textarea placeholder="Share your experience with this service..." className="min-h-[100px]" />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Add Photos</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Photos
            </Button>
            <p className="text-xs text-muted-foreground">Optional: Add photos of your pet after the service</p>
          </div>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">Submit Review</Button>
      </div>
    </div>
  )
}

