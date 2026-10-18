import { ArrowUpRight } from 'lucide-react';
import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal } from '../ui/Section';

export default function Sources() {
  const { content } = useSiteSettings();
  const { sources } = content;

  return (
    <section id="sources" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-apple-text-muted">{sources.eyebrow}</p>
              <h2 className="text-2xl font-bold tracking-tight text-apple-text">{sources.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-apple-text-muted">{sources.desc}</p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {sources.items.map((item) => (
                <li key={item.url} className="border-b border-[var(--border-subtle)]">
                  <a href={item.url} target="_blank" rel="noreferrer" className="group flex items-start gap-3 py-3.5">
                    <span className="min-w-0 flex-1">
                      <span className="block text-[14px] font-medium leading-snug text-apple-text transition-colors duration-300 group-hover:text-electric">{item.label}</span>
                      <span className="mt-0.5 block font-mono text-[11px] text-apple-text-muted">{item.meta}</span>
                    </span>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-apple-text-muted transition-colors duration-300 group-hover:text-electric" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
