import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "../Css/Home.css";
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { scroller } from 'react-scroll';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const delay = 100; 
  const fullText = "Full-Stack Developer";
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);

  const handleIconMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    const email = "giorgio.pagani2003@gmail.com";
    const subject = "Ti contatto dal tuo sito Portfolio!";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink);
  };

  const handleDownloadClick = () => {
    const url = '/cv.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cv_giorgiopagani');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (index < fullText.length) {
          setTypedText(prevText => prevText + fullText[index]);
          setIndex(prevIndex => prevIndex + 1);
        } else {
          setTimeout(() => {
            setIsTyping(false);
            clearInterval(typeInterval);
          }, 1100); 
        }
      } else {
        if (index > 0) {
          setTypedText(prevText => prevText.slice(0, -1));
          setIndex(prevIndex => prevIndex - 1);
        } else {
          setIsTyping(true);
          clearInterval(typeInterval);
        }
      }
    }, delay);

    return () => clearInterval(typeInterval);
  }, [index, isTyping]);

  const scrollToAboutSection = () => {
    scroller.scrollTo('about', {
      smooth: true,
      spy: true,
      duration: 500,
      offset: -50
    });
  };
  
  return (
    <div id="home" itemScope itemType="http://schema.org/Person">
        <div className="flex items-center justify-center custom-min-height gap-x-[10%] mt-[-2%]" itemProp="mainContentOfPage">
          <Card color="transparent" shadow={false} className="slide-in-left">
            <CardBody className="mb-6 pl-5 text-white md:text-center">
              <h1><strong className="text-white text-5xl md:text-7xl lg:text-8xl">I'm Giorgio Pagani</strong></h1>
              <h2 className="mt-3 h-7"><strong id="text" className="text-[#3b83bd] text-3xl md:text-5xl lg:text-6xl" itemProp="jobTitle">{typedText}</strong></h2>
              <p className="mt-10 text-base md:text-xl lg:text-2xl">Sono un junior full-stack developer specializzato <br/> in React e Python</p>
              <div className="mt-10">

                <FontAwesomeIcon 
                  icon={faInstagram} 
                  size="2xl" 
                  beatFade
                  style={{ color: hoveredIcon === 'instagram' ? "#3b83bd" : "#ffffff", marginRight:'5%', cursor:'pointer' }} 
                  onClick={() => handleClick("https://www.instagram.com/_giorgiopagani_/")} 
                  onMouseEnter={() => handleIconMouseEnter('instagram')} 
                  onMouseLeave={handleIconMouseLeave}
                  itemProp="sameAs"
                />
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  size="2xl" 
                  beatFade
                  style={{ color: hoveredIcon === 'linkedin' ? "#3b83bd" : "#ffffff", marginRight:'5%', cursor:'pointer' }} 
                  onClick={() => handleClick("https://www.linkedin.com/in/giorgio-pagani-5ab4b42b1/")} 
                  onMouseEnter={() => handleIconMouseEnter('linkedin')} 
                  onMouseLeave={handleIconMouseLeave}
                  itemProp="sameAs"
                />
                <FontAwesomeIcon 
                  icon={faGithub} 
                  size="2xl"
                  beatFade
                  style={{ color: hoveredIcon === 'github' ? "#3b83bd" : "#ffffff", marginRight:'5%', cursor:'pointer' }} 
                  onClick={() => handleClick("https://github.com/giorgiopagani17")} 
                  onMouseEnter={() => handleIconMouseEnter('github')} 
                  onMouseLeave={handleIconMouseLeave}
                  itemProp="sameAs"
                />
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  size="2xl"
                  beatFade 
                  style={{ color: hoveredIcon === 'email' ? "#3b83bd" : "#ffffff", cursor:'pointer' }} 
                  onClick={handleEmailClick} 
                  onMouseEnter={() => handleIconMouseEnter('email')} 
                  onMouseLeave={handleIconMouseLeave}
                  itemProp="sameAs"
                />
              </div>
              <button id="button" className="text-white mt-10 bg-[#3b83bd] hover:bg-[#3b83bd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleDownloadClick} 
                onMouseEnter={() => setIsDownloadHovered(true)} 
                onMouseLeave={() => setIsDownloadHovered(false)} 
              >
                Download Cv <FontAwesomeIcon icon={faDownload} size="sm" className="ml-2" style={{ color: "#ffffff", animation: isDownloadHovered ? "bounce 1s infinite" : "none", transition: "transform 0.2s ease-in-out"}} />
              </button>
            </CardBody>
          </Card>
        </div>
        <div className="absolute flex flex-col items-center justify-center w-[100%]">
          <div className="absolute bottom-12 text-[#3b83bd] text-2xl animate-bounce whitespace-nowrap">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="ml-2 mb-6"
              onClick={scrollToAboutSection}
              href="#about"
            />
          </div>
        </div>
    </div>
  );
};

export default Home;
