import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import Home from "./Components/Home.jsx"
import Projects from "./Components/Projects.jsx"
import Skills from "./Components/Skills.jsx"

const Computer = () => {


    return (
        <div className="overflow-x-hidden max-w-full">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );

};

export default Computer;
