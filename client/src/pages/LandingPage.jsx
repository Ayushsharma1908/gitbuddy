import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0A1E] font-sans text-white">
      {/* Header */}
      <header className="w-full px-6 py-4 md:px-12 md:py-6 bg-[#0F0A1E]/90 backdrop-blur-sm border-b border-[#2A2250]">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6F2DBD] to-[#A663CC] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">
              RepoLens
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition"
            >
              How it Works
            </a>
            <a
              href="https://github.com/username/repository"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              GitHub
            </a>
          </div>

          {/* Get Started Button */}
          <button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] hover:from-[#A663CC] hover:to-[#6F2DBD] text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full px-6 py-12 md:px-12 md:py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] via-[#0F0A1E] to-[#1A1445]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-gradient-to-r from-[#6F2DBD]/20 to-[#A663CC]/20 text-[#A663CC] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#6F2DBD]/30">
              New: AI-Powered Codebase Visualization
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-purple-200 bg-clip-text text-transparent">
              See through the noise
              <br />
              of any codebase.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              RepoLens visualizes project structures, identifies tech stacks, and suggests 
              AI-driven improvements in seconds. Stop guessing, start building.
            </p>

            {/* Repo link */}
            <div className="mb-12">
              <a
                href="https://github.com/username/repository"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-[#A663CC] group-hover:underline">github.com/username/repository</span>
              </a>
            </div>

            {/* Input Field */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] rounded-lg blur opacity-30"></div>
                <div className="relative bg-[#1A1445] rounded-lg border border-[#2A2250]">
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
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] hover:from-[#A663CC] hover:to-[#6F2DBD] text-white px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/30 whitespace-nowrap transform hover:-translate-y-0.5">
                Analyze
              </button>
            </div>

            <p className="text-gray-400 text-sm">
              Don't know how it works?{" "}
              <a
                href="#how-it-works"
                className="text-[#A663CC] hover:text-white underline transition"
              >
                Check Here!
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-6 py-12 md:px-12 md:py-20 bg-[#1A1445]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How RepoLens Works
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI analyzes any GitHub repository and provides instant insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-[#0F0A1E] rounded-2xl p-8 border border-[#2A2250]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6F2DBD] to-[#A663CC] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Paste Repository URL</h3>
                <p className="text-gray-300">
                  Simply paste any GitHub repository link into our analyzer
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-[#0F0A1E] rounded-2xl p-8 border border-[#2A2250]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6F2DBD] to-[#A663CC] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Analysis</h3>
                <p className="text-gray-300">
                  Our AI scans the codebase, detects tech stack, and analyzes structure
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6F2DBD] to-[#A663CC] rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-[#0F0A1E] rounded-2xl p-8 border border-[#2A2250]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6F2DBD] to-[#A663CC] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visualize & Learn</h3>
                <p className="text-gray-300">
                  Get interactive visualizations and AI-driven improvement suggestions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6F2DBD] via-[#A663CC] to-[#6F2DBD] animate-gradient-x"></div>
            <div className="relative bg-[#0F0A1E]/90 backdrop-blur-sm p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to analyze any codebase?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join developers using RepoLens to understand complex repositories in seconds
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-white text-[#0F0A1E] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  Get Started Free
                </button>
                <button
                  onClick={() => window.open('https://github.com/username/repository', '_blank')}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 py-8 md:px-12 border-t border-[#2A2250] bg-[#0F0A1E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6F2DBD] to-[#A663CC] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">RepoLens</span>
                <p className="text-gray-400 text-sm">AI-Powered Codebase Visualization</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-[#2A2250] pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RepoLens. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}