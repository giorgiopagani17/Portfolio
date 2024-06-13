import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import 'aos/dist/aos.css';

const Skills = () => {
  const [message, setMessage] = useState("Language");

  const handleLanguageClick = () => {
    setMessage("Language");
  };

  const handleToolsClick = () => {
    setMessage("Tools");
  };

  return (
    <div className="mb-20" id="skills" itemScope itemType="https://schema.org/Skill">
      <div className="w-full overflow-hidden">
        <svg id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 mt-[-15%]">
          <path d="M 0,400 L 0,150 C 110.17857142857142,170.92857142857144 220.35714285714283,191.85714285714286 343,171 C 465.64285714285717,150.14285714285714 600.7500000000001,87.50000000000001 726,89 C 851.2499999999999,90.49999999999999 966.6428571428571,156.14285714285714 1084,177 C 1201.357142857143,197.85714285714286 1320.6785714285716,173.92857142857144 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#fff" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
        </svg>
      </div>
      <div className="text-cente text-6xl">
        <div className="relative flex flex-col justify-center items-center" data-aos="zoom-in-down">
          <div className="inline-block whitespace-nowrap absolute mb-10 text-[#3b83bd] opacity-25 blur-[3px] text-[125%] font-bold">
            <h1>My Skills</h1>
          </div>
          <div className="relative text-[#3b83bd] text-6xl font-bold">
            <h1>My Skills</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <div className="flex justify-center">
          <Card className="mt-10 pr-10 pl-10" data-aos="fade-right">
            <CardBody>
              <div className="flex justify-center mt-1 mb-6 space-x-20">
                <strong id={message === "Language" ? "active" : "link"} onClick={handleLanguageClick} className="cursor-pointer text-lg text-[#3b83bd]">
                  <FontAwesomeIcon icon={faCode} className="mr-1" />
                  Language
                </strong>
                <strong id={message === "Tools" ? "active" : "link"} onClick={handleToolsClick} className="cursor-pointer text-lg text-[#3b83bd]">
                  <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-1" />
                  Tools
                </strong>
              </div>
              <Typography variant="h2" color="blue-gray" className="mb-2">
                {message === "Language" && (
                  <div className="grid grid-cols-3 gap-5" data-aos="flip-right">
                    <SkillItem logoUrl="https://cdn-icons-png.flaticon.com/512/732/732212.png" name="Html" level="Advanced" />
                    <SkillItem logoUrl="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" name="Css" level="Intermediate" />
                    <SkillItem logoUrl="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" name="JavaScript" level="Advanced" />
                    <SkillItem logoUrl="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" name="Node.js" level="Intermediate" />
                    <SkillItem logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" name="React" level="Intermediate" />
                    <SkillItem logoUrl="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png" name="Python" level="Intermediate" />
                    <SkillItem logoUrl="https://cdn.runalloy.com/landing/uploads-new/mysql_PNG_23_06dd9edb0c.png" name="MySql" level="Advanced" />
                    <SkillItem logoUrl="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" name="Php" level="Intermediate" />
                    <SkillItem logoUrl="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" name="Java" level="Base" />
                  </div>
                )}

                {message === "Tools" && (
                  <div className="grid grid-cols-3 gap-5" data-aos="flip-left">
                    <SkillItem logoUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png" name="GitHub" level="Intermediate" />
                    <SkillItem logoUrl="https://www.netcost-security.fr/wp-content/uploads/2022/10/Visual-Studio-Code-est-un-editeur-de-code-solide-pour.png" name="VS Code" level="Advanced" />
                    <SkillItem logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png" name="IntellIJ" level="Intermediate" />
                    <SkillItem logoUrl="https://cdn.icon-icons.com/icons2/1381/PNG/512/xampp_94513.png" name="Xampp" level="Intermediate" />
                    <SkillItem logoUrl="https://www.geekandjob.com/uploads/wiki/c620b14fbbc044bda55703f69c04b565.png" name="Mamp" level="Intermediate" />
                    <SkillItem logoUrl="https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png?f=webp" name="PostMan" level="Advanced" />
                    <SkillItem logoUrl="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git" level="Intermediate" />
                    <SkillItem logoUrl="https://iconape.com/wp-content/png_logo_vector/bootstrap-framework-logo.png" name="Bootstrap" level="Intermediate" />
                    <SkillItem logoUrl="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" name="Tailwind" level="Intermediate" />
                  </div>
                )}
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-col justify-center items-end mt-20 text-right w-80" data-aos="fade-left">
          <div className="flex justify-end items-center">
            <strong className="text-4xl text-[#3b83bd] flex items-center">
              <span>Tech Stack</span>
              <img 
                src="https://www.svgrepo.com/show/408381/stack-apps-layers.svg" 
                width="50px" 
                height="50px" 
                className="inline-block ml-1 mr-1"
                alt="Tech Stack Icon"
              />
              &
            </strong>
          </div>
          <div className="flex justify-end items-center mb-4">
            <strong className="text-4xl text-[#3b83bd] flex items-center">
              <span>Tools</span>
              <img 
                src="https://www.pngkey.com/png/full/12-121051_tools-tools-png.png" 
                width="35px" 
                height="35px" 
                className="inline-block ml-2"
                alt="Tools Icon"
              />
              </strong>
          </div>
          <p className="text-white">Ecco i linguaggi di programmazione e <br/> i tools che conosco</p>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ logoUrl, name, level }) => (
  <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
    <div className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
      <img src={logoUrl} alt={`${name} Logo`} className="w-full h-full object-contain" />
    </div>
    <p>{name}</p>
    <p className="text-sm text-[#3b83bd]">{level}</p>
  </div>
);

export default Skills;
