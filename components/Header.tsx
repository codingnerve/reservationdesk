"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { site, telHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

function Wordmark() {
  return (
    <Link href="/" className="flex shrink-0 items-center py-1" aria-label={`${site.fullName} Home`}>
      <Image
        src="/images/logo.png"
        alt={site.fullName}
        width={320}
        height={100}
        priority
        className="h-10 sm:h-12 md:h-14 lg:h-15 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
      />
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const tel = telHref();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    const toggle = toggleRef.current;
    const focusables = () =>
      menu
        ? Array.from(
            menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
          )
        : [];
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = [toggle, ...focusables()].filter(
        (el): el is HTMLElement => el != null,
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled || menuOpen
          ? "border-line bg-surface-raised/95 backdrop-blur shadow-sm"
          : "border-line/70 bg-surface-raised"
      }`}
    >
      {/* Topbar: Tagline, Email, Phone */}
      <div className="border-b border-white/10 bg-brand-navy text-white/90">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-3 py-1.5 sm:px-6 sm:py-2">
          {/* Mobile view: single clean line with status badge and un-wrapped phone pill */}
          <div className="flex w-full items-center justify-between sm:hidden">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-tight text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Rental Desk
            </span>

            {tel && (
              <a
                href={tel}
                onClick={() => trackEvent("call_clicked", { placement: "topbar_mobile" })}
                className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-xs font-black text-white shadow-xs whitespace-nowrap active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 shrink-0 fill-none stroke-current stroke-[2.5]"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="tracking-tight">{site.phoneDisplay || site.phone}</span>
              </a>
            )}
          </div>

          {/* Desktop view: full tagline, email and phone pill */}
          <div className="hidden sm:flex sm:w-full sm:items-center sm:justify-between sm:gap-4">
            <p className="text-xs font-semibold tracking-tight text-white/90 sm:text-[13px]">
              {site.topbarTagline}
            </p>
            <div className="flex shrink-0 items-center gap-3 text-xs sm:text-[13px]">
              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-white/80 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              )}
              {site.email && (site.phoneDisplay || tel) && (
                <span className="select-none text-white/30" aria-hidden="true">
                  |
                </span>
              )}
              {(site.phoneDisplay || tel) && (
                <a
                  href={tel || `tel:${site.phone}`}
                  onClick={() => trackEvent("call_clicked", { placement: "topbar" })}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1 text-xs font-extrabold text-white transition-colors hover:bg-brand-strong whitespace-nowrap shadow-xs active:scale-95"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 shrink-0 text-white fill-none stroke-current stroke-[2.5]"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{site.phoneDisplay || site.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-18 sm:h-20 md:h-[84px] max-w-[1400px] items-center justify-between gap-3 px-3 sm:px-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-ice hover:text-brand-strong ${
                pathname === link.href ? "bg-ice text-brand-strong" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {tel && (
            <a
              href={tel}
              onClick={() => trackEvent("call_clicked", { placement: "header" })}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-raised px-4 py-2 text-sm font-bold text-ink shadow-xs transition-colors hover:border-brand/40 hover:bg-ice"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{site.phoneDisplay || "Call desk"}</span>
            </a>
          )}
          <Button href="/contact#quote">Get a Quote</Button>
        </div>

        {/* Mobile Right Action Group: Fast Quote Pill + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact#quote"
            className="inline-flex items-center rounded-full bg-brand px-3 py-1.5 text-xs font-extrabold text-white shadow-xs transition-colors hover:bg-brand-strong"
          >
            Quote
          </Link>
          <button
            type="button"
            ref={toggleRef}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink hover:bg-ice"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="absolute inset-x-0 top-full h-[calc(100dvh-100%)] overflow-y-auto border-t border-line bg-surface shadow-2xl md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3.5 text-lg font-semibold ${
                  pathname === link.href ? "bg-ice text-brand-strong" : "text-ink hover:bg-ice"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2.5 border-t border-line pt-4">
              {tel && (
                <Button
                  href={tel}
                  variant="secondary"
                  size="lg"
                  onClick={() => trackEvent("call_clicked", { placement: "mobile_menu" })}
                >
                  Call {site.phoneDisplay || "us"}
                </Button>
              )}
              <Button href="/contact#quote" size="lg" onClick={() => setMenuOpen(false)}>
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
