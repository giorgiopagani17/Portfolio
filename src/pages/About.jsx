import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Projects = () => {
  

  return (
    <div className="flex flex-col items-center mt-5">
      <Card className="mt-10 p-2">
        <CardBody className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Test_grid_4000x4000.png" className="w-96 rounded-full"/>
            <div className="mt-10 ml-10">
                <h1 className="text-5xl text-[#3b83bd]"><strong>About Me</strong></h1>
                <p className="ml-5 mt-5 text-lg">Sono Giorgio Pagani...</p>
                <hr className="mt-5 mb-5 h-1 bg-[#3b83bd]" />
                <div className="flex">
                    <Card className="flex items-center justify-center w-20 h-20 mr-5">Experience</Card>
                    <Card className="flex items-center justify-center w-20 h-20 mr-5">Skills</Card>
                    <Card className="flex items-center justify-center w-20 h-20">Projects</Card>
                </div>
            </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Projects;
