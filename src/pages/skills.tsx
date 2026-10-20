
"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiVuedotjs,
  SiDocker,
  SiGithub,
  SiNpm,
  SiAngular,
  SiBootstrap,
  SiQuasar,
  SiPhp,
  SiSymfony,
  SiNestjs,
  SiMysql,
  SiDotnet,
  SiCanva,
  SiFigma,
  SiPostman,
  SiGoland,
  SiJetbrains,
  SiWordpress,
  SiElementor,
  SiFlutter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

type SkillCategory = "frontend" | "backend" | "tools";
type TooltipPlacement = "top" | "bottom";

type IconInfo = {
  icon: React.ElementType;
  color: string;
  name: string;
  description: string;
  category: SkillCategory;
};

type TooltipPosition = {
  left: number;
  top: number;
  arrowLeft: number;
  placement: TooltipPlacement;
};

const TOOLTIP_WIDTH_DESKTOP = 240;
const TOOLTIP_WIDTH_MOBILE = 220;
const TOOLTIP_HEIGHT = 90;
const TOOLTIP_MARGIN = 12;
const TOOLTIP_GAP = 16;

export default function Skills() {
  const [positions, setPositions] = useState<
    { x: number; y: number }[]
  >([]);
  const [activeIcons, setActiveIcons] = useState<IconInfo[]>([]);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("frontend");
  const [dimensions, setDimensions] = useState({
    width: 600,
    height: 300,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipPosition, setTooltipPosition] =
    useState<TooltipPosition>({
      left: 12,
      top: 12,
      arrowLeft: 110,
      placement: "bottom",
    });

  const animationRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const allIcons: IconInfo[] = [
    // Frontend & Mobile
    {
      icon: SiTypescript,
      color: "#3178C6",
      name: "TypeScript",
      description: "Advanced",
      category: "frontend",
    },
    {
      icon: SiReact,
      color: "#61DAFB",
      name: "React",
      description: "Intermediate",
      category: "frontend",
    },
    {
      icon: SiNextdotjs,
      color: "#ffffff",
      name: "Next.js",
      description: "Intermediate",
      category: "frontend",
    },
    {
      icon: SiVuedotjs,
      color: "#4FC08D",
      name: "Vue.js",
      description: "Advanced",
      category: "frontend",
    },
    {
      icon: SiAngular,
      color: "#DD0031",
      name: "Angular",
      description: "Intermediate",
      category: "frontend",
    },
    {
      icon: SiTailwindcss,
      color: "#06B6D4",
      name: "Tailwind CSS",
      description: "Intermediate",
      category: "frontend",
    },
    {
      icon: SiBootstrap,
      color: "#7952B3",
      name: "Bootstrap",
      description: "Intermediate",
      category: "frontend",
    },
    {
      icon: SiQuasar,
      color: "#1976D2",
      name: "Quasar",
      description: "Advanced",
      category: "frontend",
    },
    {
      icon: SiReact,
      color: "#61DAFB",
      name: "React Native",
      description: "Intermediate",
      category: "frontend",
    },
    {
      icon: SiFlutter,
      color: "#02569B",
      name: "Flutter",
      description: "Beginner",
      category: "frontend",
    },

    // Backend
    {
      icon: FaJava,
      color: "#F24E1E",
      name: "Java",
      description: "Beginner",
      category: "backend",
    },
    {
      icon: SiPhp,
      color: "#777BB4",
      name: "PHP",
      description: "Intermediate",
      category: "backend",
    },
    {
      icon: SiSymfony,
      color: "#ffffff",
      name: "Symfony",
      description: "Beginner",
      category: "backend",
    },
    {
      icon: SiPython,
      color: "#3776AB",
      name: "Python",
      description: "Intermediate",
      category: "backend",
    },
    {
      icon: SiNestjs,
      color: "#E0234E",
      name: "NestJS",
      description: "Intermediate",
      category: "backend",
    },
    {
      icon: SiNodedotjs,
      color: "#339933",
      name: "Node.js",
      description: "Intermediate",
      category: "backend",
    },
    {
      icon: SiMysql,
      color: "#4479A1",
      name: "MySQL",
      description: "Advanced",
      category: "backend",
    },
    {
      icon: SiDotnet,
      color: "#239120",
      name: "C#",
      description: "Beginner",
      category: "backend",
    },
    {
      icon: SiGoland,
      color: "#00ADD8",
      name: "Go",
      description: "Beginner",
      category: "backend",
    },

    // Tools & General
    {
      icon: SiGit,
      color: "#F05032",
      name: "Git",
      description: "Advanced",
      category: "tools",
    },
    {
      icon: SiGithub,
      color: "#ffffff",
      name: "GitHub",
      description: "Advanced",
      category: "tools",
    },
    {
      icon: SiCanva,
      color: "#00C4CC",
      name: "Canva",
      description: "Intermediate",
      category: "tools",
    },
    {
      icon: SiFigma,
      color: "#F24E1E",
      name: "Figma",
      description: "Intermediate",
      category: "tools",
    },
    {
      icon: SiNpm,
      color: "#CB3837",
      name: "NPM",
      description: "Advanced",
      category: "tools",
    },
    {
      icon: SiDocker,
      color: "#2496ED",
      name: "Docker",
      description: "Intermediate",
      category: "tools",
    },
    {
      icon: SiPostman,
      color: "#FF6C37",
      name: "Postman",
      description: "Intermediate",
      category: "tools",
    },
    {
      icon: VscVscode,
      color: "#007ACC",
      name: "VS Code",
      description: "Advanced",
      category: "tools",
    },
    {
      icon: SiJetbrains,
      color: "#ffffff",
      name: "JetBrains",
      description: "Intermediate",
      category: "tools",
    },
    {
      icon: SiWordpress,
      color: "#21759B",
      name: "WordPress",
      description: "Advanced",
      category: "tools",
    },
    {
      icon: SiElementor,
      color: "#F24E1E",
      name: "Elementor",
      description: "Advanced",
      category: "tools",
    },
  ];

  const cornerRadius = 80;
  const speed = 0.5;

  // Aggiorna le icone in base alla categoria.
  useEffect(() => {
    setActiveIcons(
      allIcons.filter((icon) => icon.category === activeCategory)
    );
    setHoveredIcon(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  // Calcola posizione del popup e della freccia.
  const updateTooltipPosition = useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight;

      const tooltipWidth = Math.min(
        isMobile
          ? TOOLTIP_WIDTH_MOBILE
          : TOOLTIP_WIDTH_DESKTOP,
        viewportWidth - TOOLTIP_MARGIN * 2
      );

      const left = Math.max(
        TOOLTIP_MARGIN,
        Math.min(
          rect.left + rect.width / 2 - tooltipWidth / 2,
          viewportWidth - tooltipWidth - TOOLTIP_MARGIN
        )
      );

      // Preferisce sotto l'icona; se non c'è spazio, sopra.
      const fitsBelow =
        rect.bottom + TOOLTIP_GAP + TOOLTIP_HEIGHT <=
        viewportHeight - TOOLTIP_MARGIN;

      const placement: TooltipPlacement = fitsBelow
        ? "bottom"
        : "top";

      const desiredTop =
        placement === "bottom"
          ? rect.bottom + TOOLTIP_GAP
          : rect.top - TOOLTIP_GAP - TOOLTIP_HEIGHT;

      const top = Math.max(
        TOOLTIP_MARGIN,
        Math.min(
          desiredTop,
          viewportHeight - TOOLTIP_HEIGHT - TOOLTIP_MARGIN
        )
      );

      // Posiziona la freccia in corrispondenza del centro dell'icona.
      const arrowLeft = Math.max(
        16,
        Math.min(
          rect.left + rect.width / 2 - left,
          tooltipWidth - 16
        )
      );

      setTooltipPosition({
        left,
        top,
        arrowLeft,
        placement,
      });
    },
    [isMobile]
  );

  const getIconElement = useCallback(
    (index: number) => {
      const skill = activeIcons[index];
      if (!skill) return null;
      return iconRefs.current.get(`${activeCategory}-${skill.name}`) ?? null;
    },
    [activeIcons, activeCategory]
  );

  // Gestione delle dimensioni responsive.
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current || !pathRef.current) return;

      const containerWidth = Math.max(
        220,
        Math.min(
          containerRef.current.clientWidth - 40,
          800
        )
      );

      const windowWidth = window.innerWidth;
      const mobile = windowWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
        setDimensions({
          width: containerWidth * 0.8,
          height: Math.min(500, containerWidth * 1.6),
        });
      } else if (windowWidth <= 1023) {
        const size = Math.min(containerWidth * 0.8, 500);
        setDimensions({ width: size, height: size });
      } else {
        setDimensions({
          width: containerWidth,
          height: containerWidth * 0.5,
        });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Animazione delle icone lungo il percorso.
  useEffect(() => {
    if (activeIcons.length === 0) return;

    const { width, height } = dimensions;

    const topLength = width - 2 * cornerRadius;
    const rightLength = height - 2 * cornerRadius;
    const bottomLength = width - 2 * cornerRadius;
    const leftLength = height - 2 * cornerRadius;
    const cornerArcLength = (Math.PI * cornerRadius) / 2;

    const totalLength =
      topLength +
      rightLength +
      bottomLength +
      leftLength +
      4 * cornerArcLength;

    if (activeIcons.length !== positions.length) {
      progressRef.current = 0;

      setPositions(
        Array.from(
          { length: activeIcons.length },
          () => ({ x: 0, y: 0 })
        )
      );
    }

    let frameId = 0;

    const animate = () => {
      if (hoveredIcon === null) {
        progressRef.current =
          (progressRef.current + speed) % totalLength;
      }

      const iconSpacing = totalLength / activeIcons.length;

      const newPositions = activeIcons.map((_, index) => {
        const position =
          (progressRef.current + index * iconSpacing) %
          totalLength;

        return getPositionOnPath(
          position,
          width,
          height,
          cornerRadius
        );
      });

      setPositions(newPositions);

      frameId = requestAnimationFrame(animate);
      animationRef.current = frameId;
    };

    frameId = requestAnimationFrame(animate);
    animationRef.current = frameId;

    return () => {
      cancelAnimationFrame(frameId);

      if (animationRef.current === frameId) {
        animationRef.current = null;
      }
    };
    // positions viene aggiornato a ogni frame intenzionalmente.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredIcon, dimensions, activeIcons]);

  // Chiude il tooltip quando si scorre.
  useEffect(() => {
    if (hoveredIcon === null) return;

    const closeOnScroll = () => setHoveredIcon(null);
    const repositionOnResize = () =>
      updateTooltipPosition(getIconElement(hoveredIcon));

    window.addEventListener("scroll", closeOnScroll, true);
    window.addEventListener("resize", repositionOnResize);

    return () => {
      window.removeEventListener("scroll", closeOnScroll, true);
      window.removeEventListener("resize", repositionOnResize);
    };
  }, [hoveredIcon, updateTooltipPosition, getIconElement]);

  useEffect(() => {
    if (hoveredIcon === null) return;
    updateTooltipPosition(getIconElement(hoveredIcon));
  }, [hoveredIcon, isMobile, dimensions, updateTooltipPosition, getIconElement]);

  function getPositionOnPath(
    step: number,
    width: number,
    height: number,
    radius: number
  ) {
    const padding = 0;
    const innerWidth = width - 2 * padding;
    const innerHeight = height - 2 * padding;

    const topLength = innerWidth - 2 * radius;
    const rightLength = innerHeight - 2 * radius;
    const bottomLength = innerWidth - 2 * radius;
    const leftLength = innerHeight - 2 * radius;
    const cornerArcLength = (Math.PI * radius) / 2;

    const totalLength =
      topLength +
      rightLength +
      bottomLength +
      leftLength +
      4 * cornerArcLength;

    const normalizedStep =
      ((step % totalLength) + totalLength) % totalLength;

    let remainingDistance = normalizedStep;
    let x: number;
    let y: number;

    // Lato superiore.
    if (remainingDistance < topLength) {
      x = radius + remainingDistance;
      y = 0;
      return { x: x + padding, y: y + padding };
    }

    remainingDistance -= topLength;

    // Angolo superiore destro.
    if (remainingDistance < cornerArcLength) {
      const angle = remainingDistance / radius;
      x = innerWidth - radius + Math.sin(angle) * radius;
      y = radius - Math.cos(angle) * radius;
      return { x: x + padding, y: y + padding };
    }

    remainingDistance -= cornerArcLength;

    // Lato destro.
    if (remainingDistance < rightLength) {
      x = innerWidth;
      y = radius + remainingDistance;
      return { x: x + padding, y: y + padding };
    }

    remainingDistance -= rightLength;

    // Angolo inferiore destro.
    if (remainingDistance < cornerArcLength) {
      const angle = remainingDistance / radius;
      x = innerWidth - radius + Math.cos(angle) * radius;
      y = innerHeight - radius + Math.sin(angle) * radius;
      return { x: x + padding, y: y + padding };
    }

    remainingDistance -= cornerArcLength;

    // Lato inferiore.
    if (remainingDistance < bottomLength) {
      x = innerWidth - radius - remainingDistance;
      y = innerHeight;
      return { x: x + padding, y: y + padding };
    }

    remainingDistance -= bottomLength;

    // Angolo inferiore sinistro.
    if (remainingDistance < cornerArcLength) {
      const angle = remainingDistance / radius;
      x = radius - Math.sin(angle) * radius;
      y = innerHeight - radius + Math.cos(angle) * radius;
      return { x: x + padding, y: y + padding };
    }

    remainingDistance -= cornerArcLength;

    // Lato sinistro.
    if (remainingDistance < leftLength) {
      x = 0;
      y = innerHeight - radius - remainingDistance;
      return { x: x + padding, y: y + padding };
    }

    remainingDistance -= leftLength;

    // Angolo superiore sinistro.
    const angle = remainingDistance / radius;
    x = radius - Math.cos(angle) * radius;
    y = radius - Math.sin(angle) * radius;

    return { x: x + padding, y: y + padding };
  }

  const handleMouseEnter = (
    index: number,
    element: HTMLElement
  ) => {
    setHoveredIcon(index);
    updateTooltipPosition(element);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleCategoryChange = (category: SkillCategory) => {
    setHoveredIcon(null);
    setActiveCategory(category);
  };

  const selectedSkill =
    hoveredIcon !== null ? activeIcons[hoveredIcon] : null;

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[600px] w-full flex-col items-center justify-center py-10"
    >
      {/* Category tabs */}
      <div className="absolute left-0 right-0 top-0 flex flex-wrap justify-center gap-2 px-4">
        <button
          onClick={() => handleCategoryChange("tools")}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeCategory === "tools"
              ? "bg-purple-500 text-white shadow-md"
              : "bg-neutral-800/70 text-neutral-300 hover:bg-neutral-700"
          }`}
        >
          Tools
        </button>

        <button
          onClick={() => handleCategoryChange("frontend")}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeCategory === "frontend"
              ? "bg-blue-500 text-white shadow-md"
              : "bg-neutral-800/70 text-neutral-300 hover:bg-neutral-700"
          }`}
        >
          Frontend &amp; Mobile
        </button>

        <button
          onClick={() => handleCategoryChange("backend")}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeCategory === "backend"
              ? "bg-cyan-500 text-white shadow-md"
              : "bg-neutral-800/70 text-neutral-300 hover:bg-neutral-700"
          }`}
        >
          Backend
        </button>
      </div>

      {/* Main animated container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mt-10 rounded-[80px] border-2 border-neutral-700 bg-gradient-to-br from-neutral-900/80 to-neutral-900/30 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] backdrop-blur-md lg:mt-0"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
        ref={pathRef}
      >
        {/* Center title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="px-4 text-center"
            >
              <h3
                className={`bg-clip-text text-3xl font-bold text-transparent md:text-5xl ${
                  activeCategory === "frontend"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700"
                    : activeCategory === "backend"
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-700"
                      : "bg-gradient-to-r from-purple-500 to-purple-700"
                }`}
              >
                {activeCategory === "frontend"
                  ? "Frontend & Mobile"
                  : activeCategory === "backend"
                    ? "Backend"
                    : "Tools & Skills"}
              </h3>

              <p className="mt-2 w-full max-w-lg text-sm text-neutral-400 md:text-lg">
                {activeCategory === "frontend"
                  ? "Experience with modern frontend frameworks, responsive design, and mobile application development."
                  : activeCategory === "backend"
                    ? "Building scalable server-side applications and APIs, with a focus on performance, reliability, and maintainability."
                    : "Development tools, supporting technologies, and graphic design tools for building and refining digital products."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated icons */}
        <AnimatePresence>
          {positions.map((pos, index) => {
            const skill = activeIcons[index];

            if (!skill) return null;

            const iconKey = `${activeCategory}-${skill.name}`;

            return (
              <motion.div
                key={iconKey}
                ref={(element) => {
                  if (element) iconRefs.current.set(iconKey, element);
                  else iconRefs.current.delete(iconKey);
                }}
                className="absolute"
                style={{
                  left: `${pos.x - 25}px`,
                  top: `${pos.y - 25}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: hoveredIcon === index ? 1000 : 1,
                }}
                onMouseEnter={(e) => handleMouseEnter(index, e.currentTarget)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={(e) => handleMouseEnter(index, e.currentTarget)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/90 shadow-lg backdrop-blur-md transition-shadow duration-300 md:h-12 md:w-12"
                  whileHover={{ scale: 1.15 }}
                  animate={
                    hoveredIcon === index
                      ? {
                          boxShadow: `0 0 0 3px rgba(${parseInt(
                            skill.color.slice(1, 3),
                            16
                          )}, ${parseInt(
                            skill.color.slice(3, 5),
                            16
                          )}, ${parseInt(
                            skill.color.slice(5, 7),
                            16
                          )}, 0.4)`,
                        }
                      : {}
                  }
                >
                  {React.createElement(skill.icon, {
                    size: isMobile ? 18 : 22,
                    color: skill.color,
                    className: "transition-transform",
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Tooltip rendered outside animated stacking contexts */}
      {selectedSkill &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="pointer-events-none"
            style={{
              position: "fixed",
              left: tooltipPosition.left,
              top: tooltipPosition.top,
              width: Math.min(
                isMobile
                  ? TOOLTIP_WIDTH_MOBILE
                  : TOOLTIP_WIDTH_DESKTOP,
                typeof document !== "undefined"
                  ? document.documentElement.clientWidth -
                      TOOLTIP_MARGIN * 2
                  : TOOLTIP_WIDTH_DESKTOP
              ),
              zIndex: 100,
            }}
          >
            <motion.div
              key={`${activeCategory}-${selectedSkill.name}`}
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="relative rounded-lg bg-neutral-800 p-3 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 border-b border-neutral-700 pb-2">
                  {React.createElement(selectedSkill.icon, {
                    size: 18,
                    color: selectedSkill.color,
                  })}

                  <span className="font-medium text-white">
                    {selectedSkill.name}
                  </span>
                </div>

                <p className="text-sm text-neutral-300">
                  Level: {selectedSkill.description}
                </p>
              </div>

              {/* Triangolino */}
              <div
                className="absolute"
                style={{
                  left: tooltipPosition.arrowLeft,
                  transform: "translateX(-50%)",
                  ...(tooltipPosition.placement === "bottom"
                    ? {
                        top: -9,
                        width: 0,
                        height: 0,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderBottom: "9px solid rgb(38, 38, 38)",
                      }
                    : {
                        bottom: -9,
                        width: 0,
                        height: 0,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "9px solid rgb(38, 38, 38)",
                      }),
                }}
              />
            </motion.div>
          </div>,
          document.body
        )}
    </div>
  );
}
