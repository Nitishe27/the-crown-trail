
// import { useEffect, useState, ReactNode } from "react";

// type EffectType = "fire" | "pollen" | "wind" | "ancient" | "gold" | "chamber" | "code" | "star" | "castle" | "footprint" | "magic";

// interface ClueLayoutProps {
//   number: number;
//   subtitle: string;
//   title: string;
//   icon: ReactNode;
//   flavor: string;
//   clue: string;
//   accentColor: string;
//   bgSymbol: string;
//   effectType?: EffectType; 
// }

// /* --- NEW: MAGICAL ENERGY FIELD --- */
// function MagicEnergyField({ color }: { color: string }) {
//   const orbs = Array.from({ length: 20 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Pulsing Core Nebula */}
//       <div 
//         className="absolute inset-0 opacity-40 animate-pulse"
//         style={{
//           background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 70%)`,
//           filter: 'blur(80px)',
//           animationDuration: '6s'
//         }}
//       />
      
//       {/* Floating Mana Orbs */}
//       {orbs.map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full animate-float-particle"
//           style={{
//             width: `${Math.random() * 12 + 4}px`,
//             height: `${Math.random() * 12 + 4}px`,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             backgroundColor: color,
//             boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
//             opacity: 0,
//             animationDuration: `${Math.random() * 4 + 4}s`,
//             animationDelay: `${Math.random() * 5}s`,
//             "--tx": `${Math.random() * 200 - 100}px`,
//             "--ty": `${Math.random() * -200 - 100}px`
//           } as any}
//         />
//       ))}

//       {/* Rhythmic Expansion Rings */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="w-[60vw] h-[60vw] border-2 border-white/5 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
//       </div>
//     </div>
//   );
// }

// /* --- FOOTPRINT TRAIL --- */
// function FootprintTrail({ color }: { color: string }) {
//   const steps = Array.from({ length: 12 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
//       <div className="relative w-full h-full">
//         {steps.map((_, i) => (
//           <div 
//             key={i}
//             className="absolute animate-footstep opacity-0 text-3xl md:text-4xl"
//             style={{
//               left: `${15 + (i * 7)}%`,
//               top: `${50 + (i % 2 === 0 ? 8 : -8)}%`,
//               color: color,
//               transform: `rotate(${i % 2 === 0 ? '80deg' : '100deg'})`,
//               animationDelay: `${i * 0.8}s`,
//               textShadow: `0 0 15px ${color}, 0 0 5px white`,
//             } as any}
//           >
//             👣
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* --- 1. FIRE SPARKLES --- */
// function FireSparkles({ color }: { color: string }) {
//   const sparkles = Array.from({ length: 50 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {sparkles.map((_, i) => (
//         <div 
//           key={i} 
//           className="absolute bottom-[-20px] rounded-full animate-fire-rise" 
//           style={{ 
//             width: `${Math.random() * 4 + 2}px`, 
//             height: `${Math.random() * 4 + 2}px`, 
//             backgroundColor: color, 
//             left: `${Math.random() * 100}%`, 
//             opacity: 0, 
//             filter: "blur(0.5px)", 
//             boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
//             animationDuration: `${Math.random() * 3 + 2}s`, 
//             animationDelay: `${Math.random() * 5}s`,
//             "--drift": `${Math.random() * 200 - 100}px` 
//           } as any} 
//         />
//       ))}
//     </div>
//   );
// }

// /* --- 2. RHYTHMIC STAR NAVIGATION --- */
// function CosmicNavigator({ color }: { color: string }) {
//   const stars = Array.from({ length: 80 });
//   const shootingStarWaves = Array.from({ length: 6 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute inset-[-50%] animate-spin-slow opacity-20" 
//            style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`, animationDuration: '120s' }} />
//       {stars.map((_, i) => (
//         <div key={i} className="absolute rounded-full bg-white animate-twinkle"
//           style={{ width: Math.random() * 2 + 'px', height: Math.random() * 2 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animationDelay: Math.random() * 5 + 's' } as any} />
//       ))}
//       {shootingStarWaves.map((_, i) => (
//         <div key={i} className="absolute w-[2px] h-[2px] bg-white animate-shooting-star" 
//           style={{ top: `${15 + (i * 12)}%`, left: "110%", animationDelay: `${i * 0.8}s`, animationDuration: '10s', boxShadow: `0 0 10px 2px ${color}` } as any} />
//       ))}
//     </div>
//   );
// }

// /* --- 3. GOLD RAIN --- */
// function GoldRain() {
//   const coins = Array.from({ length: 30 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {coins.map((_, i) => (
//         <div key={i} className="absolute animate-coin-fall" 
//           style={{ top: '-60px', left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 3 + 4}s`, animationDelay: `${Math.random() * 8}s` } as any}>
//           <div className="w-5 h-5 rounded-full border border-yellow-200/50 animate-coin-spin shadow-[0_0_15px_rgba(234,179,8,0.5)]" 
//                style={{ background: "radial-gradient(circle at 30% 30%, #fde047 0%, #ca8a04 100%)" }} />
//         </div>
//       ))}
//     </div>
//   );
// }

// /* --- 4. WIND BREEZE (BALANCED) --- */
// function WindBreeze({ color }: { color: string }) {
//   const windPaths = Array.from({ length: 8 }); 
//   const leaves = Array.from({ length: 10 });    
//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden">
//       <svg className="w-full h-full opacity-50" viewBox="0 0 1000 1000" preserveAspectRatio="none">
//         {windPaths.map((_, i) => (
//           <path key={i} d={`M -200 ${Math.random() * 1000} Q ${300 + Math.random() * 200} ${Math.random() * 1000}, 1200 ${Math.random() * 1000}`}
//             fill="transparent" 
//             stroke={color} 
//             strokeWidth="2" 
//             strokeLinecap="round" 
//             className="animate-wind-flow"
//             style={{ 
//               filter: "blur(2px)", 
//               strokeDasharray: "150 850", 
//               animationDuration: `${Math.random() * 2 + 3}s`, 
//               animationDelay: `${Math.random() * 4}s` 
//             } as any} />
//         ))}
//       </svg>
//       {leaves.map((_, i) => (
//         <div key={i} className="absolute animate-leaf-tumble text-2xl" 
//           style={{ 
//             top: `${Math.random() * 100 - 10}%`, 
//             left: "-10%", 
//             color: Math.random() > 0.5 ? "#556b2f" : "#cd853f", 
//             opacity: 0, 
//             animationDuration: `${Math.random() * 2 + 4}s`, 
//             animationDelay: `${Math.random() * 6}s` 
//           } as any} >🍃</div>
//       ))}
//     </div>
//   );
// }

// /* --- 5. ANCIENT RUNES --- */
// function AncientRunes({ color }: { color: string }) {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20">
//       <div className="absolute w-[500px] h-[500px] border-2 border-dashed rounded-full animate-spin-slow" style={{ borderColor: color, animationDuration: '60s' }} />
//       <div className="absolute w-[350px] h-[350px] border border-double rounded-full animate-spin-reverse" style={{ borderColor: color, animationDuration: '40s' }} />
//     </div>
//   );
// }

// /* --- 6. CASTLE CHALLENGE --- */
// function CastleChallenge() {
//   const clouds = Array.from({ length: 8 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-b from-slate-950 via-[#020617] to-black">
//       <div className="absolute inset-0 bg-white/0 animate-lightning z-10" />
//       <div className="absolute bottom-0 w-full h-[40vh] opacity-30 bg-slate-900 shadow-[0_-20px_60px_rgba(30,58,138,0.4)]" 
//            style={{ clipPath: "polygon(0% 100%, 0% 70%, 15% 45%, 30% 65%, 45% 35%, 60% 70%, 80% 25%, 100% 65%, 100% 100%)" }} />
//       {clouds.map((_, i) => (
//         <div key={i} className="absolute bg-slate-800/40 blur-[90px] rounded-full animate-cloud-drift"
//           style={{ 
//             width: `${Math.random() * 500 + 300}px`, 
//             height: '280px', 
//             top: `${Math.random() * 35}%`, 
//             left: `${-30 + (i * 20)}%`,
//             animationDuration: `${22 + Math.random() * 15}s`,
//             animationDelay: `${i * -4}s`
//           } as any} />
//       ))}
//       <div className="absolute bottom-20 left-10 md:left-24 animate-flag-wave origin-bottom opacity-80 z-20">
//          <div className="w-2 h-40 bg-zinc-800 shadow-xl" />
//          <div className="absolute top-0 left-2 w-24 h-14 bg-red-900 border-l-4 border-red-500 clip-flag" />
//       </div>
//       <div className="absolute bottom-0 w-full h-24 bg-zinc-950 border-t border-white/5 z-10" />
//       <div className="absolute bottom-0 w-full h-32 flex justify-around items-end z-20 px-10">
//         {[1, 2, 3, 4, 5, 6].map(i => (
//           <div key={i} className="mb-10 group relative">
//              <div className="w-5 h-8 bg-orange-400 rounded-t-full blur-[1px] shadow-[0_0_20px_#f97316,0_0_40px_rgba(249,115,22,0.4)] animate-pulse" 
//                   style={{ animationDelay: `${i * 0.9}s`, animationDuration: '3.5s' }} />
//              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-orange-500/10 blur-xl" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* --- OTHER THEMES --- */
// function DigitalMatrix({ color }: { color: string }) {
//   const columns = Array.from({ length: 20 });
//   const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   return (
//     <div className="absolute inset-0 overflow-hidden opacity-30 font-mono pointer-events-none flex justify-between px-4">
//       {columns.map((_, i) => (
//         <div key={i} className="flex flex-col animate-matrix-fall" style={{ animationDelay: `${Math.random() * 5}s`, animationDuration: `${Math.random() * 3 + 5}s` } as any}>
//           {Array.from({ length: 20 }).map((_, j) => (
//             <span key={j} style={{ color: j === 0 ? '#fff' : color }} className="my-1 text-xs">{characters[Math.floor(Math.random() * characters.length)]}</span>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// function PollenDrift({ color }: { color: string }) {
//   const spores = Array.from({ length: 30 });
//   return (
//     <>{spores.map((_, i) => (
//       <div key={i} className="absolute top-[-20px] rounded-full animate-pollen-fall" style={{ width: '6px', height: '6px', backgroundColor: color, left: `${Math.random() * 100}%`, opacity: 0, animationDuration: `${Math.random() * 8 + 8}s`, "--sway": `${Math.random() * 160 - 80}px` } as any} />
//     ))}</>
//   );
// }

// /* --- UPDATED: ROTATING CHAMBER (Central Hub Removed) --- */
// function StoneGears({ color }: { color: string }) {
//   const satelliteGears = [
//     { size: 'w-32 h-32', top: '10%', left: '15%', speed: '20s', rev: false },
//     { size: 'w-24 h-24', top: '20%', left: '80%', speed: '12s', rev: true },
//     { size: 'w-48 h-48', top: '70%', left: '10%', speed: '30s', rev: true },
//     { size: 'w-20 h-20', top: '80%', left: '85%', speed: '15s', rev: false },
//   ];

//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
//       {/* Scattered Small Rotating Chambers */}
//       {satelliteGears.map((gear, i) => (
//         <div 
//           key={i}
//           className={`absolute ${gear.size} border-4 border-dotted rounded-full flex items-center justify-center ${gear.rev ? 'animate-spin-reverse' : 'animate-spin-slow'}`}
//           style={{ 
//             top: gear.top, 
//             left: gear.left, 
//             borderColor: color, 
//             animationDuration: gear.speed 
//           }}
//         >
//           <div className="w-1/2 h-1/2 border-2 border-dashed rounded-full" style={{ borderColor: color }} />
//         </div>
//       ))}
//     </div>
//   );
// }

// /* --- MAIN COMPONENT --- */
// export default function ClueLayout({
//   subtitle, title, icon, flavor, clue, accentColor, effectType = "fire", 
// }: ClueLayoutProps) {
//   const [visible, setVisible] = useState(false);
//   const [revealClue, setRevealClue] = useState(false);

//   useEffect(() => {
//     setVisible(false);
//     setRevealClue(false);
//     const t1 = setTimeout(() => setVisible(true), 100);
//     const t2 = setTimeout(() => setRevealClue(true), 900);
//     return () => { clearTimeout(t1); clearTimeout(t2); };
//   }, [title, effectType]);

//   const accent = (opacity: string) => accentColor.replace("hsl(", "hsl(").replace(")", ` / ${opacity})`);

//   return (
//     <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden bg-black text-white">
      
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <AncientRunes color={accent("0.5")} />
        
//         {effectType === "fire" && <FireSparkles color={accent("1")} />}
//         {effectType === "pollen" && <PollenDrift color="hsl(65 70% 80%)" />}
//         {effectType === "wind" && <WindBreeze color={accent("0.8")} />}
//         {effectType === "gold" && <GoldRain />}
//         {effectType === "chamber" && <StoneGears color={accent("0.8")} />}
//         {effectType === "code" && <DigitalMatrix color={accent("1")} />}
//         {effectType === "star" && <CosmicNavigator color={accent("1")} />}
//         {effectType === "castle" && <CastleChallenge />}
//         {effectType === "footprint" && <FootprintTrail color={accent("0.6")} />}
//         {effectType === "magic" && <MagicEnergyField color={accent("0.8")} />}
//       </div>

//       <div className={`relative z-10 w-full max-w-2xl mx-auto text-center ${effectType === 'wind' ? 'animate-wind-sway' : ''}`} 
//         style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease-out" }}>
        
//         <div className="mb-4 tracking-[0.5em] text-[10px] md:text-xs font-bold text-orange-400 uppercase">✦ {subtitle} ✦</div>
//         <div className="flex justify-center mb-6">{icon}</div>

//         <h1 className="text-4xl md:text-6xl uppercase mb-6" style={{ color: accentColor, fontFamily: "'Times New Roman', serif", textShadow: `0 0 20px ${accent("0.5")}` }}>
//           {title}
//         </h1>

//         <p className="italic mb-10 opacity-70 font-serif text-xl px-8">"{flavor}"</p>

//         <div className="max-w-xl mx-auto rounded-sm p-10 bg-black/60 backdrop-blur-xl border-2 relative" 
//              style={{ borderColor: accent("0.2"), opacity: revealClue ? 1 : 0, transition: "all 1.2s" }}>
//           <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4" style={{ borderColor: accentColor }} />
//           <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4" style={{ borderColor: accentColor }} />
//           <div className="mb-8 tracking-[0.4em] text-[9px] font-bold uppercase opacity-40">— THE DISCOVERY —</div>
//           <p className="text-xl md:text-2xl font-serif text-slate-100">{clue}</p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fire-rise {
//           0% { transform: translateY(0) scale(1); opacity: 0; }
//           20% { opacity: 1; }
//           100% { transform: translateY(-110vh) translateX(var(--drift)) scale(0.5); opacity: 0; }
//         }
//         @keyframes coin-fall { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(110vh); opacity: 0; } }
//         @keyframes coin-spin { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
//         @keyframes shooting-star { 0% { transform: translateX(0) translateY(0) rotate(-45deg); width: 0; opacity: 0; } 2% { opacity: 1; width: 120px; } 15% { transform: translateX(-120vw) translateY(120vh) rotate(-45deg); width: 0; opacity: 0; } 100% { transform: translateX(-120vw) translateY(120vh) rotate(-45deg); opacity: 0; } }
        
//         @keyframes wind-flow { 
//           0% { stroke-dashoffset: 1000; opacity: 0; } 
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { stroke-dashoffset: -1000; opacity: 0; } 
//         }
        
//         @keyframes leaf-tumble { 
//           0% { transform: translate(-10vw, 0) rotate(0deg); opacity: 0; } 
//           20% { opacity: 1; } 
//           80% { opacity: 1; }
//           100% { transform: translate(110vw, 30vh) rotate(720deg); opacity: 0; } 
//         }
//         @keyframes wind-sway { 0%, 100% { transform: rotate(0deg) translateX(0); } 50% { transform: rotate(1deg) translateX(10px); } }
//         @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
//         @keyframes matrix-fall { 0% { transform: translateY(-100%); opacity: 0; } 100% { transform: translateY(100%); opacity: 0; } }
//         @keyframes pollen-fall { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(110vh) translateX(var(--sway)); opacity: 0; } }
//         @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        
//         @keyframes lightning {
//           0%, 94%, 96%, 100% { background-color: rgba(255, 255, 255, 0); }
//           95%, 97% { background-color: rgba(200, 230, 255, 0.4); }
//         }
//         @keyframes cloud-drift { from { transform: translateX(-20%); opacity: 0.3; } to { transform: translateX(120%); opacity: 0.6; } }
//         @keyframes flag-wave { 0%, 100% { transform: rotate(-3deg) skewX(2deg); } 50% { transform: rotate(5deg) skewX(-2deg); } }

//         @keyframes footstep-fade {
//           0% { opacity: 0; transform: scale(0.7); }
//           15% { opacity: 1; transform: scale(1); }
//           85% { opacity: 0.9; }
//           100% { opacity: 0; transform: scale(1.1); }
//         }

//         /* NEW: MAGIC ENERGY FIELD ANIMATION */
//         @keyframes float-particle {
//           0% { transform: translate(0, 0) scale(0); opacity: 0; }
//           20% { opacity: 1; }
//           80% { opacity: 1; }
//           100% { transform: translate(var(--tx), var(--ty)) scale(1.5); opacity: 0; }
//         }
        
//         .animate-fire-rise { animation: fire-rise linear infinite; }
//         .animate-coin-fall { animation: coin-fall linear infinite; }
//         .animate-coin-spin { animation: coin-spin 1.5s linear infinite; }
//         .animate-shooting-star { animation: shooting-star infinite linear; }
//         .animate-wind-flow { animation: wind-flow infinite linear; }
//         .animate-leaf-tumble { animation: leaf-tumble infinite ease-in; }
//         .animate-wind-sway { animation: wind-sway 5s infinite ease-in-out; }
//         .animate-twinkle { animation: twinkle infinite ease-in-out; }
//         .animate-matrix-fall { animation: matrix-fall linear infinite; }
//         .animate-pollen-fall { animation: pollen-fall infinite linear; }
//         .animate-spin-slow { animation: spin-slow linear infinite; }
//         .animate-spin-reverse { animation: spin-reverse linear infinite; }
//         .animate-lightning { animation: lightning 6s infinite; }
//         .animate-cloud-drift { animation: cloud-drift linear infinite; }
//         .animate-flag-wave { animation: flag-wave 2.5s ease-in-out infinite; }
//         .animate-footstep { animation: footstep-fade 8s infinite; }
//         .animate-float-particle { animation: float-particle linear infinite; }
//         .clip-flag { clip-path: polygon(0 0, 100% 50%, 0 100%); }
//       `}</style>
//     </main>
//   );
// }

import { useEffect, useState, ReactNode } from "react";

type EffectType = "fire" | "pollen" | "wind" | "ancient" | "gold" | "chamber" | "code" | "star" | "castle" | "footprint" | "magic";

interface ClueLayoutProps {
  number: number;
  subtitle: string;
  title: string;
  icon: ReactNode;
  clue: string;
  accentColor: string;
  bgSymbol: string;
  effectType?: EffectType; 
}

/* --- EFFECT COMPONENTS (UNTOUCHED) --- */
function MagicEnergyField({ color }: { color: string }) {
  const orbs = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-40 animate-pulse" style={{ background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 70%)`, filter: 'blur(80px)', animationDuration: '6s' }} />
      {orbs.map((_, i) => (
        <div key={i} className="absolute rounded-full animate-float-particle" style={{ width: `${Math.random() * 12 + 4}px`, height: `${Math.random() * 12 + 4}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, backgroundColor: color, boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`, opacity: 0, animationDuration: `${Math.random() * 4 + 4}s`, animationDelay: `${Math.random() * 5}s`, "--tx": `${Math.random() * 200 - 100}px`, "--ty": `${Math.random() * -200 - 100}px` } as any} />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60vw] h-[60vw] border-2 border-white/5 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
      </div>
    </div>
  );
}

function FootprintTrail({ color }: { color: string }) {
  const steps = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <div className="relative w-full h-full">
        {steps.map((_, i) => (
          <div key={i} className="absolute animate-footstep opacity-0 text-3xl md:text-4xl" style={{ left: `${15 + (i * 7)}%`, top: `${50 + (i % 2 === 0 ? 8 : -8)}%`, color: color, transform: `rotate(${i % 2 === 0 ? '80deg' : '100deg'})`, animationDelay: `${i * 0.8}s`, textShadow: `0 0 15px ${color}, 0 0 5px white` } as any} > 👣 </div>
        ))}
      </div>
    </div>
  );
}

function FireSparkles({ color }: { color: string }) {
  const sparkles = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((_, i) => (
        <div key={i} className="absolute bottom-[-20px] rounded-full animate-fire-rise" style={{ width: `${Math.random() * 4 + 2}px`, height: `${Math.random() * 4 + 2}px`, backgroundColor: color, left: `${Math.random() * 100}%`, opacity: 0, filter: "blur(0.5px)", boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`, animationDuration: `${Math.random() * 3 + 2}s`, animationDelay: `${Math.random() * 5}s`, "--drift": `${Math.random() * 200 - 100}px` } as any} />
      ))}
    </div>
  );
}

function CosmicNavigator({ color }: { color: string }) {
  const stars = Array.from({ length: 80 });
  const shootingStarWaves = Array.from({ length: 6 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-[-50%] animate-spin-slow opacity-20" style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`, animationDuration: '120s' }} />
      {stars.map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white animate-twinkle" style={{ width: Math.random() * 2 + 'px', height: Math.random() * 2 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animationDelay: Math.random() * 5 + 's' } as any} />
      ))}
      {shootingStarWaves.map((_, i) => (
        <div key={i} className="absolute w-[2px] h-[2px] bg-white animate-shooting-star" style={{ top: `${15 + (i * 12)}%`, left: "110%", animationDelay: `${i * 0.8}s`, animationDuration: '10s', boxShadow: `0 0 10px 2px ${color}` } as any} />
      ))}
    </div>
  );
}

function GoldRain() {
  const coins = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {coins.map((_, i) => (
        <div key={i} className="absolute animate-coin-fall" style={{ top: '-60px', left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 3 + 4}s`, animationDelay: `${Math.random() * 8}s` } as any}>
          <div className="w-5 h-5 rounded-full border border-yellow-200/50 animate-coin-spin shadow-[0_0_15px_rgba(234,179,8,0.5)]" style={{ background: "radial-gradient(circle at 30% 30%, #fde047 0%, #ca8a04 100%)" }} />
        </div>
      ))}
    </div>
  );
}

function WindBreeze({ color }: { color: string }) {
  const windPaths = Array.from({ length: 8 }); 
  const leaves = Array.from({ length: 10 });    
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg className="w-full h-full opacity-50" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {windPaths.map((_, i) => (
          <path key={i} d={`M -200 ${Math.random() * 1000} Q ${300 + Math.random() * 200} ${Math.random() * 1000}, 1200 ${Math.random() * 1000}`} fill="transparent" stroke={color} strokeWidth="2" strokeLinecap="round" className="animate-wind-flow" style={{ filter: "blur(2px)", strokeDasharray: "150 850", animationDuration: `${Math.random() * 2 + 3}s`, animationDelay: `${Math.random() * 4}s` } as any} />
        ))}
      </svg>
      {leaves.map((_, i) => (
        <div key={i} className="absolute animate-leaf-tumble text-2xl" style={{ top: `${Math.random() * 100 - 10}%`, left: "-10%", color: Math.random() > 0.5 ? "#556b2f" : "#cd853f", opacity: 0, animationDuration: `${Math.random() * 2 + 4}s`, animationDelay: `${Math.random() * 6}s` } as any} >🍃</div>
      ))}
    </div>
  );
}

function AncientRunes({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20">
      <div className="absolute w-[500px] h-[500px] border-2 border-dashed rounded-full animate-spin-slow" style={{ borderColor: color, animationDuration: '60s' }} />
      <div className="absolute w-[350px] h-[350px] border border-double rounded-full animate-spin-reverse" style={{ borderColor: color, animationDuration: '40s' }} />
    </div>
  );
}

function CastleChallenge() {
  const clouds = Array.from({ length: 8 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-b from-slate-950 via-[#020617] to-black">
      <div className="absolute inset-0 bg-white/0 animate-lightning z-10" />
      <div className="absolute bottom-0 w-full h-[40vh] opacity-30 bg-slate-900 shadow-[0_-20px_60px_rgba(30,58,138,0.4)]" style={{ clipPath: "polygon(0% 100%, 0% 70%, 15% 45%, 30% 65%, 45% 35%, 60% 70%, 80% 25%, 100% 65%, 100% 100%)" }} />
      {clouds.map((_, i) => (
        <div key={i} className="absolute bg-slate-800/40 blur-[90px] rounded-full animate-cloud-drift" style={{ width: `${Math.random() * 500 + 300}px`, height: '280px', top: `${Math.random() * 35}%`, left: `${-30 + (i * 20)}%`, animationDuration: `${22 + Math.random() * 15}s`, animationDelay: `${i * -4}s` } as any} />
      ))}
      <div className="absolute bottom-20 left-10 md:left-24 animate-flag-wave origin-bottom opacity-80 z-20">
         <div className="w-2 h-40 bg-zinc-800 shadow-xl" />
         <div className="absolute top-0 left-2 w-24 h-14 bg-red-900 border-l-4 border-red-500 clip-flag" />
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-zinc-950 border-t border-white/5 z-10" />
      <div className="absolute bottom-0 w-full h-32 flex justify-around items-end z-20 px-10">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="mb-10 group relative">
             <div className="w-5 h-8 bg-orange-400 rounded-t-full blur-[1px] shadow-[0_0_20px_#f97316,0_0_40px_rgba(249,115,22,0.4)] animate-pulse" style={{ animationDelay: `${i * 0.9}s`, animationDuration: '3.5s' }} />
             <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-orange-500/10 blur-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DigitalMatrix({ color }: { color: string }) {
  const columns = Array.from({ length: 20 });
  const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 font-mono pointer-events-none flex justify-between px-4">
      {columns.map((_, i) => (
        <div key={i} className="flex flex-col animate-matrix-fall" style={{ animationDelay: `${Math.random() * 5}s`, animationDuration: `${Math.random() * 3 + 5}s` } as any}>
          {Array.from({ length: 20 }).map((_, j) => (
            <span key={j} style={{ color: j === 0 ? '#fff' : color }} className="my-1 text-xs">{characters[Math.floor(Math.random() * characters.length)]}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function PollenDrift({ color }: { color: string }) {
  const spores = Array.from({ length: 30 });
  return (
    <>{spores.map((_, i) => (
      <div key={i} className="absolute top-[-20px] rounded-full animate-pollen-fall" style={{ width: '6px', height: '6px', backgroundColor: color, left: `${Math.random() * 100}%`, opacity: 0, animationDuration: `${Math.random() * 8 + 8}s`, "--sway": `${Math.random() * 160 - 80}px` } as any} />
    ))}</>
  );
}

function StoneGears({ color }: { color: string }) {
  const satelliteGears = [
    { size: 'w-32 h-32', top: '10%', left: '15%', speed: '20s', rev: false },
    { size: 'w-24 h-24', top: '20%', left: '80%', speed: '12s', rev: true },
    { size: 'w-48 h-48', top: '70%', left: '10%', speed: '30s', rev: true },
    { size: 'w-20 h-20', top: '80%', left: '85%', speed: '15s', rev: false },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {satelliteGears.map((gear, i) => (
        <div key={i} className={`absolute ${gear.size} border-4 border-dotted rounded-full flex items-center justify-center ${gear.rev ? 'animate-spin-reverse' : 'animate-spin-slow'}`} style={{ top: gear.top, left: gear.left, borderColor: color, animationDuration: gear.speed }} >
          <div className="w-1/2 h-1/2 border-2 border-dashed rounded-full" style={{ borderColor: color }} />
        </div>
      ))}
    </div>
  );
}

/* --- MAIN COMPONENT --- */
export default function ClueLayout({
  subtitle, title, icon, clue, accentColor, effectType = "fire", 
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

  const accent = (opacity: string) => accentColor.replace("hsl(", "hsl(").replace(")", ` / ${opacity})`);

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
        {effectType === "castle" && <CastleChallenge />}
        {effectType === "footprint" && <FootprintTrail color={accent("0.6")} />}
        {effectType === "magic" && <MagicEnergyField color={accent("0.8")} />}
      </div>

      <div className={`relative z-10 w-full max-w-2xl mx-auto text-center ${effectType === 'wind' ? 'animate-wind-sway' : ''}`} 
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease-out" }}>
        
        <div className="mb-4 tracking-[0.5em] text-[10px] md:text-xs font-bold text-orange-400 uppercase">✦ {subtitle} ✦</div>
        <div className="flex justify-center mb-6">{icon}</div>

        <h1 className="text-4xl md:text-4xl uppercase mb-6" style={{ color: accentColor, fontFamily: "'Times New Roman', serif", textShadow: `0 0 20px ${accent("0.5")}` }}>
          {title}
        </h1>

      

        {/* --- UPDATED: THE ANCIENT SCROLL CLUE AREA --- */}
        <div 
          className="max-w-xl mx-auto relative group" 
          style={{ 
            opacity: revealClue ? 1 : 0, 
            transition: "all 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: revealClue ? "scale(1)" : "scale(0.95)"
          }}
        >
          {/* Left Roller */}
          <div className="absolute left-[-12px] md:left-[-18px] inset-y-[-6px] w-6 md:w-9 z-20 rounded-sm"
            style={{
              background: "linear-gradient(to right, #3e2723, #5d4037 30%, #a1887f 50%, #5d4037 70%, #3e2723)",
              boxShadow: "2px 0 10px rgba(0,0,0,0.8)"
            }}
          />

          {/* Scroll Body */}
          <div className="relative z-10 p-10 md:p-14 overflow-hidden" 
            style={{ 
              background: `
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                linear-gradient(to right, 
                  #bcaaa4 0%, 
                  #d7ccc8 5%, 
                  #f5f5dc 15%, 
                  #f5f5dc 85%, 
                  #d7ccc8 95%, 
                  #bcaaa4 100%)
              `,
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              clipPath: "polygon(0% 2%, 3% 0%, 97% 1%, 100% 2%, 100% 98%, 98% 100%, 2% 99%, 0% 98%)"
            }}
          >
            {/* Ink/Paper Texture Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" 
                 style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")` }} />

            {/* Subtle Compass Watermark */}
            <div className="absolute bottom-6 right-10 opacity-10 pointer-events-none rotate-12 scale-125">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#5d4037" strokeWidth="1.5">
                <circle cx="50" cy="50" r="45" />
                <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" fill="#5d4037" fillOpacity="0.2" />
                <text x="46" y="15" fontSize="10" fontWeight="bold" fill="#5d4037">N</text>
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <div className="mb-8 tracking-[0.4em] text-[10px] font-bold uppercase text-stone-600/60">— THE DISCOVERY —</div>
              <p className="text-2xl md:text-3xl font-serif text-stone-900 italic leading-relaxed drop-shadow-sm">
                {clue}
              </p>
            </div>
          </div>

          {/* Right Roller */}
          <div className="absolute right-[-12px] md:right-[-18px] inset-y-[-6px] w-6 md:w-9 z-20 rounded-sm"
            style={{
              background: "linear-gradient(to right, #3e2723, #5d4037 30%, #a1887f 50%, #5d4037 70%, #3e2723)",
              boxShadow: "-2px 0 10px rgba(0,0,0,0.8)"
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fire-rise { 0% { transform: translateY(0) scale(1); opacity: 0; } 20% { opacity: 1; } 100% { transform: translateY(-110vh) translateX(var(--drift)) scale(0.5); opacity: 0; } }
        @keyframes coin-fall { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(110vh); opacity: 0; } }
        @keyframes coin-spin { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
        @keyframes shooting-star { 0% { transform: translateX(0) translateY(0) rotate(-45deg); width: 0; opacity: 0; } 2% { opacity: 1; width: 120px; } 15% { transform: translateX(-120vw) translateY(120vh) rotate(-45deg); width: 0; opacity: 0; } 100% { transform: translateX(-120vw) translateY(120vh) rotate(-45deg); opacity: 0; } }
        @keyframes wind-flow { 0% { stroke-dashoffset: 1000; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { stroke-dashoffset: -1000; opacity: 0; } }
        @keyframes leaf-tumble { 0% { transform: translate(-10vw, 0) rotate(0deg); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translate(110vw, 30vh) rotate(720deg); opacity: 0; } }
        @keyframes wind-sway { 0%, 100% { transform: rotate(0deg) translateX(0); } 50% { transform: rotate(1deg) translateX(10px); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes matrix-fall { 0% { transform: translateY(-100%); opacity: 0; } 100% { transform: translateY(100%); opacity: 0; } }
        @keyframes pollen-fall { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(110vh) translateX(var(--sway)); opacity: 0; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes lightning { 0%, 94%, 96%, 100% { background-color: rgba(255, 255, 255, 0); } 95%, 97% { background-color: rgba(200, 230, 255, 0.4); } }
        @keyframes cloud-drift { from { transform: translateX(-20%); opacity: 0.3; } to { transform: translateX(120%); opacity: 0.6; } }
        @keyframes flag-wave { 0%, 100% { transform: rotate(-3deg) skewX(2deg); } 50% { transform: rotate(5deg) skewX(-2deg); } }
        @keyframes footstep-fade { 0% { opacity: 0; transform: scale(0.7); } 15% { opacity: 1; transform: scale(1); } 85% { opacity: 0.9; } 100% { opacity: 0; transform: scale(1.1); } }
        @keyframes float-particle { 0% { transform: translate(0, 0) scale(0); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translate(var(--tx), var(--ty)) scale(1.5); opacity: 0; } }
        
        .animate-fire-rise { animation: fire-rise linear infinite; }
        .animate-coin-fall { animation: coin-fall linear infinite; }
        .animate-coin-spin { animation: coin-spin 1.5s linear infinite; }
        .animate-shooting-star { animation: shooting-star infinite linear; }
        .animate-wind-flow { animation: wind-flow infinite linear; }
        .animate-leaf-tumble { animation: leaf-tumble infinite ease-in; }
        .animate-wind-sway { animation: wind-sway 5s infinite ease-in-out; }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-matrix-fall { animation: matrix-fall linear infinite; }
        .animate-pollen-fall { animation: pollen-fall infinite linear; }
        .animate-spin-slow { animation: spin-slow linear infinite; }
        .animate-spin-reverse { animation: spin-reverse linear infinite; }
        .animate-lightning { animation: lightning 6s infinite; }
        .animate-cloud-drift { animation: cloud-drift linear infinite; }
        .animate-flag-wave { animation: flag-wave 2.5s ease-in-out infinite; }
        .animate-footstep { animation: footstep-fade 8s infinite; }
        .animate-float-particle { animation: float-particle linear infinite; }
        .clip-flag { clip-path: polygon(0 0, 100% 50%, 0 100%); }
      `}</style>
    </main>
  );
}