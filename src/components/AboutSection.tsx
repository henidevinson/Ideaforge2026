import React from 'react';
import { Target, Cpu, Users, Zap, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'PROBLEM SOLVING',
      description: 'Address genuine real-world bottlenecks across 8 critical industry and societal sectors.'
    },
    {
      icon: Cpu,
      title: 'TECHNOLOGY & CODE',
      description: 'Harness algorithms, modern frameworks, and engineering principles to build working concepts.'
    },
    {
      icon: Users,
      title: 'COLLABORATION',
      description: 'Synergize multi-disciplinary perspectives within teams of 1 to 4 passionate student innovators.'
    },
    {
      icon: Zap,
      title: 'REAL-WORLD IMPACT',
      description: 'Move beyond theoretical ideas into tangible, viable prototypes ready for industry validation.'
    }
  ];

  return (
    <section id="about" className="relative py-8 sm:py-20 border-t-2 border-[#E2E8F0]/15 scroll-mt-20 bg-[#0B0714] overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-2.5 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#E2E8F0]/40 bg-[#160B30] px-2.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[9px] sm:text-xs font-bold tracking-wider text-[#A78BFA] uppercase rounded-md shadow-brutal-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#E2E8F0]" />
              <span>ABOUT IDEAFORGE</span>
            </div>
            
            <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight sm:leading-none break-words">
              <span className="font-ideaforge-old">IDEAFORGE ' 26</span> BY <span className="text-[#A78BFA]">DEPARTMENT OF CSE</span>
            </h2>

            <p className="font-body text-xs sm:text-lg lg:text-xl text-white font-semibold leading-relaxed">
              <strong>IDEAFORGE ' 26</strong> is the flagship inter-collegiate IDEAFORGE uniting Technical and Non-Technical arenas under one roof at <strong>Abinandham Hall</strong>.
            </p>

            <p className="font-body text-xs sm:text-base text-[#CBD5E1] leading-relaxed font-normal">
              Organized by the Department of Computer Science and Engineering, IDEAFORGE ' 26 features the 8-Hour Continuous Ideathon sprint across 8 specialized domains (problem statements on the spot), Prompt Engineering, Business Pitch, alongside high-energy Non-Technical showdowns in Videography (max 1–2 members) and E-Games (Free Fire). Merit certificates and exciting cash prizes will be provided!
            </p>

            {/* Core highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1">
              {[
                'Event Date: 14/10/2026 (Wednesday)',
                'Ideathon: 8 Continuous Sprint Hours',
                'Technical & Non-Technical Sections',
                'Venue: Abinandham Hall, Campus Auditorium',
                'Merit Certificates & Cash Prizes Provided'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 font-heading text-xs sm:text-base font-bold uppercase text-white bg-[#160B30] border border-[#E2E8F0]/30 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-brutal-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Pillar Bento-cards (Clean 1 col on small phones, 2 col on >=440px) */}
          <div className="lg:col-span-5 grid grid-cols-1 min-[440px]:grid-cols-2 gap-2.5 sm:gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="border-2 border-[#E2E8F0]/25 bg-[#160B30] p-3 sm:p-6 rounded-xl sm:rounded-2xl hover:border-[#E2E8F0] transition-all duration-300 group shadow-brutal flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-[#0C061A] border-2 border-[#E2E8F0]/30 flex items-center justify-center text-white mb-2 sm:mb-4 group-hover:scale-105 group-hover:border-[#E2E8F0] transition-transform shrink-0">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#A78BFA]" />
                    </div>
                    <h3 className="font-display text-xs sm:text-lg font-black text-white mb-1 uppercase tracking-wide leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-[11px] sm:text-sm text-[#CBD5E1] leading-snug line-clamp-3 sm:line-clamp-none">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-4 pt-1.5 sm:pt-3 border-t border-white/10 font-mono text-[9px] sm:text-xs font-bold text-[#A78BFA]">
                    PILLAR 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
