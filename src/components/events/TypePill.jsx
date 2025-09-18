export default function TypePill({ type = "FCFS" }) {
  const m = {
    FCFS:      { text: "First Come First Serve", cls: "bg-green-100 text-green-800" },
    CANDIDATE: { text: "Selective Process",      cls: "bg-purple-100 text-purple-800" },
  };
  const t = m[type] ?? m.FCFS;
  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${t.cls}`}>
      {t.text}
    </span>
  );
}
