'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal, Search, Puzzle, Zap, Plus, CheckCircle2, Play, Code2, GitBranch,
  Layers, Settings, ExternalLink, ChevronRight, RefreshCw, Sparkles, Send,
  FileCode, Check, Copy, Shield, Cpu, CornerDownLeft, Eye, Clock, User
} from 'lucide-react';
import { PostgresqlIcon, RedisIcon } from './icons/DbIcons';

export function IdePreview() {
  const [activeRepo, setActiveRepo] = useState<'checkout' | 'tabs'>('checkout');
  const [activeTab, setActiveTab] = useState<'agent' | 'review' | 'browser'>('agent');
  const [selectedModel, setSelectedModel] = useState('GPT 5.5');
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [agentLogs, setAgentLogs] = useState<string[]>([
    'Connected to PostgreSQL cluster (production-postgres) via native Rust engine (0.4ms).',
    'Traversed foreign keys for customer_id: "usr_8829" across 6 schema tables.',
    'Discovered 12 related orders, 12 payment receipts, 1 active subscription, and 142 audit logs.'
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [testStatus, setTestStatus] = useState<'running' | 'passed'>('passed');

  const models = ['PostgreSQL 16', 'MySQL 8.0', 'MongoDB 7.0', 'Redis 7.2', 'ClickHouse'];

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userInput.trim()) return;

    const newPrompt = userInput;
    setUserInput('');
    setIsTyping(true);
    setTestStatus('running');

    setAgentLogs((prev) => [...prev, `Query: ${newPrompt}`]);

    setTimeout(() => {
      setAgentLogs((prev) => [
        ...prev,
        `NodaDB: Executed SQL query against active database node in 0.3ms...`,
        `NodaDB: Returned 48 matching records with zero buffer allocation.`
      ]);
      setIsTyping(false);
      setTestStatus('passed');
    }, 1200);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0F0F0D] shadow-[0_0_80px_rgba(23,207,151,0.12)] overflow-hidden text-xs font-mono">
      {/* Top Application Bar */}
      <div className="bg-[#141412] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between text-zinc-400 select-none">
        {/* Window controls & Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
          </div>
          <span className="h-4 w-[1px] bg-white/10 mx-1" />
          <div className="flex items-center gap-1.5 font-semibold text-zinc-200">
            <Terminal className="w-3.5 h-3.5 text-[#17CF97]" />
            <span>NodaDB Workspace</span>
          </div>
        </div>

        {/* Global Action Shortcuts */}
        <div className="hidden sm:flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors text-[11px]">
            <Search className="w-3 h-3 text-zinc-400" />
            <span>Search</span>
            <kbd className="text-[9px] bg-white/10 px-1 rounded text-zinc-400 font-sans">⌘S</kbd>
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors text-[11px]">
            <Puzzle className="w-3 h-3 text-zinc-400" />
            <span>Plugins</span>
            <kbd className="text-[9px] bg-white/10 px-1 rounded text-zinc-400 font-sans">⌘P</kbd>
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors text-[11px]">
            <Zap className="w-3 h-3 text-zinc-400" />
            <span>Automations</span>
            <kbd className="text-[9px] bg-white/10 px-1 rounded text-zinc-400 font-sans">⌘A</kbd>
          </button>
        </div>

        {/* New Agent Run Button */}
        <button
          onClick={() => handleSendMessage()}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#17CF97]/15 text-[#17CF97] hover:bg-[#17CF97]/25 border border-[#17CF97]/30 transition-all text-[11px] font-medium"
        >
          <Plus className="w-3 h-3" />
          <span>New agent run</span>
          <kbd className="text-[9px] bg-[#17CF97]/20 px-1 rounded text-[#17CF97]">⌘N</kbd>
        </button>
      </div>

      {/* Main Grid Area: Left Sidebar + Workspace Diff & Agent State */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 border-r border-white/[0.08] bg-[#121210] p-3 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Active Repos / Connections */}
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-2 px-1">
                Active Connections
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveRepo('checkout')}
                  className={`w-full text-left p-2 rounded-lg border transition-all ${
                    activeRepo === 'checkout'
                      ? 'bg-[#17CF97]/10 border-[#17CF97]/30 text-white'
                      : 'bg-white/5 border-transparent text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between font-medium text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <PostgresqlIcon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate text-zinc-200">production-postgres</span>
                    </div>
                    <span className="text-[10px] text-[#17CF97] bg-[#17CF97]/10 px-1.5 py-0.5 rounded font-mono">142 tables</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-1">
                    <span>db.prod.internal:5432</span>
                    <span className="font-mono text-zinc-400">⌘1</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveRepo('tabs')}
                  className={`w-full text-left p-2 rounded-lg border transition-all ${
                    activeRepo === 'tabs'
                      ? 'bg-[#17CF97]/10 border-[#17CF97]/30 text-white'
                      : 'bg-white/5 border-transparent text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between font-medium text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <RedisIcon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate text-zinc-200">staging-redis</span>
                    </div>
                    <span className="text-[10px] text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded font-mono">12k keys</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-1">
                    <span>cache.staging.internal</span>
                    <span className="font-mono text-zinc-400">⌘2</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Saved Queries */}
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-2 px-1">
                Saved Queries
              </div>
              <div className="space-y-1 text-xs">
                <div className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#17CF97] animate-pulse" />
                    <span className="truncate">Customer relationship audit</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">0.4ms</span>
                </div>
                <div className="p-2 rounded-md hover:bg-white/5 text-zinc-400 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <span className="truncate">Active subscription metrics</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">1.2ms</span>
                </div>
              </div>
            </div>

            {/* Schemas */}
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-2 px-1">
                Schemas & Views
              </div>
              <div className="space-y-1 text-xs text-zinc-400">
                <div className="px-2 py-1 flex items-center gap-2 hover:text-white cursor-pointer">
                  <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                  <span>public.orders</span>
                </div>
                <div className="px-2 py-1 flex items-center gap-2 hover:text-white cursor-pointer">
                  <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                  <span>public.payments</span>
                </div>
              </div>
            </div>
          </div>

          {/* User Profile Badge */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#17CF97]/20 border border-[#17CF97]/40 flex items-center justify-center text-[10px] font-bold text-[#17CF97]">
                AA
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-200 font-medium">Alex Rivera</span>
                <span className="text-[9px] text-[#17CF97]">Pro Plan Active</span>
              </div>
            </div>
            <button className="p-1 hover:text-white text-zinc-400">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Main IDE Canvas */}
        <div className="lg:col-span-9 bg-[#0B0B09] flex flex-col justify-between p-4 sm:p-5">
          <div className="space-y-4">
            {/* Header: Task Title & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    Relationship Flow — Customer Audit #usr_8829
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#17CF97]/15 text-[#17CF97] border border-[#17CF97]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17CF97] animate-ping" />
                    Active Connection
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-sans">
                  Instantly discover related data across orders, payments, subscriptions, and activity_logs starting from customer_id.
                </p>
              </div>

              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 text-xs transition-colors">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Export Schema Diagram</span>
              </button>
            </div>

            {/* Agent Status Banner */}
            <div className="rounded-xl bg-[#141412] border border-[#17CF97]/20 p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#17CF97] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>NodaDB Relationship Discovery Engine</span>
                  <span className="text-zinc-500 font-normal">· Executed in 0.4ms</span>
                </div>
                <button className="text-[11px] text-zinc-400 hover:text-white underline underline-offset-2">
                  View ER Graph
                </button>
              </div>

              {/* Agent Activity Logs */}
              <div className="space-y-1 text-xs text-zinc-300 font-sans">
                {agentLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#17CF97] shrink-0 mt-0.5" />
                    <span className={log.startsWith('User:') ? 'text-emerald-300 font-mono' : ''}>
                      {log}
                    </span>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center gap-2 text-zinc-500 italic text-xs">
                    <RefreshCw className="w-3 h-3 animate-spin text-[#17CF97]" />
                    <span>NodaDB engine is executing query plan...</span>
                  </div>
                )}
              </div>
            </div>

            {/* File Diff Viewer / SQL Query Workspace */}
            <div className="rounded-xl border border-white/10 bg-[#121210] overflow-hidden">
              <div className="bg-[#181815] px-3 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <FileCode className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-zinc-200 font-medium">relationship_flow_usr_8829.sql</span>
                  <span className="text-[10px] text-[#17CF97] font-mono">12 rows returned · 0.4ms</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-sans">
                  <span>PostgreSQL 16</span>
                  <span className="text-[#17CF97] font-mono">SSL Encrypted</span>
                </div>
              </div>

              {/* SQL Content */}
              <div className="p-3 text-[11px] leading-relaxed font-mono space-y-1 bg-[#0D0D0B] overflow-x-auto">
                <div className="text-zinc-500 select-none">{'-- NodaDB Relationship Flow: customer_id = "usr_8829"'}</div>
                <div className="text-emerald-400 flex gap-3">
                  <span className="text-zinc-600 select-none w-6 text-right">01</span>
                  <span>{'SELECT orders.id, orders.total, payments.status, subscriptions.plan'}</span>
                </div>
                <div className="text-emerald-400 flex gap-3">
                  <span className="text-zinc-600 select-none w-6 text-right">02</span>
                  <span>{'FROM public.orders'}</span>
                </div>
                
                <div className="bg-[#17CF97]/15 text-[#30E8B1] border-l-2 border-[#17CF97] px-1 py-0.5 flex gap-3 -mx-3 pl-3">
                  <span className="text-[#17CF97]/60 select-none w-6 text-right">03</span>
                  <span>{'JOIN public.payments ON payments.order_id = orders.id'}</span>
                </div>

                <div className="bg-[#17CF97]/15 text-[#30E8B1] border-l-2 border-[#17CF97] px-1 py-0.5 flex gap-3 -mx-3 pl-3">
                  <span className="text-[#17CF97]/60 select-none w-6 text-right">04</span>
                  <span>{'JOIN public.subscriptions ON subscriptions.customer_id = orders.customer_id'}</span>
                </div>
                <div className="text-emerald-400 flex gap-3">
                  <span className="text-zinc-600 select-none w-6 text-right">05</span>
                  <span>{'WHERE orders.customer_id = \'usr_8829\';'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Terminal / Input Area */}
          <div className="mt-4 pt-3 border-t border-white/10 space-y-3">
            {/* Terminal status line */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 font-sans">
              <div className="flex items-center gap-2">
                {testStatus === 'passed' ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>✓ Query executed in 0.4ms · 12 rows returned</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-yellow-400 font-mono text-[11px] animate-pulse">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing query via native Rust connector...</span>
                  </span>
                )}
              </div>

              {/* Model Dropdown Selector */}
              <div className="relative">
                <button
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 text-xs font-mono"
                >
                  <Cpu className="w-3 h-3 text-[#17CF97]" />
                  <span>{selectedModel}</span>
                  <ChevronRight className={`w-3 h-3 text-zinc-400 transition-transform ${modelDropdownOpen ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {modelDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute right-0 bottom-full mb-1 w-44 rounded-lg bg-[#181815] border border-white/10 shadow-2xl p-1 z-50 text-xs font-mono"
                    >
                      {models.map((model) => (
                        <button
                          key={model}
                          onClick={() => {
                            setSelectedModel(model);
                            setModelDropdownOpen(false);
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between ${
                            selectedModel === model ? 'bg-[#17CF97]/15 text-[#17CF97]' : 'text-zinc-300 hover:bg-white/5'
                          }`}
                        >
                          <span>{model}</span>
                          {selectedModel === model && <Check className="w-3 h-3" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Interactive Chat Input */}
            <form onSubmit={handleSendMessage} className="relative flex items-center">
              <div className="absolute left-3 text-[#17CF97]">
                <Terminal className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Filter results or enter SQL query (e.g., 'SELECT * FROM users')..."
                className="w-full bg-[#141412] text-zinc-100 placeholder-zinc-500 text-xs rounded-xl pl-9 pr-12 py-2.5 border border-white/10 focus:outline-none focus:border-[#17CF97]/50 font-mono transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 p-1.5 bg-[#17CF97] hover:bg-[#30E8B1] text-[#0B0B09] rounded-lg transition-colors font-semibold"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
