"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CookiePolicyModal from "./cookie-policy-modal";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

type ConsentValue = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (value: ConsentValue) => {
    localStorage.setItem(CONSENT_KEY, value);

    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", {
        detail: value,
      })
    );

    setVisible(false);
  };

  const acceptCookies = () => {
    saveConsent("accepted");
  };

  const rejectCookies = () => {
    saveConsent("rejected");
  };

  useEffect(() => {
  const handleOpenSettings = () => {
    setVisible(true);
  };

  window.addEventListener(
    "open-cookie-settings",
    handleOpenSettings
  );

  return () => {
    window.removeEventListener(
      "open-cookie-settings",
      handleOpenSettings
    );
  };
}, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6"
          >
            <div className="mx-auto max-w-5xl">
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-black/50
                  shadow-2xl
                  shadow-black/40
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    p-5
                    sm:p-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                  "
                >
                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className="text-lg"
                        aria-hidden="true"
                      >
                        <Cookie className="h-5 w-5" />
                      </span>

                      <h2 className="text-sm font-semibold text-white">
                        This website uses cookies
                      </h2>
                    </div>

                    <p className="max-w-3xl text-sm leading-6 text-white/60">
                      We use Google Analytics to understand how the website
                      is used and improve your experience. You can accept
                      or reject non-essential cookies.
                    </p>

                    <button
                      type="button"
                      onClick={() => setPolicyOpen(true)}
                      className="
                        mt-2
                        text-sm
                        font-medium
                        text-white/80
                        underline
                        underline-offset-4
                        transition-colors
                        hover:text-white
                      "
                    >
                      Cookie Policy
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={rejectCookies}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/20
                        bg-white/5
                        px-4
                        py-2
                        text-white/80
                        transition-colors
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      Reject
                    </button>

                    <button
                      type="button"
                      onClick={acceptCookies}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        px-4
                        py-2
                        text-white
                        transition-colors
                        hover:from-blue-700
                        hover:to-purple-700
                      "
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookiePolicyModal
        open={policyOpen}
        onClose={() => setPolicyOpen(false)}
      />
    </>
  );
}