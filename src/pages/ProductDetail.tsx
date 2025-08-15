import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h2>
          <Link to="/products" className="text-amber-600 hover:text-amber-700">
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', product });
    dispatch({ type: 'OPEN_CART' });
  };

  const categoryColors = {
    homme: 'bg-blue-100 text-blue-800',
    femme: 'bg-pink-100 text-pink-800',
    unisexe: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-12 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200 w-fit">
          <Link to="/" className="hover:text-amber-600 transition-colors">
            Accueil
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/products" className="hover:text-amber-600 transition-colors">
            Parfums
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Back Button - Mobile */}
            <Link
              to="/products"
              className="lg:hidden inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors mb-6 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Link>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${categoryColors[product.category]}`}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <div className="flex items-center space-x-3">
                  <button className="p-3 text-gray-400 hover:text-red-500 transition-colors bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <p className="text-base text-gray-500 mb-2 font-medium uppercase tracking-wide">{product.brand}</p>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">{product.name}</h1>
              
              <div className="flex items-center space-x-6 mb-8">
                <span className="text-4xl font-black text-gray-900">
                  {product.price}€
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through font-medium">
                    {product.originalPrice}€
                  </span>
                )}
                {product.featured && (
                  <div className="flex items-center text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                    <Star className="w-5 h-5 fill-current mr-2" />
                    <span className="text-base font-bold">Coup de cœur</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg font-light bg-gray-50 p-6 rounded-2xl border border-gray-200">{product.longDescription}</p>
            </div>

            {/* Notes */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notes olfactives</h3>
              <div className="space-y-6 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="group">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Notes de tête</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.top.map((note, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 rounded-full text-sm font-semibold border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="group">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Notes de cœur</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.heart.map((note, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-800 rounded-full text-sm font-semibold border border-pink-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="group">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Notes de fond</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.base.map((note, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 rounded-full text-sm font-semibold border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white py-6 px-8 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-4 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/40 border-2 border-amber-500/30"
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Ajouter au panier</span>
              </button>
              
              <div className="grid grid-cols-2 gap-6">
                <button className="py-4 px-6 border-2 border-amber-600 text-amber-600 rounded-2xl font-bold hover:bg-amber-50 transition-colors shadow-lg hover:shadow-amber-500/20">
                  Acheter maintenant
                </button>
                <button className="py-4 px-6 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                  Guide des tailles
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t-2 border-gray-200">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 shadow-lg">
                <p className="font-bold text-gray-900 text-lg mb-1">Livraison gratuite</p>
                <p className="text-base text-gray-600">Dès 50€ d'achat</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 shadow-lg">
                <p className="font-bold text-gray-900 text-lg mb-1">Retour gratuit</p>
                <p className="text-base text-gray-600">Sous 30 jours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button - Desktop */}
        <div className="hidden lg:block mt-16">
          <Link
            to="/products"
            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200 hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Retour aux produits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;