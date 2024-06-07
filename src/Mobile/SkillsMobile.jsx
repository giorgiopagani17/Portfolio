import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "../Css/Skills.css";
import 'aos/dist/aos.css';
import Aos from "aos";

const Skills = () => {
  const [message, setMessage] = useState("Language");

  useEffect(() => {
    Aos.init();
  }, []);


  const handleLanguageClick = () => {
    setMessage("Language");
  };

  const handleToolsClick = () => {
    setMessage("Tools");
  };

  return (
    <div className="min-h-screen mb-20" id="skills">
      <div className="w-full overflow-hidden">
        <svg id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 mt-[-15%]">
          <path d="M 0,400 L 0,150 C 110.17857142857142,170.92857142857144 220.35714285714283,191.85714285714286 343,171 C 465.64285714285717,150.14285714285714 600.7500000000001,87.50000000000001 726,89 C 851.2499999999999,90.49999999999999 966.6428571428571,156.14285714285714 1084,177 C 1201.357142857143,197.85714285714286 1320.6785714285716,173.92857142857144 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#fff" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
        </svg>
      </div>
      <div className="text-center text-black text-6xl fade-in-scale">
        <div className="relative flex flex-col justify-center items-center">
            <div className="inline-block whitespace-nowrap absolute mb-10 text-[#3b83bd] opacity-35 blur-[3px] text-[145%] font-bold">
                My Skills
            </div>
            <div className="relative text-white text-6xl font-bold">
                My Skills
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center">
            <Card className="mt-10 pr-10 pl-10" data-aos="fade-right">
              <CardBody>
                <div className="flex justify-center mt-1 mb-6 space-x-20">
                <strong
                    id={`${message === "Language" ? "active" : "link"}`}
                    onClick={handleLanguageClick}
                    className="cursor-pointer text-lg text-[#3b83bd]"
                >
                    <FontAwesomeIcon icon={faCode} className="mr-1" />
                    Language
                </strong>
                <strong
                    id={`${message === "Tools" ? "active" : "link"}`}
                    onClick={handleToolsClick}
                    className="cursor-pointer text-lg text-[#3b83bd]"
                >
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-1" />
                    Tools
                </strong>
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {message === "Language" && (
                        <div className="grid grid-cols-3 gap-5" data-aos="flip-right">
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
                                </div>
                            </div>
                            <p>Html</p>
                            <p className="text-sm text-[#3b83bd]">Advanced</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" />
                                </div>
                            </div>
                            <p>Css</p>
                            <p className="text-sm text-[#3b83bd]">Intermediate</p>
                        </div>
        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" />
                                </div>
                            </div>
                            <p>JavaScript</p>
                            <p className="text-sm text-[#3b83bd]">Advanced</p>
                        </div>
        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" />
                                </div>
                            </div>
                            <p>Node.js</p>
                            <p className="text-sm text-[#3b83bd]">Intermediate</p>
                        </div>
        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                                </div>
                            </div>
                            <p>React</p>
                            <p className="text-sm text-[#3b83bd]">Intermediate</p>
                        </div>
        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png" />
                                </div>
                            </div>
                            <p>Python</p>
                            <p className="text-sm text-[#3b83bd]">Intermediate</p>
                        </div>
        
        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://cdn.runalloy.com/landing/uploads-new/mysql_PNG_23_06dd9edb0c.png" />
                                </div>
                            </div>
                            <p>MySql</p>
                            <p className="text-sm text-[#3b83bd]">Advanced</p>
                        </div>
        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" />
                                </div>
                            </div>
                            <p>Php</p>
                            <p className="text-sm text-[#3b83bd]">Intermediate</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                            <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                <div className="flex items-center justify-center h-full">
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" />
                                </div>
                            </div>
                            <p>Java</p>
                            <p className="text-sm text-[#3b83bd]">Base</p>
                        </div>
                        </div>
                    )}
                
                    {message === "Tools" && (
                        <div className="grid grid-cols-3 gap-5" data-aos="flip-left">
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                                    </div>
                                </div>
                                <p>GitHub</p>
                                <p className="text-sm text-[#3b83bd]">Intermediate</p>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://www.netcost-security.fr/wp-content/uploads/2022/10/Visual-Studio-Code-est-un-editeur-de-code-solide-pour.png" />
                                    </div>
                                </div>
                                <p>VS Code</p>
                                <p className="text-sm text-[#3b83bd]">Advanced</p>
                            </div>
            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png" />
                                    </div>
                                </div>
                                <p>IntellIJ</p>
                                <p className="text-sm text-[#3b83bd]">Intermediate</p>
                            </div>
            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://cdn.icon-icons.com/icons2/1381/PNG/512/xampp_94513.png" />
                                    </div>
                                </div>
                                <p>Xampp</p>
                                <p className="text-sm text-[#3b83bd]">Intermediate</p>
                            </div>
            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://www.geekandjob.com/uploads/wiki/c620b14fbbc044bda55703f69c04b565.png" />
                                    </div>
                                </div>
                                <p>Mamp</p>
                                <p className="text-sm text-[#3b83bd]">Intermediate</p>
                            </div>
            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png?f=webp" />
                                    </div>
                                </div>
                                <p>PostMan</p>
                                <p className="text-sm text-[#3b83bd]">Advanced</p>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
                                    </div>
                                </div>
                                <p>Git</p>
                                <p className="text-sm text-[#3b83bd]">Intermediate</p>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://iconape.com/wp-content/png_logo_vector/bootstrap-framework-logo.png" />
                                    </div>
                                </div>
                                <p>Bootstrap</p>
                                <p className="text-sm text-[#3b83bd]">Intermediate</p>
                            </div>
            
                            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] mx-auto">
                                <div id="icon" className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-md p-3">
                                    <div className="flex items-center justify-center h-full">
                                        <img src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" />
                                    </div>
                                </div>
                                <p>Tailwind</p>
                                <p className="text-sm text-[#3b83bd]">Intermediate</p>
                            </div>
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
                    className="inline-block ml-1"
                    alt="Icon"
                />
                <span> &</span>
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
                    alt="Icon"
                />
                </strong>
            </div>
            <p className="text-white">Ecco i linguaggi di programmazione e <br/> i tools che conosco</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;