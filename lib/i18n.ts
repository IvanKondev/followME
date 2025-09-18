"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import en from "./translations/en.json"
import bg from "./translations/bg.json"

const translations = {
  en,
  bg,
}

export function useTranslation() {
  const [locale, setLocale] = useState("en")
  const pathname = usePathname()

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en"
    setLocale(savedLocale)
  }, [])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[locale as keyof typeof translations]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    // Force re-render by triggering a state update
    window.location.reload()
  }

  return { t, locale, switchLanguage }
}

export function getStaticTranslations(locale = "en") {
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[locale as keyof typeof translations]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return { t, locale }
}
