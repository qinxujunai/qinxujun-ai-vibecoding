import { motion } from 'motion/react';
import { Terminal, GitBranch, Server } from 'lucide-react';
import TerminalCommand from '../ui/TerminalCommand';

export default function Environment() {
  const cards = [
    {
      icon: <Server className="w-8 h-8 text-electric" />,
      title: 'Node.js 运行时',
      desc: 'React、Vite、npm 和大多数前端工具链都依赖 Node.js。先把 LTS 版本装好，后面的安装、构建、部署才有稳定底座。',
      command: 'winget install OpenJS.NodeJS.LTS',
      url: 'https://nodejs.org/en/download',
      accentClass: 'text-electric',
      dark: false,
    },
    {
      icon: <GitBranch className="w-8 h-8 text-[#FF5F56]" />,
      title: 'Git 版本控制',
      desc: 'Git 是 AI 编程的安全绳。每一次大模型修改前，都应该有可回退的检查点，让试错变成工程流程，而不是冒险。',
      command: 'winget install --id Git.Git -e --source winget',
      url: 'https://git-scm.com/install/windows',
      accentClass: 'text-[#FF5F56]',
      dark: false,
    },
    {
      icon: <Terminal className="w-8 h-8 text-white" />,
      title: '终端基础 (Terminal)',
      desc: 'Claude Code、Codex CLI 和部署命令都从终端启动。Windows 推荐 PowerShell；macOS 推荐 Terminal 或 iTerm。',
      command: 'claude',
      url: 'https://claude.com/product/claude-code',
      accentClass: 'text-[#D97757]',
      dark: true,
    },
  ];

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
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-[2rem] flex flex-col items-center text-center group transition-shadow duration-300 ${card.dark ? 'bg-apple-text hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)]' : 'bg-apple-gray hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]'}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 ${card.dark ? 'bg-white/10' : 'bg-white'}`}>
                {card.icon}
              </div>
              <h4 className={`text-xl font-bold mb-3 ${card.dark ? 'text-white' : 'text-apple-text'}`}>{card.title}</h4>
              <p className={`text-[14px] mb-6 leading-relaxed ${card.dark ? 'text-gray-300' : 'text-apple-text-muted'}`}>
                {card.desc}
              </p>
              <TerminalCommand
                caption={card.dark ? '# 在终端里启动' : '# 一行安装到本地'}
                command={card.command}
                officialUrl={card.url}
                officialLabel="官方安装"
                accentClass={card.accentClass}
                className="mt-auto w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
