"use client";

import useDarkMode from "@/hooks/use-dark-mode";
import Button from "./button";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ defaultMode = "dark" }) {
  const { theme, toggleTheme } = useDarkMode(defaultMode);

  // 1. Check your browser console to see what this prints!
  console.log("Current theme state is:", theme);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="bg-red-500 text-white flex items-center gap-2 p-2 border-2 border-black"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
}
