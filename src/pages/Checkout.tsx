import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Building, Shield, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { state, totalPrice } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [orderComplete, setOrderComplete] = useState(false);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Carte bancaire',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express',
      popular: true
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: Smartphone,
      description: 'Paiement sécurisé avec PayPal'
    },
    {
      id: 'apple',
      name: 'Apple Pay',
      icon: Smartphone,
      description: 'Paiement rapide avec Touch ID'
    },
    {
      id: 'bank',
      name: 'Virement bancaire',
      icon: Building,
      description: 'Paiement par virement SEPA'
    },
    {
      id: 'wave',
      name: 'Wave',
      icon: Smartphone,
      description: 'Paiement mobile via Wave',
      logo: 'https://kickstartafrica.com/wp-content/uploads/2020/12/94377508_918638458565635_5520442085410340864_o.png'
    },
    {
      id: 'orange',
      name: 'Orange Money',
      icon: Smartphone,
      description: 'Paiement mobile via Orange Money',
      logo: 'https://yt3.ggpht.com/a/AATXAJxbPZsfcmu5uhgxzUruur3I8hf-sMLcTXhqXQ=s900-c-k-c0xffffffff-no-rj-mo'
    },
    {
      id: 'cod',
      name: 'Paiement à la livraison',
      icon: Building,
      description: 'Payez directement à la livraison'
    }
  ];

  const handleCompleteOrder = () => {
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-teal-200/30 to-green-200/30 rounded-full blur-2xl"></div>
        
        <div className="max-w-lg mx-auto text-center p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-pulse">
            <Check className="w-12 h-12 text-white drop-shadow-sm" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-6">Commande confirmée !</h1>
          <p className="text-lg text-gray-700 mb-10 font-light leading-relaxed">
            Merci pour votre achat. Vous recevrez un email de confirmation sous peu.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold text-lg rounded-2xl hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20 flex items-center justify-center">
        <div className="text-center p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Panier vide</h2>
          <p className="text-lg text-gray-600 mb-8 font-light">Ajoutez des parfums à votre panier pour continuer</p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold text-lg rounded-2xl hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
          >
            Découvrir nos parfums
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Link
            to="/products"
            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors mr-6 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">Finaliser la commande</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 backdrop-blur-sm bg-white/90">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Récapitulatif de commande</h2>
            <div className="space-y-6 mb-8">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-xl shadow-md" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{item.product.name}</h3>
                    <p className="text-base text-gray-500 font-medium">{item.product.brand}</p>
                    <p className="text-base text-gray-600">Quantité: <span className="font-semibold">{item.quantity}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-lg">{(item.product.price * item.quantity).toFixed(2)}€</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-gray-200 pt-6 space-y-3">
              <div className="flex justify-between text-gray-700 text-lg">
                <span>Sous-total</span>
                <span className="font-semibold">{totalPrice.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-gray-700 text-lg">
                <span>Livraison</span>
                <span className="text-green-600 font-bold">Gratuite</span>
              </div>
              <div className="flex justify-between text-xl font-black text-gray-900 pt-4 border-t-2 border-gray-200">
                <span>Total</span>
                <span>{totalPrice.toFixed(2)}€</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 backdrop-blur-sm bg-white/90">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Paiement sécurisé</h2>
            </div>

            <div className="space-y-6 mb-10">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.id}
                    className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedPayment === method.id
                        ? 'border-amber-500 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    {method.popular && (
                      <span className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm px-4 py-1 rounded-full font-bold shadow-lg">
                        Populaire
                      </span>
                    )}
                    <div className="flex items-center space-x-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${
                        selectedPayment === method.id ? 'bg-amber-100' : 'bg-gray-100'
                      }`}>
                        {method.logo ? (
                          <img 
                            src={method.logo} 
                            alt={method.name} 
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <Icon className={`w-8 h-8 ${selectedPayment === method.id ? 'text-amber-600' : 'text-gray-600'}`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{method.name}</h3>
                        <p className="text-base text-gray-600 font-light">{method.description}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 ${
                        selectedPayment === method.id
                          ? 'border-amber-500 bg-amber-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedPayment === method.id && <div className="w-full h-full rounded-full bg-white scale-50 shadow-sm"></div>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment Forms */}
            {selectedPayment === 'card' && (
              <div className="space-y-6 mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                <div>
                  <label className="block text-base font-bold text-gray-700 mb-3">Numéro de carte</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 font-medium" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold text-gray-700 mb-3">Date d'expiration</label>
                    <input type="text" placeholder="MM/AA" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 font-medium" />
                  </div>
                  <div>
                    <label className="block text-base font-bold text-gray-700 mb-3">CVV</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 font-medium" />
                  </div>
                </div>
              </div>
            )}

            {selectedPayment === 'wave' && (
              <div className="space-y-6 mb-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://kickstartafrica.com/wp-content/uploads/2020/12/94377508_918638458565635_5520442085410340864_o.png" 
                    alt="Wave" 
                    className="h-12 object-contain"
                  />
                </div>
                <label className="block text-base font-bold text-gray-700 mb-3">Numéro Wave</label>
                <input 
                  type="tel" 
                  placeholder="Ex: 77XXXXXXX" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 font-medium" 
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Vous recevrez une demande de paiement sur votre mobile
                </p>
              </div>
            )}

            {selectedPayment === 'orange' && (
              <div className="space-y-6 mb-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://yt3.ggpht.com/a/AATXAJxbPZsfcmu5uhgxzUruur3I8hf-sMLcTXhqXQ=s900-c-k-c0xffffffff-no-rj-mo" 
                    alt="Orange Money" 
                    className="h-12 object-contain"
                  />
                </div>
                <label className="block text-base font-bold text-gray-700 mb-3">Numéro Orange Money</label>
                <input 
                  type="tel" 
                  placeholder="Ex: 77XXXXXXX" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 font-medium" 
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Vous recevrez une demande de paiement sur votre mobile
                </p>
              </div>
            )}

            {selectedPayment === 'cod' && (
              <div className="space-y-6 mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 text-center text-gray-700 font-medium">
                Vous paierez à la livraison directement.
              </div>
            )}

            <button
              onClick={handleCompleteOrder}
              className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white py-6 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/40 border-2 border-amber-500/30"
            >
              Confirmer la commande • {totalPrice.toFixed(2)}€
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 font-light">Paiement sécurisé par SSL. Vos données sont protégées.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;