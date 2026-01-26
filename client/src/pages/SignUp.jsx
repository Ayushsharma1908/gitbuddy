import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleGoogleSignUp = () => {
    // Add Google OAuth logic here
    console.log("Google Sign Up");
  };

  const handleGithubSignUp = () => {
    // Add GitHub OAuth logic here
    console.log("GitHub Sign Up");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Sign Up Data:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

          {/* Sign In Button */}
          <button 
            onClick={() => navigate("/signin")}
            className="text-[#6F2DBD] hover:text-[#A663CC] font-medium transition"
          >
            Sign In
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
                Join GitBuddy
              </h1>
              <p className="text-gray-600 text-sm">
                Start understanding any GitHub repository in seconds
              </p>
            </div>

            {/* Progress Indicator (Optional) */}
            <div className="px-8 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-2 w-2 bg-[#6F2DBD] rounded-full"></div>
                <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">
                Step 1 of 3: Create your account
              </p>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="px-8 space-y-3">
              <button
                onClick={handleGoogleSignUp}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FcGoogle className="w-5 h-5" />
                <span className="text-gray-700 font-medium">
                  Sign up with Google
                </span>
              </button>

              <button
                onClick={handleGithubSignUp}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaGithub className="w-5 h-5 text-gray-800" />
                <span className="text-gray-700 font-medium">
                  Sign up with GitHub
                </span>
              </button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or sign up with email</span>
                </div>
              </div>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSignUp} className="px-8 pb-8 space-y-4">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent transition"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent transition"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  minLength="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent transition"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent transition"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="h-4 w-4 text-[#6F2DBD] focus:ring-[#6F2DBD] border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-[#6F2DBD] hover:underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className="text-[#6F2DBD] hover:underline">Privacy Policy</a>
                </label>
              </div>

              {/* Newsletter Subscription (Optional) */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  defaultChecked
                  className="h-4 w-4 text-[#6F2DBD] focus:ring-[#6F2DBD] border-gray-300 rounded mt-1"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Send me product updates, tips, and community highlights
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] hover:opacity-90 text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg mt-4"
              >
                Create Account
              </button>

              {/* Sign In Link */}
              <div className="text-center pt-4">
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/signin")}
                    className="text-[#6F2DBD] hover:text-[#A663CC] font-medium transition"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>

            {/* Features Preview */}
            <div className="bg-gradient-to-r from-[#6F2DBD]/5 to-[#A663CC]/5 px-8 py-6 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-[#171123] mb-3">
                What you'll get:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#6F2DBD] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited repository analysis
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#6F2DBD] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AI-powered code explanations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#6F2DBD] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Visual project tree maps
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#6F2DBD] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Save and organize favorite repos
                </li>
              </ul>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Your data is secured with 256-bit SSL encryption
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}