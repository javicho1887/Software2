import React from 'react';
import './ContenidoCursoDocente.css';
import { Link } from 'react-router-dom';

function ContenidoCursoDocente() {
  return (
    <div className="contenido-curso-docente-container">
      <header className="curso-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-curso-docente" className="nav-button">Mensajes</Link>
        </nav>
      </header>

      <main className="curso-docente-main">
        <h2>Curso Python - 745</h2>
        <div className="menu-lateral">
          <Link to="/anuncios-curso-docente" className="menu-item">Anuncios</Link>
          <Link to="/contenido-curso-docente" className="menu-item selected">Contenido</Link>
          <Link to="/calificaciones-curso-docente" className="menu-item">Calificaciones</Link>
          <Link to="/zoom-curso-docente" className="menu-item">Zoom</Link>
          <Link to="/mensajes-curso-docente" className="menu-item">Mensajes</Link>
        </div>

        <div className="contenido-curso">
          <div className="semanas-lista">
            <div className="semana-item">Semana 1</div>
            <div className="semana-item">Semana 2</div>
            <div className="semana-item">Semana 3</div>
          </div>
        </div>
      </main>

      <footer className="curso-docente-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default ContenidoCursoDocente;
