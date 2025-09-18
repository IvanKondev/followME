import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { generateSEO } from "@/lib/seo"
import { Analytics } from "@/components/analytics"
import { SchemaMarkup } from "@/components/schema-markup"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = generateSEO({})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} antialiased`}>
      <head>
        <SchemaMarkup />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
