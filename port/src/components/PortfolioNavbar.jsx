import React, { useEffect, useState } from "react";
import PillNav from "./PillNav";

const themes = [
  "default",
  "dark",
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export default function PortfolioNavbar({ className = "", style = {} }) {
  const [open, setOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("default");

  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
    setOpen(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "forest";
    document.documentElement.setAttribute("data-theme", saved);
    setCurrentTheme(saved);
  }, []);

  const ThemeToggle = (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden cursor-pointer border-none bg-neutral text-neutral-content"
        style={{
          backgroundColor: "transparent",
          width: "42px",
          height: "42px",
        }}
        aria-label="Toggle Theme"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-[50px] w-[280px] p-3 bg-base-200/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 z-[1001]">
          <div className="grid grid-cols-4 gap-2 max-h-[300px] overflow-y-auto pr-1">
            {themes.map((theme) => (
              <div
                key={theme}
                data-theme={theme}
                onClick={() => changeTheme(theme)}
                className={`cursor-pointer rounded-lg p-2 border transition-all hover:scale-105 bg-base-100 text-base-content ${
                  currentTheme === theme
                    ? "ring-2 ring-primary border-primary"
                    : "border-base-300 hover:border-primary/50"
                }`}
                title={theme}
              >
                <div className="text-[10px] text-center mb-1 font-medium capitalize truncate">{theme}</div>
                <div className="flex gap-1 justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <PillNav
      className={className}
      style={style}
        items={[
          { label: "Home", href: "#hero" },
          { label: "About", href: "#about" },
          { label: "Work", href: "#project" },
          { label: "Skill", href: "#skill" },
          { label: "Contact", href: "#contact" },
          // { label: "Blog", href: "#blog" },
        ]}
        activeHref=""
        baseColor="var(--color-neutral, #000000)"
        pillColor="var(--color-base-100, #ffffff)"
        hoveredPillTextColor="var(--color-neutral-content, #ffffff)"
        pillTextColor="var(--color-base-content, #000000)"
        rightNode={ThemeToggle}
      />
  );
}
