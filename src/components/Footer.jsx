import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="border-t border-ink-700">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
        <p className="text-xs text-paper-200">
          © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-paper-200 hover:text-teal-400">
            <FiGithub size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-paper-200 hover:text-teal-400">
            <FiLinkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-paper-200 hover:text-teal-400">
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
