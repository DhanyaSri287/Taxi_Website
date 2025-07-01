import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-red-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">RedTaxi</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li>
            <Link
              to="/home"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cities"
              className="hover:text-yellow-300 transition duration-300"
            >
              Cities
            </Link>
          </li>
          <li>
            <Link
              to="/trip"
              className="hover:text-yellow-300 transition duration-300"
            >
              Trip
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-yellow-300 transition duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-4 items-center bg-red-800 text-lg font-medium md:hidden py-4">
          <li>
            <Link
              to="/home"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cities"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cities
            </Link>
          </li>
          <li>
            <Link
              to="/trip"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trip
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;