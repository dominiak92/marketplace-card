import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/data/mock"

export function Hero() {
  const [logoError, setLogoError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-image.mp4" type="video/mp4" />
      </video>
      {/* Gradient fade — ciemniej po lewej (tekst), rozjaśnienie ku prawej + vignette na dole */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — tekst + kontakt */}
          <div className="order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/55 mb-5">
              Sprzedaż i skup używanego AGD
            </p>
            <h1 className="font-extrabold text-white leading-[1.1] mb-5">
              <span className="block text-3xl lg:text-[2.6rem]">Używany sprzęt AGD</span>
              <span className="block text-3xl lg:text-[2.6rem] text-red-500">marek premium</span>
            </h1>
            <p className="text-white/65 text-sm leading-relaxed mb-10 max-w-sm">
              Sprawdzone technicznie urządzenia Bosch, Siemens i Miele — w doskonałych cenach, stacjonarnie i online.
            </p>

            <a
              href={`tel:${company.phoneRaw}`}
              className="block text-2xl sm:text-3xl font-extrabold text-white hover:text-red-400 transition-colors tracking-tight leading-none mb-4"
            >
              {company.phone}
            </a>
            <div className="space-y-1 text-white/50 text-sm mb-9">
              <a
                href={`mailto:${company.email}`}
                className="block hover:text-white/80 transition-colors"
              >
                {company.email}
              </a>
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white/80 transition-colors"
              >
                {company.address.street}, {company.address.postal} {company.address.city}
              </a>
            </div>

            <Button
              className="bg-red-600 hover:bg-red-700 text-white gap-2 h-11 px-8 text-sm shadow-lg shadow-red-900/40"
              asChild
            >
              <a href={company.olxUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Oferta na OLX
              </a>
            </Button>
          </div>

          {/* RIGHT — logo dominujące */}
          <div className="order-1 md:order-2 flex flex-col items-center gap-6">
            <div className="relative flex items-center justify-center">
              {/* Soft white radial glow — zastępuje biały prostokąt */}
              <div className="absolute w-80 h-80 bg-white/[0.12] rounded-full blur-3xl" />
              <div className="absolute w-52 h-52 bg-white/[0.14] rounded-full blur-2xl" />
              {logoError ? (
                <span className="relative font-black tracking-tight text-5xl drop-shadow-2xl">
                  <span className="text-slate-200">AMI</span>
                  <span className="text-red-500">LO</span>
                  <span className="block text-center text-base font-semibold tracking-[0.35em] text-white/50 mt-1">AGD</span>
                </span>
              ) : (
                <img
                  src="/amilo-logo.png"
                  alt="AMILO AGD"
                  className="relative h-48 sm:h-56 w-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                  style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.25)) drop-shadow(0 8px 30px rgba(0,0,0,0.6))" }}
                  onError={() => setLogoError(true)}
                />
              )}
            </div>

            <div className="flex items-center justify-center gap-5 text-white/40 select-none">
              <span className="text-[11px] font-black tracking-[0.2em]">BOSCH</span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] font-light tracking-[0.2em]">SIEMENS</span>
              <span className="text-white/20">|</span>
              <span
                className="text-[11px] font-bold tracking-wide"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Miele
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
