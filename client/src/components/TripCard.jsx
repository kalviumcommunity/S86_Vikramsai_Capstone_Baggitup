import React from "react";

export default function TripCard({ destination, startDate, itemsPacked, totalItems }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-full max-w-md border border-gray-200">
      <h2 className="text-xl font-semibold text-[#0D1B2A]">{destination}</h2>
      <p className="text-gray-600">{new Date(startDate).toLocaleDateString()}</p>
      <div className="mt-2">
        <p className="text-gray-800">
          Packed: <span className="font-bold">{itemsPacked}</span> / {totalItems}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${(itemsPacked / totalItems) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
