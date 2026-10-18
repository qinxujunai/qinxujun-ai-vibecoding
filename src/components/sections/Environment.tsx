import { useState } from 'react';
import TerminalCommand from '../ui/TerminalCommand';
import { Reveal, SectionHeader } from '../ui/Section';
import { envCommands, type OsKey } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';

function detectOs(): OsKey {
  if (typeof navigator === 'undefined') return 'mac';
  return /Win/i.test(navigator.userAgent) ? 'win' : 'mac';
}

export default function Environment() {
  const { content } = useSiteSettings();
  const { environment } = content;
  const [os, setOs] = useState<OsKey>(detectOs);
  const osKeys: OsKey[] = ['mac', 'win'];

  return (
    <section id="environment" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={environment.eyebrow} titleTop={environment.titleTop} titleBottom={environment.titleBottom} desc={environment.desc} />

        <Reveal className="mt-10 flex justify-center">
          <div role="tablist" aria-label="OS" className="inline-flex rounded-full bg-apple-gray p-1 ring-1 ring-[var(--border-subtle)]">
            {osKeys.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={os === key}
                onClick={() => setOs(key)}
                className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300 ${os === key ? 'bg-[var(--surface-card)] text-apple-text shadow-sm' : 'text-apple-text-muted hover:text-apple-text'}`}
              >
                {environment.osLabels[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {environment.cards.map((card, idx) => {
            const Icon = card.icon;
            const cmd = envCommands[card.key];
            return (
              <Reveal key={card.key} delay={idx * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-[2rem] bg-apple-gray p-7 md:p-8">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--surface-card)] shadow-sm ring-1 ring-[var(--border-subtle)]">
                    <Icon className={`h-7 w-7 ${card.accentClass}`} />
                  </div>
                  <p className="font-mono text-[12px] font-semibold text-apple-text-muted">0{idx + 1}</p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-apple-text">{card.title}</h3>
                  <p className="mb-6 mt-3 text-[14px] leading-relaxed text-apple-text-muted">{card.desc}</p>
                  <TerminalCommand
                    caption={os === 'win' ? 'PowerShell' : environment.captions.install}
                    command={cmd[os]}
                    officialUrl={cmd.url}
                    officialLabel={card.officialLabel}
                    copyTitle={environment.captions.copy}
                    accentClass={card.accentClass}
                    className="mt-auto w-full"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
        {os === 'mac' ? <p className="mt-4 text-center text-[12px] text-apple-text-muted">{environment.macNote}</p> : null}

        <Reveal className="mt-20">
          <h3 className="mb-8 text-center text-[13px] font-semibold text-apple-text-muted">{environment.firstHourTitle}</h3>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {environment.firstHour.map((step, idx) => (
              <li key={step.code} className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-electric text-[12px] font-bold text-white">{idx + 1}</span>
                  <code className="truncate rounded-lg bg-[var(--code-bg)] px-2.5 py-1 font-mono text-[12px] font-semibold text-white">{step.code}</code>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-apple-text-muted">{step.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
