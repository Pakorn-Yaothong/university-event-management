import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockEvents from "../../data/mockEvents";
import { ArrowLeftCircle, Search, Filter } from "lucide-react";

// ✅ mock registrations
const mockRegistrations = [
  { id: 1, user: "Alice Johnson", eventId: "ev-1", event: "Mental Health & Wellness Fair", status: "Pending" },
  { id: 2, user: "Bob Smith", eventId: "ev-2", event: "Mental Health & Wellness Fair", status: "Approved" },
  { id: 3, user: "Charlie Brown", eventId: "ev-4", event: "Arts & Sciences Expo", status: "Rejected" },
  { id: 4, user: "David Miller", eventId: "ev-5", event: "Business Innovation Summit", status: "Pending" },
  { id: 5, user: "Emma Wilson", eventId: "ev-6", event: "Engineering Hackathon", status: "Approved" },
  { id: 6, user: "Franklin Lee", eventId: "ev-3", event: "Psychology Research Conference", status: "Pending" },
  { id: 7, user: "Grace Taylor", eventId: "ev-1", event: "Mental Health & Wellness Fair", status: "Approved" },
  { id: 8, user: "Henry Davis", eventId: "ev-2", event: "Mental Health & Wellness Fair", status: "Rejected" },
  { id: 9, user: "Isabella Garcia", eventId: "ev-5", event: "Business Innovation Summit", status: "Approved" },
  { id: 10, user: "Jack White", eventId: "ev-6", event: "Engineering Hackathon", status: "Pending" },
  { id: 11, user: "Kelly Green", eventId: "ev-4", event: "Arts & Sciences Expo", status: "Approved" },
  { id: 12, user: "Liam Scott", eventId: "ev-3", event: "Psychology Research Conference", status: "Rejected" },
  { id: 13, user: "Mia Lopez", eventId: "ev-5", event: "Business Innovation Summit", status: "Pending" },
  { id: 14, user: "Noah Brown", eventId: "ev-6", event: "Engineering Hackathon", status: "Approved" },
  { id: 15, user: "Olivia Harris", eventId: "ev-1", event: "Mental Health & Wellness Fair", status: "Pending" },
];

const Registrations = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState(mockRegistrations);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ALL"); // ALL | FCFS | CANDIDATE

  // ✅ update status (Selective Process only)
  const handleStatusChange = (id, newStatus) => {
    setRegistrations(
      registrations.map((r) =>
        r.id === id ? { ...r, status: newStatus } : r
      )
    );
  };

  // ✅ badge color
  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // ✅ enrich registrations with regType
  const enrichedRegs = registrations.map((reg) => {
    const event = mockEvents.find((e) => e.id === reg.eventId);
    return {
      ...reg,
      regType: event ? event.registrationType : "FCFS",
    };
  });

  // ✅ apply search + filter
  const filteredRegs = enrichedRegs.filter((r) => {
    const matchesSearch =
      r.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.event.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === "ALL" || r.regType === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 px-4">
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-7xl p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Registrations</h1>
          <button
            onClick={() => navigate("/admin")}
            className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium
                       bg-gray-100 hover:bg-gray-200 text-gray-700 shadow transition"
          >
            <ArrowLeftCircle size={18} /> Back to Dashboard
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Search by user or event..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
          </div>

          {/* Filter Event Type */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Filter size={18} />
            </span>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="pl-9 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
            >
              <option value="ALL">All Event Types</option>
              <option value="FCFS">First Come First Serve</option>
              <option value="CANDIDATE">Selective Process</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-left">
                <th className="p-4">User</th>
                <th className="p-4">Event</th>
                <th className="p-4">Type</th>
                <th className="p-4">Status</th>
                {filterType !== "FCFS" && <th className="p-4 text-center">Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredRegs.length > 0 ? (
                filteredRegs.map((reg, index) => (
                  <tr
                    key={reg.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-purple-50 transition`}
                  >
                    <td className="p-4 font-medium text-gray-800">{reg.user}</td>
                    <td className="p-4">{reg.event}</td>
                    <td className="p-4">
                      {reg.regType === "FCFS" ? (
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                          First Come First Serve
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                          Selective Process
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      {reg.regType === "FCFS" ? (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          Auto-Approved
                        </span>
                      ) : (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                            reg.status
                          )}`}
                        >
                          {reg.status}
                        </span>
                      )}
                    </td>
                    {reg.regType === "CANDIDATE" && (
                      <td className="p-4 text-center">
                        <select
                          value={reg.status}
                          onChange={(e) =>
                            handleStatusChange(reg.id, e.target.value)
                          }
                          className="border p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={filterType === "FCFS" ? "4" : "5"}
                    className="text-center p-6 text-gray-500 italic"
                  >
                    No registrations found.
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

export default Registrations;
