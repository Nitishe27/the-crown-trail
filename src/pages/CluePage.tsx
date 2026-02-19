import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface ClueData {
  number: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  clue: string;
  flavor: string;
  nextLabel: string;
  accentColor: string;
  bgSymbol: string;
}

function CompassIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-pulse-glow">
      {/* Outer ring */}
      <circle cx="60" cy="60" r="56" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="0.5" opacity="0.3" />
      {/* Cardinal marks */}
      {["N","E","S","W"].map((d, i) => {
        const angle = i * 90 - 90;
        const r = 42;
        const x = 60 + r * Math.cos(angle * Math.PI / 180);
        const y = 60 + r * Math.sin(angle * Math.PI / 180);
        return <text key={d} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
          fill={d === "N" ? "hsl(0 65% 55%)" : "hsl(43 60% 65%)"} fontSize="9" fontFamily="Cinzel, serif" fontWeight="700">{d}</text>;
      })}
      {/* Tick marks */}
      {Array.from({ length: 36 }, (_, i) => {
        const a = i * 10 * Math.PI / 180;
        const r1 = i % 9 === 0 ? 46 : i % 3 === 0 ? 48 : 50;
        return <line key={i} x1={60 + r1 * Math.cos(a)} y1={60 + r1 * Math.sin(a)}
          x2={60 + 53 * Math.cos(a)} y2={60 + 53 * Math.sin(a)}
          stroke="hsl(43 55% 45%)" strokeWidth={i % 9 === 0 ? 1.5 : 0.5} opacity="0.6" />;
      })}
      {/* Needle */}
      <g style={{ transformOrigin: "60px 60px", animation: "compass-needle 4s ease-in-out infinite" }}>
        <polygon points="60,20 64,60 60,65 56,60" fill="hsl(0 65% 55%)" />
        <polygon points="60,100 64,60 60,65 56,60" fill="hsl(43 60% 65%)" />
        <circle cx="60" cy="60" r="4" fill="hsl(43 85% 55%)" />
        <circle cx="60" cy="60" r="2" fill="hsl(20 14% 6%)" />
      </g>
    </svg>
  );
}

function MapIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 100" className="animate-pulse-glow">
      <defs>
        <filter id="map-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Parchment */}
      <rect x="5" y="5" width="110" height="90" rx="4" fill="hsl(35 40% 18%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      {/* Map lines */}
      <path d="M20 30 Q40 20 60 35 Q80 50 100 30" fill="none" stroke="hsl(43 50% 40%)" strokeWidth="1" opacity="0.6"/>
      <path d="M20 55 Q35 65 55 60 Q75 55 100 65" fill="none" stroke="hsl(43 50% 40%)" strokeWidth="1" opacity="0.6"/>
      {/* River */}
      <path d="M15 40 Q30 50 45 45 Q60 40 75 55 Q90 70 105 65" fill="none" stroke="hsl(210 60% 40%)" strokeWidth="2" opacity="0.5"/>
      {/* Dotted path */}
      <path d="M25 70 Q45 60 65 70 Q85 80 95 60" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.9"/>
      {/* X marks */}
      <g filter="url(#map-glow)">
        <line x1="90" y1="55" x2="100" y2="65" stroke="hsl(0 65% 55%)" strokeWidth="2"/>
        <line x1="100" y1="55" x2="90" y2="65" stroke="hsl(0 65% 55%)" strokeWidth="2"/>
      </g>
      {/* Location dots */}
      <circle cx="25" cy="70" r="3" fill="hsl(43 85% 55%)" />
      <circle cx="60" cy="70" r="2" fill="hsl(43 65% 55%)" opacity="0.7"/>
      {/* Compass rose */}
      <g transform="translate(18,22)">
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(0 65% 55%)" transform="rotate(0)"/>
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(43 60% 65%)" transform="rotate(180)"/>
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(43 60% 50%)" transform="rotate(90)"/>
        <polygon points="0,-8 2,0 0,8 -2,0" fill="hsl(43 60% 50%)" transform="rotate(270)"/>
      </g>
    </svg>
  );
}

function MagnifyingGlassIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-zoom-glass" style={{ transformOrigin: "center" }}>
      <defs>
        <radialGradient id="lens-grad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="hsl(210 70% 60%)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="hsl(210 70% 20%)" stopOpacity="0.2"/>
        </radialGradient>
      </defs>
      {/* Handle */}
      <line x1="78" y1="78" x2="108" y2="108" stroke="hsl(43 55% 40%)" strokeWidth="8" strokeLinecap="round"/>
      <line x1="78" y1="78" x2="108" y2="108" stroke="hsl(43 75% 55%)" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      {/* Lens frame */}
      <circle cx="50" cy="50" r="40" fill="url(#lens-grad)" stroke="hsl(43 85% 55%)" strokeWidth="3"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="hsl(43 55% 45%)" strokeWidth="0.5" opacity="0.5"/>
      {/* Shimmer */}
      <path d="M28 28 Q35 22 45 25" stroke="white" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round"/>
      {/* Inner detail */}
      <circle cx="50" cy="50" r="2" fill="hsl(43 85% 55%)" opacity="0.6"/>
    </svg>
  );
}

function KeyIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-float">
      <defs>
        <filter id="key-glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter="url(#key-glow)" transform="rotate(-45 60 60)">
        {/* Key ring */}
        <circle cx="40" cy="40" r="22" fill="none" stroke="hsl(43 85% 55%)" strokeWidth="5"/>
        <circle cx="40" cy="40" r="12" fill="none" stroke="hsl(43 65% 45%)" strokeWidth="2" opacity="0.5"/>
        {/* Key shaft */}
        <rect x="57" y="37" width="55" height="6" rx="3" fill="hsl(43 75% 50%)"/>
        {/* Teeth */}
        <rect x="75" y="43" width="6" height="12" rx="1" fill="hsl(43 75% 50%)"/>
        <rect x="90" y="43" width="6" height="8" rx="1" fill="hsl(43 75% 50%)"/>
        <rect x="105" y="43" width="6" height="10" rx="1" fill="hsl(43 75% 50%)"/>
        {/* Highlight */}
        <circle cx="40" cy="40" r="22" fill="none" stroke="hsl(43 95% 75%)" strokeWidth="1" opacity="0.4"/>
      </g>
    </svg>
  );
}

function TelescopeIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-pulse-glow">
      <g transform="rotate(-30 60 60)">
        {/* Main body */}
        <rect x="15" y="52" width="70" height="18" rx="4" fill="hsl(24 30% 20%)" stroke="hsl(43 75% 50%)" strokeWidth="1.5"/>
        {/* Eyepiece */}
        <rect x="8" y="56" width="16" height="10" rx="3" fill="hsl(24 25% 15%)" stroke="hsl(43 65% 45%)" strokeWidth="1"/>
        {/* Objective lens */}
        <rect x="82" y="49" width="28" height="24" rx="5" fill="hsl(24 25% 12%)" stroke="hsl(43 75% 50%)" strokeWidth="1.5"/>
        {/* Lens glass */}
        <ellipse cx="96" cy="61" rx="10" ry="10" fill="hsl(210 60% 25%)" opacity="0.6" stroke="hsl(210 60% 55%)" strokeWidth="0.5"/>
        {/* Stars in lens */}
        <circle cx="91" cy="57" r="1" fill="white" opacity="0.8"/>
        <circle cx="100" cy="64" r="0.7" fill="white" opacity="0.6"/>
        <circle cx="95" cy="66" r="1.2" fill="white" opacity="0.9"/>
        {/* Band rings */}
        <rect x="35" y="52" width="4" height="18" fill="hsl(43 85% 55%)" opacity="0.7"/>
        <rect x="60" y="52" width="4" height="18" fill="hsl(43 85% 55%)" opacity="0.7"/>
        {/* Tripod */}
        <line x1="30" y1="70" x2="20" y2="100" stroke="hsl(43 55% 40%)" strokeWidth="2"/>
        <line x1="50" y1="70" x2="50" y2="105" stroke="hsl(43 55% 40%)" strokeWidth="2"/>
        <line x1="70" y1="70" x2="80" y2="100" stroke="hsl(43 55% 40%)" strokeWidth="2"/>
      </g>
    </svg>
  );
}

function ScrollIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="animate-float">
      {/* Shadow */}
      <ellipse cx="60" cy="108" rx="35" ry="5" fill="hsl(0 0% 0%)" opacity="0.3"/>
      {/* Scroll body */}
      <rect x="20" y="20" width="80" height="80" rx="4" fill="hsl(35 40% 20%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      {/* Rolled ends */}
      <ellipse cx="60" cy="20" rx="40" ry="10" fill="hsl(35 35% 25%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      <ellipse cx="60" cy="100" rx="40" ry="10" fill="hsl(35 35% 25%)" stroke="hsl(43 55% 40%)" strokeWidth="1.5"/>
      {/* Text lines */}
      <line x1="32" y1="42" x2="88" y2="42" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="52" x2="75" y2="52" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.5"/>
      <line x1="32" y1="62" x2="88" y2="62" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="72" x2="65" y2="72" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.4"/>
      <line x1="32" y1="82" x2="80" y2="82" stroke="hsl(43 45% 45%)" strokeWidth="1.5" opacity="0.5"/>
      {/* Seal */}
      <circle cx="60" cy="62" r="12" fill="hsl(0 65% 35%)" stroke="hsl(43 85% 55%)" strokeWidth="1.5" opacity="0.9"/>
      <text x="60" y="67" textAnchor="middle" fill="hsl(43 85% 65%)" fontSize="12" fontFamily="Cinzel, serif">✦</text>
    </svg>
  );
}

function HourglassIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ animation: "spin-slow 20s linear infinite" }}>
      <defs>
        <clipPath id="top-clip"><polygon points="25,15 95,15 60,60" /></clipPath>
        <clipPath id="bot-clip"><polygon points="25,105 95,105 60,60" /></clipPath>
        <radialGradient id="sand-grad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="hsl(43 85% 65%)"/>
          <stop offset="100%" stopColor="hsl(25 80% 45%)"/>
        </radialGradient>
      </defs>
      {/* Frame */}
      <polygon points="25,15 95,15 60,60" fill="none" stroke="hsl(43 75% 50%)" strokeWidth="2.5"/>
      <polygon points="25,105 95,105 60,60" fill="none" stroke="hsl(43 75% 50%)" strokeWidth="2.5"/>
      {/* Sand top */}
      <polygon points="25,15 95,15 60,60" fill="url(#sand-grad)" opacity="0.3" clipPath="url(#top-clip)"/>
      <polygon points="30,15 90,15 60,50" fill="url(#sand-grad)" opacity="0.8"/>
      {/* Sand bottom */}
      <polygon points="35,100 85,100 60,70" fill="url(#sand-grad)" opacity="0.9"/>
      {/* Sand stream */}
      <line x1="60" y1="60" x2="60" y2="68" stroke="hsl(43 85% 65%)" strokeWidth="1.5" opacity="0.8"/>
      {/* Top bar */}
      <rect x="20" y="12" width="80" height="6" rx="3" fill="hsl(43 75% 50%)"/>
      {/* Bottom bar */}
      <rect x="20" y="102" width="80" height="6" rx="3" fill="hsl(43 75% 50%)"/>
      {/* Glass shine */}
      <line x1="38" y1="20" x2="52" y2="50" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round"/>
    </svg>
  );
}

function LanternIcon({ size = 120 }: { size?: number }) {
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
      {/* Glow */}
      <circle cx="60" cy="68" r="35" fill="url(#glow-grad)"/>
      {/* Hook */}
      <path d="M60 8 Q70 8 70 18 Q70 25 60 25" fill="none" stroke="hsl(43 65% 45%)" strokeWidth="2.5"/>
      {/* Chain */}
      <line x1="60" y1="25" x2="60" y2="35" stroke="hsl(43 55% 40%)" strokeWidth="2" strokeDasharray="3,2"/>
      {/* Top cap */}
      <path d="M42 38 Q60 32 78 38 L74 48 H46 Z" fill="hsl(24 30% 22%)" stroke="hsl(43 65% 45%)" strokeWidth="1.5"/>
      {/* Body */}
      <rect x="42" y="48" width="36" height="44" rx="3" fill="hsl(24 25% 16%)" stroke="hsl(43 65% 45%)" strokeWidth="1.5"/>
      {/* Glass panels */}
      <rect x="44" y="50" width="14" height="40" rx="2" fill="hsl(43 85% 55%)" opacity="0.08"/>
      <rect x="62" y="50" width="14" height="40" rx="2" fill="hsl(43 85% 55%)" opacity="0.08"/>
      {/* Flame */}
      <ellipse cx="60" cy="70" rx="7" ry="11" fill="url(#flame-grad)" opacity="0.9"/>
      <ellipse cx="60" cy="74" rx="4" ry="7" fill="hsl(43 100% 80%)" opacity="0.6"/>
      {/* Bottom cap */}
      <rect x="42" y="92" width="36" height="8" rx="2" fill="hsl(24 30% 22%)" stroke="hsl(43 65% 45%)" strokeWidth="1.5"/>
      {/* Vertical bars */}
      <line x1="60" y1="48" x2="60" y2="92" stroke="hsl(43 55% 40%)" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

function FootprintsIcon({ size = 120 }: { size?: number }) {
  const prints = [
    { x: 30, y: 85, r: true }, { x: 70, y: 75, r: false },
    { x: 35, y: 58, r: true }, { x: 72, y: 48, r: false },
    { x: 32, y: 30, r: true }, { x: 68, y: 20, r: false },
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 120 110">
      {prints.map((p, i) => (
        <g
          key={i}
          style={{
            opacity: 0,
            animation: `footstep 2s ease-in-out ${i * 0.3}s infinite`,
          }}
        >
          {/* Heel */}
          <ellipse cx={p.x + (p.r ? 0 : 0)} cy={p.y} rx="7" ry="9" fill="hsl(43 55% 35%)" stroke="hsl(43 75% 50%)" strokeWidth="1" opacity="0.9"/>
          {/* Toe bumps */}
          {[-4,-2,0,2,4].map((dx, j) => (
            <circle key={j} cx={p.x + dx + (p.r ? 3 : -3)} cy={p.y - 11} r={j === 2 ? 2.5 : 1.8}
              fill="hsl(43 55% 35%)" stroke="hsl(43 75% 50%)" strokeWidth="0.8" opacity="0.85"/>
          ))}
          {/* Ball */}
          <ellipse cx={p.x + (p.r ? 2 : -2)} cy={p.y - 6} rx="6" ry="4" fill="hsl(43 55% 35%)" stroke="hsl(43 75% 50%)" strokeWidth="0.5" opacity="0.6"/>
        </g>
      ))}
      {/* Dotted trail */}
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={i} cx={50} cy={90 - i * 11} r="1" fill="hsl(43 85% 55%)" opacity={0.3 + i * 0.05}/>
      ))}
    </svg>
  );
}

function CrownFinalIcon({ size = 140 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 120" className="animate-crown animate-pulse-glow">
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
        {/* Crown body */}
        <polygon points="10,95 10,45 35,15 70,40 105,15 130,45 130,95" fill="url(#crown-grad)" stroke="hsl(43 95% 75%)" strokeWidth="2"/>
        {/* Base band */}
        <rect x="10" y="82" width="120" height="13" rx="3" fill="hsl(35 70% 30%)" stroke="hsl(43 85% 60%)" strokeWidth="1"/>
        {/* Gems on base */}
        {[25, 50, 70, 90, 115].map((x, i) => (
          <ellipse key={i} cx={x} cy="88" rx="5" ry="4"
            fill={["hsl(0 80% 55%)", "hsl(210 80% 55%)", "hsl(120 60% 45%)", "hsl(280 60% 55%)", "hsl(30 100% 55%)"][i]}
            stroke="hsl(43 95% 75%)" strokeWidth="0.8" opacity="0.9"/>
        ))}
        {/* Top gems */}
        <circle cx="35" cy="18" r="8" fill="hsl(0 80% 55%)" stroke="hsl(43 95% 75%)" strokeWidth="1.5"/>
        <circle cx="70" cy="38" r="10" fill="hsl(43 95% 70%)" stroke="hsl(43 95% 85%)" strokeWidth="2"/>
        <circle cx="105" cy="18" r="8" fill="hsl(210 80% 55%)" stroke="hsl(43 95% 75%)" strokeWidth="1.5"/>
        {/* Highlight */}
        <polygon points="10,95 10,45 35,15 70,40 105,15 130,45 130,95"
          fill="none" stroke="hsl(43 95% 85%)" strokeWidth="0.5" opacity="0.5"/>
      </g>
    </svg>
  );
}

// All clue data
const clues: ClueData[] = [
  {
    number: 1, title: "The Compass Rose", subtitle: "Clue I",
    icon: <CompassIcon size={130} />,
    clue: "Point me North and I'll show you true — but the thief turned East where the old oak grew. Count seven paces from the shadow's edge; your next clue lies beneath the mossy ledge.",
    flavor: "The compass was found on the marble floor of the Great Hall, still spinning.",
    nextLabel: "Follow the Map →",
    accentColor: "hsl(43 85% 55%)",
    bgSymbol: "🧭",
  },
  {
    number: 2, title: "The Ancient Map", subtitle: "Clue II",
    icon: <MapIcon size={130} />,
    clue: "X marks the spot where rivers meet the stone — a castle forgotten, its secrets overgrown. The road not taken curves left at the mill; follow the dotted line beyond the hill.",
    flavor: "The map was written in invisible ink — revealed only by candlelight.",
    nextLabel: "Look Closer →",
    accentColor: "hsl(35 85% 50%)",
    bgSymbol: "🗺️",
  },
  {
    number: 3, title: "The Magnifying Glass", subtitle: "Clue III",
    icon: <MagnifyingGlassIcon size={130} />,
    clue: "They left a fingerprint on the velvet throne — a whorled pattern pointing toward the stone. Examine closely the third coat of arms; the hidden letter lives beneath its charms.",
    flavor: "The glass was found in the royal study, still warm to the touch.",
    nextLabel: "Find the Key →",
    accentColor: "hsl(210 70% 55%)",
    bgSymbol: "🔍",
  },
  {
    number: 4, title: "The Iron Key", subtitle: "Clue IV",
    icon: <KeyIcon size={130} />,
    clue: "This key fits no door you've tried before — seek the chamber behind the tapestry floor. Three turns left, then twice to the right; the lock will yield when the moon is bright.",
    flavor: "The key was worn around the neck of the fallen guard.",
    nextLabel: "Look to the Stars →",
    accentColor: "hsl(43 55% 45%)",
    bgSymbol: "🗝️",
  },
  {
    number: 5, title: "The Brass Telescope", subtitle: "Clue V",
    icon: <TelescopeIcon size={130} />,
    clue: "Train your eye on the eastern tower's peak — there a signal light blinks twice per week. Three long flashes followed by two short; a message sent from the conspirator's court.",
    flavor: "Found on the observatory balcony, still aimed at a distant spire.",
    nextLabel: "Unroll the Scroll →",
    accentColor: "hsl(25 80% 50%)",
    bgSymbol: "🔭",
  },
  {
    number: 6, title: "The Royal Scroll", subtitle: "Clue VI",
    icon: <ScrollIcon size={130} />,
    clue: "The ancient text is written in reverse — hold it to a mirror to lift the curse. The twelfth word in the third decree names the vault where the crown would be.",
    flavor: "The scroll carried the royal seal — yet the king never signed it.",
    nextLabel: "Time Runs Short →",
    accentColor: "hsl(0 65% 50%)",
    bgSymbol: "📜",
  },
  {
    number: 7, title: "The Hourglass", subtitle: "Clue VII",
    icon: <HourglassIcon size={130} />,
    clue: "When the last grain falls, all secrets speak. The thief had precisely one night — one week from the solstice, when shadows peak. Count the grains, count the hours, count the cost.",
    flavor: "The hourglass was discovered still running in the empty treasury.",
    nextLabel: "Follow the Light →",
    accentColor: "hsl(43 85% 55%)",
    bgSymbol: "⏳",
  },
  {
    number: 8, title: "The Lantern", subtitle: "Clue VIII",
    icon: <LanternIcon size={130} />,
    clue: "The conspirators met where no torch could shine — in the cavern beneath the serpentine vine. Follow the lantern's ghost on the west wall; a shadow-map is etched there, one and all.",
    flavor: "A lantern left burning — its oil still fresh — in a passage none knew existed.",
    nextLabel: "Track the Steps →",
    accentColor: "hsl(43 100% 60%)",
    bgSymbol: "🏮",
  },
  {
    number: 9, title: "The Footprints", subtitle: "Clue IX",
    icon: <FootprintsIcon size={130} />,
    clue: "Two sets of prints — one large, one small — lead through the garden past the crumbling wall. The smaller steps halt by the old sundial; inside its base, the final secret tile.",
    flavor: "Fresh mud preserved the trail — the thief had been here only hours before.",
    nextLabel: "The Crown Awaits →",
    accentColor: "hsl(43 60% 45%)",
    bgSymbol: "👣",
  },
  {
    number: 10, title: "The Crown Found", subtitle: "Clue X — Final",
    icon: <CrownFinalIcon size={140} />,
    clue: "You've followed every thread, unmasked the lie — the crown was hidden where the old graves lie. Beneath the stone of Queen Maren's rest, the greatest treasure pressed against her chest.",
    flavor: "The conspiracy ends here. Justice begins.",
    nextLabel: "Return to the Beginning",
    accentColor: "hsl(43 95% 65%)",
    bgSymbol: "👑",
  },
];

export default function CluePage() {
  const { id } = useParams<{ id: string }>();
  const clueNum = parseInt(id || "1", 10);
  const clue = clues[clueNum - 1];
  const [visible, setVisible] = useState(false);
  const [revealClue, setRevealClue] = useState(false);

  useEffect(() => {
    setVisible(false);
    setRevealClue(false);
    const t1 = setTimeout(() => setVisible(true), 80);
    const t2 = setTimeout(() => setRevealClue(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [clueNum]);

  if (!clue) return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="font-cinzel text-gold text-xl">Clue not found.</p>
    </main>
  );

  const isFinal = clueNum === 10;
  const nextPath = isFinal ? "/" : `/clue/${clueNum + 1}`;

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Animated bg symbol */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ fontSize: "clamp(12rem, 40vw, 28rem)", opacity: 0.025, userSelect: "none" }}
      >
        {clue.bgSymbol}
      </div>

      {/* Gradient overlay */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at center, ${clue.accentColor.replace("hsl(", "hsl(").replace(")", " / 0.05)")} 0%, transparent 70%)`,
        }}
      />

      <div
        className="relative z-10 w-full max-w-2xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Clue number */}
        <div className="text-center mb-6">
          <span
            className="font-cinzel text-xs tracking-widest uppercase"
            style={{ color: "hsl(43 40% 50%)", letterSpacing: "0.4em" }}
          >
            ✦ {clue.subtitle} ✦
          </span>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          {clue.icon}
        </div>

        {/* Title */}
        <h1
          className="font-cinzel-deco text-center mb-6"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.8rem)",
            color: clue.accentColor,
            textShadow: `0 0 30px ${clue.accentColor.replace(")", " / 0.5)")}`,
            letterSpacing: "0.03em",
          }}
        >
          {clue.title}
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${clue.accentColor.replace(")", " / 0.5)")})` }} />
          <span style={{ color: clue.accentColor, fontSize: "1rem" }}>❧</span>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${clue.accentColor.replace(")", " / 0.5)")})` }} />
        </div>

        {/* Flavor text */}
        <p
          className="font-garamond italic text-center mb-8"
          style={{
            color: "hsl(43 30% 55%)",
            fontSize: "1rem",
            lineHeight: 1.7,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}
        >
          "{clue.flavor}"
        </p>

        {/* Clue card */}
        <div
          className="clue-card rounded p-8 mb-8 relative"
          style={{
            border: `1px solid ${clue.accentColor.replace(")", " / 0.3)")}`,
            animation: "border-glow-pulse 3s ease-in-out infinite",
            opacity: revealClue ? 1 : 0,
            transform: revealClue ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Corner ornaments */}
          {[
            "top-0 left-0 border-t border-l",
            "top-0 right-0 border-t border-r",
            "bottom-0 left-0 border-b border-l",
            "bottom-0 right-0 border-b border-r",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-5 h-5 ${cls}`}
              style={{ borderColor: clue.accentColor.replace(")", " / 0.5)") }}
            />
          ))}

          {/* Clue label */}
          <div
            className="font-cinzel text-center text-xs mb-6 tracking-widest uppercase"
            style={{ color: clue.accentColor, opacity: 0.7, letterSpacing: "0.35em" }}
          >
            — The Clue —
          </div>

          {/* Clue text */}
          <p
            className="font-garamond text-center leading-loose"
            style={{
              color: "hsl(43 55% 80%)",
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              lineHeight: 2,
            }}
          >
            {clue.clue}
          </p>

          {/* Bottom ornament */}
          <div className="text-center mt-6" style={{ color: clue.accentColor, opacity: 0.5 }}>
            ✦ ✦ ✦
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-10">
          {clues.map((_, i) => (
            <Link
              key={i}
              to={`/clue/${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i + 1 === clueNum ? "24px" : "8px",
                height: "8px",
                background: i + 1 <= clueNum ? clue.accentColor : "hsl(43 30% 25%)",
                boxShadow: i + 1 === clueNum ? `0 0 10px ${clue.accentColor.replace(")", " / 0.6)")}` : "none",
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {clueNum > 1 ? (
            <Link
              to={`/clue/${clueNum - 1}`}
              className="font-cinzel text-xs tracking-widest transition-all duration-300"
              style={{ color: "hsl(43 40% 50%)", letterSpacing: "0.2em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "hsl(43 75% 65%)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "hsl(43 40% 50%)")}
            >
              ← Previous
            </Link>
          ) : <div />}

          <Link
            to={nextPath}
            className="font-cinzel inline-block text-center"
            style={{
              padding: "0.75rem 2rem",
              border: `1px solid ${clue.accentColor.replace(")", " / 0.5)")}`,
              color: clue.accentColor,
              fontSize: "0.78rem",
              letterSpacing: "0.2em",
              transition: "all 0.3s ease",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = clue.accentColor.replace(")", " / 0.1)");
              el.style.boxShadow = `0 0 20px ${clue.accentColor.replace(")", " / 0.3)")}`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.boxShadow = "none";
            }}
          >
            {isFinal ? "↩ Return Home" : clue.nextLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
