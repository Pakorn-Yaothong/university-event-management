import { useState } from "react";
import { mockEvents } from "../../data/mockEvents";
import EventCard from "../../components/events/EventCard";
import Navbar from "../../components/layout/Navbar";
import SearchBar from "../../components/layout/SearchBar";
import EventDetailsModal from "../../components/events/EventDetailsModal";

// mockup ข้อมูลการลงทะเบียนของ user
const mockRegistrations = [
  {
    id: "reg-1",
    title: "Digital Art Exhibition",
    date: "18/9/2568",
    status: "Under Review",
  },
  {
    id: "reg-2",
    title: "Biomedical Engineering Symposium",
    date: "11/9/2568",
    status: "Confirmed",
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-7xl px-6">
          {/* Header */}
          <header className="pt-10 pb-6 text-center">
            <h1 className="text-4xl font-bold text-violet-700">
              Discover Amazing Events
            </h1>
            <p className="mt-2 text-gray-600">
              Join exciting university activities, connect with fellow students,
              and make unforgettable memories
            </p>
          </header>

          {/* Search Bar */}
          <SearchBar />

          {/* Events Grid */}
          <main className="pb-16">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {mockEvents.map((ev) => (
                <EventCard key={ev.id} event={ev} />
              ))}
            </div>
          </main>

          {/* My Registrations Footer */}
          <footer className="bg-gray-50 rounded-xl shadow p-6 mb-10">
            <h2 className="text-lg font-semibold mb-4">My Registrations</h2>
            <div className="space-y-4">
              {mockRegistrations.map((reg) => (
                <div
                  key={reg.id}
                  className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">{reg.title}</h3>
                    <p className="text-sm text-gray-500">{reg.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
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
                      onClick={() => setSelectedEvent(reg)}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-lg transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </footer>
        </div>
      </div>

      {/* Popup */}
      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
