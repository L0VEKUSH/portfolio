import { useEffect, useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.jsx';
import { navLinks } from '../data/portfolioData.js';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors ${
        scrolled ? 'border-b border-ink-700 bg-ink-900/80 backdrop-blur-md light:bg-white/80' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10" aria-label="Primary">
        <a href="#home" className="font-mono text-sm font-semibold text-teal-400">
          lovekush<span className="text-paper-200">.dev</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[13px] text-paper-200 transition-colors hover:text-teal-400"
              >
                {link.path}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-md border border-ink-600 p-2 text-paper-200 transition-colors hover:border-teal-400 hover:text-teal-400"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <a href="#contact" className="btn-primary hidden md:inline-flex px-4 py-2 text-sm">
            Hire Me
          </a>
          <button
            className="rounded-md border border-ink-600 p-2 text-paper-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-ink-700 bg-ink-900 px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-paper-200 hover:text-teal-400"
              >
                {link.path}
              </a>
            </li>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center py-2.5 text-sm">
            Hire Me
          </a>
        </ul>
      )}
    </header>
  );
}
