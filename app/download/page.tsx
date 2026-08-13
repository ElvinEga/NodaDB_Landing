'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Download, Terminal, Copy, Check, ExternalLink, ArrowRight, ShieldCheck,
  RefreshCw, Cpu, Layers, GitBranch, Code, ChevronRight, CheckCircle2, Box, HardDrive
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DownloadModal } from '@/components/DownloadModal';
import { SignInModal } from '@/components/SignInModal';
import { AppleIcon, WindowsIcon, LinuxIcon } from '@/components/icons/OsIcons';

export default function DownloadPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<'curl' | 'brew' | 'cargo' | 'winget'>('brew');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

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
            <span>Latest Release: v1.0.0</span>
            <a
              href="https://github.com/ElvinEga/NodaDB/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#17CF97] hover:underline flex items-center gap-1 ml-1"
            >
              <span>GitHub Releases</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white font-normal tracking-tight max-w-4xl mx-auto leading-tight">
            Download NodaDB Desktop &amp; CLI
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Native database workspace built in Rust. Download pre-compiled binaries, install via your favorite package manager, or compile from source.
          </p>

          {/* Direct GitHub Release CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/ElvinEga/NodaDB/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#17CF97] hover:bg-[#14be8a] text-black font-semibold text-sm transition-all shadow-lg"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Browse All Releases on GitHub</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

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
            <h2 className="text-2xl sm:text-3xl font-serif text-white">1. Official Desktop Installers</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Download native installers signed and published on GitHub Releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* macOS */}
            <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 hover:border-[#17CF97]/40 transition-all space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#17CF97]/50 transition-colors">
                  <AppleIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">macOS (11.0+)</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Native Metal-accelerated desktop build for Apple Silicon &amp; Intel Macs.
                  </p>
                </div>
                <div className="space-y-2 font-mono text-xs text-zinc-300">
                  <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                    <span>ARM64 (M1-M4)</span>
                    <span className="text-[10px] text-zinc-500">.dmg</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                    <span>Intel (x64)</span>
                    <span className="text-[10px] text-zinc-500">.dmg</span>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/ElvinEga/NodaDB/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#17CF97]/15 hover:bg-[#17CF97]/25 border border-[#17CF97]/30 text-[#17CF97] text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download macOS .dmg</span>
              </a>
            </div>

            {/* Windows */}
            <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 hover:border-[#17CF97]/40 transition-all space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#17CF97]/50 transition-colors">
                  <WindowsIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Windows (10/11)</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Lightweight standalone executable with hardware-accelerated DirectX canvas.
                  </p>
                </div>
                <div className="space-y-2 font-mono text-xs text-zinc-300">
                  <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                    <span>Windows x64 Setup</span>
                    <span className="text-[10px] text-zinc-500">.exe</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                    <span>Portable Binary</span>
                    <span className="text-[10px] text-zinc-500">.zip</span>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/ElvinEga/NodaDB/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#17CF97]/15 hover:bg-[#17CF97]/25 border border-[#17CF97]/30 text-[#17CF97] text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Windows .exe</span>
              </a>
            </div>

            {/* Linux */}
            <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 hover:border-[#17CF97]/40 transition-all space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#17CF97]/50 transition-colors">
                  <LinuxIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Linux (x86_64)</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Portable AppImage and Debian package compiled against glibc 2.31+.
                  </p>
                </div>
                <div className="space-y-2 font-mono text-xs text-zinc-300">
                  <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                    <span>Linux AppImage</span>
                    <span className="text-[10px] text-zinc-500">.AppImage</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                    <span>Debian / Ubuntu</span>
                    <span className="text-[10px] text-zinc-500">.deb</span>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/ElvinEga/NodaDB/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#17CF97]/15 hover:bg-[#17CF97]/25 border border-[#17CF97]/30 text-[#17CF97] text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Linux Assets</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Terminal & Package Manager Quick Install */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">2. Package Managers &amp; cURL Script</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Install NodaDB CLI and desktop via your system package manager.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 space-y-6">
            {/* Tabs Header */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
              <button
                onClick={() => setActiveTab('brew')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'brew'
                    ? 'bg-[#17CF97] text-black font-bold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Homebrew (macOS / Linux)
              </button>

              <button
                onClick={() => setActiveTab('cargo')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'cargo'
                    ? 'bg-[#17CF97] text-black font-bold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Cargo (Rust Crates.io)
              </button>

              <button
                onClick={() => setActiveTab('curl')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'curl'
                    ? 'bg-[#17CF97] text-black font-bold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                cURL Shell Script
              </button>

              <button
                onClick={() => setActiveTab('winget')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'winget'
                    ? 'bg-[#17CF97] text-black font-bold shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                WinGet (Windows)
              </button>
            </div>

            {/* Terminal Command Display */}
            <div className="p-4 rounded-xl bg-[#0A0C0B] border border-white/10 flex items-center justify-between font-mono text-sm text-zinc-200">
              <div className="flex items-center gap-3 overflow-x-auto">
                <span className="text-[#17CF97] font-bold select-none">$</span>
                <span className="whitespace-nowrap">{commands[activeTab]}</span>
              </div>
              <button
                onClick={() => handleCopy(commands[activeTab], activeTab)}
                className="ml-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
                title="Copy command"
              >
                {copiedCmd === activeTab ? (
                  <span className="flex items-center gap-1 text-[#17CF97] text-xs font-bold">
                    <Check className="w-4 h-4" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* 3. Build & Install from Source Code */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">3. Build &amp; Install from Source</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Compile NodaDB directly using the Rust toolchain (`cargo`).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121413] border border-white/10 space-y-4 font-mono text-xs">
            <div className="text-zinc-400 font-sans text-sm">
              Prerequisites: Rust 1.75+ and `cargo`. Clone the official repository and build release binaries:
            </div>

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

        {/* 4. Automatic Update Architecture */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif text-white">4. Automatic Update Architecture</h2>
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
