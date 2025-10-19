// src/components/ui/navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Car Company</h1>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-300' : 'hover:text-blue-300'}>Home</NavLink></li>
          <li><NavLink to="/listing" className={({ isActive }) => isActive ? 'text-blue-300' : 'hover:text-blue-300'}>Cars</NavLink></li>
          <li><NavLink to="/order" className={({ isActive }) => isActive ? 'text-blue-300' : 'hover:text-blue-300'}>Order</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;