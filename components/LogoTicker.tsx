'use client';

import {
  SupabaseIcon,
  NeonIcon,
  PlanetscaleIcon,
  TursoIcon,
  MongodbIcon,
  ClickhouseIcon,
  RedisIcon,
  PostgresqlIcon,
  MysqlIcon,
  CloudflareIcon,
} from './icons/DbIcons';

export function LogoTicker() {
  const logos = [
    { name: 'Supabase', icon: <SupabaseIcon className="w-5 h-5" /> },
    { name: 'Neon', icon: <NeonIcon className="w-5 h-5" /> },
    { name: 'PlanetScale', icon: <PlanetscaleIcon className="w-5 h-5" /> },
    { name: 'Turso', icon: <TursoIcon className="w-5 h-5" /> },
    { name: 'PostgreSQL', icon: <PostgresqlIcon className="w-5 h-5" /> },
    { name: 'MySQL', icon: <MysqlIcon className="w-5 h-5" /> },
    { name: 'MongoDB', icon: <MongodbIcon className="w-5 h-5" /> },
    { name: 'ClickHouse', icon: <ClickhouseIcon className="w-5 h-5" /> },
    { name: 'Redis', icon: <RedisIcon className="w-5 h-5" /> },
    { name: 'Cloudflare D1', icon: <CloudflareIcon className="w-5 h-5" /> },
  ];

  return (
    <section className="py-12 border-y border-white/[0.08] bg-[#0E0E0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-xs uppercase font-mono tracking-widest text-zinc-500">
          Native integration with hosted database providers &amp; cloud infrastructure
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-x-hidden mask-gradient">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0E0E0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0E0E0C] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-center text-zinc-400 group-hover:scale-110 transition-transform">
                {logo.icon}
              </div>
              <span className="font-semibold text-sm tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

