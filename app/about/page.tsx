import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Award, Users, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Meet Tanya</h1>
          <p className="text-xl text-muted-foreground">
            Your friendly local guide to the underwater wonders of Ukulhas
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Tanya's Photo */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-primary/5">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/dolphin.jpg')`,
                }}
              ></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-full p-4">
              <Heart className="w-8 h-8" />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Hi, I'm Tanya!</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born and raised in the Maldives, I've been sharing the magic of our underwater world with visitors for
                over 8 years. What started as a passion for marine life has become my life's mission - showing people
                the incredible beauty that lies beneath our crystal-clear waters.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                I believe that every person deserves to experience the wonder of swimming with manta rays, the joy of
                meeting sea turtles, and the peace of floating above vibrant coral reefs. That's why I keep my groups
                small and personal - usually just 4-8 people - so everyone gets the attention they deserve.
              </p>

              <p className="text-muted-foreground">
                When I'm not in the water with guests, you'll find me photographing marine life, learning about
                conservation, or planning the perfect tour routes. I speak English, Dhivehi, and a little Bulgarian too!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Safety Record</div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-serif text-xl font-semibold">Qualifications</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  PADI Divemaster Certified
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Marine Life Specialist
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  First Aid & CPR Certified
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Local Tourism License
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-serif text-xl font-semibold">My Approach</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Small, personal groups
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Safety always comes first
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Photos & videos included
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Beginner-friendly guidance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <Card className="bg-primary/5">
          <CardContent className="p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Ready to Explore Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'd love to show you the incredible marine life around Ukulhas. Whether you're a complete beginner or an
              experienced snorkeler, I'll make sure you have an unforgettable experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/359887496206" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="viber://chat?number=359887496206" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Chat on Viber
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
