import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Stan Radu Gabriel</h3>
            <p>Membru în Consiliul Elevilor<br />Colegiul Național "Ștefan cel Mare"</p>
          </div>
          <div className="footer-section">
            <h4>Link-uri Rapide</h4>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Acasă</a></li>
              <li><a onClick={() => scrollToSection('about')}>Despre Mine</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Proiecte</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Conectează-te cu mine</h4>
            <div className="social-links">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=raduq.stan@gmail.com&tf=cm" aria-label="Email"><img src="icons/email.png" alt="Email" /></a>
              <a href="https://www.instagram.com/raduq.st/" target="_blank" aria-label="Instagram"><img src="icons/instagram.png" alt="Instagram" /></a>
              <a href="https://www.facebook.com/profile.php?id=100068926080795&locale=ro_RO" target="_blank" aria-label="Facebook"><img src="icons/facebook.png" alt="Facebook" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Stan Radu Gabriel. Toate drepturile rezervate.</p>
          <br />
          <p>Acest site a fost realizat de Ioniță Aurel-Mihai.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;