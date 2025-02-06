import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className='nav' style={{}}>
                <a href="#about" style={{ textDecoration: 'none', marginRight: '20px', color: '#fff' }}>TENTANG</a>
                <a href="#nav" style={{ textDecoration: 'none', marginRight: '20px', color: '#fff' }}>PROYEK</a>
                <a href="#contact" style={{ textDecoration: 'none', color: '#fff' }}>KONTAK</a>
            </nav>
        </header>
    );
}
export default Header;