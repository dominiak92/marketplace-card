import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Phone, ArrowDown } from "lucide-react"
import { company } from "@/data/mock"

function HeroLogo() {
  const [error, setError] = useState(false)
  return error ? (
    <div className="inline-block bg-white rounded-2xl px-8 py-4">
      <span className="font-black tracking-tight text-3xl text-slate-900">
        AMILO<span className="text-red-600"> AGD</span>
      </span>
    </div>
  ) : (
    <div className="inline-block bg-white rounded-2xl px-6 py-4 shadow-2xl">
      <img
        src="/amilo-logo.png"
        alt="AMILO AGD"
        className="h-20 w-auto"
        onError={() => setError(true)}
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 hero-grid flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Red glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-700/10 rounded-full blur-3xl pointer-events-none" />
      {/* Red glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center flex flex-col items-center">
        {/* Logo */}
        <HeroLogo />

        {/* Divider */}
        <div className="flex items-center gap-4 mt-10 mb-8">
          <div className="h-px w-16 bg-slate-700" />
          <span className="text-slate-400 text-xs font-light tracking-[0.3em] uppercase">
            Używany sprzęt premium
          </span>
          <div className="h-px w-16 bg-slate-700" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Sprawdzony sprzęt AGD<br />
          <span className="text-red-500">najlepszych marek</span>
        </h1>

        {/* Brand strip */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mt-7">
          {["BOSCH", "SIEMENS", "Miele"].map((b, i) => (
            <span key={b} className="flex items-center gap-3 sm:gap-6">
              <span className="text-slate-200 font-semibold tracking-wide text-sm sm:text-base">
                {b}
              </span>
              {i < 2 && <span className="text-slate-600 text-lg">·</span>}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg mt-7 max-w-2xl leading-relaxed">
          {company.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white h-13 px-8 text-base gap-2 shadow-lg shadow-red-900/30 transition-all hover:shadow-red-900/50"
            style={{ height: "52px" }}
            asChild
          >
            <a href={company.olxUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Sprawdź ofertę OLX
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all"
            style={{ height: "52px", padding: "0 2rem", fontSize: "1rem" }}
            asChild
          >
            <a href={`tel:${company.phoneRaw}`}>
              <Phone className="w-4 h-4 mr-2" />
              {company.phone}
            </a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-slate-800 w-full max-w-lg">
          {[
            { value: "3", label: "Premium marki" },
            { value: "100%", label: "Zweryfikowany sprzęt" },
            { value: "OLX", label: "Bezpieczna sprzedaż" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{value}</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#marki"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        aria-label="Przewiń w dół"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  )
}
