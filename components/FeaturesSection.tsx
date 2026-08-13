'use client';

import { motion } from 'motion/react';
import { Terminal, Smartphone, Zap, Sparkles, Check, ArrowRight, Layers, Search, Shield, Cpu, Code } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0B0B09] text-zinc-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* ==================== BLOCK 1: Relationship Flow ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#063324] via-[#031D14] to-[#0A1A14] border border-[#17CF97]/20 shadow-[0_0_50px_rgba(23,207,151,0.12)]">
              {/* Inner Dark Terminal Mockup */}
              <div className="rounded-2xl bg-[#090908] border border-white/10 overflow-hidden font-mono text-xs shadow-2xl">
                {/* Header Bar */}
                <div className="px-4 py-2.5 bg-[#121210] border-b border-white/10 flex items-center justify-between text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-2 text-zinc-300 text-[11px]">~/dev/nodadb</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 flex gap-2">
                    <span className="text-[#17CF97]">PostgreSQL 16</span>
                    <span>|</span>
                    <span className="text-zinc-400">0.4ms</span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 space-y-4">
                  {/* User Prompt */}
                  <div className="flex items-start gap-2 text-zinc-200">
                    <span className="text-[#17CF97] font-bold">›</span>
                    <span className="font-semibold text-white">find relationships for customer_id: &apos;usr_8829&apos;</span>
                  </div>

                  {/* Agent Steps */}
                  <div className="space-y-1.5 pl-3 border-l border-[#17CF97]/30 text-[11px]">
                    <div className="flex items-center gap-2 text-[#17CF97]">
                      <span>◆</span>
                      <span>Traversed 14 foreign keys across 6 tables</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-[#17CF97]">◆</span>
                      <span>Related: <span className="text-zinc-200">orders (12), invoices (12), audit_logs (142), subscriptions (1)</span></span>
                    </div>
                  </div>

                  {/* Diff View */}
                  <div className="rounded-xl bg-[#030A07] border border-white/10 p-3 space-y-1 text-[11px] leading-relaxed">
                    <div className="text-zinc-500 text-[10px]">SELECT * FROM orders WHERE customer_id = &apos;usr_8829&apos;;</div>
                    <div className="bg-emerald-950/50 text-[#17CF97] px-2 py-0.5 rounded flex items-center justify-between">
                      <span>→ 12 matching records (0.4ms latency via Rust connector)</span>
                    </div>
                    <div className="bg-emerald-950/50 text-[#17CF97] px-2 py-0.5 rounded flex items-center justify-between">
                      <span>→ Linked payments: 12 succeeded | 0 failed</span>
                    </div>
                  </div>

                  {/* Agent Plan Status Bar */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-[#17CF97]">◆ Relationship Flow</span>
                      <span className="text-zinc-400">◆ Read-only mode</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-zinc-500">
                      <span>12 rows</span>
                      <span>|</span>
                      <span>0.4ms</span>
                      <span>|</span>
                      <span className="text-[#17CF97]">SSL Encrypted</span>
                    </div>
                  </div>

                  {/* Command Input Bottom Bar */}
                  <div className="pt-1 flex items-center justify-between text-[11px] text-zinc-500">
                    <div className="flex items-center gap-2">
                      <span className="text-[#17CF97]">›</span>
                      <span className="text-zinc-500">Filter or navigate graph...</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px]">
                      <span className="text-zinc-400">nodadb</span>
                      <span>|</span>
                      <span className="text-[#17CF97]">rust engine v1.0</span>
                    </div>
                  </div>

                  {/* Key hints */}
                  <div className="text-[10px] text-zinc-600 flex gap-4 pt-1 font-mono">
                    <span><strong className="text-zinc-400">Enter:</strong> expand node</span>
                    <span><strong className="text-zinc-400">Tab:</strong> next table</span>
                    <span><strong className="text-zinc-400">⌘E:</strong> export graph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ==================== BLOCK 2: SQL Workspace & Data Explorer ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Graphic / Card */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#063324] via-[#031D14] to-[#0A1A14] border border-[#17CF97]/20 shadow-[0_0_50px_rgba(23,207,151,0.12)]">
              {/* Inner Dark Terminal Mockup */}
              <div className="rounded-2xl bg-[#090908] border border-white/10 overflow-hidden font-mono text-xs shadow-2xl">
                {/* Header Bar */}
                <div className="px-4 py-2.5 bg-[#121210] border-b border-white/10 flex items-center justify-between text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-2 text-zinc-300 text-[11px]">~/db/analytics_prod</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 flex gap-2">
                    <span className="text-[#17CF97]">PostgreSQL</span>
                    <span>|</span>
                    <span className="text-zinc-400">Virtual Scroll</span>
                  </div>
                </div>

                {/* Tabs Row */}
                <div className="px-4 py-2 bg-[#0E0E0C] border-b border-white/5 flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#17CF97]" />
                    Data Explorer
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#17CF97]" />
                    SQL Workspace
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-500">
                    <span className="w-2 h-2 rounded-full border border-zinc-500" />
                    Explain Plan
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-4 sm:p-5 space-y-4">
                  {/* Commands list */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider">— workspace tools</div>
                    <div className="flex items-center justify-between text-white font-semibold bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="text-[#17CF97]">›</span>
                        <span>explain analyze query</span>
                      </div>
                      <span className="text-zinc-500 font-mono text-[10px]">⌘E</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400 px-2.5 py-1">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-600">›</span>
                        <span>export query result</span>
                      </div>
                      <span className="text-zinc-600 font-mono text-[10px]">⌘E</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400 px-2.5 py-1">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-600">›</span>
                        <span>format sql query</span>
                      </div>
                      <span className="text-zinc-600 font-mono text-[10px]">⌘F</span>
                    </div>
                  </div>

                  {/* Active Tables List */}
                  <div className="space-y-1 text-[11px] pt-1">
                    <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider">— active datasets</div>
                    <div className="flex items-center justify-between text-zinc-300 font-mono text-[11px]">
                      <span>public.users</span>
                      <span className="text-[#17CF97]">+1,240 rows (0.8ms)</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300 font-mono text-[11px]">
                      <span>public.orders</span>
                      <span className="text-[#17CF97]">1.2M rows (Virtual scroll)</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300 font-mono text-[11px]">
                      <span>public.subscriptions</span>
                      <span className="text-[#17CF97]">3 active filters</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300 font-mono text-[11px]">
                      <span>public.audit_logs</span>
                      <span className="text-[#17CF97]">142 audit records</span>
                    </div>
                  </div>

                  {/* Command Bar */}
                  <div className="pt-2 flex items-center justify-between text-[11px] border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#17CF97]">›</span>
                      <span className="text-zinc-500">Enter SQL or apply column filter...</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px]">
                      <span className="text-zinc-400">nodadb</span>
                      <span>|</span>
                      <span className="text-[#17CF97]">rust engine</span>
                    </div>
                  </div>

                  {/* Key hints */}
                  <div className="text-[10px] text-zinc-600 flex gap-4 font-mono">
                    <span><strong className="text-zinc-400">Tab:</strong> autocomplete</span>
                    <span><strong className="text-zinc-400">⌘Enter:</strong> execute</span>
                    <span><strong className="text-zinc-400">Esc:</strong> clear</span>
                  </div>
                </div>
              </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
            <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#063324] via-[#031D14] to-[#0A1A14] border border-[#17CF97]/20 shadow-[0_0_50px_rgba(23,207,151,0.12)] overflow-hidden min-h-[420px] flex items-center justify-center">
              
              {/* Layout Container */}
              <div className="relative w-full max-w-lg h-[380px] flex items-center justify-center">
                {/* Panel 1 (Left Back) */}
                <div className="absolute left-0 sm:left-4 top-2 w-[210px] sm:w-[230px] rounded-[32px] bg-[#0A0A09] border-[3px] border-zinc-800 p-3 shadow-2xl text-[11px] space-y-3 z-10 font-sans">
                  {/* Top Header */}
                  <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-1 flex items-center justify-center" />
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="font-semibold text-xs">nodadb</span>
                    <span className="text-[10px] text-[#17CF97] font-mono">Rust Native</span>
                  </div>

                  {/* Environment Filter Pills */}
                  <div className="flex gap-1.5 text-[9px]">
                    <span className="px-2 py-0.5 rounded-full bg-[#17CF97] text-[#0B0B09] font-bold">Prod</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">Staging</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">Local</span>
                  </div>

                  {/* Connections List */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[9px] font-mono text-zinc-500 uppercase">Saved Connections</div>
                    <div className="p-2 rounded-xl bg-[#141412] border border-white/5 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white text-[10px]">production-pg</span>
                        <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-[#17CF97] font-mono">SSL Active</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#141412] border border-white/5 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-zinc-300 text-[10px]">analytics-clickhouse</span>
                        <span className="text-[8px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 font-mono">SSH Tunnel</span>
                      </div>
                    </div>
                  </div>

                  {/* Schemas */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[9px] font-mono text-zinc-500 uppercase">Database Schemas</div>
                    <div className="space-y-1 text-[10px] text-zinc-300">
                      <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                        <span className="flex items-center gap-1.5"><span className="text-zinc-500">🗄️</span> public</span>
                        <span className="text-[9px] text-zinc-500">28 tables</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                        <span className="flex items-center gap-1.5"><span className="text-zinc-500">🗄️</span> analytics</span>
                        <span className="text-[9px] text-zinc-500">14 views</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/5">
                        <span className="flex items-center gap-1.5"><span className="text-zinc-500">🗄️</span> auth</span>
                        <span className="text-[9px] text-zinc-500">6 tables</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel 2 (Right Front Overlapping) */}
                <div className="absolute right-0 sm:right-2 top-0 w-[230px] sm:w-[250px] rounded-[32px] bg-[#0C0C0B] border-[3px] border-zinc-700 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-[11px] space-y-2.5 z-20 font-sans">
                  {/* Visual Schema Banner */}
                  <div className="ml-auto max-w-[85%] p-2 rounded-xl bg-[#17CF97] text-[#0B0B09] font-medium text-[10px] leading-tight">
                    ER Diagram: users ➔ orders ➔ payments
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-1.5 text-[9px] text-[#17CF97] font-mono">
                    <span>◆</span>
                    <span>Traversed schema graph (0.4ms)</span>
                  </div>

                  {/* Schema Inspector Box */}
                  <div className="p-2 rounded-xl bg-[#141412] border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-white">
                      <span>public.users schema</span>
                      <span className="font-mono text-[9px] text-[#17CF97]">PK: id</span>
                    </div>
                    <div className="text-[9px] font-mono space-y-0.5 text-zinc-400">
                      <div className="flex justify-between"><span>id</span><span className="text-emerald-400">uuid NOT NULL</span></div>
                      <div className="flex justify-between"><span>email</span><span className="text-emerald-400">varchar(255)</span></div>
                      <div className="flex justify-between"><span>created_at</span><span className="text-emerald-400">timestamptz</span></div>
                    </div>
                  </div>

                  {/* Foreign Keys Box */}
                  <div className="text-[9px] text-zinc-300 leading-snug space-y-1 p-1 bg-white/[0.02] rounded-lg">
                    <p className="font-medium text-white">Foreign Key Relationship Map</p>
                    <p className="text-zinc-400 text-[8px]">1. orders.user_id ➔ users.id (ON DELETE CASCADE)</p>
                    <p className="text-zinc-400 text-[8px]">2. payments.order_id ➔ orders.id (RESTRICT)</p>
                  </div>

                  {/* Input Box */}
                  <div className="pt-1 space-y-1">
                    <div className="p-1.5 rounded-xl bg-[#1A1A18] border border-white/10 text-[9px] text-zinc-500 flex items-center justify-between">
                      <span>Search columns or edit schema...</span>
                    </div>
                    <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400">
                      <span className="px-1.5 py-0.5 rounded bg-white/5">Local Vault ▾</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#17CF97]/20 text-[#17CF97]">Native Rust ▾</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
