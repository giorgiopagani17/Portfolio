"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieSettingsButton() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      <motion.button
        type="button"
        aria-label="Cookie Settings"
        onClick={openCookieSettings}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          text-white
          shadow-lg
          shadow-black/40
          transition-colors
          hover:from-blue-700
          hover:to-purple-700
        "
      >
        <Cookie className="h-6 w-6" />
      </motion.button>
    </div>
  );
}