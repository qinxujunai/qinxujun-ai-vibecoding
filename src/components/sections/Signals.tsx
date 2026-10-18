import { ArrowUpRight } from 'lucide-react';
import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal } from '../ui/Section';

export default function Signals() {
  const { content } = useSiteSettings();
  const { signals } = content;

  return (
    <section aria-label={signals.label} className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-apple-text-muted">{signals.label}</p>
          <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px' }}>
            {signals.items.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col bg-[var(--surface-card)] p-6 transition-colors duration-300 hover:bg-apple-gray md:p-7"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[34px] font-bold leading-none tracking-tight text-apple-text md:text-[40px]">{item.value}</span>
                  {item.unit ? <span className="text-[15px] font-semibold text-apple-text-muted">{item.unit}</span> : null}
                </div>
                <p className="mt-4 text-[15px] font-semibold leading-snug text-apple-text">{item.label}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-apple-text-muted">{item.note}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 font-mono text-[11px] font-semibold text-electric">
                  {item.source}
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
