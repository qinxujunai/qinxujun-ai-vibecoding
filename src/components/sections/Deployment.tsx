import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import netlifyIcon from '../../assets/icons/netlify.svg';
import cloudflareIcon from '../../assets/icons/cloudflare.svg';
import vercelIcon from '../../assets/icons/vercel.svg';
import { links } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal, SectionHeader } from '../ui/Section';

const platforms = [
  { icon: netlifyIcon, url: links.netlify, iconClass: 'h-7 w-7', tagClass: 'text-[#00A396]' },
  { icon: cloudflareIcon, url: links.cloudflare, iconClass: 'h-8 w-8', tagClass: 'text-[#F38020]' },
  { icon: vercelIcon, url: links.vercel, iconClass: 'h-6 w-6', tagClass: 'text-apple-text-muted' },
];

export default function Deployment() {
  const { content } = useSiteSettings();
  const { deployment } = content;

  return (
    <section id="deployment" className="bg-apple-gray py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={deployment.eyebrow} titleTop={deployment.titleTop} titleBottom={deployment.titleBottom} desc={deployment.desc} />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr]">
          {/* The checklist is the point; platforms are interchangeable */}
          <Reveal className="h-full">
            <div className="h-full rounded-[2rem] bg-[var(--surface-inverse)] p-7 text-[var(--surface-inverse-text)] md:p-9">
              <h3 className="text-[21px] font-bold tracking-tight">{deployment.checklistTitle}</h3>
              <ol className="mt-6 space-y-4">
                {deployment.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <div className="h-full rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-3">
              <p className="px-4 pb-1 pt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-text-muted">{deployment.platformsTitle}</p>
              <ul>
                {deployment.cards.map((card, idx) => {
                  const platform = platforms[idx];
                  return (
                    <li key={card.name}>
                      <a href={platform.url} target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-[1.25rem] p-4 transition-colors duration-300 hover:bg-apple-gray">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                          <img src={platform.icon} alt="" className={`${platform.iconClass} object-contain`} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-baseline gap-2">
                            <span className="text-[16px] font-bold text-apple-text">{card.name}</span>
                            <span className={`text-[11px] font-bold uppercase tracking-wider ${platform.tagClass}`}>{card.tag}</span>
                          </span>
                          <span className="mt-1 block text-[13px] leading-relaxed text-apple-text-muted">{card.desc}</span>
                        </span>
                        <ArrowUpRight aria-label={card.cta} className="mt-1 h-4 w-4 shrink-0 text-apple-text-muted transition-colors duration-300 group-hover:text-electric" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
