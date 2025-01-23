import "./App.css";
import React from "react";

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

function Header() {
    return (
        <header className="header">
            <h1>Portofolio Saya</h1>
            <nav>
                <a href="#about">Tentang Saya</a>
                <a href="#projects">Proyek</a>
                <a href="#contact">Kontak</a>
            </nav>
        </header>
    );
}

function AboutMe() {
    return (
        <section id="about" className="about">
            <h2>Tentang Saya</h2>
            <p>
                Halo, saya adalah seorang pengembang web yang berfokus pada React dan
                JavaScript.
            </p>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Proyek</h2>
            <div className="project-card">
                <h3>Proyek 1</h3>
                <p>Deskripsi proyek pertama saya.</p>
            </div>
            <div className="project-card">
                <h3>Proyek 2</h3>
                <p>Deskripsi proyek kedua saya.</p>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Kontak</h2>
        <p>Jika Anda ingin menghubungi saya, kirim email ke: contoh@email.com</p>
        
        </section>
    );
}

export default App;
