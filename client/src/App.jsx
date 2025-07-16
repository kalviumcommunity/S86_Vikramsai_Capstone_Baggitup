import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('Connecting to backend...');

  useEffect(() => {
    fetch('http://localhost:5000/api/test/relationships') 
      .then((res) => res.json())
      .then((data) => {
        const tripsCount = data.trips?.length || 0;
        const itemsCount = data.items?.length || 0;
        setBackendMessage(`Connected! ${tripsCount} trips, ${itemsCount} items loaded.`);
      })
      .catch((err) => {
        console.error('API fetch error:', err);
        setBackendMessage('Failed to connect to backend');
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Welcome to Baggitup ✈️</h1>
        <p className="subtitle">Your smart travel packing and planning assistant</p>
        <p style={{ color: 'green', fontWeight: 'bold' }}>{backendMessage}</p>
      </header>

      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel"
          className="hero-image"
        />
        <div className="hero-text">
          <h2>Plan Smart, Pack Light</h2>
          <p>Discover personalized packing checklists, destination tips, and stress-free trip planning – all in one place.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default App;
