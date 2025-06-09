import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!user;


  
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

