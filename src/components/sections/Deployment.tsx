import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import netlifyIcon from '../../assets/icons/netlify.svg';
import cloudflareIcon from '../../assets/icons/cloudflare.svg';
import vercelIcon from '../../assets/icons/vercel.svg';

export default function Deployment() {
  return (
    <section id="deployment" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">云端交付矩阵</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-16">
          <span className="block">把本地作品</span>
          <span className="block">交付到真实的线上环境</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl bg-apple-gray border border-gray-100 flex flex-col items-center group transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
              <img src={netlifyIcon} alt="Netlify Logo" className="w-9 h-9 object-contain" />
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl bg-apple-gray border border-gray-100 flex flex-col items-center group relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
              <img src={cloudflareIcon} alt="Cloudflare Logo" className="w-10 h-10 object-contain" />
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl bg-apple-gray border border-gray-100 flex flex-col items-center group transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
              <img src={vercelIcon} alt="Vercel Logo" className="w-8 h-8 object-contain" />
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
