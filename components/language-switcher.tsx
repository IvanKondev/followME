"use client"

import { useTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, switchLanguage } = useTranslation()
  
  const languages = {
    en: "English",
    bg: "Български"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{languages[locale as keyof typeof languages]}</span>
          <span className="sm:hidden">{locale.toUpperCase()}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem 
          onClick={() => switchLanguage("en")}
          className={locale === "en" ? "bg-primary/10" : ""}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => switchLanguage("bg")}
          className={locale === "bg" ? "bg-primary/10" : ""}
        >
          🇧🇬 Български
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
