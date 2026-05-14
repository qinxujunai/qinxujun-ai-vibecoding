import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import codexIcon from '../../assets/icons/codex.svg';
import claudeIcon from '../../assets/icons/claude.svg';
import v0Icon from '../../assets/icons/v0.svg';
import TerminalCommand from '../ui/TerminalCommand';
import { useSiteSettings } from '../../context/SiteSettings';

const claudeInstallCommand = 'winget install Anthropic.ClaudeCode';
const claudeCodeOfficialUrl =
  'https://claude.com/product/claude-code?utm_source=google&utm_medium=paid_search_coder&utm_campaign=acq_code_us_q3&utm_term=claude%20code&gclsrc=aw.ds&gad_source=1&gad_campaignid=23253558478&gbraid=0AAAAA99jmquYOUDyoNZF4KOi6hbTqAYz2&gclid=CjwKCAjwn4vQBhBsEiwAq3hhN3s4NMPDp7C6tivDusoCXUVs_Z072QAIEPeAHR2-uLTyYQbqu5xhBhoCu18QAvD_BwE';

export default function Tools() {
  const { content } = useSiteSettings();
  const { tools } = content;

  return (
    <section id="tools" className="py-24 md:py-32 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">{tools.eyebrow}</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-apple-text tracking-tight leading-[1.15] mb-6">
            <span className="block">{tools.titleTop}</span>
            <span className="block">{tools.titleBottom}</span>
          </h3>
          <p className="text-lg text-apple-text-muted">
            {tools.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          
          {/* Codex */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-8 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-10 group"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 shadow-sm rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img src={codexIcon} alt="Codex Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-apple-text tracking-tight">{tools.cards.codex.name}</span>
                  <span className="text-[12px] font-mono text-apple-text-muted mt-0.5">{tools.cards.codex.label}</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight text-apple-text">{tools.cards.codex.title}</h4>
              <p className="text-apple-text-muted text-[15px] leading-relaxed mb-10">
                {tools.cards.codex.desc}
              </p>
            </div>
            <a href="https://chatgpt.com/zh-Hans-CN/codex/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--button-primary-bg)] px-5 py-3 text-[14px] font-semibold text-[var(--button-primary-text)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] hover:shadow-lg hover:shadow-black/10 active:scale-95 mt-auto">
              {tools.cards.codex.cta} <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Claude Code */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(217,119,87,0.12)] md:p-10 group"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm bg-white border border-gray-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img src={claudeIcon} alt="Claude Logo" className="w-7 h-7 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-apple-text tracking-tight">{tools.cards.claude.name}</span>
                  <span className="text-[12px] font-mono text-[#D97757] mt-0.5">{tools.cards.claude.label}</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight text-apple-text">{tools.cards.claude.title}</h4>
              <p className="text-apple-text-muted text-[15px] leading-relaxed mb-8">
                {tools.cards.claude.desc}
              </p>
            </div>
            <TerminalCommand
              caption={tools.cards.claude.caption}
              command={claudeInstallCommand}
              officialUrl={claudeCodeOfficialUrl}
              officialLabel={tools.cards.claude.official}
              copyTitle={content.environment.captions.copy}
              accentClass="text-[#D97757]"
              className="mt-auto group-hover:scale-[1.01]"
            />
          </motion.div>

          {/* v0 by Vercel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-black rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-800 flex flex-col justify-between group text-white transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm bg-white border border-gray-100 flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img src={v0Icon} alt="v0 Logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">{tools.cards.v0.name}</span>
                  <span className="text-[12px] font-mono text-gray-400 mt-0.5">{tools.cards.v0.label}</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">{tools.cards.v0.title}</h4>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                {tools.cards.v0.desc}
              </p>
            </div>
            <a href="https://v0.dev/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-black bg-white hover:bg-gray-200 px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 active:scale-95 mt-auto">
              {tools.cards.v0.cta} <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
