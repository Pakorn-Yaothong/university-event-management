import { useState } from "react";
import RegistrationModal from "./RegistrationModal";

export default function MyRegistrations({ registrations }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-12 bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-4">My Registrations</h2>
      <div className="space-y-4">
        {registrations.map((reg) => (
          <div
            key={reg.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">{reg.title}</p>
              <p className="text-sm text-gray-500">{reg.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  reg.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {reg.status}
              </span>
              <button
                onClick={() => setSelected(reg)}
                className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <RegistrationModal registration={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
