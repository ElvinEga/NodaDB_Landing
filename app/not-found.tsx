'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Terminal, ArrowLeft, Download, Search, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0B0B09] text-zinc-100 font-sans antialiased flex flex-col justify-between selection:bg-[#17CF97]/30 selection:text-[#17CF97]">
      <Navbar
        onOpenDownloadModal={() => router.push('/download')}
        onOpenSignInModal={() => {}}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8 my-auto">
        {/* Terminal Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-medium">
          <AlertTriangle className="w-4 h-4" />
          <span>ERR_404: QUERY_TARGET_NOT_FOUND</span>
        </div>

        {/* 404 Header */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-serif text-white font-normal tracking-tight">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-serif text-zinc-300">
            Page not found or database table relocated
          </h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            The page or resource you requested could not be located in NodaDB&apos;s current route index.
          </p>
        </div>

        {/* Terminal Simulation Box */}
        <div className="max-w-lg mx-auto p-4 rounded-2xl bg-[#121413] border border-white/10 text-left font-mono text-xs space-y-2 text-zinc-400 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-zinc-500">
            <span>nodadb-cli v1.0.0</span>
            <span className="text-rose-400">Exit Code 404</span>
          </div>
          <div className="text-zinc-300">
            <span className="text-[#17CF97]">$</span> nodadb query --target &quot;{typeof window !== 'undefined' ? window.location.pathname : '/page'}&quot;
          </div>
          <div className="text-rose-400/90">
            Error: 0 rows returned. Route schema mismatch.
          </div>
          <div className="text-zinc-500 pt-1 text-[11px]">
            Suggestion: Verify destination URL or return to main workspace.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#17CF97] hover:bg-[#14be8a] text-black font-semibold text-sm transition-all shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Safety (Home)</span>
          </Link>

          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1C1A] hover:bg-[#252825] border border-white/10 text-zinc-200 font-medium text-sm transition-all"
          >
            <Download className="w-4 h-4 text-[#17CF97]" />
            <span>Download NodaDB</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
