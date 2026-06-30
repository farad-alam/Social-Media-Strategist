interface TimelineItem {
  step: number;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-secondary transform md:-translate-x-0.5" />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-start gap-6 md:gap-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div
              className={`flex-1 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12 md:text-left"
              }`}
            >
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Circle */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30 border-4 border-white">
                {item.step}
              </div>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
