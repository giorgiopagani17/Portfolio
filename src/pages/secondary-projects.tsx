"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  SiWordpress,
  SiElementor,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import MarioLanzaSocietyImage from "@/assets/secondary-project/mariolanzasociety.png";
import ArredamentoSeriateImage from "@/assets/secondary-project/arredamentoseriate.png";
import FCCItaliaImage from "@/assets/secondary-project/fccitalia.png";

export default function SecondaryProjects() {
    return (
        <div className="h-[32rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={projectItems}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const projectItems = [
    {
        image: MarioLanzaSocietyImage,
        title: "Mario Lanza Society",
        description: "Landing page developed for the Mario Lanza Society, featuring a modern and responsive design focused on presenting the society, its activities, and its connection to Mario Lanza.",
        codeUrl: "https://mariolanzasociety.com/",
        languages: [
          {name: "WordPress", icon: <SiWordpress className="inline" />},
          {name: "Elementor", icon: <SiElementor className="inline" />},
          {name: "Figma", icon: <SiFigma className="inline" />}
        ]
    },
    {
        image: ArredamentoSeriateImage,
        title: "Arredamento Seriate",
        description: "Landing page developed for a furniture and interior design business in Seriate, featuring a modern and responsive design to showcase its products, services, and design solutions.",
        codeUrl: "https://www.arredamentoseriate.com/",
        languages: [
          {name: "WordPress", icon: <SiWordpress className="inline" />},
          {name: "Elementor", icon: <SiElementor className="inline" />},
          {name: "Figma", icon: <SiFigma className="inline" />}
        ]
    },
    {
        image: FCCItaliaImage,
        title: "FCC Italia",
        description: "Corporate landing page developed for FCC Italia, featuring a modern and responsive design to present the company, its services, and key areas of expertise.",
        codeUrl: "https://www.fccitalia.it/",
        languages: [
          {name: "WordPress", icon: <SiWordpress className="inline" />},
          {name: "Elementor", icon: <SiElementor className="inline" />},
          {name: "Canva", icon: <SiCanva className="inline" />}
        ]
    },
];
