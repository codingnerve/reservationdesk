const benefits = [
  {
    title: "Curbside Terminal Pickup",
    desc: "Fly in and drive away. We coordinate terminal collection with active flight tracking.",
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Guaranteed Upfront Rates",
    desc: "All-in pricing with taxes, collision protection options, and zero counter surprise charges.",
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Modern Inspected Fleet",
    desc: "From agile compacts to 7-seat SUVs and luxury sedans, every car meets strict safety protocols.",
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14M6 12l1.5-4.5A2 2 0 019.4 6h5.2a2 2 0 011.9 1.5L18 12m-13 0h14a1 1 0 011 1v3h-2m-12 0H4v-3a1 1 0 011-1zm3 4a1.5 1.5 0 11-3 0m14 0a1.5 1.5 0 11-3 0" />
      </svg>
    ),
  },
  {
    title: "24/7 Dedicated Concierge",
    desc: "Speak with experienced rental specialists for flight delays, route extensions, and live support.",
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export function BenefitStrip() {
  return (
    <section aria-label="Why choose Reservation Desk" className="border-y border-line/70 bg-gradient-to-b from-surface to-ice/30 py-10">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative rounded-2xl border border-line/80 bg-surface-raised p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                {b.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-ink group-hover:text-brand transition-colors">
                {b.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
