"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconMailFilled, IconClipboardFilled, IconMenu2 } from "@tabler/icons-react";

export const FloatingDock = ({
   className,
   mobileClassName,
 }: {
  className?: string;
  mobileClassName?: string;
  items: Array<{title: string; icon: React.ReactNode; href: string;}>;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const socialIcons = [
    {
      title: "GitHub",
      tooltip: "Visit my GitHub profile",
      icon: <IconBrandGithub className="w-full h-full" />,
      href: "https://github.com/giorgiopagani17",
      isDownload: false,
    },
    {
      title: "LinkedIn",
      tooltip: "Connect with me on LinkedIn",
      icon: <IconBrandLinkedin className="w-full h-full" />,
      href: "https://www.linkedin.com/in/giorgio-pagani-5ab4b42b1/",
      isDownload: false,
    },
    {
      title: "Email",
      tooltip: "Send me an email",
      icon: <IconMailFilled className="w-full h-full" />,
      href: "mailto:giorgio.pagani2003@gmail.com?subject=Ti%20contatto%20dal%20tuo%20sito%20portfolio&body=Ciao%20Giorgio,%20ti%20contatto%20per%20...",
      isDownload: false,
    },
    {
      title: "Curriculum Vitae",
      tooltip: "Download my CV",
      icon: <IconClipboardFilled className="w-full h-full" />,
      href: "/cv-giorgio-pagani.pdf",
      isDownload: true,
    },
  ];

  if (isMobile) {
    return (
      <div className={cn("fixed bottom-6 left-6 z-20", className, mobileClassName)}>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isExpanded ? 1.2 : 1 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center cursor-pointer shadow-lg z-30 transition-colors"
        >
          <div className="w-6 h-6 text-white">
            <IconMenu2 className="w-full h-full" />
          </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <div className="absolute bottom-16 left-1 flex flex-col gap-4 items-center">
              {socialIcons.map((social, index) => (
                <motion.div
                  key={social.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SocialIcon {...social} />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={cn("fixed bottom-6 left-6 flex flex-col gap-4 z-20", className)}>
      {socialIcons.map((social) => (
        <SocialIcon key={social.title} {...social} />
      ))}
    </div>
  );
};

const SocialIcon = ({
  title,
  tooltip,
  icon,
  href,
  isDownload = false
}: {
  title: string;
  tooltip: string;
  icon: React.ReactNode;
  href: string;
  isDownload?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        download={isDownload}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: hovered ? 1.2 : 1 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-neutral-700"
        >
          <div className="w-6 h-6 text-neutral-200">
            {icon}
          </div>
        </motion.div>
      </a>

      {/* Tooltip */}
      <div className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-neutral-800 text-neutral-200 px-2 py-1 rounded-md text-sm shadow-md whitespace-nowrap">
          {tooltip}
        </div>
        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-neutral-800 transform rotate-45 -translate-y-1/2"></div>
      </div>
    </div>
  );
};
