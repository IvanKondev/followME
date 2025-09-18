import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Camera, Fish, Waves } from "lucide-react"
import Link from "next/link"

const tours = [
  {
    id: "manta-safari",
    name: "Manta Safari",
    duration: "4 hours",
    difficulty: "Easy",
    price: 60,
    description:
      "Experience the majestic manta rays in their natural habitat. Swimming with these gentle giants is unforgettable.",
    included: ["Snorkeling gear", "Underwater photos", "Light refreshments", "Professional guide"],
    image: "/manta-safari.jpg",
    icon: <Waves className="w-5 h-5" />,
  },
  {
    id: "turtle-encounter",
    name: "Turtle Encounter",
    duration: "3 hours",
    difficulty: "Easy",
    price: 60,
    description: "Swim alongside sea turtles in crystal clear waters. Perfect for families and beginners.",
    included: ["Snorkeling equipment", "Underwater videos", "Turtle spotting guide", "Safety briefing"],
    image: "/turtle.jpg",
    icon: <Fish className="w-5 h-5" />,
  },
  {
    id: "nurse-shark",
    name: "Nurse Shark Adventure",
    duration: "3.5 hours",
    difficulty: "Medium",
    price: 60,
    description: "Safe encounter with friendly nurse sharks. An exciting adventure for confident swimmers.",
    included: ["Professional equipment", "Safety gear", "Action photos", "Marine life education"],
    image: "/nurse-shark.jpg",
    icon: <Fish className="w-5 h-5" />,
  },
  {
    id: "snorkeling",
    name: "Coral Reef Snorkeling",
    duration: "2 hours",
    difficulty: "Easy",
    price: 60,
    description:
      "Explore vibrant coral reefs teeming with tropical fish. Perfect introduction to Maldivian marine life.",
    included: ["Snorkeling gear", "Reef guide", "Fish identification chart", "Underwater photos"],
    image: "/coral-reef.jpg",
    icon: <Camera className="w-5 h-5" />,
  },
  {
    id: "dolphin",
    name: "Dolphin Watching",
    duration: "2.5 hours",
    difficulty: "Easy",
    price: 60,
    description: "Watch playful dolphins in their natural environment. Often includes swimming opportunities.",
    included: ["Boat transport", "Dolphin spotting", "Swimming chance", "Photos & videos"],
    image: "/dolphin.jpg",
    icon: <Waves className="w-5 h-5" />,
  },
  {
    id: "sand-bank",
    name: "Sandbank Picnic",
    duration: "4 hours",
    difficulty: "Easy",
    price: 60,
    description: "Relax on pristine white sandbanks surrounded by turquoise waters. Includes beach picnic.",
    included: ["Beach picnic", "Snorkeling time", "Relaxation", "Scenic photos"],
    image: "/sandbank.jpg",
    icon: <Star className="w-5 h-5" />,
  },
  {
    id: "fishing",
    name: "Traditional Fishing",
    duration: "3 hours",
    difficulty: "Easy",
    price: 60,
    description: "Learn traditional Maldivian fishing techniques. Catch your own dinner with local methods.",
    included: ["Fishing equipment", "Local techniques", "Catch preparation", "Cultural experience"],
    image: "/coral-reef.jpg",
    icon: <Fish className="w-5 h-5" />,
  },
  {
    id: "island-hopping",
    name: "Island Hopping",
    duration: "6 hours",
    difficulty: "Easy",
    price: 60,
    description: "Visit multiple local islands, experience culture, and enjoy various beaches in one day.",
    included: ["Multi-island visit", "Cultural tour", "Local lunch", "Beach time"],
    image: "/sandbank.jpg",
    icon: <Users className="w-5 h-5" />,
  },
]

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary/10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Tours</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the underwater wonders of Ukulhas with our expertly guided tours. All tours include professional
            equipment and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${tour.image}')` }}
                  >
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {tour.icon}
                        <span className="ml-1">{tour.difficulty}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground font-bold">${tour.price}</Badge>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="font-serif text-xl">{tour.name}</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tour.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Included:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tour.included.slice(0, 2).map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                      {tour.included.length > 2 && <li className="text-xs">+ {tour.included.length - 2} more</li>}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={`/tours/${tour.id}`}>View Details</Link>
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-green-600 hover:bg-green-700 text-white flex-1" asChild>
                        <a href="https://wa.me/359887496206" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-1" asChild>
                        <a href="viber://chat?number=0887496206" target="_blank" rel="noopener noreferrer">Viber</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact Tanya directly to book your tour or ask any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/359887496206" target="_blank" rel="noopener noreferrer">
                WhatsApp: +359 887 496 206
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="viber://chat?number=359887496206" target="_blank" rel="noopener noreferrer">
                Viber: +359 887 496 206
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
