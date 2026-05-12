import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ZoomableImage from '../ui/ZoomableImage';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-[64px] lg:text-[76px] font-bold tracking-tight text-apple-text mb-6 leading-[1.05]">
          用自然语言，<br />
          <span className="text-electric">构建确定性的应用世界。</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-apple-text-muted max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          The art of Vibe Coding.<br className="hidden md:block"/>从基建矩阵到坚不可摧的工程交付工作流，带你掌握下一代软件的结构学。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#concept" className="flex items-center justify-center gap-2 bg-apple-text text-white px-8 py-3.5 rounded-full text-[17px] font-semibold hover:bg-black transition-colors w-full sm:w-auto shadow-md shadow-black/10">
            阅读核心理念
          </a>
          <a href="#tools" className="flex items-center justify-center gap-2 text-apple-text bg-apple-gray hover:bg-gray-200 px-8 py-3.5 rounded-full text-[17px] font-semibold transition-colors w-full sm:w-auto group">
            探索工具矩阵 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 w-full max-w-5xl rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-gray-900/5 group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none" />
        
        {/* Authentic Claude Code Terminal Mockup */}
        <div className="w-full h-full min-h-[500px] bg-[#0A0A0A] flex flex-col text-left">
          {/* Mac window controls */}
          <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-[#121212]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            <div className="mx-auto text-gray-500 text-xs font-mono font-medium tracking-wide">~/projects/ai.vibecoding (claude-code)</div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-[13px] md:text-[14px] leading-relaxed text-gray-300 flex-grow overflow-x-auto relative">
            
            {/* Claude Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded bg-[#D97757] text-white flex items-center justify-center shadow-lg border border-white/10">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.444 2.403 23.408 21.6h-3.404l-1.428-4.22h-6.223l-1.399 4.22H7.625l5.885-19.197h3.934Zm-2.355 3.332-2.124 6.81h4.218zM6.924 10.73H3.064v3.1h3.86zM6.924 15.228H.592v3.1h6.332zM6.924 6.233H1.722v3.1h5.202z"/></svg>
              </div>
              <span className="font-semibold text-white tracking-tight">Claude Code</span>
              <span className="text-gray-400 text-[11px] bg-white/10 border border-white/10 px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> agent-online</span>
            </div>
            
            <div className="mb-6 space-y-2">
              <div className="flex items-start gap-4">
                <span className="text-[#D97757] font-bold mt-0.5 select-none text-lg">❯</span>
                <span className="text-white font-medium">Refactor the Hero component to replace the placeholder image with a native CSS terminal mockup representing Claude Code.</span>
              </div>
            </div>

            {/* Thinking Block */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-5 mb-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                <span className="text-gray-300 font-semibold tracking-tight text-xs uppercase flex-1">Scanning & Operating</span>
                <span className="text-gray-500 font-mono text-[10px]">2312ms</span>
              </div>
              <div className="space-y-2.5 text-[13px]">
                <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0">❖</span><span className="text-gray-400">Reading <span className="text-gray-200">src/components/sections/Hero.tsx</span>...</span></div>
                <div className="flex gap-3 items-start"><span className="text-emerald-500 font-bold shrink-0">✓</span><span className="text-gray-400">Analyzed project structure & Tailwind dependencies.</span></div>
                <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0">❖</span><span className="text-gray-400">Writing changes to <span className="text-gray-200">Hero.tsx</span>...</span></div>
              </div>
            </div>

            {/* Diff Block */}
            <div className="border border-white/10 rounded-2xl bg-black/60 shadow-xl overflow-hidden mb-6 filter drop-shadow-2xl">
              <div className="bg-[#18181A] px-5 py-3 border-b border-white/10 flex justify-between items-center text-xs">
                <span className="text-gray-300 font-semibold tracking-wide">src/components/sections/Hero.tsx</span>
                <div className="flex gap-4 font-mono font-medium">
                  <span className="text-emerald-400">+48 lines</span>
                  <span className="text-rose-400">-3 lines</span>
                </div>
              </div>
              <div className="p-5 overflow-x-auto text-[13px] grid gap-1.5 leading-relaxed bg-[#0A0A0B]">
                <div className="text-gray-500 font-mono bg-rose-500/10 px-3 py-1 rounded -mx-2 -ml-2 -mb-2 border-l-2 border-rose-500 flex"><span className="text-rose-400 mr-4 font-bold select-none">-</span><span>&lt;ZoomableImage src="placeholder.jpg" /&gt;</span></div>
                <div className="text-gray-300 mt-2 font-mono bg-emerald-500/10 px-3 py-1 rounded -mx-2 -mt-1 border-l-2 border-emerald-500 flex"><span className="text-emerald-400 mr-4 font-bold select-none">+</span><span>&lt;div className="w-full min-h-[500px] bg-[#0A0A0A] flex flex-col"&gt;</span></div>
                <div className="text-gray-300 font-mono bg-emerald-500/10 px-3 py-1 rounded -mx-2 -mt-1 border-l-2 border-emerald-500 flex"><span className="text-emerald-400 mr-4 font-bold select-none">+</span><span>  {`{/* Mac Window Controls */}`}</span></div>
                <div className="text-gray-300 font-mono bg-emerald-500/10 px-3 py-1 rounded -mx-2 -mt-1 border-l-2 border-emerald-500 flex"><span className="text-emerald-400 mr-4 font-bold select-none">+</span><span>  &lt;TerminalMockup.Header /&gt;</span></div>
                <div className="text-gray-300 font-mono bg-emerald-500/10 px-3 py-1 rounded -mx-2 -mt-1 border-l-2 border-emerald-500 flex"><span className="text-emerald-400 mr-4 font-bold select-none">+</span><span>&lt;/div&gt;</span></div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-emerald-500 font-bold">✓</span>
              <span className="text-gray-300">Task completed successfully. Waiting for next instruction.</span>
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <span className="text-[#D97757] font-bold text-lg select-none">❯</span>
              <span className="w-2.5 h-5 bg-white/80 animate-[pulse_1s_ease-in-out_infinite]"></span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
