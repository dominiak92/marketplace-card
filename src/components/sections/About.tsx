import { whyUsPoints } from "@/data/mock"
import { FadeUp } from "@/components/motion/FadeUp"
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer"
import { AnimatedNumber } from "@/components/motion/AnimatedNumber"
import { DrawLine } from "@/components/motion/DrawLine"

export function WhyUs() {
  return (
    <section id="o-nas" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4">
                O nas
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-[1.1]">
                Dlaczego warto<br />kupić u nas?
              </h2>
              <DrawLine className="w-12 mt-4" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs sm:text-right">
              Każde urządzenie trafia do nas ze sprawdzeniem — kupujesz z gwarancją stanu.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
          {whyUsPoints.map((point, i) => (
            <StaggerItem
              key={i}
              className="border-b border-r border-slate-100"
            >
              <div className="group relative p-8 hover:bg-slate-50 transition-colors duration-200 overflow-hidden h-full">
                {/* ghosted number */}
                <AnimatedNumber
                  value={i + 1}
                  className="absolute -bottom-4 -right-2 text-[6rem] font-black text-slate-900/[0.03] leading-none select-none pointer-events-none"
                  aria-hidden
                />

                <AnimatedNumber
                  value={i + 1}
                  className="block text-[10px] font-semibold tracking-[0.3em] text-slate-300 uppercase mb-6"
                />

                <div className="w-5 h-px bg-red-600 mb-5 group-hover:w-8 transition-all duration-300" />

                <h3 className="font-bold text-slate-900 text-sm tracking-wide mb-3">
                  {point.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
