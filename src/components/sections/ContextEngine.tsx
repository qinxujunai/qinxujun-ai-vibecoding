import { motion } from 'motion/react';
import { useSiteSettings } from '../../context/SiteSettings';

export default function ContextEngine() {
  const { content } = useSiteSettings();
  const { contextEngine } = content;

  return (
    <section id="context-engine" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[11px] font-semibold text-electric tracking-[0.3em] uppercase mb-4">{contextEngine.eyebrow}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight leading-[1.15] mb-6">
            <span className="block">{contextEngine.titleTop}</span>
            <span className="block">{contextEngine.titleBottom}</span>
          </h3>
          <p className="text-lg text-apple-text-muted">
            {contextEngine.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contextEngine.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ delay: idx * 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-apple-gray p-8 transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-card)] shadow-sm ring-1 ring-[var(--border-subtle)] transition-transform duration-300 group-hover:scale-105">
                  <Icon className={`h-7 w-7 ${idx === 0 ? 'text-electric' : idx === 1 ? 'text-apple-text' : 'text-[#FF5F56]'}`} />
                </div>
                <h4 className="mb-3 text-xl font-bold tracking-tight text-apple-text">{card.title}</h4>
                <div className={`mb-4 w-fit rounded px-2 py-1 font-mono text-[11px] ${idx === 2 ? 'border border-[#FF5F56]/20 bg-[#FF5F56]/10 text-[#FF5F56]' : 'bg-electric/10 text-electric'}`}>
                  {card.badge}
                </div>
                <p className="text-[14px] leading-relaxed text-apple-text-muted">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
