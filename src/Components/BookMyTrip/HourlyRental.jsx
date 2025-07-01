
import React, { useState } from "react";
import ButtonGroup from './ButtonGroup';
const HourlyRental = () => {
  const [filterCity, setFilterCity] = useState("");
  const [filterTaxiType, setFilterTaxiType] = useState("");
  const [filterHours, setFilterHours] = useState("");
  const [formData, setFormData] = useState({
    city: "",
    taxiType: "",
    hours: "",
    additionalInfo: "",
  });

  const priceList = [
    { city: "Coimbatore", type: "Red", hours: "1 Hour", fare: "₹378", km: "17/KM", extra: "₹17/KM & ₹2/Min" },
    { city: "Tirupur", type: "Sedan", hours: "1 Hour", fare: "₹333", km: "17/KM", extra: "₹14/KM & ₹2/Min" },
    { city: "Erode", type: "Mini", hours: "1 Hour", fare: "₹378", km: "₹3?", extra: "₹12/KM & ₹2/Min" },
    { city: "Salem", type: "Sedan", hours: "-", fare: "₹343", km: "10", extra: "₹17/KM" },
    { city: "Madurai", type: "Mini", hours: "2 Hours", fare: "₹400", km: "15/KM", extra: "₹15/KM & ₹2/Min" },
    { city: "Chennai", type: "SUV", hours: "3 Hours", fare: "₹700", km: "20/KM", extra: "₹20/KM & ₹3/Min" },
    { city: "Trichy", type: "Red", hours: "1 Hour", fare: "₹350", km: "17/KM", extra: "₹17/KM & ₹2/Min" },
    { city: "Vellore", type: "Sedan", hours: "2 Hours", fare: "₹500", km: "15/KM", extra: "₹15/KM & ₹2/Min" },
    { city: "Kochi", type: "Mini", hours: "1 Hour", fare: "₹370", km: "10/KM", extra: "₹12/KM & ₹1.5/Min" },
    { city: "Bangalore", type: "Sedan", hours: "3 Hours", fare: "₹600", km: "20/KM", extra: "₹18/KM & ₹2.5/Min" },
  ];

  const filteredList = priceList.filter((row) => {
    return (
      (filterCity === "" || row.city === filterCity) &&
      (filterTaxiType === "" || row.type === filterTaxiType) &&
      (filterHours === "" || row.hours === filterHours)
    );
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
    
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('https://www.redtaxi.co.in/images/rentals.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white">HOURLY RENTAL</h1>
          <p className="text-lg text-white mt-2">
            Hassle-Free Bookings for Every Business Need
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <ButtonGroup/>
      </div>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
 
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Filter Price List</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">All Cities</option>
                <option>Coimbatore</option>
                <option>Tirupur</option>
                <option>Erode</option>
                <option>Salem</option>
                <option>Madurai</option>
                <option>Chennai</option>
                <option>Trichy</option>
                <option>Vellore</option>
                <option>Kochi</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Taxi Type</label>
              <select
                value={filterTaxiType}
                onChange={(e) => setFilterTaxiType(e.target.value)}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">All Types</option>
                <option>Red</option>
                <option>Mini</option>
                <option>Sedan</option>
                <option>SUV</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hours</label>
              <select
                value={filterHours}
                onChange={(e) => setFilterHours(e.target.value)}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">All Hours</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
                <option>4 Hours</option>
                <option>5 Hours</option>
                <option>6 Hours</option>
                <option>7 Hours</option>
                <option>8 Hours</option>
                <option>9 Hours</option>
                <option>10 Hours</option>
                <option>11 Hours</option>
                <option>12 Hours</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Booking Form</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleFormChange}
                placeholder="Enter City"
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Taxi Type</label>
              <input
                type="text"
                name="taxiType"
                value={formData.taxiType}
                onChange={handleFormChange}
                placeholder="Enter Taxi Type"
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Hours</label>
              <input
                type="text"
                name="hours"
                value={formData.hours}
                onChange={handleFormChange}
                placeholder="Enter Hours"
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Additional Info</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleFormChange}
                placeholder="Enter any additional details"
                className="w-full border rounded px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-900 text-white rounded py-2 hover:bg-red-900"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Price List</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">City</th>
                <th className="border border-gray-300 px-4 py-2">Taxi Type</th>
                <th className="border border-gray-300 px-4 py-2">Hours</th>
                <th className="border border-gray-300 px-4 py-2">Base Fare</th>
                <th className="border border-gray-300 px-4 py-2">Free KM</th>
                <th className="border border-gray-300 px-4 py-2">Extra Fare</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{row.city}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.hours}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.fare}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.km}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.extra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HourlyRental;