import Image from "next/image";
import { heroImages } from "@/data/images";
import { site, telHref } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SearchWidget } from "@/components/SearchWidget";

/** Subtle executive grid & contour background for Reservation Desk */
function ConciergeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[100px]" />
      <div className="absolute top-1/2 -left-24 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <svg
        viewBox="0 0 600 400"
        aria-hidden="true"
        className="absolute -right-12 -top-12 h-full w-full text-brand/20 opacity-60 pointer-events-none"
      >
        <path
          d="M30 350 C 180 260, 140 120, 320 150 S 520 80, 570 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="4 8"
          strokeLinecap="round"
        />
        <circle cx="30" cy="350" r="5" fill="currentColor" />
        <circle cx="570" cy="30" r="7" fill="currentColor" />
      </svg>
    </div>
  );
}

export function Hero() {
  const tel = telHref();

  return (
    <section aria-label="Intro" className="relative overflow-visible">
      <ConciergeBackdrop />

      <div className="relative mx-auto max-w-[1400px] px-3 pb-8 pt-8 sm:px-6 md:pb-12 md:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-strong backdrop-blur-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              PRIORITY CAR RENTAL CONCIERGE DESK
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              Transparent Rates. <span className="text-brand">Instant Airport</span> Pickups.
            </h1>

            <p className="mt-5 max-w-lg text-lg text-ink-muted leading-relaxed">
              Compare handpicked vehicles across 500+ airport and city hubs. Guaranteed upfront pricing with zero counter surprise fees and 24/7 dedicated desk support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button href="#vehicles" size="lg" className="w-full sm:w-auto uppercase tracking-wide font-extrabold text-sm sm:text-base shadow-lg shadow-brand/20">
                Explore Vehicle Fleet
              </Button>
              {tel ? (
                <a
                  href={tel}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-line bg-surface-raised px-6 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wide text-ink shadow-xs transition-all hover:border-brand/40 hover:bg-mint/40 active:scale-[0.98]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-brand fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>CALL {site.phoneDisplay || site.phone}</span>
                </a>
              ) : (
                <Button href="/contact#quote" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Request A Quote
                </Button>
              )}
            </div>

            {/* Micro Trust Points */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-ink-soft">
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Cancellation (48 hrs)</span>
              </div>
              <span className="text-line">•</span>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>No Credit Card Surcharges</span>
              </div>
              <span className="text-line">•</span>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Flight Delay Protection</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Container */}
          <div className="relative hidden lg:block">
            <div className="animate-rise-in relative overflow-hidden rounded-[2.5rem] border border-line bg-surface-raised p-2 shadow-2xl shadow-brand-navy/10">
              <div className="relative overflow-hidden rounded-[2rem] bg-ink">
                <Image
                  src={heroImages.home}
                  alt="Reservation Desk luxury rental vehicle at airport terminal"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl bg-ink/80 px-3.5 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md border border-white/10">
                  <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                  <span>✈️ Terminal 2 Curbside Ready</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 right-4 left-4 rounded-xl bg-surface-raised/95 p-3.5 shadow-xl backdrop-blur-md border border-line flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">100% Upfront Pricing</p>
                      <p className="text-[11px] text-ink-muted">Taxes, fees & basic protection itemized</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-brand">★ 4.9 / 5.0</span>
                    <p className="text-[10px] text-ink-muted">12k+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search panel — primary conversion element, full-width card below hero. */}
      <div className="relative z-30 mx-auto max-w-[1400px] px-3 pb-8 sm:px-6 md:pb-12">
        <div className="overflow-visible">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}
