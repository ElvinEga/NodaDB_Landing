'use client';

import { motion } from 'motion/react';
import { Terminal, Smartphone, Zap, Sparkles, Check, ArrowRight, Layers, Search, Shield, Cpu, Code } from 'lucide-react';
import Image from 'next/image';

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0B0B09] text-zinc-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* ==================== BLOCK 1: Relationship Flow ==================== */}
        <div className="jos grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" data-jos_animation="fade-up">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#17CF97] uppercase font-semibold">
              <span className="w-2.5 h-2.5 bg-[#17CF97] inline-block rounded-xs" />
              NODADB CORE
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif text-white leading-[1.1] font-normal">
              Relationship Flow
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Start from any record or ID and instantly discover every related piece of data across your database without writing complex JOINs or tracing foreign keys manually.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-zinc-300 font-sans">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                <span>Instant multi-table record traversal</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                <span>Audit customer trails, orders, and dependencies</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                <span>Automatic foreign key &amp; schema link detection</span>
              </li>
            </ul>
          </div>

          {/* Right Column Visual / Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#063324] via-[#031D14] to-[#0A1A14] border border-[#17CF97]/20 shadow-[0_0_50px_rgba(23,207,151,0.12)]">
              {/* Inner Dark Terminal Mockup */}
              <Image
                src="/images/relationship_flow.jpg"
                alt="Relationship Flow"
                className="w-full h-full object-cover rounded-2xl"
                width={680}
                height={420} />
            </div>
          </div>
        </div>


        {/* ==================== BLOCK 2: SQL Workspace & Data Explorer ==================== */}
        <div className="jos grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" data-jos_animation="fade-up" data-jos_delay="0.1">
          {/* Left Column Graphic / Card */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#063324] via-[#031D14] to-[#0A1A14] border border-[#17CF97]/20 shadow-[0_0_50px_rgba(23,207,151,0.12)]">
              {/* Inner Dark Terminal Mockup */}
              <Image
                src="/images/sql_workspace.jpg"
                alt="SQL Workspace"
                className="w-full h-full object-cover rounded-2xl"
                width={680}
                height={420} />
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#17CF97] uppercase font-semibold">
              <span className="text-[#17CF97]">{'///'}</span>
              NODADB STUDIO
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif text-white leading-[1.1] font-normal">
              SQL Workspace &amp; Data Explorer
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              A modern SQL editor paired with a high-performance spreadsheet interface. Virtual scrolling handles millions of rows effortlessly with zero UI lag.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Intelligent Autocomplete</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Context-aware schema completions and instant query formatting
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Spreadsheet Interface</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Inline editing, bulk updates, and custom column filtering
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Explain Plans</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Visual execution tree analysis for optimizing query performance
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Query History</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Searchable history with execution times, tags, and one-click rerun
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* ==================== BLOCK 3: Visual Schema & Security ==================== */}
        <div className="jos grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" data-jos_animation="fade-up" data-jos_delay="0.2">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#17CF97] uppercase font-semibold">
              <span className="text-[#17CF97]">{'///'}</span>
              NODADB NATIVE
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif text-white leading-[1.1] font-normal">
              Visual Schema &amp; Native Performance
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Explore interactive ER diagrams, trace table relationships, and manage production credentials with local-first security and instant Rust-powered desktop speed.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-4 py-2 rounded-full bg-[#141412] border border-white/10 text-xs font-medium text-zinc-300 shadow-sm">
                Local-First Architecture
              </span>
              <span className="px-4 py-2 rounded-full bg-[#141412] border border-white/10 text-xs font-medium text-zinc-300 shadow-sm">
                SSH Tunnels &amp; SSL
              </span>
              <span className="px-4 py-2 rounded-full bg-[#141412] border border-white/10 text-xs font-medium text-zinc-300 shadow-sm">
                Zero Cloud Dependency
              </span>
            </div>
          </div>

          {/* Right Column Visual / iPhone/Desktop Mockups Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#063324] via-[#031D14] to-[#0A1A14] border border-[#17CF97]/20 shadow-[0_0_50px_rgba(23,207,151,0.12)] overflow-hidden min-h-[420px] flex items-center justify-center">
              <Image
                src="/images/visual_schema.jpg"
                alt="Visual Schema"
                className="w-full h-full object-cover rounded-2xl"
                width={680}
                height={420} />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
