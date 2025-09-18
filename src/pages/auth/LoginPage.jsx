import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: ใส่ logic ตรวจสอบ login จริง
    navigate("/events");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-6xl mx-auto rounded-3xl shadow-xl bg-transparent">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center text-white px-10 lg:w-1/2 hidden lg:flex">
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

        {/* Right Section (Login Form) */}
        <div className="flex justify-center items-center w-full lg:w-1/2 p-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Sign In
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Enter your email and password
            </p>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <label className="block text-sm text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                placeholder="mail@university.com"
                className="w-full px-4 py-3 mb-4 text-sm bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Password */}
              <label className="block text-sm text-gray-700 mb-1">Password*</label>
              <input
                type="password"
                placeholder="Enter a password"
                className="w-full px-4 py-3 mb-4 text-sm bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Sign In button */}
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition"
              >
                Sign In
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Not registered yet?{" "}
              <a href="#" className="font-semibold text-purple-600">
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Purple wave background */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
