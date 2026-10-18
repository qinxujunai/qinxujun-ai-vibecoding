import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { links, sectionOrder } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal } from '../ui/Section';

// Persona router: three reading routes through the same chapters.
export default function Paths() {
  const { content } = useSiteSettings();
  const { paths, nav } = content;

  return (
    <section id="start" aria-labelledby="paths-title" className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 text-center">
          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-electric">{paths.eyebrow}</p>
          <h2 id="paths-title" className="text-[28px] font-bold tracking-tight text-apple-text md:text-4xl">{paths.title}</h2>
          <p className="mt-3 text-[16px] text-apple-text-muted">{paths.desc}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {paths.items.map((item, idx) => (
            <Reveal key={item.who} delay={idx * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-7 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-hover)]">
                <h3 className="text-[21px] font-bold tracking-tight text-apple-text">{item.who}</h3>
                <p className="mt-1 text-[14px] text-apple-text-muted">{item.goal}</p>

                <ol className="mt-6 space-y-1.5">
                  {item.route.map((id, step) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="group flex items-center gap-3 rounded-xl bg-apple-gray/70 px-3 py-2.5 transition-colors duration-300 hover:bg-electric/10"
                      >
                        <span className="w-6 font-mono text-[12px] font-semibold text-apple-text-muted group-hover:text-electric">
                          {String(sectionOrder.indexOf(id) + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[15px] font-semibold text-apple-text group-hover:text-electric">{nav.labels[id]}</span>
                        <span className="ml-auto font-mono text-[11px] text-apple-text-muted">{step + 1}/{item.route.length}</span>
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-6">
                  <div className="rounded-2xl bg-electric/[0.07] px-4 py-3 ring-1 ring-electric/15">
                    <p className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-electric">
                      <ArrowRight className="h-3 w-3" />
                      {paths.actionLabel}
                    </p>
                    <p className="mt-1 text-[14px] font-semibold leading-relaxed text-apple-text">{item.action}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-3xl">
          <p className="flex flex-col items-center gap-3 text-center text-[14px] leading-relaxed text-apple-text-muted sm:flex-row sm:justify-center sm:text-left">
            <span>{paths.deeper}</span>
            <a
              href={links.easyVibe}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-apple-gray px-3.5 py-1.5 text-[13px] font-semibold text-apple-text transition-colors duration-300 hover:text-electric"
            >
              {paths.deeperCta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
