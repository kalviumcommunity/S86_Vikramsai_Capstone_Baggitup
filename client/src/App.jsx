import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Tickets from "./pages/Tickets";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#E1E2E1] min-h-screen text-[#0D1B2A]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
};

export default App;
