import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { seller } from "@/data/mock"

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: seller.phone,
    href: `tel:${seller.phone.replace(/\s/g, "")}`,
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: seller.email,
    href: `mailto:${seller.email}`,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    label: "Lokalizacja",
    value: seller.location,
    href: "#",
    iconClass: "bg-green-50 text-green-600",
  },
]

export function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Zainteresowany? Odezwij się!
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto leading-relaxed">
            Odpowiadam szybko, zazwyczaj tego samego dnia. Chętnie odpowiem na pytania i pomogę wybrać właściwy produkt.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {contactItems.map(({ icon: Icon, label, value, href, iconClass }) => (
            <a
              key={label}
              href={href}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-white"
            >
              <div className={`w-12 h-12 rounded-xl ${iconClass} flex items-center justify-center`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  {label}
                </div>
                <div className="font-semibold text-gray-800 mt-1 text-sm break-all">{value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Dark CTA strip */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Wolisz napisać przez OLX?
            </h3>
            <p className="text-gray-400 mt-1.5 text-sm leading-relaxed">
              Znajdź mój profil i wyślij wiadomość bezpośrednio na platformie — szybko i bezpiecznie.
            </p>
          </div>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-white gap-2 h-12 px-7 shadow-lg shadow-amber-900/20 flex-shrink-0 transition-all duration-200"
            asChild
          >
            <a href={seller.olxUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Otwórz profil OLX
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
