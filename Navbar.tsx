import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

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
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
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