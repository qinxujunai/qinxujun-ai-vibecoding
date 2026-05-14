import { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';

type TerminalCommandProps = {
  caption: string;
  command: string;
  officialUrl?: string;
  officialLabel?: string;
  copyTitle?: string;
  accentClass?: string;
  className?: string;
};

function copyToClipboard(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(textarea);

  if (copied) {
    return Promise.resolve(true);
  }

  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }

  return Promise.resolve(false);
}

export default function TerminalCommand({
  caption,
  command,
  officialUrl,
  officialLabel = '官方安装',
  copyTitle = '复制命令',
  accentClass = 'text-electric',
  className = '',
}: TerminalCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className={`group/terminal rounded-3xl bg-[#1C1C1E] p-5 text-left shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 ${className}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>
        {officialUrl ? (
          <a
            href={officialUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold transition-colors hover:bg-white/10 ${accentClass}`}
          >
            {officialLabel}
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : null}
      </div>

      <div className="mb-2 font-mono text-[12px] text-white/38">{caption}</div>
      <button
        type="button"
        onClick={handleCopy}
        className="flex w-full items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5 text-left ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/35"
        title={copyTitle}
        aria-label={copyTitle}
      >
        <span className="shrink-0 font-mono text-[13px] text-white/55">$</span>
        <span className="command-scroll min-w-0 flex-1 overflow-x-auto whitespace-nowrap py-0.5 font-mono text-[13px] font-semibold text-white">
          {command}
        </span>
        <span className={`shrink-0 transition-transform duration-300 group-hover/terminal:scale-110 ${accentClass}`}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </span>
      </button>
    </div>
  );
}
