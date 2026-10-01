import React from 'react';
import { Phone, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const helpDeskContacts = [
    {
      name: 'H. Heni Devinson',
      role: 'STUDENT COORDINATOR',
      qualification: 'B.E Cse',
      phone: '7708269340',
      phoneDisplay: '7708269340'
    },
    {
      name: 'M. Harish',
      role: 'STUDENT COORDINATOR',
      qualification: 'Student -B.E Cse',
      phone: '9894469878',
      phoneDisplay: '9894469878'
    }
  ];

  return (
    <section id="contact" className="relative py-8 sm:py-16 border-t-2 border-[#E2E8F0]/15 scroll-mt-20 bg-[#0B0714] overflow-hidden">
      <div className="max-w-4xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 border-2 border-[#E2E8F0]/40 bg-[#160B30] px-3 py-1 text-[10px] sm:text-xs font-mono tracking-widest text-[#A78BFA] uppercase rounded-md shadow-brutal-sm mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#E2E8F0]" />
            <span>DIRECT STUDENT DESK</span>
          </div>
          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-2 break-words">
            HELP <span className="text-[#A78BFA]">DESK</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#CBD5E1]">
            For registrations, event queries, or gate pass assistance, reach out directly to our student coordinators.
          </p>
        </div>

        {/* Help Desk Contact Cards (Only Student Coordinators, Abinantham Hall Card Removed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6 max-w-2xl mx-auto">
          {helpDeskContacts.map((contact, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-[#E2E8F0]/30 hover:border-[#A78BFA] transition-all bg-[#160B30] text-center group shadow-brutal flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0C061A] border-2 border-[#E2E8F0]/40 flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(108,99,255,0.3)]">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#A78BFA]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#A78BFA] uppercase block mb-1 tracking-wider">
                  {contact.role}
                </span>
                <h3 className="font-display text-base sm:text-xl font-black text-white mb-0.5">
                  {contact.name}
                </h3>
                <p className="text-xs font-mono text-[#CBD5E1] mb-5">
                  {contact.qualification}
                </p>
              </div>
              
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#0C061A] hover:bg-[#6C63FF] border-2 border-[#E2E8F0]/40 hover:border-[#E2E8F0] font-mono text-xs sm:text-sm font-bold text-white transition-all shadow-brutal-sm cursor-pointer group-hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
