import { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { industries } from "@/data/industries";

export function generateMetadata(): Metadata {
  const data = industries["startups"];
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: "https://socialmediastrategist.net/strategy-for-startups",
    },
  };
}

export default function Page() {
  return <IndustryPageTemplate industry={"startups"} />;
}
