import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal, SectionHeader } from '../ui/Section';

export default function Concept() {
  const { content } = useSiteSettings();
  const { concept } = content;

  return (
    <section id="concept" className="bg-apple-gray py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={concept.eyebrow} titleTop={concept.titleTop} titleBottom={concept.titleAccent} />

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {concept.principles.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-7 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-hover)] md:p-8">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--button-primary-bg)] font-mono text-sm font-semibold text-[var(--button-primary-text)]">{item.id}</span>
                <h3 className="mt-6 text-[21px] font-bold leading-snug tracking-tight text-apple-text">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-apple-text-muted">{item.desc}</p>
                <div className="mt-auto pt-6">
                  <div className="rounded-2xl bg-electric/[0.07] px-4 py-3 ring-1 ring-electric/15">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-electric">{concept.practiceLabel}</p>
                    <p className="mt-1 text-[14px] font-semibold text-apple-text">{item.practice}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
