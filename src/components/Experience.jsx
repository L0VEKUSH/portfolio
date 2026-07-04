import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-path">~/experience</p>
      <h2 className="section-title">Experience</h2>

      <div className="space-y-6">
        {experience.map((job, i) => (
          <motion.div
            key={job.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-paper-50">{job.role}</h3>
              {job.period && <span className="font-mono text-xs text-paper-200">{job.period}</span>}
            </div>
            <p className="mt-1 font-mono text-sm text-teal-400">{job.org}</p>
            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-paper-200">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
