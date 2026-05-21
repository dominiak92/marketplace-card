import { seller } from "@/data/mock"

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
            {seller.initials}
          </div>
          <span className="text-white font-semibold text-sm">{seller.name}</span>
        </div>

        <p className="text-xs text-center">
          © {new Date().getFullYear()} {seller.name} · Prywatna strona sprzedawcy OLX
        </p>

        <a
          href={seller.olxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors"
        >
          OLX.pl →
        </a>
      </div>
    </footer>
  )
}
