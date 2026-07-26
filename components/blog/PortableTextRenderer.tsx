"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import type { PortableTextBlock } from "sanity";

// External link icon SVG
function ExternalLinkIcon() {
  return (
    <svg
      className="inline-block w-3.5 h-3.5 ml-0.5 mb-0.5 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

const portableTextComponents: PortableTextComponents = {
  // ----- BLOCK STYLES -----
  block: {
    normal: ({ children }) => (
      <p className="text-lg text-slate-600 leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-14 mb-6 pb-3 border-b-2 border-primary/20 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-slate-800 mt-8 mb-3 leading-snug">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative my-8 pl-6 pr-4 py-4 bg-primary-50 border-l-4 border-primary rounded-r-xl">
        <span className="absolute -top-3 left-4 text-4xl text-primary/30 font-serif leading-none select-none">
          &ldquo;
        </span>
        <p className="text-lg italic text-slate-700 leading-relaxed mt-2">
          {children}
        </p>
      </blockquote>
    ),
  },

  // ----- LIST TYPES -----
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-2 space-y-3 list-none">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-2 space-y-3 list-none counter-reset-list">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-600 text-lg leading-relaxed">
        <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children, index }) => (
      <li className="flex items-start gap-3 text-slate-600 text-lg leading-relaxed">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mt-0.5">
          {(index ?? 0) + 1}
        </span>
        <span className="pt-0.5">{children}</span>
      </li>
    ),
  },

  // ----- INLINE MARKS -----
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-700">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline decoration-primary decoration-2 underline-offset-2">
        {children}
      </span>
    ),
    "strike-through": ({ children }) => (
      <s className="line-through text-slate-400">{children}</s>
    ),
    code: ({ children }) => (
      <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-sm text-rose-600 border border-slate-200">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");
      const openInNewTab = value?.blank !== false && isExternal;
      return (
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className="text-primary font-medium underline underline-offset-2 decoration-primary/40 hover:decoration-primary hover:text-primary-dark transition-colors duration-150"
        >
          {children}
          {isExternal && <ExternalLinkIcon />}
        </a>
      );
    },
  },

  // ----- CUSTOM TYPES (inline images) -----
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlForImage(value)?.url();
      if (!imageUrl) return null;
      return (
        <figure className="my-10">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src={imageUrl}
              alt={value.alt || "Article image"}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextRendererProps {
  value: PortableTextBlock[];
}

export default function PortableTextRenderer({
  value,
}: PortableTextRendererProps) {
  if (!value || value.length === 0) return null;
  return (
    <div className="portable-text">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
