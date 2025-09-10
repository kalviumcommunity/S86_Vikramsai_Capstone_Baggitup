import { useEffect, useState } from "react";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TripCard from "./components/TripCard";
import PackingListItem from "./components/PackingListItem";
import WeatherIndicator from "./components/WeatherIndicator";

function App() {
  const [backendMessage, setBackendMessage] = useState(
    "Connecting to backend..."
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/test/relationships")
      .then((res) => res.json())
      .then((data) => {
        const tripsCount = data.trips?.length || 0;
        const itemsCount = data.items?.length || 0;
        setBackendMessage(
          `Connected! ${tripsCount} trips, ${itemsCount} items loaded.`
        );
      })
      .catch((err) => {
        console.error("API fetch error:", err);
        setBackendMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <header className="text-center py-6">
          <h1 className="text-3xl font-bold text-[#0D1B2A]">
            Welcome to Baggitup ✈️
          </h1>
          <p className="text-lg text-gray-600">
            Your smart travel packing and planning assistant
          </p>
          <p style={{ color: "green", fontWeight: "bold" }}>{backendMessage}</p>
        </header>

        {/* Hero Section */}
        <section className="hero flex flex-col md:flex-row items-center justify-center gap-6 px-6">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
            className="hero-image rounded-lg shadow-lg max-w-md"
          />
          <div className="hero-text max-w-md">
            <h2 className="text-2xl font-semibold text-[#0D1B2A] mb-2">
              Plan Smart, Pack Light
            </h2>
            <p className="text-gray-700 mb-4">
              Discover personalized packing checklists, destination tips, and
              stress-free trip planning – all in one place.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </section>

        {/* Trip Cards */}
        <section className="px-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Trips</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <TripCard
              destination="Goa"
              startDate="2025-10-20"
              itemsPacked={5}
              totalItems={10}
            />
            <TripCard
              destination="Manali"
              startDate="2025-12-15"
              itemsPacked={2}
              totalItems={8}
            />
          </div>
        </section>

        {/* Packing List */}
        <section className="px-6 mt-10 max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Packing List</h2>
          <PackingListItem label="Toothbrush" />
          <PackingListItem label="Jacket" />
          <PackingListItem label="Power Bank" initialChecked={true} />
        </section>

        {/* Weather Info */}
        <section className="px-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Weather Info</h2>
          <WeatherIndicator
            iconUrl="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
            temperature={28}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;