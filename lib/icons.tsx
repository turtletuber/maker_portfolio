// lib/icons.tsx
// This is a placeholder file for your icons. Replace or extend with your actual icon components or exports.

import { FC } from 'react';

export const ExampleIcon: FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />
    <path d="M8 12l2 2l4-4" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Add more icons below as needed

export const ArrowLeftIcon: FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = 'currentColor', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={size} height={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export const BookIcon: FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = 'currentColor', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={size} height={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4.5a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 4.5v15A2.25 2.25 0 006 21h3.75A2.25 2.25 0 0012 18.75V17m0-11v11m0 0v1.75A2.25 2.25 0 0015.75 21H21a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0021 2.25h-5.25A2.25 2.25 0 0012 4.5V6z" />
  </svg>
);

export const GraduationCapIcon: FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = 'currentColor', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={size} height={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75L2.25 9l9.75 5.25L21.75 9 12 3.75zM2.25 9v6.75A2.25 2.25 0 004.5 18h15a2.25 2.25 0 002.25-2.25V9" />
  </svg>
);

export const ClockIcon: FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = 'currentColor', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 3" />
  </svg>
);

export const CheckCircleIcon: FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = 'currentColor', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
);

