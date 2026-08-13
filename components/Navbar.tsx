'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Download, Menu, X, ChevronDown, Check, Sparkles, ExternalLink } from 'lucide-react';
import { AppleIcon, WindowsIcon, LinuxIcon } from './icons/OsIcons';
// import { ThemeSwitcher } from './ThemeProvider';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  onOpenSignInModal: () => void;
}

export function Navbar({ onOpenDownloadModal, onOpenSignInModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/[0.06] bg-white/80 dark:bg-[#0B0B09]/80 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo - 4 Emerald Dots Clover + NodaDB */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#17CF97] transition-transform group-hover:scale-110" />
            <div className="w-2 h-2 rounded-full bg-[#17CF97]/80 transition-transform group-hover:scale-110" />
            <div className="w-2 h-2 rounded-full bg-[#17CF97]/80 transition-transform group-hover:scale-110" />
            <div className="w-2 h-2 rounded-full bg-[#17CF97] transition-transform group-hover:scale-110" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">
            NodaDB
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-zinc-300">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
            Features <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-400" />
          </a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#showcase" className="hover:text-slate-900 dark:hover:text-white transition-colors">Docs</a>
          <a href="#integrations" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
            Databases
            <span className="px-1.5 py-0.2 rounded bg-[#17CF97]/20 text-[#047857] dark:text-[#17CF97] text-[11px] font-mono font-medium">18+</span>
          </a>
          <a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security</a>
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden md:flex items-center gap-4">
          {/*<ThemeSwitcher />*/}

          <button
            onClick={onOpenSignInModal}
            className="text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 transition-colors"
          >
            Sign in
          </button>

          <button
            onClick={onOpenDownloadModal}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-[#0B0B09] text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md group"
          >
            <span>Download</span>
            <div className="flex items-center gap-1.5 text-slate-300 dark:text-zinc-800">
              <AppleIcon className="w-3.5 h-3.5" />
              <WindowsIcon className="w-3.5 h-3.5" />
              <LinuxIcon className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          {/*<ThemeSwitcher />*/}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B0B09] px-4 pt-2 pb-6 space-y-3"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#workspace" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white">Workspace</a>
            <a href="#commands" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white">Commands</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white">FAQ</a>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSignInModal(); }}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 rounded-lg"
              >
                Sign in
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDownloadModal(); }}
                className="w-full text-center py-2.5 text-sm font-semibold text-white dark:text-[#0B0B09] bg-[#17CF97] rounded-lg shadow-lg shadow-[#17CF97]/20"
              >
                Download NodaDB
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
