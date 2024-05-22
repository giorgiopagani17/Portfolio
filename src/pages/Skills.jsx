import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "./elements/Css/Skills.css";

const Skills = () => {
  const [message, setMessage] = useState("Language");

  const handleLanguageClick = () => {
    setMessage("Language");
  };

  const handleToolsClick = () => {
    setMessage("Tools");
  };

  return (
    <div className="bg-[#0a054a] flex flex-col items-center">
      <div className="text-center mt-20 text-[#3b83bd] text-6xl">
        <strong>Le Mie Skills</strong>
      </div>
      <div className="flex justify-center">
        <Card className="mt-20 pr-10 pl-10">
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
                    <div className="grid grid-cols-3 gap-5">
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
                            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
                          </div>
                        </div>
                        <p>Git</p>
                        <p className="text-sm text-[#3b83bd]">Intermediate</p>
                      </div>
                    </div>
                  )}
              
                  {message === "Tools" && (
                    <div className="grid grid-cols-3 gap-5">
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
    </div>
  );
};

export default Skills;