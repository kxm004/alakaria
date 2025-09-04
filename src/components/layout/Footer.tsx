import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { theme } from '../../theme';
import { useT } from '../../i18n';

export const Footer: React.FC = () => {
  const t = useT();
  return (
    <footer className="w-full py-8 text-black text-center" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          {/* Left: Company Info, Description, Social */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h3 className="text-xl font-bold">{t('footer.companyName')}</h3>
                <p className="text-black text-sm">{t('footer.established')}</p>
              </div>
            </div>
            <p className="text-black mb-4 leading-relaxed text-left max-w-xs md:max-w-md">
              {/* Add your company description here */}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-black hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Right: Contact Info */}
          <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4 text-black">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Location</p>
                  <p>City, Country</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p>+XXX XXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p>support@company.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center">
            <p className="text-black text-sm text-center">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};