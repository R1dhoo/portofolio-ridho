import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { useData } from "../context/DataContext";

// Import semua gambar lokal dari assets
import portfoliooImg from "../assets/portfolioo.png";
import gameRecImg from "../assets/Web-Rekomendasi.png";
import gameImg from "../assets/game.png";

// Map imageKey → imported asset
const LOCAL_IMAGES = {
  portfolioo: portfoliooImg,
  webRekomendasi: gameRecImg,
  game: gameImg,
};

function Projects() {
  const { projects } = useData();

  function getImage(p) {
    // Prioritas: URL dari admin → gambar lokal dari assets → null
    if (p.imageUrl) return p.imageUrl;
    if (p.imageKey && LOCAL_IMAGES[p.imageKey]) return LOCAL_IMAGES[p.imageKey];
    return null;
  }

  return (
    <div>
      <Navbar />
      <section className="section">
        <FadeIn>
          <div className="proj-header">
            <div>
              <h2 className="section-title">Proyek</h2>
              <p className="section-sub" style={{ marginTop: 6 }}>Karya yang pernah dikerjakan</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="proj-list">
            {projects.map((p) => {
              const img = getImage(p);
              return (
                <div key={p.id} className="proj-row">
                  <span className="pnum">{p.num}</span>
                  <div className="proj-info">
                    {img && (
                      <img src={img} alt={p.title} className="proj-image" />
                    )}
                    <div className="proj-title">{p.title}</div>
                    <div className="proj-desc">{p.desc}</div>
                    <div className="tech-badges">
                      {p.tech.map((t) => (
                        <span key={t} className="tbadge">{t}</span>
                      ))}
                    </div>
                    <div className="proj-year">{p.year}</div>
                  </div>
                </div>
              );
            })}
            {projects.length === 0 && (
              <p style={{ color: "#333", fontSize: 13, padding: "40px 0" }}>
                Belum ada proyek. Tambah di <a href="/admin" style={{ color: "#555" }}>/admin</a>.
              </p>
            )}
          </div>
        </FadeIn>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
