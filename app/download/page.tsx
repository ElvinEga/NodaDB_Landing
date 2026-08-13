'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Download, Terminal, Copy, Check, ExternalLink, ArrowRight, ShieldCheck,
  RefreshCw, Cpu, Layers, GitBranch, Code, ChevronRight, CheckCircle2, Box, HardDrive, Tag, Calendar, FileText, ChevronDown, ChevronUp
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DownloadModal } from '@/components/DownloadModal';
import { SignInModal } from '@/components/SignInModal';
import { AppleIcon, WindowsIcon, LinuxIcon } from '@/components/icons/OsIcons';
import { getLatestRelease, getAllReleases, Release } from '@/lib/releases';

export default function DownloadPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<'curl' | 'brew' | 'cargo' | 'winget'>('brew');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [expandedRelease, setExpandedRelease] = useState<string | null>('0.3.10');

  const latestRelease = getLatestRelease();
  const releases = getAllReleases();

  const handleCopy = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const commands = {
    brew: 'brew install nodadb',
    cargo: 'cargo install nodadb-cli',
    curl: 'curl -fsSL https://raw.githubusercontent.com/ElvinEga/NodaDB/main/install.sh | sh',
    winget: 'winget install ElvinEga.NodaDB',
  };

  return (
    <main className="min-h-screen bg-[#0B0B09] text-zinc-100 font-sans antialiased selection:bg-[#17CF97]/30 selection:text-[#17CF97]">
      <Navbar
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
        onOpenSignInModal={() => setSignInModalOpen(true)}
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/5 bg-[#090A09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-white/10 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#17CF97] animate-pulse" />
            <span>Latest Release: {latestRelease.tag}</span>
            <Link
              href={latestRelease.releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#17CF97] hover:underline flex items-center gap-1 ml-1"
            >
              <span>GitHub Release</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white font-normal tracking-tight max-w-4xl mx-auto leading-tight">
            Download NodaDB Desktop &amp; CLI
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Native database workspace built in Rust. Download pre-compiled binaries for macOS, Windows, and Linux, install via package managers, or explore release changelogs.
          </p>

          {/* Direct GitHub Release CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://github.com/ElvinEga/NodaDB/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#17CF97] hover:bg-[#14be8a] text-black font-semibold text-sm transition-all shadow-lg"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Browse All Releases on GitHub ({latestRelease.tag})</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </Link>

            <button
              onClick={() => setDownloadModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1C1A] hover:bg-[#252825] border border-white/10 text-zinc-200 font-medium text-sm transition-all"
            >
              <span>Quick Download Modal</span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 1. Official Desktop Installers Grid */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">1. Official Desktop Installers ({latestRelease.tag})</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Download native installers signed and published on GitHub Releases for NodaDB {latestRelease.tag}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* macOS Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121413] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#17CF97]/30 transition-all shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                  <AppleIcon className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">macOS Installers</h3>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    Native macOS App Image and executable source.
                  </p>
                </div>
                <div className="space-y-2 text-xs font-mono text-zinc-300 pt-2">
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span>NodaDB {latestRelease.tag} App</span>
                    <span className="text-[#17CF97]">Universal</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span>Rust Binary Engine</span>
                    <span className="text-zinc-400">v{latestRelease.version}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href={latestRelease.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#17CF97] hover:bg-[#14be8a] text-black font-semibold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download for macOS ({latestRelease.tag})</span>
                </Link>
              </div>
            </div>

            {/* Windows Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121413] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#17CF97]/30 transition-all shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                  <WindowsIcon className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Windows Installers</h3>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    Windows 10/11 x64 Installer (.exe) &amp; MSI Package (.msi).
                  </p>
                </div>
                <div className="space-y-2 text-xs font-mono text-zinc-300 pt-2">
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span>NodaDB_0.3.10_x64-setup.exe</span>
                    <span className="text-[#17CF97]">9.29 MB</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span>NodaDB_0.3.10_x64_en-US.msi</span>
                    <span className="text-zinc-400">13.0 MB</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="https://github.com/ElvinEga/NodaDB/releases/download/v0.3.10/NodaDB_0.3.10_x64-setup.exe"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#17CF97] hover:bg-[#14be8a] text-black font-semibold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Windows x64 Setup (.exe)</span>
                </Link>
                <Link
                  href="https://github.com/ElvinEga/NodaDB/releases/download/v0.3.10/NodaDB_0.3.10_x64_en-US.msi"
                  className="w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-medium flex items-center justify-center gap-1.5 transition border border-white/10"
                >
                  <span>Download MSI Package (.msi)</span>
                </Link>
              </div>
            </div>

            {/* Linux Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121413] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#17CF97]/30 transition-all shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                  <LinuxIcon className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Linux Installers</h3>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    AppImage, Debian (.deb), and RedHat / Fedora (.rpm) builds.
                  </p>
                </div>
                <div className="space-y-2 text-xs font-mono text-zinc-300 pt-2">
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span>NodaDB_0.3.10_amd64.AppImage</span>
                    <span className="text-[#17CF97]">90 MB</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span>NodaDB_0.3.10_amd64.deb / rpm</span>
                    <span className="text-zinc-400">17.5 MB</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="https://github.com/ElvinEga/NodaDB/releases/download/v0.3.10/NodaDB_0.3.10_amd64.AppImage"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#17CF97] hover:bg-[#14be8a] text-black font-semibold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download AppImage (90 MB)</span>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="https://github.com/ElvinEga/NodaDB/releases/download/v0.3.10/NodaDB_0.3.10_amd64.deb"
                    className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-[11px] font-medium flex items-center justify-center gap-1 transition border border-white/10"
                  >
                    <span>.deb Package</span>
                  </Link>
                  <Link
                    href="https://github.com/ElvinEga/NodaDB/releases/download/v0.3.10/NodaDB-0.3.10-1.x86_64.rpm"
                    className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-[11px] font-medium flex items-center justify-center gap-1 transition border border-white/10"
                  >
                    <span>.rpm Package</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Package Managers & Terminal Quick Install */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">2. Package Managers &amp; CLI Quick Install</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Install NodaDB CLI or desktop via your preferred terminal package manager.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#121413] border border-white/10 space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4 text-xs font-mono">
              <button
                onClick={() => setActiveTab('brew')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'brew'
                    ? 'bg-[#17CF97] text-black font-semibold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Homebrew (macOS / Linux)
              </button>
              <button
                onClick={() => setActiveTab('cargo')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'cargo'
                    ? 'bg-[#17CF97] text-black font-semibold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Cargo (Rust)
              </button>
              <button
                onClick={() => setActiveTab('winget')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'winget'
                    ? 'bg-[#17CF97] text-black font-semibold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                WinGet (Windows)
              </button>
              <button
                onClick={() => setActiveTab('curl')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'curl'
                    ? 'bg-[#17CF97] text-black font-semibold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                cURL Shell Script
              </button>
            </div>

            {/* Terminal Box */}
            <div className="p-5 rounded-xl bg-[#090A09] border border-white/10 font-mono text-xs text-zinc-200 space-y-3 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-x-auto">
                <span className="text-[#17CF97] font-bold">$</span>
                <span>{commands[activeTab]}</span>
              </div>
              <button
                onClick={() => handleCopy(commands[activeTab], activeTab)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                title="Copy command"
              >
                {copiedCmd === activeTab ? (
                  <span className="text-[#17CF97] font-sans text-xs font-semibold flex items-center gap-1">
                    <Check className="w-4 h-4" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* 3. Build from Source Code */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">3. Build from Source Code (Rust)</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Compile NodaDB directly from source using Cargo. Requires Rust 1.75+ toolchain.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#121413] border border-white/10 space-y-6 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#0A0C0B] border border-white/10 space-y-2 text-zinc-300">
              <div className="text-zinc-500"># 1. Clone repository from GitHub</div>
              <div className="flex items-center justify-between">
                <span className="text-emerald-400">git clone https://github.com/ElvinEga/NodaDB.git</span>
              </div>

              <div className="text-zinc-500 pt-2"># 2. Enter project directory</div>
              <div className="text-emerald-400">cd NodaDB</div>

              <div className="text-zinc-500 pt-2"># 3. Build optimized release binary</div>
              <div className="text-emerald-400">cargo build --release</div>

              <div className="text-zinc-500 pt-2"># 4. (Optional) Install binary to PATH</div>
              <div className="text-emerald-400">cargo install --path .</div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href="https://github.com/ElvinEga/NodaDB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#17CF97] hover:underline inline-flex items-center gap-1 font-sans text-xs font-semibold"
              >
                <span>Explore repository on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. Release History & Changelogs */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17CF97]/10 text-[#17CF97] text-xs font-mono font-medium border border-[#17CF97]/20">
              <Tag className="w-3.5 h-3.5" />
              <span>Full Release History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">4. Release Notes &amp; Changelogs</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Detailed release notes, pull request changes, and asset downloads for NodaDB.
            </p>
          </div>

          <div className="space-y-4">
            {releases.map((rel) => {
              const isExpanded = expandedRelease === rel.version;

              return (
                <div
                  key={rel.version}
                  className={`rounded-2xl border transition-all ${
                    rel.isLatest
                      ? 'bg-[#121614] border-[#17CF97]/40 shadow-lg shadow-[#17CF97]/5'
                      : 'bg-[#121413] border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Header Row */}
                  <div
                    onClick={() => setExpandedRelease(isExpanded ? null : rel.version)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#17CF97] shrink-0 font-mono font-bold text-xs">
                        v{rel.version}
                      </div>

                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-base font-semibold text-white font-serif">
                            NodaDB {rel.tag}
                          </h3>
                          {rel.isLatest && (
                            <span className="px-2 py-0.5 rounded-full bg-[#0C583E] text-[#17CF97] text-[10px] font-mono font-bold uppercase">
                              LATEST
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 font-sans mt-0.5 flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Released on {rel.releaseDate}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-xs">
                      <a
                        href={rel.releaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 text-zinc-400" />
                      </a>
                      <button className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details Body */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 border-t border-white/5 pt-5 space-y-6 text-xs font-sans">
                      {/* Summary */}
                      {rel.summary && (
                        <p className="text-zinc-300 text-xs leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                          {rel.summary}
                        </p>
                      )}

                      {/* Pull Requests & Changes */}
                      {rel.changes.length > 0 && (
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                            What&apos;s Changed
                          </div>
                          <ul className="space-y-2 font-mono text-zinc-300">
                            {rel.changes.map((c, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs">
                                <span className="text-[#17CF97] font-bold">•</span>
                                <div className="space-x-1.5">
                                  <span>{c.description}</span>
                                  <span className="text-zinc-500">by</span>
                                  <a href={c.authorUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:underline">
                                    @{c.author}
                                  </a>
                                  {c.prNumber && (
                                    <a href={c.prUrl} target="_blank" rel="noopener noreferrer" className="text-[#17CF97] hover:underline">
                                      #{c.prNumber}
                                    </a>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Compare Link */}
                      {rel.compareUrl && (
                        <div className="text-xs font-mono">
                          <span className="text-zinc-500">Full Changelog: </span>
                          <a href={rel.compareUrl} target="_blank" rel="noopener noreferrer" className="text-[#17CF97] hover:underline inline-flex items-center gap-1">
                            <span>Compare Changes</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      {/* Assets List */}
                      {rel.assets.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-white/5">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                            Assets &amp; Direct Downloads
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 font-mono text-xs">
                            {rel.assets.map((asset) => (
                              <a
                                key={asset.name}
                                href={asset.url}
                                className="p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-[#17CF97]/40 flex items-center justify-between text-zinc-300 hover:text-white transition-all group"
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <Download className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#17CF97] shrink-0" />
                                  <span className="truncate">{asset.name}</span>
                                </div>
                                <span className="text-[10px] text-zinc-500 shrink-0 ml-2">{asset.size}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Automatic Update Architecture */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">5. Automatic Update Architecture</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              How NodaDB delivers background updates securely without interrupting database queries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#17CF97]/15 text-[#17CF97] flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">GitHub API Release Checking</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                NodaDB periodically polls <code className="text-[#17CF97]">api.github.com/repos/ElvinEga/NodaDB/releases/latest</code> in a non-blocking background thread.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#17CF97]/15 text-[#17CF97] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Checksum &amp; Signature Verification</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Downloaded release packages are verified against official SHA256 checksums and Ed25519 cryptographic signatures before staging.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#17CF97]/15 text-[#17CF97] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Zero-Downtime Atomic Swaps</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Updates are staged atomically. Active database connections, query buffers, and local hardware vaults remain untouched during updates.
              </p>
            </div>
          </div>
        </section>

      </div>

      <Footer />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />
    </main>
  );
}
