import { productCategories, company } from "@/data/mock"

export function Offer() {
  return (
    <section id="oferta" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.25em]">
            Oferta
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Co mamy w sprzedaży?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-slate-200">
          {productCategories.map((cat) => (
            <a
              key={cat.id}
              href={company.olxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-50 hover:bg-white p-7 transition-colors"
            >
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
                {cat.description}
              </p>
              <span className="mt-4 inline-block text-[11px] font-semibold tracking-widest uppercase text-slate-400 group-hover:text-red-600 transition-colors">
                Sprawdź ofertę →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
