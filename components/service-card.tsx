import { CloudCog, Megaphone, MonitorCog, Smartphone } from 'lucide-react';

const icons = {
  MonitorCog,
  Smartphone,
  Megaphone,
  CloudCog
};

export function ServiceCard({
  title,
  summary,
  bullets,
  icon
}: {
  title: string;
  summary: string;
  bullets: readonly string[];
  icon: keyof typeof icons;
}) {
  const Icon = icons[icon];

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 ring-1 ring-orange-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{summary}</p>
      <ul className="mt-5 space-y-3 text-sm text-slate-200">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
