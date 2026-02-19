import { useEffect, useState, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ClueLayoutProps {
  number: number;
  subtitle: string;
  title: string;
  icon: ReactNode;
  flavor: string;
  clue: string;
  accentColor: string;
  bgSymbol: string;
  nextPath: string;
  nextLabel: string;
  prevPath?: string;
}

const allPaths = [
  "/compass",
  "/the-map",
  "/magnifying-glass",
  "/iron-key",
  "/telescope",
  "/royal-scroll",
  "/hourglass",
  "/lantern",
  "/footprints",
  "/crown-found",
];

export default function ClueLayout({
  number, subtitle, title, icon, flavor, clue,
  accentColor, bgSymbol, nextPath, nextLabel, prevPath,
}: ClueLayoutProps) {
  const [visible, setVisible] = useState(false);
  const [revealClue, setRevealClue] = useState(false);

  useEffect(() => {
    setVisible(false);
    setRevealClue(false);
    const t1 = setTimeout(() => setVisible(true), 80);
    const t2 = setTimeout(() => setRevealClue(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [number]);

  const accent = (opacity: string) =>
    accentColor.replace("hsl(", "hsl(").replace(")", ` / ${opacity})`);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Big bg symbol */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ fontSize: "clamp(12rem, 40vw, 28rem)", opacity: 0.025 }}
        aria-hidden="true"
      >
        {bgSymbol}
      </div>

      {/* Radial accent glow */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at center, ${accent("0.06")} 0%, transparent 65%)`,
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
        {/* Subtitle */}
        <div className="text-center mb-6">
          <span
            className="font-cinzel text-xs uppercase tracking-widest"
            style={{ color: "hsl(43 40% 50%)", letterSpacing: "0.4em" }}
          >
            ✦ {subtitle} ✦
          </span>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">{icon}</div>

        {/* Title */}
        <h1
          className="font-cinzel-deco text-center mb-6"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.8rem)",
            color: accentColor,
            textShadow: `0 0 30px ${accent("0.5")}`,
            letterSpacing: "0.03em",
          }}
        >
          {title}
        </h1>

        {/* Gold divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent("0.5")})` }} />
          <span style={{ color: accentColor, fontSize: "1rem" }}>❧</span>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${accent("0.5")})` }} />
        </div>

        {/* Flavor */}
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
          "{flavor}"
        </p>

        {/* Clue card */}
        <div
          className="clue-card rounded p-8 mb-8 relative"
          style={{
            border: `1px solid ${accent("0.3")}`,
            animation: "border-glow-pulse 3s ease-in-out infinite",
            opacity: revealClue ? 1 : 0,
            transform: revealClue ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Corner accents */}
          {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r",
            "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((cls, i) => (
            <div key={i} className={`absolute w-5 h-5 ${cls}`}
              style={{ borderColor: accent("0.5") }} />
          ))}

          <div
            className="font-cinzel text-center text-xs mb-6 uppercase tracking-widest"
            style={{ color: accentColor, opacity: 0.7, letterSpacing: "0.35em" }}
          >
            — The Clue —
          </div>

          <p
            className="font-garamond text-center"
            style={{
              color: "hsl(43 55% 80%)",
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              lineHeight: 2,
            }}
          >
            {clue}
          </p>

          <div className="text-center mt-6" style={{ color: accentColor, opacity: 0.5 }}>
            ✦ ✦ ✦
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-10">
          {allPaths.map((path, i) => (
            <Link
              key={path}
              to={path}
              className="rounded-full transition-all duration-300"
              style={{
                width: i + 1 === number ? "24px" : "8px",
                height: "8px",
                background: i + 1 <= number ? accentColor : "hsl(43 30% 25%)",
                boxShadow: i + 1 === number ? `0 0 10px ${accent("0.6")}` : "none",
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {prevPath ? (
            <Link
              to={prevPath}
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
              border: `1px solid ${accent("0.5")}`,
              color: accentColor,
              fontSize: "0.78rem",
              letterSpacing: "0.2em",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = accent("0.1");
              el.style.boxShadow = `0 0 20px ${accent("0.3")}`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.boxShadow = "none";
            }}
          >
            {nextLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
