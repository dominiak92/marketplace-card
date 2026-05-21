import { categories } from "@/data/mock"

export function Categories() {
  return (
    <section id="kategorie" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Asortyment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Co znajdziesz w moich ogłoszeniach?
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
            Szeroki wybór produktów w dobrym stanie — od elektroniki po meble. Zawsze uczciwie opisane.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#oferty"
              className={`group ${cat.color} border rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer`}
            >
              <span className="text-4xl transition-transform duration-200 group-hover:scale-110 select-none">
                {cat.emoji}
              </span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">{cat.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{cat.count} ogłoszeń</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
