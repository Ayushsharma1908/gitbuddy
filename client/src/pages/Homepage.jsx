import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Folder, 
  File, 
  ChevronDown, 
  ChevronRight,
  Code,
  Database,
  Box,
  Paintbrush,
  FileJson,
  Globe,
  Shield,
  GitBranch,
  ArrowRight,
  Server,
  Lock,
  Zap,
  Sparkles,
  ChevronUp
} from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();
  const [repoUrl, setRepoUrl] = useState("");
  const [expandedFolders, setExpandedFolders] = useState({
    src: true,
    components: true,
    services: true,
    utils: true,
    styles: false,
    pages: false
  });
  const [showFullArchitecture, setShowFullArchitecture] = useState(false);

  const toggleFolder = (folder) => {
    setExpandedFolders({
      ...expandedFolders,
      [folder]: !expandedFolders[folder]
    });
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    console.log("Analyzing:", repoUrl);
    navigate("/analysis", { state: { repoUrl } });
  };

  const handleAISuggestions = () => {
    navigate("/ai-suggestions");
  };

  // Custom File Node Component
  const FileNode = ({ name, icon: Icon, color = "#94A3B8", depth = 0, size }) => (
    <div 
      className="flex items-center gap-2 py-1.5 px-3 rounded-lg hover:bg-[#1E293B]/60 transition-all group"
      style={{ marginLeft: `${depth * 24}px` }}
    >
      <Icon size={16} color={color} />
      <span className="text-sm text-white font-mono">{name}</span>
      {size && (
        <span className="text-xs text-[#64748B] opacity-0 group-hover:opacity-100 transition-opacity">
          • {size}
        </span>
      )}
    </div>
  );

  // Custom Folder Node Component
  const FolderNode = ({ name, icon: Icon, color = "#60A5FA", isExpanded, onToggle, children, depth = 0 }) => {
    const childCount = Array.isArray(children) ? children.length : children ? 1 : 0;
    
    return (
      <div className="select-none">
        <div 
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#1E293B]/60 cursor-pointer transition-all group"
          style={{ marginLeft: `${depth * 24}px` }}
          onClick={onToggle}
        >
          <button className="text-[#64748B] hover:text-white transition-transform duration-200">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          <Icon size={16} color={color} />
          <span className="text-sm font-medium text-white">{name}</span>
          <span className="text-xs bg-[#1E293B] px-2 py-0.5 rounded-full text-[#94A3B8] group-hover:bg-[#2D3A4F] transition-colors">
            {childCount} {childCount === 1 ? 'item' : 'items'}
          </span>
        </div>
        {isExpanded && (
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] to-transparent"></div>
            <div className="ml-[43px] mt-1 space-y-0.5 pb-1">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] font-['Plus_Jakarta_Sans',_'Inter',_sans-serif] text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#60A5FA]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#38BDF8]/20 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#818CF8]/10 rounded-full blur-[180px]"></div>

      {/* Header */}
      <header className="relative w-full px-6 py-5 md:px-12 md:py-6 border-b border-[#334155] bg-[#0B0E17]/80 backdrop-blur-sm z-10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div 
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6M9 12h6M9 16h4" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              RepoLens
            </span>
          </div>

          {/* Project Name Badge */}
          <div className="hidden md:flex items-center gap-2 bg-[#1E293B]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#60A5FA]/30">
            <span className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">nova-dashboard-v2</span>
            <span className="text-xs text-[#94A3B8] ml-2">• Analysis Complete • 2 mins ago</span>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAISuggestions}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] hover:from-[#7C3AED] hover:to-[#A78BFA] text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              <Sparkles size={16} />
              <span>AI Suggestions</span>
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#818CF8] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-xs font-bold text-white">JD</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative px-6 py-8 md:px-12 md:py-12 z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Visualize any{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#C084FC]">
                    Repository Structure.
                  </span>
                </h1>
                <p className="text-lg text-[#94A3B8] max-w-3xl">
                  See the entire project at a glance with our interactive tree visualization. 
                  Perfect for junior developers to understand code organization.
                </p>
              </div>
              {/* Mobile AI Button */}
              <button
                onClick={handleAISuggestions}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white rounded-lg text-sm font-medium"
              >
                <Sparkles size={16} />
                <span>AI</span>
              </button>
            </div>
          </div>

          {/* Visualization Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Interactive Tree View - Main Focus */}
            <div className="lg:col-span-7">
              <div className="relative group h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/20 to-[#818CF8]/20 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative bg-[#0F1320]/90 backdrop-blur-sm rounded-2xl border border-[#334155] p-6 flex flex-col h-full">
                  
                  {/* Header with Legend */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#1E293B] rounded-lg flex items-center justify-center">
                        <Folder size={18} className="text-[#60A5FA]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Project Tree</h3>
                        <p className="text-xs text-[#94A3B8]">Click folders to expand/collapse</p>
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-[#60A5FA] rounded-full"></div>
                        <span className="text-[#94A3B8]">Folder</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                        <span className="text-[#94A3B8]">Component</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                        <span className="text-[#94A3B8]">Service</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Tree Visualization */}
                  <div className="bg-[#1E293B]/20 rounded-xl p-5 flex-1 overflow-y-auto custom-scrollbar">
                    
                    {/* Root Node */}
                    <div className="mb-5 pb-4 border-b border-[#334155]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <Box size={18} className="text-white" />
                        </div>
                        <div>
                          <span className="text-base font-semibold text-white">nova-dashboard-v2</span>
                          <span className="text-xs text-[#94A3B8] ml-3">Root directory • 48 files</span>
                        </div>
                      </div>
                    </div>

                    {/* File Tree Structure */}
                    <div className="space-y-1.5">
                      
                      {/* SRC Folder */}
                      <FolderNode 
                        name="src" 
                        icon={Folder} 
                        color="#60A5FA"
                        isExpanded={expandedFolders.src}
                        onToggle={() => toggleFolder('src')}
                        depth={0}
                      >
                        {/* Components Folder */}
                        <FolderNode 
                          name="components" 
                          icon={Folder} 
                          color="#60A5FA"
                          isExpanded={expandedFolders.components}
                          onToggle={() => toggleFolder('components')}
                          depth={1}
                        >
                          <FileNode name="Header.tsx" icon={Code} color="#8B5CF6" depth={2} size="3.2kb" />
                          <FileNode name="Sidebar.tsx" icon={Code} color="#8B5CF6" depth={2} size="2.8kb" />
                          <FileNode name="Dashboard.tsx" icon={Code} color="#8B5CF6" depth={2} size="5.1kb" />
                          <FileNode name="Analytics.tsx" icon={Code} color="#8B5CF6" depth={2} size="4.3kb" />
                          <FileNode name="DataTable.tsx" icon={Code} color="#8B5CF6" depth={2} size="3.7kb" />
                        </FolderNode>

                        {/* Services Folder */}
                        <FolderNode 
                          name="services" 
                          icon={Folder} 
                          color="#60A5FA"
                          isExpanded={expandedFolders.services}
                          onToggle={() => toggleFolder('services')}
                          depth={1}
                        >
                          <FileNode name="api.ts" icon={Globe} color="#10B981" depth={2} size="2.1kb" />
                          <FileNode name="auth.ts" icon={Shield} color="#10B981" depth={2} size="1.8kb" />
                          <FileNode name="database.ts" icon={Database} color="#10B981" depth={2} size="2.3kb" />
                          <FileNode name="analytics.ts" icon={Zap} color="#10B981" depth={2} size="1.5kb" />
                        </FolderNode>

                        {/* Utils Folder */}
                        <FolderNode 
                          name="utils" 
                          icon={Folder} 
                          color="#60A5FA"
                          isExpanded={expandedFolders.utils}
                          onToggle={() => toggleFolder('utils')}
                          depth={1}
                        >
                          <FileNode name="helpers.ts" icon={Code} color="#F59E0B" depth={2} size="1.2kb" />
                          <FileNode name="constants.ts" icon={FileJson} color="#F59E0B" depth={2} size="0.8kb" />
                          <FileNode name="formatters.ts" icon={Code} color="#F59E0B" depth={2} size="1.1kb" />
                        </FolderNode>

                        {/* Styles Folder */}
                        <FolderNode 
                          name="styles" 
                          icon={Folder} 
                          color="#60A5FA"
                          isExpanded={expandedFolders.styles}
                          onToggle={() => toggleFolder('styles')}
                          depth={1}
                        >
                          <FileNode name="globals.css" icon={Paintbrush} color="#EC4899" depth={2} size="4.2kb" />
                          <FileNode name="variables.css" icon={Paintbrush} color="#EC4899" depth={2} size="1.3kb" />
                        </FolderNode>

                        {/* Pages Folder */}
                        <FolderNode 
                          name="pages" 
                          icon={Folder} 
                          color="#60A5FA"
                          isExpanded={expandedFolders.pages}
                          onToggle={() => toggleFolder('pages')}
                          depth={1}
                        >
                          <FileNode name="index.tsx" icon={Code} color="#8B5CF6" depth={2} size="2.4kb" />
                          <FileNode name="settings.tsx" icon={Code} color="#8B5CF6" depth={2} size="3.1kb" />
                          <FileNode name="profile.tsx" icon={Code} color="#8B5CF6" depth={2} size="2.7kb" />
                        </FolderNode>

                        <FileNode name="App.tsx" icon={Code} color="#8B5CF6" depth={1} size="1.9kb" />
                        <FileNode name="main.tsx" icon={Code} color="#8B5CF6" depth={1} size="0.7kb" />
                      </FolderNode>

                      {/* Config Files */}
                      <div className="mt-2 pt-2 border-t border-[#334155]/50">
                        <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider ml-3 mb-2 block">Configuration Files</span>
                        <FileNode name="package.json" icon={FileJson} color="#F59E0B" depth={0} size="3.5kb" />
                        <FileNode name="tsconfig.json" icon={FileJson} color="#F59E0B" depth={0} size="1.2kb" />
                        <FileNode name="tailwind.config.js" icon={Paintbrush} color="#EC4899" depth={0} size="1.8kb" />
                        <FileNode name=".env.example" icon={File} color="#94A3B8" depth={0} size="0.3kb" />
                        <FileNode name=".envi.example" icon={File} color="#94A3B8" depth={0} size="0.3kb" />
                      </div>
                    </div>

                    {/* Tree Stats */}
                    <div className="mt-6 pt-4 border-t border-[#334155]">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-[#1E293B]/40 rounded-lg p-3 hover:bg-[#1E293B]/60 transition-colors">
                          <span className="text-xl font-bold text-[#60A5FA]">24</span>
                          <span className="text-xs text-[#94A3B8] block mt-0.5">TypeScript Files</span>
                        </div>
                        <div className="bg-[#1E293B]/40 rounded-lg p-3 hover:bg-[#1E293B]/60 transition-colors">
                          <span className="text-xl font-bold text-[#8B5CF6]">12</span>
                          <span className="text-xs text-[#94A3B8] block mt-0.5">Components</span>
                        </div>
                        <div className="bg-[#1E293B]/40 rounded-lg p-3 hover:bg-[#1E293B]/60 transition-colors">
                          <span className="text-xl font-bold text-[#10B981]">8</span>
                          <span className="text-xs text-[#94A3B8] block mt-0.5">Services</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Guide */}
                  <div className="mt-4 flex items-center gap-3 text-xs text-[#94A3B8] bg-[#1E293B]/30 rounded-lg p-3 border border-[#334155]/50">
                    <span className="flex items-center gap-1.5">
                      <ChevronDown size={14} className="text-[#60A5FA]" /> 
                      <span>Click to collapse</span>
                    </span>
                    <span className="w-1 h-1 bg-[#334155] rounded-full"></span>
                    <span className="flex items-center gap-1.5">
                      <ChevronRight size={14} className="text-[#60A5FA]" /> 
                      <span>Click to expand</span>
                    </span>
                    <span className="w-1 h-1 bg-[#334155] rounded-full"></span>
                    <span className="flex items-center gap-1.5">
                      <span>📄</span> 
                      <span>Hover for file size</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Separate Tech Stack & System Architecture */}
            <div className="lg:col-span-5 flex flex-col h-full gap-4">
              
              {/* Tech Stack Card - Separate */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#818CF8]/20 to-[#A78BFA]/20 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative bg-[#0F1320]/90 backdrop-blur-sm rounded-2xl border border-[#334155] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-[#1E293B] rounded-lg flex items-center justify-center">
                      <span className="text-lg">⚙️</span>
                    </div>
                    <h3 className="text-base font-semibold text-white">Tech Stack Detected</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#1E293B]/30 rounded-lg p-2 hover:bg-[#1E293B]/50 transition-colors">
                      <span className="text-[10px] text-[#94A3B8] block mb-0.5">Frontend</span>
                      <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded text-[10px] font-medium inline-block">React 18</span>
                    </div>
                    <div className="bg-[#1E293B]/30 rounded-lg p-2 hover:bg-[#1E293B]/50 transition-colors">
                      <span className="text-[10px] text-[#94A3B8] block mb-0.5">Database</span>
                      <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded text-[10px] font-medium inline-block">PostgreSQL</span>
                    </div>
                    <div className="bg-[#1E293B]/30 rounded-lg p-2 hover:bg-[#1E293B]/50 transition-colors">
                      <span className="text-[10px] text-[#94A3B8] block mb-0.5">ORM</span>
                      <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 rounded text-[10px] font-medium inline-block">Prisma</span>
                    </div>
                    <div className="bg-[#1E293B]/30 rounded-lg p-2 hover:bg-[#1E293B]/50 transition-colors">
                      <span className="text-[10px] text-[#94A3B8] block mb-0.5">Styling</span>
                      <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-[10px] font-medium inline-block">Tailwind</span>
                    </div>
                    <div className="bg-[#1E293B]/30 rounded-lg p-2 hover:bg-[#1E293B]/50 transition-colors">
                      <span className="text-[10px] text-[#94A3B8] block mb-0.5">Infra</span>
                      <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded text-[10px] font-medium inline-block">Docker</span>
                    </div>
                    <div className="bg-[#1E293B]/30 rounded-lg p-2 hover:bg-[#1E293B]/50 transition-colors">
                      <span className="text-[10px] text-[#94A3B8] block mb-0.5">Package</span>
                      <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-300 rounded text-[10px] font-medium inline-block">npm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Architecture - Separate, No Gap, Same Height as Project Tree */}
              <div className="relative group flex-1 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative bg-[#0F1320]/90 backdrop-blur-sm rounded-2xl border border-[#334155] p-5 flex flex-col h-full">
                  
                  {/* Header with See More Button */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#1E293B] rounded-lg flex items-center justify-center">
                        <span className="text-lg">🔄</span>
                      </div>
                      <h3 className="text-base font-semibold text-white">System Architecture</h3>
                    </div>
                    <button 
                      onClick={() => setShowFullArchitecture(!showFullArchitecture)}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-[#1E293B] hover:bg-[#2D3A4F] text-[#60A5FA] hover:text-white rounded-lg text-[10px] font-medium transition-all border border-[#334155]"
                    >
                      {showFullArchitecture ? (
                        <>See Less <ChevronUp size={12} /></>
                      ) : (
                        <>See More <ChevronDown size={12} /></>
                      )}
                    </button>
                  </div>

                  {/* Architecture Flow - No Gaps */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 space-y-3">
                    
                    {/* Entry Point */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 bg-[#3B82F6]/20 rounded-full flex items-center justify-center border border-[#3B82F6]/30">
                          <span className="text-[8px] font-bold text-[#3B82F6]">1</span>
                        </div>
                        <span className="text-[11px] font-semibold text-white">Entry Point</span>
                      </div>
                      <div className="bg-[#1E293B]/30 rounded-lg p-2.5 ml-5">
                        <div className="flex items-center flex-wrap gap-1">
                          <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#60A5FA] font-mono text-[9px] rounded border border-[#334155]">main.tsx</span>
                          <ArrowRight size={10} className="text-[#64748B]" />
                          <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#60A5FA] font-mono text-[9px] rounded border border-[#334155]">App.tsx</span>
                          <ArrowRight size={10} className="text-[#64748B]" />
                          <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#8B5CF6] font-mono text-[9px] rounded border border-[#334155]">Router</span>
                        </div>
                      </div>
                    </div>

                    {/* Authentication Flow */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center border border-[#8B5CF6]/30">
                          <span className="text-[8px] font-bold text-[#8B5CF6]">2</span>
                        </div>
                        <span className="text-[11px] font-semibold text-white">Auth Flow</span>
                      </div>
                      <div className="bg-[#1E293B]/30 rounded-lg p-2.5 ml-5">
                        <div className="flex items-center flex-wrap gap-1">
                          <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#10B981] font-mono text-[9px] rounded border border-[#334155]">auth.ts</span>
                          <ArrowRight size={10} className="text-[#64748B]" />
                          <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#F59E0B] font-mono text-[9px] rounded border border-[#334155]">JWT</span>
                          <ArrowRight size={10} className="text-[#64748B]" />
                          <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#8B5CF6] font-mono text-[9px] rounded border border-[#334155]">Context</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1.5 text-[9px] text-[#94A3B8]">
                          <Lock size={10} className="text-[#8B5CF6]" />
                          <span>JWT + Context API</span>
                        </div>
                      </div>
                    </div>

                    {/* Additional sections shown when expanded */}
                    {showFullArchitecture && (
                      <>
                        {/* Data Flow */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-4 h-4 bg-[#10B981]/20 rounded-full flex items-center justify-center border border-[#10B981]/30">
                              <span className="text-[8px] font-bold text-[#10B981]">3</span>
                            </div>
                            <span className="text-[11px] font-semibold text-white">Data Flow</span>
                          </div>
                          <div className="bg-[#1E293B]/30 rounded-lg p-2.5 ml-5">
                            <div className="flex items-center flex-wrap gap-1">
                              <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#8B5CF6] font-mono text-[9px] rounded border border-[#334155]">Components</span>
                              <ArrowRight size={10} className="text-[#64748B]" />
                              <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#10B981] font-mono text-[9px] rounded border border-[#334155]">api.ts</span>
                              <ArrowRight size={10} className="text-[#64748B]" />
                              <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#60A5FA] font-mono text-[9px] rounded border border-[#334155]">db.ts</span>
                              <ArrowRight size={10} className="text-[#64748B]" />
                              <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#EC4899] font-mono text-[9px] rounded border border-[#334155]">PostgreSQL</span>
                            </div>
                          </div>
                        </div>

                        {/* File Dependencies */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-4 h-4 bg-[#F59E0B]/20 rounded-full flex items-center justify-center border border-[#F59E0B]/30">
                              <span className="text-[8px] font-bold text-[#F59E0B]">4</span>
                            </div>
                            <span className="text-[11px] font-semibold text-white">Dependencies</span>
                          </div>
                          <div className="bg-[#1E293B]/30 rounded-lg p-2.5 ml-5">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 flex-wrap">
                                <span className="text-[#8B5CF6] text-[9px] font-mono">Dashboard.tsx</span>
                                <span className="text-[#64748B] text-[7px]">→</span>
                                <span className="text-[#10B981] text-[9px] font-mono">api.ts</span>
                                <span className="text-[#64748B] text-[7px]">+</span>
                                <span className="text-[#F59E0B] text-[9px] font-mono">helpers.ts</span>
                              </div>
                              <div className="flex items-center gap-1 flex-wrap">
                                <span className="text-[#8B5CF6] text-[9px] font-mono">auth.ts</span>
                                <span className="text-[#64748B] text-[7px]">→</span>
                                <span className="text-[#F59E0B] text-[9px] font-mono">constants.ts</span>
                                <span className="text-[#64748B] text-[7px]">+</span>
                                <span className="text-[#60A5FA] text-[9px] font-mono">db.ts</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Infrastructure Note */}
                        <div className="bg-[#1E293B]/30 rounded-lg p-2.5 ml-5 border-l-4 border-l-[#60A5FA]">
                          <p className="text-[9px] text-[#94A3B8] flex items-center gap-1">
                            <Server size={10} className="text-[#60A5FA]" />
                            <span><span className="text-white font-mono">Prisma schema</span> → <span className="text-white font-mono">database.ts</span></span>
                          </p>
                        </div>
                      </>
                    )}

                    {/* Empty space filler to maintain height consistency */}
                    {!showFullArchitecture && (
                      <div className="flex-1 min-h-[40px]"></div>
                    )}
                  </div>

                  {/* View Full Documentation Link */}
                  <div className="mt-3 pt-2 border-t border-[#334155]">
                    <button className="w-full flex items-center justify-center gap-1.5 text-[10px] text-[#60A5FA] hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-[#1E293B]/50">
                      <span>📘</span> View Full Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-[#334155] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" fill="none" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-white">RepoLens</span>
              <span className="text-xs text-[#64748B]">•</span>
              <span className="text-xs text-[#64748B]">Making codebases accessible for everyone</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-xs text-[#60A5FA] hover:text-white transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-[#1E293B]/50">
                <span>📘</span> System Documentation
              </button>
              <button className="text-xs text-[#64748B] hover:text-white transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-[#1E293B]/50">
                Export Flow
              </button>
            </div>
          </footer>
        </div>
      </main>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1E293B;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3B82F6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #60A5FA;
        }
      `}</style>
    </div>
  );
}