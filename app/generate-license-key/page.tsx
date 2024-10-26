"use client";

import React, { useState } from 'react';
import axios from 'axios';

export default function GenerateLicenseKeyPage() {
  const [quantity, setQuantity] = useState(1);
  const [keys, setKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false); // Tambahkan state loading

  const generateKeys = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/genkey', { quantity });
      setKeys(response.data.keys);
    } catch (error) {
      console.error('Error generating license keys:', error);
    } finally {
      setLoading(false); // Pastikan loading selesai
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white py-6 px-8">
        <h1 className="text-3xl font-bold">Generate License Keys</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Masukkan Jumlah License Key</h2>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              className="p-3 border rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={generateKeys}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
              disabled={loading} // Nonaktifkan button saat loading
            >
              {loading ? 'Loading...' : 'Generate'}
            </button>
          </div>

          {keys.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Generated Keys:</h3>
              <ul className="list-disc list-inside space-y-2">
                {keys.map((key, index) => (
                  <li key={index} className="text-gray-700">{key}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
