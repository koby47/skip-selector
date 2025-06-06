// src/Header.jsx
import {
  MapPin,
  Recycle,
  Truck,
  BadgeCheck,
  Calendar,
  CreditCard,
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Postcode', icon: MapPin },
  { id: 2, label: 'Waste Type', icon: Recycle },
  { id: 3, label: 'Select Skip', icon: Truck },
  { id: 4, label: 'Permit Check', icon: BadgeCheck },
  { id: 5, label: 'Choose Date', icon: Calendar },
  { id: 6, label: 'Payment', icon: CreditCard },
];

export default function Header({ currentStep = 1, onStepChange = () => {} }) {
  return (
    <header className="bg-[var(--card)] text-[var(--text)] shadow-sm p-4 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center justify-between overflow-x-auto max-w-7xl mx-auto gap-4">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className="flex flex-col items-center text-center flex-shrink-0 focus:outline-none group"
            >
              <div
                className={`rounded-full p-2 border-2 transition-all duration-200
                  ${
                    isCompleted
                      ? 'bg-[var(--accent)] border-[var(--accent)] text-white group-hover:scale-105'
                      : isActive
                      ? 'border-[var(--accent)] text-[var(--accent)]'
                      : 'border-gray-300 text-gray-400 group-hover:border-[var(--accent)]'
                  }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`mt-1 text-xs font-medium whitespace-nowrap
                  ${
                    isActive || isCompleted
                      ? 'text-[var(--accent)]'
                      : 'text-gray-500 group-hover:text-[var(--accent)]'
                  }`}
              >
                {step.label}
              </span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
