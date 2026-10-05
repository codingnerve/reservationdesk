import Link from "next/link";
import Image from "next/image";
import { footerColumns } from "@/data/navigation";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#cbdff7] bg-gradient-to-b from-[#eef6ff] via-[#e6f1fe] to-[#ddedfc] text-ink">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="max-w-xs">
          <Link href="/" className="inline-block" aria-label={`${site.fullName} Home`}>
            <Image
              src="/images/logo.png"
              alt={site.fullName}
              width={320}
              height={100}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform hover:scale-[1.02]"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft/80">
            {site.tagline}. Connecting travelers to verified airport and city vehicle suppliers with upfront, transparent rates.
          </p>
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-xs font-bold text-brand hover:text-brand-strong hover:underline"
            >
              {site.email}
            </a>
          )}
        </div>
        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy">
              {col.heading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={`${col.heading}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-ink-soft/75 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Independent Service Disclaimer */}
      <div className="border-t border-[#cbdff7] bg-white/70 backdrop-blur-xs py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid gap-6 text-xs text-ink-soft/70 lg:grid-cols-[280px_1fr_1fr] lg:gap-8 items-start">
            {/* Header Column */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-navy">
                  Independent Service Disclaimer
                </h3>
                <Link
                  href="/terms"
                  className="mt-1 inline-block font-semibold text-brand transition-colors hover:underline hover:text-brand-strong"
                >
                  Read full disclaimer
                </Link>
              </div>
            </div>

            {/* Paragraph Column 1 */}
            <div className="space-y-3 leading-relaxed">
              <p>
                {site.domain} is an independent car rental booking assistance provider. We are not affiliated with, authorized by, endorsed by, or sponsored by any car rental company, vehicle manufacturer, travel brand, or their respective subsidiaries or affiliates.
              </p>
              <p>
                Our services include assisting customers with car rental reservations, itinerary changes, cancellations where permitted, booking support, and general travel-related assistance. We act solely as an independent intermediary to help customers access car rental services offered by third-party providers.
              </p>
            </div>

            {/* Paragraph Column 2 */}
            <div className="space-y-3 leading-relaxed">
              <p>
                All company names, trademarks, logos, and brand names appearing on this website are the property of their respective owners and are used solely for descriptive and identification purposes.
              </p>
              <p>
                By using this website, you acknowledge that {site.domain} is an independent service provider and not the official website or customer support channel of any car rental company.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#cbdff7] bg-[#e4f0fc]/90">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            <span className="text-ink-soft/50">{site.domain}</span>
            <Link href="/about" className="hover:text-brand transition-colors">
              About Us
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-brand transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
