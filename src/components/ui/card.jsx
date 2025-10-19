// src/components/ui/card.jsx
import React from 'react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 m-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;