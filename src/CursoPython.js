import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CursoPython.css";

function CursoPython() {
  const [sesions, setSesions] = useState([]);
  const cursoId = 5;

  const getSesionsData = async () => {
    // sesiones/curso/<int:curso_id>/usuario/<int:user_id>/
    await axios
      .get(`http://127.0.0.1:8000/api/sesiones/curso/${cursoId}/usuario/11`)
      .then((res) => {
        if (res.status == 200) {
          setSesions(res.data);
          console.log(res.data);
        }
        console.log(res.status);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSesionsData();
  }, []);
  return (
    <div className="curso-python-container">
      <header className="curso-python-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="user-avatar"
          />
        </nav>
      </header>

      <main className="curso-python-main">
        <div className="curso-python-header-content">
          <button className="back-button" onClick={() => window.history.back()}>
            ←
          </button>
          <h1>Curso Básico: Python</h1>
          <img
            src="/icon-python.png"
            alt="Icono Python"
            className="python-icon"
          />
        </div>
        <section className="modulos-list">
          {sesions.map((item) => {
            return (
              <div className="modulo">
                <span className="modulo-number">1</span>
                <div className="modulo-info">
                  <h3>Sesión de Python</h3>
                  <p>Fecha {new Date(item.fecha)
                    .toISOString()
                    .slice(0, 19)
                    .replace("T", " ")}{" "}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Sección de Evaluaciones */}
        <section className="evaluaciones">
          <h2>Evaluaciones</h2>
          <div className="evaluacion">
            <div className="evaluacion-item">
              <p className="evaluacion-text">
                <strong>PC1</strong> (no disponible)
              </p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text">
                <strong>PC2</strong> (no disponible)
              </p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text">
                <strong>PC3</strong> (no disponible)
              </p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text">
                <strong>Proyecto</strong> (no disponible)
              </p>
            </div>
          </div>
        </section>

        {/* Nueva Sección de Calificaciones */}
        <section className="calificaciones">
          <h2>Calificaciones</h2>
          <div className="calificacion-item">
            <p className="calificacion-text">
              Tu calificación actual es: <strong>85</strong>
            </p>
          </div>
          {/* Botón con el estilo de los botones de navegación */}
          <button
            className="nav-button"
            onClick={() =>
              alert("Redirigiendo a la página de calificaciones...")
            }
          >
            Ir
          </button>
        </section>
      </main>
    </div>
  );
}

export default CursoPython;
