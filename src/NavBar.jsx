import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-red-600 text-white">
 
      <h3 className="text-2xl font-bold">RedTaxi</h3>

      <ul
        className={`flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-red-600 md:bg-transparent md:gap-6 items-center transition-transform duration-300 ${
          isMobile ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <li>
          <Link
            to="/"
            className="block md:inline px-4 py-2 text-lg font-medium hover:text-yellow-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block md:inline px-4 py-2 text-lg font-medium hover:text-yellow-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/cities"
            className="block md:inline px-4 py-2 text-lg font-medium hover:text-yellow-300"
          >
            Cities
          </Link>
        </li>
        <li>
          <Link
            to="/trip"
            className="block md:inline px-4 py-2 text-lg font-medium hover:text-yellow-300"
          >
            Trip
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="block md:inline px-4 py-2 text-lg font-medium hover:text-yellow-300"
          >
            Signup
          </Link>
        </li>
      </ul>
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;