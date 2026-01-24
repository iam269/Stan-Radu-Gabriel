import React from 'react';
import { Link } from 'react-router-dom';

const RaftulMosCraciun: React.FC = () => {
  const images = [
    "assets/projects/evenimentcaritabil/616498912_26818998364403129_4434897387479816277_n.jpg",
    "assets/projects/evenimentcaritabil/616813704_1440945647534401_8578377139111440681_n.jpg",
    "assets/projects/evenimentcaritabil/619364629_1218152946383052_8378309681639668239_n.jpg",
    "assets/projects/evenimentcaritabil/619652806_879853868239633_3597597925037120914_n.jpg"
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Înapoi la proiecte
        </Link>
        <h1>Raftul lui Moș Crăciun</h1>
        <p>5-31 decembrie 2025 - Radu Mamii</p>
        <p>
          Proiect caritabil realizat în parteneriat cu Primăria Târgu Neamț, în cadrul căruia elevii liceului au donat cărți ce au fost valorificate la Târgul de Crăciun al orașului. Fondurile obținute au fost direcționate către proiectul caritabil „Suflet pentru Suflet”, contribuind activ la sprijinirea comunității locale.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Raftul lui Moș Crăciun ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaftulMosCraciun;