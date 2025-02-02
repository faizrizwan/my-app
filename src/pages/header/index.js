import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className='nav' style={{}}>
                <a href="#about" style={{ textDecoration: 'none', marginRight: '20px', color: '#fff' }}>Tentang</a>
                <a href="#projects" style={{ textDecoration: 'none', marginRight: '20px', color: '#fff' }}>Proyek</a>
                <a href="#contact" style={{ textDecoration: 'none', color: '#fff' }}>Kontak</a>
            </nav>
        </header>
    );
}
export default Header;