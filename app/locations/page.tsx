import type { Metadata } from "next";
import Image from "next/image";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rental Locations | Airport & City Hubs",
  description:
    `Explore key pickup hubs serviced through ${site.fullName}. Need another city or airport? Submit your route and our team confirms coverage.`,
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  const tel = telHref();

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 md:py-16">
        <Badge>Global & Domestic Coverage</Badge>
        <h1 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Where would you like to collect your car?
        </h1>
        <p className="mt-4 max-w-lg text-ink-muted leading-relaxed">
          These are our highest-volume airport and downtown hubs. If your trip begins elsewhere, submit an enquiry anyway — our concierge desk verifies coverage across thousands of locations.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface-raised transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ice">
                <Image
                  src={loc.image}
                  alt={`${loc.city}, ${loc.country}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-black text-ink shadow-xs backdrop-blur-xs">
                    {loc.airportCode}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1 p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-ink">{loc.city}</h2>
                  <span className="text-xs font-bold text-brand">
                    from ${loc.startingPrice}/day*
                  </span>
                </div>
                <p className="text-sm text-ink-muted">{loc.state ? `${loc.state}, ${loc.country}` : loc.country}</p>
                <div className="mt-4">
                  {tel ? (
                    <a
                      href={tel}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface-raised px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-ink shadow-xs transition-colors hover:border-brand/40 hover:bg-mint/40 hover:text-brand"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5]" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Reserve in {loc.city}</span>
                    </a>
                  ) : (
                    <Button
                      href={`/contact?pickupLocation=${encodeURIComponent(loc.city)}#quote`}
                      variant="secondary"
                      className="w-full"
                    >
                      Reserve in {loc.city}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FinalCTA />
    </>
  );
}
