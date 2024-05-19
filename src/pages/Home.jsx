import React, { useState, useEffect } from "react";
import Navbar from './elements/Navbar.jsx';
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
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Card color="transparent" shadow={false} className="w-1/2">
          <CardBody className="mb-6 pl-5 text-white">
            <p><strong className="text-white text-6xl">I'm Giorgio Pagani</strong></p>
            <p style={{marginTop:'1%'}}><strong id="text" className="text-[#3b83bd] text-5xl">{typedText}</strong></p>
            <p style={{marginTop:'1%', marginBottom:'1%'}}>Sono un full-stack developer specializzato in React e Python</p>
            <FontAwesomeIcon 
              icon={faInstagram} 
              size="2xl" 
              beatFade
              style={{ color: hoveredIcon === 'instagram' ? "#3b83bd" : "#ffffff", marginRight:'2%', cursor:'pointer' }} 
              onClick={() => handleClick("https://www.instagram.com/_giorgiopagani_/")} 
              onMouseEnter={() => handleIconMouseEnter('instagram')} 
              onMouseLeave={handleIconMouseLeave} 
            />
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size="2xl" 
              beatFade
              style={{ color: hoveredIcon === 'linkedin' ? "#3b83bd" : "#ffffff", marginRight:'2%', cursor:'pointer' }} 
              onClick={() => handleClick("https://www.linkedin.com/in/giorgio-pagani-5ab4b42b1/")} 
              onMouseEnter={() => handleIconMouseEnter('linkedin')} 
              onMouseLeave={handleIconMouseLeave} 
            />
            <FontAwesomeIcon 
              icon={faGithub} 
              size="2xl"
              beatFade
              style={{ color: hoveredIcon === 'github' ? "#3b83bd" : "#ffffff", marginRight:'2%', cursor:'pointer' }} 
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
            <button 
              onClick={handleDownloadClick} 
              style={{backgroundColor:"#3b83bd", color:'white', borderRadius:'20px', padding: '1%', marginTop:'1%'}}
              onMouseEnter={() => setIsDownloadHovered(true)} 
              onMouseLeave={() => setIsDownloadHovered(false)} 
            >
              Download Cv <FontAwesomeIcon icon={faDownload} size="sm" style={{ color: "#ffffff", animation: isDownloadHovered ? "bounce 1s infinite" : "none", transition: "transform 0.2s ease-in-out"}} />
            </button>
          </CardBody>
        </Card>
        <img src="web.png"/>
      </div>
    </>
  );
};

export default Home;
