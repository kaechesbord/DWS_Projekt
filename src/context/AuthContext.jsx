import { createContext, useState } from 'react';

// Kreiraj kontekst za autentikaciju
export const AuthContext = createContext();

// Provider komponenta za autentikaciju
export const AuthProvider = ({ children }) => {
  // State za korisnika (uzima iz localStorage ako postoji)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  // Da li je korisnik prijavljen
  const isAuthenticated = !!user;

  // Funkcija za login korisnika
  const login = async ({ email, password }) => {
    try {
      const res = await fetch(`http://localhost:5000/users?email=${email}`);
      const users = await res.json();

      if (users.length === 0) {
        return { success: false, message: 'Korisnik nije pronađen' };
      }

      const user = users[0];

      if (user.password === password) {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      } else {
        return { success: false, message: 'Neispravan email ili lozinka' };
      }
    } catch (error) {
      console.error('Greška prilikom login-a:', error);
      return { success: false, message: 'Greška u komunikaciji sa serverom' };
    }
  };

  // Funkcija za odjavu korisnika
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Vraća context provider sa svim funkcijama i state-om
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};