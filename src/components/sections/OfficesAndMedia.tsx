import { theme } from '../../theme';
import { useT } from '../../i18n';

export function OfficesAndMedia() {
  const t = useT();
  return (
    <main>
      <section id="offices-and-media" className="py-16" style={{ background: theme.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="offices" className="min-h-[50vh] flex items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('officesAndMedia.officesTitle')}</h2>
          </section>
          <section id="social-media" className="min-h-[50vh] flex items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-900">{t('officesAndMedia.socialMediaTitle')}</h2>
          </section>
        </div>
      </section>
    </main>
  );
}

export default OfficesAndMedia;


