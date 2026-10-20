import React from "react";

interface SectionHeaderProps {
    title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md mb-10">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-[45rem] xl:max-w-[60rem] h-20 md:h-28 lg:h-40 relative">
                {/* Gradients */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-[10%] md:inset-x-[15%] bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#A855F7] to-transparent opacity-80 blur-[3px]"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-x-[10%] md:inset-x-[15%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#6366F1] to-transparent"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 h-px w-1/3 md:w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"
                />

                {/* Core component */}
                <div className="relative w-full h-full">
                    <h1 className="w-full absolute inset-0 flex items-center justify-center md:text-7xl text-5xl lg:text-8xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent z-20">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};