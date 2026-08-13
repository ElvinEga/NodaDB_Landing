'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DownloadModal } from '@/components/DownloadModal';
import { SignInModal } from '@/components/SignInModal';

export default function TermsPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0B09] text-zinc-100 font-sans antialiased selection:bg-[#17CF97]/30 selection:text-[#17CF97]">
      <Navbar
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
        onOpenSignInModal={() => setSignInModalOpen(true)}
      />

      {/* Header */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-20 border-b border-white/5 bg-[#090A09]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18] border border-white/10 text-xs font-mono text-zinc-300">
            <FileText className="w-3.5 h-3.5 text-[#17CF97]" />
            <span>Effective Date: August 13, 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight">
            Terms of Service
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed">
            Please read these terms carefully before using NodaDB desktop application and nodadb.com services powered by Kulacore.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans text-sm text-zinc-300 space-y-12 leading-relaxed">
        {/* Intro */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, accessing, or using NodaDB (including the native application, CLI tool, and nodadb.com web services), you agree to be bound by these Terms of Service. NodaDB is developed and operated by <strong className="text-white">Kulacore</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;). If you do not agree to these terms, do not install or use the software.
          </p>
        </div>

        {/* Local-First Software Architecture */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">2. Local-First Architecture &amp; Data Processing</h2>
          <p>
            NodaDB is designed as a local-first software application. All database connections, credentials, SSH tunnel configurations, private keys, and SQL query history executed within NodaDB are stored locally on your device and encrypted using hardware-backed AES-256-GCM encryption.
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400 pt-2 font-mono text-xs">
            <li>We do not store your target database credentials on external servers.</li>
            <li>Database query results remain in your device local memory and cache.</li>
            <li>You are solely responsible for maintaining local backups of your query vaults.</li>
          </ul>
        </div>

        {/* Software License */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">3. License &amp; Usage Rights</h2>
          <p>
            Kulacore grants you a non-exclusive, non-transferable, revocable license to install and use NodaDB for personal, commercial, and enterprise database management according to your active subscription plan.
          </p>
          <p className="text-zinc-400">
            You agree not to modify, reverse engineer, decompile, or attempt to extract source code unless explicitly permitted under open source licenses published in our official GitHub repository (<a href="https://github.com/ElvinEga/NodaDB" target="_blank" rel="noopener noreferrer" className="text-[#17CF97] hover:underline">github.com/ElvinEga/NodaDB</a>).
          </p>
        </div>

        {/* Pro Subscriptions & Payments */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">4. Subscriptions &amp; Billing</h2>
          <p>
            Paid features (such as Team Schema Vaults, Visual Relationship Flow, and Enterprise Tunneling) are billed on a recurring monthly or annual basis. You may cancel your subscription at any time via your account portal. Cancellations take effect at the end of the current billing period.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">5. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          <p className="text-zinc-400">
            NODADB IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND. KULACORE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL KULACORE BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DATA LOSS ARISING FROM DATABASE QUERIES, DROPPED TABLES, OR MIGRATION EXECUTION.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">6. Contact &amp; Legal Notices</h2>
          <p>
            If you have questions regarding these Terms of Service, please contact Kulacore legal support at <a href="mailto:support@nodadb.com" className="text-[#17CF97] hover:underline">support@nodadb.com</a> or visit <Link href="/download" className="text-[#17CF97] hover:underline">nodadb.com/download</Link>.
          </p>
        </div>

        <div className="pt-4 flex justify-between items-center text-xs font-mono text-zinc-500 border-t border-white/10">
          <Link href="/" className="text-[#17CF97] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
          <span>Powered by Kulacore</span>
        </div>
      </section>

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
