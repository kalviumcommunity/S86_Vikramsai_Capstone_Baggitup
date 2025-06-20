// ✅ src/pages/Tickets.jsx
export default function Tickets() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold mb-4">Your Tickets</h2>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded shadow">Flight to Tokyo - 22 July</div>
        <div className="p-4 bg-white rounded shadow">Train to Delhi - 10 August</div>
      </div>
    </div>
  );
}