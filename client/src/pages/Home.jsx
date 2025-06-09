import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E1E2E1] to-[#34495E] flex flex-col">
      <header className="bg-[#0D1B2A] text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Baggitup</h1>
          <nav className="space-x-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Signup
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="bg-white/90 rounded-2xl p-10 shadow-xl max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-[#1B3B6F]">Welcome to Baggitup</h2>
          <p className="text-gray-700 mb-6">
            Your smart travel packing and planning assistant. Organize your trips, pack efficiently, and travel worry-free!
          </p>
          <Link
            to="/destinations"
            className="bg-[#1B3B6F] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#34495E] transition"
          >
            Get Started
          </Link>
        </div>
      </main>

      <footer className="bg-[#0D1B2A] text-white text-center py-4">
        <p>&copy; 2025 Baggitup. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
