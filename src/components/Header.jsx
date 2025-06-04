// src/components/Header.jsx
import { CheckCircle, LoaderCircle, Truck, CalendarDays, CreditCard } from 'lucide-react';

const steps = [
  { label: "Postcode", icon: <CheckCircle /> },
  { label: "Waste Type", icon: <Truck /> },
  { label: "Select Skip", icon: <LoaderCircle />, current: true },
  { label: "Permit Check", icon: <CheckCircle /> },
  { label: "Choose Date", icon: <CalendarDays /> },
  { label: "Payment", icon: <CreditCard /> },
];

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <h1 className="font-semibold text-lg hidden sm:block">We Want Waste</h1>
      </div>

      <nav className="flex items-center gap-3 overflow-x-auto max-w-[80vw] sm:max-w-none">
        {steps.map((step, idx) => (
          <div key={idx} className={`flex items-center gap-2 px-2 py-1 rounded ${step.current ? 'bg-blue-600' : 'bg-gray-700'}`}>
            <div className="text-white">{step.icon}</div>
            <span className="text-sm">{step.label}</span>
          </div>
        ))}
      </nav>
    </header>
  );
}
