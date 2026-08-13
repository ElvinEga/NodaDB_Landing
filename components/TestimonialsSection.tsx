'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronRight, X, Check } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      author: 'Elena Rossi',
      role: 'Creative Director, Studio Aura',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      content: 'The integrated sound and video generation have completely streamlined our creative output.',
      rating: 5,
    },
    {
      id: '2',
      author: 'Marcus Rivera',
      role: 'Data lead, DataLabs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      content: 'The speed and precision of the image generation and editing tools are incredible. We went from weeks of manual content pipeline work to days.',
      rating: 5,
    },
    {
      id: '3',
      author: 'Julian Thorne',
      role: 'Head of Product, NexaStream',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      content: 'The precision of the image editing tools is unmatched. We went from weeks of manual pipeline work to days.',
      rating: 5,
    },
    {
      id: '4',
      author: 'Sarah Chen',
      role: 'CTO, InnoCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      content: 'This platform is a total game-changer for our creative workflow. It seamlessly combines image, video, and sound generation into one efficient tool.',
      rating: 5,
    },
    {
      id: '5',
      author: 'Casey Wright',
      role: 'Technical Director, Core Creative',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      content: 'Integration was incredibly fast, and the tools are surprisingly intuitive for the team. The real-time collaboration features are a standout.',
      rating: 5,
    },
    {
      id: '6',
      author: 'Taylor Brooks',
      role: 'VP of Design, Shift Digital',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
      content: 'Generating high-fidelity video and audio in one click is vital. We went from weeks of manual pipeline work to days.',
      rating: 5,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newContent, setNewContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newContent) return;

    const reviewObj: Review = {
      id: Date.now().toString(),
      author: newAuthor,
      role: newRole || 'Lead Engineer, Tech Labs',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      content: newContent,
      rating: 5,
    };

    setReviews([reviewObj, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setNewAuthor('');
      setNewRole('');
      setNewContent('');
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#090A09] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#17CF97] uppercase font-semibold">
              <span className="w-5 h-[2px] bg-[#17CF97] inline-block rounded-full" />
              <span>TESTIMONIALS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight">
              Trusted by 300+ people
            </h2>
          </div>

          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181A18] hover:bg-[#232723] text-zinc-200 border border-white/10 text-xs font-medium transition-all group shadow-sm cursor-pointer"
            >
              <span>Submit a review</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={rev.id}
              className="jos p-6 sm:p-7 rounded-2xl bg-[#121413] border border-white/[0.08] hover:border-[#17CF97]/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg group"
              data-jos_animation="flip-up"
              data-jos_delay={(index % 3) * 0.1}
            >
              {/* Stars & Review text */}
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-[#17CF97]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#17CF97] text-[#17CF97]" />
                  ))}
                </div>

                <p className="text-sm sm:text-[15px] text-zinc-300 font-sans leading-relaxed">
                  &quot;{rev.content}&quot;
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center gap-3.5 pt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                />
                <div className="space-y-0.5 min-w-0">
                  <div className="text-sm font-semibold text-white truncate">{rev.author}</div>
                  <div className="text-xs text-zinc-400 font-sans truncate">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#121413] border border-white/10 rounded-2xl p-6 space-y-5 shadow-2xl relative text-xs"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <h3 className="text-lg font-serif text-white">Submit a Review</h3>
                <p className="text-zinc-400 text-xs font-sans">Share your experience with our platform.</p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-[#17CF97]/15 border border-[#17CF97]/30 text-[#17CF97] text-center font-semibold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Review submitted! Thank you!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-zinc-400 text-xs mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Elena Rossi"
                      className="w-full bg-[#090A09] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#17CF97]"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-xs mb-1 font-medium">Role &amp; Company</label>
                    <input
                      type="text"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      placeholder="e.g. Creative Director, Studio Aura"
                      className="w-full bg-[#090A09] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#17CF97]"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-xs mb-1 font-medium">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="How has our platform helped your creative workflow?"
                      className="w-full bg-[#090A09] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#17CF97]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#17CF97] text-[#090A09] font-bold text-xs hover:bg-[#30E8B1] transition-colors cursor-pointer"
                  >
                    Submit Review
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
