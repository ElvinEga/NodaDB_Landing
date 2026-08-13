'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, CheckCircle, GitPullRequest, ArrowUpRight, Bell, Shield, Terminal, Play, Sparkles } from 'lucide-react';

export function MobileSection() {
  const [approved, setApproved] = useState(false);

  return (
    <section className="py-20 md:py-32 relative bg-[#0D0D0B] border-y border-white/[0.08] overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#17CF97]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17CF97]/10 text-[#17CF97] text-xs font-mono font-medium border border-[#17CF97]/20">
              <Smartphone className="w-3.5 h-3.5" />
              <span>NODADB FOR IOS &amp; IPAD</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Explore data anywhere. <br />
              <span className="italic text-[#17CF97] font-serif">Manage databases on the go.</span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg font-sans leading-relaxed">
              Never block an urgent query or schema audit. NodaDB iOS lets you inspect production database connections, review slow query alerts, and run quick SQL diagnostics right from your pocket.
            </p>

            <div className="space-y-3 pt-2 font-sans text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#17CF97]/20 flex items-center justify-center text-[#17CF97]">
                  ✓
                </div>
                <span>Instant push alerts when slow query thresholds are exceeded</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#17CF97]/20 flex items-center justify-center text-[#17CF97]">
                  ✓
                </div>
                <span>Full syntax-highlighted SQL query execution on mobile retina displays</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#17CF97]/20 flex items-center justify-center text-[#17CF97]">
                  ✓
                </div>
                <span>Secure biometric SSH key access for emergency query runs</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/10 transition-colors"
              >
                <span>Download on App Store</span>
                <ArrowUpRight className="w-4 h-4 text-[#17CF97]" />
              </a>
              <span className="text-xs font-mono text-zinc-500">Requires iOS 17.0 or later</span>
            </div>
          </div>

          {/* Right iPhone Frame Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-[48px] border-[10px] border-[#22221F] bg-[#0A0A08] p-4 shadow-[0_0_60px_rgba(23,207,151,0.2)]">
              {/* Dynamic Island Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#22221F] rounded-full z-20 flex items-center justify-end px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#17CF97]/40" />
              </div>

              {/* Mobile Screen Header */}
              <div className="pt-6 pb-3 px-1 flex items-center justify-between border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-[#17CF97]" />
                  <span>NodaDB Mobile</span>
                </div>
                <Bell className="w-3.5 h-3.5 text-zinc-400" />
              </div>

              {/* Mobile App Body */}
              <div className="py-4 space-y-3 font-mono text-xs">
                {/* Notification Badge */}
                <div className="p-3 rounded-xl bg-[#141412] border border-[#17CF97]/30 text-zinc-200 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#17CF97] font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> QUERY ALERT · HEAVY SCAN
                    </span>
                    <span className="text-zinc-500">2m ago</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-300 font-medium">
                    Alert: Slow query on production-pg: SELECT * FROM orders WHERE status = &apos;pending&apos;
                  </p>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    1.2M rows scanned · 4.2s latency · 80% CPU load
                  </div>
                </div>

                {/* Diff Preview Card */}
                <div className="p-3 rounded-xl bg-[#121210] border border-white/10 space-y-2">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Recommended Index Fix</div>
                  <div className="p-2 rounded bg-[#080806] text-[10px] font-mono leading-tight space-y-1">
                    <div className="text-zinc-500">- SELECT * FROM public.orders</div>
                    <div className="text-[#30E8B1]">+ CREATE INDEX CONCURRENTLY idx_orders_status ON public.orders(status);</div>
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => setApproved(!approved)}
                    className={`w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      approved
                        ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                        : 'bg-[#17CF97] text-[#0B0B09] hover:bg-[#30E8B1]'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{approved ? 'Index Migration Applied! ✓' : 'Apply Index Migration'}</span>
                  </button>

                  <button className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 font-medium text-xs border border-white/10 cursor-pointer">
                    Run SQL Diagnostic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
