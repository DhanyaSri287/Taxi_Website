import React, { useState } from "react";

function BookNow() {
  const [tripType, setTripType] = useState("");
  const [numPersons, setNumPersons] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!`
    );
  };
  return (
    <div className="p-0 h-full">
      <h2 className="text-lg font-bold mb-6 text-gray-800">Booking Form</h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex items-center gap-4">
          <label className="w-40 whitespace-nowrap font-medium">Pick Up Location</label>
          <input
            type="text"
            placeholder="Pickup Location"
            className="flex-1 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="w-40 whitespace-nowrap font-medium">Drop Location</label>
          <input
            type="text"
            placeholder="Drop Location"
            className="flex-1 border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="w-40 whitespace-nowrap font-medium">Trip Type</label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="flex-1 border border-gray-300 p-2 rounded"
          >
            <option value="">Select Trip Type</option>
            <option value="oneday">One Day Trip</option>
            <option value="roundtrip">Round Trip</option>
            <option value="rental">Rental</option>
          </select>
        </div>

        {tripType === "rental" && (
          <>
            <div className="flex items-center gap-4">
              <label className="w-40 whitespace-nowrap font-medium">License Proof</label>
              <input
                type="file"
                accept="image/*,.pdf"
                className="flex-1 border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 whitespace-nowrap font-medium">Aadhar Proof</label>
              <input
                type="file"
                accept="image/*,.pdf"
                className="flex-1 border border-gray-300 p-2 rounded"
              />
            </div>
          </>
        )}

        <div className="flex items-center gap-4">
          <label className="w-40 whitespace-nowrap font-medium">Number of Persons</label>
          <select
            value={numPersons}
            onChange={(e) => setNumPersons(e.target.value)}
            className="flex-1 border border-gray-300 p-2 rounded"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-900 text-white py-2 rounded hover:bg-red-800"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookNow;
