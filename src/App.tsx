import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import ScrollToTop from './components/ScrollToTop'; // Assure-toi que ce fichier existe

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <Router>
        {/* Scroll to top on route change */}
        <ScrollToTop />

        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Main content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList searchQuery={searchQuery} />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Cart */}
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
