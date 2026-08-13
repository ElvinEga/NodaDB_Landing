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
                {/* Facebook */}
                <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="#" className="hover:text-white transition-colors" aria-label="X">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                  <a href="#" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <span>Pricing</span>
                    <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#0E2E20] border border-[#17CF97]/30 text-[#17CF97] font-mono font-medium">
                      10% OFF
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <span>Careers</span>
                    <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#0E2E20] border border-[#17CF97]/30 text-[#17CF97] font-mono font-medium">
                      6
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white tracking-tight">Resources</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <span>Slides</span>
                    <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#0E2E20] border border-[#17CF97]/30 text-[#17CF97] font-mono font-medium">
                      NEW
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/download" className="hover:text-white transition-colors">Downloads</a>
                </li>
                <li>
                  <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Changelog</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white tracking-tight">Legal</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">404 Page</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Waitlist</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      Status <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </span>
                    <span className="px-2 py-0.5 text-[10px] rounded-md bg-[#0E2E20] border border-[#17CF97]/30 text-[#17CF97] font-mono font-medium">
                      Operational
                    </span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
