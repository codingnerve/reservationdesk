"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { RentalLocation } from "@/data/locations";
import { site, telHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type FilterMode = "all" | "airports" | "cities" | "usa" | "international";

const QUICK_AIRPORT_CODES = ["MCO", "MIA", "JFK", "LAX", "LAS", "ORD", "DXB", "LHR"];

export function LocationExplorer({ locations }: { locations: RentalLocation[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterMode>("airports");
  const [searchQuery, setSearchQuery] = useState("");
  const tel = telHref();

  const filteredLocations = useMemo(() => {
    let result = locations;

    // Filter by category tab
    if (activeFilter === "airports") {
      result = result.filter((loc) => Boolean(loc.airportCode));
    } else if (activeFilter === "cities") {
      result = result.filter((loc) => loc.isUsa);
    } else if (activeFilter === "usa") {
      result = result.filter((loc) => loc.isUsa);
    } else if (activeFilter === "international") {
      result = result.filter((loc) => !loc.isUsa);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (loc) =>
          loc.city.toLowerCase().includes(q) ||
          loc.name.toLowerCase().includes(q) ||
          (loc.state && loc.state.toLowerCase().includes(q)) ||
          loc.airportCode.toLowerCase().includes(q) ||
          (loc.airportName && loc.airportName.toLowerCase().includes(q)) ||
          (loc.highlight && loc.highlight.toLowerCase().includes(q))
      );
    }

    return result;
  }, [locations, activeFilter, searchQuery]);

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-3 py-20 sm:px-6"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            500+ AIRPORT & CITY HUBS NATIONWIDE
          </div>
          <h2
            id="locations-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Explore Popular City & <span className="text-brand">Airport Locations</span>
          </h2>
          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Fast-track terminal collection, curbside key handover, and premier downtown desks. Guaranteed vehicle categories with active flight delay tracking.
          </p>
        </div>

        {/* Quick Phone Call Button */}
        {tel && (
          <div className="shrink-0">
            <a
              href={tel}
              onClick={() => trackEvent("call_clicked", { placement: "locations_section" })}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-raised px-4 py-2.5 text-xs sm:text-sm font-bold text-ink shadow-xs transition-colors hover:border-brand/40 hover:bg-ice hover:text-brand"
            >
              <svg className="h-4 w-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Speak with Desk: {site.phoneDisplay || site.phone}</span>
            </a>
          </div>
        )}
      </div>

      {/* ── Interactive Filter & Search Controls Bar ── */}
      <div className="mt-8 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                setActiveFilter("airports");
                setSearchQuery("");
              }}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeFilter === "airports"
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-surface-raised text-ink-soft hover:bg-ice hover:text-brand"
              }`}
            >
              ✈️ Major Airport Hubs
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("cities");
                setSearchQuery("");
              }}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeFilter === "cities"
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-surface-raised text-ink-soft hover:bg-ice hover:text-brand"
              }`}
            >
              🏙️ Popular City Desks
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("usa");
                setSearchQuery("");
              }}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeFilter === "usa"
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-surface-raised text-ink-soft hover:bg-ice hover:text-brand"
              }`}
            >
              🇺🇸 All U.S. Locations
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("international");
                setSearchQuery("");
              }}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeFilter === "international"
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-surface-raised text-ink-soft hover:bg-ice hover:text-brand"
              }`}
            >
              🌐 International
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className={`rounded-full px-3 py-2 text-xs font-bold transition-all ${
                activeFilter === "all"
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-surface-raised text-ink-soft hover:bg-ice hover:text-brand"
              }`}
            >
              Show All ({locations.length})
            </button>
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city or airport (e.g. LAX, Miami)..."
              className="w-full rounded-full border border-line bg-surface-raised py-2 pl-9 pr-8 text-xs font-medium text-ink placeholder:text-ink-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted hover:text-ink"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Airport Quick-Jump Chips */}
        <div className="mt-3 border-t border-line/70 pt-3 flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
          <span className="font-semibold text-ink-soft">Popular Airports:</span>
          {QUICK_AIRPORT_CODES.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setSearchQuery(code);
                setActiveFilter("all");
              }}
              className={`rounded-md px-2 py-0.5 font-bold transition-colors ${
                searchQuery.toUpperCase() === code
                  ? "bg-brand text-white"
                  : "bg-ice text-brand hover:bg-brand/15"
              }`}
            >
              ✈️ {code}
            </button>
          ))}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="ml-2 text-xs text-brand underline font-semibold"
            >
              Reset filter
            </button>
          )}
        </div>
      </div>

      {/* ── Locations Grid ── */}
      {filteredLocations.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredLocations.map((loc) => {
            const quoteUrl = `/contact?pickupLocation=${encodeURIComponent(loc.city)}#quote`;

            return (
              <div
                key={loc.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface-raised shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
              >
                {/* Image Container with Dynamic Gradient */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                  <Image
                    src={loc.image}
                    alt={`${loc.city} car rental`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/80 px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{loc.airportCode}</span>
                    </span>

                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-ink-soft shadow-md backdrop-blur-md">
                      {loc.terminalPickup || "Curbside Pickup"}
                    </span>
                  </div>

                  {/* Floating Price Pill */}
                  <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-ink/80 px-3 py-1.5 text-right shadow-lg backdrop-blur-md">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      Starting At
                    </span>
                    <span className="text-lg font-extrabold text-white">
                      ${loc.startingPrice}
                      <span className="text-xs font-normal text-white/80">/day*</span>
                    </span>
                  </div>

                  {/* City & State Over Image */}
                  <div className="absolute bottom-4 left-4 right-28">
                    <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-ice transition-colors">
                      {loc.city}
                    </h3>
                    <p className="text-xs font-medium text-white/80 line-clamp-1">
                      {loc.state ? `${loc.state}, ${loc.country}` : loc.country}
                    </p>
                  </div>
                </div>

                {/* Card Details & Features */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-ink-muted">
                      <span className="font-semibold text-brand">
                        {loc.airportName || `${loc.city} Airport Desk`}
                      </span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Available
                      </span>
                    </div>

                    <p className="text-xs text-ink-soft/90 leading-relaxed">
                      {loc.blurb || "Fast-track airport terminal meet and flexible downtown vehicle handover."}
                    </p>

                    {loc.popularVehicle && (
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-ice px-2.5 py-1 text-[11px] font-semibold text-brand">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14M6 12l1.5-4.5A2 2 0 019.4 6h5.2a2 2 0 011.9 1.5L18 12m-13 0h14a1 1 0 011 1v3h-2m-12 0H4v-3a1 1 0 011-1zm3 4a1.5 1.5 0 11-3 0m14 0a1.5 1.5 0 11-3 0" />
                        </svg>
                        <span>Top Pick: {loc.popularVehicle}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="mt-5 pt-4 border-t border-line/80 flex items-center justify-between gap-3">
                    <div className="text-[11px] font-medium text-ink-muted flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flight Tracked</span>
                    </div>

                    {tel ? (
                      <a
                        href={tel}
                        onClick={() => trackEvent("call_clicked", { placement: "location_card", city: loc.slug })}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-brand-strong hover:shadow-md active:scale-95"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5]" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>Reserve in {loc.city}</span>
                      </a>
                    ) : (
                      <Link
                        href={quoteUrl}
                        onClick={() => trackEvent("location_clicked", { city: loc.slug })}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-brand-strong hover:shadow-md active:scale-95"
                      >
                        <span>Reserve in {loc.city}</span>
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-line bg-surface p-12 text-center">
          <p className="text-base font-bold text-ink">No destinations found for &quot;{searchQuery}&quot;</p>
          <p className="mt-1 text-xs text-ink-muted">
            We service 500+ airport hubs worldwide. Contact our team to book any specific city.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("all");
            }}
            className="mt-4 inline-flex items-center rounded-full bg-brand px-4 py-2 text-xs font-bold text-white"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* ── Nationwide Assistance & Custom Quote Strip ── */}
      <div className="mt-12 overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-r from-ice via-surface to-mint/40 p-6 sm:p-8 shadow-md shadow-brand-navy/5">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              NATIONWIDE & INTERNATIONAL COVERAGE
            </div>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
              Don&apos;t see your specific airport or city listed?
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-muted sm:text-sm">
              Our reservation desk coordinates with leading rental suppliers across 500+ airport counters and metro branches. Call our specialists or request a fast upfront quote.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {tel && (
              <a
                href={tel}
                onClick={() => trackEvent("call_clicked", { placement: "locations_banner" })}
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand/20 transition-all hover:bg-brand-strong hover:shadow-lg active:scale-[0.98]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call {site.phoneDisplay || site.phone}</span>
              </a>
            )}

            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-raised px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink shadow-xs transition-colors hover:border-brand/40 hover:bg-ice hover:text-brand"
            >
              <span>Request Custom Hub Quote</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-5 border-t border-line/70 pt-4 text-[11px] text-ink-muted">
          *Rates shown are example starting rates. Actual prices vary based on pick-up date, vehicle availability, rental duration, and seasonal demand. All bookings are confirmed with personal customer support.
        </p>
      </div>
    </section>
  );
}
