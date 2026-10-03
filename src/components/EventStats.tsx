import React from 'react';
import { MapPin, Layers, IndianRupee, Trophy } from 'lucide-react';

export const EventStats: React.FC = () => {
  const cards = [
    {
      icon: MapPin,
      title: 'VENUE',
      subtitle: 'Abinandham Hall',
      description: 'Campus Auditorium, Department of Computer Science & Engineering'
    },
    {
      icon: Layers,
      title: '2 SECTIONS',
      subtitle: 'Tech & Non-Tech',
      description: 'Ideathon, Prompt Engg, Pitch, Videography, Free Fire'
    },
    {
      icon: IndianRupee,
      title: 'REGISTRATION',
      subtitle: '₹250 / Head (Common)',
      description: 'Flat ₹250 per participant across all registrations'
    },
    {
      icon: Trophy,
      title: 'AWARDS',
      subtitle: 'Prizes & Certificates',
      description: 'Exciting cash prizes, trophies & official merit credentials'
    }
  ];

  return (
    <section className="relative z-10 py-4 sm:py-10 mb-6 sm:mb-16 max-w-[1750px] mx-auto px-3 sm:px-6 lg:px-12 xl:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="border-2 border-[#E2E8F0]/30 bg-[#160B30] p-3 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E2E8F0] shadow-brutal group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent group-hover:via-[#A78BFA] transition-all" />

              <div>
                <div className="flex items-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-[#0C061A] border-2 border-[#E2E8F0]/40 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-[#E2E8F0] transition-all duration-300 shadow-[0_0_15px_rgba(226,232,240,0.2)] shrink-0">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#A78BFA]" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-xs font-mono font-bold tracking-wider text-[#A78BFA] uppercase block">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xs sm:text-xl font-black text-white tracking-wide uppercase leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs sm:text-xl font-heading font-black text-white mb-1 uppercase">
                  {card.subtitle}
                </div>
              </div>

              <p className="font-body text-[11px] sm:text-sm text-[#CBD5E1] leading-snug font-medium line-clamp-2 sm:line-clamp-none mt-1">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
