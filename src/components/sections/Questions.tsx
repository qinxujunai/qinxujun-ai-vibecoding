import { ArrowRight } from 'lucide-react';
import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal, SectionHeader } from '../ui/Section';

export default function Questions() {
  const { content } = useSiteSettings();
  const { questions } = content;

  return (
    <section id="questions" className="bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={questions.eyebrow} titleTop={questions.titleTop} titleBottom={questions.titleBottom} desc={questions.desc} />

        <Reveal className="mt-20">
          <div className="hidden grid-cols-[1fr_40px_1.35fr] gap-4 px-6 pb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] md:grid">
            <span className="text-apple-text-muted">{questions.lowLabel}</span>
            <span />
            <span className="text-electric">{questions.highLabel}</span>
          </div>
          <ol className="space-y-3">
            {questions.items.map((item) => (
              <li
                key={item.low}
                className="group grid grid-cols-1 gap-3 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 transition-all duration-300 hover:border-electric/40 hover:shadow-[var(--shadow-hover)] md:grid-cols-[1fr_40px_1.35fr] md:items-center md:gap-4 md:p-6"
              >
                <p className="text-[15px] text-apple-text-muted line-through decoration-[var(--border-soft)]">{item.low}</p>
                <ArrowRight aria-hidden className="hidden h-5 w-5 text-apple-text-muted transition-colors duration-300 group-hover:text-electric md:block" />
                <div>
                  <p className="text-[17px] font-bold leading-snug tracking-tight text-apple-text md:text-[18px]">{item.high}</p>
                  <p className="mt-1.5 text-[13px] text-electric">{item.why}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
