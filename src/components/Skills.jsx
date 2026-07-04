import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-path">~/skills</p>
      <h2 className="section-title">Toolkit</h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-teal-400">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
