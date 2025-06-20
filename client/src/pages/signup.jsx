// ✅ src/pages/Signup.jsx
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-4 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4 focus:outline-none"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Sign Up
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/login" className="text-green-600">Login</Link>
        </p>
      </div>
    </div>
  );
}