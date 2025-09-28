import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockEvents from "../../data/mockEvents";
import {
  ArrowLeftCircle,
  CalendarDays,
  Pencil,
  Trash2,
  Plus,
  Search,
} from "lucide-react";

const ManageEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState(mockEvents);
  const [searchTerm, setSearchTerm] = useState("");
  const [newEvent, setNewEvent] = useState({
    id: "",
    title: "",
    department: "",
    registrationType: "FCFS",
    status: "OPEN",
    regStart: "",
    regEnd: "",
    eventStart: "",
    eventEnd: "",
    capacity: 100,
    confirmedCount: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  // ✅ Add Event
  const handleAddEvent = () => {
    if (!newEvent.title.trim()) return alert("Please enter an event title.");
    setEvents([...events, { ...newEvent, id: `ev-${events.length + 1}` }]);
    resetForm();
  };

  // ✅ Delete Event
  const handleDeleteEvent = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((ev) => ev.id !== id));
    }
  };

  // ✅ Edit Event → ใช้ฟอร์มด้านบนแทน modal
  const handleEditEvent = (event) => {
    setNewEvent(event);
    setIsEditing(true);
  };

  // ✅ Save Edit
  const handleSaveEdit = () => {
    setEvents(events.map((ev) => (ev.id === newEvent.id ? newEvent : ev)));
    resetForm();
    setIsEditing(false);
  };

  // ✅ Cancel Edit
  const handleCancelEdit = () => {
    resetForm();
    setIsEditing(false);
  };

  // reset form
  const resetForm = () => {
    setNewEvent({
      id: "",
      title: "",
      department: "",
      registrationType: "FCFS",
      status: "OPEN",
      regStart: "",
      regEnd: "",
      eventStart: "",
      eventEnd: "",
      capacity: 100,
      confirmedCount: 0,
    });
  };

  // ✅ Status badge style
  const getStatusStyle = (status) => {
    switch (status) {
      case "OPEN":
        return "bg-green-100 text-green-700";
      case "CLOSED":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  // ✅ Search filter
  const filteredEvents = events.filter((ev) =>
    ev.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 px-4">
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-7xl p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>
          <button
            onClick={() => navigate("/admin")}
            className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium
                       bg-gray-100 hover:bg-gray-200 text-gray-700 shadow transition"
          >
            <ArrowLeftCircle size={18} /> Back to Dashboard
          </button>
        </div>

        {/* ➕ Add/Edit Event */}
        <div className="mb-8 p-6 rounded-2xl border bg-gray-50 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-purple-700">
            <Plus size={20} /> {isEditing ? "Edit Event" : "Add New Event"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Event Title
              </label>
              <input
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Department
              </label>
              <input
                type="text"
                placeholder="Department name"
                value={newEvent.department}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, department: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Registration Type
              </label>
              <select
                value={newEvent.registrationType}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, registrationType: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              >
                <option value="FCFS">First Come First Serve</option>
                <option value="CANDIDATE">Selective Process</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Event Status
              </label>
              <select
                value={newEvent.status}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, status: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              >
                <option value="OPEN">Open</option>
                <option value="CLOSED">Closed</option>
                <option value="SOON">Soon</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Registration Start Date
              </label>
              <input
                type="date"
                value={newEvent.regStart}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, regStart: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Registration End Date
              </label>
              <input
                type="date"
                value={newEvent.regEnd}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, regEnd: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Event Start Date
              </label>
              <input
                type="date"
                value={newEvent.eventStart}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, eventStart: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Event End Date
              </label>
              <input
                type="date"
                value={newEvent.eventEnd}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, eventEnd: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Capacity
              </label>
              <input
                type="number"
                placeholder="Max participants"
                value={newEvent.capacity}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, capacity: e.target.value })
                }
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>
          </div>

          {/* ปุ่ม */}
          <div className="mt-6 flex gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveEdit}
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 shadow-md"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-gray-500 hover:bg-gray-600 shadow-md"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleAddEvent}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-md"
              >
                Add Event
              </button>
            )}
          </div>
        </div>

        {/* 🔍 Search */}
        <div className="mb-6 relative w-full">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
          />
        </div>

        {/* 📋 Events Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-left">
                <th className="p-4">Title</th>
                <th className="p-4">Department</th>
                <th className="p-4">Type</th>
                <th className="p-4">Status</th>
                <th className="p-4">Reg Period</th>
                <th className="p-4">Event Date</th>
                <th className="p-4">Capacity</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((ev, index) => (
                  <tr
                    key={ev.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-purple-50 transition`}
                  >
                    <td className="p-4 flex items-center gap-2 text-gray-800">
                      <CalendarDays className="text-purple-600 w-6 h-6" />
                      {ev.title}
                    </td>
                    <td className="p-4">{ev.department}</td>
                    <td className="p-4">{ev.registrationType}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                          ev.status
                        )}`}
                      >
                        {ev.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700">
                      {ev.regStart} → {ev.regEnd}
                    </td>
                    <td className="p-4 text-gray-700">
                      {ev.eventStart} → {ev.eventEnd}
                    </td>
                    <td className="p-4">{ev.capacity}</td>
                    <td className="p-4 flex gap-2 justify-center">
                      <button
                        onClick={() => handleEditEvent(ev)}
                        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm flex items-center gap-1 shadow"
                      >
                        <Pencil size={16} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(ev.id)}
                        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm flex items-center gap-1 shadow"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center p-6 text-gray-500 italic"
                  >
                    No events found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Background curve */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,128C384,149,480,171,576,154.7C672,139,768,85,864,80C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64V320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default ManageEvents;
