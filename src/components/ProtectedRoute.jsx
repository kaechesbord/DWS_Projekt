import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// Komponenta za zaštitu ruta (pristup samo prijavljenim korisnicima)
const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // Ako korisnik nije prijavljen, preusmjeri na login
  if (!isAuthenticated) {
    alert('Morate biti prijavljeni da biste pristupili ovoj stranici.');
    return <Navigate to="/login" replace />;
  }

  // Inače prikaži zaštićeni sadržaj
  return <Outlet />;
};

export default ProtectedRoute;