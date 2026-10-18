import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// One-time, low-amplitude entrance used by every section.
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  titleTop: string;
  titleBottom?: string;
  desc?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
};

export function SectionHeader({ eyebrow, titleTop, titleBottom, desc, align = 'center', className = '' }: SectionHeaderProps) {
  const centered = align === 'center';
  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-electric">{eyebrow}</p>
      <h2 className="text-balance text-[32px] font-bold leading-[1.12] tracking-tight text-apple-text md:text-5xl">
        <span className="block">{titleTop}</span>
        {titleBottom ? <span className="block text-apple-text-muted">{titleBottom}</span> : null}
      </h2>
      {desc ? (
        <p className={`mt-6 text-pretty text-[17px] leading-relaxed text-apple-text-muted md:text-lg ${centered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>{desc}</p>
      ) : null}
    </Reveal>
  );
}
