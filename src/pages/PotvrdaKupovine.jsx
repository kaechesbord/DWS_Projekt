// src/pages/PotvrdaKupovine.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext'; // Treba nam za pražnjenje korpe

export default function PotvrdaKupovine() {
  const { setCartItems } = useCart(); // Dohvaćamo funkciju za postavljanje stavki korpe

  // Koristimo useEffect da ispraznimo korpu čim se komponenta učita
  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]); // Zavisnost: ponovo pokreni efekt samo ako se setCartItems promijeni

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-28 text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-600">Hvala na kupovini!</h1>
        <p className="text-xl text-gray-700 mb-8">Vaša narudžba je uspješno obrađena.</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 inline-flex items-center justify-center">
          Nastavi kupovinu
        </Link>
      </div>
    </>
  );
}