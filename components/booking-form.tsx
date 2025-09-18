"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Loader2 } from "lucide-react"
import { addDays, format, startOfDay } from "date-fns"
import { cn } from "@/lib/utils"
import { submitBooking } from "@/app/actions/booking"
import { useTranslation } from "@/lib/i18n"

const tours = [
  { id: "manta-safari", name: "Manta Safari", duration: "4 hours" },
  { id: "turtle-encounter", name: "Turtle Encounter", duration: "3 hours" },
  { id: "nurse-shark", name: "Nurse Shark Adventure", duration: "3.5 hours" },
  { id: "snorkeling", name: "Coral Reef Snorkeling", duration: "2 hours" },
  { id: "dolphin", name: "Dolphin Watching", duration: "2.5 hours" },
  { id: "sand-bank", name: "Sandbank Picnic", duration: "4 hours" },
  { id: "fishing", name: "Traditional Fishing", duration: "3 hours" },
  { id: "island-hopping", name: "Island Hopping", duration: "6 hours" },
]

interface BookingFormProps {
  preselectedExcursions?: string[]
}

export function BookingForm({ preselectedExcursions = [] }: BookingFormProps) {
  const { t, locale } = useTranslation()
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const today = useMemo(() => startOfDay(new Date()), [])
  const maxDate = useMemo(() => addDays(today, 7), [today])

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await submitBooking(formData)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert("There was an error submitting your booking. Please try contacting us directly via WhatsApp or Viber.")
      }
    } catch (error) {
      alert("There was an error submitting your booking. Please try contacting us directly via WhatsApp or Viber.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{t("booking.bookingRequestSent")}</h3>
        <p className="text-muted-foreground mb-6">{t("booking.thankYouText")}</p>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{t("booking.needImmediate")}</p>
          <div className="flex gap-2 justify-center">
            <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="https://wa.me/359887496206" target="_blank" rel="noopener noreferrer">
                {t("common.whatsapp")}
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="viber://chat?number=359887496206" target="_blank" rel="noopener noreferrer">
                {t("common.viber")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <input type="hidden" name="locale" value={locale} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">{t("booking.fullName")} *</Label>
          <Input id="name" name="name" placeholder={t("booking.fullName")} required />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">{t("booking.phoneNumber")} *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+359 XXX XXX XXX" required />
          <p className="text-xs text-muted-foreground">{t("booking.phoneHint")}</p>
        </div>
      </div>

      {/* Number of People */}
      <div className="space-y-2">
        <Label htmlFor="guests">{t("booking.numberOfPeople")} *</Label>
        <Select name="guests" required>
          <SelectTrigger>
            <SelectValue placeholder={t("booking.selectGuests")} />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? t("booking.person") : t("booking.people")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Excursions Multi-select */}
      <div className="space-y-2">
        <Label>{t("booking.excursions")} *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tours.map((tour) => (
            <label key={tour.id} className="flex items-center gap-2 p-2 border rounded-md">
              <input
                type="checkbox"
                name="excursions"
                value={tour.id}
                defaultChecked={preselectedExcursions.includes(tour.id)}
              />
              <span className="text-sm">{tour.name}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">{t("booking.chooseExcursions")}</p>
      </div>

      {/* Preferred Date */}
      <div className="space-y-2">
        <Label>{t("booking.preferredDate")} *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : t("booking.pickDate")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => {
                if (!d) return true
                const day = startOfDay(d)
                return day < today || day > maxDate
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <input type="hidden" name="date" value={date ? format(date, "yyyy-MM-dd") : ""} />
      </div>

      {/* Terms */}
      <div className="space-y-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">{t("booking.importantInfo")}</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• {t("booking.importantInfo1")}</li>
            <li>• {t("booking.importantInfo2")}</li>
            <li>• {t("booking.importantInfo3")}</li>
            <li>• {t("booking.importantInfo4")}</li>
          </ul>
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("booking.sendingRequest")}
            </>
          ) : (
            t("booking.sendBookingRequest")
          )}
        </Button>
      </div>
    </form>
  )
}
