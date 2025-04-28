"use client";

import Image from "next/image";
import React from "react";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import AboutMe from "@/pages/aboutme";
import Projects2 from "@/pages/main-projects";
import Skills from "@/pages/skills";
import SecondaryProjects from "@/pages/secondary-projects";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SectionHeader } from "@/components/section-header";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";

function HomePage() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Aceternity UI",
            icon: (
                <Image
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo"
                />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-300" />
            ),
            href: "#",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <ShootingStars />
            <StarsBackground />

            {/* Sezione Home */}
            <Home />

            <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center w-full">
                {/* Sezione AboutMe */}
                <section className="w-full mt-20">
                    <SectionHeader title="About Me" />
                    <div className="px-5 md:px-30">
                        <AboutMe />
                    </div>
                </section>

                {/* Sezione Skills */}
                <section className="w-full mt-20 lg:mt-25">
                    <SectionHeader title="My Skills"/>
                    <div>
                        <Skills />
                    </div>
                </section>

                {/* Sezione SecondaryProjects */}
                <section className="w-full mt-15 md:mt-10 lg:mt-0">
                    <SectionHeader title="My Projects" />
                    <div>
                        <Projects2 />
                    </div>
                </section>

                <section className="w-full mt-10 mb-20">
                    <SectionHeader title="Others" />
                    <div>
                        <SecondaryProjects />
                    </div>
                </section>
            </BackgroundBeamsWithCollision>

            {/* Footer */}
            <Footer />

            <FloatingDock
                items={links}
            />
        </div>
    );
}

export default HomePage;
