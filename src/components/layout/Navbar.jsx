import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: ถ้ามีระบบ auth จริงก็เคลียร์ token/session ตรงนี้ด้วย
    navigate("/login"); 
  };

  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-center">
      <div className="flex items-center justify-between w-full max-w-6xl">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold">
            U
          </div>
          <span className="text-lg font-semibold text-violet-700">
            University Events
          </span>
        </div>

        {/* Right: User info + Logout */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-sm font-medium">PY</span>
            </div>
            <span className="text-sm font-medium text-gray-600">
              Pakorn Yawtong
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
