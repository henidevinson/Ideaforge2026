import React from 'react';
import { ArrowRight, Sparkles, Clock, IndianRupee, Layers, Quote, Calendar, ExternalLink, Coffee } from 'lucide-react';
import { RegistrationCountdown } from './RegistrationCountdown';
import { GOOGLE_FORM_URL } from '../config/constants';

interface HeroProps {
  onRegisterClick?: () => void;
  onViewEventsClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onRegisterClick, 
  onViewEventsClick,
}) => {
  return (
    <section id="home" className="relative pt-6 pb-10 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 overflow-hidden">
      {/* Ambient Radial Lights */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6C63FF]/20 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#4F46E5]/20 blur-[110px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1750px] mx-auto px-2.5 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
        
        {/* CSE Department Presents in Stacked Silver/Purple Badge */}
        <div className="inline-flex flex-col items-center justify-center mb-3 sm:mb-5 max-w-full">
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border-2 border-[#E2E8F0]/40 bg-[#160B30] purple-glow-sm shadow-[0_0_20px_rgba(226,232,240,0.2)]">
            <img
              src="/brand/logo.png"
              alt="IDEAFORGE"
              className="w-3.5 h-3.5 sm:w-5 sm:h-5 object-contain rounded-full border border-[#E2E8F0]/50 bg-[#0C061A] shrink-0"
              referrerPolicy="no-referrer"
            />
            <span className="font-heading text-[11px] min-[360px]:text-xs sm:text-sm font-extrabold tracking-wider sm:tracking-widest uppercase text-white">
              DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
            </span>
          </div>
          <div className="mt-1.5 inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#0C061A]/90 border border-[#A78BFA]/50 font-mono text-[10px] min-[360px]:text-xs font-black tracking-[0.2em] text-[#A78BFA] uppercase shadow-sm">
            <span>— PRESENTS —</span>
          </div>
        </div>

        {/* Main Giant Headline */}
        <h1 className="font-ideaforge-old text-4xl min-[360px]:text-5xl min-[420px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-2 sm:mb-4 uppercase leading-none drop-shadow-[0_5px_25px_rgba(108,99,255,0.4)] break-words">
          IDEAFORGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#F8FAFC] to-[#CBD5E1]">' 26</span>
        </h1>

        {/* Official Event Quote */}
        <div className="max-w-3xl mx-auto mb-3.5 sm:mb-7 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-[#160B30] border-2 border-[#E2E8F0]/35 shadow-brutal flex items-center justify-center gap-2 sm:gap-3">
          <Quote className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#A78BFA] shrink-0 rotate-180" />
          <p className="font-heading text-xs min-[360px]:text-sm sm:text-lg md:text-xl font-black italic tracking-normal text-white uppercase text-center leading-snug">
            “The best way to predict the future is to create it.”
          </p>
          <Quote className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#A78BFA] shrink-0" />
        </div>

        {/* Key Metadata in Silver Typography */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 font-heading text-xs min-[360px]:text-sm sm:text-lg font-black uppercase text-white mb-4 sm:mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#160B30] border-2 border-[#A78BFA] px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg shadow-brutal-sm text-[#A78BFA]">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78BFA] shrink-0" />
            <span className="text-white">EVENT DATE: <strong className="text-[#A78BFA] font-black">14/10/2026</strong></span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0C061A] border-2 border-[#E2E8F0]/30 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg shadow-brutal-sm">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#A78BFA] animate-pulse shrink-0" />
            <span>VENUE: ABINANTHAM HALL</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0C061A] border-2 border-[#E2E8F0]/30 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg shadow-brutal-sm">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78BFA] shrink-0" />
            <span>TECHNICAL & NON-TECHNICAL</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0C061A] border-2 border-[#E2E8F0]/30 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg shadow-brutal-sm">
            <IndianRupee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78BFA] shrink-0" />
            <span>REGISTRATION FEE: <strong className="text-white font-black">₹250 / HEAD</strong> (COMMON FEE)</span>
          </div>
          {/* Refreshments Provided Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#160B30] border-2 border-emerald-400/60 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg shadow-brutal-sm text-emerald-300 font-black">
            <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
            <span>Refreshments will be provided</span>
          </div>
        </div>

        {/* REGISTRATION DEADLINE LIVE COUNTDOWN */}
        <RegistrationCountdown 
          variant="hero" 
          onRegisterClick={() => window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')}
        />

        {/* Live Event Sprint Indicator Banner */}
        <div className="max-w-3xl mx-auto mb-4 sm:mb-8 p-3 sm:p-3.5 rounded-xl bg-[#160B30] border-2 border-[#E2E8F0]/30 flex flex-col min-[480px]:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs purple-glow-sm shadow-[0_0_20px_rgba(108,99,255,0.2)]">
          <div className="flex items-center gap-2 sm:gap-2.5 text-center min-[480px]:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A78BFA] animate-pulse shadow-[0_0_10px_#A78BFA] shrink-0" />
            <span className="font-heading text-xs sm:text-sm font-black uppercase tracking-wider text-white">
              IDEATHON: <strong className="text-[#A78BFA]">8-HR SPRINT</strong> · OTHER EVENTS: <strong className="text-white">TIME ON THE SPOT</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-black text-[#E2E8F0] shrink-0">
            <span>CASH PRIZES & CERTIFICATES</span>
          </div>
        </div>

        {/* Direct Action CTAs */}
        <div className="flex flex-col min-[440px]:flex-row items-stretch min-[440px]:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-5 sm:mb-10">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-[440px]:w-auto px-5 py-3.5 sm:px-8 sm:py-4 font-heading text-sm sm:text-lg font-black uppercase tracking-wider text-white bg-[#6C63FF] hover:bg-[#554BF0] border-2 border-[#E2E8F0] rounded-xl transition-all duration-200 purple-glow hover:purple-glow-lg flex items-center justify-center gap-2 group cursor-pointer active:scale-98 shadow-brutal-purple text-center"
          >
            <span>REGISTER NOW</span>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform shrink-0" />
          </a>

          <button
            onClick={() => {
              if (onViewEventsClick) {
                onViewEventsClick();
              } else {
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full min-[440px]:w-auto px-5 py-3.5 sm:px-8 sm:py-4 font-heading text-sm sm:text-lg font-black uppercase tracking-wider text-white bg-[#160B30] hover:bg-[#231248] border-2 border-[#E2E8F0]/60 hover:border-[#E2E8F0] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-brutal-sm"
          >
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA] shrink-0" />
            <span>VIEW EVENTS</span>
          </button>
        </div>

        {/* Subtle decorative circuit bar */}
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-3 opacity-80">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#E2E8F0]/50" />
          <div className="w-2 h-2 rounded-full border-2 border-[#E2E8F0] bg-[#160B30]" />
          <span className="text-[11px] sm:text-sm tracking-widest uppercase font-mono font-bold text-white">DEPARTMENT OF CSE</span>
          <div className="w-2 h-2 rounded-full border-2 border-[#E2E8F0] bg-[#160B30]" />
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#E2E8F0]/50" />
        </div>
      </div>
    </section>
  );
};
