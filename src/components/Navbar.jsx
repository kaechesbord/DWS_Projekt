import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SoundWave
          </Link>
        </div>

        {/* User role indicator */}
        <div className="hidden md:flex items-center mr-4">
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
            {user ? (user.role === 'Admin' ? 'Administrator' : 'Korisnik') : 'Gost'}
          </span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-medium hover:text-indigo-600 transition-colors">Početna</Link>
          <Link to="/about" className="font-medium hover:text-indigo-600 transition-colors">O nama</Link>
          <Link to="/contact" className="font-medium hover:text-indigo-600 transition-colors">Kontakt</Link>

          {!user && (
            <>
              <Link to="/login" className="font-medium hover:text-indigo-600 transition-colors">Prijava</Link>
              <Link to="/registracija" className="font-medium hover:text-indigo-600 transition-colors">Registracija</Link>
            </>
          )}

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
          <Link to="/korpa" className="font-medium hover:text-indigo-600 transition-colors flex items-center">
            <img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" alt="Korpa" className="w-6 h-6 mr-2 " />
          </Link> 
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-500 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
          onClick={toggleMenu}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
              Početna
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
              O nama
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
              Kontakt
            </Link>

            {!user && (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">
                  Prijava
                </Link>
                <Link to="/registracija" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-indigo-600 transition-colors py-2">
                  Registracija
                </Link>
              </>
            )}

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
            <Link to="/korpa" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-indigo-600 transition-colors py-2 flex items-center">
  <img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" alt="Korpa" className="w-6 h-6 mr-2" />
</Link>
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
