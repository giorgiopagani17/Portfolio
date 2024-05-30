import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import "./elements/Css/About.css";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleOpen = (url) => {
    window.open(url, "_blank");
  };

  const handleLinkClick = (link) => {
    navigate("/" + link);
  };
  const [showHoverContent, setShowHoverContent] = useState(false);
  return (
    <div className="flex flex-col items-center mt-5 fade-in-scale">
      <Card className="mt-10 p-2">
        <CardBody className="flex">
          <img
            src="../../fotocartoon.jpg"
            className="w-96 rounded-full slide-in-left"
          />
          <div className="ml-10 flex flex-col justify-center slide-in-right">
            <h1 className="text-5xl text-[#3b83bd]">
              <strong>About Me</strong>
            </h1>
            <p className="ml-5 mt-5 text-lg">
              <p>
                Ciao👋🏼 Sono <strong className="text-[#3b83bd]">Giorgio Pagani</strong>! <br /> Un <strong className="text-[#3b83bd]">Full-Stack Developer</strong>👨🏻‍💻{" "}
                situato a <strong className="text-[#3b83bd]">Bergamo</strong>🌍
              </p>
              <p className="mt-2">
                Sono un ragazzo creativo,
                educato e determinato. Ho un <br/> diploma in Sistemi Informativi
                Aziendali e mi ritengo capace <br/> di lavorare in un team.
              </p>
            </p>
            <hr className="mt-5 mb-5 h-1 bg-[#3b83bd]" />
            <div className="flex justify-center">
              <Card
                className="relative flex items-center justify-center w-28 h-28 mr-5 p-2 group overflow-hidden cursor-pointer border-2 border-transparent transition-colors duration-300 hover:border-[#3b83bd]"
                onClick={() => handleOpen("https://islotto.edu.it/indirizzo-di-studio/ite-sistemi-informativi-aziendali-sia/")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnZoKyWdFLJh6TNAlU4Y8QEAUVhISRa8J9g&s"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  alt="Overlay"
                />
                <div className="relative z-10 flex flex-col items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <strong className="pb-2 text-center text-base text-[#3b83bd]">
                    Servizi Inf. Aziendali
                  </strong>
                  <p className="text-sm text-center">Diploma</p>
                </div>
              </Card>
              <Card 
                className="relative flex items-center justify-center w-28 h-28 mr-5 p-2 group overflow-hidden cursor-pointer border-2 border-transparent transition-colors duration-300 hover:border-[#3b83bd]"
                onClick={() => handleOpen("https://jac-its.it/corso/web-development/")}
              >
                <img
                  src="https://www.eventi-digitali.online/media/public/38/Logo-JAC.jpg"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  alt="Overlay"
                />
                <div className="relative z-10 flex flex-col items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <strong className="pb-2 text-center text-base text-[#3b83bd]">
                    Web Development
                  </strong>
                  <p className="text-sm text-center">Post Diploma</p>
                </div>
              </Card>
              <Card 
                className="flex items-center justify-center w-28 h-28 mr-5 cursor-pointer border-2 border-transparent transition-colors duration-300 hover:border-[#3b83bd]"
                onClick={() => handleLinkClick("skills")}
              >
                <strong className="pt-7 text-center text-lg text-[#3b83bd] h-[50%]">
                  7+
                </strong>
                <p className="pt-2.5 text-center text-sm h-[50%]">Linguaggi di Programmazione</p>
              </Card>
              <Card 
                className="flex items-center justify-center w-28 h-28 cursor-pointer border-2 border-transparent transition-colors duration-300 hover:border-[#3b83bd]"
                onClick={() => handleLinkClick("progetti")}
              >
                <strong className="pt-7 text-center text-lg text-[#3b83bd] h-[50%]">
                  3
                </strong>
                <p className="pt-2.5 text-center text-sm h-[50%]">Progetti Completati</p>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Projects;
