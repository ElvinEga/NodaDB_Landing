'use client';

import { useState } from 'react';
import { Globe, RefreshCw, Lock, Terminal, Sparkles, Plus, Check, Play, Eye } from 'lucide-react';

export function EmbeddedBrowserSection() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    '[NodaDB Engine] Connected to postgresql://production-db.internal:5432',
    '[Query Optimizer] JIT compiler active · SSL TLS 1.3 verified',
  ]);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setLogs((prev) => [
      ...prev,
      `[User Action] Executed SELECT * FROM public.orders LIMIT 100`,
      `[Execution Engine] Scanned 1,240,500 rows in 0.4ms (Query #${newCount})`,
      `[Result Stream] Streamed 100 rows to Virtual Data Explorer ✓`
    ]);
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17CF97]/10 text-[#17CF97] text-xs font-mono font-medium border border-[#17CF97]/20">
            <Globe className="w-3.5 h-3.5" />
            <span>INTEGRATED DATA &amp; RELATIONSHIP BROWSER</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Browse &amp; query without leaving NodaDB
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            NodaDB provides real-time schema inspection, query execution logs, and relationship discovery so you can explore complex data without context switching.
          </p>
        </div>

        {/* Embedded Browser Sandbox Mockup */}
        <div className="rounded-2xl border border-white/10 bg-[#121210] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Chrome Top Bar */}
          <div className="bg-[#181815] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* URL Input Bar */}
            <div className="flex-1 max-w-xl mx-auto bg-[#0B0B09] border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 text-zinc-400">
              <Lock className="w-3 h-3 text-[#17CF97]" />
              <span className="text-zinc-200 select-all font-mono">postgresql://production-db.internal:5432/orders_db</span>
              <span className="text-[10px] text-[#17CF97] bg-[#17CF97]/10 px-1.5 py-0.5 rounded ml-auto">CONNECTED</span>
            </div>

            <button
              onClick={() => setCount(0)}
              className="p-1.5 hover:bg-white/10 rounded-md text-zinc-400 hover:text-white transition-colors"
              title="Reload frame"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Grid Layout: Live Render Canvas + Diagnostic Terminal */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px]">
            {/* Left Interactive React Preview */}
            <div className="md:col-span-7 p-8 bg-[#090908] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 relative">
              <div className="absolute top-3 left-3 text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-[#17CF97]" />
                Live SQL Table Result Preview
              </div>

              <div className="text-center space-y-6 max-w-sm">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#17CF97] to-[#0D825E] p-[1px] mx-auto flex items-center justify-center shadow-lg shadow-[#17CF97]/20">
                  <div className="w-full h-full bg-[#0B0B09] rounded-[15px] flex items-center justify-center text-[#17CF97] font-bold text-lg">
                    N
                  </div>
                </div>

                <div className="space-y-2 font-sans">
                  <h4 className="text-xl font-semibold text-white">PostgreSQL Query Runner</h4>
                  <p className="text-xs text-zinc-400">
                    Click the button below to execute a live query and watch NodaDB stream query execution logs in real time!
                  </p>
                </div>

                {/* Interactive Counter Button */}
                <button
                  onClick={handleIncrement}
                  className="px-6 py-3 rounded-xl bg-[#17CF97] hover:bg-[#30E8B1] text-[#0B0B09] font-bold text-sm shadow-xl shadow-[#17CF97]/20 transition-all transform active:scale-95 cursor-pointer"
                >
                  Execute Query (Runs: {count})
                </button>
              </div>
            </div>

            {/* Right Diagnostic Console Stream */}
            <div className="md:col-span-5 p-4 bg-[#0E0E0C] font-mono text-[11px] flex flex-col justify-between">
              <div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-[#17CF97]" />
                    Execution Plan &amp; DB Logs
                  </span>
                  <span className="text-emerald-400 text-[10px]">AUTO-INSPECTING</span>
                </div>

                <div className="space-y-2 max-h-[260px] overflow-y-auto">
                  {logs.map((log, index) => (
                    <div key={index} className="text-zinc-300 leading-relaxed font-mono">
                      <span className="text-[#17CF97]">➔ </span>
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] text-zinc-500 flex items-center justify-between">
                <span>Latency: 0.4ms · SSL TLS 1.3</span>
                <span className="text-[#17CF97]">0 errors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
