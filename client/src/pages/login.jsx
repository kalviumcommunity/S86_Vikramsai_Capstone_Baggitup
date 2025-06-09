import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded w-96">
        <h2 className="text-center font-bold mb-6">Login to Your Account</h2>
        <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4 border" />
        <input type="password" placeholder="Enter your password" className="w-full p-2 mb-4 border" />
        <div className="flex justify-between items-center mb-4 text-sm">
          <button className="bg-black text-white px-4 py-2">Login</button>
          <a href="#" className="text-gray-600">Forgot Password?</a>
        </div>
        <p className="text-center text-sm">Don't have an account? <a href="/signup" className="underline">Sign Up</a></p>
      </div>
    </div>
  );
}
