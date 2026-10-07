"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

type CookiePolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CookiePolicyModal({
  open,
  onClose,
}: CookiePolicyModalProps) {
  // Close with ESC
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  // Prevent page scrolling while the modal is open
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-policy-title"
        >
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              flex
              max-h-[85vh]
              w-full
              max-w-2xl
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0a0a0a]
              shadow-2xl
              shadow-black/60
            "
          >
            {/* Header */}
            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-white/10
                px-5
                py-4
                sm:px-6
              "
            >
              <div>
                <h2
                  id="cookie-policy-title"
                  className="text-base font-semibold text-white"
                >
                  Cookie Policy
                </h2>

                <p className="mt-0.5 text-xs text-white/40">
                  Information about the use of cookies
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Cookie Policy"
                className="
                  rounded-lg
                  p-2
                  text-white/50
                  transition-colors
                  hover:bg-white/5
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/20
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-5 py-6 sm:px-6">
              <div className="space-y-7 text-sm leading-6 text-white/60">
                {/* 1 */}
                <section>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    1. What are cookies?
                  </h3>

                  <p>
                    Cookies are small text files that websites may store
                    on the user&apos;s device while browsing. They can be
                    used to ensure the proper functioning of the website,
                    remember certain preferences, or collect statistical
                    information.
                  </p>
                </section>

                {/* 2 */}
                <section>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    2. Cookies used by this website
                  </h3>

                  <p>
                    This website primarily uses technical cookies
                    necessary to manage cookie consent preferences and,
                    subject to the user&apos;s consent, statistical
                    analytics tools.
                  </p>
                </section>

                {/* 3 */}
                <section>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    3. Google Analytics
                  </h3>

                  <p>
                    This website uses Google Analytics, a web analytics
                    service provided by Google, to collect statistical
                    information about how the website is used, such as
                    pages visited and information related to browsing
                    activity.
                  </p>

                  <p className="mt-3">
                    Google Analytics is activated only after the user has
                    provided consent through the cookie banner.
                  </p>
                </section>

                {/* 4 */}
                <section>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    4. Consent management
                  </h3>

                  <p>
                    When accessing the website for the first time, a
                    cookie banner is displayed allowing the user to
                    accept or reject non-essential cookies. The choice
                    is stored on the user&apos;s device.
                  </p>
                </section>

                {/* 5 */}
                <section>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    5. Changing your preferences
                  </h3>

                  <p>
                    Users can change or withdraw their consent at any
                    time through the cookie management feature available
                    on the website.
                  </p>
                </section>

                {/* 6 */}
                <section>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    6. Data Controller
                  </h3>

                  <p>
                    For information regarding the processing of personal
                    data and the use of cookies, users can contact the
                    website owner through the contact details provided
                    in the privacy section.
                  </p>
                </section>

                {/* Disclaimer */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-5 text-white/40">
                  <p>
                    This information is provided as a general template
                    and should be reviewed and adapted based on the
                    technologies actually used by the website and the
                    specific configuration of Google Analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="
                flex
                shrink-0
                justify-end
                border-t
                border-white/10
                px-5
                py-4
                sm:px-6
              "
            >
              <button
                type="button"
                onClick={onClose}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
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
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}