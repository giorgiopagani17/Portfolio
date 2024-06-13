import React, { useEffect, Suspense } from "react";
import Aos from "aos";

const LazyAbout = React.lazy(() => import("./Components/About.jsx"));
const LazyContact = React.lazy(() => import("./Components/Contact.jsx"));
const LazyHome = React.lazy(() => import("./Components/Home.jsx"));
const LazyProjects = React.lazy(() => import("./Components/Projects.jsx"));
const LazySkills = React.lazy(() => import("./Components/Skills.jsx"));

const Portfolio = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="overflow-x-hidden max-w-full">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyHome />
                <LazyAbout />
                <LazySkills />
                <LazyProjects />
                <LazyContact />
            </Suspense>
        </div>
    );
};

export default Portfolio;
