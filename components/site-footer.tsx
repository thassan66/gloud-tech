import Link from 'next/link';
import { company, navigation } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <h2 className="text-xl font-semibold text-white">{company.name}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">{company.description}</p>
          <div className="mt-4 text-sm text-slate-400">
            <div>{company.headquarters.join(' • ')}</div>
            <div>{company.email}</div>
            <div>{company.phone}</div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Navigate</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-200">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-orange-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Built for growth</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Modern UI, cloud-ready infrastructure, analytics, SEO, accessibility, and testing are included as standard.
          </p>
        </div>
      </div>
    </footer>
  );
}
