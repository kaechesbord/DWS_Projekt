import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// Navigacijska traka aplikacije
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  // Otvori/zatvori mobilni meni
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Odjava korisnika
  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SoundWave
          </Link>
        </div>

        {/* Desktop: indikator uloge korisnika */}
        <div className="hidden md:flex items-center mr-4">
          <span
            className={`text-sm px-3 py-1 rounded-full ${
              user
                ? user.role === 'Admin'
                  ? 'bg-yellow-200 text-yellow-800 font-bold'
                  : 'bg-gray-100 text-gray-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {user ? (user.role === 'Admin' ? 'Administrator' : 'Korisnik') : 'Gost'}
          </span>
        </div>

        {/* Desktop navigacija */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-medium hover:text-indigo-600 transition-colors">Početna</Link>
          <Link to="/about" className="font-medium hover:text-indigo-600 transition-colors">O nama</Link>
          <Link to="/contact" className="font-medium hover:text-indigo-600 transition-colors">Kontakt</Link>

          {/* Prikaz za neprijavljene korisnike */}
          {!user && (
            <>
              <Link to="/login" className="font-medium hover:text-indigo-600 transition-colors">Prijava</Link>
              <Link to="/registracija" className="font-medium hover:text-indigo-600 transition-colors">Registracija</Link>
            </>
          )}

          {/* Prikaz za prijavljene korisnike */}
          {user && (
            <>
              <span className="font-medium text-gray-700">Pozdrav, {user.username}</span>
              <button
                onClick={handleLogout}
                className="font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer bg-transparent border-none"
              >
                Odjava
              </button>
            </>
          )}

          {/* Ikona korpe */}
          <Link to="/korpa" className="font-medium hover:text-indigo-600 transition-colors flex items-center">
            <img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" alt="Korpa" className="w-6 h-6 mr-2" />
          </Link>

          {/* Link za admin dashboard */}
          {user && user.role === 'Admin' && (
            <Link to="/dashboard" className="font-medium hover:text-indigo-600 transition-colors">Dashboard</Link>
          )}
        </div>

        {/* Mobilni meni dugme */}
        <button
          className="md:hidden text-gray-500 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
          onClick={toggleMenu}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobilni meni */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
              Početna
            </Link>
            <Link to="/about" onClick={toggleMenu} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
              O nama
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
              Kontakt
            </Link>

            {/* Prikaz za neprijavljene korisnike */}
            {!user && (
              <>
                <Link to="/login" onClick={toggleMenu} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
                  Prijava
                </Link>
                <Link to="/registracija" onClick={toggleMenu} className="font-medium hover:text-indigo-600 transition-colors py-2">
                  Registracija
                </Link>
              </>
            )}

            {/* Prikaz za prijavljene korisnike */}
            {user && (
              <>
                <span className="font-medium text-gray-700 py-2 border-b border-gray-100">
                  Pozdrav, {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer bg-transparent border-none text-left py-2"
                >
                  Odjava
                </button>
              </>
            )}

            {/* Ikona korpe */}
            <Link to="/korpa" onClick={toggleMenu} className="font-medium hover:text-indigo-600 transition-colors py-2 flex items-center">
              <img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" alt="Korpa" className="w-6 h-6 mr-2" />
            </Link>

            {/* Indikator uloge korisnika */}
            <div className="flex items-center py-2">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                {user ? (user.role === 'Admin' ? 'Administrator' : 'Korisnik') : 'Gost'}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;