import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import codexIcon from '../../assets/icons/codex.svg';
import claudeIcon from '../../assets/icons/claude.svg';
import v0Icon from '../../assets/icons/v0.svg';
import TerminalCommand from '../ui/TerminalCommand';

const claudeInstallCommand = 'winget install Anthropic.ClaudeCode';
const claudeCodeOfficialUrl =
  'https://claude.com/product/claude-code?utm_source=google&utm_medium=paid_search_coder&utm_campaign=acq_code_us_q3&utm_term=claude%20code&gclsrc=aw.ds&gad_source=1&gad_campaignid=23253558478&gbraid=0AAAAA99jmquYOUDyoNZF4KOi6hbTqAYz2&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN3s4NMPDp7C6tivDusoCXUVs_Z072QAIEPeAHR2-uLTyYQbqu5xhBhoCu18QAvD_BwE';

export default function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">顶级生态矩阵</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-apple-text tracking-tight leading-[1.15] mb-6">
            <span className="block">不要迷信万能</span>
            <span className="block">正确的组合决定了开发上限</span>
          </h3>
          <p className="text-lg text-apple-text-muted">
            没有最好的工具，只有最匹配当前任务阶段的工具。明确它们的边界，是进阶的第一步。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          
          {/* Codex */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 shadow-sm rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img src={codexIcon} alt="Codex Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-apple-text tracking-tight">Codex</span>
                  <span className="text-[12px] font-mono text-apple-text-muted mt-0.5">OpenAI Coding Agent</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">致力于构建与交付产品的智能体</h4>
              <p className="text-apple-text-muted text-[15px] leading-relaxed mb-10">
                它不再只是自动补全，而是能围绕代码库阅读、计划、修改、验证与复盘的工程代理。真正的价值不在于写得快，而在于把交付路径拉进可审查的闭环。
              </p>
            </div>
            <a href="https://chatgpt.com/zh-Hans-CN/codex/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-white bg-apple-text hover:bg-black px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 active:scale-95 mt-auto">
              下载桌面客户端 <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Claude Code */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#FAFAFA] rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col justify-between group transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(217,119,87,0.12)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm bg-white border border-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img src={claudeIcon} alt="Claude Logo" className="w-7 h-7 object-contain" />
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
            <TerminalCommand
              caption="# 安装 Claude Code 到本地"
              command={claudeInstallCommand}
              officialUrl={claudeCodeOfficialUrl}
              officialLabel="官方安装"
              accentClass="text-[#D97757]"
              className="mt-auto group-hover:scale-[1.01]"
            />
          </motion.div>

          {/* v0 by Vercel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-black rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-800 flex flex-col justify-between group text-white transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm bg-white border border-gray-100 flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img src={v0Icon} alt="v0 Logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">v0</span>
                  <span className="text-[12px] font-mono text-gray-400 mt-0.5">AI App Builder</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">零阻力视觉界面编译器</h4>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                完美闭环的起点。跳过传统的 Figma 线框图设计阶层，用自然语言将光影、色调与页面结构直接编译为生产级的 React / Tailwind 组件。视觉驱动与逻辑解耦，是最高阶 Vibe Coding 的起手式。
              </p>
            </div>
            <a href="https://v0.dev/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-black bg-white hover:bg-gray-200 px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 active:scale-95 mt-auto">
              启动生成式 UI <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
