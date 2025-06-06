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
      className={clsx(
        'relative rounded-2xl p-4 shadow-md transition-all duration-300 transform',
        'hover:shadow-xl hover:-translate-y-1 hover:scale-[1.015]',
        isSelected
          ? 'border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]'
          : 'bg-[var(--card)] text-[var(--text)]'
      )}
    >
      <div className="relative mb-3">
        <img
          src={skipImage}
          alt={`${size}-yard Skip`}
          className="w-full h-40 object-cover rounded-lg transition-opacity duration-300"
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

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-[var(--text)]">{size}-yard Skip</h3>
        {isSelected && <CheckCircle className="text-[var(--accent)] w-6 h-6 transition-transform duration-200 scale-110" />}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Hire period: {hire_period_days} days</p>
      <p className="text-sm text-[var(--text)] font-bold mb-3">
        £{price_before_vat.toFixed(2)}
      </p>

      {/* Select Button */}
      <button
        onClick={() => onSelect(id)}
        className={clsx(
          'absolute bottom-4 right-4 px-3 py-1 text-sm rounded-full font-medium shadow transition-colors duration-200',
          isSelected
            ? 'bg-gray-600 text-white hover:bg-gray-700'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        )}
      >
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
}
