'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { IdePreview } from './IdePreview';

interface HeroProps {
  onOpenDownloadModal: () => void;
}

export function Hero({ onOpenDownloadModal }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const command = 'brew install nodadb';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden bg-[#0B0B09]">
      {/* Hero Background - Framer Orbit & Concentric Emerald Gradients */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
        {/* Concentric Radial Circles */}
        <div className="absolute w-[972px] h-[972px] rounded-full bg-[radial-gradient(circle_at_center,_#031C14_0%,_#031C14_85%,_#0B0B09_100%)] opacity-80 scale-105 transition-transform duration-1000" />
        <div className="absolute w-[861px] h-[861px] rounded-full bg-[radial-gradient(circle_at_center,_#031C14_0%,_#031C14_82%,_#0B0B09_100%)] opacity-90 scale-100" />
        <div className="absolute w-[722px] h-[722px] rounded-full bg-[radial-gradient(circle_at_center,_#031C14_0%,_#0B0B09_100%)] opacity-95" />

        {/* Orbit SVG & Celestial Bodies */}
        <div className="absolute w-[1100px] h-[700px] flex items-center justify-center" style={{ transform: 'rotate(21.5deg)' }}>
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1100 700">
            {/* White Dotted Orbit */}
            <ellipse
              cx="550"
              cy="350"
              rx="510"
              ry="270"
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            {/* Green Dotted Orbit */}
            <ellipse
              cx="550"
              cy="350"
              rx="450"
              ry="230"
              fill="none"
              stroke="rgba(23, 207, 151, 0.22)"
              strokeWidth="1"
              strokeDasharray="1 4"
            />

            {/* Scattered Starfield Dots */}
            <circle cx="120" cy="180" r="1" fill="rgba(255,255,255,0.6)" />
            <circle cx="280" cy="90" r="1.5" fill="rgba(23,207,151,0.5)" />
            <circle cx="980" cy="140" r="1" fill="rgba(255,255,255,0.7)" />
            <circle cx="1040" cy="420" r="1.5" fill="rgba(255,255,255,0.4)" />
            <circle cx="850" cy="580" r="1" fill="rgba(23,207,151,0.6)" />
            <circle cx="160" cy="520" r="1" fill="rgba(255,255,255,0.5)" />
            <circle cx="60" cy="380" r="1.5" fill="rgba(255,255,255,0.6)" />
            <circle cx="450" cy="50" r="1" fill="rgba(255,255,255,0.4)" />
            <circle cx="720" cy="80" r="1.5" fill="rgba(23,207,151,0.7)" />
            <circle cx="920" cy="280" r="1" fill="rgba(255,255,255,0.5)" />
            <circle cx="220" cy="300" r="1" fill="rgba(255,255,255,0.3)" />
            <circle cx="650" cy="620" r="1.5" fill="rgba(255,255,255,0.6)" />
          </svg>

          {/* Ringed Planet at Top Left (~ 10 o'clock on orbit) */}
          <div
            className="absolute left-[110px] top-[140px] flex items-center justify-center pointer-events-none"
            style={{ transform: 'rotate(-28deg)' }}
          >
            {/* Planet Sphere */}
            <div className="w-5 h-5 rounded-full bg-[#17CF97] shadow-[0_0_12px_rgba(23,207,151,0.8)] relative z-10" />
            {/* Planet 3D Ring */}
            <div
              className="absolute w-10 h-10 border-[1.5px] border-[#30E8B1]/70 rounded-full"
              style={{
                transform: 'rotate(-26deg) rotateX(72deg) rotateY(32deg)',
                boxShadow: '0 0 8px rgba(23,207,151,0.3)'
              }}
            />
          </div>

          {/* Earth & Moon at Bottom Right (~ 4 o'clock on orbit) */}
          <div className="absolute right-[140px] bottom-[160px] flex items-center justify-center pointer-events-none">
            {/* Earth Sphere */}
            <div className="w-4 h-4 rounded-full bg-[#1E62D0] border border-[#3091FF]/50 relative flex items-center justify-center overflow-hidden shadow-[0_0_8px_rgba(30,98,208,0.6)]">
              {/* Landmass shapes */}
              <div className="absolute top-0.5 left-0.5 w-2 h-1.5 bg-[#0EC515] rounded-full opacity-90" />
              <div className="absolute bottom-0.5 right-0.5 w-2 h-1 bg-[#0EC515] rounded-full opacity-90" />
            </div>

            {/* Orbiting Moon */}
            <div className="absolute -top-1.5 -right-2 w-1.5 h-1.5 rounded-full bg-zinc-200 shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Announcement Pill */}
          <motion.a
            href="#pricing"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18]/90 border border-white/10 hover:border-white/20 text-xs font-sans text-zinc-300 hover:text-white transition-all shadow-lg backdrop-blur-md group"
          >
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 text-[10px] font-mono font-bold tracking-wider uppercase">
              NEW
            </span>
            <span>NodaDB v1.0 released — Built with Rust</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </motion.a>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl md:text-[84px] font-normal tracking-tight text-white leading-[1.04] max-w-4xl"
          >
            Mordern Universal database  <br />
            workspace.
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed"
          >
            NodaDB is a modern database management platform for developers and data teams. Connect to, explore, query, and visualize SQL and NoSQL databases in one fast, native application.
          </motion.p>

          {/* Copyable Install Command Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#141412] border border-white/10 text-xs font-mono text-zinc-300 shadow-2xl hover:border-white/20 transition-all group">
              <span className="text-zinc-500 font-bold">$</span>
              <span className="text-zinc-200">{command}</span>
              <button
                onClick={handleCopy}
                className="ml-1 p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors relative"
                title="Copy command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#17CF97]" /> : <Copy className="w-3.5 h-3.5" />}
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#17CF97] text-[#0B0B09] font-sans font-bold text-[10px] shadow-lg whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* IDE Preview Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <IdePreview />
        </motion.div>
      </div>
    </section>
  );
}
