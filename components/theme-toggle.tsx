"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const shell = document.querySelector<HTMLElement>(".site-shell");
    if (!shell) return;
    const next = shell.dataset.theme === "dark" ? "light" : "dark";
    shell.dataset.theme = next;
    const button = document.querySelector<HTMLButtonElement>(".theme-toggle");
    button?.setAttribute("aria-label", `Switch to ${next === "dark" ? "light" : "dark"} theme`);
    if (button) button.innerHTML = next === "dark" ? '<span aria-hidden="true">☼</span>' : '<span aria-hidden="true">☾</span>';
  }
  return <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Switch to light theme"><Sun size={17} aria-hidden="true" /></button>;
}
