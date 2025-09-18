"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import { trackWhatsAppClick, trackViberClick } from "@/lib/analytics"

interface ContactButtonsProps {
  variant?: "default" | "outline"
  size?: "sm" | "default" | "lg"
  className?: string
}

export function WhatsAppButton({ variant = "default", size = "default", className }: ContactButtonsProps) {
  const handleClick = () => {
    trackWhatsAppClick()
  }

  return (
    <Button variant={variant} size={size} className={`bg-green-600 hover:bg-green-700 text-white ${className}`} asChild>
      <a href="https://wa.me/359887496206" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp
      </a>
    </Button>
  )
}

export function ViberButton({ variant = "outline", size = "default", className }: ContactButtonsProps) {
  const handleClick = () => {
    trackViberClick()
  }

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href="viber://chat?number=359887496206" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <Phone className="w-4 h-4 mr-2" />
        Viber
      </a>
    </Button>
  )
}
