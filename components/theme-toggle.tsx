"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.querySelector<HTMLElement>(".site-shell")?.setAttribute("data-theme", next);
    setTheme(next);
  }
  return <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
    {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
  </button>;
}
