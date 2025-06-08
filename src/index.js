import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // ✅ Dodaj ovo
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    {/* CartProvider treba obavijati App, tako da ga stavimo ovdje */}
    <AuthProvider>
      {/* AuthProvider treba obavijati CartProvider, tako da ga stavimo ovdje */}
    <CartProvider>
      <App />
    </CartProvider>
    </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

