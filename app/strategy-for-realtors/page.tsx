import { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { industries } from "@/data/industries";

export function generateMetadata(): Metadata {
  const data = industries["realtors"];
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: "https://socialmediastrategist.net/strategy-for-realtors",
    },
  };
}

export default function Page() {
  return <IndustryPageTemplate industry={"realtors"} />;
}
