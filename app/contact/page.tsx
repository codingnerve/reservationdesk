import type { Metadata } from "next";
import { site, telHref, whatsappHref } from "@/lib/site";
import { QuoteForm, type QuoteDefaults } from "@/components/QuoteForm";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Get a Quote | ReservationDesk Assistance",
  description:
    `Tell us where and when you need a car — ${site.fullName} will reply with vehicle options and an itemized quote.`,
  alternates: { canonical: "/contact" },
};

const DEFAULT_KEYS = [
  "pickupLocation",
  "dropoffLocation",
  "pickupDate",
  "dropoffDate",
  "vehiclePreference",
] as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const defaults: QuoteDefaults = {};
  for (const key of DEFAULT_KEYS) {
    const value = params[key];
    if (typeof value === "string" && value) defaults[key] = value.slice(0, 200);
  }

  const tel = telHref();
  const wa = whatsappHref();

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Badge>Concierge Help Desk</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Tell us about your upcoming travel.
          </h1>
          <p className="mt-4 max-w-md text-ink-muted leading-relaxed">
            Share your preferred collection point, trip dates, and preferred vehicle size. Our team returns available models from verified suppliers with upfront rates. No obligation, no credit card required to enquire.
          </p>

          {(tel || wa || site.email) && (
            <ul className="mt-8 space-y-3.5 text-sm">
              {tel && (
                <li>
                  <a
                    href={tel}
                    className="inline-flex items-center gap-2 font-bold text-brand hover:text-brand-strong"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Direct Desk Line: {site.phoneDisplay || site.phone}</span>
                  </a>
                </li>
              )}
              {wa && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-brand hover:text-brand-strong"
                  >
                    <span>WhatsApp Concierge Chat</span>
                  </a>
                </li>
              )}
              {site.email && (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 font-bold text-brand hover:text-brand-strong"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>{site.email}</span>
                  </a>
                </li>
              )}
            </ul>
          )}

          <div className="mt-10 rounded-2xl border border-line bg-ice p-5 text-xs text-ink-muted leading-relaxed">
            <p className="font-bold text-ink text-sm mb-2">Our Service Guarantees:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Zero upfront fees or payment commitments at enquiry stage.</li>
              <li>You review full supplier terms and pricing before confirming.</li>
              <li>Dedicated customer support available 7 days a week.</li>
            </ul>
          </div>
        </div>

        <section
          id="quote"
          aria-label="Quote request form"
          className="scroll-mt-24 rounded-3xl border border-line bg-surface-raised p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-bold text-ink">Request a Car Rental Proposal</h2>
          <p className="mb-6 mt-1 text-sm text-ink-muted">
            Provide your route details and our desk reviews fleet options for you.
          </p>
          <QuoteForm defaults={defaults} source="contact-page" />
        </section>
      </div>
    </div>
  );
}
