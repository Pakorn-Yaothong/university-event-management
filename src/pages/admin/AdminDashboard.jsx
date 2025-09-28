import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Users,
  ClipboardList,
  BarChart3,
  ArrowLeftCircle,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Manage Events",
      description: "Create, update, and manage university events.",
      icon: <CalendarDays size={28} />,
      link: "/admin/manage-events",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Manage Users",
      description: "View and manage registered users.",
      icon: <Users size={28} />,
      link: "/admin/manage-users",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Registrations",
      description: "Review and approve event registrations.",
      icon: <ClipboardList size={28} />,
      link: "/admin/registrations",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Reports",
      description: "View analytics and generate reports.",
      icon: <BarChart3 size={28} />,
      link: "/admin/reports",
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 px-4">
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => navigate("/events")}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-medium transition"
            >
              <ArrowLeftCircle size={18} /> Back to Events
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className="p-6 rounded-2xl border shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer bg-gray-50"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.color} mb-4`}>
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* background curve */}
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

export default AdminDashboard;
