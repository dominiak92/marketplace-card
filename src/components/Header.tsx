import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { company } from "@/data/mock"

const navLinks = [
  { href: "#marki", label: "Marki" },
  { href: "#oferta", label: "Oferta" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
]

function Logo({ inverted }: { inverted: boolean }) {
  const [error, setError] = useState(false)
  return error ? (
    <span
      className={`font-black tracking-tight text-xl select-none ${inverted ? "text-white" : "text-slate-900"}`}
    >
      AMILO<span className="text-red-600"> AGD</span>
    </span>
  ) : (
    <div className={`${inverted ? "bg-white/10 backdrop-blur-sm" : ""} rounded-lg p-1 transition-all`}>
      <img
        src="/amilo-logo.png"
        alt="AMILO AGD"
        className="h-9 w-auto"
        onError={() => setError(true)}
      />
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Logo inverted={!scrolled} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-600 hover:text-red-600"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 shadow-sm" size="sm" asChild>
          <a href={company.olxUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">OLX</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
