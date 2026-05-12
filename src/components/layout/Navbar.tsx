import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-apple-text"></div>
          <span className="font-bold text-[17px] text-apple-text tracking-tight">ai.vibecoding</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-apple-text-muted">
          <a href="#concept" className="hover:text-apple-text transition-colors">第一性原理</a>
          <a href="#environment" className="hover:text-apple-text transition-colors">前置环境</a>
          <a href="#tools" className="hover:text-apple-text transition-colors">基建级工具</a>
          <a href="#workflow" className="hover:text-apple-text transition-colors">高阶工作流</a>
          <a href="#prompts" className="hover:text-apple-text transition-colors">核心指令库</a>
        </div>
        <div>
          <button className="text-[13px] bg-apple-text text-white px-5 py-1.5 rounded-full font-medium hover:bg-black transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-black">
            开始项目
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
