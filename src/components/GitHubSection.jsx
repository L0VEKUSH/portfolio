import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import { profile, githubUsername } from '../data/portfolioData.js';

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    async function loadRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
        );
        if (!res.ok) throw new Error('GitHub API request failed');
        const data = await res.json();
        if (!cancelled) {
          setRepos(data);
          setStatus('ready');
        }
      } catch (err) {
        if (!cancelled) setStatus('error');
      }
    }
    loadRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section">
      <p className="section-path">~/github</p>
      <h2 className="section-title">GitHub Activity</h2>

      <div className="mb-8 overflow-x-auto rounded-xl border border-ink-700 bg-ink-800/40 p-4">
        <img
          src={`https://ghchart.rshah.org/3ED9C4/${githubUsername}`}
          alt={`${profile.name}'s GitHub contribution graph`}
          className="min-w-[600px]"
          loading="lazy"
        />
      </div>

      {status === 'loading' && <p className="font-mono text-sm text-paper-200">Loading repositories…</p>}

      {status === 'error' && (
        <p className="font-mono text-sm text-paper-200">
          Couldn't load live repository data right now — visit the{' '}
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-teal-400 underline">
            GitHub profile
          </a>{' '}
          directly.
        </p>
      )}

      {status === 'ready' && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="card block p-5"
            >
              <div className="flex items-center gap-2 text-paper-50">
                <FiGithub size={16} />
                <h3 className="truncate font-mono text-sm font-medium">{repo.name}</h3>
              </div>
              {repo.description && (
                <p className="mt-2 line-clamp-2 text-xs text-paper-200">{repo.description}</p>
              )}
              <div className="mt-3 flex items-center gap-4 text-xs text-paper-200">
                {repo.language && <span className="badge">{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <FiStar size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FiGitBranch size={12} /> {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
