import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "./elements/Css/Skills.css";
import Card from './elements/ProjectsCardsTemplate';
import Marquee from 'react-fast-marquee';

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false); // State to control pause

  const handleMarqueeHover = () => {
    setIsPaused(true); // Pause Marquee on hover
  };

  const handleMarqueeLeave = () => {
    setIsPaused(false); // Resume Marquee when leaving hover
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-20 text-white text-6xl">
        <strong>My Projects</strong>
      </div>
      <div className="app text-center p-6 mt-10  w-[110vh]">
        <Marquee gradient={false} speed={50} pauseOnHover={true} paused={isPaused} onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>
          <Card image="../../../fotoinstagram.png" repository="https://github.com/giorgiopagani17/instagram-project-work-py" tech1="React" techimage1="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" tech2="Python" techimage2="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png" tech3="Bootstrap" techimage3="https://iconape.com/wp-content/png_logo_vector/bootstrap-framework-logo.png" title="Instagram" content="This is the first card." />
          <Card image="../../../fotoblackjack.png" repository="https://github.com/giorgiopagani17/blackjack" tech1="Html" techimage1="https://cdn-icons-png.flaticon.com/512/732/732212.png" tech2="Css" techimage2="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" tech3="JavaScript" techimage3="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"  title="BlackJack" content="This is the second card." />
          <Card image="../../../fotoportfolio.png" repository="https://github.com/giorgiopagani17/Portfolio" tech1="React" techimage1="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" tech2="Tailwind" techimage2="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" tech3="Vite" techimage3="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"  title="Portfolio" content="This is the third card." />
        </Marquee>
      </div>
    </div>
  );
};

export default Projects;
