import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import { useSiteSettings } from '../../context/SiteSettings';
import { copyToClipboard } from '../../lib/clipboard';
import { EASE, SectionHeader } from '../ui/Section';

function PromptBody({ content }: { content: string }) {
  return (
    <pre className="max-h-[460px] overflow-auto whitespace-pre-wrap rounded-[1.5rem] bg-[var(--code-bg)] p-6 text-left font-mono text-[13px] leading-relaxed text-white/80 shadow-inner selection:bg-electric selection:text-white md:p-8">
      {content}
    </pre>
  );
}

function CopyButton({ copied, onClick, copyLabel, copiedLabel, className = '' }: { copied: boolean; onClick: () => void; copyLabel: string; copiedLabel: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--button-primary-bg)] px-4 text-[13px] font-semibold text-[var(--button-primary-text)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] hover:shadow-md active:translate-y-0 ${className}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}

export default function Prompts() {
  const { content } = useSiteSettings();
  const promptsContent = content.prompts;
  const promptPlaybook = promptsContent.items;
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);
  const [copied, setCopied] = useState<number | null>(null);
  const activePrompt = promptPlaybook[active];

  const handleCopy = async (idx: number) => {
    const ok = await copyToClipboard(promptPlaybook[idx].content);
    if (!ok) return;
    setCopied(idx);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section id="prompts" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={promptsContent.eyebrow} titleTop={promptsContent.titleTop} titleBottom={promptsContent.titleBottom} desc={promptsContent.desc} />
        <p className="mx-auto mb-16 mt-4 max-w-2xl rounded-2xl bg-apple-gray px-4 py-3 text-center text-[13px] font-medium text-apple-text">{promptsContent.usage}</p>

        <div className="hidden lg:grid lg:grid-cols-[320px_1fr] gap-8 items-start">
          <div className="space-y-3">
            {promptPlaybook.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-pressed={isActive}
                  className={`group flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all duration-300 ${isActive ? 'border-electric bg-[var(--surface-card)] shadow-[0_16px_45px_rgba(0,102,255,0.10)]' : 'border-[var(--border-subtle)] bg-apple-gray/55 hover:-translate-y-0.5 hover:bg-[var(--surface-card)] hover:shadow-sm'}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${isActive ? 'bg-electric text-white' : 'bg-[var(--surface-muted)] text-apple-text shadow-sm ring-1 ring-[var(--border-subtle)] group-hover:text-electric'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] font-semibold text-apple-text-muted">{item.id} · {item.badge}</span>
                    <span className="mt-1 block text-[17px] font-bold tracking-tight text-apple-text">{item.title}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-apple-text-muted">{item.desc}</span>
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
            className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 shadow-[var(--shadow-soft)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4 px-2">
              <div>
                <div className="font-mono text-[12px] font-semibold text-electric">{activePrompt.id} · {activePrompt.badge}</div>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-apple-text">{activePrompt.title}</h3>
              </div>
              <CopyButton copied={copied === active} onClick={() => handleCopy(active)} copyLabel={promptsContent.copy} copiedLabel={promptsContent.copied} className="h-11" />
            </div>
            <PromptBody content={activePrompt.content} />
          </motion.div>
        </div>

        <div className="space-y-4 lg:hidden">
          {promptPlaybook.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === mobileOpen;
            return (
              <div key={item.id} className="overflow-hidden rounded-[1.75rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-sm">
                <button
                  type="button"
                  onClick={() => setMobileOpen(isActive ? null : idx)}
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${isActive ? 'bg-electric text-white' : 'bg-apple-gray text-apple-text'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] font-semibold text-apple-text-muted">{item.id} · {item.badge}</span>
                    <span className="mt-1 block text-[17px] font-bold text-apple-text">{item.title}</span>
                  </span>
                </button>
                {isActive ? (
                  <div className="border-t border-[var(--border-subtle)] p-4">
                    <p className="mb-4 text-[14px] leading-relaxed text-apple-text-muted">{item.desc}</p>
                    <CopyButton copied={copied === idx} onClick={() => handleCopy(idx)} copyLabel={promptsContent.copy} copiedLabel={promptsContent.copied} className="mb-4 h-10" />
                    <PromptBody content={item.content} />
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
