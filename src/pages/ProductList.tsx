import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { products } from '../data/products';

interface ProductListProps {
  searchQuery: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchQuery }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Initialize category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = !selectedCategory || product.category === selectedCategory;

    // Price filter
    let matchesPrice = true;
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-');
      if (max === '+') {
        matchesPrice = product.price >= parseInt(min);
      } else if (min && max) {
        matchesPrice = product.price >= parseInt(min) && product.price <= parseInt(max);
      }
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryTitle = () => {
    if (selectedCategory === 'homme') return 'Parfums Homme';
    if (selectedCategory === 'femme') return 'Parfums Femme';
    if (selectedCategory === 'unisexe') return 'Parfums Unisexe';
    return 'Tous les Parfums';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            {getCategoryTitle()}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light">
            {searchQuery && (
              <>Résultats pour "<span className="font-semibold text-amber-600">{searchQuery}</span>" • </>
            )}
            <span className="font-semibold">{filteredProducts.length}</span> parfum{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Filters */}
        <Filters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-gray-400 mb-8">
              <svg className="mx-auto h-32 w-32 md:h-40 md:w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Aucun parfum trouvé</h3>
            <p className="text-lg text-gray-600 font-light">
              Essayez de modifier vos filtres ou votre recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;