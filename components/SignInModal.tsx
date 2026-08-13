'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSignedIn(true);
    setTimeout(() => {
      setSignedIn(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-sm bg-[#141412] border border-white/10 rounded-2xl p-6 space-y-5 shadow-2xl relative font-sans text-xs"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1 text-center">
          <div className="w-10 h-10 rounded-xl bg-[#17CF97]/20 border border-[#17CF97]/40 flex items-center justify-center text-[#17CF97] mx-auto">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold text-white">Sign in to NodaDB</h3>
          <p className="text-zinc-400 text-xs">Access your database connection vaults and saved queries.</p>
        </div>

        {signedIn ? (
          <div className="p-4 rounded-xl bg-[#17CF97]/15 border border-[#17CF97]/30 text-[#17CF97] text-center font-bold">
            Signed in successfully! Redirecting... ✓
          </div>
        ) : (
          <div className="space-y-3">
            {/* OAuth buttons */}
            <button
              onClick={() => {
                setSignedIn(true);
                setTimeout(() => { setSignedIn(false); onClose(); }, 1500);
              }}
              className="w-full py-2.5 rounded-xl bg-[#1D1D1B] hover:bg-[#252522] border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span>Continue with GitHub</span>
            </button>

            <button
              onClick={() => {
                setSignedIn(true);
                setTimeout(() => { setSignedIn(false); onClose(); }, 1500);
              }}
              className="w-full py-2.5 rounded-xl bg-[#1D1D1B] hover:bg-[#252522] border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span>Continue with Google</span>
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-2 text-[10px] uppercase font-mono text-zinc-500">Or Work Email</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <form onSubmit={handleSignIn} className="space-y-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dev@company.com"
                className="w-full bg-[#090908] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#17CF97]"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#17CF97] text-[#0B0B09] font-bold text-xs hover:bg-[#30E8B1] transition-colors"
              >
                Send Magic Passkey Link
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
