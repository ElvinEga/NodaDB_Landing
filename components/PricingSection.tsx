'use client';

import { useState } from 'react';
import { Zap, Check, ChevronRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0A0C0A] text-zinc-100 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-[#17CF97] uppercase font-semibold">
            <span>—</span>
            <span>PRICING</span>
            <span>—</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight">
            Pricing plans
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-lg mx-auto">
            No hidden fees. No complicated calculations. Just clear, transparent pricing that grows with you.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="pt-2">
            <div className="inline-flex items-center p-1 rounded-full bg-[#141615] border border-white/10 text-xs font-sans">
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={`px-5 py-1.5 rounded-full transition-all cursor-pointer ${
                  !isYearly
                    ? 'bg-[#222524] text-white font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={`px-5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  isYearly
                    ? 'bg-[#222524] text-white font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>Yearly</span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#0D5B41] text-[#17CF97] text-[10px] font-bold">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: Hobby */}
          <div className="jos rounded-2xl sm:rounded-3xl bg-[#121413] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-8 hover:border-white/20 transition-all shadow-xl" data-jos_animation="zoom-in-up" data-jos_delay="0">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-white">Hobby</h3>
                <p className="text-xs text-zinc-400 font-sans mt-1">Perfect for personal use</p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-normal text-white font-sans">
                  Free
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPlan?.('Hobby')}
                className="w-full py-2.5 px-4 rounded-full bg-[#242625] hover:bg-[#2F3231] text-zinc-200 border border-white/10 text-xs font-medium flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <span>Create account</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              <div className="pt-2 space-y-4">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                  FEATURES
                </div>

                <div className="space-y-3.5 text-xs font-sans text-zinc-300">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#17CF97] shrink-0 mt-0.5 fill-[#17CF97]" />
                    <div>
                      <div className="text-white font-medium">Unlimited Local Connections</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">PostgreSQL, MySQL, SQLite</div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-zinc-200">Data Explorer & SQL Workspace</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">Full editing and query logs</div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-zinc-200">Universal Export</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">CSV, JSON, SQL Dump</div>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div className="text-zinc-200">Community Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pro */}
          <div className="jos rounded-2xl sm:rounded-3xl bg-[#121413] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-8 relative hover:border-[#17CF97]/30 transition-all shadow-xl" data-jos_animation="zoom-in-up" data-jos_delay="0.1">
            {/* POPULAR Badge */}
            <div className="absolute top-6 right-6 px-2.5 py-0.5 rounded-full bg-[#0C583E] text-[#17CF97] text-[10px] font-mono font-bold tracking-wider uppercase">
              POPULAR
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-white">Pro</h3>
                <p className="text-xs text-zinc-400 font-sans mt-1">Perfect for creators and freelancers</p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-normal text-white font-sans">
                    ${isYearly ? '39' : '49'}
                  </span>
                  <span className="text-xs text-zinc-400 font-sans font-normal">/month</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPlan?.('Pro')}
                className="w-full py-2.5 px-4 rounded-full bg-[#0D6246] hover:bg-[#117856] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer shadow-lg shadow-[#0D6246]/20"
              >
                <span>Subscribe</span>
                <ChevronRight className="w-3.5 h-3.5 text-white" />
              </button>

              <div className="pt-2 space-y-4">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                  FEATURES
                </div>

                <div className="space-y-3.5 text-xs font-sans text-zinc-300">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#17CF97] shrink-0 mt-0.5 fill-[#17CF97]" />
                    <div>
                      <div className="text-white font-medium">Everything in Hobby +</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">All SQL & NoSQL drivers</div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-zinc-200">Visual Schema & Relationship Flow</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">Interactive ERD diagrams</div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-zinc-200">SSH Tunneling & SSL Key Vaults</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">Encrypted local storage</div>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div className="text-zinc-200">Query History Vault</div>
                  </div>

                  {/* Feature 5 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div className="text-zinc-200">Priority E-mail Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Expert */}
          <div className="jos rounded-2xl sm:rounded-3xl bg-[#121413] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-8 hover:border-white/20 transition-all shadow-xl" data-jos_animation="zoom-in-up" data-jos_delay="0.2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-white">Expert</h3>
                <p className="text-xs text-zinc-400 font-sans mt-1">Perfect for professionals, studios</p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-normal text-white font-sans">
                    ${isYearly ? '79' : '99'}
                  </span>
                  <span className="text-xs text-zinc-400 font-sans font-normal">/month</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPlan?.('Expert')}
                className="w-full py-2.5 px-4 rounded-full bg-[#242625] hover:bg-[#2F3231] text-zinc-200 border border-white/10 text-xs font-medium flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <span>Subscribe</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              <div className="pt-2 space-y-4">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                  FEATURES
                </div>

                <div className="space-y-3.5 text-xs font-sans text-zinc-300">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#17CF97] shrink-0 mt-0.5 fill-[#17CF97]" />
                    <div>
                      <div className="text-white font-medium">Everything in Pro +</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">Team workspace & schema sharing</div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-zinc-200">High-Performance Vector & Olap Engines</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">ClickHouse, DuckDB, PgVector</div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-zinc-200">Automated Schema Migration Diff</div>
                      <div className="text-xs text-zinc-500 font-sans mt-0.5">Generate DDL scripts instantly</div>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div className="text-zinc-200">Role-Based Access & Audit Logs</div>
                  </div>

                  {/* Feature 5 */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div className="text-zinc-200">24/7 Dedicated Support & Onboarding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
