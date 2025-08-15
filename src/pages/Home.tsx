import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Sparkles, Users, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 md:scale-100 transition-transform duration-2000"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-br from-black/70 via-purple-900/20 to-black/70" />

        {/* Floating gradient shapes */}
        <div className="absolute top-10 left-4 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-amber-400/30 to-yellow-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-l from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-200 text-xs md:text-sm font-semibold rounded-full border border-amber-400/40 shadow-md animate-pulse mb-6">
            ✨ Collection Exclusive 2025
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            <span className="block drop-shadow-2xl">L'Art de la</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 animate-pulse">Parfumerie</span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl mb-8">
            Découvrez notre collection exclusive de parfums de luxe. <br/>
            <span className="text-amber-200 font-semibold">Des fragrances uniques pour révéler votre essence.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="group flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              Découvrir la collection <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products?category=unisexe"
              className="group flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Parfums unisexes <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 font-semibold rounded-full mb-6">🏆 Excellence & Tradition</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Pourquoi choisir notre parfumerie ?</h2>
          <p className="text-gray-700 md:text-lg font-light max-w-3xl mx-auto">
            Depuis 15 ans, nous sélectionnons les plus belles fragrances pour vous offrir 
            <span className="text-amber-600 font-semibold"> une expérience olfactive d'exception</span>.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Truck className="w-10 h-10 text-white" />, title: "Livraison Express", desc: "Livraison gratuite dès 50€ d'achat sous 24h partout en France." },
              { icon: <Star className="w-10 h-10 text-white" />, title: "Authenticité Garantie", desc: "Tous nos parfums sont 100% authentiques et garantis." },
              { icon: <Users className="w-10 h-10 text-white" />, title: "Conseil Expert", desc: "Nos experts vous accompagnent pour trouver votre fragrance idéale." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 shadow-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-6 py-2 bg-amber-100 text-amber-800 font-bold rounded-full mb-6">⭐ Sélection Premium</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Nos Coups de Cœur</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            Une sélection exclusive de nos parfums les plus appréciés par nos clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link
            to="/products"
            className="mt-12 inline-flex items-center px-8 py-4 bg-white border-2 border-amber-600 text-amber-600 font-bold rounded-full hover:bg-amber-600 hover:text-white transition-colors shadow-md"
          >
            Voir tous les parfums <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 text-white text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block px-6 py-2 bg-white/20 text-white font-bold rounded-full mb-6">🎯 Trouvez votre signature</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Votre signature olfactive</h2>
          <p className="text-lg md:text-xl mb-10 font-light">Laissez nos experts vous guider pour découvrir le parfum qui révélera votre personnalité unique.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:scale-105 transition-transform shadow-md"
            >
              Commencer le quiz <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products?category=unisexe"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/50 hover:bg-white/20 transition-colors"
            >
              Explorer les collections <Sparkles className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90">
            {[{ icon: <Shield className="w-5 h-5"/>, text: "Paiement sécurisé" },
              { icon: <Truck className="w-5 h-5"/>, text: "Livraison 24h" },
              { icon: <Star className="w-5 h-5"/>, text: "+10k avis 5 étoiles" }].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                {item.icon} <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
