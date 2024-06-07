import Navbar from "../Elements/Navbar.jsx"
import About from "../Portfolio/About.jsx"
import Contact from "../Portfolio/Contact.jsx"
import Home from "../Portfolio/Home.jsx"
import Projects from "../Portfolio/Projects.jsx"
import Skills from "../Portfolio/Skills.jsx"

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
