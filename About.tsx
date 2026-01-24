import React, { useState } from 'react';

const About: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const openCVModal = () => {
    setIsCVModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCVModal = () => {
    setIsCVModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>Despre Mine</h2>
            <div className="divider"></div>
          </div>
          <div className="about-content">
            <div className="about-image">
              <img src="assets/profile/Photoprofile.jpg" alt="Stan Radu Gabriel" />
            </div>
            <div className="about-text">
              <h3>Bună! Mă bucur să te cunosc</h3>
              <p>Sunt elev în clasa a 10-a la Colegiul National "Stefan cel Mare" și sunt mândru să fac parte din Consiliul Elevilor. Profilul meu este filologie, iar pasiunea mea este să contribui la îmbunătățirea experienței școlare pentru toți elevii.</p>
              <p>Îmi plac literatura, istoria și lucrul în echipă. Cred cu tărie că prin comunicare deschisă și colaborare putem face școala noastră un loc mai bun pentru toată lumea.</p>
              <h4>De ce Consiliul Elevilor?</h4>
              <p>Pentru că vreau să fac diferența! Fiecare idee contează, fiecare voce merită să fie auzită, și împreună putem construi o comunitate școlară mai puternică și mai unită.</p>
              <p className="quote">"Leadershipul înseamnă acțiune, nu poziție."</p>
              <button className="btn btn-outline" onClick={openCVModal}>Vezi CV-ul</button>
            </div>
          </div>
        </div>
      </section>

      {isCVModalOpen && (
        <div className="modal" onClick={closeCVModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeCVModal}>&times;</span>
            <img src="assets/CV/CV original.jpg" alt="CV Stan Radu Gabriel" />
            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
              <a href="assets/CV/CV original.jpg" download="CV_Stan_Radu_Gabriel.jpg" className="btn btn-outline" style={{ marginRight: 10 }}>Descarcă CV</a>
              <button className="btn btn-outline" onClick={closeCVModal}>Înapoi</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;