import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import claudeIcon from '../../assets/icons/claude.svg';
import { useSiteSettings } from '../../context/SiteSettings';

function ClaudeMark() {
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#F3E8DF] shadow-sm ring-1 ring-black/10">
      <img src={claudeIcon} alt="Claude" className="h-4.5 w-4.5" />
    </span>
  );
}

function TerminalLine({
  marker,
  children,
  muted = false,
}: {
  marker: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="grid grid-cols-[22px_1fr] gap-2">
      <span className="select-none text-[#C7A18D]">{marker}</span>
      <span className={muted ? 'text-white/48' : 'text-white/82'}>{children}</span>
    </div>
  );
}

function WelcomePanel({ hero }: { hero: {
  terminalProduct: string;
  terminalMeta: string;
  terminalTipTitle: string;
  terminalTip: string;
  terminalWhatsNewTitle: string;
  terminalWhatsNew: string;
} }) {
  return (
    <div className="mb-4 grid overflow-hidden rounded-2xl border border-[#E7774D]/45 bg-[#111113]/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:grid-cols-[0.92fr_1.08fr]">
      <div className="flex flex-col items-center justify-center gap-2 border-b border-[#E7774D]/30 px-4 py-4 text-center sm:border-r sm:border-b-0">
        <div className="text-[13px] font-semibold text-white">{hero.terminalProduct}</div>
        <ClaudeMark />
        <div className="text-[11px] text-white/46">{hero.terminalMeta}</div>
      </div>
      <div className="min-w-0 px-4 py-4">
        <div className="text-[12px] font-semibold text-[#FF8A5B]">{hero.terminalTipTitle}</div>
        <div className="mt-1 truncate text-[12px] text-white/82">{hero.terminalTip}</div>
        <div className="my-3 h-px bg-[#E7774D]/35" />
        <div className="text-[12px] font-semibold text-[#FF8A5B]">{hero.terminalWhatsNewTitle}</div>
        <div className="mt-1 truncate text-[12px] text-white/62">{hero.terminalWhatsNew}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { content } = useSiteSettings();
  const { hero } = content;

  return (
    <section id="top" className="relative flex flex-col items-center overflow-hidden px-4 pt-32 pb-20 text-center md:pt-36 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mx-auto mb-6 flex w-full max-w-full flex-col items-center text-balance text-[40px] leading-[1.05] font-bold tracking-tight text-apple-text sm:text-5xl md:text-[64px] lg:text-[76px]">
          <span className="block min-w-0 max-w-full">{hero.titleTop}</span>
          <span className="block min-w-0 max-w-full text-electric">{hero.titleAccent}</span>
        </h1>

        <p className="mx-auto mb-10 flex w-full max-w-2xl flex-col items-center text-balance text-xl leading-relaxed font-medium text-apple-text-muted md:text-2xl">
          <span className="block min-w-0 max-w-full">{hero.eyebrow}</span>
          <span className="block min-w-0 max-w-full">{hero.subtitle}</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#concept"
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-20 w-full max-w-5xl overflow-hidden rounded-[28px] shadow-[var(--terminal-frame-shadow)] ring-1 ring-[var(--terminal-frame-border)] md:mt-24"
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/18 via-transparent to-white/[0.02]" />

        <div className="h-[340px] w-full overflow-hidden bg-[var(--terminal-shell-bg)] text-left text-white sm:h-[360px] md:h-[390px]">
          <div className="flex h-11 items-center gap-2 border-b border-white/12 bg-[var(--terminal-title-bg)] px-4">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="mx-auto truncate pl-4 font-mono text-[11px] tracking-wide text-white/42 md:text-xs">
              {hero.terminalTitle}
            </span>
          </div>

          <div className="relative h-[calc(100%-44px)] overflow-hidden p-4 font-mono text-[12px] leading-relaxed md:p-6 md:text-[13px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(231,119,77,0.10),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(41,151,255,0.09),transparent_34%)]" />
            <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <ClaudeMark />
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold text-white">{hero.terminalProduct}</div>
                <div className="truncate text-[11px] text-white/42">{hero.terminalMeta}</div>
              </div>
              <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[11px] text-emerald-200 sm:inline-flex">
                {hero.status}
              </span>
            </div>

            <WelcomePanel hero={hero} />

            <div className="space-y-2.5">
              {hero.terminalLines.map(([marker, text], idx) => (
                <TerminalLine key={idx} marker={marker} muted={idx === 4}>
                  {text}
                </TerminalLine>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-emerald-300/15 bg-emerald-300/5 px-3 py-2.5 text-[12px] text-emerald-100">
              {hero.shipLine}
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
