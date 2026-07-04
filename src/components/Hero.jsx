import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';

const lines = [
  { prompt: 'whoami', output: profile.name },
  { prompt: 'cat role.txt', output: profile.roles.join('  •  ') },
];

export default function Hero() {
  return (
    <section id="home" className="section flex flex-col-reverse items-center gap-12 pt-32 md:flex-row md:pt-40">
      <div className="w-full md:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-path"
        >
          ~/home
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-4xl font-display font-semibold leading-tight text-paper-50 md:text-5xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 flex flex-wrap gap-2"
        >
          {profile.roles.map((role) => (
            <span key={role} className="badge">
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-lg text-paper-200"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href={profile.resumeUrl} className="btn-primary" download>
            <FiDownload size={16} /> Download Resume
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects <FiArrowRight size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-ink-600 p-2.5 text-paper-200 hover:border-teal-400 hover:text-teal-400"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg border border-ink-600 p-2.5 text-paper-200 hover:border-teal-400 hover:text-teal-400"
          >
            <FiLinkedin size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2"
      >
        <div className="overflow-hidden rounded-xl border border-ink-700 bg-ink-950 shadow-glow">
          <div className="flex items-center gap-1.5 border-b border-ink-700 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-paper-200">lovekush@dev: ~</span>
          </div>
          <div className="space-y-3 p-6 font-mono text-sm">
            {lines.map((line, i) => (
              <motion.div
                key={line.prompt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.6 }}
              >
                <p className="text-teal-400">
                  <span className="text-amber-400">$</span> {line.prompt}
                </p>
                <p className="mt-1 pl-4 text-paper-100">{line.output}</p>
              </motion.div>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-teal-400"
            >
              <span className="text-amber-400">$</span>{' '}
              <span className="inline-block w-2 bg-teal-400 animate-blink">&nbsp;</span>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
