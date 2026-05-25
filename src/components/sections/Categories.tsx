import { ArrowUpRight } from "lucide-react"
import { productCategories, company } from "@/data/mock"
import { FadeUp } from "@/components/motion/FadeUp"
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer"
import { DrawLine } from "@/components/motion/DrawLine"

export function Offer() {
  return (
    <section id="oferta" className="bg-zinc-950 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">
                Oferta
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1]">
                Co mamy<br />w sprzedaży?
              </h2>
              <DrawLine className="w-12 mt-4" />
            </div>

            {/* CTA — desktop */}
            <a
              href={company.olxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-3 px-5 h-11 border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/35 text-white/70 hover:text-white transition-all duration-200 rounded-sm group self-end"
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
                Przeglądaj ofertę
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>
        </FadeUp>

        {/* Grid kart */}
        <StaggerContainer className="grid sm:grid-cols-2 border-t border-l border-zinc-800">
          {productCategories.map((cat) => (
            <StaggerItem key={cat.id}>
              <a
                href={company.olxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-b border-r border-zinc-800 p-8 sm:p-10 hover:bg-zinc-900/70 transition-colors duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Ghosted number */}
                <span
                  className="absolute -top-3 -right-1 text-[7rem] font-black text-white/[0.03] leading-none select-none pointer-events-none"
                  aria-hidden
                >
                  {String(cat.id).padStart(2, "0")}
                </span>

                {/* Index */}
                <span className="block text-[10px] font-semibold tracking-[0.3em] text-white/25 uppercase mb-6">
                  {String(cat.id).padStart(2, "0")}
                </span>

                {/* Nazwa */}
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">
                  {cat.name}
                </h3>

                {/* Opis */}
                <p className="text-white/45 text-sm leading-relaxed mb-8">
                  {cat.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.25em] uppercase text-white/25 group-hover:text-white/65 transition-colors duration-200 mt-auto">
                  Sprawdź ofertę
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>

                {/* Red accent line on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-500 ease-out" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA — mobile */}
        <div className="mt-8 sm:hidden">
          <a
            href={company.olxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full h-12 border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white transition-all duration-200 rounded-sm group"
          >
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
              Przeglądaj ofertę
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

      </div>
    </section>
  )
}
