import { ArrowUpRight } from 'lucide-react';
import { sectionOrder } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal } from '../ui/Section';

// Curated, cross-checked primary sources. Each item says why it is worth reading
// and which chapter of this page it backs.
export default function Reading() {
  const { content } = useSiteSettings();
  const { reading, nav } = content;

  return (
    <section id="reading" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-electric">{reading.eyebrow}</p>
          <h2 className="text-[32px] font-bold leading-[1.12] tracking-tight text-apple-text md:text-5xl">{reading.title}</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-apple-text-muted">{reading.desc}</p>
        </Reveal>

        <div className="mt-16 space-y-14">
          {reading.groups.map((group, groupIdx) => (
            <Reveal key={group.title}>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
                <h3 className="flex items-baseline gap-3 text-[19px] font-bold tracking-tight text-apple-text lg:flex-col lg:gap-1">
                  <span className="font-mono text-[12px] font-semibold text-apple-text-muted">{String(groupIdx + 1).padStart(2, '0')}</span>
                  {group.title}
                </h3>
                <ul className={`grid grid-cols-1 gap-3 ${groupIdx === 0 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {group.items.map((item) => {
                    const chapter = sectionOrder.indexOf(item.backs) + 1;
                    return (
                      <li key={item.url}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`group flex h-full flex-col rounded-[1.5rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/40 hover:shadow-[var(--shadow-hover)] ${groupIdx === 0 ? 'border-[var(--border-soft)] bg-[var(--surface-card)] shadow-[var(--shadow-soft)]' : 'border-[var(--border-subtle)] bg-apple-gray/50'}`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="rounded-full bg-electric/10 px-2 py-0.5 text-[11px] font-semibold text-electric">{item.type}</span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-apple-text-muted transition-colors duration-300 group-hover:text-electric" />
                          </div>
                          <p className="mt-3 text-[16px] font-bold leading-snug tracking-tight text-apple-text">{item.title}</p>
                          <p className="mt-1 font-mono text-[11px] text-apple-text-muted">{item.by}</p>
                          <p className="mt-3 text-[14px] leading-relaxed text-apple-text-muted">{item.why}</p>
                          <p className="mt-auto pt-4 font-mono text-[11px] text-apple-text-muted">
                            {reading.backsLabel} → <span className="font-semibold text-apple-text">{String(chapter).padStart(2, '0')} {nav.labels[item.backs]}</span>
                          </p>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-2 border-t border-[var(--border-subtle)] pt-8">
          <span className="mr-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-text-muted">{reading.standardsLabel}</span>
          {reading.standards.map((standard) => (
            <a
              key={standard.url}
              href={standard.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] px-3 py-1.5 text-[13px] font-semibold text-apple-text transition-colors duration-300 hover:border-electric/40 hover:text-electric"
            >
              {standard.label}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
