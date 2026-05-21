import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { company } from "@/data/mock"

export function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Skontaktuj się z nami
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto leading-relaxed">
            Odpowiadamy szybko. Zapraszamy też do odbioru osobistego w Krzeszycach.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          <a
            href={`tel:${company.phoneRaw}`}
            className="group flex flex-col items-center text-center p-7 rounded-2xl border border-slate-100 hover:border-red-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
              Telefon
            </div>
            <div className="font-bold text-slate-900">{company.phone}</div>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="group flex flex-col items-center text-center p-7 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
              E-mail
            </div>
            <div className="font-bold text-slate-900 break-all">{company.email}</div>
          </a>

          <a
            href={company.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-7 rounded-2xl border border-slate-100 hover:border-green-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
              Adres
            </div>
            <div className="font-bold text-slate-900">{company.address.street}</div>
            <div className="text-slate-500 text-sm mt-0.5">
              {company.address.postal} {company.address.city}
            </div>
            <div className="text-slate-400 text-xs mt-0.5">{company.address.region}</div>
          </a>
        </div>

        {/* OLX CTA strip */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Wolisz sprawdzić ofertę online?
            </h3>
            <p className="text-slate-400 mt-1.5 text-sm leading-relaxed">
              Cały asortyment dostępny na naszym profilu OLX — zdjęcia, opisy, aktualne ceny.
            </p>
          </div>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white gap-2 h-12 px-8 shadow-lg shadow-red-900/30 flex-shrink-0 transition-all"
            asChild
          >
            <a href={company.olxUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Przejdź do profilu OLX
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
