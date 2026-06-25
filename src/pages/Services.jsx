import { Palette, Code2, Sparkles, Layers } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

export default function Services() {
  const techTags = ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL"];

  return (
    <div className="space-y-12 py-8 md:py-16">
      <SEO
        title="Web Development & UI/UX Design Services | Deepesh"
        description="Explore the web development and UI/UX design services offered by Deepesh. I build fast, scalable, and responsive custom web applications."
        keywords="Web Development Services, UI/UX Design, Custom Web Apps, Freelance Web Developer, Deepesh Services"
      />
      {/* Title section */}
      <ScrollReveal direction="up" delay={100}>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-gradient">
            Services Offered
          </h1>
          <p className="text-zinc-400 text-lg">
            I provide professional design and engineering services to transform
            complex ideas into reliable, production-ready digital products.
          </p>
        </div>
      </ScrollReveal>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-6">
        {/* Card 1: UI/UX Design */}
        <ScrollReveal
          direction="up"
          delay={200}
          scale={true}
          className="h-full"
        >
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden group h-full">
            {/* Subtle gradient light flare */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-emerald/10 rounded-full blur-2xl group-hover:bg-accent-emerald/20 transition-all duration-500"></div>

            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 text-accent-emerald border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <Palette size={28} />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-zinc-100 font-display">
                  UI/UX Design
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Crafting intuitive and visually stunning user interfaces. I
                  focus on creating seamless user experiences that keep visitors
                  engaged and make navigation effortless.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900/50 flex items-center gap-2 text-sm text-zinc-500 font-medium group-hover:text-accent-emerald transition-colors">
              <Sparkles size={16} />
              Focus on accessibility & brand identity
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2: Full-Stack Development */}
        <ScrollReveal
          direction="up"
          delay={350}
          scale={true}
          className="h-full"
        >
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden group h-full">
            {/* Subtle gradient light flare */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-indigo/10 rounded-full blur-2xl group-hover:bg-accent-indigo/20 transition-all duration-500"></div>

            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-xl bg-indigo-500/10 text-accent-indigo border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                <Code2 size={28} />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-zinc-100 font-display">
                  Full-Stack Development
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Building robust, high-performance web applications from the
                  ground up. From responsive front-ends to secure databases, I
                  handle the entire development lifecycle.
                </p>
              </div>

              {/* Tech Badges Grid */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900/50 flex items-center gap-2 text-sm text-zinc-500 font-medium group-hover:text-accent-indigo transition-colors">
              <Layers size={16} />
              Clean code, testing, and modern architecture
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
