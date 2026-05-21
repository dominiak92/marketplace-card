import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { seller } from "@/data/mock"

const navLinks = [
  { href: "#oferty", label: "Oferty" },
  { href: "#kategorie", label: "Kategorie" },
  { href: "#o-mnie", label: "O mnie" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
            {seller.initials}
          </div>
          <span className="font-semibold text-gray-900">{seller.name}</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-gray-600 hover:text-amber-600 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        <Button
          className="bg-amber-500 hover:bg-amber-600 text-white gap-2 shadow-sm"
          size="sm"
          asChild
        >
          <a href={seller.olxUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Profil OLX</span>
            <span className="sm:hidden">OLX</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
