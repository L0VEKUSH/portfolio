import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData.js';

function ProjectCard({ project, flagship, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`card flex flex-col p-6 md:p-8 ${flagship ? 'md:col-span-2 border-teal-400/30' : ''}`}
    >
      {flagship && (
        <span className="mb-3 w-fit rounded-full bg-teal-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-teal-400">
          Flagship project
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-paper-50">{project.name}</h3>
      <p className="mt-1 text-sm text-amber-400">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-paper-200">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-paper-200">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary py-2 text-sm">
            <FiGithub size={15} /> Code
          </a>
        ) : (
          <span className="badge cursor-not-allowed opacity-60" title="Repository link not yet public">
            <FiGithub size={14} /> Code coming soon
          </span>
        )}
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary py-2 text-sm">
            <FiExternalLink size={15} /> Live Demo
          </a>
        ) : (
          <span className="badge cursor-not-allowed opacity-60" title="No live demo deployed yet">
            <FiExternalLink size={14} /> Not deployed
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-path">~/projects</p>
      <h2 className="section-title">Featured Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} flagship={project.flagship} index={i} />
        ))}
      </div>
    </section>
  );
}
