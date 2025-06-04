import { useEffect, useState } from 'react';
import Header from '../Header';
import SkipCard from '../SkipCard';

export default function SkipSelectorPage() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then(res => res.json())
      .then(data => setSkips(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Choose Your Skip Size</h2>

        {skips.length === 0 ? (
          <p className="text-center text-gray-500">Loading skips...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips.map((skip, index) => (
              <SkipCard
                key={skip._id || index}
                skip={skip}
                isSelected={selectedSkip === skip._id}
                onSelect={setSelectedSkip}
              />
            ))}
          </div>
        )}
      </main>

      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 flex items-center justify-between shadow-lg">
          <span className="text-sm text-gray-700">
            Selected Skip:{' '}
            <strong>{skips.find(s => s._id === selectedSkip)?.name}</strong>
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}
