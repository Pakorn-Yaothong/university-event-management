import StatusPill from "./StatusPill";
import TypePill from "./TypePill";

const headerGradient = (dept) => {
  const k = (dept || "").toLowerCase();
  if (k.includes("art")) return "from-rose-400 to-rose-600";
  if (k.includes("business")) return "from-violet-500 to-fuchsia-600";
  if (k.includes("engineer")) return "from-emerald-500 to-emerald-700";
  if (k.includes("computer")) return "from-sky-400 to-indigo-600";
  return "from-amber-500 to-amber-700"; // General
};

const deptColor = (dept) => {
  const k = (dept || "").toLowerCase();
  if (k.includes("art")) return "bg-rose-500";
  if (k.includes("business")) return "bg-violet-600";
  if (k.includes("engineer")) return "bg-emerald-600";
  if (k.includes("computer")) return "bg-sky-600";
  return "bg-amber-500"; // General
};

const Cta = ({ status, type }) => {
  if (status === "CLOSED") {
    return (
      <div className="w-full text-center bg-neutral-200 text-neutral-500 py-3 rounded-xl font-semibold">
        Registration closed
      </div>
    );
  }
  if (type === "CANDIDATE") {
    return (
      <div className="w-full text-center bg-yellow-100 text-yellow-800 py-3 rounded-xl font-semibold">
        Application Under Review
      </div>
    );
  }
  return (
    <button className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition">
      Register Now
    </button>
  );
};

export default function EventCard({ event }) {
  const grad = headerGradient(event.department);
  const deptBg = deptColor(event.department);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Header */}
      <div className={`relative h-44 bg-gradient-to-br ${grad} flex items-center justify-center`}>
        {/* Faculty label */}
        <span className={`absolute top-3 left-3 inline-flex px-3 py-1 rounded-full text-sm font-semibold text-white shadow ${deptBg}`}>
          {event.department}
        </span>
        {/* Status pill */}
        <div className="absolute top-3 right-3">
          <StatusPill status={event.status} />
        </div>
        {/* Calendar icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-14 h-14 text-black/80"
          fill="none"
        >
          <path
            d="M7 3v4M17 3v4M3 9h18M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Body */}
      <div className="px-8 pt-5 pb-6 flex flex-col flex-grow">
        <TypePill type={event.registrationType} />
        <h3 className="mt-3 text-xl font-semibold text-gray-900">{event.title}</h3>
        <p className="mt-2 text-base text-gray-600 flex-grow">{event.description}</p>

        <ul className="mt-4 space-y-2 text-[15px] text-gray-600">
          <li className="flex items-center gap-2"><span>📅</span><span>{event.eventStart} - {event.eventEnd}</span></li>
          <li className="flex items-center gap-2"><span>🕑</span><span>Registration: {event.regStart} - {event.regEnd}</span></li>
          <li className="flex items-center gap-2"><span>👥</span><span>{event.confirmedCount}/{event.capacity} participants</span></li>
          <li className="flex items-center gap-2"><span>📍</span><span>{event.department}</span></li>
        </ul>

        <div className="mt-6">
          <Cta status={event.status} type={event.registrationType} />
        </div>
      </div>
    </div>
  );
}
