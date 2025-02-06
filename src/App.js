import "./App.css";
import React from "react";
import Projects from "./pages/project/videoprojects";
import Contact from "./pages/contact";
import IconContact from "./pages/ContactIcon";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Skills from "./pages/skill";
import Home from "./pages/home";
import About from "./pages/about";
import NavTabs from "./pages/nav";


function App() {
    return (
        <div className="App">
            <div className='background'>
                
               {/* <div style={{
                    position: 'fixed',
                    left: 0,
                    zIndex: 1,
                    top: '35%',
                    bottom: '35%'
                }}>
                    <IconContact />
                </div> */}
                <Header/>
                <Home />
                <About />
                <Skills />
                <NavTabs />
                {/* <Projects /> */}
                <Contact />
                <Footer/>
                
            </div>

        </div>
    );
}

export default App;



