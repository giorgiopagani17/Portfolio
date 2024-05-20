import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import "./Css/Navbar.css"; 
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);

    if(link == "home"){
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
        as="li"
        variant="small"
        color="blue-gray"
        className={`nav-item ${activeLink === "home" && "active"}`}
        onClick={() => handleLinkClick("home")}
      >
        <a href="#" className="flex items-center font-bold">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`nav-item ${activeLink === "about" && "active"}`}
        onClick={() => handleLinkClick("about")}
      >
        <a href="#" className="flex items-center font-bold">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`nav-item ${activeLink === "progetti" && "active"}`}
        onClick={() => handleLinkClick("progetti")}
      >
        <a href="#" className="flex items-center font-bold">
          Progetti
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`nav-item ${activeLink === "skills" && "active"}`}
        onClick={() => handleLinkClick("skills")}
      >
        <a href="#" className="flex items-center font-bold">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`nav-item ${activeLink === "contact" && "active"}`}
        onClick={() => handleLinkClick("contact")}
      >
        <a href="#" className="flex items-center font-bold">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-[100%]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="ml-3 cursor-pointer py-1.5 font-medium font-bold"
          >
            <span className="text-[#3b83bd]">G</span>
            P
          </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="mt-[-3vh] ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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