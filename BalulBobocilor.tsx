import React from 'react';
import { Link } from 'react-router-dom';

const BalulBobocilor: React.FC = () => {
  const images = [
    "assets/projects/balulbobocilor/project31.jpg",
    "assets/projects/balulbobocilor/project32.jpg",
    "assets/projects/balulbobocilor/project33.jpg"
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Înapoi la proiecte
        </Link>
        <h1>Balul Bobocilor</h1>
        <p>21 februarie 2025 - Radu Mamii</p>
        <p>
          Un eveniment festiv dedicat elevilor din clasa a IX-a, cu momente artistice, concursuri și distracție, pentru a-i întâmpina oficial în viața liceului.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Balul Bobocilor ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BalulBobocilor;