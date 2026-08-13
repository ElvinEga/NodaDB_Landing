'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Terminal, X, Check, Copy, ShieldCheck } from 'lucide-react';
import { AppleIcon, WindowsIcon, LinuxIcon } from './icons/OsIcons';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const command = 'brew install nodadb';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerDownload = (assetType: string) => {
    setDownloaded(true);
    // Link directly to official GitHub Releases page
    window.open('https://github.com/ElvinEga/NodaDB/releases', '_blank');
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-[#141412] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative font-sans"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
            <Image src="/logo.png" alt="NodaDB" width={32} height={32} className="w-8 h-8 object-contain rounded-lg" />
          </div>
          <h3 className="text-2xl font-serif text-white">Get NodaDB Desktop &amp; CLI</h3>
          <p className="text-xs text-zinc-400 font-sans max-w-xs mx-auto">
            Official binaries from GitHub Releases or package managers. Powered by Kulacore.
          </p>
        </div>

        {downloaded ? (
          <div className="p-4 rounded-xl bg-[#17CF97]/15 border border-[#17CF97]/30 text-[#17CF97] text-center font-mono text-xs font-bold space-y-1">
            <div>Redirecting to GitHub Releases... ✓</div>
            <div className="text-[10px] text-zinc-400 font-normal">github.com/ElvinEga/NodaDB/releases</div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Desktop Installers</div>

            <button
              onClick={() => handleTriggerDownload('macOS Apple Silicon')}
              className="w-full p-3 rounded-xl bg-[#1A1A18] border border-white/10 hover:border-[#17CF97]/50 flex items-center justify-between text-xs font-mono text-zinc-200 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <AppleIcon className="w-5 h-5 text-zinc-300 group-hover:text-[#17CF97] transition-colors" />
                <div className="text-left font-sans">
                  <div className="font-semibold text-white">macOS (Apple Silicon M1/M2/M3/M4)</div>
                  <div className="text-[10px] text-zinc-400">NodaDB-1.0.0-arm64.dmg · GitHub Release</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-zinc-400 group-hover:text-[#17CF97]" />
            </button>

            <button
              onClick={() => handleTriggerDownload('macOS Intel')}
              className="w-full p-3 rounded-xl bg-[#1A1A18] border border-white/10 hover:border-[#17CF97]/50 flex items-center justify-between text-xs font-mono text-zinc-200 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <AppleIcon className="w-5 h-5 text-zinc-400 group-hover:text-[#17CF97] transition-colors" />
                <div className="text-left font-sans">
                  <div className="font-semibold text-white">macOS (Intel x64)</div>
                  <div className="text-[10px] text-zinc-400">NodaDB-1.0.0-x64.dmg · GitHub Release</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-zinc-400 group-hover:text-[#17CF97]" />
            </button>

            <button
              onClick={() => handleTriggerDownload('Windows x64')}
              className="w-full p-3 rounded-xl bg-[#1A1A18] border border-white/10 hover:border-[#17CF97]/50 flex items-center justify-between text-xs font-mono text-zinc-200 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <WindowsIcon className="w-5 h-5 text-zinc-400 group-hover:text-[#17CF97] transition-colors" />
                <div className="text-left font-sans">
                  <div className="font-semibold text-white">Windows 10/11 (x64 Setup)</div>
                  <div className="text-[10px] text-zinc-400">NodaDB-Setup-1.0.0.exe · GitHub Release</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-zinc-400 group-hover:text-[#17CF97]" />
            </button>

            <button
              onClick={() => handleTriggerDownload('Linux AppImage')}
              className="w-full p-3 rounded-xl bg-[#1A1A18] border border-white/10 hover:border-[#17CF97]/50 flex items-center justify-between text-xs font-mono text-zinc-200 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <LinuxIcon className="w-5 h-5 text-zinc-400 group-hover:text-[#17CF97] transition-colors" />
                <div className="text-left font-sans">
                  <div className="font-semibold text-white">Linux (AppImage / .deb)</div>
                  <div className="text-[10px] text-zinc-400">NodaDB-1.0.0.AppImage · GitHub Release</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-zinc-400 group-hover:text-[#17CF97]" />
            </button>

            {/* CLI Option */}
            <div className="pt-2">
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-1.5">CLI Quick Install</div>
              <div className="p-3 rounded-xl bg-[#0B0B09] border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="text-[#17CF97] font-bold">$</span>
                  <span>{command}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-[#17CF97]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="text-center pt-2">
              <a
                href="/download"
                onClick={onClose}
                className="text-xs text-[#17CF97] hover:underline font-mono inline-flex items-center gap-1"
              >
                <span>View full technical download &amp; build options →</span>
              </a>
            </div>
          </div>
        )}

        <div className="text-center pt-1">
          <button onClick={onClose} className="text-xs text-zinc-500 hover:text-white underline">
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
