import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { siteContent, type Locale, type ThemeMode } from '../content/site';

type SiteSettingsContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  content: (typeof siteContent)[Locale];
};

const LOCALE_KEY = 'ai-vibecoding.locale';
const THEME_KEY = 'ai-vibecoding.theme';

const SiteSettingsContext = createContext<SiteSettingsContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'zh-CN';
  const stored = window.localStorage.getItem(LOCALE_KEY);
  return stored === 'en-US' || stored === 'zh-CN' ? stored : 'zh-CN';
}

function readStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setMeta(name: string, content: string) {
  document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.setAttribute('content', content);
}

function setProperty(property: string, content: string) {
  document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)?.setAttribute('content', content);
}

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale());
  const [theme, setThemeState] = useState<ThemeMode>(() => readStoredTheme());
  const content = siteContent[locale];

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(LOCALE_KEY, nextLocale);
  }, []);

  const setTheme = useCallback((nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.meta.title;
    setMeta('description', content.meta.description);
    setProperty('og:title', content.meta.title);
    setProperty('og:description', content.meta.ogDescription);
  }, [content, locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    setMeta('theme-color', theme === 'dark' ? '#050506' : '#F5F5F7');
  }, [theme]);

  const value = useMemo<SiteSettingsContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === 'zh-CN' ? 'en-US' : 'zh-CN'),
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      content,
    }),
    [content, locale, setLocale, setTheme, theme],
  );

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error('useSiteSettings must be used within SiteSettingsProvider');
  }
  return context;
}
