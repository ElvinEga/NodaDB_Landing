'use client';

import { ChevronRight } from 'lucide-react';
import {
  PostgresqlIcon,
  MysqlIcon,
  MariadbIcon,
  SqliteIcon,
  SqlServerIcon,
  ClickhouseIcon,
  MongodbIcon,
  RedisIcon,
  SupabaseIcon,
  NeonIcon,
  PlanetscaleIcon,
  TursoIcon,
  CloudflareIcon,
  VitessIcon,
} from './icons/DbIcons';

// Custom Brand SVG Icons

function OpenAiIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0814 4.7558-2.7482a.7925.7925 0 0 0 .3927-.6813v-6.7362l2.0216 1.1683a.0718.0718 0 0 1 .0383.0527v5.5836a4.5042 4.5042 0 0 1-4.4739 4.4833zM3.6 18.3362a4.4659 4.4659 0 0 1-.5316-3.0123l.142.0862 4.7558 2.7434a.7973.7973 0 0 0 .7901 0l5.8333-3.3702v2.3366a.0766.0766 0 0 1-.0335.0622l-4.837 2.7938a4.5042 4.5042 0 0 1-6.1191-1.6397zM2.5401 8.8252a4.4851 4.4851 0 0 1 2.3447-2.0255v5.6554a.7877.7877 0 0 0 .3927.6813l5.8333 3.3654-2.0216 1.1683a.0766.0766 0 0 1-.0718 0l-4.837-2.7938A4.5042 4.5042 0 0 1 2.54 8.8252zm16.597 3.7058-5.8333-3.3654 2.0216-1.1683a.0766.0766 0 0 1 .0718 0l4.837 2.7938a4.5042 4.5042 0 0 1-.6562 8.1293v-5.6554a.7877.7877 0 0 0-.4409-.734zM21.39 8.6816l-.142-.0862-4.7558-2.7434a.7973.7973 0 0 0-.7901 0L9.8688 9.2222V6.8856a.0766.0766 0 0 1 .0335-.0622l4.837-2.7938a4.5042 4.5042 0 0 1 6.6507 4.652zm-12.24 3.017L6.1284 10.03a.0766.0766 0 0 1-.0383-.0527V4.3937a4.5042 4.5042 0 0 1 7.3503-3.4425l-.1419.0814-4.7558 2.7482a.7925.7925 0 0 0-.3927.6813v6.2365zm1.0108-2.8344 2.8344-1.6375 2.8344 1.6375v3.2751l-2.8344 1.6375-2.8344-1.6375z" />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg className="w-6 h-6 text-[#D97757]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.8 8.8L20.2 6.2L15.6 11.6L22 14L15.4 15.6L17.2 22.2L12 17.6L6.8 22.2L8.6 15.6L2 14L8.4 11.6L3.8 6.2L10.2 8.8L12 2Z" />
    </svg>
  );
}

function GrokIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.13C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.63H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.37l3.99-3.13z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.63l3.99 3.13c.95-2.85 3.6-4.96 6.72-4.96z"
      />
    </svg>
  );
}

function MiniMaxIcon() {
  return (
    <svg className="w-6 h-6 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 12v4M8 8v12M12 4v16M16 9v7M20 11v3" />
    </svg>
  );
}

function ZaiIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-zinc-800 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-xs">
      Z
    </div>
  );
}

function DeepseekIcon() {
  return (
    <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7 3 3 7 3 12c0 2.5 1 4.8 2.7 6.5C7.2 16.8 9.5 16 12 16c2.5 0 4.8.8 6.3 2.5C20 16.8 21 14.5 21 12c0-5-4-9-9-9zm-2 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

function LinearIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.2 2.3A1.2 1.2 0 0 0 2 3.5v17c0 .7.5 1.2 1.2 1.2h17c.7 0 1.2-.5 1.2-1.2v-17c0-.7-.5-1.2-1.2-1.2H3.2zm1.6 2.4h14.4l-14.4 14.4V4.7zm14.4 14.6H4.8l14.4-14.4v14.4z" />
    </svg>
  );
}

function StripeIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#635BFF] flex items-center justify-center text-white font-bold text-xs font-sans">
      S
    </div>
  );
}

function GmailIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" />
      <path fill="#34A853" d="M22 6l-10 7L2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" opacity="0.2" />
      <path fill="#EA4335" d="M12 13L2 6V4l10 7 10-7v2l-10 7z" />
    </svg>
  );
}

function TogetherAiIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="7" r="4" />
      <circle cx="7" cy="16" r="4" />
      <circle cx="17" cy="16" r="4" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function IntegrationsSection() {
  const row1 = [
    { name: 'PostgreSQL', subtitle: 'Relational 12-16', icon: <PostgresqlIcon className="w-7 h-7" /> },
    { name: 'MySQL', subtitle: 'Relational 8.0+', icon: <MysqlIcon className="w-7 h-7" /> },
    { name: 'MariaDB', subtitle: 'Relational', icon: <MariadbIcon className="w-7 h-7" /> },
    { name: 'SQLite', subtitle: 'Local / Embedded', icon: <SqliteIcon className="w-7 h-7" /> },
    { name: 'SQL Server', subtitle: 'Microsoft T-SQL', icon: <SqlServerIcon className="w-7 h-7" /> },
    { name: 'ClickHouse', subtitle: 'Analytical OLAP', icon: <ClickhouseIcon className="w-7 h-7" /> },
    { name: 'MongoDB', subtitle: 'Document Store', icon: <MongodbIcon className="w-7 h-7" /> },
  ];

  const row2 = [
    { name: 'Supabase', subtitle: 'PostgreSQL Cloud', icon: <SupabaseIcon className="w-7 h-7" /> },
    { name: 'Neon', subtitle: 'Serverless Postgres', icon: <NeonIcon className="w-7 h-7" /> },
    { name: 'PlanetScale', subtitle: 'Serverless MySQL', icon: <PlanetscaleIcon className="w-7 h-7" /> },
    { name: 'Turso', subtitle: 'Edge SQLite', icon: <TursoIcon className="w-7 h-7" /> },
    { name: 'Redis', subtitle: 'In-Memory KV', icon: <RedisIcon className="w-7 h-7" /> },
    { name: 'Cloudflare D1', subtitle: 'Global Edge DB', icon: <CloudflareIcon className="w-7 h-7" /> },
    { name: 'Vitess', subtitle: 'Horizontal MySQL', icon: <VitessIcon className="w-7 h-7" /> },
  ];

  // Repeat items for seamless infinite marquee loop
  const row1Loop = [...row1, ...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="integrations" className="py-20 sm:py-28 bg-[#080A08] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2E20] border border-[#17CF97]/25 text-[#17CF97] text-[11px] font-mono tracking-wider font-semibold uppercase">
          <span>SUPPORTED DATABASES &amp; PROVIDERS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight">
          Connect to any database engine
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-xl mx-auto">
          Native high-performance Rust drivers for relational, document, key-value, time-series, and cloud database engines.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full space-y-4 overflow-hidden py-2">
        
        {/* Side Gradient Shadows for Soft Fade Effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#080A08] via-[#080A08]/90 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#080A08] via-[#080A08]/90 to-transparent z-20" />

        {/* ROW 1: Scrolling Left */}
        <div className="animate-marquee gap-4">
          {row1Loop.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[140px] sm:w-[155px] h-[105px] p-4 rounded-2xl bg-[#121413] border border-white/[0.08] hover:border-[#17CF97]/40 transition-all flex flex-col items-center justify-center text-center space-y-2 shrink-0 shadow-lg group cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-white truncate max-w-[125px]">
                  {item.name}
                </div>
                <div className="text-[10px] text-zinc-400 font-sans truncate mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="animate-marquee-reverse gap-4">
          {row2Loop.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[140px] sm:w-[155px] h-[105px] p-4 rounded-2xl bg-[#121413] border border-white/[0.08] hover:border-[#17CF97]/40 transition-all flex flex-col items-center justify-center text-center space-y-2 shrink-0 shadow-lg group cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-white truncate max-w-[125px]">
                  {item.name}
                </div>
                <div className="text-[10px] text-zinc-400 font-sans truncate mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom CTA Button */}
      <div className="text-center mt-12 sm:mt-16">
        <button
          type="button"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#181A18] hover:bg-[#232723] text-zinc-200 border border-white/10 text-xs font-medium transition-all group shadow-md cursor-pointer"
        >
          <span>See all supported databases</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

    </section>
  );
}
