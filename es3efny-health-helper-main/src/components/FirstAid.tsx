import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { firstAidTips } from '@/data/firstAidTips';
import { Heart, Search, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define categories based on first aid tip types
const categories = [
  { id: 'all', nameAr: 'الكل' },
  { id: 'injuries', nameAr: 'الإصابات والجروح' },
  { id: 'breathing', nameAr: 'مشاكل التنفس' },
  { id: 'burns', nameAr: 'الحروق' },
  { id: 'bites', nameAr: 'اللدغات والعضات' },
  { id: 'medical', nameAr: 'الحالات الطبية' },
  { id: 'other', nameAr: 'أخرى' }
];

// Map first aid tips to categories
const getCategoryForTip = (tipId: number): string => {
  const injuriesIds = [1, 2, 3, 6, 13, 14];
  const breathingIds = [4, 5];
  const burnsIds = [7];
  const bitesIds = [8, 10];
  const medicalIds = [9, 11, 12];
  
  if (injuriesIds.includes(tipId)) return 'injuries';
  if (breathingIds.includes(tipId)) return 'breathing';
  if (burnsIds.includes(tipId)) return 'burns';
  if (bitesIds.includes(tipId)) return 'bites';
  if (medicalIds.includes(tipId)) return 'medical';
  return 'other';
};

export const FirstAid = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const filteredTips = firstAidTips.filter(tip => {
    const tipCategory = getCategoryForTip(tip.id);
    const matchesCategory = selectedCategory === 'all' || tipCategory === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      tip.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.descriptionAr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedTips = showAll ? filteredTips : filteredTips.slice(0, 6);

  const toggleCard = (id: number) => {
    const idStr = id.toString();
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idStr)) {
        newSet.delete(idStr);
      } else {
        newSet.add(idStr);
      }
      return newSet;
    });
  };

  return (
    <section id="first-aid" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('firstAid.title')}
          </h2>
        </div>

        <div className="max-w-xl mx-auto mb-12 space-y-4">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 shadow-soft border-2">
                <SelectValue placeholder="اختر الفئة" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border z-50">
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.nameAr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('firstAid.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 shadow-soft border-2 focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {displayedTips.map((tip) => {
            const isExpanded = expandedCards.has(tip.id.toString());
            return (
              <Card key={tip.id} className="p-6 shadow-card hover:shadow-soft transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary flex-1">
                    {tip.titleAr}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCard(tip.id)}
                    className="ml-2"
                  >
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {tip.descriptionAr}
                </p>
                {isExpanded && (
                  <ol className="space-y-2 text-sm">
                    {tip.stepsAr.map((step, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="font-semibold text-primary">{index + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </Card>
            );
          })}
        </div>

        {filteredTips.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-2 border-primary hover:bg-primary/10"
            >
              {showAll ? 'عرض أقل' : 'عرض المزيد'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
