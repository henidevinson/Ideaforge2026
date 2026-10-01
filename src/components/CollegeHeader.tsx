import React, { useState } from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';

export const CollegeHeader: React.FC = () => {
  const [emblemError, setEmblemError] = useState(false);
  const [founderError, setFounderError] = useState(false);

  return (
    <div className="relative w-full z-40 bg-[#0B051C] border-b-2 border-[#E2E8F0]/30 text-[#F8FAFC] overflow-hidden">
      {/* Background subtle radial lighting & grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(108, 99, 255, 0.35), transparent 70%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff12 1px, transparent 1px), linear-gradient(to bottom, #ffffff12 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative mx-auto max-w-[1750px] w-full px-2.5 xs:px-4 sm:px-6 lg:px-12 xl:px-16 py-2.5 sm:py-3.5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2.5 sm:gap-4 lg:gap-6">
          
          {/* MOBILE / TABLET TOP ROW (< lg): 2-Column Expanding Cards that dynamically fill display width */}
          <div className="w-full grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 lg:hidden">
            {/* Left Expanding Card: Silver Jubilee */}
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 border border-[#E2E8F0]/40 bg-[#160B30]/90 p-2 sm:p-2.5 rounded-lg shadow-brutal-sm w-full min-w-0">
              <div className="relative flex items-center justify-center shrink-0">
                {emblemError ? (
                  <div className="flex flex-col items-center justify-center h-10 w-10 sm:h-12 sm:w-12 border border-[#E2E8F0] bg-[#0C061A] p-0.5 text-center rounded">
                    <Award className="h-3.5 w-3.5 text-[#E2E8F0]" />
                    <span className="font-display text-[8px] sm:text-[9px] font-black text-[#E2E8F0] leading-none">25 Y</span>
                  </div>
                ) : (
                  <img
                    src="/brand/exp25.webp"
                    alt="25 Years of Academic Excellence"
                    className="h-10 xs:h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(226,232,240,0.3)] transition-transform hover:scale-105"
                    onError={() => setEmblemError(true)}
                  />
                )}
              </div>
              <div className="flex flex-col border-l border-[#E2E8F0]/30 pl-2 py-0.5 min-w-0 flex-1">
                <span className="font-mono text-[8px] xs:text-[9px] tracking-wider text-[#A78BFA] font-black uppercase flex items-center gap-1 truncate">
                  <Sparkles className="h-2 w-2 text-[#A78BFA] shrink-0" />
                  SILVER JUBILEE
                </span>
                <span className="font-display text-xs xs:text-sm font-black tracking-tight text-white uppercase leading-tight truncate">
                  25 YEARS
                </span>
                <span className="text-[7px] xs:text-[8px] font-mono font-bold text-[#E2E8F0] tracking-wider uppercase truncate">
                  Academic Excellence
                </span>
              </div>
            </div>

            {/* Right Expanding Card: Founder & Chairman */}
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 border border-[#E2E8F0]/40 bg-[#160B30]/90 p-2 sm:p-2.5 rounded-lg shadow-brutal-sm w-full min-w-0">
              <div className="relative flex h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#E2E8F0] bg-[#0C061A] overflow-hidden">
                {founderError ? (
                  <div className="text-center font-display font-black text-[9px] text-[#E2E8F0]">
                    AMK
                  </div>
                ) : (
                  <img
                    src="/brand/founder-kandasami-circle.png"
                    alt="Sri A. M. Kandaswami"
                    referrerPolicy="no-referrer"
                    className="h-full w-full rounded-full object-cover"
                    onError={() => setFounderError(true)}
                  />
                )}
              </div>
              <div className="flex flex-col text-left min-w-0 flex-1">
                <span className="font-display text-[10px] xs:text-xs font-black tracking-tight text-white leading-tight truncate">
                  Sri A. M. KANDASWAMI
                </span>
                <span className="text-[7px] xs:text-[8px] font-mono text-[#CBD5E1] font-bold uppercase truncate">
                  Founder & Chairman
                </span>
                <a
                  href="https://sasurieengg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[7px] xs:text-[8px] font-mono font-bold text-[#A78BFA] hover:text-white transition-colors truncate mt-0.5"
                >
                  <span>sasurieengg.com</span>
                  <ExternalLink className="h-2 w-2 text-[#E2E8F0] shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP LEFT (>= lg): 25 Years of Excellence Emblem + Silver Jubilee Info */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="relative flex items-center justify-center shrink-0">
              {emblemError ? (
                <div className="flex flex-col items-center justify-center h-20 w-20 border-2 border-[#E2E8F0] bg-[#160B30] shadow-brutal-sm p-1 text-center rounded-sm">
                  <Award className="h-5 w-5 text-[#E2E8F0] animate-pulse" />
                  <span className="font-display text-xs font-black text-[#E2E8F0] leading-tight">25 YRS</span>
                  <span className="text-[7px] font-mono text-[#CBD5E1] uppercase font-bold">EXCELLENCE</span>
                </div>
              ) : (
                <img
                  src="/brand/exp25.webp"
                  alt="25 Years of Academic Excellence"
                  className="h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(226,232,240,0.4)] transition-transform hover:scale-105"
                  onError={() => setEmblemError(true)}
                />
              )}
            </div>

            <div className="flex flex-col border-l-2 border-[#E2E8F0]/30 pl-4 py-1">
              <span className="font-mono text-xs tracking-wider text-[#A78BFA] font-black uppercase flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[#A78BFA]" />
                SILVER JUBILEE
              </span>
              <span className="font-display text-base lg:text-lg font-black tracking-tight text-white uppercase leading-none">
                25 YEARS
              </span>
              <span className="text-[10px] font-mono font-bold text-[#E2E8F0] tracking-wider uppercase mt-0.5">
                Of Academic Excellence
              </span>
            </div>
          </div>

          {/* CENTER: Trust Badge + Institution Title + Accreditation + Location */}
          <div className="flex-1 text-center flex flex-col items-center justify-center w-full px-1">
            {/* Trust Mini-Badge in Silver Metallic Framing */}
            <div className="w-full max-w-xl mx-auto inline-flex items-center justify-center gap-1.5 px-3 py-1 mb-1.5 sm:mb-2 border border-[#E2E8F0]/40 bg-[#160B30] text-[#E2E8F0] rounded shadow-[0_0_10px_rgba(226,232,240,0.1)]">
              <Landmark className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#A78BFA] shrink-0" />
              <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase font-extrabold text-white text-center">
                PONMUDI MUTHUSAMY GOUNDER CHARITABLE TRUST
              </span>
            </div>

            {/* Main Institution Title + Autonomous Badge (Expands dynamically on mobile displays) */}
            <div className="w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-1 sm:mb-1.5">
              <h1 className="font-display text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white uppercase hover:text-[#E2E8F0] transition-colors text-center leading-tight sm:leading-none">
                SASURIE COLLEGE OF ENGINEERING
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 border-2 border-[#E2E8F0] bg-[#2E185E] text-white font-mono text-[9px] xs:text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-brutal-sm rounded shrink-0">
                AUTONOMOUS
              </span>
            </div>

            {/* Accreditations Row in Silver Typography */}
            <div className="w-full flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-[10px] xs:text-xs sm:text-sm text-white font-medium text-center">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-[#A78BFA] shrink-0" />
                <span>
                  Approved by <strong className="text-white font-black">AICTE</strong> & Affiliated to <strong className="text-white font-black">Anna University</strong>
                </span>
              </span>
              <span className="hidden sm:inline text-[#E2E8F0]/40 font-bold">|</span>
              <span className="inline-flex items-center gap-1">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#E2E8F0] shrink-0" />
                <span>
                  Accredited by <strong className="text-white font-black">NAAC 'A' Grade</strong> · ISO 9001:2015
                </span>
              </span>
            </div>

            {/* Location in High Contrast Silver */}
            <div className="w-full mt-1 flex items-center justify-center gap-1 text-[10px] xs:text-[11px] sm:text-xs font-mono font-bold text-[#E2E8F0] text-center">
              <MapPin className="h-3 w-3 text-[#A78BFA] shrink-0" />
              <span>Vijayamangalam, Tirupur - 638 056, Tamil Nadu, India.</span>
            </div>
          </div>

          {/* DESKTOP RIGHT (>= lg): Founder & Chairman Box */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-3 border-2 border-[#E2E8F0]/40 bg-[#160B30] px-4 py-2.5 shadow-brutal rounded-xl">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#E2E8F0] bg-[#0C061A] shadow-[0_0_15px_rgba(226,232,240,0.35)] overflow-visible group">
                {founderError ? (
                  <div className="text-center font-display font-black text-xs leading-none text-[#E2E8F0]">
                    AMK
                  </div>
                ) : (
                  <img
                    src="/brand/founder-kandasami-circle.png"
                    alt="Sri A. M. Kandaswami - Founder & Chairman"
                    referrerPolicy="no-referrer"
                    className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => setFounderError(true)}
                  />
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-sm font-black tracking-tight text-white leading-tight">
                  Sri A. M. KANDASWAMI
                </span>
                <span className="text-[10px] font-mono text-[#E2E8F0] font-black uppercase tracking-wider">
                  FOUNDER & CHAIRMAN
                </span>
                <a
                  href="https://sasurieengg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-[#CBD5E1] hover:text-white transition-colors mt-0.5"
                >
                  <span>sasurieengg.com</span>
                  <ExternalLink className="h-2.5 w-2.5 text-[#E2E8F0]" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Silver Metallic Bottom Border Sheen */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
    </div>
  );
};
