import React, { useState, useEffect } from "react";
import ProjectsComputer from "../Computer/ProjectsComputer.jsx";
import ProjectsMobile from "../Mobile/ProjectsMobile.jsx";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <ProjectsMobile />
      ) : (
        <ProjectsComputer />
      )}
    </>
  );
};

export default Projects;
