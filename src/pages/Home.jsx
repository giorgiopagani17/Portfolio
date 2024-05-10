import React from "react";
import Navbar from './elements/Navbar.jsx';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Home = () => {
  return (
    <>
      <Navbar/>

      <Card color="transparent" shadow={false} className="w-1/2">
      <CardBody className="mb-6 pl-20 text-white pt-20">
        <strong className="text-white text-6xl">I'm Giorgio Pagani</strong>
        <br/>
        <strong className="text-[#fde047] text-5xl">Full-Stack Developer</strong>
      </CardBody>
    </Card>
    </>
  );
};

export default Home;
