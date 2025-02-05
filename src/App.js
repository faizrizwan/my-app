import "./App.css";
import React from "react";
import Header from "./pages/header";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import Skills from "./pages/skill";
import About from "./pages/about";
import Project1 from "./pages/project/project1";
import IconContact from "./pages/ContactIcon";


function App() {
    return (
        <div className="App">
            <div className='background'>
                <div style={{
                    position: 'fixed',
                    left: 0,
                    zIndex: 1,
                    top: '35%',
                    bottom: '35%'
                }}>
                    <IconContact />
            </div>
                {/* <Header /> */}
                <About />
                {/* <Skills/> */}
                <Projects />
                <Contact />
                {/* <Project1 /> */}
            </div>

        </div>
    );
}

export default App;
