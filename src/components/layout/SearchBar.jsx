// src/components/SearchBar.jsx
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

/**
 * SearchBar: Filter 4 ช่อง (Search / Department / Registration Type / Status)
 * - ทุกกล่องใช้โทนเดียวกัน: bg-gray-100 + shadow-sm + border
 * - Dropdown มี caret, ปิดเมื่อคลิกนอก/กด Esc
 */
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All Departments");
  const [type, setType] = useState("All Types");
  const [status, setStatus] = useState("All Events");

  const departments = [
    { label: "All Departments", icon: "📂" },
    { label: "Computer Science", icon: "💻" },
    { label: "Engineer", icon: "🛠️" },
    { label: "Business", icon: "💼" },
    { label: "Art & Sciences", icon: "🎨" },
    { label: "General", icon: "⭐" },
  ];

  const types = [
    { label: "All Types", icon: "📋" },
    { label: "First Come First Serve", icon: "⚡" },
    { label: "Candidate Selection", icon: "🔎" },
  ];

  const statuses = [
    { label: "All Events", icon: "🌐" },
    { label: "Open for Registration", icon: "🟢" },
    { label: "Registration Closed", icon: "🔒" },
    { label: "Draft Events", icon: "📄" },
    { label: "Completed Events", icon: "✅" },
  ];

  return (
    <div className="bg-white shadow rounded-xl p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Search input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Search Events
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or description"
              className="w-full pl-9 pr-3 py-2 rounded-lg border bg-gray-100 shadow-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>

        {/* Department */}
        <Dropdown
          label="Department"
          value={dept}
          onChange={setDept}
          options={departments}
        />

        {/* Registration Type */}
        <Dropdown
          label="Registration Type"
          value={type}
          onChange={setType}
          options={types}
        />

        {/* Status */}
        <Dropdown
          label="Status"
          value={status}
          onChange={setStatus}
          options={statuses}
        />
      </div>
    </div>
  );
}

function Dropdown({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const ref = useRef(null);

  // ปิด dropdown เมื่อคลิกนอก
  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // ปิดด้วย Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // คีย์บอร์ดในเมนู
  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      onChange(options[activeIdx].label);
      setOpen(false);
    }
  };

  return (
    <div className="flex flex-col relative" ref={ref}>
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        // 🔴 จุดสำคัญ: ให้สีเทาเหมือน Search input
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg border bg-gray-100 shadow-sm text-gray-700 hover:bg-gray-200 transition"
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-20 overflow-hidden"
        >
          {options.map((opt, idx) => {
            const active = idx === activeIdx;
            return (
              <div
                key={opt.label}
                role="option"
                aria-selected={value === opt.label}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => {
                  onChange(opt.label);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 text-sm cursor-pointer
                  ${active ? "bg-violet-50" : "bg-white"}
                  hover:bg-violet-50 text-gray-700`}
              >
                <span className="shrink-0">{opt.icon}</span>
                <span className="truncate">{opt.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
