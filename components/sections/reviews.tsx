import { Card, CardContent } from "../ui/card"

export function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      text: "Amazing transformation journey with Coach Akshay!",
      author: "John Doe"
    },
    // Add more reviews from your existing content
  ]

  return (
    <section id="reviews" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">CLIENT REVIEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{review.text}</p>
                <p className="font-medium">- {review.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 