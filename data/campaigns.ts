import { heroImages } from "./images";
import type { Vehicle } from "./vehicles";

export type Campaign = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  vehicleSlugs: (Vehicle["slug"] | string)[];
  benefits: { title: string; text: string }[];
  faqSlice: [number, number];
};

export const campaigns: Campaign[] = [
  {
    slug: "car-rental",
    eyebrow: "Concierge rental service",
    h1: "Find the Perfect Car for Your Next Journey",
    metaTitle: "Car Rental Assistance & Enquiries | ReservationDesk",
    metaDescription:
      "Skip comparison fatigue. Tell ReservationDesk your dates and route, and receive personalized vehicle options and an upfront quote.",
    heroImage: heroImages["car-rental"],
    intro:
      "One quick enquiry connects you to vetted rental vehicle suppliers with concrete choices tailored to your dates.",
    vehicleSlugs: ["economy", "compact", "sedan", "suv", "family", "luxury"],
    benefits: [
      {
        title: "All Categories Covered",
        text: "From agile city runabouts to executive sedans and 8-seat minivans.",
      },
      {
        title: "Zero Account Hassle",
        text: "Submit your request in seconds without sign-up forms or passwords.",
      },
      {
        title: "Dedicated Human Assistance",
        text: "A real specialist checks availability and returns tailored quotes.",
      },
    ],
    faqSlice: [0, 4],
  },
  {
    slug: "airport-car-rental",
    eyebrow: "Airport arrivals & transfers",
    h1: "Airport Car Rental Made Effortless",
    metaTitle: "Airport Car Rental Enquiries | ReservationDesk",
    metaDescription:
      "Flying into a major hub? Let ReservationDesk arrange your airport rental car with terminal-coordinated pickup.",
    heroImage: heroImages["airport-car-rental"],
    intro:
      "Tell us your arrival airport and flight times. We will organize vehicle options so you can collect keys and leave without desk delays.",
    vehicleSlugs: ["economy", "sedan", "suv", "family"],
    benefits: [
      {
        title: "Flight-Synced Pickup",
        text: "Share your arrival schedule and we plan collection windows accordingly.",
      },
      {
        title: "Flexible Trip Lengths",
        text: "Single day business stops or multi-week road journeys.",
      },
      {
        title: "Clear Collection Steps",
        text: "Know terminal counters and shuttle instructions before takeoff.",
      },
    ],
    faqSlice: [0, 4],
  },
  {
    slug: "suv-rental",
    eyebrow: "Space, power & comfort",
    h1: "Premium SUV Rentals Built for Distance",
    metaTitle: "SUV Rental Assistance | ReservationDesk",
    metaDescription:
      "Need generous luggage space and high seating? Request an SUV rental with ReservationDesk for family trips and rugged adventures.",
    heroImage: heroImages["suv-rental"],
    intro:
      "5 to 7 seats, high ground clearance, and all-weather capability to handle motorways, mountain passes, and theme park trips.",
    vehicleSlugs: ["suv", "family"],
    benefits: [
      {
        title: "Room for Everyone",
        text: "Generous legroom and trunk capacity for all your luggage and gear.",
      },
      {
        title: "All-Terrain Confidence",
        text: "Modern safety suites and AWD capabilities for open highway stability.",
      },
      {
        title: "Tailored to Your Route",
        text: "Tell us where you are driving and we recommend the best size class.",
      },
    ],
    faqSlice: [2, 6],
  },
  {
    slug: "luxury-car-rental",
    eyebrow: "VIP & prestige fleet",
    h1: "Luxury Car Rental for Notable Occasions",
    metaTitle: "Luxury Car Rental Concierge | ReservationDesk",
    metaDescription:
      "Executive transport, celebrations, and prestige escapes. Request a luxury rental car through ReservationDesk.",
    heroImage: heroImages["luxury-car-rental"],
    intro:
      "Elevate your arrival with luxury German engineering, leather cabins, and high-performance power.",
    vehicleSlugs: ["luxury", "sedan"],
    benefits: [
      {
        title: "Occasion Matched",
        text: "Proposals tailored to weddings, client meetings, or VIP getaways.",
      },
      {
        title: "Discreet & Swift",
        text: "Upfront pricing with direct concierge attention from enquiry to return.",
      },
      {
        title: "Specific Model Requests",
        text: "Let us know your preferred model or class and we source matching units.",
      },
    ],
    faqSlice: [2, 6],
  },
  {
    slug: "monthly-car-rental",
    eyebrow: "Extended stays & flexible periods",
    h1: "Long-Term & Monthly Car Rental Flexibility",
    metaTitle: "Monthly Car Rental Assistance | ReservationDesk",
    metaDescription:
      "Relocating, working remotely, or spending seasonal months away? Secure monthly car rentals with ReservationDesk.",
    heroImage: heroImages["monthly-car-rental"],
    intro:
      "Keep yourself mobile for 30, 60, or 90+ days without the overhead of ownership, long leases, or complex insurance commitments.",
    vehicleSlugs: ["economy", "sedan", "suv"],
    benefits: [
      {
        title: "Flexible Terms",
        text: "Rent by month with easy extensions as your travel plans change.",
      },
      {
        title: "Single Upfront Price",
        text: "All-in quotes covering your complete period without rolling surprises.",
      },
      {
        title: "Vehicle Swap Options",
        text: "Adjust models mid-stay if your group size or driving needs shift.",
      },
    ],
    faqSlice: [0, 4],
  },
];

export function getCampaign(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}
