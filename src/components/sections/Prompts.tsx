import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ChevronDown, Copy } from 'lucide-react';
import type { PromptItem } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';
import { copyToClipboard } from '../../lib/clipboard';
import { EASE, SectionHeader } from '../ui/Section';

function CopyButton({ copied, onClick, copyLabel, copiedLabel, className = '' }: { copied: boolean; onClick: () => void; copyLabel: string; copiedLabel: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-[var(--button-primary-bg)] px-4 text-[13px] font-semibold text-[var(--button-primary-text)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] hover:shadow-md active:translate-y-0 ${className}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}

function PromptMeta({ item, sourcesLabel, whenLabel }: { item: PromptItem; sourcesLabel: string; whenLabel: string }) {
  return (
    <div className="space-y-3">
      <p className="text-[14px] leading-relaxed text-apple-text">
        <span className="mr-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-apple-text-muted">{whenLabel}</span>
        {item.when}
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-apple-text-muted">{sourcesLabel}</span>
        {item.sources.map((source) => (
          <span key={source} className="rounded-full bg-electric/10 px-2.5 py-0.5 text-[12px] font-semibold text-electric">
            {source}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Prompts() {
  const { content } = useSiteSettings();
  const promptsContent = content.prompts;
  const promptPlaybook = promptsContent.items;
  const [active, setActive] = useState(1);
  const [mobileOpen, setMobileOpen] = useState<number | null>(1);
  const [mobileFull, setMobileFull] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const activePrompt = promptPlaybook[active];

  const handleCopy = async (idx: number) => {
    const ok = await copyToClipboard(promptPlaybook[idx].content);
    if (!ok) return;
    setCopied(idx);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const toggleMobile = (idx: number) => {
    setMobileOpen(mobileOpen === idx ? null : idx);
    setMobileFull(false);
  };

  return (
    <section id="prompts" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={promptsContent.eyebrow} titleTop={promptsContent.titleTop} titleBottom={promptsContent.titleBottom} desc={promptsContent.desc} />
        <p className="mx-auto mb-14 mt-6 w-fit max-w-full rounded-2xl bg-apple-gray px-4 py-2 text-center font-mono text-[12px] font-medium text-apple-text">{promptsContent.usage}</p>

        {/* Desktop: list + reader */}
        <div className="hidden items-start gap-8 lg:grid lg:grid-cols-[320px_1fr]">
          <div className="space-y-2.5">
            {promptPlaybook.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-pressed={isActive}
                  className={`group flex w-full items-center gap-4 rounded-3xl border p-3.5 text-left transition-all duration-300 ${isActive ? 'border-electric bg-[var(--surface-card)] shadow-[0_16px_45px_rgba(0,102,255,0.10)]' : 'border-[var(--border-subtle)] bg-apple-gray/55 hover:-translate-y-0.5 hover:bg-[var(--surface-card)] hover:shadow-sm'}`}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-colors ${isActive ? 'bg-electric text-white' : 'bg-[var(--surface-muted)] text-apple-text shadow-sm ring-1 ring-[var(--border-subtle)] group-hover:text-electric'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] font-semibold text-apple-text-muted">{item.id} · {item.badge}</span>
                    <span className="mt-0.5 block text-[16px] font-bold tracking-tight text-apple-text">{item.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-apple-text-muted">{item.desc}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activePrompt.id + content.meta.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="mb-5 flex items-start justify-between gap-4 px-1">
              <div>
                <div className="font-mono text-[12px] font-semibold text-electric">{activePrompt.id} · {activePrompt.badge}</div>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-apple-text">{activePrompt.title}</h3>
              </div>
              <CopyButton copied={copied === active} onClick={() => handleCopy(active)} copyLabel={promptsContent.copy} copiedLabel={promptsContent.copied} className="h-11" />
            </div>
            <div className="mb-5 rounded-2xl bg-apple-gray/70 px-4 py-3.5">
              <PromptMeta item={activePrompt} sourcesLabel={promptsContent.sourcesLabel} whenLabel={promptsContent.whenLabel} />
            </div>
            <pre tabIndex={0} className="max-h-[520px] overflow-auto whitespace-pre-wrap rounded-[1.5rem] bg-[var(--code-bg)] p-6 font-mono text-[13px] leading-relaxed text-white/80 selection:bg-electric selection:text-white md:p-8">
              {activePrompt.content}
            </pre>
          </motion.div>
        </div>

        {/* Mobile and tablet: accordion with a full-length, non-nested reader */}
        <div className="space-y-3 lg:hidden">
          {promptPlaybook.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = idx === mobileOpen;
            return (
              <div key={item.id} className={`overflow-hidden rounded-[1.75rem] border bg-[var(--surface-card)] transition-colors duration-300 ${isOpen ? 'border-electric/50 shadow-[var(--shadow-soft)]' : 'border-[var(--border-subtle)]'}`}>
                <button type="button" onClick={() => toggleMobile(idx)} aria-expanded={isOpen} className="flex w-full items-center gap-4 p-4 text-left">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${isOpen ? 'bg-electric text-white' : 'bg-apple-gray text-apple-text'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] font-semibold text-apple-text-muted">{item.id} · {item.badge}</span>
                    <span className="mt-0.5 block text-[17px] font-bold text-apple-text">{item.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-apple-text-muted">{item.desc}</span>
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-apple-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen ? (
                  <div className="border-t border-[var(--border-subtle)] p-4">
                    <PromptMeta item={item} sourcesLabel={promptsContent.sourcesLabel} whenLabel={promptsContent.whenLabel} />
                    <CopyButton copied={copied === idx} onClick={() => handleCopy(idx)} copyLabel={promptsContent.copy} copiedLabel={promptsContent.copied} className="mt-4 w-full justify-center" />
                    <div className="relative mt-4">
                      <pre className={`overflow-hidden whitespace-pre-wrap rounded-[1.25rem] bg-[var(--code-bg)] p-5 font-mono text-[12.5px] leading-relaxed text-white/80 ${mobileFull ? '' : 'max-h-[300px]'}`}>
                        {item.content}
                      </pre>
                      {mobileFull ? null : <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-[1.25rem] bg-gradient-to-t from-[var(--code-bg)] to-transparent" />}
                    </div>
                    <button
                      type="button"
                      onClick={() => setMobileFull(!mobileFull)}
                      className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-apple-gray py-2.5 text-[13px] font-semibold text-apple-text"
                    >
                      {mobileFull ? promptsContent.collapse : promptsContent.expand}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileFull ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
