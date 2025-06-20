// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0D1B2A] text-white p-4 shadow-md">
      <ul className="flex gap-6 justify-center text-lg font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}
