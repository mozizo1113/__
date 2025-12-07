import { HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ = () => {
  const { language } = useLanguage();

  const faqs = [
    {
      id: 'q1',
      questionAr: 'ما هي أهمية موقع إسعفني للمجتمع؟',
      questionEn: 'What is the importance of Es3efny website for the community?',
      answerAr: 'موقع إسعفني يوفر معلومات طبية موثوقة ونصائح إسعافات أولية للمجتمع، مما يساعد الأفراد على اتخاذ قرارات صحية سليمة وسريعة في حالات الطوارئ.',
      answerEn: 'Es3efny website provides reliable medical information and first aid tips to the community, helping individuals make sound and quick health decisions in emergency situations.'
    },
    {
      id: 'q2',
      questionAr: 'كيف يساعد الموقع في حالات الطوارئ؟',
      questionEn: 'How does the website help in emergency situations?',
      answerAr: 'يوفر الموقع أرقام الطوارئ المهمة في مصر، نصائح إسعافات أولية مفصلة، وخاصية البحث عن أقرب مستشفى أو صيدلية باستخدام خرائط جوجل.',
      answerEn: 'The website provides important emergency numbers in Egypt, detailed first aid tips, and a feature to search for the nearest hospital or pharmacy using Google Maps.'
    },
    {
      id: 'q3',
      questionAr: 'هل المعلومات الطبية الموجودة على الموقع موثوقة؟',
      questionEn: 'Is the medical information on the website reliable?',
      answerAr: 'نعم، جميع المعلومات مبنية على مصادر طبية موثوقة ومراجعة من قبل متخصصين، ولكن ننصح دائماً باستشارة طبيب مختص للحالات الخطيرة.',
      answerEn: 'Yes, all information is based on reliable medical sources and reviewed by specialists, but we always recommend consulting a doctor for serious cases.'
    },
    {
      id: 'q4',
      questionAr: 'كيف يفيد النظام الغذائي المخصص المستخدمين؟',
      questionEn: 'How does the personalized diet plan benefit users?',
      answerAr: 'النظام الغذائي المخصص يحسب أفضل نظام غذائي بناءً على الطول والوزن والعمر، مما يساعد المستخدمين على تحسين صحتهم وتحقيق أهدافهم الصحية.',
      answerEn: 'The personalized diet plan calculates the best diet based on height, weight, and age, helping users improve their health and achieve their health goals.'
    },
    {
      id: 'q5',
      questionAr: 'ما الذي يميز موقع إسعفني عن غيره من المواقع الطبية؟',
      questionEn: 'What distinguishes Es3efny from other medical websites?',
      answerAr: 'الموقع يدعم اللغة العربية والإنجليزية، متخصص في السوق المصري، يوفر معلومات عن أسعار الأدوية المحلية، ويحتوي على بوت مساعد لشرح خصائص الموقع.',
      answerEn: 'The website supports Arabic and English, specializes in the Egyptian market, provides information on local medication prices, and includes a guide bot to explain website features.'
    },
    {
      id: 'q6',
      questionAr: 'هل يمكن الاعتماد على الموقع كبديل للطبيب؟',
      questionEn: 'Can the website be relied upon as a substitute for a doctor?',
      answerAr: 'لا، الموقع يقدم معلومات إرشادية فقط ولا يمكن أن يحل محل استشارة الطبيب المختص. في حالات الطوارئ الخطيرة، يجب الاتصال بالإسعاف فوراً.',
      answerEn: 'No, the website provides guidance information only and cannot replace a doctor\'s consultation. In serious emergencies, you should call an ambulance immediately.'
    },
    {
      id: 'q7',
      questionAr: 'كيف يساهم الموقع في رفع الوعي الصحي في المجتمع؟',
      questionEn: 'How does the website contribute to raising health awareness in the community?',
      answerAr: 'من خلال النصائح الصحية اليومية، معلومات عن الأمراض وأعراضها، إرشادات الإسعافات الأولية، والأنظمة الغذائية المخصصة - كل هذا يساعد على نشر الوعي الصحي.',
      answerEn: 'Through daily health tips, information about diseases and their symptoms, first aid guidelines, and personalized diet plans - all of this helps spread health awareness.'
    },
    {
      id: 'q8',
      questionAr: 'هل يوفر الموقع معلومات عن الصحة النفسية؟',
      questionEn: 'Does the website provide information about mental health?',
      answerAr: 'نعم، الموقع يحتوي على قسم شامل للصحة النفسية يغطي الأمراض النفسية الشائعة وأعراضها وطرق العلاج المتاحة في مصر.',
      answerEn: 'Yes, the website contains a comprehensive mental health section covering common mental illnesses, their symptoms, and available treatments in Egypt.'
    },
    {
      id: 'q9',
      questionAr: 'ما فائدة حاسبة مؤشر كتلة الجسم BMI؟',
      questionEn: 'What is the benefit of the BMI calculator?',
      answerAr: 'حاسبة BMI تساعدك على معرفة ما إذا كان وزنك مناسباً لطولك، وتعطيك مؤشراً على حالتك الصحية، مما يساعد في اتخاذ قرارات حول النظام الغذائي والرياضة.',
      answerEn: 'The BMI calculator helps you know if your weight is appropriate for your height, giving you an indicator of your health status, which helps in making decisions about diet and exercise.'
    },
    {
      id: 'q10',
      questionAr: 'كيف يمكنني العثور على أقرب صيدلية أو مستشفى؟',
      questionEn: 'How can I find the nearest pharmacy or hospital?',
      answerAr: 'الموقع يوفر خاصية البحث عن أقرب المستشفيات والصيدليات والمراكز الصحية باستخدام موقعك الجغرافي عبر خرائط جوجل، مما يوفر عليك الوقت في حالات الطوارئ.',
      answerEn: 'The website provides a feature to search for the nearest hospitals, pharmacies, and health centers using your geographic location via Google Maps, saving you time in emergencies.'
    },
    {
      id: 'q11',
      questionAr: 'هل الموقع متاح بأكثر من لغة؟',
      questionEn: 'Is the website available in more than one language?',
      answerAr: 'نعم، الموقع يدعم اللغة العربية والإنجليزية بالكامل، ويمكنك التبديل بينهما بسهولة عبر زر اللغة في الأعلى.',
      answerEn: 'Yes, the website fully supports Arabic and English, and you can easily switch between them using the language button at the top.'
    },
    {
      id: 'q12',
      questionAr: 'هل يمكنني الحصول على معلومات عن أسعار الأدوية؟',
      questionEn: 'Can I get information about medication prices?',
      answerAr: 'نعم، الموقع يعرض أسعار الأدوية في السوق المصري مع معلومات عن الجرعات الموصى بها، مما يساعدك على التخطيط المالي للعلاج.',
      answerEn: 'Yes, the website displays medication prices in the Egyptian market with information about recommended dosages, helping you plan financially for treatment.'
    },
    {
      id: 'q13',
      questionAr: 'ماذا أفعل في حالة الطوارئ الطبية؟',
      questionEn: 'What should I do in a medical emergency?',
      answerAr: 'في حالات الطوارئ الخطيرة، اتصل فوراً بأرقام الطوارئ (الإسعاف: 123، الشرطة: 122، الإطفاء: 180). استخدم نصائح الإسعافات الأولية الموجودة على الموقع كدعم مؤقت فقط حتى وصول المساعدة الطبية.',
      answerEn: 'In serious emergencies, immediately call emergency numbers (Ambulance: 123, Police: 122, Fire: 180). Use the first aid tips on the website as temporary support only until medical help arrives.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'إجابات على أهم الأسئلة حول أهمية الموقع وخدماته للمجتمع'
              : 'Answers to key questions about the website\'s importance and services to the community'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-background rounded-lg border shadow-sm px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">
                    {language === 'ar' ? faq.questionAr : faq.questionEn}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {language === 'ar' ? faq.answerAr : faq.answerEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
