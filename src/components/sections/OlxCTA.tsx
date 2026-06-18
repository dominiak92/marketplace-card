import { ArrowUpRight } from "lucide-react"
import { company } from "@/data/mock"
import { FadeUp } from "@/components/motion/FadeUp"

export function OlxCTA() {
  return (
    <section className="bg-red-600 py-14 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <FadeUp variant="scale">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-red-200/70 font-semibold mb-3">
                Oferta online
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.15]">
                Przeglądaj aktualną ofertę<br className="hidden sm:block" /> na OLX
              </h2>
              <p className="text-red-100/70 text-sm mt-2">
                Nowe urządzenia dodajemy regularnie - sprawdź co aktualnie mamy.
              </p>
            </div>
            <a
              href={company.olxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 px-6 h-12 border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 text-white transition-all duration-200 rounded-sm group"
            >
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                Zobacz ofertę
              </span>
              <span className="w-px h-3.5 bg-white/25 group-hover:bg-white/40 transition-colors" />
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
