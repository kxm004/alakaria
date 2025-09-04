import { theme } from '../../theme';
import { useT } from '../../i18n';

export function Residential() {
  const t = useT();
  return (
    <main>
      <section id="luxury-houses" className="min-h-[60vh] flex items-center justify-center" style={{ background: theme.colors.background }}>
        <h2 className="text-3xl font-bold text-gray-900">{t('residential.luxuryHouses')}</h2>
      </section>
      <section id="affordable-apartments" className="min-h-[60vh] flex items-center justify-center" style={{ background: theme.colors.background }}>
        <h2 className="text-3xl font-bold text-gray-900">{t('residential.affordableApartments')}</h2>
      </section>
      <section id="land-development" className="min-h-[60vh] flex items-center justify-center" style={{ background: theme.colors.background }}>
        <h2 className="text-3xl font-bold text-gray-900">{t('residential.landDevelopment')}</h2>
      </section>
      <section id="projects" className="min-h-[60vh] flex items-center justify-center" style={{ background: theme.colors.background }}>
        <h2 className="text-3xl font-bold text-gray-900">{t('residential.projects')}</h2>
      </section>
    </main>
  );
}

export default Residential;


