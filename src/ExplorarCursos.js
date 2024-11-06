import "./ExplorarCursos.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ExplorarCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/cursos/") // URL de tu backend Django
      .then((response) => response.json())
      .then((data) => setCursos(data))
      .catch((error) => console.error("Error al cargar los cursos:", error));
  }, []);

  return (
    <div className="courses-container">
      <header className="courses-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos" className="nav-button">
            Explorar Cursos
          </Link>
          <Link to="/mis-cursos" className="nav-button">
            Mis Cursos
          </Link>
          <Link to="/mensajes" className="nav-button">
            Mensajes
          </Link>
          <Link to="/mi-perfil">
            <img
              src="/user-avatar.png"
              alt="User Avatar"
              className="user-avatar"
            />
          </Link>
        </nav>
      </header>

      <main className="courses-layout">
        <div className="courses-grid">
          <div className="course-card">
            <Link to="/curso-detalle/2">
              <img src="/excel-icon.png" alt="Excel" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-detalle/3">
              <img
                src="/powerbi-icon.png"
                alt="Power BI"
                className="course-icon"
              />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-detalle/4">
              <img src="/java-icon.png" alt="Java" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-detalle/5">
              <img
                src="/python-icon.png"
                alt="Python"
                className="course-icon"
              />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-detalle/6">
              <img src="/figma-icon.png" alt="Figma" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-detalle/7">
              <img
                src="/tableau-icon.png"
                alt="Tableau"
                className="course-icon"
              />
            </Link>
          </div>
        </div>

        <div className="marketing-banner">
          <img
            src="/marketing-banner.png"
            alt="Marketing Digital"
            className="banner-image"
          />
        </div>
      </main>

      <footer className="courses-footer">
        <a href="/help" className="help-link">
          ¿Necesita ayuda?
        </a>
      </footer>
    </div>
  );
}

export default ExplorarCursos;
