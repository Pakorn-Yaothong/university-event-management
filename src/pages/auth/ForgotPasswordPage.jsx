export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address and we’ll send you instructions to reset your password.
        </p>
        <input
          type="email"
          placeholder="mail@example.com"
          className="w-full px-4 py-3 mb-5 rounded-xl bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="w-full py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold shadow-md">
          Send Reset Link
        </button>
        <p className="mt-6 text-sm text-center text-gray-600">
          Remembered your password?{" "}
          <a href="/login" className="font-bold text-gray-800 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}
