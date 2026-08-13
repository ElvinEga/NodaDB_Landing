'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, GitBranch, Search, Sparkles, Check, Play, RefreshCcw, Layers } from 'lucide-react';

export function CliSection() {
  const [activeTab, setActiveTab] = useState<'lsp' | 'worktrees' | 'models'>('lsp');
  const [runningCmd, setRunningCmd] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([
    '$ nodadb query --conn prod_pg --sql "SELECT count(*), status FROM orders GROUP BY status;"',
    '✔ Connecting to PostgreSQL 16 (production-pg.internal:5432) via TLS 1.3...',
    '✔ Connection established in 0.4ms. Executing query plan...',
    '✔ Returned 4 rows in 1.1ms (1,240,500 total records scanned)',
    '▶ Virtual table scrolling initialized (4 columns, streaming mode)'
  ]);

  const handleRunDemo = () => {
    setRunningCmd(true);
    setOutputLines((prev) => [...prev, '$ nodadb analyze --table public.orders']);
    setTimeout(() => {
      setOutputLines((prev) => [
        ...prev,
        '✔ Analyzing table index performance across 1,240,500 rows...',
        '✔ Recommended index: CREATE INDEX idx_orders_status_created ON public.orders(status, created_at DESC);',
        '✨ Estimated query speedup: +420% reduction in execution latency'
      ]);
      setRunningCmd(false);
    }, 1000);
  };

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17CF97]/10 text-[#17CF97] text-xs font-mono font-medium border border-[#17CF97]/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>TERMINAL &amp; CLI QUERY ENGINE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Native CLI &amp; Query Engine
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Execute SQL scripts, generate migrations, inspect schemas, and benchmark query performance directly from your terminal or desktop interface.
          </p>
        </div>

        {/* Feature Pills Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setActiveTab('lsp')}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeTab === 'lsp'
                ? 'bg-[#141412] border-[#17CF97]/40 shadow-[0_0_30px_rgba(23,207,151,0.15)]'
                : 'bg-[#0F0F0D] border-white/5 hover:border-white/10 text-zinc-400'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#17CF97]/10 border border-[#17CF97]/30 flex items-center justify-center text-[#17CF97] mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">High-Speed Rust Driver</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Zero-overhead native execution engine supporting asynchronous connection pooling and streaming responses.
            </p>
          </button>

          <button
            onClick={() => setActiveTab('worktrees')}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeTab === 'worktrees'
                ? 'bg-[#141412] border-[#17CF97]/40 shadow-[0_0_30px_rgba(23,207,151,0.15)]'
                : 'bg-[#0F0F0D] border-white/5 hover:border-white/10 text-zinc-400'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#17CF97]/10 border border-[#17CF97]/30 flex items-center justify-center text-[#17CF97] mb-4">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Schema &amp; Migration CLI</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Generate DDL diffs, apply versioned migrations, and validate schema integrity across all your database environments.
            </p>
          </button>

          <button
            onClick={() => setActiveTab('models')}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeTab === 'models'
                ? 'bg-[#141412] border-[#17CF97]/40 shadow-[0_0_30px_rgba(23,207,151,0.15)]'
                : 'bg-[#0F0F0D] border-white/5 hover:border-white/10 text-zinc-400'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#17CF97]/10 border border-[#17CF97]/30 flex items-center justify-center text-[#17CF97] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure SSH &amp; Tunneling</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Connect safely to isolated production instances via built-in SSH tunnels and TLS 1.3 encryption.
            </p>
          </button>
        </div>

        {/* Live Interactive CLI Simulator */}
        <div className="rounded-2xl border border-white/10 bg-[#0A0A08] overflow-hidden shadow-2xl font-mono text-xs">
          <div className="bg-[#141412] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-400">
              <Terminal className="w-4 h-4 text-[#17CF97]" />
              <span className="text-zinc-200 font-semibold">nodadb-cli v1.0.0</span>
            </div>
            <button
              onClick={handleRunDemo}
              disabled={runningCmd}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#17CF97]/20 text-[#17CF97] hover:bg-[#17CF97]/30 transition-colors font-medium text-xs disabled:opacity-50"
            >
              {runningCmd ? <RefreshCcw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
              <span>Simulate Command</span>
            </button>
          </div>

          <div className="p-5 space-y-2 bg-[#090A08] min-h-[220px] max-h-[300px] overflow-y-auto">
            {outputLines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-zinc-600 select-none">[{idx + 1}]</span>
                <span
                  className={
                    line.startsWith('$')
                      ? 'text-emerald-400 font-bold'
                      : line.startsWith('✔')
                      ? 'text-zinc-300'
                      : line.startsWith('✨')
                      ? 'text-yellow-300 font-semibold'
                      : 'text-zinc-400'
                  }
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
