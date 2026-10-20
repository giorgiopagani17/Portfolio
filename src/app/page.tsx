"use client";

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

function HomePage() {
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
                    <div className="px-15 lg:px-30">
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

            <FloatingDock/>
        </div>
    );
}

export default HomePage;
