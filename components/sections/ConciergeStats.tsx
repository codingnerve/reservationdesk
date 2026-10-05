import Image from "next/image";

const stats = [
  {
    value: "500+",
    label: "Airport & City Desks",
    sub: "Direct counter & curbside pickup worldwide",
  },
  {
    value: "15 Min",
    label: "Rapid Desk Confirmation",
    sub: "Live agents coordinate your itinerary",
  },
  {
    value: "100%",
    label: "Upfront Pricing Guarantee",
    sub: "Zero hidden surcharges at the counter",
  },
  {
    value: "4.9 / 5.0",
    label: "Customer Satisfaction",
    sub: "Over 12,400+ verified road journeys",
  },
];

export function ConciergeStats() {
  return (
    <section aria-label="Reservation Desk Performance Metrics" className="relative -mt-6 mb-12 px-3 sm:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-3xl border border-line/80 bg-surface-raised p-6 shadow-xl shadow-brand-navy/5 backdrop-blur-md sm:p-8 lg:p-10">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-line">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col ${i > 0 ? "md:pl-6" : ""} group`}
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.6rem]">
                    {stat.value}
                  </span>
                  {stat.value.includes("4.9") && (
                    <span className="text-accent text-lg">★</span>
                  )}
                </div>
                <h3 className="mt-1 text-sm font-bold text-ink sm:text-base">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Trusted Network Bar */}
          <div className="mt-8 border-t border-line/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Fleet Inventory From Premier Global Networks:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold tracking-wider text-ink-soft/70">
              <span className="hover:text-brand transition-colors">HERTZ</span>
              <span className="text-line">•</span>
              <span className="hover:text-brand transition-colors">AVIS</span>
              <span className="text-line">•</span>
              <span className="hover:text-brand transition-colors">BUDGET</span>
              <span className="text-line">•</span>
              <span className="hover:text-brand transition-colors">ENTERPRISE</span>
              <span className="text-line">•</span>
              <span className="hover:text-brand transition-colors">SIXT</span>
              <span className="text-line">•</span>
              <span className="hover:text-brand transition-colors">NATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
