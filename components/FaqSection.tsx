'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ChevronRight, Check } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const faqs = [
    {
      q: 'What is NodaDB?',
      a: 'NodaDB (hosted on nodadb.com and powered by Kulacore) is a modern, local-first database management workspace built in Rust. It allows developers and data teams to connect to, explore, query, and visualize PostgreSQL, MySQL, MongoDB, Redis, SQLite, ClickHouse, and cloud databases in a fast, native application.',
    },
    {
      q: 'Does NodaDB support team collaboration?',
      a: 'Yes, NodaDB supports shared query vaults, team schema documentation, and team connection profiles with encrypted SSL key sharing.',
    },
    {
      q: 'Does NodaDB work locally without cloud dependency?',
      a: 'Absolutely. NodaDB is 100% local-first. Your database credentials, connection strings, and query histories remain stored and encrypted on your machine.',
    },
    {
      q: 'Are my database credentials and SSL certs safe?',
      a: 'Yes. All database credentials and private SSH keys are encrypted locally using AES-256-GCM hardware vaults. Zero telemetry or query data ever leaves your machine.',
    },
    {
      q: 'How does NodaDB handle large tables with millions of records?',
      a: 'NodaDB uses a custom virtual scrolling engine and native Rust asynchronous drivers, allowing you to browse through millions of rows with sub-millisecond responsiveness and zero RAM overflow.',
    },
    {
      q: 'How does billing work?',
      a: 'NodaDB offers a generous free Hobby tier for local database management. For advanced features like team schema sharing, visual Relationship Flow, and SSH tunneling, we offer Pro and Expert plans.',
    },
    {
      q: 'What support options are available?',
      a: 'We provide community support on Discord and GitHub for free users, priority email support for Pro subscribers, and dedicated 1:1 engineering support for Expert and Enterprise tiers.',
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setContactModalOpen(false);
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#090B09] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12 lg:space-y-24">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#17CF97] uppercase font-semibold">
                <span className="w-2.5 h-2.5 bg-[#17CF97] inline-block rounded-xs" />
                <span>NEED HELP?</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.1] tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-5 pt-4">
              <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-sm">
                Find answers to common questions about Insight, from setup to advanced features and security.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181A18] hover:bg-[#232623] text-zinc-200 border border-white/10 text-xs font-medium transition-all group cursor-pointer shadow-sm"
                >
                  <span>Contact us</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion Stack */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#131514] border-white/15 shadow-xl'
                      : 'bg-[#121413]/80 border-white/[0.08] hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-sm font-medium text-white transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-sans font-medium text-zinc-100">
                      {faq.q}
                    </span>
                    <div className="shrink-0 text-zinc-400 hover:text-white transition-colors">
                      {isOpen ? (
                        <X className="w-4 h-4 text-zinc-300" />
                      ) : (
                        <Plus className="w-4 h-4 text-zinc-400" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed pt-1 border-t border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Contact Support Modal */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#121413] border border-white/10 rounded-2xl p-6 space-y-5 shadow-2xl relative text-xs"
            >
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <h3 className="text-lg font-serif text-white">Contact Developer Support</h3>
                <p className="text-zinc-400 font-sans text-xs">Send us your inquiry or custom setup requirements.</p>
              </div>

              {sent ? (
                <div className="p-4 rounded-xl bg-[#17CF97]/15 border border-[#17CF97]/30 text-[#17CF97] text-center font-semibold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Message sent! We&apos;ll reply shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-zinc-400 text-xs mb-1 font-medium">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-[#090A09] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#17CF97]"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-xs mb-1 font-medium">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help?"
                      className="w-full bg-[#090A09] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#17CF97]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#17CF97] text-[#090A09] font-bold text-xs hover:bg-[#30E8B1] transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
