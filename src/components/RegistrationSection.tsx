import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  IndianRupee, 
  Users, 
  MapPin, 
  Calendar, 
  Clock, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Quote,
  Coffee
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../config/constants';
import { useRegistrationCountdown, DISPLAY_DEADLINE_DATE, DISPLAY_DEADLINE_TIME } from '../services/deadlineService';
import { RegistrationCountdown } from './RegistrationCountdown';

export const RegistrationSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const { isClosed } = useRegistrationCountdown();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(GOOGLE_FORM_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenForm = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="py-12 sm:py-24 bg-[#090414] border-b border-[#E2E8F0]/15 scroll-mt-16 relative overflow-hidden">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#6C63FF]/15 blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-4xl w-full px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E2E8F0] border-2 border-[#E2E8F0]/30 bg-[#160B30] px-3.5 py-1.5 shadow-brutal-sm rounded-lg">
            <Sparkles className="h-3.5 w-3.5 text-[#A78BFA]" />
            <span>OFFICIAL REGISTRATION · GOOGLE FORM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            REGISTER FOR <span className="text-[#A78BFA]">IDEAFORGE ' 26</span>
          </h2>

          <p className="text-xs sm:text-base text-[#CBD5E1] max-w-xl mx-auto leading-relaxed">
            All participants and teams can register directly via our official Google Form. Quick, seamless, and mobile-friendly!
          </p>

          {/* Inspirational Event Quote */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160B30]/90 border border-[#E2E8F0]/25 text-xs sm:text-sm font-display font-semibold italic text-[#E2E8F0] shadow-sm">
            <Quote className="w-3.5 h-3.5 text-[#A78BFA] rotate-180 shrink-0" />
            <span>“The best way to predict the future is to create it.”</span>
            <Quote className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
          </div>
        </div>

        {/* Real-time countdown banner */}
        <div className="mb-8">
          <RegistrationCountdown variant="banner" onRegisterClick={handleOpenForm} />
        </div>

        {/* Main Action Registration Card */}
        <div className="border-2 sm:border-4 border-[#E2E8F0]/30 bg-[#160B30] p-5 sm:p-10 rounded-2xl shadow-[0_0_40px_rgba(108,99,255,0.25)] space-y-6 sm:space-y-8">
          
          {/* Card Header & Important Notice */}
          <div className="border-b border-[#E2E8F0]/15 pb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase font-bold text-[#A78BFA] mb-1">
                DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
              </div>
              <h3 className="font-display text-xl sm:text-3xl font-black uppercase text-white tracking-tight">
                OFFICIAL GOOGLE REGISTRATION FORM
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
              <div className="inline-flex items-center justify-center gap-2 bg-[#0C061A] border-2 border-emerald-500/50 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>₹250 / Head · Common Fee</span>
              </div>
              <div className="inline-flex items-center justify-center gap-1.5 bg-[#0C061A] border-2 border-amber-400/50 px-3 py-1.5 rounded-xl font-mono text-xs font-bold text-amber-300">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                <span>Refreshments will be provided</span>
              </div>
            </div>
          </div>

          {/* Key Event Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#0C061A] border border-[#E2E8F0]/20 flex flex-col items-center justify-center text-center">
              <Calendar className="w-4 h-4 text-[#A78BFA] mb-1" />
              <span className="text-[#94A3B8] text-[10px]">EVENT DATE</span>
              <span className="font-bold text-white text-xs sm:text-sm">14/10/2026</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0C061A] border border-[#E2E8F0]/20 flex flex-col items-center justify-center text-center">
              <Clock className="w-4 h-4 text-[#A78BFA] mb-1" />
              <span className="text-[#94A3B8] text-[10px]">DEADLINE</span>
              <span className="font-bold text-white text-xs sm:text-sm">{DISPLAY_DEADLINE_DATE}</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0C061A] border border-[#E2E8F0]/20 flex flex-col items-center justify-center text-center">
              <Users className="w-4 h-4 text-[#A78BFA] mb-1" />
              <span className="text-[#94A3B8] text-[10px]">TEAM SIZE</span>
              <span className="font-bold text-white text-xs sm:text-sm">1 – 4 Members</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0C061A] border border-[#E2E8F0]/20 flex flex-col items-center justify-center text-center">
              <MapPin className="w-4 h-4 text-[#A78BFA] mb-1" />
              <span className="text-[#94A3B8] text-[10px]">VENUE</span>
              <span className="font-bold text-white text-xs sm:text-sm">Abinantham Hall</span>
            </div>
          </div>

          {/* Step Instructions */}
          <div className="bg-[#0C061A] p-4 sm:p-6 rounded-xl border border-[#E2E8F0]/20 space-y-3">
            <h4 className="font-heading font-black text-sm uppercase text-white tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A78BFA]" />
              <span>3 Simple Steps to Complete Registration:</span>
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#6C63FF] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <span>Click the <strong>Open Google Form</strong> button below.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#6C63FF] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <span>Fill in your participant and college details (Ideathon 1–4 members or solo entry for other events).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#6C63FF] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </span>
                <span>Complete the registration payment (₹250/head) using the UPI ID inside the form and submit! <strong>Refreshments will be provided</strong> to all registered participants.</span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-xl bg-[#6C63FF] hover:bg-[#554BF0] border-2 border-[#E2E8F0] font-heading text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-brutal-purple cursor-pointer transition-all active:scale-98 flex items-center justify-center gap-2.5 text-center"
            >
              <span>REGISTER VIA OFFICIAL GOOGLE FORM</span>
              <ExternalLink className="w-5 h-5 shrink-0" />
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="py-4 px-6 rounded-xl bg-[#0C061A] hover:bg-[#201042] border-2 border-[#E2E8F0]/30 hover:border-[#E2E8F0] font-heading text-sm font-bold uppercase tracking-wider text-[#CBD5E1] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-brutal-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#A78BFA]" />}
              <span>{copied ? 'Link Copied!' : 'Copy Form Link'}</span>
            </button>
          </div>

          {/* Form URL helper text */}
          <div className="text-center pt-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#A78BFA] hover:text-white underline break-all inline-flex items-center gap-1"
            >
              <span>{GOOGLE_FORM_URL}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
