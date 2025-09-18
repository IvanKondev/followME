export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ukulhas-tours.vercel.app/#business",
    name: "Ukulhas Tours with Tanya",
    description:
      "Professional snorkeling and island tours in Ukulhas, Maldives. Small groups, friendly guide, photos and videos included.",
    url: "https://ukulhas-tours.vercel.app",
    telephone: "+359887496206",
    email: "info@ukulhas-tours.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ukulhas",
      addressCountry: "Maldives",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "4.2167",
      longitude: "72.8667",
    },
    openingHours: "Mo-Su 08:00-18:00",
    priceRange: "$60",
    paymentAccepted: "Cash",
    currenciesAccepted: "USD",
    image: "https://ukulhas-tours.vercel.app/og-image.jpg",
    logo: "https://ukulhas-tours.vercel.app/logo.png",
    sameAs: ["https://instagram.com/tannyak0"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tour Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Manta Safari",
            description: "Experience majestic manta rays in their natural habitat",
            duration: "PT4H",
          },
          price: "60",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Turtle Encounter",
            description: "Swim alongside sea turtles in crystal clear waters",
            duration: "PT3H",
          },
          price: "60",
          priceCurrency: "USD",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

export function generateTourSchema(tourName: string, description: string, duration: string, price = 60) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tourName,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "Ukulhas Tours with Tanya",
      "@id": "https://ukulhas-tours.vercel.app/#business",
    },
    duration: duration,
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
      acceptedPaymentMethod: "Cash",
    },
    location: {
      "@type": "Place",
      name: "Ukulhas, Maldives",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ukulhas",
        addressCountry: "Maldives",
      },
    },
    image: "https://ukulhas-tours.vercel.app/tour-images/default.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
    },
  }
}
