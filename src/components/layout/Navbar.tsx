import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { localeLabels, primaryNav, sectionOrder, type SectionId } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';
import { EASE } from '../ui/Section';

function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sectionOrder.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

// "‹ 返回" to the author's personal site, only for visitors who came from it: that site leaves 'qxj.back' in this
// tab's sessionStorage when someone clicks through. A link opened directly shows nothing.
// Contract: qinxujunai.github.io repository, docs/back-link.md.
function useBackLink() {
  const [back, setBack] = useState<string | null>(null);
  useEffect(() => {
    try {
      const url = sessionStorage.getItem('qxj.back');
      if (url && url.startsWith(`${window.location.origin}/`)) setBack(url);
    } catch {
      // Storage blocked: no back link.
    }
  }, []);
  return back;
}

const iconButton =
  'grid h-10 place-items-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-apple-text shadow-sm shadow-black/5 transition-all duration-300 hover:bg-apple-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/50';

export default function Navbar() {
  const { content, locale, theme, toggleLocale, toggleTheme } = useSiteSettings();
  const { scrollYProgress } = useScroll();
  const active = useActiveSection();
  const back = useBackLink();
  const [menuOpen, setMenuOpen] = useState(false);
  const nextLocale = locale === 'zh-CN' ? 'en-US' : 'zh-CN';
  const nextLocaleLabel = localeLabels[nextLocale];
  const ThemeIcon = theme === 'dark' ? Sun : Moon;
  const labels = content.nav.labels;

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="sticky top-0 z-50 w-full border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center gap-3">
          {back ? (
            <a
              href={back}
              onClick={(event) => {
                if (document.referrer && document.referrer.split('#')[0] === back.split('#')[0]) {
                  event.preventDefault();
                  window.history.back();
                }
              }}
              className="inline-flex min-h-11 items-center whitespace-nowrap text-[13px] font-medium text-apple-text-muted transition-colors duration-300 hover:text-apple-text"
            >
              ‹ {content.nav.back}
            </a>
          ) : null}
          <a
            href="#top"
            aria-label={content.nav.homeLabel}
            className="flex shrink-0 items-center gap-2 rounded-full py-2 pr-3 transition-colors duration-300 hover:text-electric"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-apple-text" />
            <span className="text-[17px] font-bold tracking-tight text-apple-text">ai.vibecoding</span>
          </a>
        </div>

        <div className="hidden items-center gap-0.5 text-[13px] font-medium text-apple-text-muted lg:flex">
          {primaryNav.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-apple-gray hover:text-apple-text ${active === id ? 'bg-apple-gray text-apple-text' : ''}`}
            >
              {labels[id]}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={toggleLocale} className={`${iconButton} min-w-10 px-3 text-[13px] font-bold`} aria-label={nextLocaleLabel.next}>
            {nextLocaleLabel.short}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={theme === 'dark' ? content.nav.themeLight : content.nav.themeDark}
            className={`${iconButton} w-10`}
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="chapter-menu"
            aria-label={menuOpen ? content.nav.menuClose : content.nav.menuOpen}
            className={`${iconButton} w-10 lg:hidden`}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="chapter-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute inset-x-0 top-full border-b border-[var(--nav-border)] bg-[var(--page-bg)] shadow-[var(--shadow-soft)] lg:hidden"
          >
            <div className="mx-auto max-h-[calc(100dvh-56px)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6">
              <p className="px-3 pb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-text-muted">{content.nav.chapters}</p>
              <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {sectionOrder.map((id, idx) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-semibold transition-colors duration-300 hover:bg-apple-gray ${active === id ? 'bg-apple-gray text-electric' : 'text-apple-text'}`}
                    >
                      <span className="w-6 font-mono text-[12px] text-apple-text-muted">{String(idx + 1).padStart(2, '0')}</span>
                      {labels[id]}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div aria-hidden className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-electric" style={{ scaleX: scrollYProgress }} />
    </motion.nav>
  );
}
