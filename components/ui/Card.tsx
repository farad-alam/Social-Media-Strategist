import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "default" | "glass" | "bordered" | "dark";
}

const variantStyles = {
  default:
    "bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl",
  glass:
    "glass hover:shadow-xl",
  bordered:
    "bg-white border-2 border-slate-200 hover:border-primary hover:shadow-lg",
  dark:
    "bg-slate-800 border border-slate-700 hover:border-slate-600 text-white",
};

export default function Card({
  title,
  description,
  icon,
  href,
  className = "",
  variant = "default",
}: CardProps) {
  const content = (
    <div
      className={`rounded-2xl p-6 md:p-8 transition-all duration-300 hover-lift group ${variantStyles[variant]} ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}
      <h3
        className={`text-lg font-bold mb-2 ${
          variant === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          variant === "dark" ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {description}
      </p>
      {href && (
        <div className="mt-4 flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all duration-200">
          <span>Learn more</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
