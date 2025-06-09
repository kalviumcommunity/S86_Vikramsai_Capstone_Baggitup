import React from "react";

function Tickets() {
  const ticketList = [
    { id: 1, destination: "Paris", date: "2025-06-20", price: "$350" },
    { id: 2, destination: "Tokyo", date: "2025-07-10", price: "$620" },
    { id: 3, destination: "New York", date: "2025-08-01", price: "$500" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Travel Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ticketList.map((ticket) => (
          <div key={ticket.id} className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{ticket.destination}</h2>
            <p className="text-gray-600">Date: {ticket.date}</p>
            <p className="text-gray-600">Price: {ticket.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
