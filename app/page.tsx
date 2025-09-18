"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Star, Users, Camera, Heart } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with modern overlay */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/video.mov" type="video/mp4" />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
              style={{
                backgroundImage: `url('/coral-reef.jpg')`,
              }}
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/40 to-teal-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl float" />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-blue-400/20 rounded-full blur-xl pulse-slow" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white/90 text-sm font-medium">{t("homepage.ratedExperience")}</span>
            </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {t("homepage.heroTitle")}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("homepage.heroSubtitle")}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">{t("homepage.happyGuests")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="text-white/80 text-sm">{t("homepage.yearsExperience")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/80 text-sm">{t("homepage.safetyRecord")}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="btn-modern gradient-ocean text-white font-semibold px-8 py-4 text-lg shadow-strong hover:shadow-medium transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/tours">
                <Camera className="w-5 h-5 mr-2" />
                {t("homepage.exploreTours")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Tours Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t("homepage.popularTours")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(() => {
              const tours = [
                { key: "mantaSafari", duration: "4 hours", difficulty: "Easy", slug: "manta-safari", image: "/manta-safari.jpg" },
                { key: "turtleEncounter", duration: "3 hours", difficulty: "Easy", slug: "turtle-encounter", image: "/turtle.jpg" },
                { key: "nurseShark", duration: "3.5 hours", difficulty: "Medium", slug: "nurse-shark", image: "/nurse-shark.jpg" },
                { key: "snorkeling", duration: "2 hours", difficulty: "Easy", slug: "snorkeling", image: "/coral-reef.jpg" },
              ]
              
              return tours.map((tour, index) => (
                <Card key={index} className="group card-modern overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <div
                      className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${tour.image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                        {tour.difficulty}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white font-medium">{tour.duration}</div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                      {t(`tours.${tour.key}.name`)}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-gray-600">{t("homepage.photosIncluded")}</span>
                      </div>
                      <div className="text-2xl font-bold gradient-ocean bg-clip-text text-transparent">
                        $60
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full btn-modern gradient-ocean text-white hover:shadow-medium transition-all duration-300" 
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        <Camera className="w-4 h-4 mr-2" />
                        {t("homepage.exploreTours")}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            })()}
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-ocean bg-clip-text text-transparent">
              {t("homepage.whyChooseUs")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("homepage.whyChooseUsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 gradient-ocean rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">{t("homepage.smallGroups")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("homepage.smallGroupsText")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-sunset rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">{t("homepage.photosIncluded")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("homepage.photosIncludedText")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-ocean rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">{t("homepage.localExpert")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("homepage.localExpertText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Contact Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 glass border-t border-white/20 p-3 flex gap-2 md:hidden z-50">
        <Button className="flex-1 gradient-ocean text-white font-medium rounded-xl" asChild>
          <a href="https://wa.me/359887496206">
            <MessageCircle className="w-4 h-4 mr-2" />
            {t("common.whatsapp")}
          </a>
        </Button>
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl" asChild>
          <a href="viber://chat?number=0887496206">
            <Phone className="w-4 h-4 mr-2" />
            {t("common.viber")}
          </a>
        </Button>
      </div>
    </div>
  )
}
