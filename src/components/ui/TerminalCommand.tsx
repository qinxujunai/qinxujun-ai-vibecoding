import { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { copyToClipboard } from '../../lib/clipboard';

type TerminalCommandProps = {
  caption: string;
  command: string;
  copyTitle: string;
  officialUrl?: string;
  officialLabel?: string;
  accentClass?: string;
  className?: string;
};

export default function TerminalCommand({
  caption,
  command,
  copyTitle,
  officialUrl,
  officialLabel,
  accentClass = 'text-electric',
  className = '',
}: TerminalCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(command);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  // The card is always dark: the theme blue would be too dark on it in light mode, so use the bright blue.
  const accent = accentClass === 'text-electric' ? 'text-[#2997FF]' : accentClass;

  return (
    <div className={`group/terminal rounded-[1.25rem] bg-[#1C1C1E] p-4 text-left shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 ${className}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[12px] text-white/60">{caption}</span>
        {officialUrl && officialLabel ? (
          <a
            href={officialUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold transition-colors hover:bg-white/10 ${accent}`}
          >
            {officialLabel}
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : null}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="flex w-full items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5 text-left ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
        title={copyTitle}
        aria-label={`${copyTitle}: ${command}`}
      >
        <span className="shrink-0 self-start py-0.5 font-mono text-[13px] text-white/55">$</span>
        <span className="min-w-0 flex-1 [overflow-wrap:anywhere] py-0.5 font-mono text-[13px] font-semibold leading-relaxed text-white">
          {command}
        </span>
        <span className={`shrink-0 self-start pt-1 transition-transform duration-300 group-hover/terminal:scale-110 ${accent}`}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </span>
      </button>
    </div>
  );
}
