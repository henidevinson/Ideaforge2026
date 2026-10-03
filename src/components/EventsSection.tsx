import React, { useState } from 'react';
import { ALL_EVENTS } from '../data/eventData';
import { EventItem, EventCategory, EventName } from '../types';
import { useRegistrationCountdown } from '../services/deadlineService';
import { 
  Zap, 
  Clock, 
  Users, 
  IndianRupee, 
  ArrowRight, 
  Code2, 
  Gamepad2, 
  Video, 
  BrainCircuit, 
  Briefcase, 
  Sparkles,
  X,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

interface EventsSectionProps {
  onSelectEventForRegistration: (category: EventCategory, eventName: EventName, domain?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ 
  onSelectEventForRegistration
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Technical' | 'Non-Technical'>('All');
  const [selectedEventModal, setSelectedEventModal] = useState<EventItem | null>(null);
  const { isClosed } = useRegistrationCountdown();

  const filteredEvents = activeFilter === 'All' 
    ? ALL_EVENTS 
    : ALL_EVENTS.filter((e) => e.category === activeFilter);

  const getEventIcon = (id: string) => {
    switch (id) {
      case 'ideathon': return BrainCircuit;
      case 'prompt-engineering': return Code2;
      case 'business-pitch': return Briefcase;
      case 'videography': return Video;
      case 'e-games': return Gamepad2;
      default: return Sparkles;
    }
  };

  const getDisplayTiming = (evt: EventItem) => {
    if (evt.id === 'ideathon') {
      return '9:00 AM – 5:00 PM (8 Hrs)';
    }
    return 'Round Time on Spot';
  };

  const getDisplayTeamSize = (evt: EventItem) => {
    if (evt.id === 'ideathon') {
      return '1 – 4 Members';
    }
    return 'Solo (1 Member)';
  };

  const getDisplayFee = (evt: EventItem) => {
    if (evt.id === 'ideathon') {
      return '₹250 / Head';
    }
    return '₹250 / Head (Combined)';
  };

  return (
    <section id="events" className="relative py-8 sm:py-16 border-t-2 border-[#E2E8F0]/15 scroll-mt-20 bg-[#090414] overflow-hidden">
      {/* Background glow accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6C63FF]/15 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean and Uncluttered */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 border-2 border-[#E2E8F0]/40 bg-[#160B30] px-3 py-1 font-mono text-[10px] sm:text-xs font-bold tracking-wider text-[#A78BFA] uppercase rounded-md shadow-brutal-sm mb-2.5">
            <Zap className="w-3.5 h-3.5 text-[#E2E8F0]" />
            <span>OFFICIAL COMPETITIONS</span>
          </div>

          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-2 break-words">
            EVENTS <span className="text-[#A78BFA]">SHOWCASE</span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-[#CBD5E1] max-w-lg mx-auto">
            Select any event card to view full rules, guidelines, and registration details.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5">
            {(['All', 'Technical', 'Non-Technical'] as const).map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2.5 py-1.5 min-[360px]:px-4 sm:px-5 sm:py-2 rounded-lg font-heading text-[11px] min-[360px]:text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer shadow-brutal-sm ${
                    isSelected
                      ? 'bg-[#6C63FF] border-2 border-[#E2E8F0] text-white'
                      : 'bg-[#160B30] border-2 border-[#E2E8F0]/30 text-[#CBD5E1] hover:text-white hover:border-[#E2E8F0]/60'
                  }`}
                >
                  {filter === 'All' ? 'ALL EVENTS (5)' : `${filter.toUpperCase()}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events Grid - Only Necessary Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredEvents.map((evt) => {
            const Icon = getEventIcon(evt.id);
            const isTechnical = evt.category === 'Technical';

            return (
              <div
                key={evt.id}
                onClick={() => setSelectedEventModal(evt)}
                className="group border-2 border-[#E2E8F0]/30 hover:border-[#E2E8F0] bg-[#160B30] p-4 sm:p-5 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-brutal flex flex-col justify-between cursor-pointer relative"
              >
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`font-mono text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded border ${
                        isTechnical
                          ? 'bg-[#0C061A] text-[#A78BFA] border-[#A78BFA]/50'
                          : 'bg-[#0C061A] text-[#E2E8F0] border-[#E2E8F0]/50'
                      }`}>
                        {evt.category}
                      </span>
                      {evt.id === 'ideathon' && (
                        <span className="font-mono text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-950/70 border border-amber-400/80 text-amber-300 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                          EXCLUSIVE CASH PRIZE
                        </span>
                      )}
                    </div>

                    <div className="w-9 h-9 rounded-lg bg-[#0C061A] border-2 border-[#E2E8F0]/30 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-[#E2E8F0] transition-all">
                      <Icon className="w-4 h-4 text-[#A78BFA] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-display text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#A78BFA] transition-colors">
                    {evt.name}
                  </h3>

                  {/* Tagline Badge */}
                  <p className="font-heading text-xs font-bold uppercase text-[#A78BFA] tracking-wide mb-3">
                    {evt.tagline}
                  </p>

                  {/* Necessary Details Only (Team Size, Timing, Fee) */}
                  <div className="space-y-1.5 font-mono text-xs sm:text-[13px] text-[#F8FAFC] bg-[#0C061A] p-3 rounded-lg border border-[#E2E8F0]/25 mb-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                      <span className="text-[#E2E8F0] font-bold flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#A78BFA]" /> Team Size:
                      </span>
                      <span className="font-extrabold text-white">
                        {getDisplayTeamSize(evt)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                      <span className="text-[#E2E8F0] font-bold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#A78BFA]" /> Timing:
                      </span>
                      <span className="font-black text-[#A78BFA]">
                        {getDisplayTiming(evt)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#E2E8F0] font-bold flex items-center gap-1.5">
                        <IndianRupee className="w-3.5 h-3.5 text-[#A78BFA]" /> Fee:
                      </span>
                      <span className="font-extrabold text-white">
                        {getDisplayFee(evt)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono text-[#F8FAFC] group-hover:text-white">
                  <span className="text-xs sm:text-sm text-[#A78BFA] font-black flex items-center gap-1">
                    Click for full details
                  </span>
                  <div className="p-1 rounded bg-[#0C061A] border border-[#E2E8F0]/30 group-hover:border-[#E2E8F0] group-hover:bg-[#6C63FF] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Event Full Details */}
        {selectedEventModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedEventModal(null)}
          >
            <div 
              className="bg-[#160B30] border-2 sm:border-3 border-[#E2E8F0] rounded-xl sm:rounded-2xl max-w-lg w-full p-4 sm:p-7 shadow-brutal relative max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-3">
                <div>
                  <span className="font-mono text-xs font-black text-[#A78BFA] tracking-wider uppercase bg-[#0C061A] px-2.5 py-0.5 rounded border border-[#E2E8F0]/30">
                    {selectedEventModal.category} EVENT
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1.5 uppercase">
                    {selectedEventModal.name}
                  </h3>
                  <p className="font-heading text-xs sm:text-sm text-[#A78BFA] font-black uppercase mt-0.5">
                    {selectedEventModal.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedEventModal(null)}
                  className="text-white hover:text-[#A78BFA] p-1.5 rounded-lg bg-[#0C061A] border border-[#E2E8F0]/30 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-4 mb-5">
                {/* Description */}
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-black tracking-widest text-[#A78BFA] uppercase mb-1">
                    OVERVIEW
                  </h4>
                  <p className="font-body text-xs sm:text-base text-[#F8FAFC] font-medium leading-relaxed">
                    {selectedEventModal.description}
                  </p>
                </div>

                {/* Key Specs Table */}
                <div className="bg-[#0C061A] border border-[#E2E8F0]/25 p-3.5 rounded-xl space-y-2 font-mono text-xs sm:text-sm text-white">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-[#E2E8F0] font-bold">Team Size:</span>
                    <span className="font-black text-[#A78BFA]">{selectedEventModal.teamSizeLabel}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-[#E2E8F0] font-bold">Timing:</span>
                    <span className="font-black">{selectedEventModal.timing}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-[#E2E8F0] font-bold">Registration Fee:</span>
                    <span className="font-black text-[#A78BFA]">
                      {selectedEventModal.id === 'ideathon' 
                        ? '₹250 / Head (Team Fee: ₹250 × members)' 
                        : '₹250 / Head (Combined Fee — covers all 4 other events)'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[#E2E8F0] font-bold">Awards & Recognition:</span>
                    <span className="font-black text-white text-right">
                      {selectedEventModal.id === 'ideathon'
                        ? 'Exclusive Cash Prize + Certificates For All'
                        : 'Certificates for All Participants'}
                    </span>
                  </div>
                </div>

                {/* Rules & Guidelines */}
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-black tracking-widest text-[#A78BFA] uppercase mb-2">
                    OFFICIAL RULES & GUIDELINES
                  </h4>
                  <ul className="space-y-2 font-body text-xs sm:text-sm text-[#F8FAFC] font-medium">
                    {selectedEventModal.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span className="leading-snug">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-white/10">
                {isClosed ? (
                  <div className="flex-1 py-2.5 px-4 bg-red-950/80 border-2 border-red-500/70 text-red-200 font-heading text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 select-none shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    <span>Registration Closed (Deadline Reached)</span>
                  </div>
                ) : (
                  <a
                    href="https://forms.gle/bKh4n9VG2XUDcrop7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 bg-[#6C63FF] hover:bg-[#554BF0] border-2 border-[#E2E8F0] text-white font-heading text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl shadow-brutal-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <span>Register For {selectedEventModal.name} via Google Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedEventModal(null)}
                  className="py-2.5 px-4 bg-[#0C061A] border border-[#E2E8F0]/30 hover:border-[#E2E8F0] text-white font-heading text-xs sm:text-sm font-bold uppercase rounded-xl transition-all cursor-pointer"
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
