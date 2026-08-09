interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function StatCounter({
  end,
  suffix = "",
  prefix = "",
  label,
}: StatCounterProps) {
  return (
    <div className="text-center group">
      <div className="text-3xl md:text-4xl font-bold font-sans gradient-text mb-2">
        {prefix}
        {end.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
