import React from "react";

function Destinations() {
  const destinationList = [
    { id: 1, name: "Paris", description: "City of lights and love." },
    { id: 2, name: "Tokyo", description: "Where tradition meets future." },
    { id: 3, name: "New York", description: "The city that never sleeps." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Popular Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinationList.map((dest) => (
          <div key={dest.id} className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{dest.name}</h2>
            <p className="text-gray-600">{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
