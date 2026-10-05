import { journeyImages } from "./images";

export type JourneyType = {
  slug: "airport" | "business" | "weekend" | "road-trip";
  name: string;
  blurb: string;
  image: string;
};

export const journeyTypes: JourneyType[] = [
  {
    slug: "airport",
    name: "Airport Transfers",
    blurb: "Land, pick up your vehicle smoothly, and hit the road.",
    image: journeyImages.airport,
  },
  {
    slug: "business",
    name: "Corporate Travel",
    blurb: "Refined executive vehicles that match your business schedule.",
    image: journeyImages.business,
  },
  {
    slug: "weekend",
    name: "Weekend Escapes",
    blurb: "Quick getaways with fast confirmation and zero hassles.",
    image: journeyImages.weekend,
  },
  {
    slug: "road-trip",
    name: "Cross-Country Routes",
    blurb: "High comfort, unlimited mileage options, and generous cargo.",
    image: journeyImages["road-trip"],
  },
];
