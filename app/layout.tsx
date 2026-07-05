import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://socialmediastrategist.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Abul Hasan — Social Media Strategist",
    default:
      "Abul Hasan | Social Media Strategist for Hire — 13+ Yrs, 300+ Client",
  },
  description:
    "Abul Hasan is a social media strategist with 13+ years and 300+ clients served. Get a custom strategy built for measurable business growth.",
  keywords: [
    "Social Media Strategist",
    "Social Media Strategy",
    "Social Media Consultant",
    "Social Media Expert",
    "Social Media Marketing Strategist",
    "Digital Marketing Strategist",
    "Content Strategist",
    "Social Media Strategy Consultant",
    "Social Media Marketing Consultant",
    "Social Media Planning",
    "Abul Hasan",
  ],
  authors: [{ name: "Abul Hasan", url: siteUrl }],
  creator: "Abul Hasan",
  publisher: "Abul Hasan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abul Hasan | Social Media Strategist",
    title:
      "Social Media Strategy That Actually Grows Your Business | Abul Hasan",
    description:
      "Expert social media strategy services by Abul Hasan — 13+ years experience, 300+ clients served. Custom strategies for brand growth, lead generation & ROI.",
    images: [
      {
        url: "/og/default-og.png",
        width: 1200,
        height: 630,
        alt: "Abul Hasan — Social Media Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media Strategy That Actually Grows Your Business | Abul Hasan",
    description:
      "Expert social media strategy services by Abul Hasan — 13+ years experience, 300+ clients served.",
    images: ["/og/default-og.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization + WebSite JSON-LD (global)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abul Hasan | Social Media Strategist",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description:
      "Expert social media strategy services helping brands grow their online presence, generate leads, and improve ROI.",
    founder: {
      "@type": "Person",
      name: "Abul Hasan",
      jobTitle: "Social Media Strategist",
      url: siteUrl,
    },
    sameAs: [
      "https://www.linkedin.com/in/abulhasan",
      "https://www.upwork.com/freelancers/abulhasan",
    ],
    areaServed: "Worldwide",
    award: "BASIS Outsourcing Award 2021",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abul Hasan | Social Media Strategist",
    url: siteUrl,
    description:
      "Expert social media strategy services by Abul Hasan. Custom strategies for brand growth, lead generation, and ROI.",
    publisher: {
      "@type": "Person",
      name: "Abul Hasan",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
