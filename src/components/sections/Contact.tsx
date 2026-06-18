import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { company } from "@/data/mock"
import { FadeUp } from "@/components/motion/FadeUp"
import { DrawLine } from "@/components/motion/DrawLine"
import { WashingMachineSVG } from "@/components/decorative/ApplianceSVG"

const MAP_EMBED =
  "https://maps.google.com/maps?q=ul.+Boczna+3,+66-435+Krzeszyce&output=embed&hl=pl&z=14"

export function Contact() {
  return (
    <section id="kontakt" className="relative py-16 sm:py-24 bg-zinc-950 overflow-hidden">
      <WashingMachineSVG className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] sm:w-[360px] text-white opacity-[0.03] pointer-events-none select-none" />
      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">

        <FadeUp>
          <div className="mb-14 sm:mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">
              Kontakt
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1]">
              Skontaktuj się<br />z nami
            </h2>
            <DrawLine className="w-10 mt-4" />
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Lewa kolumna - dane kontaktowe */}
          <FadeUp delay={0.1} variant="left">
            <div className="border-t border-zinc-800">

              <a
                href={`tel:${company.phoneRaw}`}
                className="group flex items-center justify-between gap-6 py-6 border-b border-zinc-800 hover:bg-zinc-900/40 -mx-4 px-4 transition-colors duration-200"
              >
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-zinc-800 flex items-center justify-center text-white/40 group-hover:border-zinc-700 group-hover:text-white/70 transition-colors">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">
                      Telefon
                    </p>
                    <p className="text-white font-bold text-lg tracking-tight">
                      {company.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
              </a>

              <a
                href={`mailto:${company.email}`}
                className="group flex items-center justify-between gap-6 py-6 border-b border-zinc-800 hover:bg-zinc-900/40 -mx-4 px-4 transition-colors duration-200"
              >
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-zinc-800 flex items-center justify-center text-white/40 group-hover:border-zinc-700 group-hover:text-white/70 transition-colors">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">
                      E-mail
                    </p>
                    <p className="text-white font-bold tracking-tight">
                      {company.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
              </a>

              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-6 border-b border-zinc-800 hover:bg-zinc-900/40 -mx-4 px-4 transition-colors duration-200"
              >
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-zinc-800 flex items-center justify-center text-white/40 group-hover:border-zinc-700 group-hover:text-white/70 transition-colors">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">
                      Adres
                    </p>
                    <p className="text-white font-bold tracking-tight">
                      {company.address.street}
                    </p>
                    <p className="text-white/50 text-sm">
                      {company.address.postal} {company.address.city}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
              </a>

            </div>
          </FadeUp>

          {/* Prawa kolumna - mapa */}
          <FadeUp delay={0.2} variant="right">
            <div className="relative border border-zinc-800 overflow-hidden rounded-sm lg:sticky lg:top-24">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[380px] w-full bg-zinc-900">
                <iframe
                  src={MAP_EMBED}
                  title="Lokalizacja AMILO AGD"
                  className="w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
              {/* overlay label */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-zinc-950/90 to-transparent pointer-events-none">
                <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                  {company.address.street} · {company.address.city}
                </p>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
