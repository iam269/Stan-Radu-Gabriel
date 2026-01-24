import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactează-mă</h2>
          <div className="divider"></div>
          <p>Ai o idee sau vrei să colaborăm? Nu ezita să-mi scrii!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <img src="icons/email.png" alt="Email" />
            </div>
            <div className="contact-info">
              <h4>Email</h4>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=raduq.stan@gmail.com" target="_blank">raduq.stan@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <img src="icons/instagram.png" alt="Instagram" />
            </div>
            <div className="contact-info">
              <h4>Instagram</h4>
              <a href="https://www.instagram.com/raduq.st/" target="_blank">@raduq.st</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <img src="icons/facebook.png" alt="Facebook" />
            </div>
            <div className="contact-info">
              <h4>Facebook</h4>
              <a href="https://www.facebook.com/profile.php?id=100068926080795&locale=ro_RO" target="_blank">Radu Gabriel Stan</a>
            </div>
          </div>
        </div>
        <div className="contact-quote">
          "Împreună putem face diferența în comunitatea noastră școlară!"
        </div>
      </div>
    </section>
  );
};

export default Contact;