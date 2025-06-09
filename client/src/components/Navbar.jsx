import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Tickets", path: "/tickets" },
    { label: "Login", path: "/login" },
    { label: "Signup", path: "/signup" },
  ];

  return (
    <nav className="bg-[#34495E] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Baggitup</h1>
        <div className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-white px-3 py-2 rounded-md hover:bg-[#1B3B6F] ${
                pathname === item.path ? "bg-[#1B3B6F]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
