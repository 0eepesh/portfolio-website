import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Home({ setPage }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-8 md:py-16">
      {/* Left Pitch Column */}
      <div className="flex-1 text-left space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-accent-emerald">
          <span className="flex h-2 w-2 rounded-full bg-accent-emerald animate-pulse"></span>
          Available for Freelance Projects
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-gradient leading-tight">
          Transforming Ideas into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald to-accent-indigo">
            Digital Realities.
          </span>
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
          I am a professional full-stack web developer dedicated to building fast, scalable, and user-centric web applications. Whether it is crafting intuitive interfaces or engineering robust back-end systems, I deliver high-quality solutions designed to help businesses thrive in the digital space.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={() => setPage('projects')}
            className="glow-btn px-6 py-3.5 bg-gradient-to-r from-accent-emerald to-accent-indigo text-zinc-950 font-bold rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] flex items-center gap-2"
          >
            View My Projects
            <ArrowRight size={18} />
          </button>
          
          <button
            onClick={() => setPage('contact')}
            className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-semibold rounded-xl border border-zinc-800 hover:border-zinc-700 hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            Contact Me
            <MessageSquare size={18} />
          </button>
        </div>
      </div>

      {/* Right Profile Column */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative group">
          {/* Subtle glowing halo effect behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-emerald to-accent-indigo rounded-3xl blur-2xl opacity-35 group-hover:opacity-50 transition duration-1000 animate-pulse-slow"></div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img 
              src="/pfp.png" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Absolute overlay elements for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40"></div>
          </div>
          
          {/* Premium floating stats badge */}
          <div className="absolute -bottom-6 -left-6 glass px-5 py-3 rounded-2xl border border-zinc-800 shadow-xl hidden sm:flex items-center gap-3 animate-float">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-accent-emerald">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-medium">Performance</p>
              <p className="text-sm font-bold text-zinc-200">100% Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
