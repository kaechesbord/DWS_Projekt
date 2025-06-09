import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Import svih stranica
import About from './pages/About';
import Home from './pages/Home';
import Gitare from './pages/Gitare';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Klavijature from './pages/Klavijature';
import AudioOprema from './pages/AudioOprema';
import Bubnjevi from './pages/Bubnjevi';
import Korpa from './pages/Korpa';
import PotvrdaKupovine from './pages/PotvrdaKupovine';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

// Navbar komponenta
import Navbar from './components/Navbar';

// Glavna aplikacija
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          {/* Javne rute */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registracija" element={<Register />} />

          {/* Zaštićene rute za prijavljene korisnike */}
          <Route element={<ProtectedRoute />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/klavijature" element={<Klavijature />} />
            <Route path="/bubnjevi" element={<Bubnjevi />} />
            <Route path="/audio-oprema" element={<AudioOprema />} />
            <Route path="/gitare" element={<Gitare />} />
            <Route path="/korpa" element={<Korpa />} />
            <Route path="/potvrda-kupovine" element={<PotvrdaKupovine />} />
          </Route>

          {/* Zaštićene rute samo za admina */}
          <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;