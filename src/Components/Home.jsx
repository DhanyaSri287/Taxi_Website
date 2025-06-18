import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
    
      <section className="hero flex flex-col items-center justify-center bg-red-600 text-white py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to RedTaxi</h1>
        <p className="text-lg md:text-xl mb-6">Fast, Safe, and Reliable Rides at Your Fingertips</p>
        <button className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500">
          Book Now
        </button>
      </section>
      <section className="services py-12 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="service-cards grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'One-Day', desc: 'Affordable and perfect for quick rides' },
            { name: 'Hourly Rental', desc: 'Comfortable rides for small families' },
            { name: 'Rental', desc: 'Spacious and powerful for long trips' },
          ].map((service, index) => (
            <div
              key={index}
              className="card p-6 border rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="why-choose py-12 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose RedTaxi?</h2>
        <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ['🚖', 'Instant Booking'],
            ['🧼', 'Clean & Safe Cabs'],
            ['🔒', 'Trusted Drivers'],
            ['⏱', '24/7 Availability'],
          ].map(([icon, label], i) => (
            <div
              key={i}
              className="feature p-6 bg-white border rounded-lg shadow-md text-center"
            >
              <div className="icon text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-medium">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="download py-12 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-4">Download Our App</h2>
        <p className="text-center text-gray-600 mb-6">Book rides on the go with our mobile app</p>
        <div className="store-links flex justify-center gap-6">
          <img
            className="w-40 hover:scale-105 transition-transform"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
          <img
            className="w-40 hover:scale-105 transition-transform"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
          />
        </div>
      </section>
      <footer className="footer py-6 bg-red-600 text-white text-center">
        <p>&copy; 2025 RedTaxi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
