import React from 'react';
import { Clock, Calendar, MapPin, Sparkles, Trophy, Coffee, CheckCircle, Code2, Flame } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const milestones = [
    {
      time: '08:30 AM – 09:00 AM',
      title: 'Reporting & Gate Pass Verification',
      desc: 'Teams arrive at Abinantham Hall, verify printed/digital team pass at the reception desk, and collect official badge kit.',
      icon: CheckCircle,
      tag: 'CHECK-IN'
    },
    {
      time: '09:00 AM SHARP',
      title: 'Problem Statements Release & Sprint Kickoff',
      desc: 'Official challenge problem statements revealed on the spot. Teams select their problem within their domain and ideation & development commences.',
      icon: Flame,
      tag: 'ON THE SPOT',
      highlight: true
    },
    {
      time: '01:00 PM – 02:00 PM',
      title: 'Mid-Evaluation & Complimentary Lunch',
      desc: 'Jury members conduct preliminary progress review. Nutritious buffet lunch and refreshments served to all participants.',
      icon: Coffee,
      tag: 'REVIEW & LUNCH'
    },
    {
      time: '04:30 PM',
      title: 'Final Code Freeze & Project Submission',
      desc: 'Continuous sprint concludes. Teams finalize prototypes, commit repositories, and prepare live pitch demonstrations.',
      icon: Code2,
      tag: 'SUBMISSION'
    },
    {
      time: '05:00 PM – 06:00 PM',
      title: 'Grand Valedictory & Prize Distribution',
      desc: 'Announcement of winners, presentation of cash prizes, trophies, and official merit credentials by college dignitaries.',
      icon: Trophy,
      tag: 'VALEDICTORY',
      highlight: true
    }
  ];

  return (
    <section id="schedule" className="py-8 sm:py-20 border-b-2 border-[#E2E8F0]/15 bg-[#090414] relative overflow-hidden">
      <div className="mx-auto max-w-[1750px] w-full px-2.5 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#E2E8F0]/20 pb-3 sm:pb-6 mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#E2E8F0]/40 bg-[#160B30] px-2.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[9px] sm:text-xs font-bold tracking-wider text-[#A78BFA] uppercase rounded-md shadow-brutal-sm mb-2 sm:mb-3">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#E2E8F0]" />
            <span>OFFICIAL TIMINGS & SCHEDULE</span>
          </div>
          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight sm:leading-none break-words">
            EVENT <span className="text-[#A78BFA]">TIMING</span>
          </h2>
          <p className="mt-1.5 sm:mt-3 font-body text-xs sm:text-lg text-[#E2E8F0] max-w-2xl font-medium">
            Official schedule for <strong className="text-white font-black">IDEAFORGE ' 26</strong> on <strong className="text-[#A78BFA] font-black">14/10/2026 (Wednesday)</strong>. Hosted at <strong className="text-white">Abinantham Hall</strong>, Campus Auditorium.
          </p>
        </div>

        {/* Featured Big Timing Block matching Embedathon */}
        <div className="border-2 sm:border-4 border-[#E2E8F0]/35 bg-[#160B30] p-3.5 sm:p-10 shadow-brutal rounded-xl sm:rounded-2xl mb-6 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-3 sm:space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#E2E8F0]/40 bg-[#0C061A] px-2.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[9px] sm:text-xs font-black text-white uppercase tracking-wider rounded-md shadow-brutal-sm">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#A78BFA]" />
                  <span>IDEAFORGE ' 26 TIMING DIRECTIVE</span>
                </div>
                <div className="inline-flex items-center gap-1.5 border-2 border-[#A78BFA] bg-[#0C061A] px-2.5 py-1 sm:px-4 sm:py-1.5 font-mono text-[9px] sm:text-xs font-black text-[#A78BFA] uppercase tracking-wider rounded-md shadow-brutal-sm">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-[#A78BFA]" />
                  <span>EVENT DATE: 14/10/2026</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[9px] sm:text-xs text-[#A78BFA] uppercase tracking-widest block font-bold mb-1">
                  Ideathon Continuous Sprint · 14/10/2026
                </span>
                <div className="font-display text-2xl min-[360px]:text-3xl min-[480px]:text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <span className="text-[#A78BFA]">9:00 AM</span>
                  <span className="text-white/40 text-base sm:text-4xl">TO</span>
                  <span className="text-white">5:00 PM</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1">
                <div className="flex items-center gap-2 sm:gap-3 font-heading text-xs sm:text-base font-bold uppercase text-white bg-[#0C061A] border-2 border-[#E2E8F0]/30 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-brutal-sm">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] shrink-0" />
                  <span>Event Date: 14/10/2026 (Wed)</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 font-heading text-xs sm:text-base font-bold uppercase text-white bg-[#0C061A] border-2 border-[#E2E8F0]/30 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-brutal-sm">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] shrink-0" />
                  <span>Abinantham Hall, Auditorium</span>
                </div>
              </div>

              {/* Remaining events notice */}
              <div className="p-3 rounded-xl bg-[#0C061A] border border-[#A78BFA]/30 text-xs text-[#CBD5E1] space-y-1">
                <div className="font-mono text-white font-bold flex items-center gap-1.5 uppercase">
                  <Clock className="w-3.5 h-3.5 text-[#A78BFA]" /> Remaining Events Timing:
                </div>
                <p>
                  Time will be shared on the spot for Prompt Engineering, Business Pitch, Videography, and E-Games (Free Fire) at the Abinantham Hall coordination desk.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0C061A] border-2 border-[#E2E8F0]/30 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl shadow-brutal space-y-2.5 sm:space-y-4">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#A78BFA] font-black">
                [ COMPETITION TIMINGS ]
              </div>
              <div className="space-y-2 sm:space-y-3 font-heading text-xs sm:text-base uppercase text-white font-bold">
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-0.5 min-[380px]:gap-2 border-b border-white/10 pb-1.5 sm:pb-2">
                  <span className="text-[#94A3B8]">Event Date:</span>
                  <span className="text-[#A78BFA] font-black text-left min-[380px]:text-right">14/10/2026 (Wednesday)</span>
                </div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-0.5 min-[380px]:gap-2 border-b border-white/10 pb-1.5 sm:pb-2">
                  <span className="text-[#94A3B8]">Ideathon Sprint:</span>
                  <span className="text-white font-black text-left min-[380px]:text-right">8 Hours Continuous (9AM - 5PM)</span>
                </div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-0.5 min-[380px]:gap-2 border-b border-white/10 pb-1.5 sm:pb-2">
                  <span className="text-[#94A3B8]">Problem Statements:</span>
                  <span className="text-[#A78BFA] font-black text-left min-[380px]:text-right">On-The-Spot (09:00 AM)</span>
                </div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-0.5 min-[380px]:gap-2 border-b border-white/10 pb-1.5 sm:pb-2">
                  <span className="text-[#94A3B8]">Remaining Events:</span>
                  <span className="text-[#A78BFA] font-black text-left min-[380px]:text-right">Time Shared On The Spot</span>
                </div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-0.5 min-[380px]:gap-2 border-b border-white/10 pb-1.5 sm:pb-2">
                  <span className="text-[#94A3B8]">Venue:</span>
                  <span className="text-white font-black text-left min-[380px]:text-right">Abinantham Hall</span>
                </div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-0.5 min-[380px]:gap-2 border-b border-white/10 pb-1.5 sm:pb-2">
                  <span className="text-[#94A3B8]">Registration Fee:</span>
                  <span className="text-white font-black text-left min-[380px]:text-right">₹250 / Head (Common Fee)</span>
                </div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-0.5 min-[380px]:gap-2">
                  <span className="text-[#94A3B8]">Awards:</span>
                  <span className="text-emerald-400 font-black text-left min-[380px]:text-right">Cash Prizes & Certificates</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Milestone Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2.5 sm:gap-4">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 flex flex-col justify-between transition-all shadow-brutal ${
                  item.highlight
                    ? 'border-[#E2E8F0] bg-[#160B30] shadow-brutal-purple'
                    : 'border-[#E2E8F0]/30 bg-[#0C061A] hover:border-[#E2E8F0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                    <span className="font-mono text-[9px] sm:text-xs uppercase font-black px-2 py-0.5 rounded bg-[#160B30] border border-[#E2E8F0]/40 text-white">
                      {item.tag}
                    </span>
                    <Icon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${item.highlight ? 'text-[#A78BFA]' : 'text-white'}`} />
                  </div>

                  <div className="font-heading text-xs sm:text-sm font-black text-[#A78BFA] mb-0.5 sm:mb-1 uppercase">
                    {item.time}
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-black text-white mb-1 leading-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="font-body text-[11px] sm:text-xs text-[#CBD5E1] leading-snug font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 sm:mt-4 pt-2 sm:pt-2.5 border-t border-white/10 font-mono text-[9px] sm:text-xs text-[#94A3B8] font-bold flex items-center justify-between">
                  <span>STAGE 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
