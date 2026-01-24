import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import AllProjects from './AllProjects';
import Contact from './Contact';
import Footer from './Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Add animation on scroll
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-card, .contact-card, .about-content').forEach(el => {
      observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .project-card, .contact-card, .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }

      .project-card.animate-in, .contact-card.animate-in, .about-content.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      .navbar-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 20px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      }

      @media (min-width: 769px) {
        .navbar-menu.active {
          display: flex !important;
          flex-direction: row !important;
          position: static !important;
          background: transparent !important;
          padding: 0 !important;
          box-shadow: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Add responsive navbar menu styles
    const responsiveStyle = document.createElement('style');
    responsiveStyle.textContent = `
      @media (max-width: 768px) {
        .navbar-menu {
          display: none;
        }

        .navbar-menu.active {
          display: flex;
        }
      }
    `;
    document.head.appendChild(responsiveStyle);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Home = () => (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );

  const basename = import.meta.env.PROD ? '/Stan-Radu-Gabriel/' : '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<><Navbar /><AllProjects /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
