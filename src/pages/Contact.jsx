import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
            "6e96f3bf-5cec-4b70-b5c2-a94f657b0d1b",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New portfolio message from ${formState.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(
          data.message || "Failed to send message. Please try again.",
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 py-8 md:py-16">
      <SEO
        title="Contact Deepesh Sonkar | Freelance Web Developer"
        description="Have a web development project or custom software idea? Get in touch with Deepesh Sonkar. Send a message or connect via email, WhatsApp, or Instagram."
        keywords="Contact Web Developer, Hire React Developer, Deepesh Sonkar Contact, Web Development Projects Inquiry"
      />
      {/* Title section */}
      <ScrollReveal direction="up" delay={100}>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-gradient">
            Get in Touch
          </h1>
          <p className="text-zinc-400 text-lg">
            Have an idea or a project in mind? Reach out and let's build
            something exceptional together.
          </p>
        </div>
      </ScrollReveal>

      {/* Main split content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-5xl mx-auto items-start pt-6 text-left">
        {/* Left Side: Contact Form */}
        <ScrollReveal
          direction="up"
          delay={200}
          scale={true}
          className="md:col-span-7 h-full w-full"
        >
          <div className="glass-card p-6 md:p-8 rounded-2xl space-y-6 h-full w-full">
            <h3 className="text-xl font-bold text-zinc-100 font-display">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="p-6 md:p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-5 text-center animate-scale-in">
                <div className="space-y-3">
                  <div className="inline-flex p-3 bg-emerald-500/20 rounded-full text-accent-emerald">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-100">
                    Message Sent!
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been
                    successfully delivered. I'll get back to you within 24
                    hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setErrorMessage("");
                  }}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-800 rounded-xl text-zinc-350 hover:text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-zinc-400 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-zinc-400 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-zinc-400 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/20 transition-all resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-btn w-full py-3.5 bg-gradient-to-r from-accent-emerald to-accent-indigo text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      Sending Message...
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Right Side: Contact Channels */}
        <div className="md:col-span-5 space-y-6 flex flex-col justify-start h-full w-full">
          <ScrollReveal
            direction="up"
            delay={350}
            scale={true}
            className="w-full"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl space-y-6 w-full">
              <h3 className="text-xl font-bold text-zinc-100 font-display">
                Communication Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:deepeshsonkar20@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/80 transition-all group"
                >
                  <div className="p-3 bg-red-500/10 text-red-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                      Email Me
                    </p>
                    <p className="text-sm font-bold text-zinc-200 group-hover:text-accent-emerald transition-colors">
                      deepeshsonkar20@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.link/gh09g1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/80 transition-all group"
                >
                  <div className="p-3 bg-green-500/10 text-green-400 rounded-xl group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="text-sm font-bold text-zinc-200 group-hover:text-accent-emerald transition-colors">
                      Chat on WhatsApp
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/deepesh._0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/80 transition-all group"
                >
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                      Instagram
                    </p>
                    <p className="text-sm font-bold text-zinc-200 group-hover:text-accent-emerald transition-colors">
                      @deepesh._0
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Direct response time note */}
          <ScrollReveal direction="up" delay={500} className="w-full">
            <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-900 text-xs text-zinc-500 leading-relaxed w-full">
              I typically respond to new project inquiries within 24 hours. For
              urgent needs, please reach out via WhatsApp.
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
