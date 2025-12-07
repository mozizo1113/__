import { useState } from 'react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { firstAidTips } from '@/data/firstAidTips';
import { diseases } from '@/data/diseases';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mentalHealthDiseaseIds = [
  'depression', 'bipolar', 'schizophrenia', 'ocd', 'ptsd', 
  'panic_disorder', 'social_anxiety', 'eating_disorder', 'adhd', 
  'autism', 'personality_disorder', 'substance_abuse', 'insomnia', 
  'phobia', 'dissociative', 'generalized_anxiety', 'seasonal_depression',
  'hoarding_disorder', 'body_dysmorphia', 'intermittent_explosive',
  'trichotillomania', 'dermatillomania', 'agoraphobia', 'adjustment_disorder',
  'somatoform', 'avoidant_personality', 'narcissistic_personality',
  'dependent_personality', 'paranoid_personality'
];

// Physical diseases (excluding mental health)
const physicalDiseases = diseases.filter(d => !mentalHealthDiseaseIds.includes(d.id));
const mentalHealthDiseases = diseases.filter(d => mentalHealthDiseaseIds.includes(d.id));

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold bg-gradient-medical bg-clip-text text-transparent">
              إسعفني
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-4 ms-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#about-section" className="text-sm font-medium hover:text-primary transition-colors">
              من نحن
            </a>
            <a href="#emergency" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.emergency')}
            </a>
            
            {/* First Aid Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                {t('nav.firstAid')}
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-64 overflow-y-auto bg-background border border-border z-50">
                <DropdownMenuItem onClick={() => scrollToSection('first-aid')}>
                  عرض الكل
                </DropdownMenuItem>
                {firstAidTips.slice(0, 10).map((tip) => (
                  <DropdownMenuItem key={tip.id} onClick={() => scrollToSection('first-aid')}>
                    {tip.titleAr}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Treatments Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                {t('nav.treatments')}
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-64 overflow-y-auto bg-background border border-border z-50">
                <DropdownMenuItem onClick={() => scrollToSection('treatments')}>
                  عرض الكل
                </DropdownMenuItem>
                {physicalDiseases.slice(0, 15).map((disease) => (
                  <DropdownMenuItem key={disease.id} onClick={() => scrollToSection('treatments')}>
                    {disease.nameAr}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mental Health Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                {t('nav.mentalHealth')}
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-64 overflow-y-auto bg-background border border-border z-50">
                <DropdownMenuItem onClick={() => scrollToSection('mental-health')}>
                  عرض الكل
                </DropdownMenuItem>
                {mentalHealthDiseases.slice(0, 15).map((disease) => (
                  <DropdownMenuItem key={disease.id} onClick={() => scrollToSection('mental-health')}>
                    {disease.nameAr}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#daily-tip" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.dailyTip')}
            </a>
            <a href="#bmi" className="text-sm font-medium hover:text-primary transition-colors">
              حساب BMI
            </a>
            <a href="#diet-plan" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.dietPlan')}
            </a>
            <a href="#location" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.nearestHospitals')}
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden rounded-full"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              <a 
                href="#home" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#about-section" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                من نحن
              </a>
              <a 
                href="#emergency" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.emergency')}
              </a>
              <a 
                href="#first-aid" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.firstAid')}
              </a>
              <a 
                href="#treatments" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.treatments')}
              </a>
              <a 
                href="#mental-health" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.mentalHealth')}
              </a>
              <a 
                href="#daily-tip" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.dailyTip')}
              </a>
              <a 
                href="#bmi" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                حساب BMI
              </a>
              <a 
                href="#diet-plan" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.dietPlan')}
              </a>
              <a 
                href="#location" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.nearestHospitals')}
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-2 hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                الأسئلة الشائعة
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
