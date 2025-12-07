import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { EmergencyNumbers } from '@/components/EmergencyNumbers';
import { FirstAid } from '@/components/FirstAid';
import { Treatments } from '@/components/Treatments';
import { MentalHealth } from '@/components/MentalHealth';
import { DailyTip } from '@/components/DailyTip';
import { BMICalculator } from '@/components/BMICalculator';
import { DietPlan } from '@/components/DietPlan';
import { LocationSearch } from '@/components/LocationSearch';
import { FAQ } from '@/components/FAQ';
import { SiteGuideBot } from '@/components/SiteGuideBot';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <EmergencyNumbers />
      <FirstAid />
      <Treatments />
      <MentalHealth />
      <DailyTip />
      <BMICalculator />
      <DietPlan />
      <LocationSearch />
      <FAQ />
      <SiteGuideBot />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;