// Destinations.jsx
import React from "react";

export default function Destinations() {
  return (
    <div className="min-h-screen bg-[#E1E2E1] p-10">
      <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-10 underline">Explore Destinations</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {["Paris", "Tokyo", "New York", "Rome", "Sydney", "Cape Town"].map((city) => (
          <div
            key={city}
            className="bg-white rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-[#ccc]"
          >
            <h3 className="text-2xl font-bold text-[#1B3B6F]">{city}</h3>
            <p className="text-sm text-[#34495E] mt-2">Discover the beauty of {city} and what to pack for your trip!</p>
          </div>
        ))}
      </div>
    </div>
  );
}