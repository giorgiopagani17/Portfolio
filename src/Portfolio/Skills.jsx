import React, { useState, useEffect } from "react";
import SkillsComputer from "../Computer/SkillsComputer.jsx";
import SkillsMobile from "../Mobile/SkillsMobile.jsx";

const Skills = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <SkillsMobile />
            ) : (
                <SkillsComputer />
            )}
        </>
    );

};

export default Skills;
