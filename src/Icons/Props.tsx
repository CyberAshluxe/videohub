import React from "react";

export const ArrowLeft: React.FC<any> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M19 12H6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19l-7-7 7-7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
  </svg>
);

export const Heart: React.FC<any> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21s-7-4.35-9-8.5C1 7.5 5.5 3 9.5 5.5L12 7l2.5-1.5C18.5 3 23 7.5 21 12.5 19 16.65 12 21 12 21z" />
  </svg>
);

export const Play: React.FC<any> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5 3v18l15-9L5 3z" />
  </svg>
);

export const Search: React.FC<any> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path
      d="M21 21l-4.35-4.35"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronLeft: React.FC<any> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M15 18l-6-6 6-6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRight: React.FC<any> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M9 6l6 6-6 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default {};
