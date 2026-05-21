const logos = [
  { src: "/bosch-logo.svg", alt: "Bosch" },
  { src: "/siemens-logo.svg", alt: "Siemens" },
  { src: "/miele-logo.svg", alt: "Miele" },
]

export function Brands() {
  return (
    <section id="marki" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-center text-[10px] text-slate-400 font-semibold uppercase tracking-[0.25em] mb-14">
          Specjalizujemy się m.in. w sprzęcie marek
        </p>
        <div className="grid grid-cols-3 items-center gap-8 sm:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center h-10 sm:h-14"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
