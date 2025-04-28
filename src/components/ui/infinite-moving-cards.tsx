"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {SiGithub} from "react-icons/si";
import Image, { StaticImageData } from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
items: {
  image: string | StaticImageData;
  title: string;
  description: string;
  codeUrl: string;
  languages: {name: string, icon?: React.ReactNode}[];
}[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 overflow-hidden md:w-[450px] border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.title + idx}
          >
            <div className="flex flex-col h-full">
              <div className="w-full h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {item.languages.map((lang, langIdx) => (
                    <span
                        key={langIdx}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                    >
                      {lang.icon && (
                          <span className="mr-1">{lang.icon}</span>
                      )}
                      {lang.name}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {item.description}
                </p>

                <a
                    href={item.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors w-full text-center"
                >
                  View the code
                  <SiGithub className="ml-2" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
