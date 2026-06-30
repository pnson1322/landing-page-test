type ProductMetricCardProps = {
  label: string;
  value: string;
};

export function ProductMetricCard({ label, value }: ProductMetricCardProps) {
  return (
    <div className="rounded-lg border border-white/16 bg-white/10 p-4 backdrop-blur">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs leading-5 text-[#d7e4e5]">{label}</p>
    </div>
  );
}
