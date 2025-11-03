import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {

    return (
        <>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Front-End Developer, <br /> <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl md:text-5xl lg:text-8xl">Giorgio Pagani</span>
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
                    I am a junior front-end developer specialized in Quasar Vue,
                    React and TypeScript. Available for collaborations.
                </p>
            </BackgroundLines>
        </>
    );
}
