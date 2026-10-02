import { FaqItem, EventItem } from '../types';

export const EVENT_DETAILS = {
  name: "IDEAFORGE ' 26",
  shortName: "IDEAFORGE '26",
  tagline: '“The best way to predict the future is to create it.”',
  quote: '“The best way to predict the future is to create it.”',
  organizer: 'Department of Computer Science and Engineering',
  venue: 'Abinantham Hall',
  eventDate: '14/10/2026',
  eventDateFormatted: 'October 14, 2026',
  eventDateWithDay: 'October 14, 2026 (Wednesday)',
  registrationDeadline: '12/10/2026',
  ideathonDuration: '8 Hours Continuous Sprint',
  ideathonTime: '9:00 AM – 5:00 PM',
  feePerParticipant: 250,
  otherEventsCombinedFee: 250,
  domainCount: 8,
  hod: 'Mrs. S. Renugadevi',
  facultyCoordinators: [
    { name: 'V. Gunasundhari (AP/CSE)', role: 'Faculty Coordinator', designation: 'Assistant Professor, Department of CSE' },
    { name: 'R. Sabareeswari (AP/CSE)', role: 'Faculty Coordinator', designation: 'Assistant Professor, Department of CSE' }
  ],
  studentCoordinators: [
    { name: 'H. Heni Devinson', role: 'Student Coordinator', designation: 'BE CSE', phone: '7708269340' },
    { name: 'M. Harish', role: 'Student Coordinator', designation: 'BE CSE', phone: '9894469878' }
  ],
  prizesNotice: 'Merit Certificates & Cash Prizes will be awarded to top performers in every event!'
};

export const ALL_EVENTS: EventItem[] = [
  // Technical Events
  {
    id: 'ideathon',
    name: 'Ideathon',
    category: 'Technical',
    tagline: '8-Hour Continuous Sprint across 8 Specialized Domains',
    timing: '9:00 AM – 5:00 PM',
    timingNote: '8 Hours Continuous Sprint (Problem Statements on the spot at 9:00 AM)',
    minMembers: 1,
    maxMembers: 4,
    teamSizeLabel: '1 to 4 Members',
    description: 'An intensive 8-hour continuous hack-sprint where teams design, build, and prototype solutions addressing real-world problems. Official problem statements will be revealed directly on the spot under your chosen domain track.',
    highlights: [
      '8 continuous hours of focused development',
      '8 official engineering domains available',
      'Problem statements released on the spot at 9:00 AM',
      'Cash prizes, trophies & official merit certificates'
    ],
    rules: [
      'Team size: 1 to 4 members.',
      'Problem statements are officially given on the spot at 9:00 AM sharp.',
      'Challenge themes span 8 CSE domains; real-world problems revealed live on the spot.',
      'Working software prototypes, simulations, or POCs must be demonstrated to the jury.'
    ],
    hasDomains: true
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'Technical',
    tagline: 'Mastering LLMs, Generative AI & Precision Prompting',
    timing: 'Time Shared On The Spot',
    timingNote: 'Time will be shared on the spot by event coordinators',
    minMembers: 1,
    maxMembers: 1,
    teamSizeLabel: 'Solo Registration (Combined Fee: ₹250)',
    description: 'Put your prompt craft to the test! Formulate optimal system prompts, few-shot examples, and chain-of-thought instructions to solve complex algorithmic, logical, and creative AI challenges.',
    highlights: [
      'Solo participant registration (combined fee ₹250 covers all 4 other events)',
      'Hands-on generative AI and LLM benchmarking',
      'Time schedule announced on the spot at Abinantham Hall',
      'Cash prizes & certificates for top AI prompt architects'
    ],
    rules: [
      'Solo registration: Each participant registers individually.',
      'Registration Fee: ₹250 combined fee (covers any or all 4 other events).',
      'Exact challenge rounds and timing will be shared on the spot.',
      'Evaluation based on output accuracy, latency, and token efficiency.'
    ],
    hasDomains: false
  },
  {
    id: 'business-pitch',
    name: 'Business Pitch',
    category: 'Technical',
    tagline: 'Transform Innovations into Viable Market Startups',
    timing: 'Time Shared On The Spot',
    timingNote: 'Time will be shared on the spot by event coordinators',
    minMembers: 1,
    maxMembers: 1,
    teamSizeLabel: 'Solo Registration (Combined Fee: ₹250)',
    description: 'Pitch your breakthrough tech product or venture concept to an expert jury. Present your market analysis, business model canvas, financial viability, and go-to-market strategy.',
    highlights: [
      'Solo participant registration (combined fee ₹250 covers all 4 other events)',
      'Venture evaluation by academic and industry experts',
      'Time schedule announced on the spot at Abinantham Hall',
      'Exciting cash prizes and certificates for winning pitches'
    ],
    rules: [
      'Solo registration: Each participant registers individually.',
      'Registration Fee: ₹250 combined fee (covers any or all 4 other events).',
      'Exact session timings will be shared on the spot.',
      'Presentation deck should cover problem, market, revenue model, and scalability.'
    ],
    hasDomains: false
  },

  // Non-Technical Events
  {
    id: 'videography',
    name: 'Videography',
    category: 'Non-Technical',
    tagline: 'Cinematic Visual Storytelling & Reel Production',
    timing: 'Time Shared On The Spot',
    timingNote: 'Time will be shared on the spot by event coordinators',
    minMembers: 1,
    maxMembers: 1,
    teamSizeLabel: 'Solo Registration (Combined Fee: ₹250)',
    description: 'Showcase your camera eye, visual framing, color grading, and editing magic. Capture compelling cinematic snippets, reels, or themed short visual narratives within the campus.',
    highlights: [
      'Solo participant registration (combined fee ₹250 covers all 4 other events)',
      'Campus theme / prompt announced on the spot',
      'Time schedule announced on the spot at Abinantham Hall',
      'Cash prizes & certificates awarded to best visual creators'
    ],
    rules: [
      'Solo registration: Each participant registers individually.',
      'Registration Fee: ₹250 combined fee (covers any or all 4 other events).',
      'Exact theme, guidelines, and submission time will be shared on the spot.',
      'Original cinematography; basic editing tools and mobile/DSLR allowed.'
    ],
    hasDomains: false
  },
  {
    id: 'e-games',
    name: 'E-Games - Free Fire',
    category: 'Non-Technical',
    tagline: 'High-Octane Mobile Esports Battle Royale',
    timing: 'Time Shared On The Spot',
    timingNote: 'Time will be shared on the spot by event coordinators',
    minMembers: 1,
    maxMembers: 1,
    teamSizeLabel: 'Solo Registration (Combined Fee: ₹250)',
    description: 'Drop onto the virtual battleground for intense survival, rapid tactical firefights, and clutch combat in Garena Free Fire. Prove your supremacy and claim the championship trophy.',
    highlights: [
      'Solo participant registration (combined fee ₹250 covers all 4 other events)',
      'Official custom tournament room lobbies',
      'Time schedule announced on the spot at Abinantham Hall',
      'Cash prizes and certificates for top podium finishers'
    ],
    rules: [
      'Solo registration: Each participant registers individually.',
      'Registration Fee: ₹250 combined fee (covers any or all 4 other events).',
      'Custom room ID and match start time will be shared on the spot.',
      'Only mobile devices permitted for gaming (strictly no emulators, hacks, or scripts).'
    ],
    hasDomains: false
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'CHOOSE REGISTRATION TRACK',
    description: 'Select between Track 1: Ideathon (Exclusive 8-hour sprint for teams of 1 to 4 members) OR Track 2: Other Events (Solo registration with multi-event access).'
  },
  {
    step: '02',
    title: 'SOLO OR TEAM REGISTRATION',
    description: 'Other events: Solo register for ₹250 combined fee and select any or all 4 events. Ideathon: Register 1 to 4 members at ₹250 per participant.'
  },
  {
    step: '03',
    title: 'IDEATHON VS OTHER EVENTS',
    description: 'Ideathon sprint participants focus exclusively on the 8-hour sprint. Other events participants can enter Prompt Engg, Business Pitch, Videography, and Free Fire!'
  },
  {
    step: '04',
    title: 'REPORT AT ABINANTHAM HALL',
    description: 'Arrive at Abinantham Hall with your digital entry pass. Ideathon starts at 9:00 AM; remaining event timings are shared on the spot.'
  },
  {
    step: '05',
    title: 'COMPETE & PROTOTYPE',
    description: 'Sprint through the 8-hour continuous ideathon or battle across rounds in Prompt Engineering, Business Pitch, Videography, and Free Fire.'
  },
  {
    step: '06',
    title: 'WIN CASH PRIZES & CERTIFICATES',
    description: 'Compete for exciting cash prizes, prestigious trophies, and official merit credentials for all participants!'
  }
];

export const CONFIRMED_RULES = [
  "Event name: IDEAFORGE ' 26 organized by the Department of Computer Science & Engineering.",
  'Official Venue: Abinantham Hall, Campus Auditorium.',
  'Registration Fee: Flat ₹250 per head across all events (Ideathon: ₹250/head · All other events combined: ₹250/head).',
  'Ideathon Sprint Track: Exclusive 8-hour continuous hack-sprint (9:00 AM – 5:00 PM). Teams of 1 to 4 members. Problem statements are given live on the spot across 8 domains.',
  'Ideathon Exclusivity: Participants registered for the Ideathon cannot participate in remaining events due to the intensive 8-hour continuous sprint.',
  'Other Events Solo Registration: Solo registration allows each participant to select any or all 4 other events (Prompt Engineering, Business Pitch, Videography, E-Games) for a single combined fee of ₹250 per head. Can register from any device.',
  'Multi-Event Participation: Since timings for remaining events are shared on the spot at Abinantham Hall without clashes, participants can easily compete in all selected events.',
  'Refreshments will be provided to all registered participants.',
  'Certificates and existing cash prizes will be provided to participants and top winners in all events.'
];

export const ANNOUNCEMENT_PENDING_ITEMS = [
  {
    label: 'Venue',
    status: 'Abinantham Hall'
  },
  {
    label: 'Registration Fee',
    status: '₹250 / Head (Flat Common Fee)'
  },
  {
    label: 'Ideathon Time',
    status: '9:00 AM – 5:00 PM (8-Hr Sprint)'
  },
  {
    label: 'Other Events Time',
    status: 'Shared On The Spot'
  },
  {
    label: 'Refreshments',
    status: 'Provided To All Participants'
  },
  {
    label: 'Prizes & Rewards',
    status: 'Certificates & Cash Prizes'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What is the registration fee?",
    answer: "The registration fee is a flat ₹250 per head! For all other events combined (Prompt Engineering, Business Pitch, Videography, and E-Games), the fee is ₹250 per head, allowing you to access any or all of these events! For the Ideathon continuous sprint, the fee is ₹250 per head (1 Member = ₹250, 2 Members = ₹500, 3 Members = ₹750, 4 Members = ₹1,000)."
  },
  {
    question: "Will refreshments be provided?",
    answer: "Yes! Refreshments will be provided to all registered participants during the symposium."
  },
  {
    question: "Can I select all 4 other events in a single registration?",
    answer: "Yes! In the Other Events track, you solo register for yourself from any device, and you can select any or all 4 events (Prompt Engineering, Business Pitch, Videography, and E-Games - Free Fire) for the same single combined fee of ₹250 per head!"
  },
  {
    question: "Can an Ideathon participant participate in the other events?",
    answer: "No. Because the Ideathon is an intensive, non-stop 8-hour continuous sprint (9:00 AM to 5:00 PM), participants registered for the Ideathon cannot participate in the remaining events."
  },
  {
    question: "Can I register from a mobile, tablet, or laptop?",
    answer: "Yes! Registration can be done from any device (laptop, desktop, tablet, or mobile). Simply enter your details, choose your events, and download/print your entry pass."
  },
  {
    question: "What are the two registration tracks available?",
    answer: "Registration is divided into: 1) Ideathon Track (Dedicated 8-hour continuous sprint for teams of 1-4 with 8 domains, problem statement on the spot at 9:00 AM, ₹250/head), and 2) Other Events Track (Solo registration for a combined fee of ₹250 where you can select any or all 4 other events)."
  },
  {
    question: 'Where will the event be held?',
    answer: 'The event will be held at Abinantham Hall, Campus Auditorium. All reporting and gate pass verifications will commence at the reception desk.'
  },
  {
    question: 'How do problem statements work in the Ideathon?',
    answer: 'Official challenge problem statements will be revealed directly on the spot at 9:00 AM on event day! Teams will tackle challenges during the continuous 8-hour sprint.'
  },
  {
    question: 'What are the prizes and awards?',
    answer: 'Certificates will be provided to all verified participants, and exciting cash prizes along with championship trophies will be awarded to the top winners!'
  },
  {
    question: 'Who are the coordinators and help desk contacts?',
    answer: 'CSE HOD: Mrs. S. Renugadevi. Faculty Coordinators: V. Gunasundhari (AP/CSE) and R. Sabareeswari (AP/CSE). Student Help Desk Coordinators: H. Heni Devinson (BE CSE - 7708269340) and M. Harish (BE CSE - 9894469878).'
  }
];

export const CONTACT_INFO = {
  department: 'Department of Computer Science and Engineering',
  eventName: "IDEAFORGE ' 26",
  hod: 'Mrs. S. Renugadevi (HOD / CSE)',
  facultyCoordinators: 'V. Gunasundhari (AP/CSE) & R. Sabareeswari (AP/CSE)',
  studentDesk: [
    { name: 'H. Heni Devinson', role: 'BE CSE', phone: '7708269340' },
    { name: 'M. Harish', role: 'BE CSE', phone: '9894469878' }
  ],
  venue: 'Abinantham Hall, Sasurie College of Engineering',
};

