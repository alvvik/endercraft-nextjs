"use client";

import { useState } from "react";

export default function CopyIp() {
  const ip = "entercraft.pl";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Błąd podczas kopiowania:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-lg bg-main px-4 py-2 font-mono text-sm font-semibold  transition hover:bg-main-hover active:scale-95 focus-visible:outline-2 focus-visible:outline-blue-500"
    >
      {copied ? "Skopiowano IP! " : "Skopiuj IP: " + ip}
    </button>
  );
}
