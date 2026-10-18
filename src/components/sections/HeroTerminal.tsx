import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useSiteSettings } from '../../context/SiteSettings';
import { EASE } from '../ui/Section';

// Claude Code v2 terminal, drawn in code. Colors follow the CLI's dark theme.
const CLAUDE = 'text-[#D97757]';
const OK_DOT = 'text-[#4EBA65]';

// Clawd, the Claude Code mascot, as it appears in the CLI header.
const mascot = [' ▐▛███▜▌', '▝▜█████▛▘', '  ▘▘ ▝▝'];

function Line({ children, delay, className = '' }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ToolCall({ name, arg, result, delay, className = '' }: { name: string; arg: string; result: ReactNode; delay: number; className?: string }) {
  return (
    <Line delay={delay} className={className}>
      <div className="flex min-w-0 gap-2">
        <span className={OK_DOT}>⏺</span>
        <span className="min-w-0 truncate">
          <span className="font-semibold text-white">{name}</span>
          <span className="text-white/70">({arg})</span>
        </span>
      </div>
      <div className="flex min-w-0 gap-2 pl-1 text-white/45">
        <span>⎿</span>
        <span className="min-w-0 truncate">{result}</span>
      </div>
    </Line>
  );
}

export default function HeroTerminal() {
  const { content } = useSiteSettings();
  const { hero } = content;
  const t = hero.terminal;
  const base = 0.55;

  return (
    <div className="h-[340px] w-full overflow-hidden bg-[var(--terminal-shell-bg)] text-left text-white sm:h-[360px] md:h-[390px]">
      <div className="flex h-11 items-center gap-2 border-b border-white/12 bg-[var(--terminal-title-bg)] px-4">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="mx-auto truncate pl-4 font-mono text-[11px] tracking-wide text-white/45 md:text-xs">
          <span className={CLAUDE}>✳</span> ai.vibecoding — claude — 120×36
        </span>
      </div>

      {/* Bottom-anchored like a live terminal: older lines scroll off the top on short screens */}
      <div className="flex h-[calc(100%-44px)] flex-col justify-end gap-1.5 px-4 py-3 font-mono text-[11.5px] leading-[1.5] sm:text-[12px] md:gap-1 md:px-6 md:py-3">
        <Line delay={base} className="mb-1 flex items-center gap-4">
          <pre className={`m-0 shrink-0 font-mono leading-[1.15] ${CLAUDE}`}>{mascot.join('\n')}</pre>
          <div className="min-w-0 leading-[1.4]">
            <div className="truncate">
              <span className="font-semibold text-white">Claude Code</span> <span className="text-white/45">v2.1</span>
            </div>
            <div className="truncate text-white/55">Opus 5.5 · Claude Max</div>
            <div className="truncate text-white/55">~/projects/ai.vibecoding</div>
          </div>
        </Line>

        <Line delay={base + 0.15} className="flex min-w-0 gap-2 rounded-sm bg-white/[0.07] px-2 py-1 text-white/90">
          <span className="text-white/50">&gt;</span>
          <span className="min-w-0 truncate">{hero.prompt}</span>
        </Line>

        <Line delay={base + 0.35}>
          <div className="flex gap-2">
            <span className={OK_DOT}>⏺</span>
            <span className="font-semibold text-white">Update Todos</span>
          </div>
          {t.todos.map((todo, idx) => {
            const done = idx < t.todos.length - 1;
            return (
              <div key={todo} className={`flex min-w-0 gap-2 pl-1 ${done ? 'text-white/45' : 'text-white/85'}`}>
                <span className={idx === 0 ? '' : 'invisible'}>⎿</span>
                <span className="shrink-0">{done ? '☒' : '☐'}</span>
                <span className={`min-w-0 truncate ${done ? 'line-through decoration-white/30' : ''}`}>{todo}</span>
              </div>
            );
          })}
        </Line>

        <ToolCall
          delay={base + 0.55}
          className="hidden md:block"
          name="Update"
          arg="src/content/site.tsx"
          result={
            <>
              Updated <span className="font-semibold text-white/80">src/content/site.tsx</span> with <span className="text-[#4EBA65]">184 additions</span> and{' '}
              <span className="text-[#E5484D]">37 removals</span>
            </>
          }
        />

        <ToolCall delay={base + 0.75} name="Bash" arg="npm run lint && npm run build" result={<span className="text-white/60">✓ built in 4.4s · 0 type errors</span>} />

        <Line delay={base + 0.95} className="mt-1 flex min-w-0 gap-2">
          <span className={CLAUDE}>✻</span>
          <span className="min-w-0 truncate">
            <span className={CLAUDE}>{t.spinner}</span> <span className="text-white/40">(38s · ↓ 2.1k tokens · esc to interrupt)</span>
          </span>
        </Line>

        <Line delay={base + 1.1}>
          <div className="flex items-center gap-2 rounded-md border border-white/25 px-2.5 py-1">
            <span className="text-white/50">&gt;</span>
            <span className="h-[1.1em] w-[0.6em] bg-white/70" />
          </div>
          <div className="mt-1 truncate px-1 text-[#AF87FF]">
            ⏵⏵ accept edits on <span className="text-white/35">(shift+tab to cycle)</span>
          </div>
        </Line>
      </div>
    </div>
  );
}
