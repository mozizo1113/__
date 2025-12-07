import { MapPin, Building2, Cross } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const locations = [
  { 
    name: 'location.hospitals', 
    icon: Cross, 
    searchQuery: 'hospitals near me',
    color: 'primary' 
  },
  { 
    name: 'location.pharmacies', 
    icon: Building2, 
    searchQuery: 'pharmacies near me',
    color: 'secondary' 
  },
  { 
    name: 'location.healthCenters', 
    icon: MapPin, 
    searchQuery: 'health centers near me',
    color: 'primary' 
  },
  { 
    name: 'location.mentalHealthCenters', 
    icon: Building2, 
    searchQuery: 'mental health clinics near me',
    color: 'primary' 
  },
];

export const LocationSearch = () => {
  const { t } = useLanguage();

  const handleLocationSearch = (searchQuery: string) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}/@${latitude},${longitude},15z`;
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          console.error('Location error:', error);
          toast.error(
            language === 'ar' 
              ? 'تعذر الوصول إلى موقعك. سيتم البحث بدون موقعك الحالي.'
              : 'Unable to access your location. Searching without your current location.'
          );
          const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
          window.open(mapsUrl, '_blank');
        }
      );
    } else {
      const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
      window.open(mapsUrl, '_blank');
    }
  };

  const { language } = useLanguage();

  return (
    <section id="location" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('location.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {locations.map((location) => {
            const Icon = location.icon;
            const isSecondary = location.color === 'secondary';
            
            return (
              <Card
                key={location.searchQuery}
                className="p-6 text-center shadow-card hover:shadow-soft transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isSecondary ? 'bg-secondary/10' : 'bg-primary/10'
                }`}>
                  <Icon className={`h-8 w-8 ${isSecondary ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {t(location.name)}
                </h3>
                <Button
                  onClick={() => handleLocationSearch(location.searchQuery)}
                  className={`w-full ${
                    isSecondary 
                      ? 'bg-gradient-wellness hover:opacity-90' 
                      : 'bg-gradient-medical hover:opacity-90'
                  }`}
                >
                  {t('location.findNow')}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
