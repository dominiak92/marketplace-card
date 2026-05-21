import { CheckCircle2, Star, Quote } from "lucide-react"
import { reviews } from "@/data/mock"

const reasons = [
  "Zdjęcia zawsze zgodne z rzeczywistością — żadnych filtrów",
  "Opisy pisane uczciwie — wady zawsze wyraźnie podane",
  "Szybka odpowiedź na wiadomości, zazwyczaj w ciągu godziny",
  "Ponad 5 lat na OLX i zero negatywnych opinii",
  "Bezpieczna płatność przez OLX lub za pobraniem",
  "Możliwość negocjacji przy zakupie kilku rzeczy",
]

export function About() {
  return (
    <section id="o-mnie" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div className="space-y-8">
            <div>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                O mnie
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-snug">
                Dlaczego warto{" "}
                <span className="text-amber-400">kupić ode mnie?</span>
              </h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Sprzedaję od lat i zależy mi na tym, żeby każdy kupujący był w 100% zadowolony. To nie jest jednorazowy handel — buduję reputację opartą na uczciwości.
              </p>
            </div>

            <ul className="space-y-3.5">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — review cards */}
          <div className="space-y-5">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700/60"
              >
                <Quote className="w-7 h-7 text-amber-400 mb-4 opacity-80" />
                <p className="text-gray-200 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-700">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{review.name}</div>
                    <div className="flex mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Summary badge */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="text-4xl font-extrabold text-amber-400">4.9</div>
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Średnia z 487 opinii na OLX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
