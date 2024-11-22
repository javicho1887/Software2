import React from 'react';
import './ZoomCursoDocente.css';
import { Link } from 'react-router-dom';

function ZoomCursoDocente() {
  return (
    <div className="zoom-curso-docente-container">
      <header className="curso-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-curso-docente" className="nav-button">Mensajes</Link>
        </nav>
      </header>

      <main className="zoom-curso-docente-main">
        <h2>Curso Python - 745</h2>
        <div className="menu-lateral">
          <Link to="/anuncios-curso-docente" className="menu-item">Anuncios</Link>
          <Link to="/contenido-curso-docente" className="menu-item">Contenido</Link>
          <Link to="/calificaciones-curso-docente" className="menu-item">Calificaciones</Link>
          <Link to="/zoom-curso-docente" className="menu-item selected">Zoom</Link>
          <Link to="/mensajes-curso-docente" className="menu-item">Mensajes</Link>
        </div>

        <div className="zoom-curso">
          <div className="zoom-invitation">
            <h3>Bienvenido al aula 745</h3>
            <Link to="/zoom-room" className="zoom-button">Ingrese aquí</Link>
          </div>
        </div>
      </main>

      <footer className="curso-docente-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default ZoomCursoDocente;
