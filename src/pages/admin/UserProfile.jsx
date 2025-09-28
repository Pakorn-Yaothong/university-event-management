import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockUsers from "../../data/mockUsers";
import mockEvents from "../../data/mockEvents";
import { ArrowLeftCircle, User, Mail, Briefcase, GraduationCap, CalendarDays } from "lucide-react";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 text-white text-xl font-semibold">
        User not found
      </div>
    );
  }

  const registeredEvents = mockEvents.filter((event) =>
    user.eventsRegistered.includes(event.id)
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 px-4">
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {user.name}'s Profile
          </h1>
          <button
            onClick={() => navigate("/admin/manage-users")}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium
                       bg-gray-100 hover:bg-gray-200 text-gray-700 shadow transition"
          >
            <ArrowLeftCircle size={18} /> Back to Manage Users
          </button>
        </div>

        {/* User Info */}
        <div className="bg-purple-50 p-6 rounded-2xl shadow mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-gray-800">
              <Mail className="text-purple-600" />
              <p><span className="font-semibold">Email:</span> {user.email}</p>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Briefcase className="text-purple-600" />
              <p><span className="font-semibold">Department:</span> {user.department}</p>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <GraduationCap className="text-purple-600" />
              <p><span className="font-semibold">Role:</span> {user.role}</p>
            </div>
          </div>
        </div>

        {/* Registered Events */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Registered Events</h2>
        {registeredEvents.length > 0 ? (
          <ul className="space-y-3">
            {registeredEvents.map((event) => (
              <li
                key={event.id}
                className="flex items-center gap-3 p-4 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                <CalendarDays className="text-purple-600 w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    {event.eventStart} → {event.eventEnd}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No events registered.</p>
        )}
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

export default UserProfile;
