import Image from 'next/image';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn, FadeInStaggerItem, ScaleIn, StaggerContainer } from '@/components/motions';
import { caseStudies } from '@/data/site';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected Gloud work across fintech, healthcare operations, and B2B SaaS.'
};

export default function WorkPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <FadeIn>
        <SectionHeading
          as="h1"
          eyebrow="Recent work"
          title="Examples of platform delivery, growth systems, and cloud execution"
          description="These representative stories show how Gloud combines product thinking, engineering discipline, and operational visibility to move outcomes."
        />
      </FadeIn>
      <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <FadeInStaggerItem key={study.name} className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
            <h2 className="text-2xl font-semibold text-white group-hover:text-orange-100 transition-colors">{study.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-orange-500 font-semibold">{study.sector}</p>
            <p className="mt-5 text-sm leading-7 text-slate-300">{study.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {study.results.map((result) => (
                <li key={result} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  {result}
                </li>
              ))}
            </ul>
          </FadeInStaggerItem>
        ))}
      </StaggerContainer>
      <ScaleIn delay={0.2} className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md group">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 opacity-0 transition-opacity group-hover:opacity-100" />
        <Image
          src="/illustrations/work-dashboard.png"
          alt="Analytics dashboard illustration"
          width={1600}
          height={900}
          className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
        />
      </ScaleIn>
    </div>
  );
}
