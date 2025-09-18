import EventCard from "./EventCard";

export default function EventList({ events }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map(ev => <EventCard key={ev.id} event={ev} />)}
    </div>
  );
}
