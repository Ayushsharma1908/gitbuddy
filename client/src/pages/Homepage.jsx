import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoLensLogo from "../assets/Repolenslogo.svg";

export default function HomePage() {
  const navigate = useNavigate();
  const [repoUrl, setRepoUrl] = useState("");

  const handleAnalyze = (e) => {
    e.preventDefault();
    console.log("Analyzing:", repoUrl);
    // Navigate to analysis results page
    navigate("/analysis", { state: { repoUrl } });
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] font-['Plus_Jakarta_Sans',_'Inter',_sans-serif] text-white relative overflow-hidden">
      {/* Background Glow Effects - Static */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#60A5FA]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#38BDF8]/20 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#818CF8]/10 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#A78BFA]/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-[#7DD3FC]/20 rounded-full blur-[100px]"></div>

      {/* Header */}
      <header className="relative w-full px-6 py-5 md:px-12 md:py-6 border-b border-[#334155] bg-[#0B0E17]/80 backdrop-blur-sm z-10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-9 h-9 bg-[#3B82F6] rounded-xl flex items-center justify-center ">
              <img
                src={RepoLensLogo}
                alt="RepoLens Logo"
                className="w-9 h-9 object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              RepoLens
            </span>
          </div>

          {/* Project Name Badge */}
          <div className="hidden md:flex items-center gap-2 bg-[#1E293B]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#60A5FA]/30">
            <span className="w-2 h-2 bg-[#60A5FA] rounded-full"></span>
            <span className="text-sm font-medium text-white">
              nova-dashboard-v2
            </span>
            <span className="text-xs text-[#94A3B8] ml-2">
              • Analysis Complete • Last updated 2 mins ago
            </span>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#818CF8] rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">JD</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative px-6 py-8 md:px-12 md:py-12 z-10">
        <div className="max-w-7xl mx-auto">
          

          {/* Analysis Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Project Structure - Left Column */}
            <div className="lg:col-span-4">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/20 to-[#818CF8]/20 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative bg-[#0F1320]/90 backdrop-blur-sm rounded-2xl border border-[#334155] p-6 h-full">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span>📁</span> PROJECT STRUCTURE
                  </h3>
                  <div className="bg-[#1E293B]/30 rounded-xl p-4">
                    <ul className="text-sm space-y-2 text-[#94A3B8] font-mono">
                      <li className="text-[#60A5FA]">📂 src</li>
                      <li className="ml-4">📂 components</li>
                      <li className="ml-8 text-white">📄 Header.tsx</li>
                      <li className="ml-8 text-white">📄 Sidebar.tsx</li>
                      <li className="ml-4">📂 services</li>
                      <li className="ml-8 text-white">📄 api.ts</li>
                      <li className="ml-8 text-white">📄 auth.ts</li>
                      <li className="ml-4">📂 styles</li>
                      <li className="ml-4 text-white">📄 package.json</li>
                      <li className="ml-4 text-white">📄 tsconfig.json</li>
                      <li className="ml-4 text-white">📄 .env.example</li>
                      <li className="ml-4 text-white">📄 .envi.example</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack - Middle Column */}
            <div className="lg:col-span-5">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#818CF8]/20 to-[#A78BFA]/20 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative bg-[#0F1320]/90 backdrop-blur-sm rounded-2xl border border-[#334155] p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <span>⚙️</span> Detected Tech Stack
                    </h3>
                    <span className="text-xs text-[#94A3B8]">
                      Based on file analysis and dependency mapping
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Frontend */}
                    <div className="bg-[#1E293B]/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-white">
                          Frontend
                        </span>
                        <span className="text-xs text-[#94A3B8]">
                          UI & User Experience
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium">
                          React.js
                        </span>
                        <span className="text-xs text-[#94A3B8]">
                          Version 18.2.0
                        </span>
                      </div>
                    </div>

                    {/* Database & ORM */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1E293B]/30 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-white">
                            Database
                          </span>
                          <span className="text-xs text-[#94A3B8]">
                            Persistence Layer
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium">
                            PostgreSQL
                          </span>
                          <span className="text-xs text-[#94A3B8]">
                            Relational Database
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#1E293B]/30 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-white">
                            ORM
                          </span>
                          <span className="text-xs text-[#94A3B8]">
                            Database Client
                          </span>
                        </div>
                        <span className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium">
                          Prisma
                        </span>
                      </div>
                    </div>

                    {/* Styling & Infrastructure */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1E293B]/30 rounded-xl p-4">
                        <span className="text-sm font-semibold text-white block mb-2">
                          Styling
                        </span>
                        <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="bg-[#1E293B]/30 rounded-xl p-4">
                        <span className="text-sm font-semibold text-white block mb-2">
                          Infrastructure
                        </span>
                        <span className="px-3 py-1.5 bg-yellow-500/20 text-yellow-300 rounded-lg text-sm font-medium">
                          Docker
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Insights - Right Column */}
            <div className="lg:col-span-3">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/20 to-[#F472B6]/20 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative bg-[#0F1320]/90 backdrop-blur-sm rounded-2xl border border-[#334155] p-6 h-full">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span>🔍</span> Optimization Insights
                  </h3>

                  <div className="space-y-4">
                    {/* Performance */}
                    <div className="bg-[#1E293B]/30 rounded-xl p-4 border-l-4 border-l-yellow-500">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span>⚡</span> Performance
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        Detected 12 redundant Tailwind classes. Consider purging
                        unused styles.
                      </p>
                    </div>

                    {/* Security */}
                    <div className="bg-[#1E293B]/30 rounded-xl p-4 border-l-4 border-l-red-500">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span>🔒</span> Security
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        Prisma client version is out of date. Update recommended
                        for CVE fixes.
                      </p>
                    </div>

                    {/* Infrastructure */}
                    <div className="bg-[#1E293B]/30 rounded-xl p-4 border-l-4 border-l-blue-500">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span>🏗️</span> Infrastructure
                      </h4>
                      <p className="text-xs text-[#94A3B8]">
                        Detected Dockerfile but missing CI/CD workflow files.
                      </p>
                    </div>
                  </div>

                  {/* View All Insights Button */}
                  <button className="w-full mt-4 py-2.5 px-4 bg-[#1E293B] hover:bg-[#2D3A4F] text-[#60A5FA] hover:text-white rounded-xl text-sm font-medium transition border border-[#334155]">
                    View All Insights
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-[#334155] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <img
                src={RepoLensLogo}
                alt="RepoLens Logo"
                className="w-9 h-9 object-contain"
              />
              </div>
              <span className="text-sm font-semibold text-white">RepoLens</span>
              <span className="text-xs text-[#64748B]">•</span>
              <span className="text-xs text-[#64748B]">
                Built with ❤️ for developers
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#64748B]">© 2026 RepoLens</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
