import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-8 md:py-16">
      <SEO
        title="Deepesh Sonkar | Full-Stack Web Developer & Web Development Specialist"
        description="Hi, I'm Deepesh Sonkar, a professional full-stack web developer. I build fast, scalable, and user-centric web applications and designs. Contact me for freelance projects."
        keywords="Deepesh Sonkar, Deepesh, Web Development, Full-Stack Web Developer, Freelance Developer, Custom Web Applications"
      />
      {/* Left Pitch Column */}
      <div className="flex-1 text-left space-y-6 max-w-2xl">
        <ScrollReveal direction="down" delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-accent-emerald">
            <span className="flex h-2 w-2 rounded-full bg-accent-emerald animate-pulse"></span>
            Available for Freelance Projects
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-gradient leading-tight">
            Transforming Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald to-accent-indigo">
              Digital Realities.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={350}>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            I am a professional full-stack web developer dedicated to building
            fast, scalable, and user-centric web applications. Whether it is
            crafting intuitive interfaces or engineering robust back-end
            systems, I deliver high-quality solutions designed to help
            businesses thrive in the digital space.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={500}>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="glow-btn px-6 py-3.5 bg-gradient-to-r from-accent-emerald to-accent-indigo text-white font-bold rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] flex items-center gap-2"
            >
              View My Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-semibold rounded-xl border border-zinc-800 hover:border-zinc-700 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              Contact Me
              <MessageSquare size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Right Profile Column */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative group">
          {/* Subtle glowing halo effect behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-emerald to-accent-indigo rounded-3xl blur-2xl opacity-35 group-hover:opacity-50 transition duration-1000 animate-pulse-slow"></div>

          <ScrollReveal direction="none" scale={true} delay={300}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-zinc-800 bg-white shadow-2xl flex items-center justify-center p-4">
              <img
                src="/hero.png"
                alt="Full Stack Developer Diagram"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* Premium floating stats badge */}
          <ScrollReveal
            direction="up"
            delay={700}
            className="absolute -bottom-6 -left-6 hidden sm:flex z-10"
          >
            <div className="glass px-5 py-3 rounded-2xl border border-zinc-800 shadow-xl flex items-center gap-3 animate-float">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-accent-emerald">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-medium">Performance</p>
                <p className="text-sm font-bold text-zinc-200">100% Score</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
