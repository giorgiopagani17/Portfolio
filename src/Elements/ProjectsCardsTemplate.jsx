// src/components/Card.js
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = ({ title, content, image, tech1, techimage1, tech2, techimage2, tech3, techimage3, repository }) => {
  const [isHoveringEye, setIsHoveringEye] = useState(false);
  const [isHoveringCode, setIsHoveringCode] = useState(false);

  const handleClick = (url) => {
    window.open(url.repository, "_blank");
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-96">
      <img src={image} className="h-46"/>
      <h3 className="text-3xl text-[#3b83bd] font-bold mb-2 mt-3">{title}</h3>
      <div className='flex items-center justify-center mt-3'>
        <span className='flex justify-center items-center mr-3 border border-[#3b83bd] pl-2 pr-2 rounded-lg'><img src={techimage1} className='h-4 mr-1'/>{tech1}</span>
        <span className='flex justify-center items-center mr-3 border border-[#3b83bd] pl-2 pr-2 rounded-lg'><img src={techimage2} className='h-4 mr-1'/>{tech2}</span>
        <span className='flex justify-center items-center border border-[#3b83bd] pl-2 pr-2 rounded-lg'><img src={techimage3} className='h-4 mr-1'/>{tech3}</span>
      </div>
      <p className="text-gray-700 mt-3">{content}</p>
      <div>

        <button id="button" className="ml-2 text-white text-base mt-5 bg-[#3b83bd] hover:bg-[#3b83bd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2.5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onMouseEnter={() => setIsHoveringCode(true)}
          onMouseLeave={() => setIsHoveringCode(false)}
          onClick={() => handleClick({repository})} 
        >
          View The Code
          {isHoveringCode ? (
            <FontAwesomeIcon icon={faGithub} beat className="ml-1.5"/>
          ) : (
            <FontAwesomeIcon icon={faGithub} className="ml-1.5"/>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
