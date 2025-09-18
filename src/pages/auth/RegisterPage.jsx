import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: ทำ register จริง เช่น call API
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800">
      {/* Left: Welcome Text */}
      <div className="hidden lg:flex flex-col text-white px-12 w-1/2">
        <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
        <p className="text-lg opacity-80 leading-relaxed">
          สมัครสมาชิกเพื่อเข้าร่วมและติดตามกิจกรรมในมหาวิทยาลัยได้ง่าย ๆ  
          จัดการโปรไฟล์ ดูประวัติการเข้าร่วม และรับการแจ้งเตือนกิจกรรมใหม่ ๆ ได้ที่นี่
        </p>
      </div>

      {/* Right: Register Form */}
      <div className="relative z-10 bg-white rounded-3xl shadow-xl w-full max-w-md p-10">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-2">Sign Up</h3>
        <p className="text-center text-gray-500 mb-6">Create your account</p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
            <input
              type="text"
              placeholder="enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password*</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-semibold text-purple-600 cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
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
}
