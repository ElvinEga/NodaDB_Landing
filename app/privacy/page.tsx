'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DownloadModal } from '@/components/DownloadModal';
import { SignInModal } from '@/components/SignInModal';

export default function PrivacyPage() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17CF97]/10 border border-[#17CF97]/30 text-[#17CF97] text-xs font-mono font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>100% Local-First Privacy Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed">
            Your data and query results belong exclusively to you. Learn how NodaDB protects your privacy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans text-sm text-zinc-300 space-y-12 leading-relaxed">
        {/* Core Guarantee */}
        <div className="p-6 rounded-2xl bg-[#121413] border border-[#17CF97]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#17CF97] font-semibold text-base font-serif">
            <ShieldCheck className="w-5 h-5" />
            <span>Our Zero-Telemetry Guarantee</span>
          </div>
          <p className="text-zinc-200">
            NodaDB (developed by <strong className="text-white">Kulacore</strong>) is built on a local-first engineering philosophy. We never collect, transmit, or store your database hostnames, passwords, connection strings, query logs, or dataset contents.
          </p>
        </div>

        {/* 1. Data Encryption */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">1. Hardware Vault Encryption</h2>
          <p>
            All connection credentials, SSL keys, and SSH tunnel passphrase tokens saved inside NodaDB are encrypted using AES-256-GCM hardware keychains (macOS Keychain, Windows Credential Manager, Linux Secret Service).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs text-zinc-400">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-emerald-400 font-semibold">✓ Local Database Credentials</div>
              <div>Encrypted on-device only</div>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-emerald-400 font-semibold">✓ SQL Query Executions</div>
              <div>Never sent to external servers</div>
            </div>
          </div>
        </div>

        {/* 2. Website Analytics */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">2. Website Analytics (nodadb.com)</h2>
          <p>
            When visiting our official landing page (<a href="https://nodadb.com" className="text-[#17CF97] hover:underline">nodadb.com</a>), we collect privacy-friendly aggregate visitor metrics (such as page views and browser device type) without using invasive tracking cookies or selling personal data to advertising brokers.
          </p>
        </div>

        {/* 3. Account Data & Payments */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">3. Subscriptions &amp; Billing Data</h2>
          <p>
            If you subscribe to NodaDB Pro or Enterprise, payment details are processed directly via secure payment gateways (Stripe). Kulacore does not receive or store raw credit card numbers. We retain only your account email and active subscription tier to validate software licenses.
          </p>
        </div>

        {/* 4. Updates & Security Audits */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">4. Automatic Release Checking</h2>
          <p>
            The NodaDB desktop client periodically checks for official releases by querying <code className="text-[#17CF97]">api.github.com/repos/ElvinEga/NodaDB/releases/latest</code>. This HTTP request transmits only standard user-agent release information to check for available software updates.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4 p-6 rounded-2xl bg-[#121413] border border-white/10">
          <h2 className="text-xl font-semibold text-white font-serif">5. Contact Our Privacy Team</h2>
          <p>
            If you have questions or wish to exercise data rights under GDPR or CCPA, email Kulacore privacy officers at <a href="mailto:privacy@nodadb.com" className="text-[#17CF97] hover:underline">privacy@nodadb.com</a>.
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
