declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export const GA_TRACKING_ID = "G-XXXXXXXXXX" // Replace with actual GA4 ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (action: string, parameters?: any) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, parameters)
  }
}

// Specific tracking functions for the brief requirements
export const trackWhatsAppClick = () => {
  event("click_whatsapp", {
    event_category: "contact",
    event_label: "WhatsApp Button Click",
  })
}

export const trackViberClick = () => {
  event("click_viber", {
    event_category: "contact",
    event_label: "Viber Button Click",
  })
}

export const trackBookingSubmit = (tourName?: string) => {
  event("submit_booking", {
    event_category: "booking",
    event_label: "Booking Form Submission",
    tour_name: tourName,
  })
}

export const trackTourView = (tourName: string) => {
  event("view_tour", {
    event_category: "tours",
    event_label: "Tour Detail View",
    tour_name: tourName,
  })
}
