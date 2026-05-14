import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { localeLabels } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';

export default function Navbar() {
  const { content, locale, theme, toggleLocale, toggleTheme } = useSiteSettings();
  const nextLocale = locale === 'zh-CN' ? 'en-US' : 'zh-CN';
  const nextLocaleLabel = localeLabels[nextLocale];
  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--nav-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a
          href="#top"
          aria-label={content.nav.homeLabel}
          className="flex items-center gap-2 rounded-full py-2 pr-3 transition-colors duration-300 hover:text-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/50"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-apple-text transition-colors duration-300"></div>
          <span className="font-bold text-[17px] text-apple-text tracking-tight">ai.vibecoding</span>
        </a>
        <div className="hidden md:flex items-center gap-2 text-[13px] font-medium text-apple-text-muted">
          <a href="#concept" className="rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-apple-gray hover:text-apple-text">{content.nav.concept}</a>
          <a href="#environment" className="rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-apple-gray hover:text-apple-text">{content.nav.environment}</a>
          <a href="#tools" className="rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-apple-gray hover:text-apple-text">{content.nav.tools}</a>
          <a href="#workflow" className="rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-apple-gray hover:text-apple-text">{content.nav.workflow}</a>
          <a href="#prompts" className="rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-apple-gray hover:text-apple-text">{content.nav.prompts}</a>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className="grid h-10 min-w-10 place-items-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-3 text-[13px] font-bold text-apple-text shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-apple-gray active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/50"
            aria-label={nextLocaleLabel.next}
          >
            {nextLocaleLabel.short}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={theme === 'dark' ? content.nav.themeLight : content.nav.themeDark}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-apple-text shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-apple-gray active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/50"
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
