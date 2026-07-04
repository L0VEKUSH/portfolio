import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { achievements } from '../data/portfolioData.js';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <p className="section-path">~/achievements</p>
      <h2 className="section-title">Achievements</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="card flex items-start gap-3 p-5"
          >
            <FiCheckCircle className="mt-0.5 flex-shrink-0 text-teal-400" size={18} />
            <p className="text-sm text-paper-200">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
