

// Login.jsx
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#34495E] via-[#1B3B6F] to-[#0D1B2A] p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-6">Login</h2>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3B6F]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3B6F]"
          />
          <button
            type="submit"
            className="w-full bg-[#34495E] text-white py-4 rounded-xl hover:bg-[#0D1B2A] transition text-lg font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
