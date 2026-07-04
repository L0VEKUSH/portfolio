import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';

export default function Resume() {
  return (
    <section id="resume" className="section">
      <p className="section-path">~/resume</p>
      <h2 className="section-title">Resume</h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
        className="card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-teal-400/10 p-3 text-teal-400">
            <FiFileText size={28} />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-paper-50">{profile.name} — Resume</h3>
            <p className="text-sm text-paper-200">Full Stack MERN Developer · AI/ML Enthusiast</p>
          </div>
        </div>
        <a href={profile.resumeUrl} download className="btn-primary" title="Download resume PDF">
          <FiDownload size={16} /> Download PDF
        </a>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          title="Open resume in a new tab"
        >
          <FiFileText size={16} /> Open PDF
        </a>
      </motion.div>
      <p className="mt-3 text-xs text-paper-200">
        Tip: Keep your resume in <code className="font-mono text-teal-400">public/</code> and ensure the URL path matches your deploy base.
      </p>
    </section>
  );
}
