export function StatusBadge({ status }) {
  const styles = {
    OPEN: "bg-green-500 text-white",
    CLOSED: "bg-gray-500 text-white",
    SOON: "bg-blue-500 text-white",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
      {status === "OPEN" ? "Open" : status === "SOON" ? "Soon" : "Closed"}
    </span>
  );
}

export function TypeBadge({ type }) {
  const styles = {
    FCFS: "bg-green-100 text-green-800",
    CANDIDATE: "bg-purple-100 text-purple-800",
  };

  return (
    <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${styles[type]}`}>
      {type === "FCFS" ? "First Come First Serve" : "Candidate Selection"}
    </span>
  );
}
