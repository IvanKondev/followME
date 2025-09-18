import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Play, Heart } from "lucide-react"

const galleryItems = [
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Majestic Manta Ray",
    category: "Manta Safari",
    description: "Swimming alongside these gentle giants",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Green Sea Turtle",
    category: "Turtle Encounter",
    description: "Ancient mariners of the ocean",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Vibrant Coral Reef",
    category: "Snorkeling",
    description: "Underwater rainbow of marine life",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Playful Dolphins",
    category: "Dolphin Watching",
    description: "Nature's acrobats in action",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Gentle Nurse Shark",
    category: "Nurse Shark Adventure",
    description: "Peaceful encounters with reef sharks",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Paradise Sandbank",
    category: "Sandbank Picnic",
    description: "Your own private slice of paradise",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Traditional Fishing",
    category: "Fishing",
    description: "Learning ancient fishing techniques",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Local Island Life",
    category: "Island Hopping",
    description: "Discovering authentic Maldivian culture",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Happy Guests",
    category: "Group Tours",
    description: "Creating unforgettable memories together",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "School of Fish",
    category: "Marine Life",
    description: "The ocean's living kaleidoscope",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Crystal Clear Waters",
    category: "Snorkeling",
    description: "Visibility that takes your breath away",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    title: "Maldivian Sunset",
    category: "Scenic Views",
    description: "Perfect endings to perfect days",
  },
]

const categories = ["All", "Manta Safari", "Turtle Encounter", "Snorkeling", "Dolphin Watching", "Marine Life"]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Dive into the beauty of Ukulhas through our lens - every tour includes professional photos and videos
          </p>

          <div className="flex items-center justify-center mt-6 space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Camera className="w-4 h-4 mr-1" />
              Professional Photos
            </div>
            <div className="flex items-center">
              <Play className="w-4 h-4 mr-1" />
              HD Videos
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              Memories Included
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${item.src}')` }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-black/50 text-white border-0">
                        {item.type === "image" ? <Camera className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
                    <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16">
            <Card className="bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-4">Your Memories, Captured Forever</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="space-y-2">
                    <Camera className="w-8 h-8 text-primary mx-auto" />
                    <h4 className="font-semibold">Professional Photos</h4>
                    <p className="text-sm text-muted-foreground">
                      High-quality underwater and surface photos of your adventure
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Play className="w-8 h-8 text-primary mx-auto" />
                    <h4 className="font-semibold">HD Videos</h4>
                    <p className="text-sm text-muted-foreground">
                      Cinematic videos of your encounters with marine life
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Heart className="w-8 h-8 text-primary mx-auto" />
                    <h4 className="font-semibold">Included Free</h4>
                    <p className="text-sm text-muted-foreground">
                      All photos and videos are included in your tour price
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                  Every tour includes professional photography and videography. You'll receive all your photos and
                  videos via WhatsApp or email within 24 hours of your tour.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
