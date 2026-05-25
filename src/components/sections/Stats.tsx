import { stats } from "@/data/mock"
import { AnimatedNumber } from "@/components/motion/AnimatedNumber"
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer"

export function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
          {stats.map((stat, i) => (
            <StaggerItem key={i} className="flex flex-col items-center justify-center py-8 px-6 text-center">
              <div className="flex items-end justify-center gap-0.5 mb-2">
                <AnimatedNumber
                  value={stat.value}
                  duration={1.6}
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
