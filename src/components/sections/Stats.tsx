import { stats } from "@/data/mock"
import { AnimatedNumber } from "@/components/motion/AnimatedNumber"
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer"

export function Stats() {
  return (
    <section className="relative py-12 sm:py-16 bg-white border-b border-slate-100 overflow-hidden">
      <img
        src="/amilo-logo-napis-ciemny.webp"
        alt=""
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] opacity-[0.04] pointer-events-none select-none"
      />
      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
          {stats.map((stat, i) => (
            <StaggerItem key={i} className="flex flex-col items-center justify-center py-8 px-6 text-center">
              <div className="flex items-end justify-center gap-0.5 mb-2">
                <AnimatedNumber
                  value={stat.value}
                  duration={1.6}
                  format={stat.value < 10 ? String : undefined}
                  className="text-4xl sm:text-5xl font-black text-slate-900 leading-none tabular-nums"
                />
                {stat.suffix && (
                  <span className="text-2xl sm:text-3xl font-black text-red-600 leading-none mb-0.5">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
