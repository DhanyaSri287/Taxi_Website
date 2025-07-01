import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import FadeInSection from "../FadeInSection";
import BookNow from "./BookNow";
import "./DayTrip.css";

function DayTrip() {
  const data = [
    {
      city: "Coimbatore",
      places: [
        { name: "Gandhipuram", price: 200, kms: 20, notes: "Near bus stand" },
        { name: "Town Hall", price: 180, kms: 15, notes: "Market area" },
        { name: "Peelamedu", price: 250, kms: 25, notes: "Airport road" },
        { name: "RS Puram", price: 220, kms: 18, notes: "Residential area" },
        { name: "Singanallur", price: 210, kms: 22, notes: "Industrial area" },
      ],
    },
    {
      city: "Tiruppur",
      places: [
        { name: "Avinashi", price: 300, kms: 30, notes: "Nearby town" },
        { name: "Kangeyam", price: 250, kms: 28, notes: "" },
        { name: "Palladam", price: 240, kms: 20, notes: "" },
        { name: "Udumalpet", price: 350, kms: 45, notes: "" },
        { name: "Dharapuram", price: 400, kms: 50, notes: "" },
      ],
    },
    {
      city: "Madurai",
      places: [
        { name: "Mattuthavani", price: 280, kms: 18, notes: "Bus stand" },
        { name: "Anna Nagar", price: 300, kms: 22, notes: "" },
        { name: "Thirunagar", price: 320, kms: 25, notes: "" },
        { name: "Koodal Nagar", price: 260, kms: 17, notes: "" },
        { name: "Tallakulam", price: 290, kms: 20, notes: "" },
      ],
    },
    {
      city: "Chennai",
      places: [
        { name: "T Nagar", price: 350, kms: 30, notes: "Shopping hub" },
        { name: "Anna Salai", price: 400, kms: 35, notes: "" },
        { name: "Velachery", price: 450, kms: 40, notes: "" },
        { name: "Tambaram", price: 500, kms: 45, notes: "" },
        { name: "Adyar", price: 420, kms: 38, notes: "" },
      ],
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <>
      <FadeInSection>
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg mt-4">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="taxiimage"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-5xl font-bold">One Way Trip</h1>
            <p className="text-2xl mt-2">Seamless one-way travel for stress-free drop-offs.</p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mt-4 text-center">
          <ButtonGroup />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 px-6 py-8">
          {/* Accordion */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
            <h1 className="text-lg font-bold mb-4 text-gray-800">One Way Trip Fares</h1>
            <div className="accordion w-full">
              {data.map((item, i) => (
                <div key={i} className="item mb-4 pb-2">
                  <div
                    className="title bg-red-900 flex justify-between items-center cursor-pointer text-base font-medium rounded-xl"
                    onClick={() => toggle(i)}
                  >
                    <h2 className="p-4">{item.city}</h2>
                    <span>
                      {selected === i ? (
                        <i className="ri-arrow-up-s-line"></i>
                      ) : (
                        <i className="ri-arrow-down-s-line"></i>
                      )}
                    </span>
                  </div>
                  <div className={selected === i ? "content show mt-2" : "hidden"}>
                    <table className="w-full border text-sm">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="border px-2 py-1">Name</th>
                          <th className="border px-2 py-1">Price</th>
                          <th className="border px-2 py-1">Kilometers</th>
                          <th className="border px-2 py-1">Place</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {item.places.map((place, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border px-2 py-1">{place.name}</td>
                            <td className="border px-2 py-1">{place.price}</td>
                            <td className="border px-2 py-1">{place.kms}</td>
                            <td className="border px-2 py-1">{place.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
            <BookNow />
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default DayTrip;
