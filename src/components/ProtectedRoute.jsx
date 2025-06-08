import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    alert('Morate biti prijavljeni da biste pristupili ovoj stranici.');
    // Ako korisnik nije prijavljen, preusmjeri na login
    return <Navigate to="/login" replace />;
  }

  // Ako jest, prikaži "dječje" komponente (rute)
  return children;
};

export default ProtectedRoute;
