import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import codexIcon from '../../assets/icons/codex.svg';
import claudeIcon from '../../assets/icons/claude.svg';
import v0Icon from '../../assets/icons/v0.svg';

export default function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">顶级生态矩阵</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-apple-text tracking-tight leading-[1.15] mb-6">
            不要迷信万能。<br />
            正确的组合决定了开发上限。
          </h3>
          <p className="text-lg text-apple-text-muted">
            没有最好的工具，只有最匹配当前任务阶段的工具。明确它们的边界，是进阶的第一步。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          
          {/* OpenAI Codex */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 shadow-sm rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0">
                  <img src={codexIcon} alt="Codex Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-apple-text tracking-tight">Codex</span>
                  <span className="text-[12px] font-mono text-apple-text-muted mt-0.5">OpenAI Coding Agent</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">致力于构建与交付产品的智能体</h4>
              <p className="text-apple-text-muted text-[15px] leading-relaxed mb-10">
                由 ChatGPT 提供技术支持。它不再是从原点提供自动补全的引擎，而是已经进化成为主导研发链路、以闭环交付为导向的全天候核心编程代理。
              </p>
            </div>
            <a href="https://chatgpt.com/zh-Hans-CN/codex/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-white bg-apple-text hover:bg-black px-5 py-3 rounded-full transition-transform active:scale-95 mt-auto">
              下载桌面客户端 <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Claude Code */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#FAFAFA] rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm bg-white border border-gray-100 flex-shrink-0">
                  <img src={claudeIcon} alt="Claude Logo" className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-apple-text tracking-tight">Claude Code</span>
                  <span className="text-[12px] font-mono text-[#D97757] mt-0.5">Anthropic CLI Agent</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">接管终端的自治架构师</h4>
              <p className="text-apple-text-muted text-[15px] leading-relaxed mb-8">
                抛开繁重的 UI 面板，Anthropic 官方出品的 CLI Agent 可以直接穿梭于你的本地目录之间。它极其擅长多文件时序逻辑梳理、海量 Repo 排错与执行端到端的跨组件重构。
              </p>
            </div>
            <div className="bg-[#1C1C1E] rounded-3xl p-5 mt-auto shadow-xl ring-1 ring-white/10 relative overflow-hidden">
               <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D97757]/30 to-transparent"></div>
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
              <code className="text-[13px] font-mono flex flex-col gap-1.5 overflow-x-auto leading-relaxed">
                <span className="text-gray-500"># 唤醒你的系统代理</span>
                <span className="text-white">$ claude</span>
              </code>
            </div>
          </motion.div>

          {/* v0 by Vercel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-black rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-800 flex flex-col justify-between group text-white"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm bg-white border border-gray-100 flex-shrink-0 overflow-hidden">
                  <img src={v0Icon} alt="v0 Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">v0 (by Vercel)</span>
                  <span className="text-[12px] font-mono text-gray-400 mt-0.5">Generative UI Engine</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">零阻力视觉界面编译器</h4>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                完美闭环的起点。跳过传统的 Figma 线框图设计阶层，用自然语言将光影、色调与页面结构直接编译为生产级的 React / Tailwind 组件。视觉驱动与逻辑解耦，是最高阶 Vibe Coding 的起手式。
              </p>
            </div>
            <a href="https://v0.dev/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-black bg-white hover:bg-gray-200 px-5 py-3 rounded-full transition-transform active:scale-95 mt-auto">
              启动生成式 UI <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

