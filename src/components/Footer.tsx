import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Parfumerie</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Découvrez notre collection exclusive de parfums de luxe. 
              Des fragrances uniques pour exprimer votre personnalité.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300 text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300 text-sm">contact@parfumerie.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300 text-sm">123 Rue de Rivoli, Paris</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Liens utiles</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                À propos
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Livraison & Retours
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Guide des tailles
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                CGV
              </a>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="px-4 py-2 bg-amber-600 text-white text-sm rounded-r-md hover:bg-amber-700 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Parfumerie. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;