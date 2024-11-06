import React, { useEffect, useState } from "react";
import axios from "axios";
import './CursoTableau.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate


function CursoTableau() {
  const [sesions, setSesions] = useState([]);
  const cursoId = 7;

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

  const navigate = useNavigate(); // Crea una instancia de navigate

  const handleIrClick = () => {
    navigate('/calificaciones-tableau'); // Redirige a la nueva página
  };

  return (
    <div className="curso-tableau-container">
      <header className="curso-tableau-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="curso-tableau-main">
        <div className="curso-tableau-header-content">
          <button className="back-button" onClick={() => window.history.back()}>←</button>
          <h1>Curso Básico: Tableau</h1>
          <img src="/icon-tableau.png" alt="Icono Tableau" className="tableau-icon" />
        </div>

        <section className="modulos-list">
          {sesions.map((item) => {
            return (
              <div className="modulo">
                <span className="modulo-number">1</span>
                <div className="modulo-info">
                  <h3>Sesión de Tableau</h3>
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
              <p className="evaluacion-text"><strong>PC1</strong> (no disponible)</p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text"><strong>PC2</strong> (no disponible)</p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text"><strong>PC3</strong> (no disponible)</p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text"><strong>Proyecto</strong> (no disponible)</p>
            </div>
          </div>
        </section>

        {/* Nueva Sección de Calificaciones */}
        <section className="calificaciones">
          <h2>Calificaciones</h2>
          <div className="calificacion-item">
            <p className="calificacion-text">Tu calificación actual es: <strong>85</strong></p>
          </div>
          {/* Botón con el estilo de los botones de navegación */}
          <button className="nav-button" onClick={handleIrClick}>Ir</button>
          
        </section>
      </main>
    </div>
  );
}

export default CursoTableau;
