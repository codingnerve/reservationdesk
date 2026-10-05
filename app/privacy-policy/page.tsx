import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | ReservationDesk",
  description: `How ${site.fullName} gathers, utilizes, and safeguards your travel enquiry details.`,
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "28 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-ink-muted">Last updated: {LAST_UPDATED}</p>

      <div className="prose-sm mt-8 max-w-none space-y-6 text-ink-soft [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink">
        <section>
          <h2>Information Collected</h2>
          <p className="mt-2 leading-relaxed">
            When you interact with {site.fullName} through our online quote forms, search tools, or direct phone channels, we collect the personal information you supply: including your full name, email address, contact phone number, travel dates, arrival and departure airports or cities, preferred vehicle category, and optional notes.
          </p>
        </section>
        <section>
          <h2>Purpose of Data Processing</h2>
          <p className="mt-2 leading-relaxed">
            We use your submitted data exclusively for the purpose of reviewing vehicle availability, generating your requested rental quote, coordinating reservation support, and liaising with the relevant vehicle supplier. We do not sell your personal data or provide it to third parties for independent marketing.
          </p>
        </section>
        <section>
          <h2>Website Analytics &amp; Cookies</h2>
          <p className="mt-2 leading-relaxed">
            Where enabled, standard aggregated analytics tools are used to measure traffic volume and page performance to enhance user experience. These metrics do not expose personal traveler identity.
          </p>
        </section>
        <section>
          <h2>Data Retention &amp; Security</h2>
          <p className="mt-2 leading-relaxed">
            Enquiry data is securely preserved only for the duration necessary to deliver your quote and fulfill any subsequent reservation assistance, in compliance with travel administration standards.
          </p>
        </section>
        <section>
          <h2>Your Privacy Rights</h2>
          <p className="mt-2 leading-relaxed">
            You maintain the right to inspect, update, or request the deletion of your personal records stored by {site.domain} at any time. Simply submit your request through our contact page or email {site.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
