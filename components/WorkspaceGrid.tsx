'use client';

import { ExternalLink, ChevronRight, ArrowUp, GitBranch, Search, Terminal, Folder, Globe, Lightbulb, Box, Play, RefreshCw, Database, Bell, Clock } from 'lucide-react';
import Link from 'next/link';
import { PostgresqlIcon, MysqlIcon, SqliteIcon } from './icons/DbIcons';

interface WorkspaceGridProps {
  onOpenDownloadModal?: () => void;
}

export function WorkspaceGrid({ onOpenDownloadModal }: WorkspaceGridProps) {
  return (
    <section id="workspace" className="py-20 sm:py-28 bg-[#080A08] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Header Row with Title on Left and CTA Buttons on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs font-mono text-[#17CF97] tracking-wider uppercase font-semibold">
              {"/// NODADB DESKTOP WORKSPACE"}
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight">
              Complete database management workspace
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              A native desktop application combining SQL querying, visual schema exploration, data browsing, migration management, and multi-database support.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="#commands"
              className="px-4 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-200 text-xs font-medium inline-flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Docs</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </Link>

            <button
              type="button"
              onClick={onOpenDownloadModal}
              className="px-5 py-2.5 rounded-full bg-[#17CF97] hover:bg-[#14be8a] text-black text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <span>Download</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 3-Card Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Multi-Database Support */}
          <div className="space-y-5 flex flex-col group cursor-pointer">
            {/* Visual Graphic Canvas Container */}
            <div className="w-full h-[270px] sm:h-[290px] rounded-2xl bg-gradient-to-b from-[#0e2118] via-[#0a1711] to-[#07110c] border border-[#17CF97]/25 p-5 flex items-center justify-center relative overflow-hidden shadow-xl group-hover:border-[#17CF97]/40 transition-all">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#17CF97]/15 via-transparent to-transparent pointer-events-none" />

              {/* Mock UI Element - Database Connections Window */}
              <div className="w-full max-w-[310px] bg-[#111312] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-xs z-10">
                {/* Header Bar */}
                <div className="px-3.5 py-2.5 bg-[#161817] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                    <Database className="w-3.5 h-3.5 text-[#17CF97]" />
                    <span className="text-white font-medium">production-pg</span>
                    <span className="text-zinc-500">/ public</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-[#17CF97] text-black text-[10px] font-bold flex items-center gap-1">
                    <ArrowUp className="w-3 h-3 stroke-[3]" /> Active
                  </div>
                </div>

                {/* Database List Lines */}
                <div className="p-3.5 space-y-3 bg-[#0d0f0e]">
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 truncate">
                      <PostgresqlIcon className="w-4 h-4 shrink-0" />
                      <span className="text-zinc-200 truncate">PostgreSQL 16 Prod</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 shrink-0 font-sans text-[10px]">
                      <span className="font-mono text-[#17CF97]">SSL</span>
                      <span>0.4ms</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 truncate">
                      <MysqlIcon className="w-4 h-4 shrink-0" />
                      <span className="text-zinc-200 truncate">MySQL Analytics</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 shrink-0 font-sans text-[10px]">
                      <span className="font-mono text-amber-400">SSH</span>
                      <span>1.2ms</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 truncate">
                      <SqliteIcon className="w-4 h-4 shrink-0" />
                      <span className="text-zinc-200 truncate">SQLite Local Store</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 shrink-0 font-sans text-[10px]">
                      <span className="font-mono text-zinc-400">FILE</span>
                      <span>0.1ms</span>
                    </div>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="px-3.5 py-2 bg-[#161817] border-t border-white/10 flex items-center gap-3 text-[10px] text-zinc-400">
                  <span className="text-[#17CF97] flex items-center gap-1 font-semibold">
                    <ArrowUp className="w-3 h-3 stroke-[2.5]" /> 10 Engines
                  </span>
                  <span>
                    active: <strong className="text-white font-normal">3</strong>
                  </span>
                  <span>
                    status: <strong className="text-emerald-400 font-normal">Healthy</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Multi-Database Support
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Connect to PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, MongoDB, Redis, ClickHouse, and DuckDB through one native app.
              </p>
              <div className="pt-1">
                <span className="text-xs font-semibold text-[#17CF97] inline-flex items-center gap-1 group-hover:underline">
                  Explore engines <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Data & Schema Explorer */}
          <div className="space-y-5 flex flex-col group cursor-pointer">
            {/* Visual Graphic Canvas Container */}
            <div className="w-full h-[270px] sm:h-[290px] rounded-2xl bg-gradient-to-b from-[#0e2118] via-[#0a1711] to-[#07110c] border border-[#17CF97]/25 p-5 flex items-center justify-center relative overflow-hidden shadow-xl group-hover:border-[#17CF97]/40 transition-all">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#17CF97]/15 via-transparent to-transparent pointer-events-none" />

              {/* Mock UI Element - Schema Window */}
              <div className="w-full max-w-[310px] bg-[#111312] border border-white/10 rounded-xl overflow-hidden p-3.5 shadow-2xl space-y-3 z-10 font-sans">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">Schema Explorer</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#17CF97]/10 text-[#17CF97] font-mono text-[10px] font-medium">
                      28 / 28 active
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  </div>
                </div>

                {/* 2x3 Table Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-[#181A18] border border-white/5 flex items-center justify-between text-zinc-200">
                    <div className="flex items-center gap-2 truncate">
                      <Folder className="w-3.5 h-3.5 text-[#17CF97] shrink-0" />
                      <span className="truncate text-[11px]">users</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97] shrink-0" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#181A18] border border-white/5 flex items-center justify-between text-zinc-200">
                    <div className="flex items-center gap-2 truncate">
                      <Folder className="w-3.5 h-3.5 text-[#17CF97] shrink-0" />
                      <span className="truncate text-[11px]">orders</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97] shrink-0" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#181A18] border border-white/5 flex items-center justify-between text-zinc-200">
                    <div className="flex items-center gap-2 truncate">
                      <Folder className="w-3.5 h-3.5 text-[#17CF97] shrink-0" />
                      <span className="truncate text-[11px]">payments</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97] shrink-0" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#181A18] border border-white/5 flex items-center justify-between text-zinc-200">
                    <div className="flex items-center gap-2 truncate">
                      <Folder className="w-3.5 h-3.5 text-[#17CF97] shrink-0" />
                      <span className="truncate text-[11px]">subscriptions</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97] shrink-0" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#181A18] border border-white/5 flex items-center justify-between text-zinc-200">
                    <div className="flex items-center gap-2 truncate">
                      <Folder className="w-3.5 h-3.5 text-[#17CF97] shrink-0" />
                      <span className="truncate text-[11px]">audit_logs</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97] shrink-0" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#181A18]/60 border border-white/5 flex items-center justify-between text-zinc-400">
                    <div className="flex items-center gap-2 truncate">
                      <Box className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span className="truncate text-[11px]">v_revenue</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Data &amp; Schema Explorer
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Inspect table schemas, edit records inline, manage indexes, and execute DDL migrations with instant visual feedback.
              </p>
              <div className="pt-1">
                <span className="text-xs font-semibold text-[#17CF97] inline-flex items-center gap-1 group-hover:underline">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Automated Export & Streaming */}
          <div className="space-y-5 flex flex-col group cursor-pointer">
            {/* Visual Graphic Canvas Container */}
            <div className="w-full h-[270px] sm:h-[290px] rounded-2xl bg-gradient-to-b from-[#0e2118] via-[#0a1711] to-[#07110c] border border-[#17CF97]/25 p-5 flex items-center justify-center relative overflow-hidden shadow-xl group-hover:border-[#17CF97]/40 transition-all">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#17CF97]/15 via-transparent to-transparent pointer-events-none" />

              {/* Mock UI Element - Export Pipeline Window */}
              <div className="w-full max-w-[310px] bg-[#111312] border border-white/10 rounded-xl overflow-hidden p-3.5 shadow-2xl space-y-4 z-10 font-sans">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 text-[#17CF97] fill-[#17CF97]" />
                    <span className="text-xs font-semibold text-white">Export Pipeline</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#17CF97]/10 border border-[#17CF97]/30 text-[#17CF97] text-[10px] font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97]" /> completed
                  </span>
                </div>

                {/* Pipeline Flow Diagram */}
                <div className="relative flex items-center justify-between px-1 py-1">
                  {/* Connecting Line behind circles */}
                  <div className="absolute left-6 right-6 top-[18px] h-[1.5px] bg-[#17CF97]/40 z-0" />

                  {/* Node 1 */}
                  <div className="relative z-10 flex flex-col items-center space-y-1.5">
                    <div className="w-9 h-9 rounded-full bg-[#111312] border border-[#17CF97] flex items-center justify-center text-[#17CF97] shadow-md">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="text-center font-sans">
                      <div className="text-[10px] font-semibold text-zinc-200">Query</div>
                      <div className="text-[9px] text-zinc-500">SQL</div>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="relative z-10 flex flex-col items-center space-y-1.5">
                    <div className="w-9 h-9 rounded-full bg-[#111312] border border-[#17CF97] flex items-center justify-center text-[#17CF97] shadow-md">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <div className="text-center font-sans">
                      <div className="text-[10px] font-semibold text-zinc-200">Stream</div>
                      <div className="text-[9px] text-zinc-500">Rust</div>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div className="relative z-10 flex flex-col items-center space-y-1.5">
                    <div className="w-9 h-9 rounded-full bg-[#111312] border border-[#17CF97] flex items-center justify-center text-[#17CF97] shadow-md">
                      <Folder className="w-4 h-4" />
                    </div>
                    <div className="text-center font-sans">
                      <div className="text-[10px] font-semibold text-zinc-200">Format</div>
                      <div className="text-[9px] text-zinc-500">Parquet</div>
                    </div>
                  </div>

                  {/* Node 4 */}
                  <div className="relative z-10 flex flex-col items-center space-y-1.5">
                    <div className="w-9 h-9 rounded-full bg-[#111312] border border-[#17CF97] flex items-center justify-center text-[#17CF97] shadow-md">
                      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div className="text-center font-sans">
                      <div className="text-[10px] font-semibold text-zinc-200">Export</div>
                      <div className="text-[9px] text-zinc-500">Local</div>
                    </div>
                  </div>
                </div>

                {/* Progress bar and time */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-sans">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      1.2M rows exported in 1.4s
                    </span>
                    <span className="font-mono text-[#17CF97]">100%</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#17CF97]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Import &amp; Export Engine
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Export millions of records to CSV, JSON, SQL, Excel, Markdown, or Parquet with zero UI freeze.
              </p>
              <div className="pt-1">
                <span className="text-xs font-semibold text-[#17CF97] inline-flex items-center gap-1 group-hover:underline">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
