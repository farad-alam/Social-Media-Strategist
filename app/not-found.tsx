import Link from "next/link";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-9xl font-bold text-slate-100 mb-6 drop-shadow-sm">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Oops! You've gone off script.
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          The page you are looking for doesn't exist or has been moved. But don't worry, even the best social media strategies require a pivot sometimes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Return to Homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
