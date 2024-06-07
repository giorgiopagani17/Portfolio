import React, { useState, useEffect } from "react";
import HomeComputer from "../Computer/HomeComputer.jsx";
import HomeMobile from "../Mobile/HomeMobile.jsx";

const Home = () => {
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
        <HomeMobile />
      ) : (
        <HomeComputer />
      )}
    </>
  );
};

export default Home;
