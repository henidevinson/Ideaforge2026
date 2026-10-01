import { useState, useEffect } from 'react';

const DEADLINE_STORAGE_KEY = 'ideaforge_registration_deadline_v2';
const SIMULATED_CLOSED_KEY = 'ideaforge_simulated_closed';

// Target Deadline: 12/10/2026 (October 12, 2026 at 23:59:59)
export const DEFAULT_DEADLINE_ISO = '2026-10-12T23:59:59';
export const DISPLAY_DEADLINE_DATE = '12/10/2026';
export const DISPLAY_DEADLINE_TIME = '11:59:59 PM';

export interface TimeRemaining {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isClosed: boolean;
  deadlineDisplay: string;
}

export function getDeadlineDate(): Date {
  try {
    const custom = localStorage.getItem(DEADLINE_STORAGE_KEY);
    if (custom) {
      const d = new Date(custom);
      if (!isNaN(d.getTime())) return d;
    }
  } catch (e) {
    console.error('Error reading custom deadline:', e);
  }
  return new Date(DEFAULT_DEADLINE_ISO);
}

export function isSimulatedClosed(): boolean {
  try {
    return localStorage.getItem(SIMULATED_CLOSED_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setSimulatedClosed(closed: boolean): void {
  try {
    if (closed) {
      localStorage.setItem(SIMULATED_CLOSED_KEY, 'true');
    } else {
      localStorage.removeItem(SIMULATED_CLOSED_KEY);
    }
    window.dispatchEvent(new Event('ideaforge-deadline-changed'));
  } catch (e) {
    console.error('Error setting simulated closed:', e);
  }
}

export function setCustomDeadline(isoString: string): void {
  try {
    localStorage.setItem(DEADLINE_STORAGE_KEY, isoString);
    window.dispatchEvent(new Event('ideaforge-deadline-changed'));
  } catch (e) {
    console.error('Error saving deadline:', e);
  }
}

export function resetDeadline(): void {
  try {
    localStorage.removeItem(DEADLINE_STORAGE_KEY);
    localStorage.removeItem(SIMULATED_CLOSED_KEY);
    window.dispatchEvent(new Event('ideaforge-deadline-changed'));
  } catch (e) {
    console.error('Error resetting deadline:', e);
  }
}

export function calculateTimeRemaining(): TimeRemaining {
  if (isSimulatedClosed()) {
    return {
      totalMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isClosed: true,
      deadlineDisplay: DISPLAY_DEADLINE_DATE,
    };
  }

  const deadline = getDeadlineDate();
  const now = new Date();
  const totalMs = deadline.getTime() - now.getTime();

  if (totalMs <= 0) {
    return {
      totalMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isClosed: true,
      deadlineDisplay: DISPLAY_DEADLINE_DATE,
    };
  }

  const seconds = Math.floor((totalMs / 1000) % 60);
  const minutes = Math.floor((totalMs / 1000 / 60) % 60);
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));

  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
    isClosed: false,
    deadlineDisplay: DISPLAY_DEADLINE_DATE,
  };
}

export function useRegistrationCountdown(): TimeRemaining {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    // Initial check
    setTimeRemaining(calculateTimeRemaining());

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    const handleDeadlineChange = () => {
      setTimeRemaining(calculateTimeRemaining());
    };

    window.addEventListener('ideaforge-deadline-changed', handleDeadlineChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener('ideaforge-deadline-changed', handleDeadlineChange);
    };
  }, []);

  return timeRemaining;
}
