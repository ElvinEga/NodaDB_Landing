'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { AppleIcon, WindowsIcon, LinuxIcon } from './icons/OsIcons';

interface CtaBannerProps {
  onOpenDownloadModal?: () => void;
}

export function CtaBanner({ onOpenDownloadModal }: CtaBannerProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 2500);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090A09] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Banner Box */}
        <div className="jos relative rounded-[32px] bg-gradient-to-r from-[#022117] via-[#054832] to-[#012217] border border-[#17CF97]/25 overflow-hidden shadow-[0_0_80px_rgba(23,207,151,0.15)] min-h-[420px] flex items-center justify-center" data-jos_animation="zoom-in">
          
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,207,151,0.2),transparent_70%)] pointer-events-none" />

          {/* LEFT MOCKUP PANEL (Peeking from left) */}
          <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 w-[340px] pointer-events-none select-none opacity-90 transition-transform duration-500 hover:translate-x-2">
            {/* Background Editor Peek */}
            <div className="absolute -left-16 top-6 w-[280px] bg-[#0A0C0B] border border-white/10 rounded-2xl p-3 text-[10px] font-mono text-zinc-500 space-y-1 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-1 text-zinc-400">
                <span>outMachine.ts</span>
                <span className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded">Open in VS Code</span>
              </div>
              <div className="text-emerald-400">Checks passed ✓</div>
              <div className="text-zinc-400">utState = &quot;idle&quot; | &quot;submitting&quot;</div>
              <div className="text-zinc-600">Session();</div>
              <div className="text-emerald-500">rtSession(cart.id);</div>
              <div className="text-zinc-600">UntilRetry();</div>
            </div>

            {/* Front NodaDB Sidebar Card */}
            <div className="relative z-10 bg-[#121413] border border-white/15 rounded-2xl p-4 shadow-2xl text-[11px] font-sans text-zinc-300 space-y-3">
              {/* Traffic light bar */}
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-1.5 font-semibold text-white flex items-center gap-1.5">
                    <Image src="/logo.png" alt="NodaDB" width={16} height={16} className="w-4 h-4 object-contain rounded" />
                    NodaDB
                  </span>
                </div>
              </div>

              {/* Action List */}
              <div className="space-y-1 font-mono text-[10px] text-zinc-400">
                <div className="flex items-center justify-between p-1.5 rounded bg-white/5 text-white">
                  <span>+ New agent run</span>
                  <span className="text-zinc-500">⌘N</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                  <span>🔍 Search</span>
                  <span className="text-zinc-500">⌘S</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                  <span>🧩 Plugins</span>
                  <span className="text-zinc-500">⌘P</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                  <span>⏰ Automations</span>
                  <span className="text-zinc-500">⌘A</span>
                </div>
              </div>

              {/* Active Repos */}
              <div className="space-y-1 pt-1 border-t border-white/5">
                <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">ACTIVE REPOS</div>
                <div className="p-2 rounded bg-[#1A1C1B] border border-white/5 space-y-0.5">
                  <div className="flex justify-between font-mono text-[10px] text-white">
                    <span>checkout-retry-state</span>
                    <span className="text-[#17CF97]">+286 <span className="text-rose-400">-91</span></span>
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-400">
                    <span>northstar-web · agent coding</span>
                    <span className="font-mono text-zinc-500">⌘1</span>
                  </div>
                </div>

                <div className="p-2 rounded bg-[#1A1C1B]/60 border border-white/5 space-y-0.5">
                  <div className="flex justify-between font-mono text-[10px] text-zinc-300">
                    <span>command-center-tabs</span>
                    <span className="text-[#17CF97]">+74 <span className="text-rose-400">-18</span></span>
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-500">
                    <span>orbit-ide · awaiting review</span>
                    <span className="font-mono">⌘2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* CENTER CONTENT */}
          <div className="relative z-20 text-center max-w-xl mx-auto px-6 py-12 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.1] tracking-tight">
              Stop managing databases the hard way
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 font-sans leading-relaxed max-w-md mx-auto">
              Join thousands of engineers using NodaDB to explore, query, and visualize schemas in seconds.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-sm transition-all transform hover:scale-105 shadow-2xl cursor-pointer"
              >
                <span>Download NodaDB</span>
                <div className="flex items-center gap-1.5 text-zinc-950">
                  <AppleIcon className="w-4 h-4 fill-current" />
                  <WindowsIcon className="w-4 h-4 fill-current" />
                  <LinuxIcon className="w-4 h-4 fill-current" />
                </div>
              </button>
            </div>
          </div>


          {/* RIGHT MOCKUP PANEL (Peeking from right) */}
          <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-[380px] pointer-events-none select-none opacity-90 transition-transform duration-500 hover:-translate-x-2">
            <div className="bg-[#0B0D0C] border border-white/15 rounded-2xl p-4 shadow-2xl text-[10px] font-sans text-zinc-300 space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-zinc-400 font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white font-medium">Checkout retry state machine</span>
                </div>
                <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Ready</span>
              </div>

              {/* Mode Tabs */}
              <div className="flex gap-4 text-[10px] font-mono text-zinc-400 border-b border-white/5 pb-1.5">
                <span className="text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1">Agent</span>
                <span>Review</span>
                <span>Browser</span>
              </div>

              {/* Files */}
              <div className="space-y-0.5 font-mono text-[9px] text-zinc-400">
                <div>src/ui/PaymentRetryPanel.tsx</div>
                <div>tests/checkout/retry-flow.spec.ts</div>
                <div>src/checkout/retryCopy.ts</div>
              </div>

              {/* Tool calls */}
              <div className="text-[9px] text-zinc-500 font-mono">
                › 16 tool calls · 9 messages · 3 checks
              </div>

              {/* Review summary */}
              <div className="space-y-1 pt-1 border-t border-white/5">
                <div className="font-semibold text-white">Review summary</div>
                <p className="text-zinc-400 leading-snug text-[9px]">
                  The patch now treats recoverable provider timeouts as a first-class checkout state and ensures the cart snapshot survives retry.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-1 bg-white/[0.02] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] font-mono text-zinc-500">Review checklist</div>
                <div className="text-[#17CF97] flex items-center gap-1.5 text-[9px]">
                  <span>✓</span>
                  <span>Retry state preserves cart snapshots before provider handoff.</span>
                </div>
                <div className="text-[#17CF97] flex items-center gap-1.5 text-[9px]">
                  <span>✓</span>
                  <span>Duplicate submit is blocked while the retry intent is active.</span>
                </div>
                <div className="text-zinc-400 flex items-center gap-1.5 text-[9px]">
                  <span>◯</span>
                  <span>Human pass should confirm the banner copy is short on mobile.</span>
                </div>
              </div>

              {/* Input field bottom */}
              <div className="p-2 rounded-xl bg-[#161817] border border-white/10 text-zinc-500 flex items-center justify-between text-[9px]">
                <span>Ask for a narrower patch, request another test...</span>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter Section Below Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4">
          <div className="space-y-1 max-w-md">
            <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
              Subscribe to our Newsletter
            </h3>
            <p className="text-xs text-zinc-400 font-sans">
              Get insights delivered straight to your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-2">
            {subscribed ? (
              <div className="px-5 py-2.5 rounded-full bg-[#17CF97]/20 border border-[#17CF97]/40 text-[#17CF97] text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="alex@nodadb.com"
                  className="bg-[#151716] border border-white/10 rounded-full px-5 py-2.5 text-xs text-white placeholder-zinc-500 w-full sm:w-72 focus:outline-none focus:border-[#17CF97]"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#242725] hover:bg-[#2F3330] text-zinc-200 text-xs font-medium border border-white/10 transition-colors shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="text-[11px] text-zinc-500 underline decoration-zinc-700/60 font-sans">
              We respect your privacy and only send what matters.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
