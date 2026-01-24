import React from 'react';
import { Link } from 'react-router-dom';

const EvenimentArtisticCaritabil: React.FC = () => {
  const images = [
    "assets/projects/casutacaritabila/616124510_1250807050276923_3802822043688542984_n.jpg",
    "assets/projects/casutacaritabila/616134480_1649379739765576_6535386621141406109_n.jpg",
    "assets/projects/casutacaritabila/616763781_2094642784641794_3353313187256877296_n.jpg",
    "assets/projects/casutacaritabila/617568150_1379798533435822_1892814706606047646_n.jpg",
    "assets/projects/casutacaritabila/617706662_1311591870992814_7712772581881286200_n.jpg",
    "assets/projects/casutacaritabila/617722305_899209325885501_6186363950726394535_n.jpg",
    "assets/projects/casutacaritabila/619675822_2417692682079720_3909337245499773608_n.jpg"
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Înapoi la proiecte
        </Link>
        <h1>Eveniment artistic caritabil</h1>
        <p>17 decembrie 2025 - Radu Mamii</p>
        <p>
          Spectacol artistic cu scop caritabil, organizat integral de Consiliul Elevilor, fără îndrumarea unui cadru didactic. Evenimentul s-a desfășurat exclusiv cu participarea elevilor liceului, fiind conceput și coordonat de elevi, de la organizare până la desfășurarea pe scenă. Fondurile obținute au fost direcționate către o cauză umanitară, promovând implicarea civică, responsabilitatea socială și capacitatea de auto-organizare a elevilor.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Eveniment artistic caritabil ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvenimentArtisticCaritabil;