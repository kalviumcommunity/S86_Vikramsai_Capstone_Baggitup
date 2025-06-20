// ✅ src/pages/Destination.jsx
export default function Destination() {
  return (
    <div className="p-6 min-h-screen bg-white">
      <h2 className="text-3xl font-semibold mb-6">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 shadow rounded bg-gray-100">Paris</div>
        <div className="p-4 shadow rounded bg-gray-100">Tokyo</div>
        <div className="p-4 shadow rounded bg-gray-100">New York</div>
      </div>
    </div>
  );
}
