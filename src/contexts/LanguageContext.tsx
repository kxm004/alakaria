import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type SupportedLanguage = 'en' | 'ar';

interface LanguageContextValue {
  language: SupportedLanguage;
  toggleLanguage: () => void;
  setLanguage: (lang: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readLanguageCookie(): SupportedLanguage | null {
  const match = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  if (!match) return null;
  const value = decodeURIComponent(match[1]);
  return value === 'ar' ? 'ar' : value === 'en' ? 'en' : null;
}

function writeLanguageCookie(lang: SupportedLanguage) {
  // Expires in 365 days; path=/ to be available site-wide
  const expires = new Date();
  expires.setDate(expires.getDate() + 365);
  document.cookie = `lang=${encodeURIComponent(lang)}; expires=${expires.toUTCString()}; path=/`;
}

function applyDocumentLanguage(lang: SupportedLanguage) {
  const root = document.documentElement;
  root.setAttribute('lang', lang);
  root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  root.dataset.lang = lang;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  // Initialize from cookie on mount
  useEffect(() => {
    const fromCookie = readLanguageCookie();
    const initial = fromCookie ?? 'en';
    setLanguageState(initial);
    applyDocumentLanguage(initial);
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    writeLanguageCookie(lang);
    applyDocumentLanguage(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  }, [language, setLanguage]);

  const value = useMemo<LanguageContextValue>(() => ({ language, toggleLanguage, setLanguage }), [language, toggleLanguage, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}


