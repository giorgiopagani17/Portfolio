import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import "./elements/Css/Home.css";

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
          setIsTyping(false);
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTyping(false);
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

  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-x-80" style={{ marginTop: '-8vh' }}>
        <Card color="transparent" shadow={false}>
          <CardBody className="mb-6 pl-5 text-white">
            <p><strong className="text-white text-6xl">I'm Giorgio Pagani</strong></p>
            <p style={{marginTop:'1%'}}><strong id="text" className="text-[#3b83bd] text-5xl">{typedText}</strong></p>
            <p style={{marginTop:'1%', marginBottom:'1%'}}>Sono un full-stack developer specializzato in React e Python</p>
            <FontAwesomeIcon 
              icon={faInstagram} 
              size="2xl" 
              beatFade
              style={{ color: hoveredIcon === 'instagram' ? "#3b83bd" : "#ffffff", marginRight:'5%', cursor:'pointer' }} 
              onClick={() => handleClick("https://www.instagram.com/_giorgiopagani_/")} 
              onMouseEnter={() => handleIconMouseEnter('instagram')} 
              onMouseLeave={handleIconMouseLeave} 
            />
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size="2xl" 
              beatFade
              style={{ color: hoveredIcon === 'linkedin' ? "#3b83bd" : "#ffffff", marginRight:'5%', cursor:'pointer' }} 
              onClick={() => handleClick("https://www.linkedin.com/in/giorgio-pagani-5ab4b42b1/")} 
              onMouseEnter={() => handleIconMouseEnter('linkedin')} 
              onMouseLeave={handleIconMouseLeave} 
            />
            <FontAwesomeIcon 
              icon={faGithub} 
              size="2xl"
              beatFade
              style={{ color: hoveredIcon === 'github' ? "#3b83bd" : "#ffffff", marginRight:'5%', cursor:'pointer' }} 
              onClick={() => handleClick("https://github.com/giorgiopagani17")} 
              onMouseEnter={() => handleIconMouseEnter('github')} 
              onMouseLeave={handleIconMouseLeave} 
            />
            <FontAwesomeIcon 
              icon={faEnvelope} 
              size="2xl"
              beatFade 
              style={{ color: hoveredIcon === 'email' ? "#3b83bd" : "#ffffff", cursor:'pointer' }} 
              onClick={handleEmailClick} 
              onMouseEnter={() => handleIconMouseEnter('email')} 
              onMouseLeave={handleIconMouseLeave} 
            />
            <br/>
            <button className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleDownloadClick} 
              onMouseEnter={() => setIsDownloadHovered(true)} 
              onMouseLeave={() => setIsDownloadHovered(false)} 
            >
              Download Cv <FontAwesomeIcon icon={faDownload} size="sm" className="ml-2" style={{ color: "#ffffff", animation: isDownloadHovered ? "bounce 1s infinite" : "none", transition: "transform 0.2s ease-in-out"}} />
            </button>
          </CardBody>
        </Card>
        <div>
          <img src="web.png"/>
        </div>
      </div>
    </>
  );
};

export default Home;
