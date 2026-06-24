import { useState } from 'react';
import { ExternalLink, Github, BarChart3, Users, DollarSign, X, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const projects = [
    {
      title: "Task Management Application",
      description: "A secure, full-stack to-do application featuring complete user authentication and real-time database integration for persistent task management.",
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      link: "https://todo-livid-rho.vercel.app/",
      isMock: false
    },
    {
      title: "Enterprise Dashboard (Simulated Demo)",
      description: "A full-stack data visualization and management system demonstrating complex routing, state management, and real-time API simulation.",
      techStack: ["Next.js", "Tailwind CSS", "Lucide Icons"],
      link: "#",
      isMock: true
    }
  ];

  return (
    <div className="space-y-12 py-8 md:py-16 relative">
      {/* Title section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-gradient">
          Featured Work
        </h2>
        <p className="text-zinc-400 text-lg">
          A selection of projects that showcase engineering craft, architectural reliability, and user-centric design.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="glass-card rounded-2xl p-8 flex flex-col justify-between text-left group relative overflow-hidden"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-800/10 to-transparent rounded-tr-2xl"></div>

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-accent-emerald transition-colors font-display">
                  {project.title}
                </h3>
              </div>

              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center">
              {project.isMock ? (
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent-indigo hover:text-accent-indigo-light cursor-pointer group/link"
                >
                  Launch Live Demo
                  <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent-emerald hover:text-accent-emerald-light group/link"
                >
                  Visit Live Site
                  <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Call to Action */}
      <div className="flex justify-center pt-8">
        <a
          href="https://github.com/0eepesh"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-bold hover:scale-[1.02]"
        >
          <Github size={20} />
          View More on GitHub
        </a>
      </div>

      {/* Enterprise Dashboard Modal Simulation */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md transition-opacity">
          <div 
            className="w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-float-slow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm font-semibold text-zinc-400 font-display">Acme Corp Enterprise Dashboard (Demo)</span>
              </div>
              <button 
                onClick={() => setShowDemoModal(false)}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Dashboard Contents */}
            <div className="p-6 overflow-y-auto space-y-6 bg-zinc-950 text-left">
              {/* Top Banner alert */}
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-sm flex items-center gap-3">
                <ShieldCheck size={20} className="text-accent-indigo shrink-0" />
                <span>This is a live front-end simulation running mockup state management & CSS/SVG analytical charts.</span>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="flex justify-between items-center text-zinc-500">
                    <span className="text-xs font-semibold uppercase tracking-wider">Total Sales</span>
                    <DollarSign size={16} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-zinc-100">$142,384</span>
                    <span className="text-xs font-medium text-emerald-400">+12%</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="flex justify-between items-center text-zinc-500">
                    <span className="text-xs font-semibold uppercase tracking-wider">Active Users</span>
                    <Users size={16} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-zinc-100">8,492</span>
                    <span className="text-xs font-medium text-emerald-400">+4.8%</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="flex justify-between items-center text-zinc-500">
                    <span className="text-xs font-semibold uppercase tracking-wider">Avg Conversion</span>
                    <BarChart3 size={16} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-zinc-100">3.64%</span>
                    <span className="text-xs font-medium text-zinc-500">Static</span>
                  </div>
                </div>
              </div>

              {/* Grid 2 Column: Charts and Activities */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Simulated Chart */}
                <div className="lg:col-span-2 p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4">
                  <h4 className="text-sm font-bold text-zinc-300 font-display">Revenue Trend (Last 7 Days)</h4>
                  <div className="h-48 w-full relative flex items-end pt-4">
                    {/* SVG Chart Line */}
                    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0 80 Q 15 50 30 65 T 60 30 T 90 20 L 100 20 L 100 100 L 0 100 Z" 
                        fill="url(#chartGrad)" 
                      />
                      <path 
                        d="M 0 80 Q 15 50 30 65 T 60 30 T 90 20 L 100 20" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Labels */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-zinc-600 px-1">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4">
                  <h4 className="text-sm font-bold text-zinc-300 font-display">Recent Events</h4>
                  <div className="space-y-3">
                    {[
                      { text: "Server deployment success", time: "2 min ago", type: "success" },
                      { text: "Backup snapshot complete", time: "1 hour ago", type: "info" },
                      { text: "Database connection pools high", time: "3 hours ago", type: "warning" }
                    ].map((act, idx) => (
                      <div key={idx} className="flex gap-3 text-xs items-start">
                        <CheckCircle2 size={14} className="text-accent-emerald shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <p className="text-zinc-300 font-medium">{act.text}</p>
                          <p className="text-zinc-600">{act.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50 flex justify-end">
              <button 
                onClick={() => setShowDemoModal(false)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Close Simulation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
