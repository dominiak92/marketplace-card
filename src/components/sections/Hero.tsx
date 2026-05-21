import { Button } from "@/components/ui/button"
import {
  Star,
  MapPin,
  Shield,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import { seller } from "@/data/mock"

const trustPoints = [
  "Uczciwe opisy, bez ukrytych wad",
  "Szybka wysyłka — 1–2 dni robocze",
  "Możliwość odbioru osobistego w Warszawie",
  "Przyjmę zwrot, jeśli coś się nie zgadza",
]

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/40 to-stone-50 flex items-center pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — 3/5 */}
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4 flex-shrink-0" />
              Zaufany sprzedawca OLX od {seller.joinYear}
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                Cześć, tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  {seller.name}
                </span>
                !
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                {seller.tagline}
              </p>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              {seller.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">{seller.rating}</span>
                <span className="text-gray-400 text-sm">({seller.reviewCount} ocen)</span>
              </div>
              <span className="h-4 w-px bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-gray-600">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm">{seller.location}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white gap-2 h-12 px-8 text-base shadow-md shadow-amber-200 hover:shadow-lg hover:shadow-amber-300 transition-all duration-200"
                asChild
              >
                <a href="#oferty">
                  Przeglądaj oferty
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="gap-2 h-12 px-8 text-base border-gray-300 hover:border-amber-400 hover:text-amber-600 transition-all duration-200"
                asChild
              >
                <a href="#kontakt">
                  <MessageCircle className="w-4 h-4" />
                  Napisz do mnie
                </a>
              </Button>
            </div>
          </div>

          {/* Right — profile card — 2/5 */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-amber-300/25 rounded-full blur-3xl" />
            </div>

            <div className="relative bg-white rounded-3xl shadow-2xl shadow-amber-100/60 p-8 w-full max-w-xs">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg ring-4 ring-amber-100">
                    {seller.initials}
                  </div>
                  <span className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-bold w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    ✓
                  </span>
                </div>
              </div>

              <div className="text-center space-y-1 mb-6">
                <h3 className="text-lg font-bold text-gray-900">{seller.name}</h3>
                <p className="text-gray-400 text-xs flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {seller.location}
                </p>
                <div className="flex items-center justify-center gap-0.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-gray-700">{seller.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-5 border-t border-gray-100">
                {[
                  { value: `${seller.listingCount}+`, label: "ogłoszeń" },
                  { value: `${seller.reviewCount}+`, label: "opinii", bordered: true },
                  { value: `${seller.yearsActive}`, label: "lat na OLX" },
                ].map(({ value, label, bordered }) => (
                  <div
                    key={label}
                    className={`text-center ${bordered ? "border-x border-gray-100" : ""}`}
                  >
                    <div className="text-xl font-extrabold text-amber-600">{value}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              <a
                href={seller.olxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold text-sm py-3 rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Zobacz mój profil OLX
              </a>
            </div>

            {/* Floating chip — verified */}
            <div className="absolute top-4 -left-8 hidden lg:flex bg-white rounded-2xl shadow-lg px-3 py-2.5 items-center gap-2 border border-gray-50">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-base flex-shrink-0">
                ✅
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 leading-none">Zweryfikowany</p>
                <p className="text-[11px] text-gray-400 mt-0.5">profil OLX</p>
              </div>
            </div>

            {/* Floating chip — shipping */}
            <div className="absolute bottom-20 -left-8 hidden lg:flex bg-white rounded-2xl shadow-lg px-3 py-2.5 items-center gap-2 border border-gray-50">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-base flex-shrink-0">
                📦
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 leading-none">Szybka wysyłka</p>
                <p className="text-[11px] text-gray-400 mt-0.5">InPost · DPD · Poczta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
