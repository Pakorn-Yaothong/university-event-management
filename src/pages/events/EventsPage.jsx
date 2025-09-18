import { mockEvents } from "../../data/mockEvents";
import EventCard from "../../components/events/EventCard";
import Navbar from "../../components/layout/Navbar";
import SearchBar from "../../components/layout/SearchBar";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
        </div>
      </div>
    </div>
  );
}
