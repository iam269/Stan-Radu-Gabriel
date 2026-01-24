import React, { useState } from "react";
import { Link } from "react-router-dom";

const imageSets: { [key: string]: string[] } = {
  eco: ["assets/projects/ecocreatii/project1.jpg", "assets/projects/ecocreatii/project12.jpg"],
  ornare: [
    "assets/projects/ornareaclaselor/project21.jpg",
    "assets/projects/ornareaclaselor/project22.jpg",
    "assets/projects/ornareaclaselor/project23.jpg",
  ],
  bal: ["assets/projects/balulbobocilor/project31.jpg", "assets/projects/balulbobocilor/project32.jpg", "assets/projects/balulbobocilor/project33.jpg"],
  caritabil: [
    "assets/projects/evenimentcaritabil/616498912_26818998364403129_4434897387479816277_n.jpg",
    "assets/projects/evenimentcaritabil/616813704_1440945647534401_8578377139111440681_n.jpg",
    "assets/projects/evenimentcaritabil/619364629_1218152946383052_8378309681639668239_n.jpg",
    "assets/projects/evenimentcaritabil/619652806_879853868239633_3597597925037120914_n.jpg",
    
  ],
  mos: [
    "assets/projects/casutacaritabila/616124510_1250807050276923_3802822043688542984_n.jpg",
    "assets/projects/casutacaritabila/616134480_1649379739765576_6535386621141406109_n.jpg",
    "assets/projects/casutacaritabila/616763781_2094642784641794_3353313187256877296_n.jpg",
    "assets/projects/casutacaritabila/617568150_1379798533435822_1892814706606047646_n.jpg",
    "assets/projects/casutacaritabila/617706662_1311591870992814_7712772581881286200_n.jpg",
    "assets/projects/casutacaritabila/617722305_899209325885501_6186363950726394535_n.jpg",
    "assets/projects/casutacaritabila/619675822_2417692682079720_3909337245499773608_n.jpg",
  ],
};

const Projects: React.FC = () => {
  const [currentIndices, setCurrentIndices] = useState<{
    [key: string]: number;
  }>({
    eco: 0,
    ornare: 0,
    bal: 0,
    caritabil: 0,
    mos: 0,
  });

  const changeImage = (project: string, direction: number) => {
    const images = imageSets[project];
    setCurrentIndices((prev) => ({
      ...prev,
      [project]: (prev[project] + direction + images.length) % images.length,
    }));
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Proiecte</h2>
          <div className="divider"></div>
          <p>
            Acestea sunt câteva dintre proiectele la care am lucrat împreună cu
            colegii mei si Consiliul Elevilor
          </p>
        </div>
        <div className="projects-grid">
          <Link to="/balul-bobocilor" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card">
            <div className="project-image-container">
              <img
                src={imageSets.bal[currentIndices.bal]}
                alt="Balul Bobocilor"
                className="project-image"
              />
              <button
                className="carousel-btn prev-btn"
                onClick={() => changeImage("eco", -1)}
              >
                &#10094;
              </button>
              <button
                className="carousel-btn next-btn"
                onClick={() => changeImage("eco", 1)}
              >
                &#10095;
              </button>
            </div>
            <div className="project-content">
              <div className="project-icon">
                <span className="icon-leaf">🌿</span>
              </div>
              <h3>Eco Creații</h3>
              <p>2 iunie 2025</p>
              <p>
                Un proiect de conștientizare ecologică în care participanții
                realizează produse și planșe creative din materiale reciclabile,
                promovând astfel sustenabilitatea.
              </p>
            </div>
          </div>
          </Link>
          <Link to="/ornarea-claselor" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card">
            <div className="project-image-container">
              <img
                src={imageSets.ornare[currentIndices.ornare]}
                alt="Ornarea Claselor"
                className="project-image"
              />
              <button
                className="carousel-btn prev-btn"
                onClick={() => changeImage("ornare", -1)}
              >
                &#10094;
              </button>
              <button
                className="carousel-btn next-btn"
                onClick={() => changeImage("ornare", 1)}
              >
                &#10095;
              </button>
            </div>
            <div className="project-content">
              <div className="project-icon">
                <span className="icon-users">👥</span>
              </div>
              <h3>Ornarea Claselor</h3>
              <p>29 noiembrie 2024</p>
              <p>
                O activitate de 1 Decembrie în care elevii decorează sălile cu
                elemente și simboluri naționale, sărbătorind împreună Ziua
                Națională.
              </p>
            </div>
          </div>
          </Link>
          <Link to="/ornarea-claselor" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card">
            <div className="project-image-container">
              <img
                src={imageSets.ornare[currentIndices.ornare]}
                alt="Ornarea Claselor"
                className="project-image"
              />
              <button
                className="carousel-btn prev-btn"
                onClick={() => changeImage("ornare", -1)}
              >
                &#10094;
              </button>
              <button
                className="carousel-btn next-btn"
                onClick={() => changeImage("ornare", 1)}
              >
                &#10095;
              </button>
            </div>
            <div className="project-content">
              <div className="project-icon">
                <span className="icon-heart">❤️</span>
              </div>
              <h3>Balul Bobocilor</h3>
              <p>21 februarie 2025</p>
              <p>
                Un eveniment festiv dedicat elevilor din clasa a IX-a, cu
                momente artistice, concursuri și distracție, pentru a-i
                întâmpina oficial în viața liceului.
              </p>
            </div>
          </div>
          </Link>
          <Link to="/balul-bobocilor" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card">
            <div className="project-image-container">
              <img
                src={imageSets.bal[currentIndices.bal]}
                alt="Balul Bobocilor"
                className="project-image"
              />
              <button
                className="carousel-btn prev-btn"
                onClick={() => changeImage("bal", -1)}
              >
                &#10094;
              </button>
              <button
                className="carousel-btn next-btn"
                onClick={() => changeImage("bal", 1)}
              >
                &#10095;
              </button>
            </div>
            <div className="project-content">
              <div className="project-icon">
                <span className="icon-leaf">🎅</span>
              </div>
              <h3>Raftul lui Moș Crăciun</h3>
              <p>5-31 decembrie 2025</p>
              <p>
                Proiect caritabil realizat în parteneriat cu Primăria Târgu
                Neamț, în cadrul căruia elevii liceului au donat cărți ce au
                fost valorificate la Târgul de Crăciun al orașului. Fondurile
                obținute au fost direcționate către proiectul caritabil „Suflet
                pentru Suflet”, contribuind activ la sprijinirea comunității
                locale.
              </p>
            </div>
          </div>
          </Link>
          <Link to="/raftul-mos-craciun" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card">
            <div className="project-image-container">
              <img
                src={imageSets.mos[currentIndices.mos]}
                alt="Raftul lui Moș Crăciun"
                className="project-image"
              />
              <button
                className="carousel-btn prev-btn"
                onClick={() => changeImage("mos", -1)}
              >
                &#10094;
              </button>
              <button
                className="carousel-btn next-btn"
                onClick={() => changeImage("mos", 1)}
              >
                &#10095;
              </button>
            </div>
            <div className="project-content">
              <div className="project-icon">
                <span className="icon-leaf">🎅</span>
              </div>
              <h3>Raftul lui Moș Crăciun</h3>
              <p>5-31 decembrie 2025 - Radu Mamii</p>
              <p>
                Proiect caritabil realizat în parteneriat cu Primăria Târgu
                Neamț, în cadrul căruia elevii liceului au donat cărți ce au
                fost valorificate la Târgul de Crăciun al orașului. Fondurile
                obținute au fost direcționate către proiectul caritabil „Suflet
                pentru Suflet”, contribuind activ la sprijinirea comunității
                locale.
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
