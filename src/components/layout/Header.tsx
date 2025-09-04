import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { theme } from '../../theme';
import { useT } from '../../i18n';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../../assets/images/Logo.png';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [displayGroup, setDisplayGroup] = useState<string | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const collapseCleanupRef = useRef<number | null>(null);
  const { language, toggleLanguage } = useLanguage();
  const t = useT();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const groupLabelToKey: Record<string, 'company' | 'officesAndMedia' | 'projects'> = {
    'Company': 'company',
    'Offices & Media': 'officesAndMedia',
    'Projects': 'projects',
  };
  const itemLabelToKey: Record<string, Record<string, string>> = {
    'Company': { 'About': 'company.About', 'Services': 'company.Services', 'Contact Us': 'company.ContactUs' },
    'Offices & Media': { 'Offices': 'officesAndMedia.officesTitle', 'Social Media': 'officesAndMedia.socialMediaTitle' },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Smooth scroll no longer used here; handled via route-level effect

  // no-op: page navigation uses router; in-page scroll handled per route

  // Structured navigation: groups and items
  const navGroups: Array<{
    label: string;
    path: string;
    items: Array<{ label: string; sectionId: string }>;
  }> = [
    {
      label: 'Company',
      path: '/',
      items: [
        { label: 'About', sectionId: 'about' },
        { label: 'Services', sectionId: 'services' },
        { label: 'Contact Us', sectionId: 'contact' },
      ],
    },
    {
      label: 'Offices & Media',
      path: '/offices-and-media',
      items: [
        { label: 'Offices', sectionId: 'offices' },
        { label: 'Social Media', sectionId: 'social-media' }
      ],
    },
    {
      label: 'Projects',
      path: '/projects',
      items: [],
    },
  ];

  // Note: displayGroup manages mounted content during transitions

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-b ${
         (scrolled || isMenuOpen || !isHomePage)
           ? 'theme.colors.background backdrop-blur-md border-gray-200 border-b' // border visible
           : 'bg-transparent border-b-0 border-transparent' // border hidden
      }`}
      style={{
        boxShadow: (scrolled || isMenuOpen || !isHomePage) ? '0 2px 16px 0 rgba(0,0,0,0.04)' : 'none',
        WebkitBackdropFilter: (scrolled || isMenuOpen || !isHomePage) ? 'blur(8px)' : 'none',
        backdropFilter: (scrolled || isMenuOpen || !isHomePage) ? 'blur(8px)' : 'none',
        background: (scrolled || isMenuOpen || !isHomePage)
          ? `linear-gradient(180deg, rgba(242, 241, 239, 0.8) 0%, rgba(242, 241, 239, 0.4) 50%, rgba(242, 241, 239, 0.2) 100%), rgba(242, 241, 239, 0.3)`
          : 'transparent',
        transition: 'background 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1), -webkit-backdrop-filter 0.5s cubic-bezier(0.22,1,0.36,1), backdrop-filter 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.5s cubic-bezier(0.22,1,0.36,1), border-width 0.5s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name - now clickable */}
          <button
            className="flex items-center space-x-3 focus:outline-none"
            onClick={() => { setIsMenuOpen(false); setOpenGroup(null); window.location.reload(); }}
            aria-label="Go to home"
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
            style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
          >
            <div className="flex items-center space-x-3">
              <img 
                src={Logo}
                alt="Al Akaria Logo"
                className="h-8 transition-opacity duration-300"
              /> 
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            onMouseLeave={() => {
              if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
              closeTimerRef.current = window.setTimeout(() => {
                setActiveGroup(null);
                if (collapseCleanupRef.current) window.clearTimeout(collapseCleanupRef.current);
                collapseCleanupRef.current = window.setTimeout(() => setDisplayGroup(null), 800);
              }, 1000);
            }}
            onMouseEnter={() => {
              if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
              if (collapseCleanupRef.current) window.clearTimeout(collapseCleanupRef.current);
            }}
          >
            {navGroups.map((group) => (
              <div key={group.label} className="relative">
                <button
                  onClick={() => {
                    if (group.label === 'Company') {
                      navigate(group.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      navigate(group.path);
                    }
                  }}
                  onMouseEnter={() => {
                    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
                    hoverTimerRef.current = window.setTimeout(() => {
                      setDisplayGroup(group.label);
                      setActiveGroup(group.label);
                    }, 80);
                  }}
                  onMouseLeave={() => {
                    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
                  }}
                  onFocus={() => setActiveGroup(group.label)}
                  className="px-6 py-2 rounded-md font-light transition-all duration-300 hover:scale-105 hover:text-[#ffa382] text-gray-900"
                >
                  {t(`nav.${groupLabelToKey[group.label]}`)}
                </button>
              </div>
            ))}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="px-4 py-2 rounded-md font-light transition-all duration-300 hover:scale-105 hover:text-[#ffa382] text-gray-900"
              style={{ background: 'transparent' }}
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <button 
              onClick={onContactClick}
              className="px-6 py-2 rounded-md font-light transition-all duration-300 hover:scale-105 hover:text-[#ffa382] text-gray-900"
              style={{ background: 'transparent' }}
            >
              {t('cta.contact')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative h-10 w-10 flex items-center justify-center"
            style={{ color: '#111827 ', background: 'none', border: 'none', padding: 0, margin: 0 }}
          >
            <span className="sr-only">Open menu</span>
            <Menu className={`h-6 w-6 absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`h-6 w-6 absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
          </button>
        </div>

        {/* Desktop Expanded Submenu Panel */}
        <div
          className={`hidden md:block overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeGroup ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'}`}
          style={{ background: 'transparent', transitionProperty: 'max-height, opacity, transform', willChange: 'max-height, opacity, transform' }}
          onMouseEnter={() => {
            if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
            if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
            if (collapseCleanupRef.current) window.clearTimeout(collapseCleanupRef.current);
          }}
          onMouseLeave={() => {
            if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = window.setTimeout(() => {
              setActiveGroup(null);
              if (collapseCleanupRef.current) window.clearTimeout(collapseCleanupRef.current);
              collapseCleanupRef.current = window.setTimeout(() => setDisplayGroup(null), 800);
            }, 360);
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(displayGroup ? (navGroups.find((g) => g.label === displayGroup)?.items ?? []) : []).map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => { setActiveGroup(null); setDisplayGroup(null); navigate(`${navGroups.find((g) => g.label === displayGroup)!.path}#${item.sectionId}`); }}
                    className="w-full text-left px-4 py-2 rounded-md text-gray-900 hover:text-[#ffa382] transition-colors"
                  >
                    {t(itemLabelToKey[displayGroup!]?.[item.label] ?? item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute left-0 right-0 w-full ${
            isMenuOpen ? 'max-h-[400px] opacity-100 py-6 border-t border-gray-200' : 'max-h-0 opacity-0'
          }`}
          style={{
            background: theme.colors.background,
            boxShadow: 'none',
            borderRadius: '0',
            top: '100%',
          }}
        >
          <div className="flex flex-col space-y-2 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-end pb-2">
              <button
                onClick={() => { toggleLanguage(); }}
                aria-label="Toggle language"
                className="px-4 py-2 rounded-md font-light transition-colors duration-200 text-gray-900 hover:text-[#ffa382]"
                style={{ background: 'transparent' }}
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-gray-200">
                <button
                  onClick={() => {
                    if (group.label === 'Company') {
                      setIsMenuOpen(false);
                      setOpenGroup(null);
                      navigate(group.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      setOpenGroup(openGroup === group.label ? null : group.label);
                    }
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:text-[#ffa382]"
                >
                  <span>{t(`nav.${groupLabelToKey[group.label]}`)}</span>
                  <span className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${openGroup === group.label ? 'rotate-180' : ''}`}>▾</span>
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openGroup === group.label ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="py-1">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <button
                          onClick={() => { setIsMenuOpen(false); navigate(`${group.path}#${item.sectionId}`); }}
                          className="text-left w-full rounded-lg px-8 py-2 text-sm sm:text-base font-light text-gray-900 hover:text-[#ffa382]"
                        >
                          {t(itemLabelToKey[group.label]?.[item.label] ?? item.label)}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-2">
                    <button
                      onClick={() => { setIsMenuOpen(false); navigate(group.path); }}
                      className="text-left w-full rounded-lg px-4 py-2 text-sm sm:text-base font-light text-gray-700 hover:text-[#ffa382]"
                    >
                      {t('nav.visitPage', { label: t(`nav.${groupLabelToKey[group.label]}`) })}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={onContactClick}
              className="text-left w-full rounded-lg px-4 py-3 text-sm sm:text-lg font-semibold transition-colors duration-200 text-gray-900 hover:text-[#ffa382]"
              style={{ background: 'transparent' }}
            >
              {t('cta.contact')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};