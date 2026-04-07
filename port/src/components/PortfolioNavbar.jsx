import React, { useEffect, useState } from "react";
import PillNav from "./PillNav";

export default function PortfolioNavbar({ className = "", style = {} }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "forest");
  }, []);

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
      />
  );
}
