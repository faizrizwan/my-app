import "./App.css";
import React from "react";
import Header from "./pages/header";
import AboutMe from "./pages/about";
import Projects from "./pages/project";
import Contact from "./pages/contact";

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
