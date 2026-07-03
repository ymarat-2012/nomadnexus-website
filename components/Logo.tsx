export function NexusMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="16" y1="15" x2="16" y2="6.5" />
        <line x1="16" y1="15" x2="7.3" y2="20.2" />
        <line x1="16" y1="15" x2="24.7" y2="20.2" />
      </g>
      <circle cx="16" cy="15" r="4.25" fill="currentColor" />
      <circle cx="16" cy="6.5" r="2.5" fill="currentColor" opacity="0.55" />
      <circle cx="7.3" cy="20.2" r="2.5" fill="currentColor" opacity="0.85" />
      <circle cx="24.7" cy="20.2" r="2.5" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      Nomad&nbsp;Nexus
    </span>
  );
}
