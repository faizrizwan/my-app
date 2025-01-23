import React from 'react';
import './style.css';

function Header() {
    return (
        <header className="header">
           
            <nav>
                <a href="#about">Tentang</a>
                <a href="#projects">Proyek</a>
                <a href="#contact">Kontak</a>
            </nav>
        </header>
    );
}
export default Header;