import React from 'react';
import { Link } from 'react-router-dom';

const EcoCreatii: React.FC = () => {
  const images = [
    "assets/projects/ecocreatii/project1.jpg",
    "assets/projects/ecocreatii/project12.jpg"
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Înapoi la proiecte
        </Link>
        <h1>Eco Creații</h1>
        <p>2 iunie 2025 - Radu Mamii</p>
        <p>
          Un proiect de conștientizare ecologică în care participanții realizează produse și planșe creative din materiale reciclabile, promovând astfel sustenabilitatea.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Eco Creații ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoCreatii;