import { site, telHref } from "@/lib/site";

const comparisons = [
  {
    feature: "Pricing Transparency",
    standard: "Hidden airport concession fees, facility charges & taxes added at counter.",
    reservationDesk: "100% upfront quote. Itemized breakdown before you ever hand over your card.",
  },
  {
    feature: "Airport Handover",
    standard: "Long shuttle bus ride, 45-minute terminal counter queues, and kiosk confusion.",
    reservationDesk: "Curbside meet & direct desk handover with active flight delay tracking.",
  },
  {
    feature: "Vehicle Class Guarantee",
    standard: "'Or Similar' lottery. Often forced into whatever is leftover in the parking lot.",
    reservationDesk: "Strict category locking. The vehicle tier you book is the tier prepped for you.",
  },
  {
    feature: "Flight Delays & Rescheduling",
    standard: "Hold canceled after 2 hours. Car released with cancellation penalty.",
    reservationDesk: "Flight tracking included. We hold your vehicle until touchdown with zero penalties.",
  },
  {
    feature: "Customer Support",
    standard: "Automated phone tree bots and outsourced offshore ticket loops.",
    reservationDesk: "Direct desk specialists reachable 24/7 with immediate human assistance.",
  },
];

export function ConciergeAdvantage() {
  const tel = telHref();

  return (
    <section aria-labelledby="advantage-heading" className="bg-surface py-20 border-t border-line/70">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            THE CONCIERGE ADVANTAGE
          </div>
          <h2 id="advantage-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Why Travelers Choose <span className="text-brand">Reservation Desk</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-muted">
            See how our dedicated travel desk eliminates counter stress compared to standard generic portals.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-surface-raised shadow-xl shadow-brand-navy/5">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.4fr_1.4fr] border-b border-line bg-ice/40 text-xs font-bold uppercase tracking-wider text-ink-soft">
            <div className="p-4 sm:p-5">Rental Feature</div>
            <div className="hidden md:block p-4 sm:p-5 text-ink-muted">Standard Booking Portals</div>
            <div className="p-4 sm:p-5 bg-brand text-white flex items-center justify-between rounded-t-2xl md:rounded-none">
              <span>Reservation Desk Priority</span>
              <span className="text-accent text-[10px] px-2 py-0.5 rounded-full bg-white/20">RECOMMENDED</span>
            </div>
          </div>

          <div className="divide-y divide-line">
            {comparisons.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1.4fr_1.4fr] hover:bg-ice/20 transition-colors"
              >
                <div className="p-4 sm:p-5 font-bold text-ink text-sm sm:text-base flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-5 text-xs sm:text-sm text-ink-muted flex items-start gap-2 border-t md:border-t-0 border-line/60">
                  <span className="text-danger shrink-0 mt-0.5">✕</span>
                  <span>{row.standard}</span>
                </div>
                <div className="p-4 sm:p-5 text-xs sm:text-sm text-ink-soft font-medium flex items-start gap-2 bg-brand/5 border-t md:border-t-0 border-line/60">
                  <span className="text-emerald-600 shrink-0 mt-0.5 font-bold">✓</span>
                  <span>{row.reservationDesk}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Help Footer */}
          <div className="p-6 bg-surface border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-ink-muted text-center sm:text-left">
              Have questions about an upcoming reservation? Speak directly with a live travel coordinator.
            </p>
            {tel ? (
              <a
                href={tel}
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide hover:bg-brand-strong transition-colors shadow-md shadow-brand/20"
              >
                <span>Call Desk: {site.phoneDisplay || site.phone}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
