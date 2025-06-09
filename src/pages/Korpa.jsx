import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext.jsx';

// Stranica za prikaz i upravljanje korpom
export default function Korpa() {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const [showThankYou, setShowThankYou] = useState(false);

  // Izračun ukupne cijene
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Obrada kupovine
  const handlePurchase = () => {
    setShowThankYou(true);
    clearCart(); // Prazni korpu nakon kupovine
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl relative">
        <h1 className="text-4xl font-bold mb-8 text-center">Vaša korpa</h1>

        {/* Prikaz prazne korpe */}
        {cartItems.length === 0 ? (
          <div className="text-gray-600 text-lg text-center">Korpa je trenutno prazna.</div>
        ) : (
          <>
            {/* Prikaz svih proizvoda u korpi */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded-lg shadow-sm hover:shadow transition"
                >
                  <div className="flex items-center space-x-4">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="text-indigo-600 font-medium mt-1">${item.price}</p>
                    </div>
                  </div>
                  {/* Kontrole za količinu */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      −
                    </button>
                    <span className="font-semibold text-lg w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Ukupno i dugme za kupovinu */}
            <div className="mt-10 text-right">
              <h2 className="text-2xl font-bold">Ukupno: ${total}</h2>
              <button
                onClick={handlePurchase}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition"
              >
                Kupi
              </button>
            </div>
          </>
        )}

        {/* Modal za zahvalnicu nakon kupovine */}
        {showThankYou && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm">
              <h2 className="text-2xl font-bold mb-4">Hvala na kupovini!</h2>
              <p className="text-gray-700">Vaša narudžba je uspješno zabilježena.</p>
              <button
                onClick={() => setShowThankYou(false)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              >
                Zatvori
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}