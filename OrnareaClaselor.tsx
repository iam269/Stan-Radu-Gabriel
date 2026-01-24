import React from 'react';
import { Link } from 'react-router-dom';

const OrnareaClaselor: React.FC = () => {
  const images = [
    "assets/projects/ornareaclaselor/project21.jpg",
    "assets/projects/ornareaclaselor/project22.jpg",
    "assets/projects/ornareaclaselor/project23.jpg"
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Înapoi la proiecte
        </Link>
        <h1>Ornarea Claselor</h1>
        <p>29 noiembrie 2024 - Radu Mamii</p>
        <p>
          O activitate de 1 Decembrie în care elevii decorează sălile cu elemente și simboluri naționale, sărbătorind împreună Ziua Națională.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Ornarea Claselor ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrnareaClaselor;