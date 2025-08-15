import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Sparkles, Award, Users, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
<div className="absolute inset-0 overflow-hidden">
  <div
    className="w-full h-full bg-cover bg-center bg-no-repeat scale-110 md:scale-105 transition-transform duration-[20s] ease-out"
    style={{
      backgroundImage: "url('https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg')",
      minHeight: "100vh",
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-black/80 via-purple-900/30 to-black/80" />
</div>

        {/* Floating elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-amber-400/30 to-yellow-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-l from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-amber-300/40 to-yellow-400/40 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/4 right-1/3 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md text-amber-200 text-xs md:text-sm font-semibold rounded-full border border-amber-400/40 shadow-lg animate-pulse">
              ✨ Collection Exclusive 2025
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="block text-white mb-1 md:mb-2 drop-shadow-2xl">L'Art de la</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 animate-pulse drop-shadow-lg">
              Parfumerie
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-2 drop-shadow-lg">
            Découvrez notre collection exclusive de parfums de luxe.<br/>
            <span className="text-amber-200 font-semibold hidden sm:inline drop-shadow-md">Des fragrances uniques pour révéler votre essence.</span>
            <span className="text-amber-200 font-semibold sm:hidden drop-shadow-md">Des fragrances uniques.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-2">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white font-bold text-sm md:text-lg rounded-full hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 transition-all duration-700 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/50 w-full sm:w-auto justify-center border-2 border-amber-400/30 backdrop-blur-sm"
            >
              <span className="mr-2 md:mr-3">Découvrir la collection</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/products?category=unisexe"
              className="group inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-white/10 backdrop-blur-md text-white font-semibold text-sm md:text-lg rounded-full hover:bg-white/20 transition-all duration-700 border-2 border-white/40 hover:border-white/60 shadow-2xl hover:shadow-white/20 w-full sm:w-auto justify-center"
            >
              <span className="mr-2 md:mr-3">Parfums unisexes</span>
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-yellow-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-xs md:text-sm text-gray-200 font-medium">Parfums exclusifs</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-yellow-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">10k+</div>
              <div className="text-xs md:text-sm text-gray-200 font-medium">Clients satisfaits</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-yellow-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">15</div>
              <div className="text-xs md:text-sm text-gray-200 font-medium">Années d'expertise</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors duration-300">
            <div className="w-1.5 h-4 bg-gradient-to-b from-amber-300 to-yellow-400 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-yellow-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100/20 to-yellow-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-sm font-semibold rounded-full mb-6 shadow-lg">
              🏆 Excellence & Tradition
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
              Pourquoi choisir notre parfumerie ?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-4 leading-relaxed font-light">
              Depuis 15 ans, nous sélectionnons les plus belles fragrances pour vous offrir 
              <span className="text-amber-600 font-semibold"> une expérience olfactive d'exception</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 border-4 border-white">
                  <Truck className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-white text-sm md:text-base font-bold">✓</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 group-hover:text-amber-600 transition-colors duration-300">Livraison Express</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-2 font-light">Livraison gratuite dès 50€ d'achat. Expédition sous 24h partout en France avec suivi en temps réel.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform -rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 border-4 border-white">
                  <Award className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 group-hover:text-amber-600 transition-colors duration-300">Authenticité Garantie</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-2 font-light">Tous nos parfums sont 100% authentiques, directement importés des maisons de parfum. Garantie satisfait ou remboursé.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 border-4 border-white">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 group-hover:text-amber-600 transition-colors duration-300">Conseil Expert</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-2 font-light">Nos parfumeurs experts vous accompagnent pour trouver votre fragrance idéale. Service client disponible 7j/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-yellow-100/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 text-amber-800 text-sm md:text-base font-bold rounded-full mb-8 shadow-xl border border-amber-200">
              ⭐ Sélection Premium
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
              Nos Coups de Cœur
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 font-light">
              Une sélection exclusive de nos parfums les plus appréciés par nos clients. 
              <span className="text-amber-600 font-semibold hidden sm:inline">Découvrez les fragrances qui font sensation.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 md:px-12 md:py-6 border-3 border-amber-600 text-amber-600 font-bold text-base md:text-lg rounded-full hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 hover:text-white transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/40 bg-white/80 backdrop-blur-sm"
            >
              <span className="mr-3 md:mr-4">Voir tous les parfums</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-500 via-amber-600 to-yellow-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-white/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-tl from-white/15 to-amber-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-96 md:h-96 bg-gradient-to-r from-white/10 to-yellow-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-2xl animate-bounce"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10">
            <span className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white/20 backdrop-blur-md text-white text-sm md:text-base font-bold rounded-full border-2 border-white/40 shadow-2xl">
              🎯 Trouvez votre signature
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 md:mb-10 leading-tight drop-shadow-2xl">
            Trouvez votre signature olfactive
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed px-4 font-light drop-shadow-lg">
            Laissez-vous guider par nos experts parfumeurs pour découvrir 
            <span className="text-yellow-200 font-bold hidden sm:inline"> le parfum qui révélera votre personnalité unique.</span>
            <span className="text-yellow-200 font-bold sm:hidden"> votre parfum idéal.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center px-4">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-white text-amber-600 font-black text-base md:text-lg rounded-full hover:bg-gray-50 hover:shadow-white/50 transition-all duration-700 transform hover:scale-110 shadow-2xl w-full sm:w-auto justify-center border-4 border-white/20"
            >
              <span className="mr-3 md:mr-4">Commencer le quiz</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/products?category=unisexe"
              className="group inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-white/10 text-white font-bold text-base md:text-lg rounded-full border-3 border-white/60 hover:border-white hover:bg-white/20 transition-all duration-700 backdrop-blur-md shadow-2xl hover:shadow-white/30 w-full sm:w-auto justify-center"
            >
              <span className="mr-3 md:mr-4">Explorer les collections</span>
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/90">
            <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-medium">Paiement sécurisé</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Truck className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-medium">Livraison 24h</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              <span className="text-sm md:text-base font-medium">+10k avis 5 étoiles</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;