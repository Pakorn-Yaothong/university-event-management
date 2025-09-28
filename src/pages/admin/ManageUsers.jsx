import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle2, ArrowLeftCircle } from "lucide-react";
import mockUsers from "../../data/mockUsers";

const ManageUsers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // filter users by search
  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 px-4">
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
          <button
            onClick={() => navigate("/admin")}
            className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium
                       bg-gray-100 hover:bg-gray-200 text-gray-700 shadow transition"
          >
            <ArrowLeftCircle size={18} /> Back to Dashboard
          </button>
        </div>

        {/* Search */}
        <div className="mb-6 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border p-3 rounded-xl focus:ring-2 focus:ring-purple-500 shadow-sm"
          />
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-2xl shadow">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-purple-100 text-left">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Department</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition text-gray-800"
                  >
                    <td className="p-3 border flex items-center gap-2">
                      <UserCircle2 className="text-purple-600" size={22} />
                      {user.name}
                    </td>
                    <td className="p-3 border">{user.email}</td>
                    <td className="p-3 border">{user.department}</td>
                    <td className="p-3 border">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === "Organizer"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-3 border">
                      <Link
                        to={`/admin/user/${user.id}`}
                        className="px-4 py-2 rounded-xl font-medium text-white
                                   bg-gradient-to-r from-purple-600 to-pink-500
                                   hover:from-purple-700 hover:to-pink-600
                                   shadow-md hover:shadow-lg transition"
                      >
                        View Profile
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-6 text-gray-500 italic"
                  >
                    No users found.
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

export default ManageUsers;
