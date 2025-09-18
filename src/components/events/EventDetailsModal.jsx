// src/components/events/EventDetailsModal.jsx
export default function EventDetailsModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay มืดจางๆ */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose} // คลิกนอก popup ก็ปิดได้
      ></div>

      {/* กล่อง Popup */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10 animate-fadeIn">
        {/* ปุ่มปิด */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        {/* เนื้อหา popup */}
        <h3 className="text-xl font-bold mb-3">Event Registration</h3>
        <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
        <p className="text-sm text-gray-600 mb-4">
          Resources for student mental health, Stress management workshops,
          mindfulness sessions, and counseling information.
        </p>

        <ul className="space-y-2 text-sm text-gray-700">
          <li>📅 Date: {event.date}</li>
          <li>👥 Participants: 0/250</li>
          <li>⏳ Registration closes: 3/8/2568</li>
          <li>📍 Location: Other</li>
        </ul>

        {/* ปุ่ม Close ด้านล่าง */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
