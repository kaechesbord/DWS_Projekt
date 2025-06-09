import React, { createContext, useContext, useState } from "react";

// Kreiraj kontekst za korpu
export const CartContext = createContext();

// Provider komponenta za korpu
export const CartProvider = ({ children }) => {
  // State za stavke u korpi
  const [cartItems, setCartItems] = useState([]);

  // Dodaj proizvod u korpu (ili povećaj količinu ako već postoji)
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(i => i.id === item.id);
      if (existing) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Povećaj količinu proizvoda u korpi
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Smanji količinu proizvoda u korpi (i ukloni ako je 0)
  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Isprazni korpu
  const clearCart = () => setCartItems([]);

  // Provider vraća sve funkcije i state
  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook za lakši pristup korpi
export const useCart = () => useContext(CartContext);

