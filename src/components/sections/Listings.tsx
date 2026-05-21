import { MapPin, Clock } from "lucide-react"
import { listings } from "@/data/mock"

const conditionStyle: Record<string, string> = {
  "Jak nowy": "bg-green-100 text-green-700",
  "Używany": "bg-gray-100 text-gray-600",
  "Dobry": "bg-blue-100 text-blue-700",
}

export function Listings() {
  return (
    <section id="oferty" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Oferty
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Aktualne ogłoszenia
            </h2>
          </div>
          <a
            href="#"
            className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1 group transition-colors"
          >
            Zobacz wszystkie
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
              →
            </span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Colored image area */}
              <div
                className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="absolute text-[10rem] opacity-10 select-none pointer-events-none">
                  {item.emoji}
                </span>
                <span className="relative text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110 select-none">
                  {item.emoji}
                </span>
                <span
                  className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${conditionStyle[item.condition]}`}
                >
                  {item.condition}
                </span>
              </div>

              {/* Card body */}
              <div className="p-4">
                <span className="inline-block text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-2 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-extrabold text-gray-900">{item.price}</span>
                  <div className="flex flex-col items-end gap-1">
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      {item.daysAgo === 1 ? "wczoraj" : `${item.daysAgo} dni temu`}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
