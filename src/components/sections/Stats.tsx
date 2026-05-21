import { brands } from "@/data/mock"

export function Brands() {
  return (
    <section id="marki" className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs text-slate-400 font-semibold uppercase tracking-widest mb-10">
          Specjalizujemy się w sprzęcie tych marek
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center text-center px-8 py-8 group"
            >
              {/* Brand name */}
              <div
                className={`text-4xl sm:text-5xl ${brand.weight} leading-none transition-transform duration-200 group-hover:scale-105`}
                style={{ color: brand.color }}
              >
                {brand.name}
              </div>

              {/* Accent line */}
              <div
                className="w-8 h-0.5 mt-4 mb-3 rounded-full opacity-70"
                style={{ backgroundColor: brand.color }}
              />

              {/* Tagline */}
              <p className="text-slate-500 text-sm">{brand.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
