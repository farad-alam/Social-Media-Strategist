import { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { industries } from "@/data/industries";

export function generateMetadata(): Metadata {
  const data = industries["saas"];
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: "https://socialmediastrategist.net/strategy-for-saas",
    },
  };
}

export default function Page() {
  return <IndustryPageTemplate industry={"saas"} />;
}
