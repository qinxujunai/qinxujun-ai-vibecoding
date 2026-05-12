import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
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
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="grid grid-cols-[22px_1fr] gap-2">
      <span className="select-none text-[#C7A18D]">{marker}</span>
      <span className={muted ? 'text-white/48' : 'text-white/82'}>{children}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-4 pt-32 pb-20 text-center md:pt-40 md:pb-32">
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
          The art of Vibe Coding.
          <br className="hidden md:block" />
          从基建矩阵到坚不可摧的工程交付工作流，带你掌握下一代软件的结构学。
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#concept"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-apple-text px-8 py-3.5 text-[17px] font-semibold text-white shadow-md shadow-black/10 transition-colors hover:bg-black sm:w-auto"
          >
            阅读核心理念
          </a>
          <a
            href="#tools"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-apple-gray px-8 py-3.5 text-[17px] font-semibold text-apple-text transition-colors hover:bg-gray-200 sm:w-auto"
          >
            探索工具矩阵 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-16 w-full max-w-5xl overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-gray-900/5 md:mt-20"
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent" />

        <div className="h-[372px] w-full overflow-hidden bg-[#070707] text-left text-white sm:h-[410px] md:h-[460px]">
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
              <div className="text-white/52">╭────────────────────────────╮</div>
              <div>
                <span className="text-white/52">│</span>
                <span className="px-2 text-[#F3E8DF]">✶ Welcome to Claude Code</span>
                <span className="text-white/52">│</span>
              </div>
              <div className="text-white/52">╰────────────────────────────╯</div>
            </div>

            <div className="space-y-2.5">
              <TerminalLine marker="$">
                claude --model opus
              </TerminalLine>
              <TerminalLine marker=">">
                Refactor Hero.tsx into a compact Claude Code terminal mockup.
              </TerminalLine>
              <TerminalLine marker="⏺">
                Read(<span className="text-white">src/components/sections/Hero.tsx</span>)
              </TerminalLine>
              <TerminalLine marker="⏺">
                Edit(<span className="text-white">Hero.tsx</span>) · replace long dashboard with CLI session
              </TerminalLine>
              <TerminalLine marker="⎿" muted>
                Permission required · update one file · no external image assets
              </TerminalLine>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/35">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[11px] text-white/48">
                <span>src/components/sections/Hero.tsx</span>
                <span className="text-emerald-300">review diff</span>
              </div>
              <div className="space-y-1 p-3 text-[11px] md:text-[12px]">
                <div className="rounded bg-rose-400/10 px-2 py-1 text-rose-200">- oversized dashboard-style mockup</div>
                <div className="rounded bg-emerald-400/10 px-2 py-1 text-emerald-100">+ short terminal transcript, tool calls, approval line</div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-white/50">
              <span>?</span>
              <span>Approve edits?</span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-white/76">Yes</span>
              <span className="rounded bg-white/5 px-2 py-0.5">No</span>
              <span className="h-4 w-2 animate-pulse bg-white/70" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
