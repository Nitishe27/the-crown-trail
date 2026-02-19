

import { useEffect, useState, ReactNode } from "react";

interface ClueLayoutProps {
  number: number;
  subtitle: string;
  title: string;
  icon: ReactNode;
  flavor: string;
  clue: string;
  accentColor: string;
  bgSymbol: string;
}

// Internal component for High-Visibility Fire Sparkles
function FireSparkles({ color }: { color: string }) {
  // Increased count to 45 for a richer effect
  const sparkles = Array.from({ length: 45 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {sparkles.map((_, i) => {
        const size = Math.random() * 5 + 2; // Larger particles
        const duration = Math.random() * 4 + 3;
        const delay = Math.random() * 7;
        const left = Math.random() * 100;
        const drift = Math.random() * 150 - 75; 

        return (
          <div
            key={i}
            className="absolute bottom-[-50px] rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${left}%`,
              opacity: 0,
              filter: "blur(0.5px)",
              // Stronger dual-layer glow
              boxShadow: `0 0 12px ${color}, 0 0 24px ${color}`, 
              animation: `fire-rise ${duration}s infinite ease-in ${delay}s`,
              "--drift": `${drift}px`,
            } as any}
          />
        );
      })}
      <style>{`
        @keyframes fire-rise {
          0% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 0.8; 
          }
          100% { 
            transform: translateY(-120vh) translateX(var(--drift)) scale(0.2); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
}

export default function ClueLayout({
  number,
  subtitle,
  title,
  icon,
  flavor,
  clue,
  accentColor,
  bgSymbol,
}: ClueLayoutProps) {
  const [visible, setVisible] = useState(false);
  const [revealClue, setRevealClue] = useState(false);

  useEffect(() => {
    setVisible(false);
    setRevealClue(false);
    const t1 = setTimeout(() => setVisible(true), 80);
    const t2 = setTimeout(() => setRevealClue(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [number]);

  const accent = (opacity: string) =>
    accentColor.replace("hsl(", "hsl(").replace(")", ` / ${opacity})`);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* 1. Enhanced Fire Sparkles */}
      <FireSparkles color={accent("1")} />

      {/* 2. Background Vignette (makes center content stand out) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-orange-900/20 via-transparent to-black pointer-events-none" />

      {/* 3. Big Background Symbol */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ 
          fontSize: "clamp(12rem, 40vw, 28rem)", 
          opacity: 0.04,
          color: accentColor,
          filter: "blur(2px)"
        }}
        aria-hidden="true"
      >
        {bgSymbol}
      </div>

      {/* 4. Content Wrapper */}
      <div
        className="relative z-10 w-full max-w-2xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-6">
          <span
            className="font-cinzel text-xs uppercase tracking-[0.5em] font-bold"
            style={{ color: "hsl(43 80% 60%)", textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
          >
            ✦ {subtitle} ✦
          </span>
        </div>

        <div className="flex justify-center mb-8 drop-shadow-[0_0_20px_rgba(255,165,0,0.4)]">
          {icon}
        </div>

        <h1
          className="font-cinzel-deco text-center mb-6"
          style={{
            fontSize: "clamp(1.8rem, 6vw, 3.2rem)",
            color: accentColor,
            textShadow: `0 0 40px ${accent("0.6")}, 0 0 10px black`,
          }}
        >
          {title}
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent("0.8")})` }} />
          <span style={{ color: accentColor, fontSize: "1.2rem" }}>❧</span>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${accent("0.8")})` }} />
        </div>

        {/* Flavor Text */}
        <p
          className="font-garamond italic text-center mb-10 text-[1.2rem] font-medium"
          style={{
            color: "hsl(43 40% 75%)",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.5s",
            textShadow: "1px 1px 2px black"
          }}
        >
          "{flavor}"
        </p>

        {/* Clue Card */}
        <div
          className="rounded-lg p-10 mb-8 relative bg-black/60 backdrop-blur-md shadow-2xl"
          style={{
            border: `2px solid ${accent("0.4")}`,
            opacity: revealClue ? 1 : 0,
            transform: revealClue ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Decorative Corners - Thicker for visibility */}
          {[
            "top-0 left-0 border-t-2 border-l-2",
            "top-0 right-0 border-t-2 border-r-2",
            "bottom-0 left-0 border-b-2 border-l-2",
            "bottom-0 right-0 border-b-2 border-r-2",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-6 h-6 ${cls}`}
              style={{ borderColor: accent("0.7") }}
            />
          ))}

          <div
            className="font-cinzel text-center text-xs mb-6 uppercase tracking-[0.4em] font-bold"
            style={{ color: accentColor, opacity: 0.9 }}
          >
            — The Hidden Clue —
          </div>

          <p
            className="font-garamond text-center leading-relaxed font-medium"
            style={{
              color: "white",
              fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)",
              textShadow: "0 2px 4px black"
            }}
          >
            {clue}
          </p>

          <div className="text-center mt-8 text-[1rem]" style={{ color: accentColor, opacity: 0.6 }}>
            ✦ ✦ ✦
          </div>
        </div>
      </div>
    </main>
  );
}

