import { useState } from "react";

export default function Homepage() {
  const [repoUrl, setRepoUrl] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-2xl font-bold text-blue-400">GitBuddy 🤝</h1>
        <span className="text-sm text-gray-400">Understand any GitHub repo</span>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Paste a GitHub Repo.
          <span className="block text-blue-400 mt-2">Get Instant Clarity.</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg">
          GitBuddy analyzes public GitHub repositories and explains the project
          structure, tech stack, and architecture in a beginner-friendly way.
        </p>

        {/* Input */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="https://github.com/username/repository"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="w-full md:w-[420px] px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold">
            Analyze Repo
          </button>
        </div>
      </section>

      {/* Analysis Section (Mock UI) */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Folder Tree */}
        <div className="lg:col-span-1 bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-blue-300">📁 Project Structure</h3>
          <ul className="text-sm space-y-2 text-gray-300 font-mono">
            <li>📂 src</li>
            <li className="ml-4">📂 components</li>
            <li className="ml-8">📄 Navbar.jsx</li>
            <li className="ml-8">📄 RepoTree.jsx</li>
            <li className="ml-4">📂 pages</li>
            <li className="ml-8">📄 Home.jsx</li>
            <li className="ml-4">📄 App.jsx</li>
            <li>📄 package.json</li>
            <li>📄 tailwind.config.js</li>
          </ul>
        </div>

        {/* Graph / Visualization */}
        <div className="lg:col-span-2 bg-white/5 rounded-xl p-5 border border-white/10 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-purple-300">📊 Project Architecture Graph</h3>
            <p className="text-gray-400 mt-3">
              (Graph visualization will appear here)
            </p>
            <div className="mt-6 w-full h-56 rounded-lg border border-dashed border-white/20 flex items-center justify-center text-gray-500">
              D3 / Recharts / Mermaid Diagram
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h3 className="text-2xl font-bold mb-6">⚙️ Detected Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">React</span>
          <span className="px-4 py-2 rounded-full bg-cyan-600/20 text-cyan-300">Tailwind CSS</span>
          <span className="px-4 py-2 rounded-full bg-green-600/20 text-green-300">Node.js</span>
          <span className="px-4 py-2 rounded-full bg-yellow-600/20 text-yellow-300">Vite</span>
          <span className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-300">AI Ready</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        Built with ❤️ for beginners · GitBuddy
      </footer>
    </div>
  );
}
