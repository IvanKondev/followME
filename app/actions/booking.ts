"use server"

import { trackBookingSubmit } from "@/lib/analytics"
import { getStaticTranslations } from "@/lib/i18n"

interface BookingData {
  name: string
  phone: string
  guests: string
  excursions: string[]
  date: string
  locale?: string
}

const tourNamesEn: Record<string, string> = {
  "manta-safari": "Manta Safari",
  "turtle-encounter": "Turtle Encounter",
  "nurse-shark": "Nurse Shark Adventure",
  snorkeling: "Coral Reef Snorkeling",
  dolphin: "Dolphin Watching",
  "sand-bank": "Sandbank Picnic",
  fishing: "Traditional Fishing",
  "island-hopping": "Island Hopping",
}

const tourNamesBg: Record<string, string> = {
  "manta-safari": "Сафари с манти",
  "turtle-encounter": "Среща с костенурки",
  "nurse-shark": "Приключение с акули",
  snorkeling: "Гмуркане с шнорхел",
  dolphin: "Наблюдение на делфини",
  "sand-bank": "Пикник на пясъчна коса",
  fishing: "Традиционен риболов",
  "island-hopping": "Обиколка на острови",
}

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const TELEGRAM_API_URL = TELEGRAM_BOT_TOKEN
  ? `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  : undefined

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
}

function formatDisplayDate(iso: string, locale: string | undefined) {
  // iso expected yyyy-MM-dd
  const [y, m, d] = iso.split("-")
  if (!y || !m || !d) return iso
  return `${d}.${m}.${y}`
}

export async function submitBooking(formData: FormData) {
  try {
    const bookingData: BookingData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      guests: formData.get("guests") as string,
      excursions: (formData.getAll("excursions") as string[]) || [],
      date: formData.get("date") as string,
      locale: (formData.get("locale") as string) || "en",
    }

    // Validate required fields
    if (!bookingData.name || !bookingData.phone || !bookingData.guests || !bookingData.date || bookingData.excursions.length === 0) {
      return { success: false, error: "Missing required fields" }
    }

    // Format the booking email content
    const excursionNames = bookingData.excursions.map((id) =>
      (bookingData.locale === "bg" ? tourNamesBg[id] : tourNamesEn[id]) || id
    )
    const emailContent = `
New Tour Booking Request

Customer Details:
- Name: ${bookingData.name}
- Phone: ${bookingData.phone}

Booking Details:
- Excursions: ${excursionNames.join(", ")}
- Date: ${bookingData.date}
- Number of guests: ${bookingData.guests}
- Total cost: $${Number.parseInt(bookingData.guests) * 60}

Please contact the customer via WhatsApp or Viber at ${bookingData.phone} to confirm the booking.
    `.trim()

    // In a real application, you would send this via email service like Resend
    // For now, we'll just log it and return success
    console.log("Booking request:", emailContent)

    // Send to Telegram
    const t = getStaticTranslations(bookingData.locale).t
    const labels = bookingData.locale === "bg"
      ? {
          title: "📩 Ново запитване",
          name: "👤 Име",
          phone: "📞 Телефон",
          excursions: "🌴 Екскурзии",
          date: "📅 Дата",
          guests: "👥 Хора",
        }
      : {
          title: "📩 New booking request",
          name: "👤 Name",
          phone: "📞 Phone",
          excursions: "🌴 Excursions",
          date: "📅 Date",
          guests: "👥 People",
        }

    const safeName = escapeHtml(bookingData.name)
    const safePhoneDisplay = escapeHtml(bookingData.phone)
    const phoneHref = bookingData.phone.replace(/\s+/g, "")
    const displayDate = formatDisplayDate(bookingData.date, bookingData.locale)
    const safeExcursions = escapeHtml(excursionNames.join(", "))

    const telegramHtml = [
      labels.title,
      "",
      `${labels.name}: ${safeName}`,
      `${labels.phone}: <a href="tel:${phoneHref}">${safePhoneDisplay}</a>`,
      `${labels.excursions}: ${safeExcursions}`,
      `${labels.date}: ${displayDate}`,
      `${labels.guests}: ${bookingData.guests}`,
    ].join("\n")

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || !TELEGRAM_API_URL) {
      console.warn("Telegram credentials missing. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in environment.")
    } else {
      const params = new URLSearchParams()
      params.set("chat_id", TELEGRAM_CHAT_ID)
      params.set("parse_mode", "HTML")
      params.set("text", telegramHtml)

      try {
        const resp = await fetch(TELEGRAM_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body: params.toString(),
          // avoid caching issues
          cache: "no-store",
        })
        if (!resp.ok) {
          const body = await resp.text()
          console.error("Telegram send error:", resp.status, body)
        }
      } catch (e) {
        console.error("Telegram fetch error:", e)
      }
    }

    trackBookingSubmit(excursionNames[0] || "Multiple")

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Booking submission error:", error)
    return { success: false, error: "Failed to submit booking" }
  }
}
