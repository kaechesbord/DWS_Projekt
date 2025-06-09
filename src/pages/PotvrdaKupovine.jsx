import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const PotvrdaKupovine = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    // Isprazni korpu nakon potvrde kupovine
    setCart([]);
  }, [setCart]);

  return (
    <div>
      <h1>Hvala na kupovini!</h1>
      <p>Vaša narudžba je uspešno poslata.</p>
      <h3>Kupljeni proizvodi:</h3>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.naziv}</li>
        ))}
      </ul>
    </div>
  );
};

export default PotvrdaKupovine;