export function CompassIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-pulse-glow">
      <circle cx="60" cy="60" r="56" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="0.5" opacity="0.3" />
      {["N","E","S","W"].map((d, i) => {
        const angle = i * 90 - 90;
        const r = 42;
        const x = 60 + r * Math.cos(angle * Math.PI / 180);
        const y = 60 + r * Math.sin(angle * Math.PI / 180);
        return <text key={d} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
          fill={d === "N" ? "hsl(0 65% 55%)" : "hsl(43 60% 65%)"}
          fontSize="9" fontFamily="Cinzel, serif" fontWeight="700">{d}</text>;
      })}
      {Array.from({ length: 36 }, (_, i) => {
        const a = i * 10 * Math.PI / 180;
        const r1 = i % 9 === 0 ? 46 : i % 3 === 0 ? 48 : 50;
        return <line key={i} x1={60 + r1 * Math.cos(a)} y1={60 + r1 * Math.sin(a)}
          x2={60 + 53 * Math.cos(a)} y2={60 + 53 * Math.sin(a)}
          stroke="hsl(43 55% 45%)" strokeWidth={i % 9 === 0 ? 1.5 : 0.5} opacity="0.6" />;
      })}
      <g style={{ transformOrigin: "60px 60px", animation: "compass-needle 4s ease-in-out infinite" }}>
        <polygon points="60,20 64,60 60,65 56,60" fill="hsl(0 65% 55%)" />
        <polygon points="60,100 64,60 60,65 56,60" fill="hsl(43 60% 65%)" />
        <circle cx="60" cy="60" r="4" fill="hsl(43 85% 55%)" />
        <circle cx="60" cy="60" r="2" fill="hsl(20 14% 6%)" />
      </g>
    </svg>
  );
}

export function MapIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size * 100/120} viewBox="0 0 120 100" className="animate-pulse-glow">
      <defs>
        <filter id="map-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect x="5" y="5" width="110" height="90" rx="4" fill="hsl(35 40% 18%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      <path d="M20 30 Q40 20 60 35 Q80 50 100 30" fill="none" stroke="hsl(43 50% 40%)" strokeWidth="1" opacity="0.6"/>
      <path d="M20 55 Q35 65 55 60 Q75 55 100 65" fill="none" stroke="hsl(43 50% 40%)" strokeWidth="1" opacity="0.6"/>
      <path d="M15 40 Q30 50 45 45 Q60 40 75 55 Q90 70 105 65" fill="none" stroke="hsl(210 60% 40%)" strokeWidth="2" opacity="0.5"/>
      <path d="M25 70 Q45 60 65 70 Q85 80 95 60" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.9"/>
      <g filter="url(#map-glow)">
        <line x1="90" y1="55" x2="100" y2="65" stroke="hsl(0 65% 55%)" strokeWidth="2"/>
        <line x1="100" y1="55" x2="90" y2="65" stroke="hsl(0 65% 55%)" strokeWidth="2"/>
      </g>
      <circle cx="25" cy="70" r="3" fill="hsl(43 85% 55%)" />
      <circle cx="60" cy="70" r="2" fill="hsl(43 65% 55%)" opacity="0.7"/>
      <g transform="translate(18,22)">
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(0 65% 55%)" transform="rotate(0)"/>
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(43 60% 65%)" transform="rotate(180)"/>
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(43 60% 50%)" transform="rotate(90)"/>
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(43 60% 50%)" transform="rotate(270)"/>
      </g>
    </svg>
  );
}

export function MagnifyingGlassIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-zoom-glass" style={{ transformOrigin: "center" }}>
      <defs>
        <radialGradient id="lens-grad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="hsl(210 70% 60%)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="hsl(210 70% 20%)" stopOpacity="0.2"/>
        </radialGradient>
      </defs>
      <line x1="78" y1="78" x2="108" y2="108" stroke="hsl(43 55% 40%)" strokeWidth="8" strokeLinecap="round"/>
      <line x1="78" y1="78" x2="108" y2="108" stroke="hsl(43 75% 55%)" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <circle cx="50" cy="50" r="40" fill="url(#lens-grad)" stroke="hsl(43 85% 55%)" strokeWidth="3"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="hsl(43 55% 45%)" strokeWidth="0.5" opacity="0.5"/>
      <path d="M28 28 Q35 22 45 25" stroke="white" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="2" fill="hsl(43 85% 55%)" opacity="0.6"/>
    </svg>
  );
}

export function KeyIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-float">
      <defs>
        <filter id="key-glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter="url(#key-glow)" transform="rotate(-45 60 60)">
        <circle cx="40" cy="40" r="22" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="5"/>
        <circle cx="40" cy="40" r="12" fill="none" stroke="hsl(43 65% 45%)" strokeWidth="2" opacity="0.5"/>
        <rect x="57" y="37" width="55" height="6" rx="3" fill="hsl(43 75% 50%)"/>
        <rect x="75" y="43" width="6" height="12" rx="1" fill="hsl(43 75% 50%)"/>
        <rect x="90" y="43" width="6" height="8" rx="1" fill="hsl(43 75% 50%)"/>
        <rect x="105" y="43" width="6" height="10" rx="1" fill="hsl(43 75% 50%)"/>
        <circle cx="40" cy="40" r="22" fill="none" stroke="hsl(43 95% 75%)" strokeWidth="1" opacity="0.4"/>
      </g>
    </svg>
  );
}

export function TelescopeIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-pulse-glow">
      <g transform="rotate(-30 60 60)">
        <rect x="15" y="52" width="70" height="18" rx="4" fill="hsl(24 30% 20%)" stroke="hsl(43 75% 50%)" strokeWidth="1.5"/>
        <rect x="8" y="56" width="16" height="10" rx="3" fill="hsl(24 25% 15%)" stroke="hsl(43 65% 45%)" strokeWidth="1"/>
        <rect x="82" y="49" width="28" height="24" rx="5" fill="hsl(24 25% 12%)" stroke="hsl(43 75% 50%)" strokeWidth="1.5"/>
        <ellipse cx="96" cy="61" rx="10" ry="10" fill="hsl(210 60% 25%)" opacity="0.6" stroke="hsl(210 60% 55%)" strokeWidth="0.5"/>
        <circle cx="91" cy="57" r="1" fill="white" opacity="0.8"/>
        <circle cx="100" cy="64" r="0.7" fill="white" opacity="0.6"/>
        <circle cx="95" cy="66" r="1.2" fill="white" opacity="0.9"/>
        <rect x="35" y="52" width="4" height="18" fill="hsl(43 85% 55%)" opacity="0.7"/>
        <rect x="60" y="52" width="4" height="18" fill="hsl(43 85% 55%)" opacity="0.7"/>
        <line x1="30" y1="70" x2="20" y2="100" stroke="hsl(43 55% 40%)" strokeWidth="2"/>
        <line x1="50" y1="70" x2="50" y2="105" stroke="hsl(43 55% 40%)" strokeWidth="2"/>
        <line x1="70" y1="70" x2="80" y2="100" stroke="hsl(43 55% 40%)" strokeWidth="2"/>
      </g>
    </svg>
  );
}

export function ScrollIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-float">
      <ellipse cx="60" cy="108" rx="35" ry="5" fill="hsl(0 0% 0%)" opacity="0.3"/>
      <rect x="20" y="20" width="80" height="80" rx="4" fill="hsl(35 40% 20%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      <ellipse cx="60" cy="20" rx="40" ry="10" fill="hsl(35 35% 25%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      <ellipse cx="60" cy="100" rx="40" ry="10" fill="hsl(35 35% 25%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      <line x1="32" y1="42" x2="88" y2="42" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="52" x2="75" y2="52" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.5"/>
      <line x1="32" y1="62" x2="88" y2="62" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="72" x2="65" y2="72" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.4"/>
      <line x1="32" y1="82" x2="80" y2="82" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="60" cy="62" r="12" fill="hsl(0 65% 35%)" stroke="hsl(43 85% 55%)" strokeWidth="1.5" opacity="0.9"/>
      <text x="60" y="67" textAnchor="middle" fill="hsl(43 85% 65%)" fontSize="12" fontFamily="Cinzel, serif">✦</text>
    </svg>
  );
}

export function HourglassIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ animation: "spin-slow 20s linear infinite" }}>
      <defs>
        <radialGradient id="sand-grad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="hsl(43 85% 65%)"/>
          <stop offset="100%" stopColor="hsl(25 80% 45%)"/>
        </radialGradient>
      </defs>
      <polygon points="25,15 95,15 60,60" fill="none" stroke="hsl(43 75% 50%)" strokeWidth="2.5"/>
      <polygon points="25,105 95,105 60,60" fill="none" stroke="hsl(43 75% 50%)" strokeWidth="2.5"/>
      <polygon points="30,15 90,15 60,50" fill="url(#sand-grad)" opacity="0.8"/>
      <polygon points="35,100 85,100 60,70" fill="url(#sand-grad)" opacity="0.9"/>
      <line x1="60" y1="60" x2="60" y2="68" stroke="hsl(43 85% 65%)" strokeWidth="1.5" opacity="0.8"/>
      <rect x="20" y="12" width="80" height="6" rx="3" fill="hsl(43 75% 50%)"/>
      <rect x="20" y="102" width="80" height="6" rx="3" fill="hsl(43 75% 50%)"/>
      <line x1="38" y1="20" x2="52" y2="50" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round"/>
    </svg>
  );
}

export function LanternIcon({ size = 130 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-flicker">
      <defs>
        <radialGradient id="flame-grad" cx="50%" cy="80%">
          <stop offset="0%" stopColor="hsl(43 100% 70%)"/>
          <stop offset="50%" stopColor="hsl(25 100% 55%)"/>
          <stop offset="100%" stopColor="hsl(0 90% 45%)"/>
        </radialGradient>
        <radialGradient id="glow-grad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="hsl(43 85% 55%)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="hsl(43 85% 55%)" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="68" r="35" fill="url(#glow-grad)"/>
      <path d="M60 8 Q70 8 70 18 Q70 25 60 25" fill="none" stroke="hsl(43 65% 45%)" strokeWidth="2.5"/>
      <line x1="60" y1="25" x2="60" y2="35" stroke="hsl(43 55% 40%)" strokeWidth="2" strokeDasharray="3,2"/>
      <path d="M42 38 Q60 32 78 38 L74 48 H46 Z" fill="hsl(24 30% 22%)" stroke="hsl(43 65% 45%)" strokeWidth="1.5"/>
      <rect x="42" y="48" width="36" height="44" rx="3" fill="hsl(24 25% 16%)" stroke="hsl(43 65% 45%)" strokeWidth="1.5"/>
      <rect x="44" y="50" width="14" height="40" rx="2" fill="hsl(43 85% 55%)" opacity="0.08"/>
      <rect x="62" y="50" width="14" height="40" rx="2" fill="hsl(43 85% 55%)" opacity="0.08"/>
      <ellipse cx="60" cy="70" rx="7" ry="11" fill="url(#flame-grad)" opacity="0.9"/>
      <ellipse cx="60" cy="74" rx="4" ry="7" fill="hsl(43 100% 80%)" opacity="0.6"/>
      <rect x="42" y="92" width="36" height="8" rx="2" fill="hsl(24 30% 22%)" stroke="hsl(43 65% 45%)" strokeWidth="1.5"/>
      <line x1="60" y1="48" x2="60" y2="92" stroke="hsl(43 55% 40%)" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

export function FootprintsIcon({ size = 130 }: { size?: number }) {
  const prints = [
    { x: 30, y: 85, r: true }, { x: 70, y: 75, r: false },
    { x: 35, y: 58, r: true }, { x: 72, y: 48, r: false },
    { x: 32, y: 30, r: true }, { x: 68, y: 20, r: false },
  ];
  return (
    <svg width={size} height={size * 110/120} viewBox="0 0 120 110">
      {prints.map((p, i) => (
        <g key={i} style={{ opacity: 0, animation: `footstep 2s ease-in-out ${i * 0.3}s infinite` }}>
          <ellipse cx={p.x} cy={p.y} rx="7" ry="9" fill="hsl(43 55% 35%)" stroke="hsl(43 75% 50%)" strokeWidth="1" opacity="0.9"/>
          {[-4,-2,0,2,4].map((dx, j) => (
            <circle key={j} cx={p.x + dx + (p.r ? 3 : -3)} cy={p.y - 11} r={j === 2 ? 2.5 : 1.8}
              fill="hsl(43 55% 35%)" stroke="hsl(43 75% 50%)" strokeWidth="0.8" opacity="0.85"/>
          ))}
          <ellipse cx={p.x + (p.r ? 2 : -2)} cy={p.y - 6} rx="6" ry="4"
            fill="hsl(43 55% 35%)" stroke="hsl(43 75% 50%)" strokeWidth="0.5" opacity="0.6"/>
        </g>
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={i} cx={50} cy={90 - i * 11} r="1" fill="hsl(43 85% 55%)" opacity={0.3 + i * 0.05}/>
      ))}
    </svg>
  );
}

export function CrownFinalIcon({ size = 140 }: { size?: number }) {
  return (
    <svg width={size} height={size * 120/140} viewBox="0 0 140 120" className="animate-crown animate-pulse-glow">
      <defs>
        <radialGradient id="crown-grad" cx="50%" cy="100%">
          <stop offset="0%" stopColor="hsl(43 95% 70%)"/>
          <stop offset="50%" stopColor="hsl(43 85% 55%)"/>
          <stop offset="100%" stopColor="hsl(35 70% 35%)"/>
        </radialGradient>
        <filter id="crown-glow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter="url(#crown-glow)">
        <polygon points="10,95 10,45 35,15 70,40 105,15 130,45 130,95" fill="url(#crown-grad)" stroke="hsl(43 95% 75%)" strokeWidth="2"/>
        <rect x="10" y="82" width="120" height="13" rx="3" fill="hsl(35 70% 30%)" stroke="hsl(43 85% 60%)" strokeWidth="1"/>
        {[25, 50, 70, 90, 115].map((x, i) => (
          <ellipse key={i} cx={x} cy="88" rx="5" ry="4"
            fill={["hsl(0 80% 55%)", "hsl(210 80% 55%)", "hsl(120 60% 45%)", "hsl(280 60% 55%)", "hsl(30 100% 55%)"][i]}
            stroke="hsl(43 95% 75%)" strokeWidth="0.8" opacity="0.9"/>
        ))}
        <circle cx="35" cy="18" r="8" fill="hsl(0 80% 55%)" stroke="hsl(43 95% 75%)" strokeWidth="1.5"/>
        <circle cx="70" cy="38" r="10" fill="hsl(43 95% 70%)" stroke="hsl(43 95% 85%)" strokeWidth="2"/>
        <circle cx="105" cy="18" r="8" fill="hsl(210 80% 55%)" stroke="hsl(43 95% 75%)" strokeWidth="1.5"/>
        <polygon points="10,95 10,45 35,15 70,40 105,15 130,45 130,95"
          fill="none" stroke="hsl(43 95% 85%)" strokeWidth="0.5" opacity="0.5"/>
      </g>
    </svg>
  );
}
