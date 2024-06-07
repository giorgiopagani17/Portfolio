import React, { useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import "animate.css";
import 'aos/dist/aos.css';
import Aos from "aos";

const About = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  const handleOpen = (url) => {
    window.open(url, "_blank");
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

  const CardNumber = ({ title, description }) => (
    <Card className="relative flex items-center justify-center w-28 h-28 p-2 overflow-hidden border-2 border-transparent transition-colors duration-300 hover:border-[#3b83bd]">
      <div className="relative z-10 flex flex-col items-center">
        <strong className="pb-2 text-center text-lg text-[#3b83bd]">
          {title}
        </strong>
        <p className="text-sm text-center">{description}</p>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white" id="about">
      <div className="w-full overflow-hidden">
        <svg
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 mt-[-15%]"
        >
          <path
            d="M 0,400 L 0,150 C 110.17857142857142,170.92857142857144 220.35714285714283,191.85714285714286 343,171 C 465.64285714285717,150.14285714285714 600.7500000000001,87.50000000000001 726,89 C 851.2499999999999,90.49999999999999 966.6428571428571,156.14285714285714 1084,177 C 1201.357142857143,197.85714285714286 1320.6785714285716,173.92857142857144 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#0A0436"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center items-center">
          <Card className="p-2 w-full">
            <CardBody>
              <div className="flex items-center justify-center">
                <img
                  src="./file/fotocartoon.jpg"
                  className="w-96 rounded-full"
                  alt="Giorgio Pagani"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="mt-5 text-5xl text-[#3b83bd] flex items-center justify-center">
                  <strong>About Me</strong>
                </h1>
                <div className="mt-5 text-lg flex items-center justify-center gap-1">
                  <p className="w-1/2">
                    Ciao👋🏼 Sono{" "}
                    <strong className="text-[#3b83bd] inline-block whitespace-nowrap">
                      Giorgio Pagani
                    </strong>
                    ! <br /> Un{" "}
                    <strong className="text-[#3b83bd]">
                      Full-Stack <span className="inline-block whitespace-nowrap">
                        Developer👨🏻‍💻
                      </span>
                    </strong>{" "}
                    <br /> situato a{" "}
                    <strong className="text-[#3b83bd] inline-block whitespace-nowrap">
                      Bergamo🌍
                    </strong>
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
                      onClick={() =>
                        handleOpen(
                          "https://islotto.edu.it/indirizzo-di-studio/ite-sistemi-informativi-aziendali-sia/"
                        )
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <InfoCard
                      imageUrl="https://www.eventi-digitali.online/media/public/38/Logo-JAC.jpg"
                      title="Web Development"
                      description="Diploma ITS"
                      onClick={() =>
                        handleOpen("https://jac-its.it/corso/web-development/")
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <CardNumber title="7+" description="Linguaggi di Programmazione" />
                  </div>
                  <div className="flex justify-center">
                    <CardNumber title="3" description="Progetti Completati" />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
      </div>
    </div>
  );
};

export default About;
