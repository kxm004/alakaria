import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import AnimatedContent from '../ui/AnimatedContent';
import { useT } from '../../i18n';
import { theme } from '../../theme';
import moutazImage from '../../assets/images/MoutazAlHomsi.png';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = () => {
  const t = useT();
  const { elementRef: aboutSectionRef, isVisible: aboutSectionVisible } = useIntersectionObserver<HTMLElement>();
  const { elementRef: aboutTextRef, isVisible: aboutTextVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="about" ref={aboutSectionRef} className="py-24" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 mt-8 transition-all duration-1000 ${
            aboutSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-center`}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">{t('about.title')}</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-64 mt-20">
            <div
              ref={aboutTextRef}
              className={`transition-all duration-1000 delay-200 ${aboutTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-left max-w-full md:max-w-[calc(50%-1rem)]`}
            >
              <p className="text-lg text-gray-600 mb-4">
                Established by Moutaz Al Homsi in,
              </p>
              <p className="text-lg text-gray-600 mb-4">
              It was founded in 2004, by virtue of
              the Commercial Registry No. (14162), dated: 13 12 2004.
              </p>
              <p className="text-lg text-gray-600 mb-4">
              It is a leading company in the field of real estate activity and industry that aims in it future
plans at consolidating its experience in all specialties in particular the geometric, real
estate, Media and investment. Despite AL AKARIA CO. achievements during the last
years as of institutional structure, wide spreading Media, scientific services and studies
and investments, AL AKARIA seeking to increasing its existence and entity spreading
from a limited liability company into a joint company.
              </p>
            </div>
            <AnimatedContent delay={0.4} direction="horizontal" distance={40} initialOpacity={0} resetOnExit={true}>
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                <img 
                  src={moutazImage}
                  alt="Moutaz Al Homsi"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  style={{ maxWidth: '200px' }}
                />
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};
