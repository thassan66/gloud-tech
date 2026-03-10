import { formatNumber } from '@/lib/utils';

export function StatsGrid({
  stats
}: {
  stats: Array<{ label: string; value: number | string; suffix?: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-3xl font-semibold text-white">
            {typeof stat.value === 'number' ? formatNumber(stat.value) : stat.value}
            {stat.suffix ?? ''}
          </div>
          <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
