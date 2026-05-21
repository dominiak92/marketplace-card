import { ExternalLink } from "lucide-react"
import { productCategories, company } from "@/data/mock"

export function Offer() {
  return (
    <section id="oferta" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">
            Oferta
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Co mamy w sprzedaży?
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto leading-relaxed">
            Wysokiej jakości, używany sprzęt AGD marek Bosch, Siemens i Miele — sprawdzony i gotowy do pracy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              <div className="text-4xl mb-4 select-none">{cat.emoji}</div>
              <h3 className="font-bold text-slate-900 text-lg">{cat.name}</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed flex-1">
                {cat.description}
              </p>
              <a
                href={company.olxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors group"
              >
                Sprawdź ofertę
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
