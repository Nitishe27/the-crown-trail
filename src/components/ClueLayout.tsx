

// import { useEffect, useState, ReactNode } from "react";

// interface ClueLayoutProps {
//   number: number;
//   subtitle: string;
//   title: string;
//   icon: ReactNode;
//   flavor: string;
//   clue: string;
//   accentColor: string;
//   bgSymbol: string;
// }

// // Internal component for High-Visibility Fire Sparkles
// function FireSparkles({ color }: { color: string }) {
//   // Increased count to 45 for a richer effect
//   const sparkles = Array.from({ length: 45 });
//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
//       {sparkles.map((_, i) => {
//         const size = Math.random() * 5 + 2; // Larger particles
//         const duration = Math.random() * 4 + 3;
//         const delay = Math.random() * 7;
//         const left = Math.random() * 100;
//         const drift = Math.random() * 150 - 75; 

//         return (
//           <div
//             key={i}
//             className="absolute bottom-[-50px] rounded-full"
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               backgroundColor: color,
//               left: `${left}%`,
//               opacity: 0,
//               filter: "blur(0.5px)",
//               // Stronger dual-layer glow
//               boxShadow: `0 0 12px ${color}, 0 0 24px ${color}`, 
//               animation: `fire-rise ${duration}s infinite ease-in ${delay}s`,
//               "--drift": `${drift}px`,
//             } as any}
//           />
//         );
//       })}
//       <style>{`
//         @keyframes fire-rise {
//           0% { 
//             transform: translateY(0) translateX(0) scale(1); 
//             opacity: 0; 
//           }
//           10% { 
//             opacity: 1; 
//           }
//           90% { 
//             opacity: 0.8; 
//           }
//           100% { 
//             transform: translateY(-120vh) translateX(var(--drift)) scale(0.2); 
//             opacity: 0; 
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function ClueLayout({
//   number,
//   subtitle,
//   title,
//   icon,
//   flavor,
//   clue,
//   accentColor,
//   bgSymbol,
// }: ClueLayoutProps) {
//   const [visible, setVisible] = useState(false);
//   const [revealClue, setRevealClue] = useState(false);

//   useEffect(() => {
//     setVisible(false);
//     setRevealClue(false);
//     const t1 = setTimeout(() => setVisible(true), 80);
//     const t2 = setTimeout(() => setRevealClue(true), 900);
//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, [number]);

//   const accent = (opacity: string) =>
//     accentColor.replace("hsl(", "hsl(").replace(")", ` / ${opacity})`);

//   return (
//     <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
//       {/* 1. Enhanced Fire Sparkles */}
//       <FireSparkles color={accent("1")} />

//       {/* 2. Background Vignette (makes center content stand out) */}
//       <div className="fixed inset-0 z-0 bg-gradient-to-t from-orange-900/20 via-transparent to-black pointer-events-none" />

//       {/* 3. Big Background Symbol */}
//       <div
//         className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0"
//         style={{ 
//           fontSize: "clamp(12rem, 40vw, 28rem)", 
//           opacity: 0.04,
//           color: accentColor,
//           filter: "blur(2px)"
//         }}
//         aria-hidden="true"
//       >
//         {bgSymbol}
//       </div>

//       {/* 4. Content Wrapper */}
//       <div
//         className="relative z-10 w-full max-w-2xl mx-auto"
//         style={{
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(30px)",
//           transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
//         }}
//       >
//         {/* Header Section */}
//         <div className="text-center mb-6">
//           <span
//             className="font-cinzel text-xs uppercase tracking-[0.5em] font-bold"
//             style={{ color: "hsl(43 80% 60%)", textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
//           >
//             ✦ {subtitle} ✦
//           </span>
//         </div>

//         <div className="flex justify-center mb-8 drop-shadow-[0_0_20px_rgba(255,165,0,0.4)]">
//           {icon}
//         </div>

//         <h1
//           className="font-cinzel-deco text-center mb-6"
//           style={{
//             fontSize: "clamp(1.8rem, 6vw, 3.2rem)",
//             color: accentColor,
//             textShadow: `0 0 40px ${accent("0.6")}, 0 0 10px black`,
//           }}
//         >
//           {title}
//         </h1>

//         {/* Divider */}
//         <div className="flex items-center gap-4 mb-8">
//           <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent("0.8")})` }} />
//           <span style={{ color: accentColor, fontSize: "1.2rem" }}>❧</span>
//           <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${accent("0.8")})` }} />
//         </div>

//         {/* Flavor Text */}
//         <p
//           className="font-garamond italic text-center mb-10 text-[1.2rem] font-medium"
//           style={{
//             color: "hsl(43 40% 75%)",
//             opacity: visible ? 1 : 0,
//             transition: "opacity 1s ease 0.5s",
//             textShadow: "1px 1px 2px black"
//           }}
//         >
//           "{flavor}"
//         </p>

//         {/* Clue Card */}
//         <div
//           className="rounded-lg p-10 mb-8 relative bg-black/60 backdrop-blur-md shadow-2xl"
//           style={{
//             border: `2px solid ${accent("0.4")}`,
//             opacity: revealClue ? 1 : 0,
//             transform: revealClue ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.8s ease-out",
//           }}
//         >
//           {/* Decorative Corners - Thicker for visibility */}
//           {[
//             "top-0 left-0 border-t-2 border-l-2",
//             "top-0 right-0 border-t-2 border-r-2",
//             "bottom-0 left-0 border-b-2 border-l-2",
//             "bottom-0 right-0 border-b-2 border-r-2",
//           ].map((cls, i) => (
//             <div
//               key={i}
//               className={`absolute w-6 h-6 ${cls}`}
//               style={{ borderColor: accent("0.7") }}
//             />
//           ))}

//           <div
//             className="font-cinzel text-center text-xs mb-6 uppercase tracking-[0.4em] font-bold"
//             style={{ color: accentColor, opacity: 0.9 }}
//           >
//             — The Hidden Clue —
//           </div>

//           <p
//             className="font-garamond text-center leading-relaxed font-medium"
//             style={{
//               color: "white",
//               fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)",
//               textShadow: "0 2px 4px black"
//             }}
//           >
//             {clue}
//           </p>

//           <div className="text-center mt-8 text-[1rem]" style={{ color: accentColor, opacity: 0.6 }}>
//             ✦ ✦ ✦
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import { useEffect, useState, ReactNode } from "react";

type EffectType = "fire" | "pollen" | "wind" | "ancient" | "gold" | "chamber" | "code" | "star";

interface ClueLayoutProps {
  number: number;
  subtitle: string;
  title: string;
  icon: ReactNode;
  flavor: string;
  clue: string;
  accentColor: string;
  bgSymbol: string;
  effectType?: EffectType; 
}

/* --- 1. STAR NAVIGATION (Rhythmic Update) --- */
function CosmicNavigator({ color }: { color: string }) {
  const stars = Array.from({ length: 100 });
  // Increased count to 6 stars to create a "wave" effect
  const shootingStarWaves = Array.from({ length: 6 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-[-50%] animate-spin-slow opacity-30" 
           style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`, animationDuration: '120s' }} />
      
      {stars.map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white animate-twinkle"
          style={{ width: Math.random() * 3 + 'px', height: Math.random() * 3 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animationDelay: Math.random() * 5 + 's' } as any} />
      ))}

      {/* Rhythmic Shooting Stars: Grouped delays create the "rhythm" */}
      {shootingStarWaves.map((_, i) => (
        <div key={i} className="absolute w-[2px] h-[2px] bg-white animate-shooting-star" 
          style={{ 
            top: `${10 + (i * 12)}%`, // Spaced out vertically
            left: "110%", // Start off-screen
            // Sequence: 0.5s, 1.0s, 1.5s... creates a rhythmic pulse
            animationDelay: `${i * 0.8}s`, 
            animationDuration: '10s', // 2s movement + 8s pause
            boxShadow: `0 0 10px 2px ${color}` 
          } as any} />
      ))}
    </div>
  );
}

/* --- 2. WIND BREEZE --- */
function WindBreeze({ color }: { color: string }) {
  const windPaths = Array.from({ length: 8 });
  const leaves = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg className="w-full h-full opacity-60" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {windPaths.map((_, i) => (
          <path key={i} d={`M -200 ${Math.random() * 1000} Q ${200 + Math.random() * 300} ${Math.random() * 1000}, 1200 ${Math.random() * 1000}`}
            fill="transparent" stroke={color} strokeWidth={Math.random() * 3 + 1} strokeLinecap="round" className="animate-wind-flow"
            style={{ filter: "blur(6px)", strokeDasharray: "200 800", animationDuration: `${Math.random() * 2 + 2}s`, animationDelay: `${Math.random() * 5}s` } as any}
          />
        ))}
      </svg>
      {leaves.map((_, i) => (
        <div key={i} className="absolute animate-leaf-tumble text-2xl" 
          style={{ top: `${Math.random() * 100 - 10}%`, left: "-10%", color: Math.random() > 0.5 ? "#556b2f" : "#cd853f", opacity: 0, animationDuration: `${Math.random() * 3 + 3}s`, animationDelay: `${Math.random() * 10}s` } as any} >🍃</div>
      ))}
    </div>
  );
}

/* --- 3. SECRET CODE ROOM --- */
function DigitalMatrix({ color }: { color: string }) {
  const columns = Array.from({ length: 20 });
  const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&";
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 font-mono pointer-events-none">
      <div className="flex justify-between w-full h-full px-4">
        {columns.map((_, i) => (
          <div key={i} className="flex flex-col animate-matrix-fall" style={{ animationDelay: `${Math.random() * 5}s`, animationDuration: `${Math.random() * 3 + 5}s` } as any}>
            {Array.from({ length: 25 }).map((_, j) => (
              <span key={j} style={{ color: j === 0 ? '#fff' : color }} className="my-1 text-xs">{characters[Math.floor(Math.random() * characters.length)]}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 w-full animate-scanline" />
    </div>
  );
}

/* --- 4. PUZZLE CHAMBER --- */
function StoneGears({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] border-[12px] border-dashed rounded-full animate-spin-slow opacity-30 flex items-center justify-center" style={{ borderColor: color, animationDuration: '30s' }}>
          <div className="w-[85%] h-[85%] border-4 border-double rounded-full opacity-50" style={{ borderColor: color }} />
      </div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(${color} 2px, transparent 2px), linear-gradient(90deg, ${color} 2px, transparent 2px)`, backgroundSize: '100px 100px' }} />
    </div>
  );
}

/* --- 5. GOLD RAIN --- */
function GoldRain() {
  const coins = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {coins.map((_, i) => (
        <div key={i} className="absolute top-[-50px] animate-coin-fall" style={{ left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 3 + 4}s`, animationDelay: `${Math.random() * 5}s` } as any}>
          <div className="w-4 h-4 rounded-full border border-yellow-200/40 animate-coin-spin shadow-[0_0_10px_rgba(234,179,8,0.6)]" style={{ background: "radial-gradient(circle at 30% 30%, #fde047 0%, #ca8a04 100%)" }} />
        </div>
      ))}
    </div>
  );
}

/* --- 6. FIRE SPARKLES --- */
function FireSparkles({ color }: { color: string }) {
  const sparkles = Array.from({ length: 45 });
  return (
    <>
      {sparkles.map((_, i) => (
        <div key={i} className="absolute bottom-[-50px] rounded-full animate-fire-rise" style={{ width: `${Math.random() * 5 + 2}px`, height: `${Math.random() * 5 + 2}px`, backgroundColor: color, left: `${Math.random() * 100}%`, opacity: 0, filter: "blur(0.5px)", boxShadow: `0 0 12px ${color}`, animationDuration: `${Math.random() * 4 + 3}s`, "--drift": `${Math.random() * 150 - 75}px` } as any} />
      ))}
    </>
  );
}

/* --- 7. POLLEN DRIFT --- */
function PollenDrift({ color }: { color: string }) {
  const spores = Array.from({ length: 35 });
  return (
    <>
      {spores.map((_, i) => (
        <div key={i} className="absolute top-[-20px] rounded-full animate-pollen-fall" style={{ width: `${Math.random() * 6 + 4}px`, height: `${Math.random() * 6 + 4}px`, backgroundColor: color, left: `${Math.random() * 100}%`, opacity: 0, animationDuration: `${Math.random() * 10 + 10}s`, "--sway": `${Math.random() * 160 - 80}px` } as any} />
      ))}
    </>
  );
}

/* --- 8. ANCIENT RUNES --- */
function AncientRunes({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20">
      <div className="absolute w-[500px] h-[500px] border-2 border-dashed rounded-full animate-spin-slow" style={{ borderColor: color, animationDuration: '60s' }} />
      <div className="absolute w-[350px] h-[350px] border border-double rounded-full animate-spin-reverse" style={{ borderColor: color, animationDuration: '40s' }} />
    </div>
  );
}

/* --- MAIN COMPONENT --- */
export default function ClueLayout({
  subtitle, title, icon, flavor, clue, accentColor, effectType = "fire", 
}: ClueLayoutProps) {
  const [visible, setVisible] = useState(false);
  const [revealClue, setRevealClue] = useState(false);

  useEffect(() => {
    setVisible(false);
    setRevealClue(false);
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setRevealClue(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [title, effectType]);

  const accent = (opacity: string) =>
    accentColor.replace("hsl(", "hsl(").replace(")", ` / ${opacity})`);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden bg-black text-white">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <AncientRunes color={accent("0.5")} />
        {effectType === "fire" && <FireSparkles color={accent("1")} />}
        {effectType === "pollen" && <PollenDrift color="hsl(65 70% 80%)" />}
        {effectType === "wind" && <WindBreeze color={accent("0.8")} />}
        {effectType === "gold" && <GoldRain />}
        {effectType === "chamber" && <StoneGears color={accent("0.8")} />}
        {effectType === "code" && <DigitalMatrix color={accent("1")} />}
        {effectType === "star" && <CosmicNavigator color={accent("1")} />}
      </div>

      <div className={`relative z-10 w-full max-w-2xl mx-auto text-center ${effectType === 'wind' ? 'animate-wind-sway' : ''}`} 
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease-out" }}>
        
        <div className="mb-4 tracking-[0.5em] text-[10px] md:text-xs font-bold text-orange-400 uppercase">✦ {subtitle} ✦</div>
        <div className="flex justify-center mb-6">{icon}</div>

        <h1 className="text-4xl md:text-6xl uppercase mb-6" style={{ color: accentColor, fontFamily: "'Times New Roman', serif", textShadow: `0 0 20px ${accent("0.5")}` }}>
          {title}
        </h1>

        <p className="italic mb-10 opacity-70 font-serif text-xl px-8">"{flavor}"</p>

        <div className="max-w-xl mx-auto rounded-sm p-10 bg-black/60 backdrop-blur-xl border-2 relative" 
             style={{ borderColor: accent("0.2"), opacity: revealClue ? 1 : 0, transition: "all 1.2s" }}>
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4" style={{ borderColor: accentColor }} />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4" style={{ borderColor: accentColor }} />
          <div className="mb-8 tracking-[0.4em] text-[9px] font-bold uppercase opacity-40">— THE DISCOVERY —</div>
          <p className="text-xl md:text-2xl font-serif text-slate-100">{clue}</p>
        </div>
      </div>

      <style>{`
        /* Updated Rhythmic Shooting Star */
        @keyframes shooting-star { 
          0% { transform: translateX(0) translateY(0) rotate(-45deg); width: 0; opacity: 0; } 
          2% { opacity: 1; width: 120px; }
          15% { transform: translateX(-120vw) translateY(120vh) rotate(-45deg); width: 0; opacity: 0; } 
          100% { transform: translateX(-120vw) translateY(120vh) rotate(-45deg); opacity: 0; } 
        }

        @keyframes wind-flow { 0% { stroke-dashoffset: 1000; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { stroke-dashoffset: -1000; opacity: 0; } }
        @keyframes leaf-tumble { 0% { transform: translate(0, 0) rotate(0deg) scale(0.8); opacity: 0; } 15% { opacity: 0.8; } 100% { transform: translate(120vw, 40vh) rotate(1080deg) scale(1.2); opacity: 0; } }
        @keyframes wind-sway { 0%, 100% { transform: rotate(0deg) translateX(0); } 50% { transform: rotate(1deg) translateX(10px); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes matrix-fall { 0% { transform: translateY(-100%); opacity: 0; } 100% { transform: translateY(100%); opacity: 0; } }
        @keyframes scanline { 0% { top: -20%; } 100% { top: 120%; } }
        @keyframes fire-rise { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 100% { transform: translateY(-110vh) translateX(var(--drift)); opacity: 0; } }
        @keyframes coin-fall { 0% { transform: translateY(-50px) rotateX(0deg); opacity: 0; } 100% { transform: translateY(110vh) rotateX(720deg); opacity: 0; } }
        @keyframes coin-spin { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        @keyframes pollen-fall { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(110vh) translateX(var(--sway)); opacity: 0; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        
        .animate-shooting-star { animation: shooting-star infinite linear; }
        .animate-wind-flow { animation: wind-flow infinite ease-in-out; }
        .animate-leaf-tumble { animation: leaf-tumble infinite ease-in; }
        .animate-wind-sway { animation: wind-sway 4s infinite ease-in-out; }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-matrix-fall { animation: matrix-fall linear infinite; }
        .animate-scanline { animation: scanline 4s linear infinite; }
        .animate-fire-rise { animation: fire-rise infinite linear; }
        .animate-coin-fall { animation: coin-fall infinite linear; }
        .animate-coin-spin { animation: coin-spin 2s infinite linear; }
        .animate-pollen-fall { animation: pollen-fall infinite linear; }
        .animate-spin-slow { animation: spin-slow linear infinite; }
        .animate-spin-reverse { animation: spin-reverse linear infinite; }
      `}</style>
    </main>
  );
}