import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (range: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange
}) => {
  const categories = [
    { value: '', label: 'Tous' },
    { value: 'homme', label: 'Homme' },
    { value: 'femme', label: 'Femme' },
    { value: 'unisexe', label: 'Unisexe' }
  ];

  const priceRanges = [
    { value: '', label: 'Tous les prix' },
    { value: '0-50', label: 'Moins de 50€' },
    { value: '50-100', label: '50€ - 100€' },
    { value: '100-150', label: '100€ - 150€' },
    { value: '150+', label: 'Plus de 150€' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12 backdrop-blur-sm bg-white/90">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-3">
          <Filter className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold text-gray-900 text-xl">Filtres</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Category Filter */}
        <div>
          <label className="block text-base font-bold text-gray-700 mb-3">
            Catégorie
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 font-medium bg-gray-50 hover:bg-white"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label className="block text-base font-bold text-gray-700 mb-3">
            Prix
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 font-medium bg-gray-50 hover:bg-white"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;