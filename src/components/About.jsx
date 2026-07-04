import { motion } from 'framer-motion';

const points = [
  {
    title: 'Full-stack by default',
    body: 'Comfortable owning a feature from database schema to deployed UI — MERN and Next.js on the frontend, NestJS and Express on the backend.',
  },
  {
    title: 'AI/ML as a real toolset',
    body: 'Not a hobby add-on — I build and ship classical ML and computer vision pipelines with real datasets, and I document limitations honestly instead of overselling results.',
  },
  {
    title: 'I fix root causes',
    body: "When something breaks — a race condition, a missing index, a model that won't deserialize — I trace it to the source and fix it there, not around it.",
  },
  {
    title: 'Continuous builder',
    body: 'Every project ships as a complete, working system: tests, docs, deployment config. Prototypes are a step, not the deliverable.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-path">~/about</p>
      <h2 className="section-title">How I work</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {points.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card p-6"
          >
            <h3 className="font-display text-lg font-semibold text-paper-50">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper-200">{point.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
