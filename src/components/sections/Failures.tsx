import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal, SectionHeader } from '../ui/Section';

export default function Failures() {
  const { content } = useSiteSettings();
  const { failures } = content;

  return (
    <section id="failures" className="bg-apple-gray py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={failures.eyebrow} titleTop={failures.titleTop} titleBottom={failures.titleBottom} desc={failures.desc} />

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {failures.items.map((item, idx) => (
            <Reveal key={item.title} delay={(idx % 4) * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-[1.75rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-semibold text-apple-text-muted">{String(idx + 1).padStart(2, '0')}</span>
                  {item.official ? (
                    <span className="rounded-full bg-electric/10 px-2 py-0.5 text-[11px] font-semibold text-electric">{failures.officialLabel} · Anthropic</span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-[18px] font-bold leading-snug tracking-tight text-apple-text">{item.title}</h3>
                <div className="mt-4 border-l-2 border-danger/40 pl-3">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-danger">{failures.symptomLabel}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-apple-text-muted">{item.symptom}</p>
                </div>
                <div className="mt-4 border-l-2 border-success/50 pl-3">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-success">{failures.fixLabel}</p>
                  <p className="mt-1 text-[14px] font-semibold leading-relaxed text-apple-text">{item.fix}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
