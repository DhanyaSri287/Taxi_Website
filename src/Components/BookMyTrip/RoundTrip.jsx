import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import FadeInSection from "../FadeInSection";
import "./DayTrip.css";
import BookNow from "./BookNow";

function RoundTrip() {
  const data = [
    {
      city: "Coimbatore",
      routes: [
        { from: "Gandhipuram", to: "RS Puram", kms: 40, price: 400, notes: "Return same day" },
        { from: "Town Hall", to: "Peelamedu", kms: 50, price: 500, notes: "Airport drop & return" },
      ],
    },
    {
      city: "Tiruppur",
      routes: [
        { from: "Avinashi", to: "Udumalpet", kms: 60, price: 600, notes: "" },
        { from: "Kangeyam", to: "Palladam", kms: 55, price: 550, notes: "" },
      ],
    },
    {
      city: "Madurai",
      routes: [
        { from: "Mattuthavani", to: "Anna Nagar", kms: 30, price: 300, notes: "" },
        { from: "Thirunagar", to: "Koodal Nagar", kms: 35, price: 350, notes: "" },
      ],
    },
    {
      city: "Chennai",
      routes: [
        { from: "T Nagar", to: "Tambaram", kms: 80, price: 800, notes: "Shopping round trip" },
        { from: "Anna Salai", to: "Velachery", kms: 70, price: 700, notes: "" },
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
            src="https://images.unsplash.com/photo-1648529739495-d4d8a8abce4e?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="taxiimage"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-5xl font-bold">Round Trip</h1>
            <p className="text-2xl mt-2">Plan your round trip with convenient return rides.</p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mt-4 text-center">
          <ButtonGroup />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-row items-start justify-center gap-6 px-6 py-8">
          {/* Accordion card */}
          <div className="w-1/2 bg-white rounded-lg shadow-md p-6">
            <h1 className="text-lg font-bold mb-4 text-gray-800">
              Round Trip Fares
            </h1>
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
                          <th className="border px-2 py-1">From</th>
                          <th className="border px-2 py-1">To</th>
                          <th className="border px-2 py-1">Distance (KM)</th>
                          <th className="border px-2 py-1">Price</th>
                          <th className="border px-2 py-1">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {item.routes.map((route, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border px-2 py-1">{route.from}</td>
                            <td className="border px-2 py-1">{route.to}</td>
                            <td className="border px-2 py-1">{route.kms}</td>
                            <td className="border px-2 py-1">₹{route.price}</td>
                            <td className="border px-2 py-1">{route.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form card */}
          <div className="w-1/2 bg-white rounded-lg shadow-md p-6">
            <BookNow />
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default RoundTrip;
