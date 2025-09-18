export default function StatusPill({ status = "OPEN" }) {
  const map = {
    OPEN: {
      label: "Open",
      cls: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white shadow",
      icon: <span className="inline-block w-2.5 h-2.5 rounded-full bg-white/90 shadow-inner" />,
    },
    SOON: {
      label: "Soon",
      cls: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white shadow",
      icon: <span className="text-white/95">➡️</span>,
    },
    CLOSED: {
      label: "Closed",
      cls: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-600 text-white shadow",
      icon: <span className="text-yellow-300">🔒</span>,
    },
  };
  const s = map[status] ?? map.OPEN;
  return <span className={s.cls}>{s.icon}{s.label}</span>;
}
