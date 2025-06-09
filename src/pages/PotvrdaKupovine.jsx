import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";

// Stranica za potvrdu kupovine
const PotvrdaKupovine = () => {
  const { cartItems, clearCart } = useCart();

  useEffect(() => {
    // Isprazni korpu nakon potvrde kupovine
    clearCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
      <h1 className="text-3xl font-bold mb-4">Hvala na kupovini!</h1>
      <p className="text-gray-700 mb-6">Vaša narudžba je uspješno poslana.</p>
      <h3 className="text-xl font-semibold mb-2">Kupljeni proizvodi:</h3>
      <ul className="mb-8">
        {cartItems.length === 0 ? (
          <li className="text-gray-500">Nema proizvoda (korpa je ispražnjena).</li>
        ) : (
          cartItems.map((item, idx) => (
            <li key={idx} className="text-gray-800">{item.name || item.naziv}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PotvrdaKupovine;