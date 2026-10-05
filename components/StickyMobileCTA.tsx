"use client";

import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCTA() {
  const tel = telHref();

  return (
    <aside
      aria-label="Quick booking actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface-raised/95 p-3 shadow-lg backdrop-blur md:hidden"
    >
      <div className="flex gap-2.5">
        {tel && (
          <a
            href={tel}
            onClick={() => trackEvent("call_clicked", { placement: "sticky_mobile" })}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-surface-raised py-3 text-xs font-bold uppercase tracking-wider text-ink shadow-xs transition-colors hover:bg-ice"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand fill-none stroke-current stroke-[2.2]" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call {site.phoneDisplay || "Us"}</span>
          </a>
        )}
        <Link
          href="/contact#quote"
          className="flex flex-1 items-center justify-center rounded-xl bg-brand py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm shadow-brand/30 transition-colors hover:bg-brand-strong"
        >
          Get a Quote
        </Link>
      </div>
    </aside>
  );
}
