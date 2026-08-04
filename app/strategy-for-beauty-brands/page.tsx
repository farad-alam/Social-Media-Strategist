import { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { industries } from "@/data/industries";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const data = industries["beauty-brands"];
  if (!data) return {};

  return {
    title: `${data.title} | Abul Hasan`,
    description: data.description,
    alternates: {
      canonical: "https://socialmediastrategist.net/blog/social-media-strategy-for-beauty-brands",
    },
  };
}

export default function Page() {
  return <IndustryPageTemplate industry={"beauty-brands"} />;
}
