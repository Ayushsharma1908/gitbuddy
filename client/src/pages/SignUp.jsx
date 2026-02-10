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

  const handleSignUp = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen font-sans bg-[#FBFBFB] text-gray-900">
      {/* Header */}
      <header className="w-full px-6 py-4 md:px-12 md:py-6 border-b border-gray-100 bg-white">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#6F2DBD] to-[#A663CC]">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-semibold text-[#171123]">
              GitBuddy
            </span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-[#171123] hover:text-[#6F2DBD] transition">
                Home
              </a>
              <a
                href="#how-it-works"
                className="text-[#171123] hover:text-[#6F2DBD] transition"
              >
                How it Works
              </a>
            </div>

            <button
              onClick={() => navigate("/signin")}
              className="text-[#6F2DBD] hover:text-[#A663CC] font-medium transition"
            >
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-md">
          <div className="rounded-2xl shadow-lg overflow-hidden border bg-white border-gray-100">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <h1 className="text-2xl font-bold mb-2 text-[#171123]">
                Join GitBuddy
              </h1>
              <p className="text-sm text-gray-600">
                Start understanding any GitHub repository in seconds
              </p>
            </div>

            {/* Progress */}
            <div className="px-8 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-[#6F2DBD]" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
              <p className="text-xs text-center mt-2 text-gray-500">
                Step 1 of 3: Create your account
              </p>
            </div>

            {/* Social */}
            <div className="px-8 space-y-3">
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700">
                <FcGoogle className="w-5 h-5" />
                Sign up with Google
              </button>

              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700">
                <FaGithub className="w-5 h-5 text-gray-800" />
                Sign up with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="relative py-6 px-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  or sign up with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSignUp} className="px-8 pb-8 space-y-4">
              {[
                { label: "Full Name", name: "fullName", type: "text", placeholder: "John Doe" },
                { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Password", name: "password", type: "password", placeholder: "••••••••" },
                { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "••••••••" }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#6F2DBD] focus:outline-none"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] text-white hover:opacity-90 shadow-md"
              >
                Create Account
              </button>

              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signin")}
                  className="text-[#6F2DBD] hover:text-[#A663CC] font-medium"
                >
                  Sign in
                </button>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
