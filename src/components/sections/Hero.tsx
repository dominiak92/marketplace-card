import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { company } from "@/data/mock"

const brandLogos = [
  { src: "/logo_bosch.png", alt: "Bosch" },
  { src: "/logo_siemens.png", alt: "Siemens" },
  { src: "/logo_miele.png", alt: "Miele" },
]

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
        <source src="https://res.cloudinary.com/dm8t0wtyg/video/upload/v1779706199/7086407-uhd_4096_2160_25fps_clryca.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — tekst + kontakt */}
          <div className="order-2 md:order-1 max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-5">
              Używany sprzęt AGD
            </p>

            <h1 className="font-extrabold text-white leading-[1.08] mb-5">
              <span className="block text-[2rem] lg:text-[2.4rem]">Sprzęt premium.</span>
              <span className="block text-[2rem] lg:text-[2.4rem] text-red-500">W dobrej cenie.</span>
            </h1>

            <p className="text-white/60 text-sm leading-relaxed mb-10">
              M.in. Bosch, Siemens i Miele — sprawdzone technicznie, w doskonałych cenach. Stacjonarnie i online.
            </p>

            <a
              href={`tel:${company.phoneRaw}`}
              className="block text-2xl sm:text-[1.7rem] font-extrabold text-white hover:text-red-400 transition-colors tracking-tight leading-none mb-3"
            >
              {company.phone}
            </a>
            <div className="space-y-1 text-white/45 text-sm mb-10">
              <a
                href={`mailto:${company.email}`}
                className="block hover:text-white/75 transition-colors"
              >
                {company.email}
              </a>
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white/75 transition-colors"
              >
                {company.address.street}, {company.address.postal} {company.address.city}
              </a>
            </div>

            {/* CTA — INOX style */}
            <a
              href={company.olxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 h-12 border border-white/25 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white/85 hover:text-white transition-all duration-200 rounded-sm group"
            >
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                Oferta online
              </span>
              <span className="w-px h-3.5 bg-white/20 group-hover:bg-white/35 transition-colors" />
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>

          {/* RIGHT — logo + marki */}
          <div className="order-1 md:order-2 flex flex-col items-center gap-10">
            {/* Logo AMILO */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-96 h-96 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }} />
              <div className="absolute w-64 h-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)" }} />

              {logoError ? (
                <span className="relative font-black tracking-tight text-6xl drop-shadow-2xl">
                  <span className="text-slate-200">AMI</span>
                  <span className="text-red-500">LO</span>
                  <span className="block text-center text-base font-semibold tracking-[0.35em] text-white/50 mt-1">AGD</span>
                </span>
              ) : (
                <img
                  src="/amilo-logo.webp"
                  alt="AMILO AGD"
                  className="relative w-72 sm:w-80 h-auto"
                  style={{
                    filter:
                      "drop-shadow(0 0 60px rgba(255,255,255,0.18)) drop-shadow(0 0 25px rgba(255,255,255,0.12)) drop-shadow(0 8px 40px rgba(0,0,0,0.55))",
                  }}
                  onError={() => setLogoError(true)}
                />
              )}
            </div>

            {/* Marki — loga PNG */}
            <div className="w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/15" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/30 md:text-white/50 font-semibold">
                  Specjalizujemy się w markach
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/15" />
              </div>

              <div className="flex items-center justify-center gap-8 sm:gap-12">
                {brandLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="group flex items-center justify-center h-10 sm:h-11"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full w-auto object-contain transition-all duration-300 group-hover:opacity-70"
                      style={{ filter: "brightness(0) invert(1)", opacity: 0.5 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
