import React from "react";

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded w-96">
        <h2 className="text-center font-bold mb-6">Create a New Account</h2>
        <input type="text" placeholder="Enter your full name" className="w-full p-2 mb-4 border" />
        <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4 border" />
        <input type="password" placeholder="Enter your password" className="w-full p-2 mb-4 border" />
        <input type="password" placeholder="Confirm your password" className="w-full p-2 mb-4 border" />
        <button className="bg-black text-white w-full py-2">Sign Up</button>
        <p className="text-center text-sm mt-4">Already have an account? <a href="/login" className="underline">Login</a></p>
      </div>
    </div>
  );
}
