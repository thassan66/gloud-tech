import Image from 'next/image';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { FadeIn, FadeInStaggerItem, ScaleIn, StaggerContainer } from '@/components/motions';
import { services } from '@/data/site';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web engineering, mobile app development, digital marketing, and cloud delivery services from Gloud.'
};

export default function ServicesPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <FadeIn>
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Full-spectrum digital delivery for product, marketing, and infrastructure teams"
          description="Gloud covers the critical layers of modern execution: product strategy, UX, engineering, QA, launch operations, digital growth, and cloud resilience."
        />
      </FadeIn>
      <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <FadeInStaggerItem key={service.slug}>
            <ServiceCard {...service} />
          </FadeInStaggerItem>
        ))}
      </StaggerContainer>
      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <FadeIn className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Delivery model</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>Discovery workshops align stakeholders, scope outcomes, and prioritise releases.</p>
            <p>Design systems and engineering standards reduce inconsistency across product surfaces.</p>
            <p>Testing layers cover component behaviour, integration pathways, and end-to-end business flows.</p>
            <p>Cloud operations include observability, incident readiness, CI/CD, and cost-aware scaling.</p>
          </div>
        </FadeIn>
        <ScaleIn delay={0.2} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md">
          <Image
            src="/illustrations/service-stack.png"
            alt="Stacked service architecture illustration"
            width={1200}
            height={900}
            className="h-auto w-full"
          />
        </ScaleIn>
      </div>
    </div>
  );
}
