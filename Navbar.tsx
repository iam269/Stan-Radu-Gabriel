import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${window.scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand" onClick={() => scrollToSection('home')}>
          Stan Radu Gabriel
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Acasă</a>
          <a onClick={() => scrollToSection('about')}>Despre Mine</a>
          <a onClick={() => scrollToSection('projects')}>Proiecte</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;