import { useState } from 'react';
import { Menu, X, ArrowUpRight, Github, Mail, MessageSquare } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-radial-gradient flex flex-col justify-between selection:bg-accent-emerald/30 selection:text-white">
      {/* Navbar Header */}
      <header className="sticky top-0 z-40 w-full glass border-b border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => { setPage('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-accent-emerald to-accent-indigo flex items-center justify-center font-bold text-zinc-950 text-lg shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform font-display">
              D
            </div>
            <span className="text-zinc-100 font-extrabold text-lg tracking-tight font-display group-hover:text-white transition-colors">
              Deepesh Sonkar
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors cursor-pointer relative py-2 ${
                  page === item.id 
                    ? 'text-accent-emerald' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.name}
                {page === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-emerald to-accent-indigo rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Header Button */}
          <button
            onClick={() => setPage('contact')}
            className="hidden md:flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs border border-zinc-850 hover:border-zinc-800 hover:scale-[1.02] cursor-pointer transition-all shadow-md"
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900/80 border border-zinc-850 hover:bg-zinc-800 text-zinc-450 hover:text-zinc-200 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 w-full bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-900 md:hidden animate-fade-in">
          <nav className="flex flex-col p-6 gap-6 text-left">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-lg font-bold py-2 border-b border-zinc-900/50 cursor-pointer ${
                  page === item.id 
                    ? 'text-accent-emerald' 
                    : 'text-zinc-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setPage('contact');
                setMobileMenuOpen(false);
              }}
              className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-emerald to-accent-indigo text-zinc-950 font-bold text-sm text-center shadow-lg"
            >
              Let's Talk
            </button>
          </nav>
        </div>
      )}

      {/* Main Work Area */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-8 md:py-12">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-zinc-900/80 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-zinc-550 text-xs font-medium">
            &copy; {new Date().getFullYear()} Deepesh Sonkar. All rights reserved.
          </p>

          {/* Quick Footer Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/0eepesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-zinc-300 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a 
              href="mailto:deepeshsonkar20@gmail.com" 
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-zinc-300 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a 
              href="https://wa.link/gh09g1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-zinc-300 transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
