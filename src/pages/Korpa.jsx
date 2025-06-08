// src/pages/Korpa.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

export default function Korpa() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-28">
        <h1 className="text-4xl font-bold mb-8">Vaša Korpa</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            <p className="mb-4">Vaša korpa je prazna.</p>
            <Link to="/" className="text-blue-600 hover:underline">
              Nastavite kupovinu
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
                <div className="flex items-center">
                  {item.img && (
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} po komadu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-2 text-gray-700 hover:bg-gray-200 rounded-l-md"
                      aria-label="Smanji količinu"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-4 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-2 text-gray-700 hover:bg-gray-200 rounded-r-md"
                      aria-label="Povećaj količinu"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <span className="text-lg font-bold text-gray-900 w-24 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-md"
                    aria-label="Ukloni proizvod"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-8 pt-4 border-t-2 border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Ukupno:</h2>
              <span className="text-2xl font-bold text-indigo-600">${getTotalPrice()}</span>
            </div>

            <div className="mt-6 flex justify-end">
              {/* Promijenjena ruta i tekst gumba */}
              <Link to="/potvrda-kupovine" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 inline-flex items-center justify-center">
                Kupi
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}