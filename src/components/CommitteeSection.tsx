import React from 'react';
import { Sparkles, Award, Users, ChevronRight } from 'lucide-react';

export const CommitteeSection: React.FC = () => {
  // Track 1: Institution Leaders (Scroll from Right to Left)
  const institutionLeaders = [
    {
      title: 'CHAIRMAN, ADVISORY BOARD',
      name: 'Sri A.M Kandaswami',
      designation: 'Chairman, Advisory Board',
      category: 'LEADERSHIP'
    },
    {
      title: 'SECRETARY',
      name: 'SMT. K. Savitha Moganraj',
      designation: 'Secretary',
      category: 'LEADERSHIP'
    },
    {
      title: 'PRINCIPAL',
      name: 'DR. R. Kiruba Shankar',
      designation: 'Principal, Sasurie College Of Engineering',
      category: 'LEADERSHIP'
    },
    {
      title: 'CSE HOD',
      name: 'Mrs.S.Renugadevi',
      designation: 'Head of Department, CSE',
      category: 'HOD / CSE'
    }
  ];

  // Track 2: Organizing Committee & Student Coordinators (Scroll from Left to Right)
  const organizingCommittee = [
    {
      role: 'STAFF COORDINATOR',
      name: 'V.Gunasundhari',
      designation: 'AP/CSE',
      badge: 'FACULTY'
    },
    {
      role: 'STAFF COORDINATOR',
      name: 'R.Sabareeswari',
      designation: 'AP/CSE',
      badge: 'FACULTY'
    },
    {
      role: 'STUDENT COORDINATOR',
      name: 'H. Heni Devinson',
      designation: 'B.E Cse',
      badge: 'STUDENT'
    },
    {
      role: 'STUDENT COORDINATOR',
      name: 'M. Harish',
      designation: 'Student -B.E Cse',
      badge: 'STUDENT'
    }
  ];

  return (
    <section id="committee" className="py-8 sm:py-16 border-t-2 border-b-2 border-[#E2E8F0]/15 bg-[#0B0714] relative overflow-hidden scroll-mt-20 space-y-8 sm:space-y-12">
      
      {/* ============================================================== */}
      {/* 1. OUR INSTITUTION LEADERS (SCROLL FROM RIGHT TO LEFT)       */}
      {/* ============================================================== */}
      <div>
        <div className="max-w-[1750px] mx-auto px-2.5 sm:px-6 lg:px-12 xl:px-16 mb-3 sm:mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 border border-[#E2E8F0]/30 bg-[#160B30] px-2.5 py-1 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-[#A78BFA] uppercase rounded shadow-brutal-sm mb-1">
                <Sparkles className="h-3 w-3 text-[#E2E8F0]" />
                <span>EXECUTIVE PATRONS & GOVERNANCE</span>
              </div>
              <h2 className="font-display text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight break-words">
                OUR INSTITUTION <span className="text-[#A78BFA]">LEADERS</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Marquee Track 1: Right to Left (.animate-marquee) */}
        <div className="relative w-full overflow-hidden py-3 bg-[#0C061A]/80 border-y border-[#E2E8F0]/20">
          {/* Subtle side fade scrims */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-[#0B0714] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-[#0B0714] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            {/* First Set */}
            {institutionLeaders.map((leader, idx) => (
              <div
                key={`leader-1-${idx}`}
                className="inline-flex flex-col text-left bg-[#160B30] border-2 border-[#E2E8F0]/30 hover:border-[#A78BFA] rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 shadow-brutal-sm hover:scale-[1.02] transition-transform shrink-0 group cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[9.5px] font-black uppercase text-[#A78BFA] bg-[#0C061A] border border-[#A78BFA]/30 px-2 py-0.5 rounded">
                    {leader.title}
                  </span>
                  <span className="font-mono text-[9.5px] font-semibold text-[#CBD5E1] bg-[#0C061A]/60 px-1.5 py-0.5 rounded border border-white/5">
                    {leader.category}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-black uppercase text-white group-hover:text-[#A78BFA] transition-colors leading-tight">
                  {leader.name}
                </h3>
                <span className="font-body text-xs text-[#CBD5E1] font-medium leading-tight mt-0.5">
                  {leader.designation}
                </span>
              </div>
            ))}

            {/* Loop duplicate for seamless continuous scrolling */}
            {institutionLeaders.map((leader, idx) => (
              <div
                key={`leader-2-${idx}`}
                className="inline-flex flex-col text-left bg-[#160B30] border-2 border-[#E2E8F0]/30 hover:border-[#A78BFA] rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 shadow-brutal-sm hover:scale-[1.02] transition-transform shrink-0 group cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[9.5px] font-black uppercase text-[#A78BFA] bg-[#0C061A] border border-[#A78BFA]/30 px-2 py-0.5 rounded">
                    {leader.title}
                  </span>
                  <span className="font-mono text-[9.5px] font-semibold text-[#CBD5E1] bg-[#0C061A]/60 px-1.5 py-0.5 rounded border border-white/5">
                    {leader.category}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-black uppercase text-white group-hover:text-[#A78BFA] transition-colors leading-tight">
                  {leader.name}
                </h3>
                <span className="font-body text-xs text-[#CBD5E1] font-medium leading-tight mt-0.5">
                  {leader.designation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. ORGANIZING COMMITTEE (SCROLL FROM LEFT TO RIGHT)           */}
      {/* ============================================================== */}
      <div>
        <div className="max-w-[1750px] mx-auto px-2.5 sm:px-6 lg:px-12 xl:px-16 mb-3 sm:mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 border border-[#E2E8F0]/30 bg-[#160B30] px-2.5 py-1 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-[#A78BFA] uppercase rounded shadow-brutal-sm mb-1">
                <Users className="h-3 w-3 text-[#E2E8F0]" />
                <span>STAFF & STUDENT EVENT COORDINATION TEAM</span>
              </div>
              <h2 className="font-display text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight break-words">
                ORGANIZING <span className="text-[#A78BFA]">COMMITTEE</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Marquee Track 2: Left to Right (.animate-marquee-right) */}
        <div className="relative w-full overflow-hidden py-3 bg-[#0C061A]/80 border-y border-[#E2E8F0]/20">
          {/* Subtle side fade scrims */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-[#0B0714] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-[#0B0714] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            {/* First Set */}
            {organizingCommittee.map((member, idx) => (
              <div
                key={`org-1-${idx}`}
                className="inline-flex flex-col text-left bg-[#160B30] border-2 border-[#E2E8F0]/30 hover:border-emerald-400 rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 shadow-brutal-sm hover:scale-[1.02] transition-transform shrink-0 group cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[9.5px] font-black uppercase text-emerald-400 bg-[#0C061A] border border-emerald-400/30 px-2 py-0.5 rounded">
                    {member.role}
                  </span>
                  <span className="font-mono text-[9.5px] font-semibold text-[#CBD5E1] bg-[#0C061A]/60 px-1.5 py-0.5 rounded border border-white/5">
                    {member.badge}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-black uppercase text-white group-hover:text-emerald-400 transition-colors leading-tight">
                  {member.name}
                </h3>
                <span className="font-body text-xs text-[#CBD5E1] font-medium leading-tight mt-0.5">
                  {member.designation}
                </span>
              </div>
            ))}

            {/* Loop duplicate for seamless continuous scrolling */}
            {organizingCommittee.map((member, idx) => (
              <div
                key={`org-2-${idx}`}
                className="inline-flex flex-col text-left bg-[#160B30] border-2 border-[#E2E8F0]/30 hover:border-emerald-400 rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 shadow-brutal-sm hover:scale-[1.02] transition-transform shrink-0 group cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[9.5px] font-black uppercase text-emerald-400 bg-[#0C061A] border border-emerald-400/30 px-2 py-0.5 rounded">
                    {member.role}
                  </span>
                  <span className="font-mono text-[9.5px] font-semibold text-[#CBD5E1] bg-[#0C061A]/60 px-1.5 py-0.5 rounded border border-white/5">
                    {member.badge}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-black uppercase text-white group-hover:text-emerald-400 transition-colors leading-tight">
                  {member.name}
                </h3>
                <span className="font-body text-xs text-[#CBD5E1] font-medium leading-tight mt-0.5">
                  {member.designation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
