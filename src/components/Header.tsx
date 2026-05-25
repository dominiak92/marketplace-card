import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { company } from "@/data/mock"

const navLinks = [
  { href: "#oferta", label: "Oferta" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
]

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a href="#" className="select-none flex items-center">
      <img
        src={scrolled ? "/amilo-logo-napis-ciemny.webp" : "/amilo-logo-napis-jasny.webp"}
        alt="AMILO AGD"
        className="h-9 w-auto transition-all duration-300"
      />
    </a>
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
        <Logo scrolled={scrolled} />

        {/* Desktop nav */}
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

        {/* Mobile — przycisk telefon */}
        <a
          href={`tel:${company.phoneRaw}`}
          className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 active:scale-95 ${
            scrolled
              ? "bg-slate-100 hover:bg-slate-200 text-slate-700"
              : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20"
          }`}
          aria-label="Zadzwoń"
        >
          <Phone className="w-4 h-4" strokeWidth={1.8} />
        </a>
      </div>
    </header>
  )
}
