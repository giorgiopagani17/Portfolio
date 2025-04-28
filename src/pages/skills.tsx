"use client";

import React, { useState, useEffect, useRef } from "react";
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
  SiPostman,
  SiJetbrains
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

type SkillCategory = "frontend" | "backend" | "tools";
type IconInfo = {
  icon: React.ElementType;
  color: string;
  name: string;
  description: string;
  category: SkillCategory;
};

export default function Skills() {
  const [positions, setPositions] = useState<{x: number, y: number}[]>([]);
  const [activeIcons, setActiveIcons] = useState<IconInfo[]>([]);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");
  const animationRef = useRef<number>(0);
  const progressRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 300 });
  const [isMobile, setIsMobile] = useState(false);

  const allIcons: IconInfo[] = [
    // Frontend
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript", description: "Advanced", category: "frontend" },
    { icon: SiReact, color: "#61DAFB", name: "React", description: "Intermediate", category: "frontend" },
    { icon: SiNextdotjs, color: "#ffffff", name: "Next.js", description: "Intermediate", category: "frontend" },
    { icon: SiVuedotjs, color: "#4FC08D", name: "Vue.js", description: "Advanced", category: "frontend" },
    { icon: SiAngular, color: "#DD0031", name: "Angular", description: "Intermediate", category: "frontend" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS", description: "Intermediate", category: "frontend" },
    { icon: SiBootstrap, color: "#7952B3", name: "Bootstrap", description: "Intermediate", category: "frontend" },
    { icon: SiQuasar, color: "#1976D2", name: "Quasar", description: "Advanced", category: "frontend" },

    // Backend
    { icon: FaJava, color: "#007396", name: "Java", description: "Beginner", category: "backend" },
    { icon: SiPhp, color: "#777BB4", name: "PHP", description: "Intermediate", category: "backend" },
    { icon: SiSymfony, color: "#ffffff", name: "Symfony", description: "Beginner", category: "backend" },
    { icon: SiPython, color: "#3776AB", name: "Python", description: "Intermediate", category: "backend" },
    { icon: SiNestjs, color: "#E0234E", name: "NestJS", description: "Intermediate", category: "backend" },
    { icon: SiNodedotjs, color: "#339933", name: "Node.js", description: "Intermediate", category: "backend" },
    { icon: SiMysql, color: "#4479A1", name: "MySQL", description: "Advanced", category: "backend" },
    { icon: SiDotnet, color: "#239120", name: "C#", description: "Beginner", category: "backend" },

    // Tools & General
    { icon: SiGit, color: "#F05032", name: "Git", description: "Intermediate", category: "tools" },
    { icon: SiGithub, color: "#ffffff", name: "GitHub", description: "Intermediate", category: "tools" },
    { icon: SiCanva, color: "#00C4CC", name: "Canva", description: "Intermediate", category: "tools" },
    { icon: SiNpm, color: "#CB3837", name: "NPM", description: "Intermediate", category: "tools" },
    { icon: SiDocker, color: "#2496ED", name: "Docker", description: "Beginner", category: "tools" },
    { icon: SiPostman, color: "#FF6C37", name: "Postman", description: "Intermediate", category: "tools" },
    { icon: VscVscode, color: "#007ACC", name: "VS Code", description: "Intermediate", category: "tools" },
    { icon: SiJetbrains, color: "#ffffff", name: "JetBrains", description: "Intermediate", category: "tools" },
  ];

  // Path dimensions and configuration
  const cornerRadius = 80;
  const speed = 0.5;

  // Filter icons when category changes
  useEffect(() => {
    const filteredIcons = allIcons.filter(icon => icon.category === activeCategory);
    setActiveIcons(filteredIcons);
    // Reset hover state when changing categories
    setHoveredIcon(null);
  }, [activeCategory]);

// Handle window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && pathRef.current) {
        // Get available width (minus some padding)
        const containerWidth = Math.min(containerRef.current.clientWidth - 40, 800);
        const windowWidth = window.innerWidth;

        // Check if mobile view (less than 768px width)
        const mobile = windowWidth < 768;
        setIsMobile(mobile);

        if (mobile) {
          // Vertical orientation for mobile - taller rectangle
          const containerHeight = Math.min(500, containerWidth * 1.6);
          setDimensions({
            width: containerWidth * 0.8,
            height: containerHeight
          });
        } else if (windowWidth >= 768 && windowWidth <= 1023) {
          // For medium screens (768-1024px), use more square-like proportions
          // to prevent overflow
          const size = Math.min(containerWidth * 0.8, 500);
          setDimensions({
            width: size,
            height: size
          });
        } else {
          // Horizontal orientation for larger screens
          const containerHeight = containerWidth * 0.5;
          setDimensions({
            width: containerWidth,
            height: containerHeight
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (activeIcons.length === 0) return;

    // Reset positions when category changes
    if (activeIcons.length !== positions.length) {
      progressRef.current = 0;
      setPositions(Array(activeIcons.length).fill({ x: 0, y: 0 }));
    }

    // Calculate total path length
    const { width, height } = dimensions;
    const totalLength = (2 * (width + height - 2 * cornerRadius) + 2 * Math.PI * cornerRadius) - (activeIcons.length * 48);

    // Animation loop using requestAnimationFrame
    const animate = () => {
      if (hoveredIcon === null) {
        progressRef.current = (progressRef.current + speed) % totalLength;
      }

      const newPositions = [];
      // Distribute icons evenly around the path
      const iconSpacing = totalLength / activeIcons.length;

      for (let i = 0; i < activeIcons.length; i++) {
        // Calculate position with even spacing
        const position = (i * iconSpacing + progressRef.current) % totalLength;
        const iconPosition = getPositionOnPath(position, width, height, cornerRadius);
        newPositions.push(iconPosition);
      }

      setPositions(newPositions);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [hoveredIcon, dimensions, activeIcons]);

  function getPositionOnPath(step: number, width: number, height: number, radius: number) {
    const padding = 0;
    const innerWidth = width - 2 * padding;
    const innerHeight = height - 2 * padding;

    // Calculate lengths of each segment
    const topLength = innerWidth - 2 * radius;
    const rightLength = innerHeight - 2 * radius;
    const bottomLength = innerWidth - 2 * radius;
    const leftLength = innerHeight - 2 * radius;

    // Arc lengths (quarter circle)
    const cornerArcLength = Math.PI * radius / 2;

    // Total path length
    const totalLength = topLength + rightLength + bottomLength + leftLength +
        4 * cornerArcLength;

    // Normalize step to total length
    const normalizedStep = step % totalLength;
    let remainingDistance = normalizedStep;
    let x, y;

    // Calculate position based on normalized step

    // Top side (left to right)
    if (remainingDistance < topLength) {
      x = radius + remainingDistance;
      y = 0;
      return { x: x + padding, y: y + padding };
    }
    remainingDistance -= topLength;

    // Top-right corner arc
    if (remainingDistance < cornerArcLength) {
      const angle = remainingDistance / radius;
      x = innerWidth - radius + (Math.sin(angle) * radius);
      y = radius - (Math.cos(angle) * radius);
      return { x: x + padding, y: y + padding };
    }
    remainingDistance -= cornerArcLength;

    // Right side (top to bottom)
    if (remainingDistance < rightLength) {
      x = innerWidth;
      y = radius + remainingDistance;
      return { x: x + padding, y: y + padding };
    }
    remainingDistance -= rightLength;

    // Bottom-right corner arc
    if (remainingDistance < cornerArcLength) {
      const angle = remainingDistance / radius;
      x = innerWidth - radius + (Math.cos(angle) * radius);
      y = innerHeight - radius + (Math.sin(angle) * radius);
      return { x: x + padding, y: y + padding };
    }
    remainingDistance -= cornerArcLength;

    // Bottom side (right to left)
    if (remainingDistance < bottomLength) {
      x = innerWidth - radius - remainingDistance;
      y = innerHeight;
      return { x: x + padding, y: y + padding };
    }
    remainingDistance -= bottomLength;

    // Bottom-left corner arc
    if (remainingDistance < cornerArcLength) {
      const angle = remainingDistance / radius;
      x = radius - (Math.sin(angle) * radius);
      y = innerHeight - radius + (Math.cos(angle) * radius);
      return { x: x + padding, y: y + padding };
    }
    remainingDistance -= cornerArcLength;

    // Left side (bottom to top)
    if (remainingDistance < leftLength) {
      x = 0;
      y = innerHeight - radius - remainingDistance;
      return { x: x + padding, y: y + padding };
    }
    remainingDistance -= leftLength;

    // Top-left corner arc
    const angle = remainingDistance / radius;
    x = radius - (Math.cos(angle) * radius);
    y = radius - (Math.sin(angle) * radius);
    return { x: x + padding, y: y + padding };
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIcon(index);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleCategoryChange = (category: SkillCategory) => {
    setActiveCategory(category);
  };

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-10" ref={containerRef}>

      {/* Category tabs */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-2 px-4 flex-wrap">
        <button
            onClick={() => handleCategoryChange("frontend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === "frontend"
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-neutral-800/70 text-neutral-300 hover:bg-neutral-700"
            }`}
        >
          Frontend
        </button>
        <button
            onClick={() => handleCategoryChange("backend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === "backend"
                    ? "bg-cyan-500 text-white shadow-md"
                    : "bg-neutral-800/70 text-neutral-300 hover:bg-neutral-700"
            }`}
        >
          Backend
        </button>
        <button
            onClick={() => handleCategoryChange("tools")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === "tools"
                    ? "bg-purple-500 text-white shadow-md"
                    : "bg-neutral-800/70 text-neutral-300 hover:bg-neutral-700"
            }`}
        >
          Tools
        </button>
      </div>

      {/* Container with tabs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mt-10 lg:mt-0 rounded-[80px] border-2 border-neutral-700 bg-gradient-to-br from-neutral-900/80 to-neutral-900/30 backdrop-blur-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        style={{ width: dimensions.width, height: dimensions.height }}
        ref={pathRef}
      >
        {/* Category title in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center px-4"
            >
              <h3 className={`text-3xl md:text-5xl font-bold bg-clip-text text-transparent ${
                  activeCategory === "frontend"
                      ? "bg-gradient-to-r from-blue-500 to-blue-700"
                      : activeCategory === "backend"
                          ? "bg-gradient-to-r from-cyan-500 to-cyan-700"
                          : "bg-gradient-to-r from-purple-500 to-purple-700"
              }`}>
                {activeCategory === "frontend"
                  ? "Frontend Development"
                  : activeCategory === "backend"
                    ? "Backend Development"
                    : "Tools & Skills"
                }
              </h3>
              <p className="text-sm md:text-lg mt-2 w-full text-neutral-400 max-w-lg">
                {activeCategory === "frontend"
                  ? "Experience with modern frontend frameworks and responsive design"
                  : activeCategory === "backend"
                    ? "Building scalable server-side applications and APIs"
                    : "Development tools and supporting technologies"
                }
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Icons */}
        <AnimatePresence>
          {positions.map((pos, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              className="absolute"
              style={{
                left: `${pos.x - 25}px`,
                top: `${pos.y - 25}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredIcon === index ? 50 : 1
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <motion.div
                className={`w-10 h-10 md:w-12 md:h-12 bg-neutral-800/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition-shadow duration-300`}
                whileHover={{ scale: 1.15 }}
                animate={hoveredIcon === index ? {
                  boxShadow: `0 0 0 3px rgba(${parseInt(activeIcons[index].color.substr(1, 2), 16)}, ${parseInt(activeIcons[index].color.substr(3, 2), 16)}, ${parseInt(activeIcons[index].color.substr(5, 2), 16)}, 0.4)`
                } : {}}
              >
                {activeIcons[index] && React.createElement(activeIcons[index].icon, {
                  size: isMobile ? 18 : 22,
                  color: activeIcons[index].color,
                  className: "transition-transform"
                })}
              </motion.div>

              {/* Tooltip */}
              {hoveredIcon === index && activeIcons[index] && (
                <div className="fixed pointer-events-none z-50" style={{left: pos.x - 100 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="bg-neutral-800 p-3 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] min-w-[160px] md:min-w-[200px] max-w-[250px]"
                    style={{
                      position: "absolute",
                      top: "24px",
                      left: "50%",
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 border-b border-neutral-700 pb-2">
                        {React.createElement(activeIcons[index].icon, {
                          size: 18,
                          color: activeIcons[index].color
                        })}
                        <span className="font-medium text-white">{activeIcons[index].name}</span>
                      </div>
                      <p className="text-sm text-text-neutral-300">Level: {activeIcons[index].description}</p>
                    </div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neutral-800 rotate-45"></div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
