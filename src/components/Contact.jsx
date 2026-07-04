import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';

const initialForm = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.message.trim()) errors.message = 'Message is required.';
  else if (form.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey }
      );
      setStatus('sent');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <p className="section-path">~/contact</p>
      <h2 className="section-title">Let's Build Something Great Together</h2>

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <a href={`mailto:${profile.email}`} className="card flex items-center gap-3 p-4">
            <FiMail className="text-teal-400" /> <span className="text-sm">{profile.email}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="card flex items-center gap-3 p-4">
            <FiGithub className="text-teal-400" /> <span className="text-sm">GitHub Profile</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="card flex items-center gap-3 p-4">
            <FiLinkedin className="text-teal-400" /> <span className="text-sm">LinkedIn Profile</span>
          </a>
          <div className="card flex items-center gap-3 p-4">
            <FiMapPin className="text-teal-400" /> <span className="text-sm">{profile.location}</span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="card space-y-4 p-6"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-mono text-paper-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full rounded-lg border border-ink-600 bg-ink-900 px-3 py-2 text-sm text-paper-100 outline-none focus:border-teal-400"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-amber-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-mono text-paper-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-lg border border-ink-600 bg-ink-900 px-3 py-2 text-sm text-paper-100 outline-none focus:border-teal-400"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-amber-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-xs font-mono text-paper-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full rounded-lg border border-ink-600 bg-ink-900 px-3 py-2 text-sm text-paper-100 outline-none focus:border-teal-400"
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-amber-400">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
            <FiSend size={15} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          <div role="status" aria-live="polite">
            {status === 'sent' && (
              <p className="text-sm text-teal-400">
                Message sent — thanks for reaching out. I’ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-amber-400">
                Couldn’t send right now. Email directly at {profile.email}, or check your EmailJS setup in .env.
              </p>
            )}

            <p className="mt-2 text-[11px] text-paper-200/80">
              Privacy: Contact submissions are sent via EmailJS (stored/processed by the EmailJS provider).
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
