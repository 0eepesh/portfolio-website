import { useState } from 'react';
import { Mail, MessageCircle, Instagram, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmittedData({ ...formState });
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-12 py-8 md:py-16">
      {/* Title section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-gradient">
          Get in Touch
        </h2>
        <p className="text-zinc-400 text-lg">
          Have an idea or a project in mind? Reach out and let's build something exceptional together.
        </p>
      </div>

      {/* Main split content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-5xl mx-auto items-start pt-6 text-left">
        
        {/* Left Side: Contact Form */}
        <div className="md:col-span-7 glass-card p-6 md:p-8 rounded-2xl space-y-6">
          <h3 className="text-xl font-bold text-zinc-100 font-display">Send a Message</h3>
          
          {isSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-4">
              <div className="text-center space-y-2">
                <div className="inline-flex p-2 bg-emerald-500/20 rounded-full text-accent-emerald">
                  <CheckCircle size={28} />
                </div>
                <h4 className="text-lg font-bold text-zinc-100">Message Simulated!</h4>
                <p className="text-zinc-400 text-xs">
                  Here is the payload that would be sent to an API:
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-zinc-950/80 border border-zinc-900 text-xs font-mono text-zinc-300 space-y-2">
                <p><span className="text-accent-emerald font-semibold">Name:</span> {submittedData?.name}</p>
                <p><span className="text-accent-emerald font-semibold">Email:</span> {submittedData?.email}</p>
                <p><span className="text-accent-emerald font-semibold block mt-1.5">Message:</span></p>
                <p className="pl-3 border-l border-zinc-850 italic text-zinc-400 whitespace-pre-wrap">{submittedData?.message}</p>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmittedData(null);
                  setFormState({ name: '', email: '', message: '' });
                }}
                className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-800 rounded-xl text-zinc-350 hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="glow-btn w-full py-3.5 bg-gradient-to-r from-accent-emerald to-accent-indigo text-zinc-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Contact Channels */}
        <div className="md:col-span-5 space-y-6">
          <div className="glass-card p-6 md:p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-zinc-100 font-display">Communication Channels</h3>
            
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
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Email Me</p>
                  <p className="text-sm font-bold text-zinc-200 group-hover:text-accent-emerald transition-colors">deepeshsonkar20@gmail.com</p>
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
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-sm font-bold text-zinc-200 group-hover:text-accent-emerald transition-colors">Chat on WhatsApp</p>
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
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Instagram</p>
                  <p className="text-sm font-bold text-zinc-200 group-hover:text-accent-emerald transition-colors">@deepesh._0</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Direct response time note */}
          <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-900 text-xs text-zinc-500 leading-relaxed">
            I typically respond to new project inquiries within 24 hours. For urgent needs, please reach out via WhatsApp.
          </div>
        </div>

      </div>
    </div>
  );
}
