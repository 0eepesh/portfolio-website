import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Github,
  Mail,
  MessageSquare,
} from "lucide-react";
import {
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home", path: "/" },
    { name: "Services", id: "services", path: "/services" },
    { name: "Projects", id: "projects", path: "/projects" },
    { name: "Contact", id: "contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-radial-gradient flex flex-col justify-between selection:bg-accent-emerald/30 selection:text-white">
      <ScrollToTop />
      {/* Navbar Header */}
      <header className="sticky top-0 z-40 w-full glass border-b border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img
              src="/pfp.png"
              alt="deepesh"
              className="h-9 w-9 rounded-xl object-cover shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform"
            />
            <span className="text-zinc-100 font-extrabold text-lg tracking-tight font-display group-hover:text-white transition-colors">
              deepesh
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors cursor-pointer relative py-2 ${
                    isActive
                      ? "text-accent-emerald"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-emerald to-accent-indigo rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Header Button */}
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs border border-zinc-850 hover:border-zinc-800 hover:scale-[1.02] cursor-pointer transition-all shadow-md"
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </Link>

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
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold py-2 border-b border-zinc-900/50 cursor-pointer ${
                    isActive ? "text-accent-emerald" : "text-zinc-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-emerald to-accent-indigo text-white font-bold text-sm text-center shadow-lg"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}

      {/* Main Work Area */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-8 md:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-zinc-900/80 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-zinc-550 text-xs font-medium">
            &copy; {new Date().getFullYear()} Deepesh Sonkar. All rights
            reserved.
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
