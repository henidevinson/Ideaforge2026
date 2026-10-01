export type EventCategory = 'Technical' | 'Non-Technical';

export type RegistrationTrack = 'Ideathon' | 'Other Events';

export type TechnicalEventName = 'Ideathon' | 'Prompt Engineering' | 'Business Pitch';
export type NonTechnicalEventName = 'Videography' | 'E-Games - Free Fire';
export type EventName = TechnicalEventName | NonTechnicalEventName;

export interface EventItem {
  id: string;
  name: EventName;
  category: EventCategory;
  tagline: string;
  timing: string;
  timingNote: string;
  minMembers: number;
  maxMembers: number;
  teamSizeLabel: string;
  description: string;
  highlights: string[];
  rules: string[];
  hasDomains: boolean;
}

export interface Participant {
  name: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  year: string;
  isTeamLeader: boolean;
}

export interface IdeaDetails {
  problemStatement: string;
  proposedSolution: string;
  technologies: string;
  expectedImpact: string;
}

export interface RegistrationData {
  registrationId: string;
  teamName: string;
  teamSize: number;
  track: RegistrationTrack;
  category?: EventCategory;
  eventName?: string;
  selectedEvents?: string[];
  domain?: string;
  collegeName?: string;
  participants: Participant[];
  idea: IdeaDetails;
  totalFee: number;
  transactionId?: string;
  screenshotUrl?: string;
  screenshotName?: string;
  paymentStatus: 'Pending Integration' | 'Paid' | 'Under Verification' | 'Pending Verification';
  registrationStatus: 'Submitted' | 'Confirmed' | 'Draft' | 'Pending Verification';
  createdAt: string;
}

export interface DomainItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  keyAreas: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
