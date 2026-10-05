import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | ReservationDesk",
  description: `The terms and conditions that govern use of the ${site.fullName} service and website.`,
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "28 September 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-ink-muted">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 max-w-none space-y-6 text-ink-soft [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink">
        <section>
          <h2>Independent Service Nature</h2>
          <p className="mt-2 leading-relaxed">
            {site.fullName} ({site.domain}) acts solely as an independent car rental booking assistance provider. Submitting a quote request or contacting our assistance desk constitutes a request for travel assistance and vehicle proposals — it does not constitute a guaranteed reservation or binding contract until officially confirmed between you and the respective car rental provider.
          </p>
        </section>
        <section>
          <h2>Vehicle Fleet &amp; Pricing Accuracy</h2>
          <p className="mt-2 leading-relaxed">
            Photographs, categories, and vehicle specifications displayed on this site serve as representative examples of vehicle classes. Final vehicle models, inclusions, deposits, and rates are determined by third-party rental suppliers based on your specific location and dates, and are stated on your written proposal.
          </p>
        </section>
        <section>
          <h2>Third-Party Rental Agreements</h2>
          <p className="mt-2 leading-relaxed">
            When you decide to proceed with a proposed rental, the rental contract is executed directly with the rental operator providing the vehicle. You will be subject to their specific terms, including driver age restrictions, required security deposits, valid driver&apos;s license qualifications, and insurance coverage options.
          </p>
        </section>
        <section>
          <h2>Fair &amp; Acceptable Usage</h2>
          <p className="mt-2 leading-relaxed">
            Our search and quote forms are provided for genuine traveler inquiries. Automated scrapers, fraudulent data submissions, or unauthorized commercial exploitation of this platform are strictly prohibited.
          </p>
        </section>
        <section>
          <h2>Modifications to Terms</h2>
          <p className="mt-2 leading-relaxed">
            We reserve the right to amend these Terms of Service at any time. Continued usage of our website and services indicates your acceptance of any revisions. For inquiries regarding our terms, reach out through our contact desk.
          </p>
        </section>
      </div>
    </div>
  );
}
