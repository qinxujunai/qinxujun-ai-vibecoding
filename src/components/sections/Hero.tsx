import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import HeroTerminal from './HeroTerminal';
import { useSiteSettings } from '../../context/SiteSettings';
import { EASE } from '../ui/Section';

export default function Hero() {
  const { content } = useSiteSettings();
  const { hero } = content;

  return (
    <section id="top" className="relative flex flex-col items-center overflow-hidden px-4 pt-24 pb-16 text-center md:pt-32 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mx-auto max-w-4xl"
      >
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-wide text-apple-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-electric" />
          {hero.eyebrow}
        </p>

        <h1 className="mx-auto mb-6 flex w-full max-w-full flex-col items-center text-balance text-[40px] leading-[1.05] font-bold tracking-tight text-apple-text sm:text-5xl md:text-[64px] lg:text-[76px]">
          <span className="block min-w-0 max-w-full">{hero.titleTop}</span>
          <span className="block min-w-0 max-w-full text-electric">{hero.titleAccent}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed font-medium text-apple-text-muted md:text-[22px]">
          {hero.subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#shift"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--button-primary-bg)] px-8 py-3.5 text-[17px] font-semibold text-[var(--button-primary-text)] shadow-md shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] hover:shadow-lg hover:shadow-black/15 active:translate-y-0 sm:w-auto"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#environment"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-apple-gray px-8 py-3.5 text-[17px] font-semibold text-apple-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-card)] hover:shadow-lg hover:shadow-black/5 active:translate-y-0 sm:w-auto"
          >
            {hero.secondaryCta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <p className="mt-6 font-mono text-[12px] text-apple-text-muted">{hero.readingMeta}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className="relative mt-16 w-full max-w-5xl overflow-hidden rounded-[28px] shadow-[var(--terminal-frame-shadow)] ring-1 ring-[var(--terminal-frame-border)] md:mt-20"
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/18 via-transparent to-white/[0.02]" />

        <HeroTerminal />
      </motion.div>
    </section>
  );
}
