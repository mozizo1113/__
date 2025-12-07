import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { Apple, Calculator } from 'lucide-react';

interface UserData {
  height: string;
  weight: string;
  age: string;
}

interface DietPlanResult {
  bmi: number;
  category: string;
  dailyCalories: number;
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[];
}

export const DietPlan = () => {
  const { t, language } = useLanguage();
  const [userData, setUserData] = useState<UserData>({ height: '', weight: '', age: '' });
  const [dietPlan, setDietPlan] = useState<DietPlanResult | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('dietUserData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setUserData(parsed);
    }
  }, []);

  const calculateBMI = (weight: number, height: number): number => {
    const heightInMeters = height / 100;
    return parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return language === 'ar' ? 'نحيف' : 'Underweight';
    if (bmi < 25) return language === 'ar' ? 'وزن طبيعي' : 'Normal weight';
    if (bmi < 30) return language === 'ar' ? 'وزن زائد' : 'Overweight';
    return language === 'ar' ? 'سمنة' : 'Obese';
  };

  const calculateDailyCalories = (weight: number, height: number, age: number): number => {
    // Harris-Benedict Equation for men (simplified)
    let bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    
    // Adjust based on weight categories
    if (weight < 50) {
      bmr = bmr * 1.25; // Need more calories to gain weight
    } else if (weight >= 100) {
      bmr = bmr * 0.8; // Need fewer calories to lose weight
    } else if (weight >= 50 && weight < 100) {
      bmr = bmr * 0.95; // Moderate calorie adjustment
    }
    
    return Math.round(bmr);
  };

  const generateDietPlan = (): void => {
    const height = parseFloat(userData.height);
    const weight = parseFloat(userData.weight);
    const age = parseFloat(userData.age);

    if (!height || !weight || !age) return;

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    const dailyCalories = calculateDailyCalories(weight, height, age);

    const plans = {
      veryLight: {
        breakfastAr: ['4 بيضات مسلوقة', 'خبز أسمر (3 شرائح)', 'عصير برتقال طازج', 'جبنة كاملة الدسم', 'زبدة فول سوداني'],
        breakfastEn: ['4 boiled eggs', 'Brown bread (3 slices)', 'Fresh orange juice', 'Full-fat cheese', 'Peanut butter'],
        lunchAr: ['أرز (كوبان)', 'دجاج أو لحم مشوي (300 جم)', 'سلطة خضراء بزيت الزيتون', 'خضار مطبوخ', 'خبز'],
        lunchEn: ['Rice (2 cups)', 'Grilled chicken or meat (300g)', 'Green salad with olive oil', 'Cooked vegetables', 'Bread'],
        dinnerAr: ['سمك أو دجاج مشوي (250 جم)', 'بطاطس مهروسة', 'خضار مشوي', 'خبز', 'زبادي كامل الدسم'],
        dinnerEn: ['Grilled fish or chicken (250g)', 'Mashed potatoes', 'Grilled vegetables', 'Bread', 'Full-fat yogurt'],
        snacksAr: ['مكسرات (100 جم)', 'موز', 'زبادي كامل الدسم', 'عصير طبيعي', 'تمر (5 حبات)'],
        snacksEn: ['Nuts (100g)', 'Banana', 'Full-fat yogurt', 'Natural juice', 'Dates (5 pieces)']
      },
      moderate: {
        breakfastAr: ['2 بيضة مسلوقة', 'خبز أسمر (شريحتان)', 'حليب قليل الدسم', 'فواكه طازجة'],
        breakfastEn: ['2 boiled eggs', 'Brown bread (2 slices)', 'Low-fat milk', 'Fresh fruits'],
        lunchAr: ['أرز (كوب واحد)', 'لحم أو دجاج مشوي (150 جم)', 'سلطة خضراء', 'خضار مسلوق'],
        lunchEn: ['Rice (1 cup)', 'Grilled meat or chicken (150g)', 'Green salad', 'Boiled vegetables'],
        dinnerAr: ['شوربة خضار', 'سمك أو دجاج مشوي (120 جم)', 'سلطة', 'زبادي قليل الدسم'],
        dinnerEn: ['Vegetable soup', 'Grilled fish or chicken (120g)', 'Salad', 'Low-fat yogurt'],
        snacksAr: ['تفاح', 'خيار', 'جزر', 'زبادي قليل الدسم', 'حفنة مكسرات'],
        snacksEn: ['Apple', 'Cucumber', 'Carrots', 'Low-fat yogurt', 'Handful of nuts']
      },
      heavy: {
        breakfastAr: ['بيضة مسلوقة واحدة', 'خبز أسمر (شريحة واحدة)', 'خيار وطماطم', 'شاي أخضر', 'زبادي خالي الدسم'],
        breakfastEn: ['1 boiled egg', 'Brown bread (1 slice)', 'Cucumber and tomatoes', 'Green tea', 'Fat-free yogurt'],
        lunchAr: ['أرز بني (نصف كوب)', 'صدر دجاج مسلوق (100 جم)', 'سلطة خضراء كبيرة بدون زيت', 'شوربة خضار بدون دسم'],
        lunchEn: ['Brown rice (half cup)', 'Boiled chicken breast (100g)', 'Large green salad without oil', 'Fat-free vegetable soup'],
        dinnerAr: ['سمك مشوي (80 جم)', 'خضار مسلوق', 'سلطة خضراء', 'زبادي خالي الدسم'],
        dinnerEn: ['Grilled fish (80g)', 'Boiled vegetables', 'Green salad', 'Fat-free yogurt'],
        snacksAr: ['خيار', 'طماطم', 'خس', 'شاي أخضر', 'ماء بالليمون'],
        snacksEn: ['Cucumber', 'Tomatoes', 'Lettuce', 'Green tea', 'Lemon water']
      }
    };

    let selectedPlan;
    if (weight < 50) selectedPlan = plans.veryLight;
    else if (weight >= 50 && weight < 100) selectedPlan = plans.moderate;
    else selectedPlan = plans.heavy;

    const result: DietPlanResult = {
      bmi,
      category,
      dailyCalories,
      breakfast: language === 'ar' ? selectedPlan.breakfastAr : selectedPlan.breakfastEn,
      lunch: language === 'ar' ? selectedPlan.lunchAr : selectedPlan.lunchEn,
      dinner: language === 'ar' ? selectedPlan.dinnerAr : selectedPlan.dinnerEn,
      snacks: language === 'ar' ? selectedPlan.snacksAr : selectedPlan.snacksEn
    };

    setDietPlan(result);
    setShowPlan(true);
    localStorage.setItem('dietUserData', JSON.stringify(userData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateDietPlan();
  };

  return (
    <section id="diet-plan" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
            <Apple className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('diet.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('diet.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="height">{t('diet.height')}</Label>
                  <div className="relative">
                    <Input
                      id="height"
                      type="number"
                      placeholder="170"
                      value={userData.height}
                      onChange={(e) => setUserData({ ...userData, height: e.target.value })}
                      className="pr-12"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                      {language === 'ar' ? 'سم' : 'cm'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">{t('diet.weight')}</Label>
                  <div className="relative">
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={userData.weight}
                      onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                      className="pr-12"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                      {language === 'ar' ? 'كجم' : 'kg'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">{t('diet.age')}</Label>
                  <div className="relative">
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={userData.age}
                      onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                      className="pr-16"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                      {language === 'ar' ? 'سنة' : 'years'}
                    </span>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-wellness hover:opacity-90"
                size="lg"
              >
                <Calculator className="h-5 w-5 mr-2" />
                {t('diet.calculate')}
              </Button>
            </form>

            {showPlan && dietPlan && (
              <div className="mt-8 space-y-6 border-t pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">{t('diet.bmi')}</p>
                    <p className="text-2xl font-bold text-primary">{dietPlan.bmi}</p>
                  </Card>
                  <Card className="p-4 bg-secondary/5 border-secondary/20">
                    <p className="text-sm text-muted-foreground mb-1">{t('diet.category')}</p>
                    <p className="text-2xl font-bold text-secondary">{dietPlan.category}</p>
                  </Card>
                  <Card className="p-4 bg-accent/30">
                    <p className="text-sm text-muted-foreground mb-1">{t('diet.calories')}</p>
                    <p className="text-2xl font-bold">{dietPlan.dailyCalories}</p>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{t('diet.planTitle')}</h3>
                  
                  <Card className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
                    <h4 className="font-semibold mb-3 text-lg">{t('diet.breakfast')}</h4>
                    <ul className="space-y-2">
                      {dietPlan.breakfast.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                    <h4 className="font-semibold mb-3 text-lg">{t('diet.lunch')}</h4>
                    <ul className="space-y-2">
                      {dietPlan.lunch.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
                    <h4 className="font-semibold mb-3 text-lg">{t('diet.dinner')}</h4>
                    <ul className="space-y-2">
                      {dietPlan.dinner.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                    <h4 className="font-semibold mb-3 text-lg">{t('diet.snacks')}</h4>
                    <ul className="space-y-2">
                      {dietPlan.snacks.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <p className="text-sm text-amber-900 dark:text-amber-100">
                    {t('diet.disclaimer')}
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
