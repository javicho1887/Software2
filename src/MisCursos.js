import React from 'react';
import './MisCursos.css';
import { Link } from 'react-router-dom';

function MisCursos() {
  return (
    <div className="mis-cursos-container">
      <header className="mis-cursos-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos" className="nav-button active">Mis Cursos</Link>
          <Link to="/mensajes" className="nav-button">Mensajes</Link>
        </nav>
      </header>

      <main className="mis-cursos-main">
        <section className="mis-cursos-section">
          <h2>Mis Cursos</h2>
          <input type="text" placeholder="Buscar curso..." className="search-bar" />
          <div className="cursos-grid">
            <div className="curso-card">
              <img src="/python-icon.png" alt="Python" className="curso-icon" />
            </div>
            <div className="curso-card">
              <img src="/figma-icon.png" alt="Figma" className="curso-icon" />
            </div>
          </div>
        </section>

        <section className="cursos-complementarios-section">
          <h2>Cursos Complementarios</h2>
          <input type="text" placeholder="Buscar curso..." className="search-bar" />
          <div className="cursos-grid">
            <div className="curso-card">
              <img src="/java-icon.png" alt="Java" className="curso-icon" />
            </div>
            <div className="curso-card">
              <img src="/tableau-icon.png" alt="Tableau" className="curso-icon" />
            </div>
          </div>
        </section>
      </main>

      <footer className="mis-cursos-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default MisCursos;