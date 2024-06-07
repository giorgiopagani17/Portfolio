import React, { useEffect } from 'react';
import Slider from './elements/Slider.jsx';
import 'aos/dist/aos.css';
import Aos from "aos";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white" id="projects">
      <div className="w-full overflow-hidden">
        <svg id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 mt-[-15%]">
          <path d="M 0,400 L 0,150 C 110.17857142857142,170.92857142857144 220.35714285714283,191.85714285714286 343,171 C 465.64285714285717,150.14285714285714 600.7500000000001,87.50000000000001 726,89 C 851.2499999999999,90.49999999999999 966.6428571428571,156.14285714285714 1084,177 C 1201.357142857143,197.85714285714286 1320.6785714285716,173.92857142857144 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#0A0436" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
        </svg>
      </div> 
      <div className="text-center text-black text-6xl">
        <div className="relative flex flex-col justify-center items-center">
          <div className="inline-block whitespace-nowrap absolute mb-10 text-[#0A0436] opacity-25 blur-[3px] text-[125%] font-bold">
            My Projects
          </div>
          <div className="relative text-[#3b83bd] text-6xl font-bold">
            My Projects
          </div>
        </div>
      </div>
      <div className="app text-center p-6 mt-5" data-aos="zoom-in-up">
        <Slider/>
      </div>
    </div>
  );
};

export default Projects;
