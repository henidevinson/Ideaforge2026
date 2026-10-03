import React, { useState } from 'react';
import { DOMAINS } from '../data/domains';
import { DomainItem } from '../types';
import { 
  Sprout, 
  HeartPulse, 
  GraduationCap, 
  Bot, 
  ShieldCheck, 
  Leaf, 
  Compass, 
  Coins, 
  ArrowRight, 
  Sparkles,
  Search,
  Check,
  Zap
} from 'lucide-react';

interface DomainsSectionProps {
  onSelectDomainForRegistration: (domainName: string) => void;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({ onSelectDomainForRegistration }) => {
  const [selectedDomain, setSelectedDomain] = useState<DomainItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'agriculture': return Sprout;
      case 'healthcare': return HeartPulse;
      case 'education': return GraduationCap;
      case 'artificial-intelligence': return Bot;
      case 'cybersecurity': return ShieldCheck;
      case 'environment-sustainability': return Leaf;
      case 'tourism': return Compass;
      case 'blockchain': return Coins;
      default: return Sparkles;
    }
  };

  const filteredDomains = DOMAINS.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="domains" className="relative py-8 sm:py-20 border-t-2 border-[#E2E8F0]/15 scroll-mt-20 bg-[#0B0714]">
      {/* Background glow accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6C63FF]/15 blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1750px] mx-auto px-3 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#E2E8F0]/40 bg-[#160B30] px-2.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[9px] sm:text-xs font-bold tracking-wider text-[#A78BFA] uppercase rounded-md shadow-brutal-sm mb-2.5 sm:mb-3">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#E2E8F0]" />
            <span>TECHNICAL TRACK · IDEATHON DOMAINS</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight sm:leading-none mb-2 sm:mb-3">
            IDEATHON <span className="text-[#A78BFA]">DOMAINS</span>
          </h2>

          <p className="font-body text-xs sm:text-lg text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto font-medium">
            Eight focused innovation tracks for the continuous 8-hour Ideathon sprint. <strong className="text-white">Problem statements will be officially released on the spot at 9:00 AM on event day</strong> under your chosen domain!
          </p>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#160B30] border border-[#A78BFA]/40 font-mono text-xs text-[#A78BFA]">
            <span>⚡ Problem Statements: Given on the spot at 9:00 AM</span>
            <span>·</span>
            <span>Venue: Abinandham Hall</span>
          </div>

          {/* Quick Domain Search Bar */}
          <div className="mt-4 sm:mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tracks (e.g. AI, Healthcare)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#160B30] border-2 border-[#E2E8F0]/30 text-white placeholder-[#94A3B8] font-body text-xs sm:text-base rounded-xl pl-9 sm:pl-12 pr-4 py-2 sm:py-3 focus:border-[#E2E8F0] transition-all shadow-brutal-sm"
            />
          </div>
        </div>

        {/* 8 Domain Cards in Brutal Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredDomains.map((domain) => {
            const Icon = getDomainIcon(domain.id);
            return (
              <div
                key={domain.id}
                className="border-2 border-[#E2E8F0]/30 bg-[#160B30] p-3.5 sm:p-6 rounded-xl sm:rounded-2xl hover:border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 shadow-brutal group flex flex-col justify-between relative cursor-pointer"
                onClick={() => setSelectedDomain(domain)}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <span className="font-mono text-[9px] sm:text-xs font-black text-white px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#0C061A] border border-[#E2E8F0]/40 rounded">
                      TRACK {domain.number}
                    </span>
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-[#0C061A] border-2 border-[#E2E8F0]/40 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-[#E2E8F0] transition-all duration-300 shadow-[0_0_15px_rgba(226,232,240,0.2)] shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-sm xs:text-base sm:text-xl font-black text-white mb-1 group-hover:text-[#E2E8F0] transition-colors uppercase leading-tight tracking-wide">
                    {domain.name}
                  </h3>

                  {/* Tagline */}
                  <p className="font-heading text-[11px] sm:text-xs font-extrabold uppercase text-[#A78BFA] mb-1.5 sm:mb-2 tracking-wider">
                    {domain.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-body text-[11px] sm:text-sm text-[#CBD5E1] leading-snug mb-3 sm:mb-4 font-medium line-clamp-2 sm:line-clamp-none">
                    {domain.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-2 sm:pt-3 border-t-2 border-white/10 flex items-center justify-between font-heading text-[10px] sm:text-xs font-black uppercase tracking-wider text-white group-hover:text-[#A78BFA] transition-colors">
                  <span>VIEW FOCUS AREAS</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform text-[#A78BFA]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Domain Details & Direct Registration Call */}
        {selectedDomain && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedDomain(null)}
          >
            <div 
              className="bg-[#160B30] border-2 sm:border-4 border-[#E2E8F0] rounded-xl sm:rounded-2xl max-w-xl w-full p-4 sm:p-9 shadow-brutal relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#A78BFA] tracking-wider uppercase bg-[#0C061A] px-2.5 py-1 rounded border border-[#E2E8F0]/30">
                    TRACK {selectedDomain.number}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-black text-white mt-2 uppercase">
                    {selectedDomain.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-white hover:text-[#A78BFA] text-lg font-bold p-2 rounded-lg bg-[#0C061A] border border-[#E2E8F0]/30 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="font-body text-base text-white mb-6 leading-relaxed font-medium">
                {selectedDomain.description}
              </p>

              <div className="mb-6 bg-[#0C061A] border-2 border-[#E2E8F0]/25 p-4 sm:p-5 rounded-xl">
                <h4 className="font-heading text-sm font-black tracking-widest text-[#A78BFA] uppercase mb-3">
                  SUGGESTED PROBLEM FOCUS AREAS
                </h4>
                <ul className="space-y-2.5">
                  {selectedDomain.keyAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-body text-sm sm:text-base text-[#E2E8F0] font-medium">
                      <Check className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                <button
                  onClick={() => {
                    const domainName = selectedDomain.name;
                    setSelectedDomain(null);
                    onSelectDomainForRegistration(domainName);
                  }}
                  className="flex-1 py-3 px-4 sm:py-4 sm:px-5 bg-[#6C63FF] hover:bg-[#554BF0] border-2 border-[#E2E8F0] text-white font-heading text-sm sm:text-base font-black uppercase tracking-wider rounded-xl shadow-brutal-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select & Register For This Track</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="py-3 px-5 sm:py-4 sm:px-6 bg-transparent border-2 border-[#E2E8F0]/40 hover:border-[#E2E8F0] text-white font-heading text-sm sm:text-base font-bold uppercase rounded-xl transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
