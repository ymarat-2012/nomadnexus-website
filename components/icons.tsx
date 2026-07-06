type IconProps = {
  className?: string;
};

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
};

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5l6.5 2.6v5.1c0 4.2-2.7 7.6-6.5 9.3-3.8-1.7-6.5-5.1-6.5-9.3V6.1L12 3.5z" />
      <path d="M9.25 12.2l1.9 1.9 3.6-3.9" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.7 9.3l-2 5.4-5.4 2 2-5.4 5.4-2z" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5l8 4.3-8 4.3-8-4.3 8-4.3z" />
      <path d="M4 12.1l8 4.3 8-4.3" />
      <path d="M4 16.1l8 4.3 8-4.3" />
    </svg>
  );
}

export function InfinityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 9.5a3.5 3.5 0 100 7c1.9 0 3-1.3 5-4.8m0 0c2-3.5 3.1-4.8 5-4.8a3.5 3.5 0 110 7c-1.9 0-3-1.3-5-4.8m0 0c-2 3.5-3.1 4.8-5 4.8" />
    </svg>
  );
}

export function NodeLinkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="7" r="2.6" />
      <circle cx="18" cy="17" r="2.6" />
      <path d="M8.3 8.7l7.4 6.6" />
    </svg>
  );
}

export function RepeatIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12a7.5 7.5 0 0112.6-5.5M19.5 12a7.5 7.5 0 01-12.6 5.5" />
      <path d="M16.3 4.9l.8 1.9-2 .5M7.7 19.1l-.8-1.9 2-.5" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0118.5 10c0 5.3-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function ScaleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5v17M7 6.5h10M4 6.5l-2.2 5a2.9 2.9 0 005.6 0L5.2 6.5zM20 6.5l-2.2 5a2.9 2.9 0 005.6 0L20.2 6.5z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12.5l4.5 4.5 10.5-11" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 4.5h3l1.5 4-2 1.5a11 11 0 005.5 5.5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 014 6.1a1.5 1.5 0 011.5-1.6z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 6.7l7.5 6 7.5-6" />
    </svg>
  );
}
