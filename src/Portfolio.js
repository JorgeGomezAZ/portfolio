import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import NavBar from "./components/portfolioNav/NavBar";
import ProjectList from "./components/projectList/ProjectList";
import { TheamContext } from "./context";

function Portfolio()
{
    const theme = useContext(TheamContext)
    const darkMode = theme.state.darkMode
    return (
        <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode && 'white' }}>
            <NavBar mode={darkMode} />
            <Intro />
            <About />
            <ProjectList />
            <Contact />
        </div>
    );
}

export default Portfolio;
