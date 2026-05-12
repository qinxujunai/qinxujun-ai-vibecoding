import { motion } from 'motion/react';
import { ExternalLink, Github, Globe } from 'lucide-react';

export default function Deployment() {
  return (
    <section id="deployment" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">云端交付矩阵</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-16">
          将本地的 Vibe 魔法，<br />
          转化为确定性的线上资产。
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-apple-gray border border-gray-100 flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
              <Globe className="w-8 h-8 text-[#00C7B7]" />
            </div>
            <h4 className="text-xl font-bold text-apple-text mb-2 tracking-tight">Netlify</h4>
            <span className="text-[11px] font-bold px-3 py-1 bg-[#00C7B7]/10 text-[#00A396] rounded-full mb-4 uppercase tracking-wider">最佳极速方案</span>
            <p className="text-[14px] text-apple-text-muted mb-6 leading-relaxed">无缝连接 Git，极致快速的静态分发。配置干预最少，开箱即使独立的 HTTPS 安全连接。</p>
            <a href="https://app.netlify.com" target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-1.5 text-[13px] font-bold text-electric hover:underline">
              探索部署策略 <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-apple-gray border border-gray-100 flex flex-col items-center group relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 15.5C16.5 13.567 14.933 12 13 12C12.44 12 11.91 12.13 11.439 12.355C10.74 10.428 8.878 9 6.667 9C3.537 9 1 11.537 1 14.667C1 17.797 3.537 20.334 6.667 20.334H17.834C20.686 20.334 23 18.02 23 15.167C23 12.314 20.686 10 17.834 10C17.472 10 17.12 10.038 16.784 10.11C16.892 10.55 16.95 11.015 16.95 11.5C16.95 12.97 16.31 14.29 15.297 15.204C15.65 15.39 16.06 15.5 16.5 15.5Z" fill="#F38020"/></svg>
            </div>
            <h4 className="text-xl font-bold text-apple-text mb-2 tracking-tight">Cloudflare Pages</h4>
            <span className="text-[11px] font-bold px-3 py-1 bg-[#F38020]/10 text-[#F38020] rounded-full mb-4 uppercase tracking-wider">全球边缘加速</span>
            <p className="text-[14px] text-apple-text-muted mb-6 leading-relaxed">提供无与伦比的 Edge 节点分发与免费额度。适合需要对抗高并发、极其注重加载性能的现代 SPA 架构。</p>
            <a href="https://pages.cloudflare.com" target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-1.5 text-[13px] font-bold text-electric hover:underline">
              探索边缘部署 <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-apple-gray border border-gray-100 flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2L2 19.7778H22L12 2Z" fill="black"/></svg>
            </div>
            <h4 className="text-xl font-bold text-apple-text mb-2 tracking-tight">Vercel</h4>
            <span className="text-[11px] font-bold px-3 py-1 bg-black/10 text-black rounded-full mb-4 uppercase tracking-wider">全栈工程标准</span>
            <p className="text-[14px] text-apple-text-muted mb-6 leading-relaxed">Next.js 及各类现代工程的母平台，支持边缘切片式托管，提供了无可挑剔的云端开发者体验。</p>
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-1.5 text-[13px] font-bold text-electric hover:underline">
              前往云端基建 <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
