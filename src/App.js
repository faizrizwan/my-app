import "./App.css";
import React from "react";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import About from "./pages/about";
import IconContact from "./pages/ContactIcon";
import Footer from "./pages/footer";


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
                <About />
                <Projects />
                <Contact />
                <Footer/>
            </div>

        </div>
    );
}

export default App;
