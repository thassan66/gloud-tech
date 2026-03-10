import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn, ScaleIn } from '@/components/motions';
import { company } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Gloud to discuss web, mobile, cloud, or digital marketing work.'
};

export default function ContactPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Tell us what you want to launch, improve, or scale"
            description="Share your current challenge, timeline, and goals. Gloud will respond with the right next step, from scoping and roadmap planning to execution."
          />
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-sm leading-8 text-slate-300 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-orange-400/30">
            <p className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">@</span> {company.email}</p>
            <p className="mt-3 flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">#</span> {company.phone}</p>
            <p className="mt-3 flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">↗</span> {company.headquarters.join(' • ')}</p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-slate-400">Typical project areas include product websites, mobile apps, marketing execution, platform rebuilds, and cloud modernisation.</p>
            </div>
          </div>
        </FadeIn>
        <ScaleIn delay={0.2}>
          <ContactForm />
        </ScaleIn>
      </div>
    </div>
  );
}
