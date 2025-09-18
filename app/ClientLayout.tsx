"use client"

import type React from "react"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"

// Fonts and global tags are handled in the Server RootLayout (`app/layout.tsx`).

function ClientContent({ children }: { children: React.ReactNode }) {
  return <div className="font-sans">{children}</div>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
      <ClientContent>{children}</ClientContent>
    </Suspense>
  )
}
