'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('nodadb-theme') as Theme | null;
      if (stored && ['dark', 'light', 'system'].includes(stored)) {
        return stored;
      }
    }
    return 'system';
  });
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (currentTheme: Theme) => {
      let isDark = false;
      if (currentTheme === 'system') {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        isDark = currentTheme === 'dark';
      }

      const activeTheme: 'dark' | 'light' = isDark ? 'dark' : 'light';
      setResolvedTheme(activeTheme);

      if (isDark) {
        root.classList.add('dark');
        root.classList.remove('light');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        root.setAttribute('data-theme', 'light');
      }
    };

    applyTheme(theme);
    localStorage.setItem('nodadb-theme', theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeSwitcher({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`inline-flex items-center p-1 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur-md ${className}`}>
      <button
        onClick={() => setTheme('light')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
          theme === 'light'
            ? 'bg-white text-slate-900 shadow-sm font-semibold'
            : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Light theme"
      >
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <span className="hidden sm:inline">Light</span>
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
          theme === 'dark'
            ? 'bg-[#1D201E] text-white shadow-sm font-semibold border border-white/10'
            : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Dark theme"
      >
        <Moon className="w-3.5 h-3.5 text-[#17CF97]" />
        <span className="hidden sm:inline">Dark</span>
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
          theme === 'system'
            ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm font-semibold'
            : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="System theme"
      >
        <Monitor className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
        <span className="hidden sm:inline">System</span>
      </button>
    </div>
  );
}

export function FloatingThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/90 dark:bg-[#141615]/90 border border-slate-200 dark:border-white/15 shadow-xl backdrop-blur-lg">
        <button
          onClick={() => setTheme('light')}
          className={`p-2 rounded-full transition-all ${
            theme === 'light'
              ? 'bg-amber-100 text-amber-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
          }`}
          title="Light theme"
        >
          <Sun className="w-4 h-4" />
        </button>

        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-full transition-all ${
            theme === 'dark'
              ? 'bg-[#17CF97]/20 text-[#17CF97] shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
          }`}
          title="Dark theme"
        >
          <Moon className="w-4 h-4" />
        </button>

        <button
          onClick={() => setTheme('system')}
          className={`p-2 rounded-full transition-all ${
            theme === 'system'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
          }`}
          title="System theme"
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
