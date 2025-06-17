// Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B3B6F] to-[#34495E] flex items-center justify-center p-8 text-white font-sans">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl">
          Welcome to <span className="text-[#E1E2E1]">Baggitup</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Your smart travel assistant to plan smarter, pack lighter, and travel better.
        </p>
        <button className="bg-[#E1E2E1] text-[#0D1B2A] px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-[#1B3B6F] transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}