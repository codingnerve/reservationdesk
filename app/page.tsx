import type { Metadata } from "next";
import { site } from "@/lib/site";
import { vehicles } from "@/data/vehicles";
import { journeyTypes } from "@/data/journey-types";
import { locations } from "@/data/locations";
import { Hero } from "@/components/sections/Hero";
import { ConciergeStats } from "@/components/sections/ConciergeStats";
import { BenefitStrip } from "@/components/sections/BenefitStrip";
import { VehicleShowcase } from "@/components/sections/VehicleShowcase";
import { JourneyTypes } from "@/components/sections/JourneyTypes";
import { WhyReservationDesk } from "@/components/sections/WhyReservationDesk";
import { ConciergeAdvantage } from "@/components/sections/ConciergeAdvantage";
import { LocationExplorer } from "@/components/sections/LocationExplorer";
import { PopularHubsDirectory } from "@/components/sections/PopularHubsDirectory";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TravelStory } from "@/components/sections/TravelStory";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: `${site.fullName} — Transparent & Upfront Car Rental Assistance`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConciergeStats />
      <BenefitStrip />
      <VehicleShowcase vehicles={vehicles} />
      <JourneyTypes journeys={journeyTypes} />
      <WhyReservationDesk />
      <ConciergeAdvantage />
      <LocationExplorer locations={locations} />
      <PopularHubsDirectory />
      <HowItWorks />
      <TravelStory />
      <CustomerReviews />
      <FinalCTA />
    </>
  );
}

