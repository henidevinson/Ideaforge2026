import React, { useState } from 'react';
import { FAQS } from '../data/eventData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-8 sm:py-20 border-t border-white/5 scroll-mt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#E2E8F0] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-2 sm:mb-3 break-words">
            EVENT FAQ
          </h2>
          <p className="text-xs sm:text-base text-[#CBD5E1] leading-relaxed">
            Everything you need to know about IDEAFORGE ' 26 rules, participation format, and schedule.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 sm:space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-xl sm:rounded-2xl border border-[#E2E8F0]/20 hover:border-[#E2E8F0] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-3 sm:p-5 text-left flex items-center justify-between gap-2.5 sm:gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xs min-[360px]:text-sm sm:text-lg font-bold text-white flex items-center gap-2 sm:gap-3 break-words">
                    <span className="font-mono text-[9.5px] sm:text-xs text-[#E2E8F0] font-semibold shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-6 h-6 min-[360px]:w-7 min-[360px]:h-7 sm:w-8 sm:h-8 rounded-lg bg-[#160B30] border border-[#E2E8F0]/30 flex items-center justify-center text-[#E2E8F0] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#6C63FF] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3 pb-3 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed border-t border-[#E2E8F0]/10 animate-in slide-in-from-top-1 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
