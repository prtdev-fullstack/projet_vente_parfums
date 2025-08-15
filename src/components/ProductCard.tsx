import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', product });
    dispatch({ type: 'OPEN_CART' });
  };

  const categoryColors = {
    homme: 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200',
    femme: 'bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 border border-pink-200',
    unisexe: 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border border-purple-200'
  };

  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2 hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <span className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${categoryColors[product.category]}`}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-br from-amber-400 to-yellow-500 text-white p-3 rounded-full shadow-lg border-2 border-white animate-pulse">
              <Star className="w-5 h-5 fill-current drop-shadow-sm" />
            </div>
          )}
          
          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-4 right-4 bg-gradient-to-br from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">{product.brand}</p>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                {product.name}
              </h3>
            </div>
          </div>

          <p className="text-gray-600 text-base mb-6 line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-black text-gray-900">
                {product.price}€
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through font-medium">
                  {product.originalPrice}€
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      <div className="px-8 pb-8">
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 border-2 border-amber-500/20"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Ajouter au panier</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;