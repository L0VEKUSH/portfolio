import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Achievements = lazy(() => import('./components/Achievements.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const GitHubSection = lazy(() => import('./components/GitHubSection.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

function SectionFallback() {
  return <div className="section" aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Resume />
          <GitHubSection />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
