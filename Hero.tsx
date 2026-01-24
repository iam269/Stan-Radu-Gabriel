import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Salut! Sunt <span className="highlight">Stan Radu Gabriel</span></h1>
        <p>Elev în clasa a 10-a și membru în Consiliul Elevilor</p>
        <p className="hero-quote">"Cred că schimbarea începe cu ideile și munca în echipă."</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('about')}>Descoperă Mai Mult</button>
          <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>Contactează-mă</button>
        </div>
        <div className="scroll-indicator">
          <div className="arrow-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;