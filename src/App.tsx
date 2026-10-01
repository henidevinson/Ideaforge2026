import React from 'react';
import { BackgroundCanvas } from './components/ui/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { HowItWorks } from './components/HowItWorks';
import { GuidelinesSection } from './components/GuidelinesSection';
import { CommitteeSection } from './components/CommitteeSection';
import { RegistrationSection } from './components/RegistrationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { GOOGLE_FORM_URL } from './config/constants';

export default function App() {
  const handleRegisterClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleViewEventsClick = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEventForRegistration = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0B0714] text-[#FFFFFF] relative selection:bg-[#6C63FF] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Background Interactive Nodes Canvas */}
      <BackgroundCanvas />

      {/* Sticky Navigation Bar */}
      <Navbar onRegisterClick={handleRegisterClick} />

      {/* Main Single-Page Content Stream */}
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero
          onRegisterClick={handleRegisterClick}
          onViewEventsClick={handleViewEventsClick}
        />

        {/* Marquee Ticker Banner */}
        <MarqueeBanner />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Technical & Non-Technical Events Showcase */}
        <EventsSection
          onSelectEventForRegistration={handleSelectEventForRegistration}
        />

        {/* 4. Official Event Timing & Schedule */}
        <ScheduleSection />

        {/* 5. How It Works Progression Flow */}
        <HowItWorks />

        {/* 6. Rules & Official Guidelines */}
        <GuidelinesSection />

        {/* 7. Organizing Committee & Leadership */}
        <CommitteeSection />

        {/* 8. Official Registration Section (Direct Google Form) */}
        <RegistrationSection />

        {/* 9. Help Desk (Direct Student Coordinators & Venue Desk) */}
        <ContactSection />

        {/* 10. Event FAQs (Placed next to Help Desk) */}
        <FaqSection />
      </main>

      {/* 11. Official Footer */}
      <Footer />
    </div>
  );
}
