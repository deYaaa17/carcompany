// src/components/ui/primarybutton.jsx
import React from 'react';

function PrimaryButton({ label, onClick, type = 'primary', disabled = false }) {
  let baseClasses = 'px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105';
  let typeClasses;

  switch (type) {
    case 'primary':
      typeClasses = 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800';
      break;
    case 'secondary':
      typeClasses = 'bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:from-gray-600 hover:to-gray-800';
      break;
    case 'outline':
      typeClasses = 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';
      break;
    default:
      typeClasses = 'bg-blue-500 text-white';
  }

  return (
    <button className={`${baseClasses} ${typeClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default PrimaryButton;