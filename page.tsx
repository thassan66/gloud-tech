import Image from 'next/image';
import Link from 'next/link';
import { LiveOperations } from '@/components/live-operations';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { StatsGrid } from '@/components/stats-grid';
import { Testimonials } from '@/components/testimonials';
import { caseStudies, company, differentiators, services } from '@/data/site';
import { FadeIn, FadeInStaggerItem, ScaleIn, StaggerContainer } from '@/components/motions';
import { getDeliveryStats, getIrelandTime, getPakistanTime } from '@/lib/utils';
export default function HomePage() {
  const dynamicStats = getDeliveryStats();

  return (
    <>
      <section className="container-shell grid gap-16 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2 text-sm text-orange-100 backdrop-blur-md">
            Pakistan + Ireland software delivery partner
          </div>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-100 to-orange-400 sm:text-6xl">
            Build faster with a software company that ships product, cloud, and growth together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {company.name} helps ambitious teams launch modern websites, mobile apps, digital marketing systems, and cloud-ready platforms with measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-orange-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              Book a strategy call
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5 hover:border-orange-400/40 hover:text-orange-300"
            >
              Explore recent work
            </Link>
          </div>
          <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Pakistan time', value: getPakistanTime() },
              { label: 'Ireland time', value: getIrelandTime() },
              { label: 'Delivery model', value: 'Async + overlap' }
            ].map((item) => (
              <FadeInStaggerItem key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="text-sm text-slate-400">{item.label}</div>
                <div className="mt-2 text-sm font-medium text-white">{item.value}</div>
              </FadeInStaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        <ScaleIn delay={0.2} className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-orange-900/20 backdrop-blur-md relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 opacity-0 transition-opacity group-hover:opacity-100" />
            <Image
              src="/illustrations/cloud-hero.png"
              alt="Cloud infrastructure and digital delivery illustration"
              width={1200}
              height={900}
              className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <LiveOperations
            initialData={{
              pakistanTime: getPakistanTime(),
              irelandTime: getIrelandTime(),
              ...dynamicStats
            }}
          />
        </ScaleIn>
      </section>

      <FadeIn className="container-shell py-10" yOffset={40}>
        <StatsGrid
          stats={[
            { label: 'Deployments this month', value: dynamicStats.deploymentsThisMonth },
            { label: 'Active sprints', value: dynamicStats.activeSprints },
            { label: 'Monitored services', value: dynamicStats.monitoredServices },
            { label: 'Automation coverage', value: dynamicStats.automationCoverage, suffix: '%' }
          ]}
        />
      </FadeIn>

      <section className="container-shell py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title="Engineering, growth, and cloud operations in one delivery system"
            description="Every engagement is structured to reduce handoff friction: strategy, design, engineering, QA, launch, observability, and optimisation all move together."
          />
        </FadeIn>
        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <FadeInStaggerItem key={service.slug}>
              <ServiceCard {...service} />
            </FadeInStaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Gloud"
              title="Designed for distributed teams, rapid releases, and measurable business outcomes"
              description="Gloud combines European client collaboration discipline with Pakistan’s deep technical execution capacity to build a reliable and cost-effective delivery model."
            />
            <StaggerContainer className="mt-8 space-y-4">
              {differentiators.map((item) => (
                <FadeInStaggerItem key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200 backdrop-blur-sm transition-colors hover:bg-white/10">
                  {item}
                </FadeInStaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
          <ScaleIn delay={0.2} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md">
            <Image
              src="/illustrations/collaboration-map.png"
              alt="Collaboration map between Pakistan and Ireland"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </ScaleIn>
        </div>
      </section>

      <section className="container-shell py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected results"
            title="Representative delivery stories"
            description="Examples of the kinds of commercial and operational gains Gloud is built to unlock."
          />
        </FadeIn>
        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <FadeInStaggerItem key={item.name} className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="text-sm uppercase tracking-[0.2em] text-orange-500 font-semibold">{item.sector}</div>
              <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-orange-100 transition-colors">{item.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {item.results.map((result) => (
                  <li key={result} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                    {result}
                  </li>
                ))}
              </ul>
            </FadeInStaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="container-shell py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Client feedback"
            title="Trusted by teams that need momentum without compromise"
            description="Representative feedback for common engagement patterns: digital product delivery, cloud modernisation, and growth execution."
          />
        </FadeIn>
        <FadeIn className="mt-12" yOffset={40}>
          <Testimonials />
        </FadeIn>
      </section>

      <section className="container-shell pb-24 pt-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-orange-400/20 bg-orange-400/10 px-8 py-16 text-center backdrop-blur-md shadow-2xl shadow-orange-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/20 mix-blend-screen blur-[100px] pointer-events-none rounded-full" />
            <h2 className="relative z-10 text-4xl font-semibold text-white">Ready to launch with Gloud?</h2>
            <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-slate-200">
              Bring us a new build, a rebuild, a growth target, or an infrastructure challenge. We will shape the roadmap, team, and release plan with you.
            </p>
            <Link
              href="/contact"
              className="relative z-10 mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-xl"
            >
              Start your brief
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
