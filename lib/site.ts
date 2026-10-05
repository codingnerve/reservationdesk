/**
 * Central site configuration for ReservationDesk Car Rental.
 */
export const site = {
  name: "ReservationDesk",
  fullName: "ReservationDesk Car Rental",
  domain: "reservationdesk-carrental.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://reservationdesk-carrental.com",
  tagline: "Dedicated Car Rental Concierge & Assistance",
  topbarTagline:
    process.env.NEXT_PUBLIC_TOPBAR_TAGLINE ??
    "24/7 Car Rental Assistance & Upfront Reservation Support",
  description:
    "ReservationDesk helps travelers compare and secure reliable car rentals across major airport and city hubs with dedicated concierge support and zero upfront friction.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+18886735008",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(888) 673-5008",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "support@reservationdesk-carrental.com",
} as const;

export function telHref(): string | null {
  return site.phone ? `tel:${site.phone}` : null;
}

export function whatsappHref(): string | null {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;
}
