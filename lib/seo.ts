import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  locale?: string
  type?: "website" | "article"
}

export function generateSEO({
  title = "Wonders of the Ocean | Maldives Snorkeling & Island Tours",
  description = "Small groups, friendly guides, photos & videos included. Book your Maldives adventure today! $60 per tour, cash only.",
  keywords = [
    "Maldives tours",
    "Ukulhas snorkeling",
    "manta ray tours",
    "turtle encounters",
    "island hopping",
    "Wonders of the Ocean",
  ],
  image = "/placeholder.jpg",
  url = "https://ukulhas-tours.vercel.app",
  locale = "en",
  type = "website",
}: SEOProps): Metadata {
  return {
    metadataBase: new URL(url),
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Wonders of the Ocean" }],
    creator: "Wonders of the Ocean",
    publisher: "Wonders of the Ocean",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      locale,
      url,
      title,
      description,
      siteName: "Wonders of the Ocean",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@tannyak0",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${url}/en`,
        bg: `${url}/bg`,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  }
}

export function generateTourSEO(tourName: string, tourDescription: string, tourSlug: string, locale = "en"): Metadata {
  return generateSEO({
    title: `${tourName} - Wonders of the Ocean | Maldives`,
    description: `${tourDescription} Book now for $60 per person. Small groups, professional guide, photos included.`,
    keywords: [tourName.toLowerCase(), "Maldives", "Ukulhas", "snorkeling", "tour", "Wonders of the Ocean", "marine life"],
    url: `https://ukulhas-tours.vercel.app/tours/${tourSlug}`,
    locale,
    type: "article",
  })
}
