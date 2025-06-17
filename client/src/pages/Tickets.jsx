import React from "react";

export default function Tickets() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#E1E2E1] via-[#1B3B6F] to-[#0D1B2A] p-8 text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">Your Travel Tickets</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {["Flight to Paris", "Train to Rome", "Bus to Tokyo"].map((ticket, i) => (
          <div
            key={i}
            className="bg-white text-[#1B3B6F] shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold">{ticket}</h3>
            <p className="text-sm mt-2 text-[#34495E]">
              Ticket ID: #{1000 + i} <br />
              Departure: {["10:00 AM", "2:30 PM", "6:45 PM"][i]}
            </p>
            <button className="mt-4 bg-[#34495E] text-white px-4 py-2 rounded-xl hover:bg-[#0D1B2A]">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
