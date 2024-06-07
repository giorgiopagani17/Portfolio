import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import "../Css/Navbar.css"; 
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faDiagramProject, faMessage, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      const homePosition = document.getElementById("home").offsetTop;
      const aboutPosition = document.getElementById("about").offsetTop;
      const projectsPosition = document.getElementById("projects").offsetTop;
      const skillsPosition = document.getElementById("skills").offsetTop;
      const contactPosition = document.getElementById("contact").offsetTop;
  
      const distanceToHome = Math.abs(homePosition - scrollPosition);
      const distanceToAbout = Math.abs(aboutPosition - scrollPosition);
      const distanceToProjects = Math.abs(projectsPosition - scrollPosition);
      const distanceToSkills = Math.abs(skillsPosition - scrollPosition);
      const distanceToContact = Math.abs(contactPosition - scrollPosition);
  
      const threshold = 100;
  
      if (distanceToHome < threshold) {
        setActiveLink("home");
      } else if (distanceToAbout < threshold) {
        setActiveLink("about");
      } else if (distanceToProjects < threshold) {
        setActiveLink("progetti");
      } else if (distanceToSkills < threshold) {
        setActiveLink("skills");
      } else if (distanceToContact < threshold) {
        setActiveLink("contact");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  
  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    
    if(currentPath == ""){
      setActiveLink("home");
    } else {
      setActiveLink(currentPath);
    }
    
  }, [location]);

  const handleLinkClick = (link) => {
    setActiveLink(link);

    if(link === "home"){
      navigate("/");
    } else {
      navigate("/" + link);
    }

    setOpenNav(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) { 
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
      <Typography
        id={`${activeLink === "home" ? "active" : "link"}`}
        as="li"
        variant="small"
        color="blue-gray"
      >
        <Link
          to="home"  
          smooth={true}
          spy={true}
          duration={500}
          className="flex items-center font-bold text-base"
        >
          <FontAwesomeIcon icon={faHouse} className="mr-1.5"/> 
          Home
        </Link>
      </Typography>
      <Typography
        id={`${activeLink === "about" ? "active" : "link"}`}
        as="li"
        variant="small"
        color="blue-gray"
      >
        <Link
          to="about" 
          smooth={true}
          spy={true}
          duration={500}
          className="flex items-center font-bold text-base"
        >          
        <FontAwesomeIcon icon={faUser} className="mr-1.5"/>
          About
        </Link>
      </Typography>
      <Typography
        id={`${activeLink === "skills" ? "active" : "link"}`}
        as="li"
        variant="small"
        color="blue-gray"
      >
        <Link
          to="skills"  
          smooth={true}
          spy={true}
          duration={500}
          className="flex items-center font-bold text-base"
        >
          <FontAwesomeIcon icon={faLayerGroup} className="mr-1.5"/>
          Skills
        </Link>
      </Typography>
      <Typography
        id={`${activeLink === "progetti" ? "active" : "link"}`}
        as="li"
        variant="small"
        color="blue-gray"
      >
        <Link
          to="projects" 
          smooth={true}
          spy={true}
          duration={500}
          className="flex items-center font-bold text-base"
        >
          <FontAwesomeIcon icon={faDiagramProject} className="mt-0.5 mr-1.5"/>
          Progetti
        </Link>
      </Typography>
      <Typography
        id={`${activeLink === "contact" ? "active" : "link"}`}
        as="li"
        variant="small"
        color="blue-gray"
      >
        <Link
          to="contact"  
          smooth={true}
          spy={true}
          duration={500}
          className="flex items-center font-bold text-base"
        >
          <FontAwesomeIcon icon={faMessage} className="mt-0.5 mr-1.5"/>
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="fixed z-50 top-0 right-0 max-h-[768px] w-[100%]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-4 bg-[#0a054a]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="ml-3 cursor-pointer py-1.5 font-medium text-base"
          >
            <span className="text-[#3b83bd]">G</span>
            P
          </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;