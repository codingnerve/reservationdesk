export type Vehicle = {
  slug:
    | "suv"
    | "luxury"
    | "sedan"
    | "family"
    | "economy"
    | "compact"
    | "electric"
    | "convertible";
  name: string;
  tagline: string;
  description: string;
  image: string;
  seats?: string;
  passengers: number;
  bags: number;
  transmission: string;
  fuel: string;
  highlight: string;
  startingPrice: number;
  featured?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    slug: "suv",
    name: "Full-Size SUV",
    tagline: "Rugged space & elevated road presence.",
    description:
      "Equipped with all-wheel drive, generous passenger legroom, and cavernous cargo space — engineered for national parks, snowy corridors, or extended family holidays.",
    image: "/images/vehicles/suv.webp",
    seats: "7 seats",
    passengers: 7,
    bags: 4,
    transmission: "Automatic",
    fuel: "Fuel Efficient",
    highlight: "Road Trip Ready",
    startingPrice: 59,
    featured: true,
  },
  {
    slug: "economy",
    name: "Economy City",
    tagline: "High efficiency with effortless parking.",
    description:
      "Modern compact cars designed for agile city navigation and low fuel consumption. The ideal companion for solo travelers and quick urban appointments.",
    image: "/images/vehicles/economy.webp",
    seats: "5 seats",
    passengers: 5,
    bags: 2,
    transmission: "Automatic",
    fuel: "High MPG",
    highlight: "Smart Value",
    startingPrice: 35,
  },
  {
    slug: "sedan",
    name: "Executive Sedan",
    tagline: "Refined comfort for longer highways.",
    description:
      "Smooth ride quality, whisper-quiet cabin acoustics, and premium cruise control. Perfect for business itineraries and airport round trips.",
    image: "/images/vehicles/sedan.webp",
    seats: "5 seats",
    passengers: 5,
    bags: 3,
    transmission: "Automatic",
    fuel: "Fuel Efficient",
    highlight: "Comfort Cabin",
    startingPrice: 45,
  },
  {
    slug: "compact",
    name: "Compact Hatchback",
    tagline: "Nimble, modern & pocket-friendly.",
    description:
      "Spacious enough for a small group with luggage, yet compact enough to maneuver down narrow historic streets and tight parking facilities.",
    image: "/images/vehicles/compact.webp",
    seats: "5 seats",
    passengers: 5,
    bags: 2,
    transmission: "Automatic",
    fuel: "Fuel Efficient",
    highlight: "Great Mileage",
    startingPrice: 38,
  },
  {
    slug: "electric",
    name: "Premium EV (Electric)",
    tagline: "Instant power & zero tailpipe emissions.",
    description:
      "High-tech digital displays, instant torque, and extensive charging station integration for modern sustainable travel.",
    image: "/images/vehicles/electric.jpg",
    seats: "5 seats",
    passengers: 5,
    bags: 3,
    transmission: "Automatic",
    fuel: "100% Electric",
    highlight: "Zero Emissions",
    startingPrice: 55,
  },
  {
    slug: "luxury",
    name: "Luxury Elite",
    tagline: "Uncompromising prestige and engineering.",
    description:
      "Handcrafted leather seats, premium surround audio, and superior performance. Designed for VIP transport, weddings, and high-profile arrivals.",
    image: "/images/vehicles/luxury.webp",
    seats: "5 seats",
    passengers: 5,
    bags: 3,
    transmission: "Automatic",
    fuel: "Turbo Charged",
    highlight: "VIP Class",
    startingPrice: 95,
  },
  {
    slug: "convertible",
    name: "Cabriolet / Convertible",
    tagline: "Pure freedom under open skies.",
    description:
      "Lower the powered roof and soak in scenic coastal breezes and sunshine along Pacific Coast Highway, Miami coastlines, and mountain overlooks.",
    image: "/images/vehicles/convertible.jpg",
    seats: "4 seats",
    passengers: 4,
    bags: 2,
    transmission: "Automatic",
    fuel: "Sport Performance",
    highlight: "Open Top Thrill",
    startingPrice: 109,
  },
  {
    slug: "family",
    name: "8-Passenger Van / Minivan",
    tagline: "Maximum versatility for large groups.",
    description:
      "Dual sliding doors, tri-zone automatic climate control, and stow-and-go seating. Built to make multi-generation family travel completely seamless.",
    image: "/images/vehicles/family.webp",
    seats: "8 seats",
    passengers: 8,
    bags: 5,
    transmission: "Automatic",
    fuel: "Touring V6",
    highlight: "Maximum Space",
    startingPrice: 69,
  },
];

export function getVehicle(slug: Vehicle["slug"] | string): Vehicle {
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) return vehicles[0];
  return vehicle;
}
