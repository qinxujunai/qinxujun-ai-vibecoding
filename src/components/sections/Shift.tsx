import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal, SectionHeader } from '../ui/Section';

export default function Shift() {
  const { content } = useSiteSettings();
  const { shift } = content;
  const lastIndex = shift.timeline.length - 1;

  return (
    <section id="shift" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={shift.eyebrow} titleTop={shift.titleTop} titleBottom={shift.titleBottom} desc={shift.desc} />

        {/* Timeline: who does what, year by year */}
        <Reveal className="mt-20">
          <h3 className="mb-8 text-center text-[13px] font-semibold text-apple-text-muted">{shift.timelineTitle}</h3>
          <ol className="relative grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-0 lg:before:absolute lg:before:inset-x-0 lg:before:top-[11px] lg:before:h-px lg:before:bg-[var(--border-soft)] lg:before:content-['']">
            {shift.timeline.map((item, idx) => {
              const isNow = idx === lastIndex;
              return (
                <li key={item.year + item.title} className="relative rounded-2xl border border-[var(--border-subtle)] bg-apple-gray/60 p-4 sm:p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:pr-5">
                  <span
                    aria-hidden
                    className={`relative z-10 mb-5 hidden h-[23px] w-[23px] place-items-center rounded-full border lg:grid ${isNow ? 'border-electric bg-electric' : 'border-[var(--border-soft)] bg-[var(--page-bg)]'}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isNow ? 'bg-white' : 'bg-apple-text-muted'}`} />
                  </span>
                  <p className={`font-mono text-[12px] font-semibold ${isNow ? 'text-electric' : 'text-apple-text-muted'}`}>{item.year}</p>
                  <p className="mt-1 text-[17px] font-bold tracking-tight text-apple-text">{item.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-apple-text-muted">{item.desc}</p>
                  <p className={`mt-3 inline-block rounded-full px-2.5 py-1 text-[12px] font-semibold ${isNow ? 'bg-electric/10 text-electric' : 'bg-[var(--surface-card)] text-apple-text ring-1 ring-[var(--border-subtle)]'}`}>{item.role}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>

        {/* Before / now comparison */}
        <Reveal className="mx-auto mt-24 max-w-4xl">
          <h3 className="mb-8 text-center text-[13px] font-semibold text-apple-text-muted">{shift.compareTitle}</h3>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-[var(--shadow-soft)]">
            <div className="grid grid-cols-[minmax(84px,0.8fr)_1fr_1.4fr] border-b border-[var(--border-subtle)] bg-apple-gray/70 px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-apple-text-muted md:px-8">
              <span>{shift.compareHead[0]}</span>
              <span>{shift.compareHead[1]}</span>
              <span className="text-electric">{shift.compareHead[2]}</span>
            </div>
            {shift.compare.map(([dimension, before, after]) => (
              <div key={dimension} className="grid grid-cols-[minmax(84px,0.8fr)_1fr_1.4fr] items-baseline gap-x-3 border-b border-[var(--border-subtle)] px-5 py-4 last:border-b-0 md:px-8 md:py-5">
                <span className="text-[13px] font-semibold text-apple-text-muted">{dimension}</span>
                <span className="text-[14px] text-apple-text-muted line-through decoration-[var(--border-soft)] md:text-[15px]">{before}</span>
                <span className="text-[14px] font-semibold text-apple-text md:text-[15px]">{after}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
