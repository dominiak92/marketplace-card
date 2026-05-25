import { company } from "@/data/mock"

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-500 py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-zinc-800/60">

          {/* Brand */}
          <div className="space-y-3">
            <img
              src="/amilo-logo-napis-jasny.webp"
              alt="AMILO AGD"
              className="h-8 w-auto opacity-80"
            />
            <p className="text-sm leading-relaxed text-zinc-600">
              Sprawdzony używany sprzęt AGD premium — m.in. Bosch, Siemens, Miele.
            </p>
          </div>

          {/* Dane firmy */}
          <div className="space-y-2">
            <h4 className="text-zinc-300 font-semibold text-sm mb-3">Dane firmy</h4>
            <p className="text-sm">{company.legalName}</p>
            <p className="text-sm">NIP: {company.nip}</p>
            <p className="text-sm">
              {company.address.street},<br />
              {company.address.postal} {company.address.city}
            </p>
          </div>

          {/* Kontakt */}
          <div className="space-y-2">
            <h4 className="text-zinc-300 font-semibold text-sm mb-3">Kontakt</h4>
            <a
              href={`tel:${company.phoneRaw}`}
              className="block text-sm hover:text-zinc-200 transition-colors"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="block text-sm hover:text-zinc-200 transition-colors"
            >
              {company.email}
            </a>
            <a
              href={company.olxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-red-500/70 hover:text-red-400 transition-colors mt-3"
            >
              Profil OLX →
            </a>
          </div>
        </div>

        <p className="text-xs text-zinc-700 text-center mt-6">
          © {new Date().getFullYear()} {company.legalName} · Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  )
}
