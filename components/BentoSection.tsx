'use client';

import { GitBranch, Server, ClipboardList, ShieldCheck, Monitor, Zap } from 'lucide-react';

export function BentoSection() {
  const features = [
    {
      icon: <GitBranch className="w-6 h-6 text-[#17CF97]" />,
      title: 'Data Explorer',
      description: 'Inline editing, filtering, and sorting across millions of records with virtual scrolling performance.',
    },
    {
      icon: <Server className="w-6 h-6 text-[#17CF97]" />,
      title: 'SQL Workspace',
      description: 'Context-aware autocomplete, query formatting, saved queries, and execution plan visualization.',
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-[#17CF97]" />,
      title: 'Visual Schema',
      description: 'Interactive ER diagrams, table definitions, foreign key graphs, and instant DDL generation.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#17CF97]" />,
      title: 'Relationship Flow',
      description: 'Start from any record or ID and instantly discover every connected entity across your entire database.',
    },
    {
      icon: <Monitor className="w-6 h-6 text-[#17CF97]" />,
      title: 'Local-First Vault',
      description: 'All database credentials and SSL certificates stay encrypted on your local machine with zero telemetry.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#17CF97]" />,
      title: 'Universal Export',
      description: 'Export query outputs seamlessly to CSV, JSON, SQL, Excel, Markdown, or Parquet in seconds.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#090A09] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-[#17CF97] uppercase font-semibold">
            <span className="w-2 h-2 bg-[#17CF97] inline-block rounded-xs" />
            <span>FEATURES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight">
            Explore, Query, Understand
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-xl mx-auto">
            A unified workspace for exploring database schemas, running high-speed SQL queries, and understanding complex record relationships with zero friction.
          </p>
        </div>

        {/* 6-Card Features Grid Frame */}
        <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-[#111312] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {features.map((item, idx) => {
              // Apply borders to recreate the grid frame from the design
              const isRightBorder = (idx % 3) !== 2;
              const isBottomBorder = idx < 3;

              return (
                <div
                  key={idx}
                  className={`p-8 sm:p-10 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors ${
                    isRightBorder ? 'md:border-r border-white/10' : ''
                  } ${isBottomBorder ? 'border-b border-white/10' : ''}`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-1">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
