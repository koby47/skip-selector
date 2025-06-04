// src/components/SkipCard.jsx
import React from 'react';
import { CheckCircle, Ban } from 'lucide-react';
import clsx from 'clsx';

export default function SkipCard({ skip, isSelected, onSelect }) {
  const {
    id,
    size,
    hire_period_days,
    price_before_vat,
    allowed_on_road,
    image_url,
  } = skip;

  const skipImage = image_url || '/images/16-yarder-skip.jpg';

  return (
    <div
      onClick={() => onSelect(id)}
      className={clsx(
        'relative rounded-2xl p-4 shadow-md cursor-pointer transition-all duration-300',
        isSelected ? 'border-blue-500 bg-blue-50' : 'hover:shadow-lg'
      )}
    >
      {/* Image with bottom-right "Not Allowed" badge */}
      <div className="relative mb-3">
        <img
          src={skipImage}
          alt={`${size}-yard Skip`}
          className="w-full h-40 object-cover rounded-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/skip-placeholder.jpg';
          }}
        />

        {!allowed_on_road && (
          <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow">
            <Ban className="w-3 h-3" />
            Not Allowed on Road
          </div>
        )}
      </div>

      {/* Info below image */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{size}-yard Skip</h3>
        {isSelected && <CheckCircle className="text-blue-500 w-6 h-6" />}
      </div>

      <p className="text-sm text-gray-600 mb-1">Hire period: {hire_period_days} days</p>
      <p className="text-sm text-gray-900 font-bold">£{price_before_vat.toFixed(2)}</p>
    </div>
  );
}
