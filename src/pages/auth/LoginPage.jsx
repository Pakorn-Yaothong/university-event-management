import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: ทำ auth จริง เช่น call API
    navigate("/events");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800">
      {/* Left: Welcome text */}
      <div className="hidden lg:flex flex-col text-white px-12 w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          ยินดีต้อนรับสู่ University Event Management 🎉
        </h1>
        <p className="text-lg opacity-90 leading-relaxed">
          ติดตามข่าวสาร ลงทะเบียน และเข้าร่วมกิจกรรมของมหาวิทยาลัย
          ได้ง่าย สะดวก และรวดเร็ว  
          <br />
          ✨ ทุกกิจกรรมคือโอกาสในการพัฒนาและสร้างความทรงจำที่ดี
        </p>
      </div>

      {/* Right: Login box */}
      <div className="relative z-10 bg-white rounded-3xl shadow-xl w-full max-w-md p-10">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-2">Sign In</h3>
        <p className="text-center text-gray-500 mb-6">Enter your email and password</p>

        {/* Google login button */}
        <button className="flex items-center justify-center w-full py-3 mb-6 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition">
          <img
            className="h-5 mr-2"
            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
            alt="Google"
          />
          Sign in with Google
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              placeholder="mail@university.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0.5 top-7.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500" />
              <span className="text-gray-600">Keep me logged in</span>
            </label>
            <button
              type="button"
              className="text-purple-600 hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Not registered yet?{" "}
          <span 
            onClick={() => navigate("/register")} 
            className="font-semibold text-purple-600 cursor-pointer"
          >
            Create an Account
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
