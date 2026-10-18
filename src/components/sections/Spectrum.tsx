import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal, SectionHeader } from '../ui/Section';

const quadrantStyle: Record<string, { card: string; tag: string }> = {
  human: { card: 'border-danger/25 bg-danger/[0.05]', tag: 'text-danger' },
  agentic: { card: 'border-electric/40 bg-electric/[0.06] shadow-[0_18px_50px_rgba(0,102,255,0.10)]', tag: 'text-electric' },
  explore: { card: 'border-[var(--border-subtle)] bg-apple-gray/70', tag: 'text-apple-text-muted' },
  vibe: { card: 'border-success/25 bg-success/[0.05]', tag: 'text-success' },
};

export default function Spectrum() {
  const { content } = useSiteSettings();
  const { spectrum } = content;

  return (
    <section id="spectrum" className="bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={spectrum.eyebrow} titleTop={spectrum.titleTop} titleBottom={spectrum.titleBottom} desc={spectrum.desc} />

        {/* 2×2: cost of error (y) × verification speed (x) */}
        <Reveal className="mt-20">
          <p className="mb-5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-text-muted">
            ↑ {spectrum.axisCost.label} <span className="mx-2 opacity-50">×</span> {spectrum.axisVerify.label} →
          </p>
          <div className="grid grid-cols-[auto_1fr] gap-3">
            <div className="hidden w-6 flex-col items-center justify-between py-6 sm:flex">
              <span className="font-mono text-[11px] font-semibold text-apple-text-muted">{spectrum.axisCost.high}</span>
              <span aria-hidden className="w-px flex-1 bg-[var(--border-soft)] my-3" />
              <span className="font-mono text-[11px] font-semibold text-apple-text-muted">{spectrum.axisCost.low}</span>
            </div>

            <div className="col-span-2 grid grid-cols-1 gap-3 sm:col-span-1 sm:grid-cols-2">
              {spectrum.quadrants.map((q) => {
                const style = quadrantStyle[q.key];
                return (
                  <article key={q.key} className={`flex flex-col rounded-[1.75rem] border p-6 md:p-7 ${style.card}`}>
                    <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.16em] ${style.tag}`}>{q.tag}</p>
                    <h3 className="mt-2 text-[22px] font-bold tracking-tight text-apple-text">{q.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-apple-text">{q.how}</p>
                    <p className="mt-auto pt-5 text-[13px] text-apple-text-muted">
                      <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">{spectrum.examplesLabel}</span>
                      {q.examples}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="col-start-2 hidden items-center justify-between px-2 sm:flex">
              <span className="font-mono text-[11px] font-semibold text-apple-text-muted">{spectrum.axisVerify.slow}</span>
              <span aria-hidden className="mx-3 h-px flex-1 bg-[var(--border-soft)]" />
              <span className="font-mono text-[11px] font-semibold text-apple-text-muted">{spectrum.axisVerify.fast}</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl">
          <p className="text-center text-[15px] font-semibold leading-relaxed text-apple-text">{spectrum.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
