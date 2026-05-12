import { motion } from 'motion/react';
import { Terminal, GitBranch, Server } from 'lucide-react';

export default function Environment() {
  return (
    <section id="environment" className="py-24 md:py-32 bg-white border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">前置基建 (Prerequisites)</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.15]">
            没有正确配置底层环境，<br />
            AI 只是个打字机。
          </h3>
          <p className="text-lg text-apple-text-muted max-w-2xl mx-auto">
            大模型、Codex、Claude Code 都依赖于你主机的计算环境。在要求它们为你构建现代 Web 应用前，必须完成这三大底层基础设施的搭建与授权。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-apple-gray flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              <Server className="w-8 h-8 text-electric" />
            </div>
            <h4 className="text-xl font-bold mb-3">Node.js 运行时</h4>
            <p className="text-[14px] text-apple-text-muted mb-6 leading-relaxed">
              现代前端框架（React/Vite）的物理引擎。你必须在本地安装 Node.js (≥ 20.x 版本)，以提供核心模块解析和 npm 包管理器能力。
            </p>
            <div className="mt-auto bg-black rounded-lg p-3 w-full text-left">
              <code className="text-xs font-mono text-gray-300"><span className="text-[#3b82f6]">$</span> node -v<br/><span className="text-[#22c55e]">v20.10.0</span></code>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-[2rem] bg-apple-gray flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              <GitBranch className="w-8 h-8 text-[#FF5F56]" />
            </div>
            <h4 className="text-xl font-bold mb-3">Git 版本控制</h4>
            <p className="text-[14px] text-apple-text-muted mb-6 leading-relaxed">
              AI 编程中最重要的“撤销胶囊”。在让大模型批量重构代码前，必须建立 Git 检查点，这是防止上下文污染无法挽回的底线原则。
            </p>
            <div className="mt-auto bg-black rounded-lg p-3 w-full text-left">
              <code className="text-xs font-mono text-gray-300"><span className="text-[#3b82f6]">$</span> git checkout -b feature<br/><span className="text-[#22c55e]">Switched to a new branch</span></code>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2rem] bg-apple-text flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">终端基础 (Terminal)</h4>
            <p className="text-[14px] text-gray-300 mb-6 leading-relaxed">
              它是唤醒 Claude Code 等 CLI 的入口。对于 macOS：按 <code className="bg-white/20 px-1 rounded">Cmd + 空格</code> 搜索「终端」；对于 Windows：按 <code className="bg-white/20 px-1 rounded">Win</code> 键搜索「PowerShell」。
            </p>
            <div className="mt-auto bg-black/50 border border-white/10 rounded-lg p-3 w-full text-left">
              <code className="text-xs font-mono text-gray-300"><span className="text-gray-500"># 在打开的窗口中输入:</span><br/><span className="text-[#22c55e]">claude</span></code>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
