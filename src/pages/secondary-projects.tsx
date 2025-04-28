"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiLinux,
  SiWordpress
} from "react-icons/si";
import PortfolioImage from "@/assets/secondary-project/portfolio.png";
import EmailSenderImage from "@/assets/secondary-project/emailsender.png";
import BlackJackImage from "@/assets/secondary-project/blackjack.png";

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
        image: PortfolioImage,
        title: "Portfolio",
        description: "Personal portfolio developed with React and TypeScript, featuring animated UI components and responsive design. Designed to showcase my projects and skills in an interactive way.",
        codeUrl: "https://github.com/yourusername/project1",
        languages: [
          {name: "React", icon: <SiReact className="inline" />},
          {name: "Next.js", icon: <SiNextdotjs className="inline" />},
          {name: "TypeScript", icon: <SiTypescript className="inline" />}
        ]
    },
    {
        image: EmailSenderImage,
        title: "Email Sender From CSV",
        description: "Linux-hosted web application that automatically sends WiFi credentials via email to users listed in a CSV file. I also implemented a tutorial page on the company's WordPress site to guide network access.",
        codeUrl: "https://github.com/giorgiopagani17/EmailSenderFromCsv",
        languages: [
          {name: "Node.js", icon: <SiNodedotjs className="inline" />},
          {name: "Linux", icon: <SiLinux className="inline" />},
          {name: "WordPress", icon: <SiWordpress className="inline" />}
        ]
    },
    {
        image: BlackJackImage,
        title: "Blackjack",
        description: "Recreation of the Blackjack game developed with HTML, CSS, and JavaScript. The dealer follows the official game rules, providing an authentic experience without real betting, created for entertainment purposes only.",
        codeUrl: "https://github.com/giorgiopagani17/blackjack",
        languages: [
          {name: "HTML", icon: <SiHtml5 className="inline" />},
          {name: "CSS", icon: <SiCss3 className="inline" />},
          {name: "JavaScript", icon: <SiJavascript className="inline" />}
        ]
    },
];
