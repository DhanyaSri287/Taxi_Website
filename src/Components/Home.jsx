import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("oneway");

  const carouselData = [
    {
      image: "https://www.redtaxi.co.in/adminpanel/asset/images/banner/well-maintained-cabs.webp",
      title: "24/7 Direct Customer Support & Well Maintained Cabs",
      description: "We ensure safe rides and great value for your money every time.",
    },
    {
      image: "https://www.redtaxi.co.in/images/rentals.webp",
      title: "No Ride Delays, No Excuses",
      description: "No more last-minute bargaining issues. Get to your destination on time.",
    },
    {
      image: "https://www.redtaxi.co.in/adminpanel/asset/images/banner/start-your-corporate-travel-here.webp",
      title:"Swift Rides, Zero Hassle",
      description:"Effortless bookings, prompt pickups, and smooth journeys—every time.",

    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="bg-gray-100 text-gray-800">
   
      <div className="relative">
        <Slider {...settings}>
          {carouselData.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[300px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-sm md:text-lg mb-6">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-gray-100 rounded-xl shadow-xl w-[95%] md:w-[90%] lg:w-3/4 p-4 md:p-6 mx-auto -mt-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 mb-6 border-b pb-2">
          <button
            onClick={() => setActiveTab("oneway")}
            className={`flex-1 py-2 rounded-t-md text-center font-bold text-sm md:text-lg transition-all ${
              activeTab === "oneway"
                ? "bg-red-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Oneway Trip
          </button>
          <button
            onClick={() => setActiveTab("outstation")}
            className={`flex-1 py-2 rounded-t-md text-center font-bold text-sm md:text-lg transition-all ${
              activeTab === "outstation"
                ? "bg-red-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Outstation
          </button>
          <button
            onClick={() => setActiveTab("rental")}
            className={`flex-1 py-2 rounded-t-md text-center font-bold text-sm md:text-lg transition-all ${
              activeTab === "rental"
                ? "bg-red-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Rental
          </button>
        </div>
        <form className="grid grid-cols-1 gap-4 items-center md:grid-cols-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">From</label>
            <input
              type="text"
              placeholder="Enter from location"
              className="w-full p-3 border rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">To</label>
            <input
              type="text"
              placeholder="Enter to location"
              className="w-full p-3 border rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Mobile No</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full p-3 border rounded-lg text-sm"
            />
          </div>
          {activeTab === "rental" && (
            <>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Hours</label>
                <select className="w-full p-3 border rounded-lg text-sm">
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours</option>
                  <option value="3">3 Hours</option>
                  <option value="4">4 Hours</option>
                  <option value="5">5 Hours</option>
                  <option value="6">6 Hours</option>
                  <option value="7">7 Hours</option>
                  <option value="8">8 Hours</option>
                  <option value="9">9 Hours</option>
                  <option value="10">10 Hours</option>
                  <option value="11">11 Hours</option>
                  <option value="12">12 Hours</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Balance</label>
                <input
                  type="text"
                  placeholder="Enter balance amount"
                  className="w-full p-3 border rounded-lg text-sm"
                />
              </div>
            </>
          )}
          {activeTab !== "rental" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full p-3 border rounded-lg text-sm"
              />
            </div>
          )}
          <div className="md:col-span-5 flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 md:px-8 py-2 md:py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 text-sm md:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <section className="why-choose py-12 px-4 md:px-16 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">Why Choose RedTaxi?</h2>
        <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["🚖", "Instant Booking"],
            ["🧼", "Clean & Safe Cabs"],
            ["🔒", "Trusted Drivers"],
            ["⏱", "24/7 Availability"],
          ].map(([icon, label], i) => (
            <div
              key={i}
              className="feature p-4 md:p-6 bg-white border rounded-lg shadow-md text-center"
            >
              <div className="icon text-3xl md:text-4xl mb-4">{icon}</div>
              <h3 className="text-base md:text-lg font-medium">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="download py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">Download Our App</h2>
        <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
          Book rides on the go with our mobile app.
        </p>
        <div className="store-links flex justify-center gap-4 md:gap-6">
          <img
            className="w-28 md:w-40 hover:scale-105 transition-transform"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
          <img
            className="w-28 md:w-40 hover:scale-105 transition-transform"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
          />
        </div>
      </section>
      <footer className="footer py-6 bg-red-900 text-white text-center text-sm">
        <p>&copy; 2025 RedTaxi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;