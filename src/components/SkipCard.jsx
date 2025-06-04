// src/components/SkipCard.jsx
import React from 'react';

export default function SkipCard({ skip, isSelected, onSelect }) {
  return (
    <div
      className={`border rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-200 ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'bg-white'
      }`}
    >
      <img
        src={skip.image}
        alt={skip.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{skip.name}</h3>
        <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {skip.capacity} Yards
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{skip.hirePeriod}</p>
      <p className="mt-2 text-blue-600 font-bold text-lg">£{skip.price}</p>
      <button
        onClick={() => onSelect(skip._id)}
        className={`mt-3 w-full text-center py-2 rounded-md text-sm font-medium transition ${
          isSelected ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {isSelected ? 'Selected' : 'Select This Skip'}
      </button>
    </div>
  );
}
