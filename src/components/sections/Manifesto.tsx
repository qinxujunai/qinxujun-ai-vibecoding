import { motion } from 'motion/react';
import { useSiteSettings } from '../../context/SiteSettings';

export default function Manifesto() {
  const { content } = useSiteSettings();
  const { manifesto } = content;

  return (
    <section className="relative flex items-center justify-center overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-12">{manifesto.eyebrow}</h2>

          <div className="text-left space-y-8 text-[16px] md:text-[18px] text-apple-text leading-[1.8] font-medium tracking-tight">
            {manifesto.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p className="font-semibold text-xl pt-4 text-electric">
              {manifesto.closing}
            </p>
            <p className="pt-8 text-sm text-gray-400 font-normal">
              -- {manifesto.signature}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
