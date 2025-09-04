import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import AnimatedContent from '../ui/AnimatedContent';
import { useT } from '../../i18n';
import { theme } from '../../theme';

interface ProjectsProps {
  onContactClick?: () => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const t = useT();
  const { elementRef: projectsSectionRef } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="projects" ref={projectsSectionRef} className="py-20" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedContent delay={0} direction="vertical" distance={40} initialOpacity={0} resetOnExit={true}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('projects.title')}</h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2} direction="vertical" distance={40} initialOpacity={0} resetOnExit={true}>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {/* Add your projects content here */}
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
};
