export function WashingMachineSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Outer body */}
      <rect x="4" y="4" width="192" height="222" rx="10" stroke="currentColor" strokeWidth="1.2" />

      {/* Control panel */}
      <rect x="4" y="4" width="192" height="46" rx="10" stroke="currentColor" strokeWidth="1" />
      <line x1="4" y1="50" x2="196" y2="50" stroke="currentColor" strokeWidth="0.7" />

      {/* Left dial */}
      <circle cx="30" cy="27" r="13" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="30" cy="27" r="5" stroke="currentColor" strokeWidth="0.7" />
      <line x1="30" y1="27" x2="30" y2="16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* Dial tick marks */}
      <line x1="30" y1="15" x2="30" y2="12" stroke="currentColor" strokeWidth="0.6" />
      <line x1="43" y1="27" x2="46" y2="27" stroke="currentColor" strokeWidth="0.6" />
      <line x1="30" y1="40" x2="30" y2="43" stroke="currentColor" strokeWidth="0.6" />
      <line x1="17" y1="27" x2="14" y2="27" stroke="currentColor" strokeWidth="0.6" />

      {/* Small buttons */}
      <circle cx="60" cy="21" r="4" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="60" cy="33" r="4" stroke="currentColor" strokeWidth="0.8" />

      {/* Display */}
      <rect x="72" y="16" width="56" height="22" rx="3" stroke="currentColor" strokeWidth="0.8" />
      <line x1="84" y1="16" x2="84" y2="38" stroke="currentColor" strokeWidth="0.5" />
      <line x1="112" y1="16" x2="112" y2="38" stroke="currentColor" strokeWidth="0.5" />

      {/* Right buttons */}
      <circle cx="146" cy="21" r="3.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="158" cy="21" r="3.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="170" cy="21" r="3.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="158" cy="33" r="5" stroke="currentColor" strokeWidth="0.8" />

      {/* Porthole outer ring */}
      <circle cx="100" cy="140" r="70" stroke="currentColor" strokeWidth="1.2" />
      {/* Door seal */}
      <circle cx="100" cy="140" r="60" stroke="currentColor" strokeWidth="0.6" />
      {/* Inner drum */}
      <circle cx="100" cy="140" r="52" stroke="currentColor" strokeWidth="0.9" />

      {/* Drum paddles at 8 positions */}
      <circle cx="100" cy="89" r="4.5" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="137" cy="103" r="4.5" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="152" cy="140" r="4.5" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="137" cy="177" r="4.5" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="191" r="4.5" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="63" cy="177" r="4.5" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="48" cy="140" r="4.5" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="63" cy="103" r="4.5" stroke="currentColor" strokeWidth="0.7" />

      {/* Door handle */}
      <path d="M 176 130 Q 188 140 176 150" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Detergent drawer bottom left */}
      <rect x="8" y="202" width="64" height="16" rx="2" stroke="currentColor" strokeWidth="0.8" />
      <line x1="29" y1="202" x2="29" y2="218" stroke="currentColor" strokeWidth="0.5" />
      <line x1="50" y1="202" x2="50" y2="218" stroke="currentColor" strokeWidth="0.5" />

      {/* Filter cap bottom right */}
      <circle cx="170" cy="210" r="9" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="170" cy="210" r="4" stroke="currentColor" strokeWidth="0.7" />

      {/* Feet */}
      <rect x="22" y="220" width="16" height="8" rx="3" stroke="currentColor" strokeWidth="0.7" />
      <rect x="162" y="220" width="16" height="8" rx="3" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  )
}

export function FridgeSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Main body */}
      <rect x="5" y="5" width="170" height="310" rx="10" stroke="currentColor" strokeWidth="1.2" />

      {/* Freezer compartment top */}
      <rect x="5" y="5" width="170" height="94" rx="10" stroke="currentColor" strokeWidth="1" />

      {/* Divider between freezer and fridge */}
      <line x1="5" y1="99" x2="175" y2="99" stroke="currentColor" strokeWidth="1.5" />

      {/* Freezer handle */}
      <rect x="136" y="28" width="9" height="46" rx="4.5" stroke="currentColor" strokeWidth="1.1" />

      {/* Fridge door handle */}
      <rect x="136" y="124" width="9" height="80" rx="4.5" stroke="currentColor" strokeWidth="1.1" />

      {/* Top hinge */}
      <rect x="5" y="12" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="0.7" />
      {/* Middle hinge */}
      <rect x="5" y="91" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="0.7" />
      {/* Bottom hinge */}
      <rect x="5" y="292" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="0.7" />

      {/* Freezer interior - dashed box */}
      <rect x="18" y="18" width="110" height="64" rx="4" stroke="currentColor" strokeWidth="0.6" strokeDasharray="5 3" />

      {/* Temp display in freezer */}
      <rect x="26" y="28" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="0.7" />
      <line x1="36" y1="28" x2="36" y2="46" stroke="currentColor" strokeWidth="0.4" />
      <line x1="46" y1="28" x2="46" y2="46" stroke="currentColor" strokeWidth="0.4" />

      {/* Freezer content lines */}
      <line x1="68" y1="38" x2="118" y2="38" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
      <line x1="68" y1="52" x2="118" y2="52" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
      <line x1="68" y1="66" x2="118" y2="66" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />

      {/* Fridge shelves */}
      <line x1="14" y1="162" x2="128" y2="162" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 4" />
      <line x1="14" y1="212" x2="128" y2="212" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 4" />
      <line x1="14" y1="258" x2="128" y2="258" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 4" />

      {/* Crisper drawer at bottom */}
      <rect x="14" y="272" width="114" height="30" rx="3" stroke="currentColor" strokeWidth="0.7" />
      <line x1="71" y1="272" x2="71" y2="302" stroke="currentColor" strokeWidth="0.5" />

      {/* Door shelves */}
      <line x1="130" y1="152" x2="166" y2="152" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
      <line x1="130" y1="192" x2="166" y2="192" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
      <line x1="130" y1="232" x2="166" y2="232" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
      <line x1="130" y1="272" x2="166" y2="272" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
    </svg>
  )
}
