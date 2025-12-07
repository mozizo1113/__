import React, { createContext, useContext, useEffect } from 'react';

interface LanguageContextType {
  language: 'ar';
  t: (key: string) => string;
}

const translations = {
  // Navigation
  'nav.home': 'الرئيسية',
  'nav.firstAid': 'الإسعافات الأولية',
  'nav.treatments': 'العلاجات',
  'nav.dailyTip': 'نصائح صحية',
  'nav.dietPlan': 'النظام الغذائي',
  'nav.nearestHospitals': 'أقرب المستشفيات',
  'nav.emergency': 'الطوارئ',
  'nav.mentalHealth': 'الصحة النفسية',
  
  // Hero
  'hero.title': 'إسعفني - رفيقك الصحي',
  'hero.subtitle': 'إرشادات طبية سريعة ونصائح للإسعافات الأولية ودعم الطوارئ في متناول يدك',
  'hero.searchPlaceholder': 'ابحث عن الأعراض أو الأمراض...',
  'hero.searchButton': 'بحث',
  
  // Emergency Numbers
  'emergency.title': 'أرقام الطوارئ',
  'emergency.police': 'الشرطة',
  'emergency.ambulance': 'الإسعاف',
  'emergency.fire': 'الإطفاء',
  
  // Search
  'search.bySymptoms': 'ابحث عن المرض بالأعراض',
  'search.byDisease': 'ابحث عن الأعراض بالمرض',
  'search.symptomsPlaceholder': 'صف أعراضك...',
  'search.diseasePlaceholder': 'أدخل اسم المرض...',
  
  // First Aid
  'firstAid.title': 'نصائح الإسعافات الأولية',
  'firstAid.viewAll': 'عرض جميع النصائح',
  'firstAid.searchPlaceholder': 'ابحث عن نصائح الإسعافات الأولية...',
  
  // Treatments
  'treatments.title': 'العلاجات الشائعة',
  'treatments.search': 'ابحث عن العلاجات',
  'treatments.searchPlaceholder': 'ابحث عن دواء...',
  'treatments.headache': 'الصداع',
  'treatments.allergy': 'الحساسية الأنفية والجيوب الأنفية',
  'treatments.anemia': 'فقر الدم',
  'treatments.cough': 'طارد للبلغم',
  'treatments.bonePain': 'آلام المفاصل والعظام',
  'treatments.painkillers': 'مسكنات الألم',
  'treatments.fever': 'الحمى',
  'treatments.flu': 'الإنفلونزا',
  'treatments.covid19': 'مكملات كوفيد-19',
  'treatments.diabetes': 'السكري',
  'treatments.hypertension': 'ارتفاع ضغط الدم',
  'treatments.asthma': 'الربو',
  'treatments.migraine': 'الصداع النصفي',
  'treatments.gastritis': 'التهاب المعدة',
  'treatments.arthritis': 'التهاب المفاصل',
  'treatments.bronchitis': 'التهاب الشعب الهوائية',
  'treatments.sinusitis': 'التهاب الجيوب الأنفية',
  'treatments.urinaryInfection': 'التهاب المسالك البولية',
  'treatments.thyroidDisorder': 'اضطراب الغدة الدرقية',
  'treatments.anxiety': 'القلق',
  'treatments.allergicRhinitis': 'التهاب الأنف التحسسي',
  'treatments.cholesterol': 'ارتفاع الكوليسترول',
  'treatments.kidneyStones': 'حصى الكلى',
  'treatments.gout': 'النقرس',
  'treatments.hepatitis': 'التهاب الكبد',
  'treatments.tuberculosis': 'السل',
  'treatments.ulcer': 'قرحة المعدة',
  'treatments.eczema': 'الإكزيما',
  'treatments.psoriasis': 'الصدفية',
  'treatments.varicoseVeins': 'الدوالي',
  'treatments.ibs': 'متلازمة القولون العصبي',
  'treatments.viewAll': 'عرض جميع العلاجات',
  
  // Location
  'location.title': 'ابحث عن الأقرب',
  'location.hospitals': 'المستشفيات',
  'location.pharmacies': 'الصيدليات',
  'location.healthCenters': 'المراكز الصحية',
  'location.mentalHealthCenters': 'مراكز الصحة النفسية',
  'location.findNow': 'ابحث الآن',
  
  // Daily Tip
  'dailyTip.title': 'نصيحة اليوم الصحية',
  'dailyTip.enable': 'تفعيل الإشعارات اليومية',
  'dailyTip.disable': 'إيقاف الإشعارات',
  
  // Diet Plan
  'diet.title': 'نظام غذائي مخصص',
  'diet.subtitle': 'احصل على نظام غذائي مخصص بناءً على طولك ووزنك وعمرك',
  'diet.height': 'الطول',
  'diet.weight': 'الوزن',
  'diet.age': 'العمر',
  'diet.calculate': 'احسب نظامي الغذائي',
  'diet.bmi': 'مؤشر كتلة الجسم',
  'diet.category': 'التصنيف',
  'diet.calories': 'السعرات اليومية',
  'diet.planTitle': 'نظامك الغذائي المخصص',
  'diet.breakfast': 'الإفطار',
  'diet.lunch': 'الغداء',
  'diet.dinner': 'العشاء',
  'diet.snacks': 'الوجبات الخفيفة',
  'diet.disclaimer': 'هذا نظام غذائي عام. يرجى استشارة أخصائي رعاية صحية أو أخصائي تغذية للحصول على نصائح مخصصة.',
  
  // Theme
  'theme.toggle': 'تبديل المظهر',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'ar', t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
