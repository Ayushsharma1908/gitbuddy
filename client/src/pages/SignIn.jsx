import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignIn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Add Google OAuth logic here
    console.log("Google Sign In");
  };

  const handleGithubSignIn = () => {
    // Add GitHub OAuth logic here
    console.log("GitHub Sign In");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log("Sign In");
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans">
      {/* Header - Same as Landing Page */}
      <header className="w-full px-6 py-4 md:px-12 md:py-6 border-b border-gray-100">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="GitBuddy Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-[#171123] font-grift">
              GitBuddy
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              className="text-[#171123] hover:text-[#6F2DBD] transition"
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              className="text-[#171123] hover:text-[#6F2DBD] transition"
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              className="text-[#171123] hover:text-[#6F2DBD] transition"
            >
              Pricing
            </a>
          </div>

          {/* Sign Up Button */}
          <button 
            onClick={() => navigate("/signup")}
            className="text-[#6F2DBD] hover:text-[#A663CC] font-medium transition"
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Card Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <h1 className="text-2xl font-bold text-[#171123] mb-2">
                Welcome back
              </h1>
              <p className="text-gray-600 text-sm">
                Sign in to continue to GitBuddy
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="px-8 space-y-3">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FcGoogle className="w-5 h-5" />
                <span className="text-gray-700 font-medium">
                  Continue with Google
                </span>
              </button>

              <button
                onClick={handleGithubSignIn}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaGithub className="w-5 h-5 text-gray-800" />
                <span className="text-gray-700 font-medium">
                  Continue with GitHub
                </span>
              </button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or continue with email</span>
                </div>
              </div>
            </div>

            {/* Sign In Form */}
            <form onSubmit={handleSignIn} className="px-8 pb-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent transition"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[#6F2DBD] hover:text-[#A663CC] transition"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent transition"
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-[#6F2DBD] focus:ring-[#6F2DBD] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] hover:opacity-90 text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign In
              </button>

              {/* Sign Up Link */}
              <div className="text-center pt-4">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/signup")}
                    className="text-[#6F2DBD] hover:text-[#A663CC] font-medium transition"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </form>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                By continuing, you agree to our{" "}
                <a href="#" className="text-[#6F2DBD] hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-[#6F2DBD] hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>

          {/* Demo Credentials Card (Optional) */}
          <div className="mt-6 bg-gradient-to-r from-[#6F2DBD]/10 to-[#A663CC]/10 rounded-xl p-4 border border-[#6F2DBD]/20">
            <p className="text-sm text-[#6F2DBD] font-medium mb-1">
              Demo Credentials
            </p>
            <p className="text-xs text-gray-600">
              Try: demo@gitbuddy.com / password: demodemo
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}