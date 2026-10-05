import Image from "next/image";
import Link from "next/link";
import { travelImages } from "@/data/images";
import { Button } from "@/components/ui/Button";
import { telHref, site } from "@/lib/site";

export function TravelStory() {
  const tel = telHref();

  return (
    <section aria-labelledby="story-heading" className="hidden md:block mx-auto max-w-[1400px] px-3 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-line/80 bg-ink shadow-2xl shadow-brand-navy/10">
        <Image
          src={travelImages.story}
          alt="Luxury sedan cruising on scenic coastal highway at golden hour"
          width={1920}
          height={860}
          sizes="(min-width: 1400px) 1350px, 100vw"
          className="h-[460px] w-full object-cover object-center sm:h-[520px] lg:h-[580px]"
        />
        {/* Cinematic Multi-stop Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/75 lg:to-transparent" />

        {/* Floating Glassmorphic Concierge Story Card */}
        <div className="absolute inset-0 flex items-center p-6 sm:p-10 lg:p-14">
          <div className="max-w-xl rounded-3xl border border-white/15 bg-ink/70 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent border border-accent/30">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              THE RESERVATION DESK ADVANTAGE
            </div>

            <h2 id="story-heading" className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Your Journey, Handled With Precision.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
              From scenic coastal highway runs to multi-city executive road trips, skip the counter lines and hidden fee anxiety. We coordinate clean, inspected vehicles with clear upfront terms and 24/7 dedicated route support.
            </p>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-white/90">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Guaranteed category reservation — no downgrade surprises</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Airport flight tracking included — delayed planes won&apos;t cancel your car</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Zero hassle 48-hour free cancellation on eligible itineraries</span>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#vehicles" size="lg" className="shadow-lg shadow-brand/30">
                Explore Vehicle Fleet
              </Button>
              {tel && (
                <a
                  href={tel}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white hover:text-ink"
                >
                  <span>CALL {site.phoneDisplay || site.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
