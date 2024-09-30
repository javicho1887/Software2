import React from 'react';
import './CalificacionesCursoDocente.css';
import { Link } from 'react-router-dom';

function CalificacionesCursoDocente() {
  return (
    <div className="calificaciones-curso-docente-container">
      <header className="curso-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-docente" className="nav-button">Mensajes</Link>
        </nav>
      </header>

      <main className="curso-docente-main">
        <h2>Curso Python - 745</h2>
        <div className="menu-lateral">
          <Link to="/anuncios-curso-docente" className="menu-item">Anuncios</Link>
          <Link to="/contenido-curso-docente" className="menu-item">Contenido</Link>
          <Link to="/calificaciones-curso-docente" className="menu-item selected">Calificaciones</Link>
          <Link to="/zoom-curso-docente" className="menu-item">Zoom</Link>
          <Link to="/mensajes-docente" className="menu-item">Mensajes</Link>
        </div>

        <div className="calificaciones-curso">
          <div className="calificaciones-lista">
            <div className="calificacion-item">PC 1 - 10/09/2024</div>
            <div className="calificacion-item">PC 2 - 10/09/2024</div>
            <div className="calificacion-item">PC 3 - 10/09/2024</div>
            <div className="calificacion-item">PC 4 - 10/09/2024</div>
          </div>
        </div>
      </main>

      <footer className="curso-docente-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default CalificacionesCursoDocente;
