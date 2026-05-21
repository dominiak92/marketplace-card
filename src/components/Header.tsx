import { useState, useEffect } from "react"

const navLinks = [
  { href: "#marki", label: "Marki" },
  { href: "#oferta", label: "Oferta" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
]

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a href="#" className="select-none">
      <span
        className={`font-black tracking-tight text-xl transition-colors ${
          scrolled ? "text-slate-500" : "text-white/70"
        }`}
      >
        AMI
      </span>
      <span className="font-black tracking-tight text-xl text-red-500">LO</span>
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
      </div>
    </header>
  )
}
