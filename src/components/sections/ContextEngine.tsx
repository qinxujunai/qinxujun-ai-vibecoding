import { motion } from 'motion/react';
import { Database, ShieldCheck, Code2 } from 'lucide-react';

export default function ContextEngine() {
  return (
    <section id="context-engine" className="py-24 md:py-32 bg-white border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[11px] font-semibold text-electric tracking-[0.3em] uppercase mb-4">外脑与上下文 (Context Engine)</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight leading-[1.15] mb-6">
            脱离了物理信息的注入，<br />
            再强的模型也只是个语法纠错机。
          </h3>
          <p className="text-lg text-apple-text-muted">
            大语言模型本身没有物理状态与项目记忆。你必须通过严谨的开放协议与防护层架构，将其正确接入物理世界，为它的推理引擎构建坚不可摧的“外脑”。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MCP */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-apple-gray flex flex-col group relative overflow-hidden"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 ring-1 ring-gray-900/5 group-hover:scale-105 transition-transform duration-300">
              <Database className="w-7 h-7 text-electric" />
            </div>
            <h4 className="text-xl font-bold mb-3 tracking-tight">MCP 协议</h4>
            <div className="text-[11px] font-mono text-electric mb-4 px-2 py-1 bg-electric/10 w-fit rounded">Model Context Protocol</div>
            <p className="text-[14px] text-apple-text-muted leading-relaxed">
              Anthropic 领衔发起的开源数据桥接标准。它打破了模型生成域与系统存储域的隔离。借助 MCP，Claude 能以高度结构化的方式安全读写你的 PostgreSQL 数据库、Slack 通讯记录甚至内部 API。这是真正解锁企业与工业级 Agent 环境的革命性数据总线。
            </p>
          </motion.div>

          {/* Rules & Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-[2rem] bg-apple-gray flex flex-col group relative overflow-hidden"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 ring-1 ring-gray-900/5 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-7 h-7 text-apple-text" />
            </div>
            <h4 className="text-xl font-bold mb-3 tracking-tight">领域 Know-How 与高定技能</h4>
            <div className="text-[11px] font-mono text-gray-500 mb-4 flex gap-2 w-fit">
              <span className="px-2 py-1 bg-gray-200/60 rounded border border-gray-300/50">AGENTS.md</span>
              <span className="px-2 py-1 bg-gray-200/60 rounded border border-gray-300/50">/skills</span>
            </div>
            <p className="text-[14px] text-apple-text-muted leading-relaxed">
              真正的商业壁垒不在于前端组件，而在于你沉淀的行业深度。将业务流程、安全底线以及特定架构的最佳实践，硬编码到自定义工作流（Skills）与全局指令表（AGENTS.md）中，让模型完全按照你构建的高级上下文运作。
            </p>
          </motion.div>

          {/* Autonomous Agents */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2rem] bg-apple-gray flex flex-col group relative overflow-hidden"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 ring-1 ring-gray-900/5 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-7 h-7 text-[#FF5F56]" />
            </div>
            <h4 className="text-xl font-bold mb-3 tracking-tight">自主架构环境</h4>
            <div className="text-[11px] font-mono text-[#FF5F56] flex gap-2 mb-4">
               <span className="px-2 py-1 bg-[#FF5F56]/10 rounded border border-[#FF5F56]/20">OpenHands</span>
               <span className="px-2 py-1 bg-[#FF5F56]/10 rounded border border-[#FF5F56]/20">SWE-bench</span>
            </div>
            <p className="text-[14px] text-apple-text-muted leading-relaxed">
              底层基建正在从 Copilot (辅助编码) 演进为 Agent (任务接管)。以 Devin 或开源 OpenHands (前 OpenDevin) 为代表的云端沙盒环境配合顶级评测基准 (SWE-bench / Harness)，让模型具备独立思考、操作 Shell 循环并自行编写测试的完备闭环能力。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
