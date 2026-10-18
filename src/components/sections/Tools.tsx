import { ExternalLink } from 'lucide-react';
import codexIcon from '../../assets/icons/codex.svg';
import claudeIcon from '../../assets/icons/claude.svg';
import v0Icon from '../../assets/icons/v0.svg';
import TerminalCommand from '../ui/TerminalCommand';
import { Reveal, SectionHeader } from '../ui/Section';
import { links, toolCommands } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';

function ToolHead({ icon, name, label, labelClass, iconClass = 'h-7 w-7' }: { icon: string; name: string; label: string; labelClass: string; iconClass?: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <img src={icon} alt="" className={`${iconClass} object-contain`} />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight">{name}</span>
        <span className={`mt-0.5 font-mono text-[12px] ${labelClass}`}>{label}</span>
      </div>
    </div>
  );
}

export default function Tools() {
  const { content } = useSiteSettings();
  const { tools } = content;
  const { claude, codex, v0 } = tools.cards;
  const copyTitle = content.environment.captions.copy;

  return (
    <section id="tools" className="bg-apple-gray py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={tools.eyebrow} titleTop={tools.titleTop} titleBottom={tools.titleBottom} desc={tools.desc} />

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-8 text-apple-text shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(217,119,87,0.14)] md:p-10">
              <ToolHead icon={claudeIcon} name={claude.name} label={claude.label} labelClass="text-warm" />
              <h3 className="mb-4 text-2xl font-bold tracking-tight">{claude.title}</h3>
              <p className="mb-8 text-[15px] leading-relaxed text-apple-text-muted">{claude.desc}</p>
              <TerminalCommand
                caption={claude.caption}
                command={toolCommands.claude}
                officialUrl={links.claudeCode}
                officialLabel={claude.official}
                copyTitle={copyTitle}
                accentClass="text-[#D97757]"
                className="mt-auto"
              />
            </article>
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <article className="flex h-full flex-col rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-8 text-apple-text shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-hover)] md:p-10">
              <ToolHead icon={codexIcon} name={codex.name} label={codex.label} labelClass="text-apple-text-muted" iconClass="h-full w-full" />
              <h3 className="mb-4 text-2xl font-bold tracking-tight">{codex.title}</h3>
              <p className="mb-8 text-[15px] leading-relaxed text-apple-text-muted">{codex.desc}</p>
              <TerminalCommand
                caption={codex.caption}
                command={toolCommands.codex}
                officialUrl={links.codex}
                officialLabel={codex.official}
                copyTitle={copyTitle}
                accentClass="text-[#10A37F]"
                className="mt-auto"
              />
            </article>
          </Reveal>

          <Reveal className="h-full md:col-span-2 lg:col-span-1" delay={0.16}>
            <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-black p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-10">
              <ToolHead icon={v0Icon} name={v0.name} label={v0.label} labelClass="text-white/50" iconClass="h-8 w-8" />
              <h3 className="mb-4 text-2xl font-bold tracking-tight">{v0.title}</h3>
              <p className="mb-8 text-[15px] leading-relaxed text-white/60">{v0.desc}</p>
              <a
                href={links.v0}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 active:translate-y-0"
              >
                {v0.cta} <ExternalLink className="h-3 w-3" />
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="mb-8 text-center text-[13px] font-semibold text-apple-text-muted">{tools.matrixTitle}</h3>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)]">
            <div className="hidden grid-cols-[1fr_1.6fr_1.6fr_1.1fr] gap-4 border-b border-[var(--border-subtle)] bg-apple-gray/70 px-8 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-apple-text-muted md:grid">
              {tools.matrixHead.map((head) => (
                <span key={head}>{head}</span>
              ))}
            </div>
            {tools.matrix.map(([shape, examples, bestFor, role]) => (
              <div key={shape} className="grid grid-cols-1 gap-1.5 border-b border-[var(--border-subtle)] px-6 py-5 last:border-b-0 md:grid-cols-[1fr_1.6fr_1.6fr_1.1fr] md:gap-4 md:px-8">
                <span className="text-[16px] font-bold text-apple-text">{shape}</span>
                <span className="font-mono text-[13px] text-apple-text">{examples}</span>
                <span className="text-[14px] text-apple-text-muted">{bestFor}</span>
                <span className="text-[14px] font-semibold text-electric">{role}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] font-semibold text-apple-text">{tools.matrixNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
