import React from "react";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
}) => {
  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="relative h-20 w-full max-w-xs sm:max-w-md md:h-28 md:max-w-2xl lg:h-40 lg:max-w-[45rem] xl:max-w-[60rem]">
        {/* Gradient viola sfocato */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-[2px] w-[240px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent opacity-80 blur-[3px] md:w-[420px] lg:w-[560px]"
        />

        {/* Linea principale */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-[240px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6366F1] to-transparent md:w-[420px] lg:w-[560px]"
        />

        {/* Accento viola centrale */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"
        />

        {/* Titolo */}
        <div className="relative h-full w-full">
          <h1 className="absolute inset-0 z-20 flex w-full items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center text-5xl font-bold text-transparent md:text-7xl lg:text-8xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};