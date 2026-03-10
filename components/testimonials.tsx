import { testimonials } from '@/data/site';

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item) => (
        <figure key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <blockquote className="text-base leading-8 text-slate-200">“{item.quote}”</blockquote>
          <figcaption className="mt-5 border-t border-white/10 pt-5">
            <div className="font-semibold text-white">{item.name}</div>
            <div className="text-sm text-slate-400">{item.role}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
