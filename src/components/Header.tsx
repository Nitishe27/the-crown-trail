import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "The Conspiracy", short: "Home" },
  { path: "/compass", label: "I", short: "Compass" },
  { path: "/the-map", label: "II", short: "Map" },
  { path: "/magnifying-glass", label: "III", short: "Glass" },
  { path: "/iron-key", label: "IV", short: "Key" },
  { path: "/telescope", label: "V", short: "Scope" },
  { path: "/royal-scroll", label: "VI", short: "Scroll" },
  { path: "/hourglass", label: "VII", short: "Hourglass" },
  { path: "/lantern", label: "VIII", short: "Lantern" },
  { path: "/footprints", label: "IX", short: "Prints" },
  { path: "/crown-found", label: "X", short: "Crown" },
];

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, hsl(20 14% 4% / 0.98), hsl(20 14% 6% / 0.95))"
          : "linear-gradient(to bottom, hsl(20 14% 4% / 0.9), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(43 85% 55% / 0.2)" : "none",
        boxShadow: scrolled ? "0 4px 30px hsl(0 0% 0% / 0.5)" : "none",
      }}
    >
      {/* Top ornament bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: "linear-gradient(to right, transparent, hsl(43 85% 55% / 0.8), hsl(0 65% 40% / 0.6), hsl(43 85% 55% / 0.8), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <span
            className="text-2xl animate-pulse-glow"
            style={{ filter: "drop-shadow(0 0 8px hsl(43 85% 55% / 0.7))" }}
          >
            👑
          </span>
          <div>
            <div
              className="font-cinzel-deco text-sm leading-none"
              style={{ color: "hsl(43 85% 55%)", letterSpacing: "0.1em" }}
            >
              The Crown
            </div>
            <div
              className="font-cinzel text-xs leading-none mt-0.5"
              style={{ color: "hsl(43 55% 55%)", letterSpacing: "0.2em" }}
            >
              CONSPIRACY
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="nav-item font-cinzel text-xs px-3 py-1.5 rounded transition-all duration-300"
                style={{
                  color: isActive ? "hsl(43 85% 55%)" : "hsl(43 40% 60%)",
                  background: isActive ? "hsl(43 85% 55% / 0.1)" : "transparent",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "hsl(43 85% 75%)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "hsl(43 40% 60%)";
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: "hsl(43 85% 55%)",
                transform:
                  menuOpen && i === 0
                    ? "translateY(8px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-8px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? "600px" : "0",
          background: "hsl(20 14% 5% / 0.98)",
          borderTop: menuOpen ? "1px solid hsl(43 85% 55% / 0.2)" : "none",
        }}
      >
        <nav className="grid grid-cols-4 gap-1 p-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="font-cinzel text-center py-2 px-1 rounded text-xs transition-all duration-300"
                style={{
                  color: isActive ? "hsl(43 85% 55%)" : "hsl(43 40% 60%)",
                  background: isActive ? "hsl(43 85% 55% / 0.1)" : "transparent",
                  letterSpacing: "0.05em",
                }}
              >
                <div className="text-base mb-0.5">{item.label}</div>
                <div className="text-[10px] opacity-70">{item.short}</div>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
