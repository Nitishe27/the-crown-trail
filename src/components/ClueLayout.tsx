

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

type EffectType = "fire" | "pollen" | "wind" | "ancient";

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

/* --- ATMOSPHERIC EFFECT COMPONENTS --- */

function AncientRunes({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20">
      <div 
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border-2 border-dashed rounded-full animate-spin-slow"
        style={{ borderColor: color, animationDuration: '60s' }}
      />
      <div 
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-double rounded-full animate-spin-reverse"
        style={{ borderColor: color, opacity: 0.5, animationDuration: '40s' }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full blur-[100px] animate-pulse"
        style={{ backgroundColor: color, opacity: 0.15 }}
      />
    </div>
  );
}

function FireSparkles({ color }: { color: string }) {
  const sparkles = Array.from({ length: 45 });
  return (
    <>
      {sparkles.map((_, i) => (
        <div key={i} className="absolute bottom-[-50px] rounded-full animate-fire-rise"
          style={{
            width: `${Math.random() * 5 + 2}px`, height: `${Math.random() * 5 + 2}px`,
            backgroundColor: color, left: `${Math.random() * 100}%`, opacity: 0,
            filter: "blur(0.5px)", boxShadow: `0 0 12px ${color}, 0 0 24px ${color}`,
            animationDuration: `${Math.random() * 4 + 3}s`, animationDelay: `${Math.random() * 7}s`,
            "--drift": `${Math.random() * 150 - 75}px`,
          } as any}
        />
      ))}
    </>
  );
}

function PollenDrift({ color }: { color: string }) {
  const spores = Array.from({ length: 35 });
  return (
    <>
      {spores.map((_, i) => (
        <div key={i} className="absolute top-[-20px] rounded-full animate-pollen-fall"
          style={{
            width: `${Math.random() * 6 + 4}px`, height: `${Math.random() * 6 + 4}px`,
            backgroundColor: color, left: `${Math.random() * 100}%`, opacity: 0,
            filter: "blur(2px)", boxShadow: `0 0 8px ${color}`,
            animationDuration: `${Math.random() * 10 + 10}s`, animationDelay: `${Math.random() * 10}s`,
            "--sway": `${Math.random() * 160 - 80}px`,
          } as any}
        />
      ))}
    </>
  );
}

function WindBreeze({ color }: { color: string }) {
  const windPaths = Array.from({ length: 8 });
  const leaves = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg className="w-full h-full opacity-60" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {windPaths.map((_, i) => (
          <path
            key={i}
            d={`M -200 ${Math.random() * 1000} Q ${200 + Math.random() * 300} ${Math.random() * 1000}, 1200 ${Math.random() * 1000}`}
            fill="transparent"
            stroke={color}
            strokeWidth={Math.random() * 3 + 1}
            strokeLinecap="round"
            className="animate-wind-flow"
            style={{
              filter: "blur(6px)",
              strokeDasharray: "200 800",
              animationDuration: `${Math.random() * 2 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            } as any}
          />
        ))}
      </svg>
      {leaves.map((_, i) => (
        <div key={i} className="absolute animate-leaf-tumble text-2xl"
          style={{
            top: `${Math.random() * 100 - 10}%`, left: "-10%",
            color: Math.random() > 0.5 ? "#556b2f" : "#cd853f",
            opacity: 0,
            animationDuration: `${Math.random() * 3 + 3}s`,
            animationDelay: `${Math.random() * 10}s`,
          } as any}
        >🍃</div>
      ))}
    </div>
  );
}

/* --- MAIN COMPONENT --- */

export default function ClueLayout({
  subtitle, title, icon, flavor, clue, accentColor, bgSymbol, effectType = "fire", 
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
      
      {/* ATMOSPHERIC LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <AncientRunes color={accent("0.5")} />
        {effectType === "fire" && <FireSparkles color={accent("1")} />}
        {effectType === "pollen" && <PollenDrift color="hsl(65 70% 80%)" />}
        {effectType === "wind" && <WindBreeze color={accent("0.8")} />}
      </div>

      {/* UI CONTENT */}
      <div className={`relative z-10 w-full max-w-2xl mx-auto text-center ${effectType === 'wind' ? 'animate-wind-sway' : ''}`} 
        style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease-out",
        }}>
        
        {/* SUBTITLE */}
        <div className="mb-4 tracking-[0.5em] text-[10px] md:text-xs font-bold text-orange-400 uppercase opacity-80">
          ✦ {subtitle} ✦
        </div>

        {/* ICON */}
        <div className="flex justify-center mb-6 opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          {icon}
        </div>

        {/* THE "CLASSIC" TITLE: Serif, Wide Tracking, Subtle Glow */}
        <h1 className="text-4xl md:text-6xl uppercase mb-6" 
            style={{ 
              color: accentColor, 
              fontFamily: "'Times New Roman', Times, serif",
              letterSpacing: "0.15em",
              fontWeight: 400,
              textShadow: `0 0 15px ${accent("0.4")}, 0 0 2px ${accent("0.7")}`
            }}>
          {title}
        </h1>

        {/* HORIZONTAL DIVIDER (Matches "The Brass Telescope" style) */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-40">
           <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-white" />
           <div className="text-[10px]" style={{ color: accentColor }}>❦</div>
           <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-white" />
        </div>

        {/* FLAVOR TEXT */}
        <p className="italic mb-10 opacity-70 font-serif text-xl leading-relaxed px-8">
          "{flavor}"
        </p>

        {/* CLUE CARD: Sharp borders and serif body */}
        <div className="max-w-xl mx-auto rounded-sm p-10 bg-black/40 backdrop-blur-md border-[0.5px] relative shadow-2xl" 
             style={{ borderColor: accent("0.2"), opacity: revealClue ? 1 : 0, transition: "opacity 1.2s" }}>
          
          {/* Sharp Ornamental Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l opacity-50" style={{ borderColor: accentColor }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r opacity-50" style={{ borderColor: accentColor }} />

          <div className="mb-8 tracking-[0.4em] text-[9px] font-bold uppercase opacity-40">— THE HIDDEN CLUE —</div>
          <p className="text-xl md:text-2xl leading-[1.8] font-serif text-slate-200">
            {clue}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fire-rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-110vh) translateX(var(--drift)); opacity: 0; }
        }
        @keyframes pollen-fall {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(110vh) translateX(var(--sway)); opacity: 0; }
        }
        @keyframes wind-flow {
          0% { stroke-dashoffset: 1000; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: -1000; opacity: 0; }
        }
        @keyframes leaf-tumble {
          0% { transform: translate(0, 0) rotate(0deg) scale(0.8); opacity: 0; }
          15% { opacity: 0.8; }
          100% { transform: translate(120vw, 40vh) rotate(1080deg) scale(1.2); opacity: 0; }
        }
        @keyframes wind-sway {
          0%, 100% { transform: rotate(0deg) translateX(0); }
          50% { transform: rotate(1deg) translateX(10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-fire-rise { animation: fire-rise infinite linear; }
        .animate-pollen-fall { animation: pollen-fall infinite linear; }
        .animate-wind-flow { animation: wind-flow infinite ease-in-out; }
        .animate-leaf-tumble { animation: leaf-tumble infinite ease-in; }
        .animate-wind-sway { animation: wind-sway 4s infinite ease-in-out; }
        .animate-spin-slow { animation: spin-slow linear infinite; }
        .animate-spin-reverse { animation: spin-reverse linear infinite; }
      `}</style>
    </main>
  );
}