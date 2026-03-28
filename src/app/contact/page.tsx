'use client';

import { useState } from 'react';

const supportTiers = [
  { name: 'Community', desc: 'Discord + Forum', response: '24-48h', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z' },
  { name: 'Priority', desc: 'Email + Chat (Pro plan)', response: '4h', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { name: 'Dedicated', desc: 'Assigned engineer (Enterprise)', response: '1h', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      <p className="mt-2 text-slate-400">Get in touch — we&apos;d love to hear from you.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="rounded-xl border border-emerald/30 bg-emerald/5 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald/10">
                <svg className="h-8 w-8 text-emerald" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
              <p className="mt-2 text-sm text-slate-400">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-cyan focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-cyan focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-cyan focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-cyan focus:outline-none resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan py-2.5 font-semibold text-background transition hover:bg-cyan-light"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          {/* Support Tiers */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Support Tiers</h2>
            <div className="space-y-3">
              {supportTiers.map((tier) => (
                <div key={tier.name} className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                  <div className="shrink-0 rounded-lg bg-cyan/10 p-2">
                    <svg className="h-5 w-5 text-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d={tier.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{tier.name}</h3>
                    <p className="text-sm text-slate-400">{tier.desc}</p>
                    <p className="text-xs text-cyan">Response: {tier.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Maker Community</h2>
            <div className="space-y-3">
              {[
                { name: 'Discord Server', desc: '5,000+ members — chat, share builds, get help' },
                { name: 'Community Forum', desc: 'Long-form discussions, project showcases, tutorials' },
                { name: 'GitHub Discussions', desc: 'Bug reports, feature requests, open-source contributions' },
              ].map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="block rounded-lg border border-slate-700 bg-slate-800/50 p-4 transition hover:border-cyan/50"
                >
                  <div className="font-medium text-white">{link.name}</div>
                  <div className="text-sm text-slate-400">{link.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
