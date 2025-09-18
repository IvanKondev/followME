import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    country: "Australia",
    tour: "Manta Safari",
    rating: 5,
    date: "December 2024",
    review:
      "Absolutely incredible experience! Tanya was so knowledgeable and made us feel completely safe in the water. Swimming with the manta rays was a dream come true. The photos she took were amazing too!",
    highlight: "Swimming with manta rays was magical",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    tour: "Turtle Encounter",
    rating: 5,
    date: "November 2024",
    review:
      "Tanya is the best guide we've ever had! She found so many turtles and knew exactly where to look. My kids were thrilled and she was so patient with them. Highly recommend!",
    highlight: "Perfect for families with kids",
  },
  {
    name: "Emma & James",
    country: "UK",
    tour: "Island Hopping",
    rating: 5,
    date: "October 2024",
    review:
      "What a fantastic day! Tanya showed us three different islands and we learned so much about local culture. The snorkeling spots were pristine and lunch was delicious. Worth every penny!",
    highlight: "Great cultural experience",
  },
  {
    name: "Lisa Chen",
    country: "Singapore",
    tour: "Dolphin Watching",
    rating: 5,
    date: "September 2024",
    review:
      "We were so lucky to see a pod of dolphins and even got to swim near them! Tanya's enthusiasm is infectious and she really cares about marine conservation. The videos she took are treasures.",
    highlight: "Passionate about marine life",
  },
  {
    name: "David Miller",
    country: "Canada",
    tour: "Nurse Shark Adventure",
    rating: 5,
    date: "August 2024",
    review:
      "Initially nervous about sharks, but Tanya explained everything perfectly and made me feel at ease. The nurse sharks were gentle and beautiful. An experience I'll never forget!",
    highlight: "Great for nervous swimmers",
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Guest Reviews</h1>
          <p className="text-xl text-muted-foreground">
            See what our guests say about their underwater adventures with Tanya
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-muted-foreground">({reviews.length} reviews)</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.country}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {review.date}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {review.tour}
                    </Badge>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-1" />
                    <p className="text-muted-foreground italic pl-6 mb-4">{review.review}</p>
                  </div>

                  {/* Highlight */}
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-accent-foreground">"{review.highlight}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-primary/5 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Want to Share Your Experience?</h3>
                <p className="text-muted-foreground mb-6">
                  We'd love to hear about your adventure! Contact us after your tour to share your story.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Badge className="bg-green-600 text-white px-4 py-2">
                    <a href="https://wa.me/359887496206" className="flex items-center">
                      WhatsApp: +359 887 496 206
                    </a>
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <a href="viber://chat?number=359887496206" className="flex items-center">
                      Viber: +359 887 496 206
                    </a>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
