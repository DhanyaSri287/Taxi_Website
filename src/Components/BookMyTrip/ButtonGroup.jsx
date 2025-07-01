
import React from 'react';
import { Link } from 'react-router-dom';
export default function VariantButtonGroup() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex gap-4">
        <Link to="/one-way">
        <button className="px-4 py-2 border border-red-900 rounded-full text-red-900 hover:bg-red-900 hover:text-white transition-colors">
          One Way Trip
        </button>
        </Link>
        <Link to="/hourlyrental">
        <button className="px-4 py-2 border border-red-900 rounded-full text-red-900 hover:bg-red-900 hover:text-white transition-colors">
          Hourly Rental
        </button>
        </Link>
        <Link to="/roundtrip">
        <button className="px-4 py-2 border border-red-900 rounded-full text-red-900 hover:bg-red-900 hover:text-white transition-colors">
          Round Trip
        </button>
        </Link>
      </div>
    </div>
  );
}
