import "./ExplorarCursos.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ExplorarCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/cursos/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los cursos");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos recibidos del backend:", data); // Depuración
        setCursos(data);
      })
      .catch((error) => console.error("Error al cargar los cursos:", error));
  }, []);
  
  return (
    <div className="courses-container">
      <header className="courses-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="courses-layout">
        <div className="courses-grid">
          {cursos.map((curso) => (
            <div className="course-card" key={curso.id}>
              <Link to={`/curso-detalle/${curso.id}`}>
                <h3>{curso.title}</h3>
                <p>{curso.descripcion}</p>
                <p><strong>Fecha Inicio:</strong> {curso.fecha_inicio}</p>
                <p><strong>Fecha Fin:</strong> {curso.fecha_fin}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="courses-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default ExplorarCursos;
