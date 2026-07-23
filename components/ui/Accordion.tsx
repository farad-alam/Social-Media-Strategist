"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border transition-all duration-300 ${
            openIndex === index
              ? "border-primary/20 bg-primary-50/50 shadow-md"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
          >
            <h3
              className={`text-base font-semibold pr-4 transition-colors duration-200 ${
                openIndex === index ? "text-primary" : "text-slate-800"
              }`}
            >
              {item.question}
            </h3>
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index
                  ? "bg-primary text-white rotate-180"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            id={`accordion-panel-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            role="region"
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
