import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register'; // ako još nemaš, da možeš registraciju koristiti


// Import all your page components
import About from './pages/About';
import Home from './pages/Home';
import Gitare from './pages/Gitare';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Klavijature from './pages/Klavijature';
import AudioOprema from './pages/AudioOprema';
import Bubnjevi from './pages/Bubnjevi';
import Korpa from './pages/Korpa'; // New: Import the cart page
import PotvrdaKupovine from './pages/PotvrdaKupovine';

// Import the Navbar component
import Navbar from './components/Navbar';

// Import the CartProvider – it should wrap your Routes in main.jsx,
// but we still need to remind ourselves it's part of the global setup.
// If you're importing it here, ensure it's removed from main.jsx to avoid duplicates.
// For consistency, I'll assume CartProvider wraps App in main.jsx/index.jsx.
// If it's not there, you'll need to add it here.
// import { CartProvider } from './context/CartContext.jsx'; // Only if NOT in main.jsx


// ...existing code...

function App() {
  return (
    <>
      <Navbar />
<Routes>
  {/* Javne rute */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/gitare" element={<Gitare />} />
  <Route path="/klavijature" element={<Klavijature />} />
  <Route path="/bubnjevi" element={<Bubnjevi />} />
  <Route path="/audio-oprema" element={<AudioOprema />} />
  <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
  <Route path="/login" element={<Login />} />
  <Route path="/registracija" element={<Register />} />

  {/* Zaštićene rute - pristup samo ako je korisnik prijavljen */}
  <Route path="/login" element={<Login />} />
  
  <Route element={<ProtectedRoute />}>
    <Route path="/korpa" element={<Korpa />} />
    <Route path="/potvrda-kupovine" element={<PotvrdaKupovine />} />
  </Route>
</Routes>
    </>
  );
}

export default App;