// src/pages/SkipSelectorPage.jsx
import { useEffect, useState } from 'react';
import Header from '../Header';
import SkipCard from '../SkipCard';


export default function SkipSelectorPage() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  const currentStep = 3;

  const handleStepChange = (stepId) => {
    console.log("Go to step", stepId);
  };

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then(res => res.json())
      .then(data => setSkips(data))
      .catch(err => console.error(err));
  }, []);

  const handleSkipSelect = (id) => {
    setSelectedSkip(prev => (prev === id ? null : id));
  };

  const selected = skips.find(s => s.id === selectedSkip);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header currentStep={currentStep} onStepChange={handleStepChange} />

      <main className="p-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Choose Your Skip Size</h2>

        {skips.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">Loading skips...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips.map(skip => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip === skip.id}
                onSelect={handleSkipSelect}
              />
            ))}
          </div>
        )}
      </main>

      {selected && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {selected.size}-yard Skip &nbsp; | &nbsp;
            Hire: {selected.hire_period_days} days &nbsp; | &nbsp;
            <strong>£{(selected.price_before_vat * (1 + selected.vat / 100)).toFixed(2)}</strong>
          </span>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full sm:w-auto">
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}
