import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-16 flex flex-col gap-3 md:gap-4 z-50">
    
      <a
        href="tel:+1234567890"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110"
        aria-label="Call Now"
      >
        <FiPhoneCall size={20} className="md:text-2xl" />
      </a>
   
      <a
        href="mailto:info@redtaxi.com"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
        aria-label="Email"
      >
        <FiMail size={20} className="md:text-2xl" />
      </a>
    
      <a
        href="Trip"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-110"
        aria-label="Book Now"
      >
        <FaCar size={20} className="md:text-2xl" />
      </a>
    </div>
  );
};
export default FloatingButtons;
