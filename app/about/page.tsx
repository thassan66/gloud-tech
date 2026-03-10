import Image from 'next/image';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn, FadeInStaggerItem, ScaleIn, StaggerContainer } from '@/components/motions';
import { company, faqs } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how Gloud works across Pakistan and Ireland to deliver software, cloud, and growth outcomes.'
};

export default function AboutPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <FadeIn>
          <SectionHeading
            as="h1"
            eyebrow="About Gloud"
            title="A modern delivery company built for distributed execution"
            description={`${company.name} operates from Pakistan and Ireland, helping clients move from fragmented vendors and slow release cycles to one clear operating model.`}
          />
          <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2">
            <FadeInStaggerItem className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
              <div className="text-sm text-slate-400">Headquarters</div>
              <div className="mt-2 font-medium text-white">{company.headquarters.join(' • ')}</div>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
              <div className="text-sm text-slate-400">Founded</div>
              <div className="mt-2 font-medium text-white">{company.founded}</div>
            </FadeInStaggerItem>
          </StaggerContainer>
        </FadeIn>
        <ScaleIn delay={0.2} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 opacity-0 transition-opacity group-hover:opacity-100" />
          <Image
            src="/illustrations/team-network.png"
            alt="Gloud team network illustration"
            width={1200}
            height={900}
            className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
          />
        </ScaleIn>
      </div>

      <StaggerContainer className="mt-16 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: 'Product-led delivery',
            description: 'Roadmaps connect user needs, engineering feasibility, and commercial impact.'
          },
          {
            title: 'Quality engineered in',
            description: 'UI, integration, and end-to-end testing reduce regressions before release windows.'
          },
          {
            title: 'Growth beyond launch',
            description: 'Analytics, SEO, conversion optimisation, and campaign readiness continue after go-live.'
          }
        ].map((item) => (
          <FadeInStaggerItem key={item.title} className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-orange-500/10 ring-1 ring-orange-400/20" />
            <h2 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
          </FadeInStaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl" yOffset={40}>
        <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition-colors hover:bg-slate-900/80 hover:border-orange-400/30">
              <summary className="cursor-pointer list-none text-base font-medium text-white flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-orange-500 transition-transform duration-300 group-open:rotate-180">↓</span>
              </summary>
              <div className="mt-4 text-sm leading-7 text-slate-300 opacity-0 group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2 group-open:duration-300 group-open:opacity-100">{faq.answer}</div>
            </details>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
