import React, { useRef, useState, useEffect } from "react";

const AllProjects: React.FC = () => {
  const imagesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollLeft = (index: number) => {
    if (imagesRefs.current[index]) {
      imagesRefs.current[index]!.scrollLeft -= 150;
    }
  };

  const scrollRight = (index: number) => {
    if (imagesRefs.current[index]) {
      imagesRefs.current[index]!.scrollLeft += 150;
    }
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const projects = [
    {
      title: "Căsuța caritabilă „Raftul lui Moș Crăciun”",
      date: "5–31 decembrie 2025",
      description: "Proiect caritabil realizat în parteneriat cu Primăria Târgu Neamț, în cadrul căruia elevii liceului au donat cărți ce au fost valorificate la Târgul de Crăciun al orașului. Fondurile obținute au fost direcționate către proiectul caritabil „Suflet pentru Suflet”, contribuind activ la sprijinirea comunității locale.",
      images: [
        "/assets/projects/casutacaritabila/616124510_1250807050276923_3802822043688542984_n.jpg",
        "/assets/projects/casutacaritabila/616134480_1649379739765576_6535386621141406109_n.jpg",
        "/assets/projects/casutacaritabila/616763781_2094642784641794_3353313187256877296_n.jpg",
        "/assets/projects/casutacaritabila/617568150_1379798533435822_1892814706606047646_n.jpg",
        "/assets/projects/casutacaritabila/617706662_1311591870992814_7712772581881286200_n.jpg",
        "/assets/projects/casutacaritabila/617722305_899209325885501_6186363950726394535_n.jpg",
        "/assets/projects/casutacaritabila/619675822_2417692682079720_3909337245499773608_n.jpg"
      ]
    },
    {
      title: "Eveniment artistic caritabil",
      date: "17 decembrie 2025",
      description: "Un eveniment caritabil cu elemente artistice, organizat pentru a sprijini comunitatea locală prin activități creative și contribuții benevole.",
      images: [
        "/assets/projects/evenimentcaritabil/616498912_26818998364403129_4434897387479816277_n.jpg",
        "/assets/projects/evenimentcaritabil/616813704_1440945647534401_8578377139111440681_n.jpg",
        "/assets/projects/evenimentcaritabil/619364629_1218152946383052_8378309681639668239_n.jpg",
        "/assets/projects/evenimentcaritabil/619652806_879853868239633_3597597925037120914_n.jpg"
      ]
    },
    {
      title: "Eco Creații",
      date: "2 iunie 2025",
      description: "Un proiect de conștientizare ecologică în care participanții realizează produse și planșe creative din materiale reciclabile, promovând astfel sustenabilitatea.",
      images: [
        "/assets/projects/ecocreatii/project1.jpg",
        "/assets/projects/ecocreatii/project12.jpg"
      ]
    },
    {
      title: "Balul de Dragobete",
      date: "21 februarie 2025",
      description: "Un eveniment festiv dedicat elevilor din clasa a IX-a, cu momente artistice, concursuri și distracție, pentru a-i întâmpina oficial în viața liceului.",
      images: [
        "/assets/projects/balulbobocilor/project31.jpg",
        "/assets/projects/balulbobocilor/project32.jpg",
        "/assets/projects/balulbobocilor/project33.jpg"
      ]
    },
    {
      title: "Ornarea claselor",
      date: "29 noiembrie 2024",
      description: "O activitate de 1 Decembrie în care elevii decorează sălile cu elemente și simboluri naționale, sărbătorind împreună Ziua Națională.",
      images: [
        "/assets/projects/ornareaclaselor/project21.jpg",
        "/assets/projects/ornareaclaselor/project22.jpg",
        "/assets/projects/ornareaclaselor/project23.jpg"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Toate Proiectele</h2>
          <div className="divider"></div>
          <p>
            Acestea sunt toate proiectele la care am lucrat împreună cu
            colegii mei si Consiliul Elevilor, în ordine cronologică.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card" onClick={() => setSelectedProject(index)}>
              <div className="project-content">
                <div className="project-images" ref={(el) => { imagesRefs.current[index] = el; }}>
                  {project.images.map((img, i) => (
                    <img key={i} className="project-image" src={img} alt={project.title} />
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>Data: {project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject !== null && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-left">
              <h2>{projects[selectedProject].title}</h2>
              <p>Data: {projects[selectedProject].date}</p>
              <p>{projects[selectedProject].description}</p>
            </div>
            <div className="modal-right">
              <div className="single-image-container">
                <button
                  className="nav-btn prev-btn"
                  onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : projects[selectedProject].images.length - 1))}
                >
                  {'<'}
                </button>
                <img
                  className="single-project-image"
                  src={projects[selectedProject].images[currentImageIndex]}
                  alt={projects[selectedProject].title}
                />
                <button
                  className="nav-btn next-btn"
                  onClick={() => setCurrentImageIndex((prev) => (prev < projects[selectedProject].images.length - 1 ? prev + 1 : 0))}
                >
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllProjects;