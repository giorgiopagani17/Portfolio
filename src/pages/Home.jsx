import React, { useState, useEffect } from "react";
import Navbar from './elements/Navbar.jsx';
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import "./elements/Css/Home.css";

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const delay = 100; // Tempo di pausa tra ogni carattere (in millisecondi)
  const fullText = "Full-Stack Developer";

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
          }, 1000); // Tempo di pausa prima di cancellare il testo (in millisecondi)
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
            <p style={{marginTop:'1%', marginBottom:'1%'}}>Sono uno sviluppatore web</p>
            <FontAwesomeIcon icon={faInstagram} beatFade size="2xl" style={{ color: "#ffffff", marginRight:'2%', cursor:'pointer' }} />
            <FontAwesomeIcon icon={faLinkedin} beatFade size="2xl" style={{ color: "#ffffff", marginRight:'2%', cursor:'pointer' }} />
            <FontAwesomeIcon icon={faGithub} beatFade size="2xl" style={{ color: "#ffffff", marginRight:'2%', cursor:'pointer' }} />
            <FontAwesomeIcon icon={faEnvelope} beatFade size="2xl" style={{ color: "#ffffff", cursor:'pointer' }} />
            <br/>
            <button style={{backgroundColor:"#3b83bd", color:'white', borderRadius:'20px', padding: '1%', marginTop:'1%'}}>Download Cv <FontAwesomeIcon icon={faDownload} bounce size="sm" style={{ color: "#ffffff"}}/></button>
          </CardBody>
        </Card>
        <img src="web.png"/>
      </div>
    </>
  );
};

export default Home;
