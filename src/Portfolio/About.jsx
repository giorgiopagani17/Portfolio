import React, { useState, useEffect } from "react";
import AboutComputer from "../Computer/AboutComputer.jsx";
import AboutMobile from "../Mobile/AboutMobile.jsx";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <AboutMobile/>
      ) : (
        <AboutComputer/>
      )}
    </>
  );
};

export default About;
