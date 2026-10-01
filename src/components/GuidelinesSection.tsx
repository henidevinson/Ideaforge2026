import React from 'react';
import { CONFIRMED_RULES } from '../data/eventData';
import { CheckCircle2, ShieldAlert, Sparkles, Info } from 'lucide-react';

export const GuidelinesSection: React.FC = () => {
  return (
    <section id="guidelines" className="relative py-8 sm:py-20 border-t-2 border-[#E2E8F0]/15 scroll-mt-20 bg-[#0B0714] overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-2.5 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#E2E8F0]/40 bg-[#160B30] px-2.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[9px] sm:text-xs font-bold tracking-wider text-[#A78BFA] uppercase rounded-md shadow-brutal-sm mb-2 sm:mb-3">
            <ShieldAlert className="w-3 h-3 sm:w-4 sm:h-4 text-[#E2E8F0]" />
            <span>REGULATIONS & NOTICES</span>
          </div>

          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight sm:leading-none mb-2 sm:mb-3 break-words">
            RULES & <span className="text-[#A78BFA]">GUIDELINES</span>
          </h2>

          <p className="font-body text-xs sm:text-lg text-[#E2E8F0] leading-relaxed font-medium">
            Essential participation criteria confirmed by the Department of Computer Science and Engineering.
          </p>
        </div>

        {/* Confirmed Rules Box (Clean full-width layout) */}
        <div className="max-w-4xl mx-auto border-2 sm:border-4 border-[#E2E8F0]/30 bg-[#160B30] p-3.5 sm:p-8 rounded-xl sm:rounded-2xl shadow-brutal space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2.5 sm:gap-3.5 pb-3 sm:pb-5 border-b-2 border-white/10">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0C061A] border-2 border-[#E2E8F0]/30 flex items-center justify-center text-white shadow-brutal-sm shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#A78BFA]" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-2xl font-black text-white uppercase tracking-wide">
                Confirmed Event Guidelines
              </h3>
              <p className="font-body text-[11px] sm:text-sm text-[#CBD5E1] font-medium">
                Official parameters governing IDEAFORGE ' 26 at Abinantham Hall
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {CONFIRMED_RULES.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 sm:gap-3 bg-[#0C061A] border border-[#E2E8F0]/20 p-3 sm:p-4 rounded-xl shadow-brutal-sm">
                <span className="w-6 h-6 rounded bg-[#160B30] border border-[#E2E8F0]/40 text-white font-mono text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="font-body text-xs sm:text-sm text-white font-medium leading-relaxed">
                  {rule}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#0C061A] p-4 sm:p-5 rounded-xl border-2 border-[#E2E8F0]/25 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
            <p className="font-body text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-medium">
              <strong className="text-white">Notice:</strong> For the Ideathon, problem statements will be released live on the spot at 9:00 AM. For all remaining events (Prompt Engg, Business Pitch, Videography, Free Fire), exact event timings will be shared on the spot at Abinantham Hall without clashes. Merit certificates and cash prizes will be provided!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
