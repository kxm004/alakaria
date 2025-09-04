import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type Dict = Record<string, string>;

const en: Dict = {
  'brand.name': 'Al Akaria',
  'nav.company': 'Company',
  'nav.officesAndMedia': 'Offices & Media',
  'nav.projects': 'Projects',
  'nav.visitPage': 'Visit {label} page',
  'cta.contact': 'Contact Us',

  'hero.title': 'Your Real Estate Partner',
  'hero.subtitle': 'Discover premium properties and expert guidance for all your real estate needs.',
  'hero.getStarted': 'Get Started',
  'hero.learnMore': 'Learn More',
  'hero.welcome': 'Welcome',
  'hero.addContent': 'Add your content here',
  'hero.card1': 'Card 1',
  'hero.card2': 'Card 2',
  'hero.card3': 'Card 3',

  'about.title': 'About Us',
  'about.ourMission': 'Our Mission',

  'services.title': 'Our Services',
  'services.service1': 'Service 1',
  'services.service2': 'Service 2',
  'services.service3': 'Service 3',
  'services.service4': 'Service 4',
  'services.service5': 'Service 5',
  'services.description': 'Add your service description here.',
  'services.feature1': 'Feature 1',
  'services.feature2': 'Feature 2',
  'services.feature3': 'Feature 3',

  'contact.title': 'Contact Us',
  'contact.sendMessage': 'Send us a Message',
  'contact.fullName': 'Full Name *',
  'contact.emailAddress': 'Email Address *',
  'contact.phoneNumber': 'Phone Number',
  'contact.department': 'Department *',
  'contact.placeholder.fullName': 'Your full name',
  'contact.placeholder.email': 'your.email@example.com',
  'contact.placeholder.phone': '+963 XXX XXX XXX',
  'contact.selectDepartment': 'Select Department',
  'contact.department.general': 'General Inquiry',
  'contact.department.sales': 'Sales',
  'contact.department.support': 'Support',
  'contact.message': 'Message *',
  'contact.placeholder.message': 'Please describe your inquiry or the assistance you need...',
  'contact.button.send': 'Send Message',
  'contact.quickContact': 'Quick Contact',
  'contact.qrHelp': 'Scan the QR code for instant access to our support on WhatsApp',

  'company.About': 'About',
  'company.Projects': 'Projects',
  'company.Services': 'Services',
  'company.ContactUs': 'Contact Us',
  'projects.title': 'Our Projects',

  'officesAndMedia.title': 'Offices & Media',
  'officesAndMedia.officesTitle': 'Our Offices',
  'officesAndMedia.socialMediaTitle': 'Social Media',

  'footer.companyName': 'Al Akaria',
  'footer.established': 'Established 2024',
  'footer.copyright': '© 2024 Company Name. All rights reserved.',
};

const ar: Dict = {
  'brand.name': 'العقارية',
  'nav.company': 'الشركة',
  'nav.officesAndMedia': 'المكاتب و الإعلام',
  'nav.projects': 'المشاريع',
  'nav.visitPage': 'زيارة صفحة {label}',
  'cta.contact': 'تواصل معنا',

  'hero.title': 'شريكك العقاري',
  'hero.subtitle': 'اكتشف العقارات المميزة وإرشادات الخبراء لتلبية جميع احتياجاتك العقارية.',
  'hero.getStarted': 'ابدأ الآن',
  'hero.learnMore': 'اعرف المزيد',
  'hero.welcome': 'أهلاً بك',
  'hero.addContent': 'أضف محتواك هنا',
  'hero.card1': 'بطاقة 1',
  'hero.card2': 'بطاقة 2',
  'hero.card3': 'بطاقة 3',

  'about.title': 'من نحن',
  'about.ourMission': 'رسالتنا',

  'services.title': 'خدماتنا',
  'services.service1': 'الخدمة 1',
  'services.service2': 'الخدمة 2',
  'services.service3': 'الخدمة 3',
  'services.service4': 'الخدمة 4',
  'services.service5': 'الخدمة 5',
  'services.description': 'أضف وصف الخدمة هنا.',
  'services.feature1': 'الميزة 1',
  'services.feature2': 'الميزة 2',
  'services.feature3': 'الميزة 3',

  'contact.title': 'اتصل بنا',
  'contact.sendMessage': 'أرسل لنا رسالة',
  'contact.fullName': 'الاسم الكامل *',
  'contact.emailAddress': 'عنوان البريد الإلكتروني *',
  'contact.phoneNumber': 'رقم الهاتف',
  'contact.department': 'القسم *',
  'contact.placeholder.fullName': 'اسمك الكامل',
  'contact.placeholder.email': 'example@domain.com',
  'contact.placeholder.phone': '+963 XXX XXX XXX',
  'contact.selectDepartment': 'اختر القسم',
  'contact.department.general': 'استفسار عام',
  'contact.department.sales': 'المبيعات',
  'contact.department.support': 'الدعم',
  'contact.message': 'الرسالة *',
  'contact.placeholder.message': 'يرجى وصف استفسارك أو المساعدة التي تحتاجها...',
  'contact.button.send': 'إرسال الرسالة',
  'contact.quickContact': 'تواصل سريع',
  'contact.qrHelp': 'امسح رمز الاستجابة السريعة للوصول الفوري إلى دعمنا على واتساب',

  'company.About': 'القيادة',
  'company.Projects': 'الموظفون',
  'company.Services': 'الخدمات',
  'company.ContactUs': 'تواصل معنا',
  'projects.title': 'مشاريعنا',

  'officesAndMedia.title': 'المكاتب و الإعلام',
  'officesAndMedia.officesTitle': 'مكاتبنا',
  'officesAndMedia.socialMediaTitle': 'وسائل التواصل الاجتماعي',

  'footer.companyName': 'العقارية',
  'footer.established': 'تأسست 2024',
  'footer.copyright': '© 2024 جميع الحقوق محفوظة.',
};

const dictionaries: Record<'en' | 'ar', Dict> = { en, ar };

function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? ''));
}

export function useT() {
  const { language } = useLanguage();
  const dict = dictionaries[language];
  return useMemo(() => {
    const t = (key: string, params?: Record<string, string | number>): string => {
      const value = dict[key] ?? key;
      return interpolate(value, params);
    };
    return t;
  }, [dict]);
}


