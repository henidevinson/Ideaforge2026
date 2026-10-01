import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../config/constants';
import { useRegistrationCountdown } from '../services/deadlineService';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { isClosed } = useRegistrationCountdown();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.warn('Exit fullscreen failed:', err);
      });
    }
  };

  // Nav links to page sections
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Guidelines', href: '#guidelines' },
    { label: 'Committee', href: '#committee' },
    { label: 'Register', href: '#register' },
    { label: 'Help Desk', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#0B061A]/95 backdrop-blur-md border-b-2 border-[#E2E8F0]/30 shadow-[0_4px_30px_rgba(108,99,255,0.25)] py-2.5 sm:py-3'
          : 'bg-[#0B061A]/90 backdrop-blur-md py-2.5 sm:py-3.5 border-b-2 border-[#E2E8F0]/20'
      }`}
    >
      <div className="max-w-[1750px] mx-auto px-2.5 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Mark with Website Logo */}
          <a
            href="#home"
            className="flex items-center gap-1.5 sm:gap-3 group cursor-pointer shrink-0 min-w-0"
          >
            <div className="relative flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-lg border-2 border-[#E2E8F0] bg-[#160B30] overflow-hidden shadow-brutal-sm group-hover:border-[#A78BFA] group-hover:shadow-[0_0_15px_rgba(108,99,255,0.4)] transition-all p-0.5 sm:p-1 shrink-0">
              <img
                src="/brand/logo.png"
                alt="IDEAFORGE ' 26 Logo"
                className="h-full w-full object-contain rounded transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/image.png')) {
                    target.src = '/image.png';
                  }
                }}
              />
            </div>
            <span className="font-display text-sm min-[360px]:text-base sm:text-2xl font-black tracking-tight text-white group-hover:text-[#A78BFA] transition-colors leading-none uppercase truncate">
              IDEAFORGE <span className="text-[#A78BFA]">' 26</span>
            </span>
          </a>

          {/* Nav Navigation Links in Bold Barlow Condensed */}
          <nav className="hidden xl:flex items-center gap-5 lg:gap-6 font-heading text-sm lg:text-base uppercase tracking-wider font-extrabold text-[#E2E8F0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="transition-colors relative py-1 cursor-pointer hover:text-white"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit Full Screen' : 'Toggle Full Screen View'}
              className="hidden lg:inline-flex items-center justify-center p-2.5 rounded-lg border-2 border-[#E2E8F0]/30 hover:border-[#E2E8F0] bg-[#160B30] hover:bg-[#201042] text-white transition-all cursor-pointer shadow-brutal-sm"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Direct Google Form Registration Button */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-5 py-2.5 font-heading text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#6C63FF] hover:bg-[#554BF0] border-2 border-[#E2E8F0] rounded-lg transition-all duration-200 purple-glow-sm hover:purple-glow active:scale-95 flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-brutal-purple"
              title="Open Official Google Form"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 min-[360px]:px-3 min-[360px]:py-1.5 font-heading text-[11px] min-[360px]:text-xs font-black uppercase tracking-wider text-white bg-[#6C63FF] border border-[#E2E8F0] rounded-lg flex items-center gap-1 shadow-brutal-sm cursor-pointer active:scale-95 transition-transform"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 min-[360px]:p-2 rounded-lg border-2 border-[#E2E8F0]/40 bg-[#160B30] text-white hover:bg-[#201042] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 min-[360px]:h-5 min-[360px]:w-5" /> : <Menu className="h-4 w-4 min-[360px]:h-5 min-[360px]:w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#E2E8F0]/30 bg-[#0C061A]/95 backdrop-blur-xl px-3.5 sm:px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 max-h-[calc(100dvh-60px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 px-3 rounded-lg font-heading text-base font-extrabold uppercase tracking-wider transition-colors text-white hover:bg-white/5"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-white/10 space-y-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center font-heading text-base font-black uppercase tracking-wider text-white bg-[#6C63FF] border-2 border-[#E2E8F0] rounded-xl shadow-brutal-purple cursor-pointer flex items-center justify-center gap-2"
            >
              <span>REGISTER VIA GOOGLE FORM</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
