import React from 'react';
import { Building, Banknote, Send, Users, Phone } from 'lucide-react';
import { theme } from '../../theme';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import AnimatedContent from '../ui/AnimatedContent';
import { useT } from '../../i18n';

interface ServicesProps {
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = () => {
  const t = useT();
  const { elementRef: servicesHeaderRef, isVisible: servicesHeaderVisible } = useIntersectionObserver<HTMLDivElement>();

  const services = [
    {
      icon: Building,
      title: t('services.service1'),
      description: t('services.description'),
      highlights: [t('services.feature1'), t('services.feature2'), t('services.feature3')]
    },
    {
      icon: Banknote,
      title: t('services.service2'),
      description: t('services.description'),
      highlights: [t('services.feature1'), t('services.feature2'), t('services.feature3')]
    },
    {
      icon: Send,
      title: t('services.service3'),
      description: t('services.description'),
      highlights: [t('services.feature1'), t('services.feature2'), t('services.feature3')]
    },
    {
      icon: Users,
      title: t('services.service4'),
      description: t('services.description'),
      highlights: [t('services.feature1'), t('services.feature2'), t('services.feature3')]
    },
    {
      icon: Phone,
      title: t('services.service5'),
      description: t('services.description'),
      highlights: [t('services.feature1'), t('services.feature2'), t('services.feature3')]
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-full min-h-[80vh]">
        <div 
          ref={servicesHeaderRef}
          className={`transition-all duration-1000 ${
            servicesHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } flex flex-col items-center text-center`}
          style={{ transform: `translateY(${servicesHeaderVisible ? 0 : 30}px)` }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-l text-gray-600 max-w-3xl mb-8 mx-auto">
            {/* Add your services introduction here */}
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-center">
            <ul className="list-disc pl-8 text-left max-w-[50%]">
              {services.map((service, index) => (
                <AnimatedContent key={index} direction="vertical" distance={40} initialOpacity={0} delay={index * 0.15} resetOnExit={true}>
                  <li className="mb-6">
                    <div className="pl-3">
                      <div className="text-lg text-gray-900 font-light">{service.title}</div>
                      <div className="text-sm text-gray-500 mt-0">{service.description}</div>
                    </div>
                  </li>
                </AnimatedContent>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
