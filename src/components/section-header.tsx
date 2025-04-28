import React from "react";

interface SectionHeaderProps {
    title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md mb-10">
            <div className="w-[45rem] h-20 md:h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 bottom-0 z-1000 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 bottom-0 z-1000 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 bottom-0 z-1000 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 bottom-0 z-1000 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

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
