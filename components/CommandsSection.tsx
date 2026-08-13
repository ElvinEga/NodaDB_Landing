'use client';

import { useState } from 'react';
import { Terminal, Check, Copy } from 'lucide-react';

interface CommandItem {
  command: string;
  title: string;
  description: string;
}

export function CommandsSection() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const commandsList: CommandItem[] = [
    {
      command: '/connect',
      title: 'Connect Database',
      description: 'Quickly attach to any PostgreSQL, MySQL, SQLite, or cloud database URL.',
    },
    {
      command: '/explore',
      title: 'Data Explorer',
      description: 'Open virtual table viewer with inline editing, filtering, and sorting.',
    },
    {
      command: '/schema',
      title: 'Visual Schema',
      description: 'Generate an interactive ER diagram and inspect foreign key graphs.',
    },
    {
      command: '/flow',
      title: 'Relationship Flow',
      description: 'Discover every connected record starting from any entity or foreign key ID.',
    },
    {
      command: '/explain',
      title: 'Explain Plan',
      description: 'Analyze query performance and highlight missing index bottlenecks.',
    },
    {
      command: '/export',
      title: 'Export Query Data',
      description: 'Stream query results into CSV, JSON, Parquet, or Excel files.',
    },
    {
      command: '/diff',
      title: 'Schema Diff',
      description: 'Compare two database schemas and generate versioned DDL migration scripts.',
    },
    {
      command: '/tunnel',
      title: 'SSH Tunneling',
      description: 'Establish encrypted local SSH port forwarding to private database clusters.',
    },
  ];

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="commands" className="py-20 sm:py-28 bg-[#080A08] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Header - Left Aligned matching design screenshot */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#17CF97] uppercase tracking-wider font-semibold">
            <Terminal className="w-4 h-4 text-[#17CF97]" />
            <span>COMMANDS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight leading-tight">
            Control with built-in commands
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Every agent capability is driven by commands. Execute actions, toggle settings, and trigger workflows instantly using simple slash commands
          </p>
        </div>

        {/* 4-Column Grid of Commands */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-10 gap-y-10 sm:gap-y-12">
          {commandsList.map((item) => {
            const isCopied = copiedCmd === item.command;

            return (
              <div
                key={item.command}
                onClick={() => handleCopy(item.command)}
                className="group relative p-4 -m-4 rounded-xl hover:bg-white/[0.03] transition-all cursor-pointer flex flex-col justify-between space-y-3"
              >
                <div>
                  {/* Command Tag */}
                  <div className="flex items-center justify-between font-mono text-sm sm:text-base font-semibold text-[#17CF97] tracking-tight">
                    <span>{item.command}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-zinc-500 flex items-center gap-1 font-sans">
                      {isCopied ? (
                        <span className="text-[#17CF97] flex items-center gap-1 font-mono text-xs">
                          <Check className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-medium text-white tracking-tight mt-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
