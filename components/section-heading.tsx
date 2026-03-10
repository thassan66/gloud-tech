'use client';

import type { ElementType } from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = 'h2'
}: {
  eyebrow: string;
  title: string;
  description: string;
  as?: ElementType;
}) {
  const MotionHeading = motion(Heading);

  return (
    <div className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500"
      >
        {eyebrow}
      </motion.p>
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-100 to-orange-400 sm:text-4xl"
      >
        {title}
      </MotionHeading>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg leading-8 text-slate-300"
      >
        {description}
      </motion.p>
    </div>
  );
}
