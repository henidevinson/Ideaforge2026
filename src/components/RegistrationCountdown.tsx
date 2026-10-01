import React from 'react';
import { useRegistrationCountdown, DISPLAY_DEADLINE_DATE, DISPLAY_DEADLINE_TIME } from '../services/deadlineService';
import { Clock, ShieldAlert, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../config/constants';

interface RegistrationCountdownProps {
  variant?: 'hero' | 'banner' | 'compact';
  onRegisterClick?: () => void;
}

export const RegistrationCountdown: React.FC<RegistrationCountdownProps> = ({
  variant = 'hero',
  onRegisterClick,
}) => {
  const { days, hours, minutes, seconds, isClosed } = useRegistrationCountdown();

  const padZero = (n: number) => String(n).padStart(2, '0');

  // Closed State UI
  if (isClosed) {
    if (variant === 'hero' || variant === 'compact') {
      return (
        <div className="w-full max-w-2xl mx-auto my-3 sm:my-5 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#240812] border-2 sm:border-3 border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.4)] animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-900/60 border-2 border-red-400 flex items-center justify-center text-red-200 shrink-0 shadow-brutal-sm">
                <ShieldAlert className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                  <span className="font-mono text-[9px] min-[360px]:text-[10px] font-black uppercase text-red-300 bg-red-950 px-2 py-0.5 rounded border border-red-500/50">
                    REGISTRATION CLOSED
                  </span>
                  <span className="font-mono text-[9.5px] min-[360px]:text-[10.5px] text-white/90 font-bold">
                    DEADLINE: {DISPLAY_DEADLINE_DATE} ({DISPLAY_DEADLINE_TIME})
                  </span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-black uppercase tracking-tight text-white mt-1">
                  THE REGISTRATION DEADLINE HAS PASSED
                </h4>
                <p className="font-body text-xs text-red-200/90 mt-0.5">
                  Registration is closed. No new participants or teams can register.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Banner variant (for Registration section)
    return (
      <div className="w-full my-4 p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#280814] via-[#1A050D] to-[#0C0206] border-2 sm:border-3 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)] text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-900/50 border-2 border-red-500 flex items-center justify-center text-red-400 mx-auto shadow-brutal">
          <ShieldAlert className="w-8 h-8 animate-pulse text-red-400" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest text-red-300 bg-red-950/90 border border-red-500/50 px-3.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            <span>REGISTRATION DEADLINE ACHIEVED · REGISTRATION IS CLOSED</span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight">
            ONLINE REGISTRATIONS ARE CLOSED
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#E2E8F0] max-w-xl mx-auto leading-relaxed">
            The official registration deadline of <strong className="text-white font-mono bg-red-950/80 px-1.5 py-0.5 rounded border border-red-500/40">{DISPLAY_DEADLINE_DATE} ({DISPLAY_DEADLINE_TIME})</strong> has been achieved. As per official departmental guidelines, no further registrations can be processed.
          </p>
        </div>
      </div>
    );
  }

  // Active Countdown UI with Real-time Animation
  return (
    <div className="w-full max-w-2xl mx-auto my-3 sm:my-5">
      <div className="relative p-3.5 sm:p-5 rounded-2xl bg-gradient-to-b from-[#1C0D3A] via-[#14082D] to-[#0C051B] border-2 sm:border-3 border-[#A78BFA] shadow-[0_0_35px_rgba(167,139,250,0.35)] overflow-hidden">
        
        {/* Glow ambient accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#6C63FF]/30 blur-2xl rounded-full pointer-events-none" />

        {/* Top Header Badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#A78BFA] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#E2E8F0]">
              OFFICIAL REGISTRATION CLOSES IN
            </span>
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C63FF] hover:bg-[#554BF0] border border-[#E2E8F0] font-heading text-[10px] sm:text-xs font-black uppercase tracking-wider text-white transition-all cursor-pointer shadow-brutal-sm"
          >
            <span>REGISTER NOW</span>
            <ExternalLink className="w-3 h-3 text-white" />
          </a>
        </div>

        {/* 4 Flip Counter Cards */}
        <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-3 pt-3">
          
          {/* Days */}
          <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-[#0B051C] border border-[#E2E8F0]/25 shadow-inner">
            <span className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl font-black text-white leading-none tracking-tight">
              {padZero(days)}
            </span>
            <span className="font-mono text-[9px] min-[360px]:text-[10px] sm:text-xs font-bold uppercase text-[#CBD5E1] tracking-wider mt-1">
              DAYS
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-[#0B051C] border border-[#E2E8F0]/25 shadow-inner">
            <span className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl font-black text-white leading-none tracking-tight">
              {padZero(hours)}
            </span>
            <span className="font-mono text-[9px] min-[360px]:text-[10px] sm:text-xs font-bold uppercase text-[#CBD5E1] tracking-wider mt-1">
              HOURS
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-[#0B051C] border border-[#E2E8F0]/25 shadow-inner">
            <span className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl font-black text-[#A78BFA] leading-none tracking-tight">
              {padZero(minutes)}
            </span>
            <span className="font-mono text-[9px] min-[360px]:text-[10px] sm:text-xs font-bold uppercase text-[#A78BFA] tracking-wider mt-1">
              MINUTES
            </span>
          </div>

          {/* Seconds - Live Ticking Pulsing Animation */}
          <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-[#0B051C] border-2 border-emerald-500/70 shadow-[0_0_18px_rgba(16,185,129,0.35)] relative overflow-hidden transition-all">
            <div className="absolute inset-x-0 top-0 h-1 bg-emerald-400 animate-pulse" />
            <span 
              key={seconds}
              className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl font-black text-emerald-400 leading-none tracking-tight animate-in zoom-in-90 duration-150"
            >
              {padZero(seconds)}
            </span>
            <span className="font-mono text-[9px] min-[360px]:text-[10px] sm:text-xs font-bold uppercase text-emerald-300 tracking-wider mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              SECONDS
            </span>
          </div>
        </div>

        {/* Footer Subtext */}
        <div className="relative z-10 mt-3 pt-2 sm:pt-2.5 border-t border-white/10 text-center flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
          <p className="font-heading text-[11px] sm:text-xs text-[#CBD5E1] uppercase font-bold tracking-wide">
            Official Deadline: <strong className="text-white">{DISPLAY_DEADLINE_DATE}</strong> · Registration closes once timer expires
          </p>
        </div>

      </div>
    </div>
  );
};
