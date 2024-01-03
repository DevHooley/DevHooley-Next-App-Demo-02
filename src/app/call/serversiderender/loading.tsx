'use client';

import { useEffect, useState } from 'react';

export default function Basic() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      {loading ? (
        <div className="text-2xl font-bold text-gray-700">
          Loading, please wait...
        </div>
      ) : (
        <div>
          {/* Your content when loading is complete */}
          <h1 className="text-4xl font-bold mb-4">Loaded Content</h1>
          <p>Other content goes here.</p>
        </div>
      )}
    </div>
  );
}
