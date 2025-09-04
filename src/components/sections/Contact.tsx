import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, QrCode } from 'lucide-react';
import { theme } from '../../theme';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useT } from '../../i18n';

interface ContactProps {
  onContactClick: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const t = useT();

  const { elementRef: contactHeaderRef, isVisible: contactHeaderVisible } = useIntersectionObserver<HTMLDivElement>();
  const { elementRef: contactFormRef, isVisible: contactFormVisible } = useIntersectionObserver<HTMLDivElement>();
  const { elementRef: contactQrRef, isVisible: contactQrVisible } = useIntersectionObserver<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Compile email content
    const emailSubject = `Inquiry from ${formData.name} - ${formData.department}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Department: ${formData.department}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:support@alakaria.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={contactHeaderRef}
          className={`text-center mb-12 transition-all duration-1000 ${contactHeaderVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: `translateY(${contactHeaderVisible ? 0 : 40}px)`, transitionDelay: '0ms' }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* Add your contact introduction here */}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-20 w-full">
          {/* Contact Form */}
          <div
            ref={contactFormRef}
            className={`bg-white rounded-lg shadow-lg transition-all duration-1000 flex-1 max-w-md p-8 ${contactFormVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateY(${contactFormVisible ? 0 : 40}px)`, transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                  {t('contact.fullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#255b95] focus:border-transparent transition-colors text-sm"
                  placeholder={t('contact.placeholder.fullName')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                  {t('contact.emailAddress')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#255b95] focus:border-transparent transition-colors text-sm"
                  placeholder={t('contact.placeholder.email')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                  {t('contact.phoneNumber')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#255b95] focus:border-transparent transition-colors text-sm"
                  placeholder={t('contact.placeholder.phone')}
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-light text-gray-700 mb-2">
                  {t('contact.department')}
                </label>
                <select
                  id="department"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#255b95] focus:border-transparent transition-colors bg-white text-gray-900 cursor-pointer text-sm"
                >
                  <option value="" disabled>{t('contact.selectDepartment')}</option>
                  <option value="General Inquiry">{t('contact.department.general')}</option>
                  <option value="Sales">{t('contact.department.sales')}</option>
                  <option value="Support">{t('contact.department.support')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#255b95] focus:border-transparent transition-colors resize-none text-sm"
                  placeholder={t('contact.placeholder.message')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 text-base"
                style={{ backgroundColor: theme.colors.primary }}
              >
                <Send className="h-5 w-5" />
                <span>{t('contact.button.send')}</span>
              </button>
            </form>
          </div>
          {/* QR Code Section */}
          <div 
            ref={contactQrRef}
            className={`bg-white rounded-lg shadow-lg transition-all duration-1000 flex-1 max-w-md p-8 flex flex-col items-center justify-center ${contactQrVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateY(${contactQrVisible ? 0 : 40}px)`, transitionDelay: '300ms' }}
          >
            <QrCode className="h-12 w-12 mb-4" style={{ color: theme.colors.primary }} />
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.quickContact')}</h3>
            <p className="text-gray-600 mb-6 text-center">{t('contact.qrHelp')}</p>
            <div className="w-48 h-48 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-sm">QR Code Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
