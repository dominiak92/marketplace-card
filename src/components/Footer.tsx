import { useState } from "react"
import { company } from "@/data/mock"

function FooterLogo() {
  const [error, setError] = useState(false)
  return error ? (
    <span className="font-black tracking-tight text-lg text-white">
      AMILO<span className="text-red-500"> AGD</span>
    </span>
  ) : (
    <div className="bg-white rounded-lg px-3 py-2 inline-block">
      <img
        src="/amilo-logo.png"
        alt="AMILO AGD"
        className="h-8 w-auto"
        onError={() => setError(true)}
      />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="space-y-3">
            <FooterLogo />
            <p className="text-sm leading-relaxed text-slate-500">
              Sprawdzony używany sprzęt AGD premium — Bosch, Siemens, Miele.
            </p>
          </div>

          {/* Dane firmy */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-sm mb-3">Dane firmy</h4>
            <p className="text-sm">{company.legalName}</p>
            <p className="text-sm">NIP: {company.nip}</p>
            <p className="text-sm">
              {company.address.street},<br />
              {company.address.postal} {company.address.city}
            </p>
            <p className="text-sm text-slate-600">{company.address.region}</p>
          </div>

          {/* Kontakt */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-sm mb-3">Kontakt</h4>
            <a
              href={`tel:${company.phoneRaw}`}
              className="block text-sm hover:text-white transition-colors"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="block text-sm hover:text-white transition-colors"
            >
              {company.email}
            </a>
            <a
              href={company.olxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-red-400 hover:text-red-300 transition-colors mt-3"
            >
              Profil OLX →
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-600 text-center mt-6">
          © {new Date().getFullYear()} {company.legalName} · Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  )
}
