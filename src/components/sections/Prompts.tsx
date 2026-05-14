import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import { useSiteSettings } from '../../context/SiteSettings';

function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(textarea);
  return Promise.resolve(ok);
}

function PromptBody({ content }: { content: string }) {
  return (
    <pre className="max-h-[460px] overflow-auto whitespace-pre-wrap rounded-[1.5rem] bg-[#0B0B0D] p-6 text-left font-mono text-[13px] leading-relaxed text-white/78 shadow-inner selection:bg-electric selection:text-white md:p-8">
      {content}
    </pre>
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
    await copyToClipboard(promptPlaybook[idx].content);
    setCopied(idx);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section id="prompts" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-semibold text-electric tracking-[0.3em] uppercase mb-4">{promptsContent.eyebrow}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.15]">
            <span className="block">{promptsContent.titleTop}</span>
            <span className="block">{promptsContent.titleBottom}</span>
          </h3>
          <p className="text-[16px] text-apple-text-muted leading-relaxed max-w-2xl mx-auto">
            {promptsContent.desc}
          </p>
        </div>

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
                  className={`group flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all duration-300 ${isActive ? 'border-electric bg-[var(--surface-card)] shadow-[0_16px_45px_rgba(0,102,255,0.10)]' : 'border-[var(--border-subtle)] bg-apple-gray/55 hover:-translate-y-0.5 hover:bg-[var(--surface-card)] hover:shadow-sm'}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${isActive ? 'bg-electric text-white' : 'bg-[var(--surface-muted)] text-apple-text shadow-sm ring-1 ring-gray-900/5 group-hover:text-electric'}`}>
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
            key={activePrompt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 shadow-[var(--shadow-soft)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4 px-2">
              <div>
                <div className="font-mono text-[12px] font-semibold text-electric">{activePrompt.id} · {activePrompt.badge}</div>
                <h4 className="mt-1 text-2xl font-bold tracking-tight text-apple-text">{activePrompt.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(active)}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--button-primary-bg)] px-4 text-[13px] font-semibold text-[var(--button-primary-text)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] hover:shadow-md active:translate-y-0"
              >
                {copied === active ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied === active ? promptsContent.copied : promptsContent.copy}
              </button>
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
                    <button
                      type="button"
                      onClick={() => handleCopy(idx)}
                      className="mb-4 inline-flex h-10 items-center gap-2 rounded-full bg-[var(--button-primary-bg)] px-4 text-[13px] font-semibold text-[var(--button-primary-text)]"
                    >
                      {copied === idx ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied === idx ? promptsContent.copied : promptsContent.copy}
                    </button>
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
