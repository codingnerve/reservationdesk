"use client";

import { Button } from "@/components/ui/Button";
import { site, telHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const smallBenefits = [
  {
    title: "Flexible Rental Horizons",
    text: "Single day airport arrivals, weekend scenic routes, or 30+ day monthly extended terms — set the period that fits your itinerary.",
  },
  {
    title: "Named Concierge Support",
    text: "Clear, itemized proposals with concrete vehicle options and transparent terms — no bot loops, no automated runaround.",
  },
  {
    title: "Flight & Route Adaptability",
    text: "Flight delayed or travel schedules shifted? Contact our desk and our team adjusts your handover arrangement directly.",
  },
];

export function WhyReservationDesk() {
  const tel = telHref();

  return (
    <section aria-labelledby="why-heading" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            WHY RESERVATIONDESK
          </span>
          <h2 id="why-heading" className="mt-2 max-w-lg text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything you need for seamless road travel.
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Large Sapphire feature block */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-navy p-8 text-on-brand sm:p-10 shadow-xl shadow-brand/15">
          <svg viewBox="0 0 400 200" aria-hidden="true" className="absolute -right-8 -top-8 h-48 w-96 opacity-15 pointer-events-none">
            <path
              d="M0 180 C 100 120, 140 40, 240 70 S 380 20, 400 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="1 12"
              strokeLinecap="round"
            />
          </svg>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            DIRECT DESK ASSISTANCE
          </div>
          <h3 className="mt-4 max-w-md text-2xl font-extrabold leading-snug sm:text-3xl">
            One concise request. An upfront, tailored proposal.
          </h3>
          <p className="mt-4 max-w-md text-white/85 text-sm sm:text-base leading-relaxed">
            Skip complex booking engines with confusing insurance tiers. Submit your destination and dates, and our team returns verified vehicle choices with transparent, all-in pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tel ? (
              <a
                href={tel}
                onClick={() => trackEvent("call_clicked", { placement: "why_reservation_desk" })}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wide text-brand shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current stroke-[2.5]" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Start Reservation Enquiry</span>
              </a>
            ) : (
              <Button href="/contact#quote" variant="onBrand" size="lg">
                Start Reservation Enquiry
              </Button>
            )}
          </div>
        </div>

        {/* Benefit cards */}
        <div className="grid content-start gap-4">
          {smallBenefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-line bg-surface-raised p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <h3 className="font-bold text-ink text-base sm:text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const WhyCarRentalO = WhyReservationDesk;
