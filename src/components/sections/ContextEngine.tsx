import { AlertTriangle } from 'lucide-react';
import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal, SectionHeader } from '../ui/Section';

// Segment colors follow /context order: fixed overhead (gray), MCP (warm), what you curate (blue),
// messages (warm), reserved buffer (light gray), free space (empty).
const budgetColors = ['bg-apple-text/70', 'bg-apple-text/45', 'bg-warm', 'bg-electric', 'bg-electric/60', 'bg-warm/50', 'bg-apple-text/15', 'bg-transparent'];

export default function ContextEngine() {
  const { content } = useSiteSettings();
  const { contextEngine } = content;
  const { trifecta } = contextEngine;

  return (
    <section id="context-engine" className="bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={contextEngine.eyebrow} titleTop={contextEngine.titleTop} titleBottom={contextEngine.titleBottom} desc={contextEngine.desc} />

        {/* Context budget, using the categories Claude Code's /context command reports */}
        <Reveal className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-apple-gray/60 p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-[15px] font-semibold text-apple-text">{contextEngine.budgetTitle}</p>
              <code className="rounded-md bg-[var(--code-bg)] px-2 py-0.5 font-mono text-[12px] font-semibold text-white">/context</code>
            </div>
            <p className="mt-1 text-[13px] text-apple-text-muted">{contextEngine.budgetHint}</p>
            <div className="mt-5 flex h-4 overflow-hidden rounded-full ring-1 ring-[var(--border-soft)]">
              {contextEngine.budget.map((seg, idx) => (
                <div
                  key={seg.cli}
                  className={`${budgetColors[idx]} h-full ${idx < contextEngine.budget.length - 1 ? 'border-r border-[var(--page-bg)]' : ''}`}
                  style={{ width: `${seg.pct}%` }}
                  title={`${seg.cli} ${seg.pct}%`}
                />
              ))}
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {contextEngine.budget.map((seg, idx) => (
                <li key={seg.cli} className="flex items-center gap-2.5 text-[13px]">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${budgetColors[idx]} ${idx === contextEngine.budget.length - 1 ? 'ring-1 ring-[var(--border-soft)]' : ''}`} />
                  <span className="min-w-0 truncate">
                    <span className="font-mono text-[12px] text-apple-text">{seg.cli}</span>
                    <span className="ml-2 text-apple-text-muted">{seg.label}</span>
                  </span>
                  <span className="ml-auto font-mono text-[12px] text-apple-text">{seg.pct}%</span>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2 border-t border-[var(--border-subtle)] pt-5">
              {contextEngine.budgetInsights.map((insight) => (
                <li key={insight} className="flex gap-2.5 text-[14px] leading-relaxed text-apple-text">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-electric" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contextEngine.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={(idx % 3) * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-[2rem] bg-apple-gray p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-hover)] md:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--surface-card)] shadow-sm ring-1 ring-[var(--border-subtle)]">
                      <Icon className="h-6 w-6 text-electric" />
                    </div>
                    <span className="rounded-full bg-electric/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-electric">{card.badge}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-apple-text">{card.title}</h3>
                  <p className="text-[14px] leading-relaxed text-apple-text-muted">{card.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Security boundary */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-1 gap-8 rounded-[2rem] border border-danger/25 bg-danger/[0.04] p-7 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-danger">
                <AlertTriangle className="h-3.5 w-3.5" />
                {trifecta.eyebrow}
              </p>
              <h3 className="mt-3 text-[26px] font-bold tracking-tight text-apple-text">{trifecta.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-apple-text-muted">{trifecta.desc}</p>
              <p className="mt-5 text-[15px] font-semibold text-apple-text">{trifecta.fix}</p>
              <p className="mt-3 font-mono text-[11px] text-apple-text-muted">— {trifecta.source}</p>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {trifecta.items.map((item, idx) => (
                <li key={item} className="flex items-center gap-4 rounded-2xl bg-[var(--surface-card)] px-5 py-4 ring-1 ring-danger/15">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-danger/10 font-mono text-[13px] font-bold text-danger">{idx + 1}</span>
                  <span className="text-[15px] font-semibold text-apple-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
