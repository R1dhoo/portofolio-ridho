import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { useData } from "../context/DataContext";

function Experience() {
  const { experiences } = useData();

  return (
    <div>
      <Navbar />
      <section className="section">
        <FadeIn>
          <div className="section-header">
            <h2 className="section-title">Pengalaman</h2>
            <p className="section-sub">Perjalanan belajar dan berkembang</p>
          </div>
        </FadeIn>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 80}>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">{exp.title}</div>
                    <div className="exp-period">{exp.period}</div>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
          {experiences.length === 0 && (
            <p style={{ color: "#333", fontSize: 13, textAlign: "center", padding: "40px 0" }}>
              Belum ada pengalaman. Tambah di <a href="/admin" style={{ color: "#555" }}>/admin</a>.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Experience;
