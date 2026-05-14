import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import claudeIcon from '../../assets/icons/claude.svg';

function ClaudeMark() {
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#F3E8DF] shadow-sm ring-1 ring-black/10">
      <img src={claudeIcon} alt="Claude" className="h-4.5 w-4.5" />
    </span>
  );
}

function TerminalLine({
  marker,
  children,
  muted = false,
}: {
  marker: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="grid grid-cols-[22px_1fr] gap-2">
      <span className="select-none text-[#C7A18D]">{marker}</span>
      <span className={muted ? 'text-white/48' : 'text-white/82'}>{children}</span>
    </div>
  );
}

const terminalSteps = [
  ['$', 'claude --model opus'],
  ['>', 'Interview the user before writing code.'],
  ['•', 'Read(README.md, AGENTS.md, package.json)'],
  ['•', 'Plan(scope, risks, tests)'],
  ['✓', 'Build passed · browser checked · ready to ship'],
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-4 pt-32 pb-20 text-center md:pt-36 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mb-6 text-5xl leading-[1.05] font-bold tracking-tight text-apple-text md:text-[64px] lg:text-[76px]">
          用自然语言，
          <br />
          <span className="text-electric">构建确定性的应用世界。</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed font-medium text-apple-text-muted md:text-2xl">
          <span className="block">The art of Vibe Coding.</span>
          <span className="block">从基建矩阵到坚不可摧的工程交付工作流，带你掌握下一代软件的结构学。</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#concept"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-apple-text px-8 py-3.5 text-[17px] font-semibold text-white shadow-md shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-black/15 active:translate-y-0 sm:w-auto"
          >
            阅读核心理念
          </a>
          <a
            href="#environment"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-apple-gray px-8 py-3.5 text-[17px] font-semibold text-apple-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-lg hover:shadow-black/5 active:translate-y-0 sm:w-auto"
          >
            搭好底层环境 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-20 w-full max-w-5xl overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-gray-900/5 md:mt-24"
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent" />

        <div className="h-[340px] w-full overflow-hidden bg-[#070707] text-left text-white sm:h-[360px] md:h-[390px]">
          <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-[#111111] px-4">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="mx-auto truncate pl-4 font-mono text-[11px] tracking-wide text-white/42 md:text-xs">
              ~/projects/ai.vibecoding - claude
            </span>
          </div>

          <div className="h-[calc(100%-44px)] overflow-hidden p-4 font-mono text-[12px] leading-relaxed md:p-6 md:text-[13px]">
            <div className="mb-4 flex items-center gap-3">
              <ClaudeMark />
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold text-white">Claude Code</div>
                <div className="truncate text-[11px] text-white/42">official CLI session · Opus 4.7 · xhigh</div>
              </div>
              <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[11px] text-emerald-200 sm:inline-flex">
                ready
              </span>
            </div>

            <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.035] p-3.5 text-white/80 md:p-4">
              <div className="text-white/52">┌───────────────────────────┐</div>
              <div>
                <span className="text-white/52">│</span>
                <span className="px-2 text-[#F3E8DF]">* Welcome to Claude Code</span>
                <span className="text-white/52">│</span>
              </div>
              <div className="text-white/52">└───────────────────────────┘</div>
            </div>

            <div className="space-y-2.5">
              {terminalSteps.map(([marker, text], idx) => (
                <TerminalLine key={idx} marker={marker} muted={idx === 4}>
                  {text}
                </TerminalLine>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-emerald-300/15 bg-emerald-300/5 px-3 py-2.5 text-[12px] text-emerald-100">
              Ship only after the plan, build, browser check, and human review all agree.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
