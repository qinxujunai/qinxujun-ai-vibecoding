import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import netlifyIcon from '../../assets/icons/netlify.svg';
import cloudflareIcon from '../../assets/icons/cloudflare.svg';
import vercelIcon from '../../assets/icons/vercel.svg';
import { useSiteSettings } from '../../context/SiteSettings';

const deployIcons = [netlifyIcon, cloudflareIcon, vercelIcon];
const deployUrls = ['https://app.netlify.com', 'https://pages.cloudflare.com', 'https://vercel.com'];
const tagClasses = [
  'bg-[#00C7B7]/10 text-[#00A396]',
  'bg-[#F38020]/10 text-[#F38020]',
  'bg-apple-text/10 text-apple-text',
];

export default function Deployment() {
  const { content } = useSiteSettings();
  const { deployment } = content;

  return (
    <section id="deployment" className="bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">{deployment.eyebrow}</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-16">
          <span className="block">{deployment.titleTop}</span>
          <span className="block">{deployment.titleBottom}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {deployment.cards.map((card, idx) => (
            <motion.div
              key={card.name}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center rounded-3xl border border-[var(--border-subtle)] bg-apple-gray p-8 transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-105">
                <img src={deployIcons[idx]} alt={`${card.name} Logo`} className={`${idx === 0 ? 'h-9 w-9' : idx === 1 ? 'h-10 w-10' : 'h-8 w-8'} object-contain`} />
              </div>
              <h4 className="mb-2 text-xl font-bold tracking-tight text-apple-text">{card.name}</h4>
              <span className={`mb-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${tagClasses[idx]}`}>{card.tag}</span>
              <p className="mb-6 text-[14px] leading-relaxed text-apple-text-muted">{card.desc}</p>
              <a href={deployUrls[idx]} target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-1.5 text-[13px] font-bold text-electric hover:underline">
                {card.cta} <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
