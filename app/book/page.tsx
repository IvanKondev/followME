"use client"

import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Phone, Clock, DollarSign } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { useSearchParams } from "next/navigation"

export default function BookingPage() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const tour = searchParams.get("tour")
  const excursions = searchParams.getAll("excursions")
  const preselectedExcursions = [
    ...excursions,
    ...(tour ? [tour] : []),
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">{t("booking.pageTitle")}</h1>
          <p className="text-xl text-muted-foreground">{t("booking.pageSubtitle")}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{t("booking.formTitle")}</CardTitle>
                <p className="text-muted-foreground">{t("booking.formSubtitle")}</p>
              </CardHeader>
              <CardContent>
                <BookingForm preselectedExcursions={preselectedExcursions as string[]} />
              </CardContent>
            </Card>
          </div>

          {/* Booking Info Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.quickContact")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{t("booking.quickContactText")}</p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/359887496206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-green-800">{t("common.whatsapp")}</div>
                      <div className="text-sm text-green-600">+359 887 496 206</div>
                    </div>
                  </a>

                  <a
                    href="viber://chat?number=359887496206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium text-purple-800">{t("common.viber")}</div>
                      <div className="text-sm text-purple-600">+359 887 496 206</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Booking Information */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.bookingInformation")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t("booking.pricing")}</div>
                    <div className="text-sm text-muted-foreground">{t("booking.pricingText")}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t("booking.payment")}</div>
                    <div className="text-sm text-muted-foreground">{t("booking.paymentText")}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t("booking.confirmation")}</div>
                    <div className="text-sm text-muted-foreground">{t("booking.confirmationText")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Policy */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.weatherPolicy")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t("booking.weatherPolicyText")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
