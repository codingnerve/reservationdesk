import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { campaigns, getCampaign } from "@/data/campaigns";
import { CampaignLanding } from "@/components/CampaignLanding";

export const dynamicParams = false;

export function generateStaticParams() {
  return campaigns.map((c) => ({ campaign: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ campaign: string }>;
}): Promise<Metadata> {
  const { campaign: slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) return {};
  return {
    title: { absolute: campaign.metaTitle },
    description: campaign.metaDescription,
    alternates: { canonical: `/${campaign.slug}` },
    openGraph: {
      title: campaign.metaTitle,
      description: campaign.metaDescription,
    },
  };
}

export default async function CampaignPage({
  params,
}: {
  params: Promise<{ campaign: string }>;
}) {
  const { campaign: slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) notFound();
  return <CampaignLanding campaign={campaign} />;
}
