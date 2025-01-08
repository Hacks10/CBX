'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

type Review = {
  id: number
  username: string
  rating: number
  comment: string
  date: string
}

// This would typically come from a database
const mockReviews: Review[] = [
  { id: 1, username: "JohnDoe", rating: 5, comment: "Great product, really improved my workflow!", date: "2023-05-15" },
  { id: 2, username: "JaneSmith", rating: 4, comment: "Very useful, but there's room for improvement.", date: "2023-05-10" },
]

export default function ReviewSection({ productId }: { productId: number }) {
  const [reviews, setReviews] = useState<Review[]>(mockReviews)

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="flex items-center mb-4">
        <p className="text-xl font-bold mr-2">{averageRating.toFixed(1)}</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${star <= Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <p className="ml-2 text-sm text-gray-400">({reviews.length} reviews)</p>
      </div>
      {reviews.map((review) => (
        <div key={review.id} className="border-t border-gray-700 py-4">
          <div className="flex items-center mb-2">
            <p className="font-bold mr-2">{review.username}</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-400">{review.date}</p>
          </div>
          <p className="text-gray-300">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

