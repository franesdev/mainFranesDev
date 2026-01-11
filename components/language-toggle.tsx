"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-zinc-800 border-lime-500 hover:bg-zinc-700">
          <Globe className="h-4 w-4 text-lime-500" />
          <span className="ml-2 text-lime-500">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-800 border-lime-500">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`${language === "en" ? "bg-lime-500/20 text-lime-500" : "text-white"} hover:bg-lime-500/10 hover:text-lime-400`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`${language === "es" ? "bg-lime-500/20 text-lime-500" : "text-white"} hover:bg-lime-500/10 hover:text-lime-400`}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
