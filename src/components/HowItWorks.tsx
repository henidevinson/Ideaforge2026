import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/eventData';

export const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-20 border-t border-white/5 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#E2E8F0] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
            THE PROCESS
          </div>
          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-2 sm:mb-3 break-words">
            HOW IT WORKS
          </h2>
          <p className="text-xs sm:text-base text-[#CBD5E1] leading-relaxed">
            A continuous 8-hour progression from team registration to working prototype evaluation.
          </p>
        </div>

        {/* Step Flow Grid (Clean 1 col on small phones, 2 on >=400px, 3 on tablet, 6 on desktop) */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 items-stretch">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div key={idx} className="relative flex flex-col">
              <div className="glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-[#E2E8F0]/20 hover:border-[#E2E8F0] transition-all duration-300 h-full flex flex-col justify-between group purple-border-glow shadow-[0_0_15px_rgba(226,232,240,0.04)]">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 rounded bg-[#6C63FF]/25 border border-[#E2E8F0]/30 text-[#E2E8F0] font-mono text-[9px] sm:text-xs font-bold">
                      STEP {item.step}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#A78BFA] font-bold">
                      STAGE 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xs sm:text-base font-bold text-white mb-1 leading-tight group-hover:text-[#E2E8F0] transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#CBD5E1] leading-snug">
                    {item.description}
                  </p>
                </div>

                <div className="mt-2.5 sm:mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#A78BFA]">
                  <span>PROGRESSION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
