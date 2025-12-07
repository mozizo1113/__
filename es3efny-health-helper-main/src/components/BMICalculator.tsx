import { Calculator } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export const BMICalculator = () => {
  const { language } = useLanguage();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      // تصنيف BMI
      if (bmiValue < 18.5) {
        setCategory(language === 'ar' ? 'نقص الوزن' : 'Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory(language === 'ar' ? 'وزن طبيعي' : 'Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory(language === 'ar' ? 'زيادة الوزن' : 'Overweight');
      } else {
        setCategory(language === 'ar' ? 'سمنة' : 'Obese');
      }
    }
  };

  const getCategoryColor = () => {
    if (!bmi) return 'text-muted-foreground';
    if (bmi < 18.5) return 'text-blue-500';
    if (bmi >= 18.5 && bmi < 25) return 'text-green-500';
    if (bmi >= 25 && bmi < 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section id="bmi-calculator" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'حاسبة مؤشر كتلة الجسم (BMI)' : 'BMI Calculator (Body Mass Index)'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'احسب مؤشر كتلة جسمك لمعرفة ما إذا كان وزنك مناسباً لطولك'
              : 'Calculate your BMI to know if your weight is appropriate for your height'}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'ar' ? 'الطول (سم)' : 'Height (cm)'}
                </label>
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={language === 'ar' ? 'أدخل طولك' : 'Enter your height'}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'ar' ? 'الوزن (كجم)' : 'Weight (kg)'}
                </label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={language === 'ar' ? 'أدخل وزنك' : 'Enter your weight'}
                  className="h-12"
                />
              </div>
            </div>

            <Button 
              onClick={calculateBMI} 
              className="w-full h-12 text-lg mb-6"
              disabled={!height || !weight}
            >
              {language === 'ar' ? 'احسب مؤشر كتلة الجسم' : 'Calculate BMI'}
            </Button>

            {bmi !== null && (
              <div className="text-center space-y-4 p-6 bg-accent/30 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'ar' ? 'مؤشر كتلة الجسم الخاص بك' : 'Your BMI'}
                  </p>
                  <p className="text-5xl font-bold text-primary">{bmi}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'ar' ? 'التصنيف' : 'Category'}
                  </p>
                  <p className={`text-2xl font-semibold ${getCategoryColor()}`}>
                    {category}
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' 
                      ? 'نصيحة: استشر طبيباً أو أخصائي تغذية للحصول على نصائح مخصصة لحالتك'
                      : 'Tip: Consult a doctor or nutritionist for personalized advice for your case'}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-semibold mb-4">
                {language === 'ar' ? 'تصنيفات مؤشر كتلة الجسم' : 'BMI Categories'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-blue-50 dark:bg-blue-950">
                  <span>{language === 'ar' ? 'نقص الوزن' : 'Underweight'}</span>
                  <span className="font-medium">{'< 18.5'}</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-green-50 dark:bg-green-950">
                  <span>{language === 'ar' ? 'وزن طبيعي' : 'Normal Weight'}</span>
                  <span className="font-medium">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-yellow-50 dark:bg-yellow-950">
                  <span>{language === 'ar' ? 'زيادة الوزن' : 'Overweight'}</span>
                  <span className="font-medium">25 - 29.9</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-red-50 dark:bg-red-950">
                  <span>{language === 'ar' ? 'سمنة' : 'Obese'}</span>
                  <span className="font-medium">≥ 30</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};