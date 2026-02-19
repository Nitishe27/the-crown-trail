import crownHero from "@/assets/crown-hero.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${crownHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.18) saturate(0.7)",
        }}
      />

      {/* Fog layers */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, hsl(43 85% 55% / 0.06) 0%, transparent 70%), radial-gradient(ellipse at center, hsl(20 14% 6% / 0.4) 30%, transparent 100%)",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Crown Icon */}
        <div
          className="text-8xl mb-6 animate-float"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.2s",
            filter: "drop-shadow(0 0 30px hsl(43 85% 55% / 0.8)) drop-shadow(0 0 60px hsl(43 85% 55% / 0.4))",
          }}
        >
          👑
        </div>

        {/* Title */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          <h1
            className="font-cinzel-deco mb-2 leading-tight"
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              color: "hsl(43 85% 55%)",
              textShadow: "0 0 40px hsl(43 85% 55% / 0.7), 0 0 80px hsl(43 85% 55% / 0.3)",
              letterSpacing: "0.05em",
            }}
          >
            The Crown
          </h1>
          <h2
            className="font-cinzel mb-8"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
              color: "hsl(43 55% 65%)",
              letterSpacing: "0.4em",
            }}
          >
            CONSPIRACY
          </h2>
        </div>

        {/* Divider */}
        <div
          className="flex items-center gap-4 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.8s",
          }}
        >
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(43 85% 55% / 0.5))" }} />
          <span style={{ color: "hsl(43 85% 55%)", fontSize: "1.2rem" }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, hsl(43 85% 55% / 0.5))" }} />
        </div>

        {/* Body text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 1s",
          }}
        >
          <p
            className="font-garamond mb-4 italic"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "hsl(43 40% 70%)",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: "0 auto 1.5rem",
            }}
          >
            "The crown was taken in the dead of night. Ten clues remain — each one a thread in the grand tapestry of deception."
          </p>

          <p
            className="font-cinzel mb-10 tracking-widest"
            style={{ color: "hsl(0 65% 55%)", fontSize: "0.75rem", letterSpacing: "0.3em" }}
          >
            ✦ DARE YOU UNRAVEL THE MYSTERY? ✦
          </p>

          <Link
            to="/compass"
            className="inline-block font-cinzel group relative overflow-hidden"
            style={{
              padding: "1rem 3rem",
              border: "1px solid hsl(43 85% 55% / 0.5)",
              color: "hsl(43 85% 55%)",
              fontSize: "0.85rem",
              letterSpacing: "0.25em",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "hsl(43 85% 55% / 0.1)";
              el.style.borderColor = "hsl(43 85% 55% / 0.9)";
              el.style.boxShadow = "0 0 30px hsl(43 85% 55% / 0.3), inset 0 0 30px hsl(43 85% 55% / 0.05)";
              el.style.color = "hsl(43 95% 70%)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.borderColor = "hsl(43 85% 55% / 0.5)";
              el.style.boxShadow = "none";
              el.style.color = "hsl(43 85% 55%)";
            }}
          >
            BEGIN THE QUEST
          </Link>
        </div>
        {/* Clue number hints block has been removed from here */}
      </div>
    </main>
  );
}

function Particles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 6}s`,
    size: `${2 + Math.random() * 3}px`,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: "hsl(43 85% 65%)",
            opacity: p.opacity,
            animation: `particle-drift ${p.duration} ${p.delay} ease-in infinite`,
          }}
        />
      ))}
    </div>
  );
}
