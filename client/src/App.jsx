import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Welcome to Baggitup ✈️</h1>
        <p className="subtitle">Your smart travel packing and planning assistant</p>
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
