/* eslint-disable @typescript-eslint/no-explicit-any */
// app/generate-license/page.tsx
"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

interface GenerateResponse {
  success: boolean;
  data?: {
    keys: string[];
    count: number;
  };
  error?: string;
}

export default function GenerateLicenseKeyPage() {
  const [quantity, setQuantity] = useState(1);
  const [keys, setKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateKeys = async () => {
    setLoading(true);
    try {
      // Menggunakan endpoint baru
      const response = await axios.post<GenerateResponse>('/api/keys/generate', { 
        quantity: Math.max(1, quantity)
      });
      
      
      if (response.data.success && response.data.data) {
        setKeys(response.data.data.keys);
        await Swal.fire({
          title: 'Success!',
          text: `Successfully generated ${response.data.data.count} license key(s)`,
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
      } else {
        await Swal.fire({
          title: 'Error!',
          text: response.data.error || 'Failed to generate keys',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
      }
    } catch (error: any) {
      console.error('Error generating license keys:', error);
      await Swal.fire({
        title: 'Error!',
        text: error.response?.data?.error || 'Error generating keys',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
    } finally {
      setLoading(false);
    }
  };

  const copyKey = async (key: string) => {
    try {
      await navigator.clipboard.writeText(key);
      await Swal.fire({
        title: 'Copied!',
        text: 'License key copied to clipboard!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
      });
    } catch (err) {
      console.error('Failed to copy:', err);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to copy license key',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white py-6 px-8">
        <h1 className="text-3xl font-bold">Generate License Keys</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Masukkan Jumlah License Key</h2>
          
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              min="1"
              max="10" // Menambahkan batasan maksimum
              className="p-3 border rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={generateKeys}
              disabled={loading}
              className={`
                bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg
                transition-all transform hover:scale-105
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
              `}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                'Generate'
              )}
            </button>
          </div>

          {keys.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Generated Keys:</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {keys.map((key, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <code className="text-sm font-mono break-all">{key}</code>
                    <button
                      onClick={() => copyKey(key)}
                      className="ml-2 text-blue-500 hover:text-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition-all"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}