import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import "./elements/Css/About.css";

const Projects = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = (url) => {
    window.open(url, "_blank");
  };

  const handleLinkClick = (link) => {
    navigate("/" + link);
  };

  const InfoCard = ({ imageUrl, title, description, onClick }) => (
    <Card
      className="relative flex items-center justify-center w-28 h-28 p-2 group overflow-hidden cursor-pointer border-2 border-transparent transition-colors duration-300 hover:border-[#3b83bd]"
      onClick={onClick}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          alt="Overlay"
        />
      )}
      <div className="relative z-10 flex flex-col items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <strong className="pb-2 text-center text-base text-[#3b83bd]">
          {title}
        </strong>
        <p className="text-sm text-center">{description}</p>
      </div>
    </Card>
  );

  return (
    <div className="flex justify-center items-center min-h-screen" >      
      {isMobile ? (
        <Card className="mt-20 p-2 w-full">
          <CardBody>
            <div className="flex items-center justify-center">
              <img
                src="../../fotocartoon.jpg"
                className="w-96 rounded-full slide-in-left"
                alt="Giorgio Pagani"
              />
            </div>
            <div className="flex flex-col justify-center slide-in-right">
              <h1 className="mt-5 text-5xl text-[#3b83bd] flex items-center justify-center">
                <strong>About Me</strong>
              </h1>
              <div className="mt-5 text-lg flex items-center justify-center gap-1">
                <p className="w-1/2">
                  Ciao👋🏼 Sono{" "}
                  <strong className="text-[#3b83bd] inline-block whitespace-nowrap">Giorgio Pagani</strong>! <br /> Un{" "}
                  <strong className="text-[#3b83bd]">Full-Stack Developer</strong>👨🏻‍💻{" "}
                  <br/> situato a <strong className="text-[#3b83bd] inline-block whitespace-nowrap">Bergamo🌍</strong>
                </p>
                <p className="mt-2 flex items-center justify-center w-1/2">
                  Sono un ragazzo creativo, educato e determinato. Ho un diploma in Sistemi
                  Informativi Aziendali e ho ottime capacità di lavorare in un team.
                </p>
              </div>
              <hr className="mt-5 mb-5 h-1 bg-[#3b83bd]" />
              <div className="grid grid-cols-2 gap-y-10 justify-center">
                <div className="flex justify-center">
                  <InfoCard 
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnZoKyWdFLJh6TNAlU4Y8QEAUVhISRa8J9g&s"
                    title="Servizi Inf. Aziendali"
                    description="Diploma"
                    onClick={() => handleOpen("https://islotto.edu.it/indirizzo-di-studio/ite-sistemi-informativi-aziendali-sia/")}
                  />
                </div>
                <div className="flex justify-center">
                  <InfoCard 
                    imageUrl="https://www.eventi-digitali.online/media/public/38/Logo-JAC.jpg"
                    title="Web Development"
                    description="Diploma ITS"
                    onClick={() => handleOpen("https://jac-its.it/corso/web-development/")}
                  />
                </div>
                <div className="flex justify-center">
                  <InfoCard 
                    imageUrl="https://i0.wp.com/bestpractice.biz/wp-content/uploads/2021/02/Maddie-banner-skill-set.png?fit=1200%2C628&ssl=1"
                    title="7+"
                    description="Linguaggi di Programmazione"
                    onClick={() => handleLinkClick("skills")}
                  />
                </div>
                <div className="flex justify-center">
                  <InfoCard 
                    title="3"
                    description="Progetti Completati"
                    onClick={() => handleLinkClick("progetti")}
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        <div className="flex flex-col items-center mt-5 fade-in-scale">
          <Card className="mt-10 p-2">
            <CardBody className="flex">
              <img
                src="../../fotocartoon.jpg"
                className="w-96 rounded-full slide-in-left"
                alt="Giorgio Pagani"
              />
              <div className="ml-10 flex flex-col justify-center slide-in-right">
                <h1 className="text-5xl text-[#3b83bd]">
                  <strong>About Me</strong>
                </h1>
                <div className="ml-5 mt-5 text-lg">
                  <p>
                    Ciao👋🏼 Sono{" "}
                    <strong className="text-[#3b83bd]">Giorgio Pagani</strong>! <br /> Un{" "}
                    <strong className="text-[#3b83bd]">Full-Stack Developer</strong>👨🏻‍💻{" "}
                    situato a <strong className="text-[#3b83bd]">Bergamo</strong>🌍
                  </p>
                  <p className="mt-2">
                    Sono un ragazzo creativo, educato e determinato. Ho un <br /> diploma in Sistemi Informativi
                    Aziendali e ho ottime capacità <br /> di lavorare in un team.
                  </p>
                </div>
                <hr className="mt-5 mb-5 h-1 bg-[#3b83bd]" />
                <div className="flex flex-wrap justify-center gap-4">
                  <InfoCard 
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnZoKyWdFLJh6TNAlU4Y8QEAUVhISRa8J9g&s"
                    title="Servizi Inf. Aziendali"
                    description="Diploma"
                    onClick={() => handleOpen("https://islotto.edu.it/indirizzo-di-studio/ite-sistemi-informativi-aziendali-sia/")}
                  />
                  <InfoCard 
                    imageUrl="https://www.eventi-digitali.online/media/public/38/Logo-JAC.jpg"
                    title="Web Development"
                    description="Diploma ITS"
                    onClick={() => handleOpen("https://jac-its.it/corso/web-development/")}
                  />
                  <InfoCard 
                    imageUrl="https://sergioporco.altervista.org/wp-content/uploads/2018/06/programming-language.jpg"
                    title="7+"
                    description="Linguaggi di Programmazione"
                    onClick={() => handleLinkClick("skills")}
                  />
                  <InfoCard
                    imageUrl="https://www.comunicarekairos.it/images/portfolio-kairos/web-design/menti-vaganti-creazione-sito-web-marketing.jpg"
                    title="3"
                    description="Progetti Completati"
                    onClick={() => handleLinkClick("progetti")}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Projects;
