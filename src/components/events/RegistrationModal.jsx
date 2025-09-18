export default function RegistrationModal({ registration, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-2">Event Registration</h3>
        <p className="text-lg font-semibold">{registration.title}</p>
        <p className="text-gray-600 text-sm mb-4">
          Resources for student mental health, Stress management workshops,
          mindfulness sessions, and counseling information.
        </p>

        <div className="space-y-2 text-sm text-gray-700">
          <p>📅 {registration.date}</p>
          <p>👥 0/250 participants</p>
          <p>⏰ Registration closes: 3/8/2568</p>
          <p>📍 Other</p>
        </div>
      </div>
    </div>
  );
}
