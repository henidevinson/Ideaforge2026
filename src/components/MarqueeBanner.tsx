import React from 'react';
import { Sparkles, Terminal, Code, Cpu, Shield, Zap, Quote, Clock, Calendar } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    { text: "IDEAFORGE ' 26", icon: Sparkles },
    { text: "EVENT DATE: 14/10/2026 (WEDNESDAY)", icon: Calendar },
    { text: '“THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT.”', icon: Quote },
    { text: 'DEPARTMENT OF CSE', icon: Terminal },
    { text: 'TECHNICAL & NON-TECHNICAL EVENTS', icon: Cpu },
    { text: 'IDEATHON: 8-HOUR CONTINUOUS SPRINT', icon: Code },
    { text: '8 SPECIALIZED DOMAINS · PROBLEMS ON THE SPOT', icon: Zap },
    { text: 'PROMPT ENGINEERING · BUSINESS PITCH', icon: Terminal },
    { text: 'VIDEOGRAPHY · E-GAMES (FREE FIRE)', icon: Shield },
    { text: 'OTHER EVENTS: SOLO REGISTER · ACCESS ALL 4 EVENTS (₹250)', icon: Code },
    { text: 'TIME SHARED ON THE SPOT FOR REMAINING EVENTS', icon: Clock },
    { text: 'COMMON REGISTRATION FEE: ₹250 / HEAD', icon: Code },
    { text: 'IDEATHON TRACK (8-HR CONTINUOUS SPRINT · 1-4 MEMBERS)', icon: Sparkles },
    { text: 'CASH PRIZES & MERIT CERTIFICATES', icon: Sparkles },
  ];

  return (
    <div className="relative w-full bg-[#160B30] border-y-2 border-[#E2E8F0]/30 py-3 sm:py-4 overflow-hidden z-20 shadow-[0_0_30px_rgba(108,99,255,0.3)]">
      {/* Side gradient scrims for clean fade */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#0B0714] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#0B0714] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-slow flex items-center gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 shrink-0">
              <Icon className="w-5 h-5 text-[#A78BFA]" />
              <span className="font-heading text-lg sm:text-2xl font-black tracking-widest text-white uppercase">
                {item.text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E2E8F0] ml-3" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
