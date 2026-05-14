import { motion } from 'motion/react';
import TerminalCommand from '../ui/TerminalCommand';
import { useSiteSettings } from '../../context/SiteSettings';

export default function Environment() {
  const { content } = useSiteSettings();
  const { environment } = content;

  return (
    <section id="environment" className="bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">{environment.eyebrow}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.15]">
            <span className="block">{environment.titleTop}</span>
            <span className="block">{environment.titleBottom}</span>
          </h3>
          <p className="text-lg text-apple-text-muted max-w-2xl mx-auto">
            {environment.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {environment.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-[2rem] flex flex-col items-center text-center group transition-shadow duration-300 ${card.dark ? 'bg-[#1D1D1F] hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]' : 'bg-apple-gray hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]'}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 ${card.dark ? 'bg-white/10' : 'bg-white'}`}>
                <Icon className={`h-8 w-8 ${card.dark ? 'text-white' : card.accentClass}`} />
              </div>
              <h4 className={`text-xl font-bold mb-3 ${card.dark ? 'text-white' : 'text-apple-text'}`}>{card.title}</h4>
              <p className={`text-[14px] mb-6 leading-relaxed ${card.dark ? 'text-gray-300' : 'text-apple-text-muted'}`}>
                {card.desc}
              </p>
              <TerminalCommand
                caption={card.dark ? environment.captions.launch : environment.captions.install}
                command={card.command}
                officialUrl={card.url}
                officialLabel={card.officialLabel ?? environment.captions.officialInstall}
                copyTitle={environment.captions.copy}
                accentClass={card.accentClass}
                className="mt-auto w-full"
              />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
