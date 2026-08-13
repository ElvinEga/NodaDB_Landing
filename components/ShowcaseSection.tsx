'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Heart, ExternalLink, Sparkles, Code2, X, Play, Terminal } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  author: string;
  views: string;
  likes: number;
  tags: string[];
  description: string;
  codeSnippet: string;
}

export function ShowcaseSection() {
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>({
    '1': 128,
    '2': 94,
    '3': 210,
  });

  const showcaseItems: ShowcaseItem[] = [
    {
      id: '1',
      title: 'PostgreSQL Partitioned Store',
      author: 'Offset Data',
      views: '2.1K',
      likes: likesMap['1'],
      tags: ['PostgreSQL', 'Partitioning', 'BRIN Index'],
      description: 'High-throughput time-series event log table with automatic monthly range partitioning and BRIN indexing.',
      codeSnippet: `CREATE TABLE event_logs (
  id UUID DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL,
  payload JSONB
) PARTITION BY RANGE (created_at);`,
    },
    {
      id: '2',
      title: 'Order & Payment Relationship',
      author: 'Sarah Chen',
      views: '1.8K',
      likes: likesMap['2'],
      tags: ['Recursive CTE', 'Relationships', 'SQL'],
      description: 'Recursive relationship query discovering customer transactions and chargebacks across 3 sub-tables.',
      codeSnippet: `WITH RECURSIVE order_tree AS (
  SELECT id, user_id, amount FROM orders WHERE status = 'flagged'
  UNION ALL
  SELECT p.id, p.user_id, p.amount FROM payments p
  JOIN order_tree ot ON ot.id = p.order_id
) SELECT * FROM order_tree;`,
    },
    {
      id: '3',
      title: 'ClickHouse Analytics View',
      author: 'Elena Rossi',
      views: '3.4K',
      likes: likesMap['3'],
      tags: ['ClickHouse', 'Materialized View', 'OLAP'],
      description: 'Materialized view aggregating real-time user session metrics over 500 million analytical logs.',
      codeSnippet: `CREATE MATERIALIZED VIEW mv_hourly_sessions
ENGINE = SummingMergeTree()
ORDER BY (tenant_id, toStartOfHour(timestamp))
AS SELECT tenant_id, count() AS total_events
FROM raw_logs GROUP BY tenant_id, timestamp;`,
    },
  ];

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesMap((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  return (
    <section className="py-20 md:py-32 relative bg-[#090908] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17CF97]/10 text-[#17CF97] text-xs font-mono font-medium border border-[#17CF97]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY GALLERY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Built with NodaDB
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            Production database schemas, high-speed queries, and relationship flows explored and optimized using NodaDB.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="rounded-2xl bg-[#121210] border border-white/10 hover:border-[#17CF97]/40 p-6 flex flex-col justify-between space-y-6 hover:shadow-[0_0_30px_rgba(23,207,151,0.15)] transition-all cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Code Preview Frame */}
                <div className="h-40 rounded-xl bg-[#0B0B09] border border-white/10 p-3 overflow-hidden font-mono text-[10px] text-zinc-400 leading-tight relative group-hover:border-[#17CF97]/30 transition-colors">
                  <div className="flex items-center justify-between text-zinc-600 mb-2 border-b border-white/5 pb-1">
                    <span>{item.title.toLowerCase().replace(/\s+/g, '-')}.ts</span>
                    <Code2 className="w-3 h-3 text-[#17CF97]" />
                  </div>
                  <pre className="text-emerald-400/80">{item.codeSnippet}</pre>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#17CF97] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>By {item.author}</span>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-zinc-500" />
                    {item.views}
                  </span>
                  <button
                    onClick={(e) => toggleLike(item.id, e)}
                    className="flex items-center gap-1 hover:text-red-400 transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400/20" />
                    {likesMap[item.id]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Modal Preview */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#141412] border border-white/10 rounded-2xl p-6 space-y-6 shadow-2xl relative text-xs font-mono"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-[#17CF97] text-[10px] uppercase font-mono">
                  <Terminal className="w-3 h-3" />
                  Generated with NodaDB CLI &amp; Workspace
                </div>
                <h3 className="text-xl font-semibold text-white font-sans">{selectedItem.title}</h3>
                <p className="text-zinc-400 font-sans text-xs">{selectedItem.description}</p>
              </div>

              {/* Code Snippet */}
              <div className="p-4 rounded-xl bg-[#090908] border border-white/10 overflow-x-auto text-emerald-300">
                <pre>{selectedItem.codeSnippet}</pre>
              </div>

              <div className="flex items-center justify-between pt-2 text-zinc-400">
                <span>Author: {selectedItem.author}</span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-lg bg-[#17CF97] text-[#0B0B09] font-bold text-xs"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
