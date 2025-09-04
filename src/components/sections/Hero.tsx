import React from 'react';
import { theme } from '../../theme';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import BlurText from '../ui/BlurText';
import AnimatedContent from '../ui/AnimatedContent';
import { useT } from '../../i18n';
import { useLanguage } from '../../contexts/LanguageContext';
import heroBackgroundImage from '../../assets/images/background-hero.png'; // Assuming logo.png is the desired background image

// Slideshow imports
import { useState, useEffect } from 'react';
import placeholderImage1 from '../../assets/images/pic1.jpg';
import placeholderImage2 from '../../assets/images/pic2.jpg';
import placeholderImage3 from '../../assets/images/pic3.jpg';
import placeholderLogo from '../../assets/images/pic4.jpg';

interface HeroProps {
  onContactClick: () => void;
}

// Animated scroll indicator component
const ScrollIndicator: React.FC = () => (
  <div className="flex flex-col items-center justify-center">
    <span className="animate-bounce" style={{ fontSize: 36, lineHeight: 1, color: theme.colors.primary }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </span>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const t = useT();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const FADE_DURATION = 1000; // 1 second fade

  const images = [
    placeholderImage1,
    placeholderImage2,
    placeholderImage3,
    placeholderLogo,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(next);
    };
  }, [current, images.length]);

  // Hero states and refs
  const { elementRef: heroButtonsRef } = useIntersectionObserver<HTMLDivElement>();
  const { elementRef: heroStatsRef, isVisible: heroStatsVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundColor: theme.colors.background,
        // backgroundImage: `url(${heroBackgroundImage})`,
        // transform: isArabic ? 'scaleX(-1)' : 'scaleX(1)',
        // transition: 'transform 0.5s ease-in-out',
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          transform: isArabic ? 'scaleX(-1)' : 'scaleX(1)',
          transition: 'transform 0s ease-in-out', // Instant flip for consistency
        }}
      >
        <div className="absolute inset-0 bg-white opacity-0"></div> {/* White opacity layer */}
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 py-20 pt-32 sm:pt-20">
          <div className={`flex flex-col lg:flex-row gap-12 items-center lg:justify-start`}>
            <div className={`w-1/1.5 p-8 rounded-lg bg-white bg-opacity-30 backdrop-blur-lg text-center ${isArabic ? 'lg:text-right' : 'lg:text-left'}`} style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
              <h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                style={{ lineHeight: 1.25 }}
              >
                <BlurText
                  text={t('hero.title')}
                  className="text-5xl lg:text-6xl font-light text-gray-900 "
                  delay={200}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.7}
                />
              </h1>
              <BlurText
                text={t('hero.subtitle')}
                className="text-l text-gray-600 mb-8 leading-relaxed"
                delay={100}
                animateBy="words"
                direction="top"
                stepDuration={0.5}
              />
              <div
                ref={heroButtonsRef}
                className={`flex flex-row gap-4 mb-12 w-full justify-center ${isArabic ? 'lg:justify-end' : 'lg:justify-start'}`}
              >
                <AnimatedContent delay={0.7} direction="vertical" startImmediately={true}>
                  <button
                    onClick={onContactClick}
                    className="shimmer relative overflow-hidden px-10 py-4 rounded-md text-white font-regular text-sm sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    style={{ backgroundColor: theme.colors.primary }}
                  >
                    {t('hero.getStarted')}
                  </button>
                </AnimatedContent>
                <AnimatedContent delay={0.9} direction="vertical" startImmediately={true}>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="overflow-hidden px-10 py-4 rounded-md font-normal text-sm sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    style={{
                      backgroundColor: 'transparent',
                      color: theme.colors.primary,
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                    }}
                  >
                    {t('hero.learnMore')}
                  </button>
                </AnimatedContent>
              </div>
              <div
                ref={heroStatsRef}
                className={`grid grid-cols-3 gap-8 transition-all duration-1000 ${heroStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '400ms' }}
              >
                
              </div>
            </div>
            {/* Slideshow Content */}
            {/* <div className={`w-full lg:w-1/2 h-96 relative flex items-center justify-center overflow-hidden shadow-xl`}>
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Hero slideshow"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDuration: `${FADE_DURATION}ms` }}
                  draggable={false}
                  loading="lazy"
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
