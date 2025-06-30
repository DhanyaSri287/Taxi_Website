import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cityData = [
  {
    name: 'Chennai',
    info: 'Capital of Tamil Nadu, known for Marina Beach.',
    description: 'Chennai is a cultural and economic hub in South India. Visit Marina Beach and explore its rich history.',
    image: 'https://images.unsplash.com/photo-1570553305204-149983b3d081?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Delhi',
    info: 'Capital of India, home to Red Fort and India Gate.',
    description: 'Delhi is a blend of ancient and modern. Explore iconic landmarks like the India Gate and Red Fort.',
    image: 'https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.webp?a=1&b=1&s=612x612&w=0&k=20&c=WTnCHnh39Pc5mmkWsHr1Hv4QZcViyAIc2v7__YsPfAE=',
  },
  {
    name: 'Mumbai',
    info: 'Financial capital, famous for Bollywood.',
    description: 'Mumbai, the city of dreams, offers Bollywood, Marine Drive, and the vibrant local culture.',
    image: 'https://plus.unsplash.com/premium_photo-1661962392861-c3cb1cf6dd82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVtYmFpJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Pollachi',
    info: 'Known as the "Coconut City" and a gateway to scenic destinations.',
    description: 'Pollachi is famous for its lush green landscapes, coconut groves, and proximity to tourist attractions like Topslip and Valparai.',
    image: 'data:image/jpeg;base64,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',
  },
];

const Cities = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  const handleExplore = (city) => {
    setSelectedCity(city);
  };

  const closeModal = () => {
    setSelectedCity(null);
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center text-black overflow-hidden">
      {/* Header */}
      <div className="w-full bg-red-900 text-white py-4 text-center">
        <h1 className="text-4xl font-bold">Explore Cities</h1>
      </div>

      {/* City Cards */}
      <div className="relative z-10 text-center max-w-6xl py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {cityData.map((city) => (
            <div
              key={city.name}
              className="relative bg-gray-100 rounded-lg shadow-lg border-2 border-red-600 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* City Image */}
              <div
                className="w-full h-48 rounded-t-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${city.image})` }}
              ></div>

              {/* City Information */}
              <div className="p-6 text-left">
                <h2 className="text-2xl font-bold text-red-600 mb-2">{city.name}</h2>
                <p className="text-gray-700 mb-4">{city.info}</p>
                <button
                  onClick={() => handleExplore(city)}
                  className="px-4 py-2 bg-red-900 text-white font-semibold rounded hover:bg-red-700 transition"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg">
            <h2 className="text-3xl font-bold text-red-600 mb-4">{selectedCity.name}</h2>
            <p className="text-gray-700 mb-4">{selectedCity.description}</p>
            <img
              src={selectedCity.image}
              alt={selectedCity.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <button
              onClick={() => navigate(`/explore/${selectedCity.name.toLowerCase()}`)}
              className="px-4 py-2 bg-red-900 text-white font-semibold rounded hover:bg-red-700 transition mr-4"
            >
              Go to {selectedCity.name}
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cities;

