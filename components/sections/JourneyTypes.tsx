import Image from "next/image";
import Link from "next/link";
import { telHref } from "@/lib/site";
import type { JourneyType } from "@/data/journey-types";

const journeyTags: Record<string, string> = {
  airport: "Express Terminal Handover",
  business: "Executive Class & Comfort",
  weekend: "Quick Leisure Getaway",
  "road-trip": "Unlimited Mileage AWD",
};

export function JourneyTypes({ journeys }: { journeys: JourneyType[] }) {
  const tel = telHref();
  return (
    <section aria-labelledby="journeys-heading" className="bg-gradient-to-b from-surface to-ice/40 py-24">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Tailored Road Itineraries
            </div>
            <h2 id="journeys-heading" className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              One Reservation Desk. <span className="text-brand">Every Route</span> Handled.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink-muted">
              Select your travel purpose and let our specialists ensure your car is fueled, inspected, and ready right on time.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-strong transition-colors"
          >
            <span>Request Custom Journey Itinerary</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeys.map((j) => (
            <div
              key={j.slug}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-line bg-ink min-h-[380px] sm:min-h-[420px] shadow-lg shadow-brand-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand/50"
            >
              <Image
                src={j.image}
                alt={`${j.name} trips`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="relative z-10 p-6">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {journeyTags[j.slug] || "Verified Route"}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-white">
                  {j.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80 line-clamp-2">
                  {j.blurb}
                </p>
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
                  {tel ? (
                    <a
                      href={tel}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-white transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5]" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Reserve For {j.name}</span>
                    </a>
                  ) : (
                    <Link
                      href={`/contact?journey=${j.slug}#quote`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-white transition-colors"
                    >
                      <span>Reserve For {j.name}</span>
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
