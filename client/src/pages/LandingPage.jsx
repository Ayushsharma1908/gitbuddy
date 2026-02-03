import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans">
      {/* Header */}
      <header className="w-full px-6 py-4 md:px-12 md:py-6">
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
              href="#how-it-works"
              className="text-[#171123] hover:text-[#6F2DBD] transition"
            >
              How it Works
            </a>
            
            <a
              href="https://github.com"
              className="text-[#171123] hover:text-[#6F2DBD] transition"
            >
              GitHub
            </a>
          </div>

          {/* Get Started Button */}
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#6F2DBD] hover:bg-[#A663CC] text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#171123] mb-6">
            Understand any GitHub repository in{" "}
            <span className="text-[#6F2DBD]">seconds</span>.
          </h1>
          <p className="text-lg md:text-xl text-[#171123]/70 mb-8 max-w-2xl mx-auto">
            AI-powered visualization and explanations tailored for beginners and
            developers alike. Stop getting lost in the code.
          </p>

          {/* Input Field */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-4">
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <input
                type="text"
                placeholder="https://github.com/facebook/react"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F2DBD] focus:border-transparent"
              />
            </div>
            <button className="bg-[#6F2DBD] hover:bg-[#A663CC] text-white px-8 py-4 rounded-lg font-medium transition whitespace-nowrap">
              Analyze
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Don't know how it works?{" "}
            <a
              href="#"
              className="text-[#6F2DBD] hover:text-[#A663CC] underline"
            >
              Check Here!
            </a>
          </p>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="w-full px-6 py-12 md:px-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#A663CC]/20 text-[#6F2DBD] px-4 py-1 rounded-full text-sm font-medium mb-4">
              CORE FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171123] mb-4">
              Simplify your workflow
            </h2>
            <p className="text-lg text-[#171123]/70 max-w-2xl mx-auto">
              Our AI does the heavy lifting so you can focus on building and
              learning.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Visual Project Tree */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#A663CC]/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#6F2DBD]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#171123] mb-2">
                Visual Project Tree
              </h3>
              <p className="text-[#171123]/70">
                See the structure of the codebase at a glance with interactive
                maps.
              </p>
            </div>

            {/* Feature 2: Tech Stack Detection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#A663CC]/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#6F2DBD]"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T720-120H160Zm0-80h560v-560H160v560Zm80-80h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240ZM160-760v560-560Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#171123] mb-2">
                Tech Stack Detection
              </h3>
              <p className="text-[#171123]/70">
                Instantly identify languages, frameworks, and core libraries.
              </p>
            </div>

            {/* Feature 3: Beginner Friendly */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#A663CC]/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#6F2DBD]"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path d="M520-240v-143l-45-49-21 106-150-31 8-39 111 23 39-196-62 23v66h-40v-94l131-48q15-5 29.5 1t21.5 20q25 51 55.5 66t42.5 15v40q-21 0-55-16.5T524-550l-17 94 53 57v159h-40Zm20-400q-17 0-28.5-11.5T500-680q0-17 11.5-28.5T540-720q17 0 28.5 11.5T580-680q0 17-11.5 28.5T540-640ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#171123] mb-2">
                Beginner Friendly
              </h3>
              <p className="text-[#171123]/70">
                Complex code broken down into plain English for easy learning.
              </p>
            </div>

            {/* Feature 4: Smart Suggestions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#A663CC]/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#6F2DBD]"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm0 280q25 0 42.5-17.5T540-260H420q0 25 17.5 42.5T480-200ZM360-300h240v-60H360v60Zm1-100h238q37-27 59-68.5t22-91.5q0-83-58.5-141.5T480-760q-83 0-141.5 58.5T280-560q0 50 22 91.5t59 68.5Zm22-60q-20-20-31.5-45.5T340-560q0-58 41-99t99-41q58 0 99 41t41 99q0 29-11.5 54.5T577-460H383Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#171123] mb-2">
                Smart Suggestions
              </h3>
              <p className="text-[#171123]/70">
                Get AI-driven tips on where to start exploring first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#6F2DBD] rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to explore?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers using GitBuddy to master new
              codebases and streamline their learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/signup")}
                className="bg-[#6F2DBD] hover:bg-[#A663CC] text-white border border-white px-6 py-2 rounded-lg font-medium transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 py-8 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="GitBuddy Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-[#171123] font-grift">
              GitBuddy
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              Contact
            </a>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
