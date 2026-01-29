import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's preferred color scheme
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up");
  };

  const handleGithubSignUp = () => {
    console.log("GitHub Sign Up");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
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
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-[#0F0F1A] text-gray-100' : 'bg-[#FBFBFB] text-gray-900'
    }`}>
      {/* Header */}
      <header className={`w-full px-6 py-4 md:px-12 md:py-6 border-b transition-colors duration-300 ${
        darkMode ? 'border-gray-800 bg-[#0F0F1A]' : 'border-gray-100 bg-white'
      }`}>
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
              darkMode 
                ? 'bg-gradient-to-br from-[#8A4ED8] to-[#B279E6]' 
                : 'bg-gradient-to-br from-[#6F2DBD] to-[#A663CC]'
            }`}>
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className={`text-xl font-semibold font-grift ${
              darkMode ? 'text-gray-100' : 'text-[#171123]'
            }`}>
              GitBuddy
            </span>
          </div>

          {/* Navigation Links & Dark Mode Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="/" 
                className={`transition ${
                  darkMode ? 'text-gray-300 hover:text-[#A663CC]' : 'text-[#171123] hover:text-[#6F2DBD]'
                }`}
              >
                Home
              </a>
              <a 
                href="#how-it-works" 
                className={`transition ${
                  darkMode ? 'text-gray-300 hover:text-[#A663CC]' : 'text-[#171123] hover:text-[#6F2DBD]'
                }`}
              >
                How it Works
              </a>
              <a 
                href="#pricing" 
                className={`transition ${
                  darkMode ? 'text-gray-300 hover:text-[#A663CC]' : 'text-[#171123] hover:text-[#6F2DBD]'
                }`}
              >
                Pricing
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                // Sun icon for dark mode
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                // Moon icon for light mode
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Sign In Button */}
            <button 
              onClick={() => navigate("/signin")}
              className={`font-medium transition ${
                darkMode ? 'text-[#A663CC] hover:text-[#B279E6]' : 'text-[#6F2DBD] hover:text-[#A663CC]'
              }`}
            >
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className={`rounded-2xl shadow-lg overflow-hidden border transition-colors duration-300 ${
            darkMode 
              ? 'bg-[#1A1A2E] border-gray-800' 
              : 'bg-white border-gray-100'
          }`}>
            {/* Card Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <h1 className={`text-2xl font-bold mb-2 ${
                darkMode ? 'text-gray-100' : 'text-[#171123]'
              }`}>
                Join GitBuddy
              </h1>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Start understanding any GitHub repository in seconds
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="px-8 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <div className={`h-2 w-2 rounded-full ${
                  darkMode ? 'bg-[#A663CC]' : 'bg-[#6F2DBD]'
                }`}></div>
                <div className={`h-2 w-2 rounded-full ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}></div>
                <div className={`h-2 w-2 rounded-full ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}></div>
              </div>
              <p className={`text-xs text-center mt-2 ${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Step 1 of 3: Create your account
              </p>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="px-8 space-y-3">
              <button
                onClick={handleGoogleSignUp}
                className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-[#2D2D44] border border-gray-700 hover:bg-[#3D3D54] text-gray-200' 
                    : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <FcGoogle className="w-5 h-5" />
                <span className="font-medium">
                  Sign up with Google
                </span>
              </button>

              <button
                onClick={handleGithubSignUp}
                className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-[#2D2D44] border border-gray-700 hover:bg-[#3D3D54] text-gray-200' 
                    : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <FaGithub className={`w-5 h-5 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} />
                <span className="font-medium">
                  Sign up with GitHub
                </span>
              </button>

              {/* Divider */}
              <div className="relative py-4">
                <div className={`absolute inset-0 flex items-center ${
                  darkMode ? 'border-gray-700' : 'border-gray-300'
                }`}>
                  <div className={`w-full border-t ${
                    darkMode ? 'border-gray-700' : 'border-gray-300'
                  }`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-2 ${
                    darkMode 
                      ? 'bg-[#1A1A2E] text-gray-400' 
                      : 'bg-white text-gray-500'
                  }`}>
                    or sign up with email
                  </span>
                </div>
              </div>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSignUp} className="px-8 pb-8 space-y-4">
              {/* Full Name Field */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition ${
                    darkMode 
                      ? 'bg-[#2D2D44] border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#A663CC] focus:border-transparent' 
                      : 'border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent'
                  }`}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition ${
                    darkMode 
                      ? 'bg-[#2D2D44] border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#A663CC] focus:border-transparent' 
                      : 'border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent'
                  }`}
                />
              </div>

              {/* Password Field */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
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
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition ${
                    darkMode 
                      ? 'bg-[#2D2D44] border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#A663CC] focus:border-transparent' 
                      : 'border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent'
                  }`}
                />
                <p className={`text-xs mt-1 ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  Must be at least 8 characters
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition ${
                    darkMode 
                      ? 'bg-[#2D2D44] border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#A663CC] focus:border-transparent' 
                      : 'border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent'
                  }`}
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className={`h-4 w-4 rounded focus:ring-0 mt-1 ${
                    darkMode 
                      ? 'bg-[#2D2D44] border-gray-700 text-[#A663CC]' 
                      : 'border-gray-300 text-[#6F2DBD]'
                  }`}
                />
                <label htmlFor="terms" className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I agree to the{" "}
                  <a href="#" className={`hover:underline ${
                    darkMode ? 'text-[#A663CC]' : 'text-[#6F2DBD]'
                  }`}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className={`hover:underline ${
                    darkMode ? 'text-[#A663CC]' : 'text-[#6F2DBD]'
                  }`}>
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Newsletter Subscription */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  defaultChecked
                  className={`h-4 w-4 rounded focus:ring-0 mt-1 ${
                    darkMode 
                      ? 'bg-[#2D2D44] border-gray-700 text-[#A663CC]' 
                      : 'border-gray-300 text-[#6F2DBD]'
                  }`}
                />
                <label htmlFor="newsletter" className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Send me product updates, tips, and community highlights
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg mt-4 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-[#8A4ED8] to-[#B279E6] hover:opacity-90 text-white' 
                    : 'bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] hover:opacity-90 text-white'
                }`}
              >
                Create Account
              </button>

              {/* Sign In Link */}
              <div className="text-center pt-4">
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/signin")}
                    className={`font-medium transition ${
                      darkMode ? 'text-[#A663CC] hover:text-[#B279E6]' : 'text-[#6F2DBD] hover:text-[#A663CC]'
                    }`}
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>

            {/* Features Preview */}
            <div className={`px-8 py-6 border-t transition-colors duration-300 ${
              darkMode 
                ? 'bg-gradient-to-r from-[#8A4ED8]/10 to-[#B279E6]/10 border-gray-800' 
                : 'bg-gradient-to-r from-[#6F2DBD]/5 to-[#A663CC]/5 border-gray-100'
            }`}>
              <h3 className={`text-sm font-semibold mb-3 ${
                darkMode ? 'text-gray-200' : 'text-[#171123]'
              }`}>
                What you'll get:
              </h3>
              <ul className="space-y-2">
                {['Unlimited repository analysis', 'AI-powered code explanations', 'Visual project tree maps', 'Save and organize favorite repos'].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg className={`w-4 h-4 mr-2 ${
                      darkMode ? 'text-[#A663CC]' : 'text-[#6F2DBD]'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-6 text-center">
            <div className={`inline-flex items-center gap-2 text-xs px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-gray-400' 
                : 'bg-gray-50 text-gray-500'
            }`}>
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