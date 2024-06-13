import Slider from '../Elements/Slider.jsx';
import 'aos/dist/aos.css';
import '../Css/Projects.css';

const Projects = () => {

  return (
    <div className=" bg-white" id="projects">
      <div className="w-full overflow-hidden">
        <svg id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 mt-[-15%]">
          <path d="M 0,400 L 0,150 C 110.17857142857142,170.92857142857144 220.35714285714283,191.85714285714286 343,171 C 465.64285714285717,150.14285714285714 600.7500000000001,87.50000000000001 726,89 C 851.2499999999999,90.49999999999999 966.6428571428571,156.14285714285714 1084,177 C 1201.357142857143,197.85714285714286 1320.6785714285716,173.92857142857144 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#0A0436" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
        </svg>
      </div> 
      <div className="text-center text-6xl mt-10">
        <div className="relative flex flex-col justify-center items-center" data-aos="zoom-in-down">
          <div className="inline-block whitespace-nowrap absolute mb-10 text-[#3b83bd] opacity-25 blur-[3px] text-7xl font-bold">
            <h1>My Projects</h1>
          </div>
          <div className="relative text-[#3b83bd] text-6xl font-bold">
            <h1>My Projects</h1>
          </div>
        </div>   
      </div>
      <div className="app text-center mt-10" style={{ transform: 'scale(0.9)', transformOrigin: 'top' }}  data-aos="zoom-in-up">
        <Slider />
        <p className='text-xl text-[#3b83bd] shake-animation'>Scorri per vedere gli altri!</p>
      </div>
    </div>
  );
};

export default Projects;
