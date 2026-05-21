import { whyUsPoints } from "@/data/mock"

export function WhyUs() {
  return (
    <section id="o-nas" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-400 font-semibold text-sm uppercase tracking-widest">
            O nas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Dlaczego warto kupić od <span className="text-red-500">AMILO AGD</span>?
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto leading-relaxed">
            Traktujemy każdą sprzedaż poważnie — naszym celem jest to, żebyś był w pełni zadowolony z zakupu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsPoints.map((point) => (
            <div
              key={point.title}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50 hover:border-red-800/50 transition-colors duration-200"
            >
              <div className="text-3xl mb-4 select-none">{point.icon}</div>
              <h3 className="font-bold text-white text-base leading-snug">{point.title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
