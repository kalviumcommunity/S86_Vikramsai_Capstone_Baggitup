import React, { useState } from "react";

export default function PackingListItem({ label, initialChecked = false }) {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <div
      className={`flex items-center justify-between p-2 rounded-md border mb-2 cursor-pointer ${
        checked ? "bg-green-100 border-green-400" : "bg-white border-gray-300"
      }`}
      onClick={() => setChecked(!checked)}
    >
      <span className={checked ? "line-through text-gray-500" : ""}>
        {label}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-4 h-4 accent-blue-500"
      />
    </div>
  );
}
