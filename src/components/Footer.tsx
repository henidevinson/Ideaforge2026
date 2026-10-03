import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../config/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090414] border-t border-[#E2E8F0]/15 py-8 sm:py-12 overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-2.5 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-[#E2E8F0]/10">
          
          {/* Brand & Department */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-[#E2E8F0]/40 bg-[#160B30] overflow-hidden flex items-center justify-center p-0.5 shadow-[1px_1px_0_#2E185E] shrink-0">
                <img
                  src="/brand/logo.png"
                  alt="IDEAFORGE ' 26 Logo"
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/image.png')) {
                      target.src = '/image.png';
                    }
                  }}
                />
              </div>
              <span className="font-ideaforge-old text-base sm:text-xl font-black tracking-tight text-white">
                IDEAFORGE <span className="text-[#A78BFA]">' 26</span>
              </span>
            </div>
            <p className="text-xs text-[#CBD5E1]">
              Department of Computer Science and Engineering · Venue: Abinandham Hall
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs uppercase tracking-wider font-semibold text-[#CBD5E1]">
            <a href="#home" className="hover:text-white transition-colors py-0.5">Home</a>
            <a href="#about" className="hover:text-white transition-colors py-0.5">About</a>
            <a href="#events" className="hover:text-white transition-colors py-0.5">Events</a>
            <a href="#schedule" className="hover:text-white transition-colors py-0.5">Schedule</a>
            <a href="#guidelines" className="hover:text-white transition-colors py-0.5">Guidelines</a>
            <a href="#committee" className="hover:text-white transition-colors py-0.5">Committee</a>
            <a href="#register" className="hover:text-[#A78BFA] transition-colors py-0.5">Register</a>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#A78BFA] transition-colors py-0.5 inline-flex items-center gap-1 font-bold text-white">
              <span>Google Form</span>
              <ExternalLink className="w-3 h-3 text-[#A78BFA]" />
            </a>
            <a href="#contact" className="hover:text-white transition-colors py-0.5">Help Desk</a>
            <a href="#faq" className="hover:text-white transition-colors py-0.5">FAQ</a>
          </nav>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-xl bg-[#160B30] hover:bg-[#201042] border border-[#E2E8F0]/25 hover:border-[#E2E8F0] text-[#CBD5E1] hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs shadow-[0_0_10px_rgba(226,232,240,0.05)]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#A78BFA]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-5 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#94A3B8] text-center sm:text-left">
          <p>© 2026 IDEAFORGE ' 26 · Department of Computer Science & Engineering · Abinandham Hall. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-[#CBD5E1]">
            <span>“THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT.”</span>
            <span className="hidden sm:inline">·</span>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E2E8F0] hover:text-white underline cursor-pointer"
            >
              OFFICIAL REGISTRATION (GOOGLE FORM)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
