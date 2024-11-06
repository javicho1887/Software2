import React, { useEffect, useState } from "react";
import "./MisCursos.css";
import { Link } from "react-router-dom";
import axios from "axios";

function MisCursos() {
  const userId = 11;

  const [data, setData] = useState([]);

  const images = {
    "Excel" : "/excel-icon.png",
    "PowerBI" : "/powerbi-icon.png",
    "Java" : "/java-icon.png",
    "Python": "/python-icon.png",
    "Tableau" : "/tableau-icon.png",
    "Figma" : "/figma-icon.png",
  }

  const getSesionsData = async () => {
    // sesiones/curso/<int:curso_id>/usuario/<int:user_id>/
    await axios
      .get(`http://127.0.0.1:8000/api/cursos/usuario/${userId}/`)
      .then((res) => {
        if (res.status == 200) {
          setData(res.data);
          console.log(res.data);
        }
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSesionsData();
  }, []);

  return (
    <div className="mis-cursos-container">
      <header className="mis-cursos-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos" className="nav-button">
            Explorar Cursos
          </Link>
          <Link to="/mis-cursos" className="nav-button active">
            Mis Inscripciones
          </Link>
          <Link to="/mensajes" className="nav-button">
            Mensajes
          </Link>
        </nav>
      </header>

      <main className="mis-cursos-main">
        <section className="mis-cursos-section">
          <h2>Mis Inscripciones</h2>
          <input
            type="text"
            placeholder="Buscar curso..."
            className="search-bar"
          />
          <div className="cursos-grid">
            {data.map((item) => {
              return (
                <Link to={`/curso-${item.title.toLowerCase()}`} className="curso-card">
                  <div className="curso-card">
                    <img
                      src={images[item.title]}
                      alt="Python"
                      className="curso-icon"
                    />
                  </div>
                </Link>
              );
            })}
            {/* <Link to="/curso-python" className="curso-card">
              <div className="curso-card">
                <img
                  src="/python-icon.png"
                  alt="Python"
                  className="curso-icon"
                />
              </div>
            </Link>

            <Link to="/curso-figma" className="curso-card">
              <div className="curso-card">
                <img src="/figma-icon.png" alt="Figma" className="curso-icon" />
              </div>
            </Link>

            <Link to="/curso-excel" className="curso-card">
              <div className="curso-card">
                <img src="/excel-icon.png" alt="Figma" className="curso-icon" />
              </div>
            </Link>

            <Link to="/curso-detalle/3">
              <div className="curso-card">
                <img src="/java-icon.png" alt="Java" className="curso-icon" />
              </div>
            </Link>

            <Link to="/curso-detalle/6">
              <div className="curso-card">
                <img
                  src="/tableau-icon.png"
                  alt="Tableau"
                  className="curso-icon"
                />
              </div>
            </Link>

            <Link to="/curso-detalle/2">
              <div className="curso-card">
                <img
                  src="/powerbi-icon.png"
                  alt="Tableau"
                  className="curso-icon"
                />
              </div>
            </Link> */}
          </div>
        </section>

        {/* <section className="cursos-complementarios-section">
          <h2>Cursos Complementarios</h2>
          <input
            type="text"
            placeholder="Buscar curso..."
            className="search-bar"
          />
          <div className="cursos-grid">
            <Link to="/curso-detalle/3">
              <div className="curso-card">
                <img src="/java-icon.png" alt="Java" className="curso-icon" />
              </div>
            </Link>

            <Link to="/curso-detalle/6">
              <div className="curso-card">
                <img
                  src="/tableau-icon.png"
                  alt="Tableau"
                  className="curso-icon"
                />
              </div>
            </Link>

            <Link to="/curso-detalle/2">
              <div className="curso-card">
                <img
                  src="/powerbi-icon.png"
                  alt="Tableau"
                  className="curso-icon"
                />
              </div>
            </Link>
          </div>
        </section> */}
      </main>

      <footer className="mis-cursos-footer">
        <a href="/help" className="help-link">
          ¿Necesita ayuda?
        </a>
      </footer>
    </div>
  );
}

export default MisCursos;
