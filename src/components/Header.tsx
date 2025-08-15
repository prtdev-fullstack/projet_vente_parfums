import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const { totalItems, dispatch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isParfumsDropdownOpen, setIsParfumsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16 py-4 md:py-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Parfumerie</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Accueil
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsParfumsDropdownOpen(true)}
              onMouseLeave={() => setIsParfumsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Parfums
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isParfumsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    Tous les parfums
                  </Link>
                  <Link
                    to="/products?category=homme"
                    className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    Homme
                  </Link>
                  <Link
                    to="/products?category=femme"
                    className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    Femme
                  </Link>
                  <Link
                    to="/products?category=unisexe"
                    className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    Unisexe
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un parfum..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher un parfum..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
                <button
                  className="flex items-center justify-between text-gray-700 hover:text-amber-600 font-medium py-2 w-full"
                  onClick={() => setIsParfumsDropdownOpen(!isParfumsDropdownOpen)}
                >
                  Parfums
                  <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isParfumsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isParfumsDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-1">
                    <Link
                      to="/products"
                      className="text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Tous les parfums
                    </Link>
                    <Link
                      to="/products?category=homme"
                      className="text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Homme
                    </Link>
                    <Link
                      to="/products?category=femme"
                      className="text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Femme
                    </Link>
                    <Link
                      to="/products?category=unisexe"
                      className="text-gray-700 hover:text-amber-600 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Unisexe
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
