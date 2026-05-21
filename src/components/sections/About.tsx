import { whyUsPoints } from "@/data/mock"

export function WhyUs() {
  return (
    <section id="o-nas" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.25em]">
            O nas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Dlaczego warto kupić u nas?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsPoints.map((point, i) => (
            <div key={i}>
              <div className="w-8 h-px bg-red-600 mb-5" />
              <h3 className="font-bold text-slate-900 text-sm tracking-wide mb-2">
                {point.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
