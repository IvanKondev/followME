import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin, CheckCircle, ArrowLeft, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const tours = {
  "manta-safari": {
    name: "Manta Safari",
    duration: "4 hours",
    difficulty: "Easy",
    price: 60,
    maxGuests: 8,
    description:
      "Experience the majestic manta rays in their natural habitat. Swimming with these gentle giants is an unforgettable experience that will leave you in awe of nature's beauty.",
    longDescription:
      "Our Manta Safari takes you to the best manta ray cleaning stations around Ukulhas. These magnificent creatures, with wingspans up to 7 meters, come to these spots to be cleaned by smaller fish. You'll have the incredible opportunity to swim alongside them in crystal clear waters while maintaining a respectful distance.",
    included: [
      "Professional snorkeling gear (mask, fins, snorkel)",
      "Underwater photos and videos",
      "Light refreshments and water",
      "Professional marine biologist guide",
      "Safety briefing and equipment training",
      "Boat transportation to manta sites",
    ],
    itinerary: [
      "8:00 AM - Meet at Ukulhas harbor",
      "8:30 AM - Boat departure and safety briefing",
      "9:00 AM - Arrive at manta cleaning station",
      "9:15 AM - First snorkeling session with mantas",
      "10:30 AM - Break and refreshments",
      "11:00 AM - Second manta encounter site",
      "12:00 PM - Return to Ukulhas",
    ],
    images: [
      "/manta-safari.jpg",
      "/coral-reef.jpg",
      "/dolphin.jpg",
    ],
    tips: [
      "Bring reef-safe sunscreen",
      "Wear a rashguard for sun protection",
      "No touching or chasing the manta rays",
      "Suitable for confident swimmers",
    ],
  },
  "turtle-encounter": {
    name: "Turtle Encounter",
    duration: "3 hours",
    difficulty: "Easy",
    price: 60,
    maxGuests: 10,
    description:
      "Swim alongside sea turtles in crystal clear waters. Perfect for families and beginners to marine life encounters.",
    longDescription:
      "The waters around Ukulhas are home to Green and Hawksbill sea turtles. This gentle tour takes you to their favorite feeding grounds where you can observe these ancient mariners up close. Our experienced guides know exactly where to find them and will ensure a magical encounter.",
    included: [
      "Complete snorkeling equipment",
      "Underwater videos of your turtle encounter",
      "Turtle identification guide",
      "Professional guide and safety briefing",
      "Fresh fruit and water",
      "Boat transport to turtle sites",
    ],
    itinerary: [
      "2:00 PM - Meet at dive center",
      "2:30 PM - Equipment fitting and briefing",
      "3:00 PM - Boat to turtle feeding grounds",
      "3:30 PM - Snorkeling with sea turtles",
      "4:30 PM - Second turtle site visit",
      "5:00 PM - Return to Ukulhas",
    ],
    images: [
      "/turtle.jpg",
      "/coral-reef.jpg",
      "/sandbank.jpg",
    ],
    tips: [
      "Perfect for beginners and families",
      "Maintain 3-meter distance from turtles",
      "Bring underwater camera",
      "No flash photography",
    ],
  },
  // Add more tour details as needed
}

interface TourPageProps {
  params: {
    slug: string
  }
}

export default function TourPage({ params }: TourPageProps) {
  const tour = tours[params.slug as keyof typeof tours]

  if (!tour) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${tour.images[0]}')` }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <Link href="/tours" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tours
            </Link>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{tour.name}</h1>

            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {tour.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Max {tour.maxGuests} guests
              </div>
              <Badge className="bg-accent text-accent-foreground">{tour.difficulty}</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Tour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">{tour.description}</p>
                <p className="text-muted-foreground">{tour.longDescription}</p>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {tour.images.map((src, idx) => (
                    <div
                      key={idx}
                      className="aspect-[4/3] rounded-lg overflow-hidden bg-muted"
                      style={{ backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.included.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Important Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tour.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-center">Book This Tour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">${tour.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="font-medium">{tour.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max guests:</span>
                    <span className="font-medium">{tour.maxGuests} people</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment:</span>
                    <span className="font-medium">Cash only</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                    <a href="https://wa.me/359887496206" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book via WhatsApp
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="viber://chat?number=359887496206" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      Book via Viber
                    </a>
                  </Button>
                </div>

                <div className="text-xs text-center text-muted-foreground pt-2">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  Meeting point: Ukulhas Harbor
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
