import { motion } from 'motion/react';
import { useSiteSettings } from '../../context/SiteSettings';

export default function Concept() {
  const { content } = useSiteSettings();
  const { concept } = content;

  return (
    <section id="concept" className="py-24 md:py-32 bg-[var(--page-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-[11px] font-semibold text-electric tracking-[0.3em] uppercase mb-6">{concept.eyebrow}</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-text tracking-tight leading-[1.15]">
            <span className="block">{concept.titleTop}</span>
            <span className="block border-b-2 border-[var(--border-subtle)] text-apple-text-muted">{concept.titleAccent}</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {concept.principles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${item.active ? 'bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] group-hover:shadow-md group-hover:shadow-black/10' : 'border border-[var(--border-subtle)] text-apple-text group-hover:border-apple-text group-hover:shadow-sm'}`}>
                <span className="font-mono text-sm font-semibold">{item.id}</span>
              </div>
              <h4 className="text-[19px] font-bold mb-3 tracking-tight">{item.title}</h4>
              <p className="text-apple-text-muted text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
