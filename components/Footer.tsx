'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080A08] border-t border-white/10 text-zinc-400 font-sans text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Brand, Tagline, Socials, Copyright */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              {/* Logo & Brand Name */}
              <Link href="/" className="inline-flex items-center gap-3 group">
                <Image
                  src="/logo.png"
                  alt="NodaDB Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain rounded-lg transition-transform group-hover:scale-105"
                />
                <span className="text-xl font-medium text-white tracking-tight">NodaDB</span>
              </Link>

              {/* Tagline */}
              <p className="text-zinc-400 text-sm sm:text-base font-sans max-w-sm">
                Universal local-first database management workspace built in Rust. Powered by <span className="text-white font-medium">Kulacore</span>.
              </p>

              {/* Social Icons Row */}
              <div className="flex items-center gap-4 text-zinc-400 pt-2">
                {/* GitHub */}
                <a href="https://github.com/ElvinEga/NodaDB" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="https://x.com/NodaDB" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/company/nodadb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="pt-8 text-xs sm:text-sm text-zinc-500 font-sans">
              © 2026 NodaDB, Inc. Universal Database Management Workspace.
            </div>
          </div>

          {/* Right Side: 3 Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Column 1: Product */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white tracking-tight">Product</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <span>Pricing</span>
                    <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#0E2E20] border border-[#17CF97]/30 text-[#17CF97] font-mono font-medium">
                      10% OFF
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/#integrations" className="hover:text-white transition-colors">Databases</Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white tracking-tight">Resources</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link href="/download" className="hover:text-white transition-colors">Downloads</Link>
                </li>
                <li>
                  <Link href="/#integrations" className="hover:text-white transition-colors">Integrations</Link>
                </li>
                <li>
                  <Link href="/#commands" className="hover:text-white transition-colors">Commands</Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors">FAQ &amp; Security</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white tracking-tight">Legal &amp; Pages</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/404-test" className="hover:text-white transition-colors">404 Page</Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
