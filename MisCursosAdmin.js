import React from 'react';
import './MisCursosAdmin.css';
import { Link } from 'react-router-dom';

function MisCursosAdmin() {
  console.log('Rendering MisCursosAdmin');

  return (
    <div className="mis-cursos-admin-container">
      <header className="mis-cursos-admin-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos-admin" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos-admin" className="nav-button active">Mis Cursos</Link>
          <Link to="/mensajes-admin" className="nav-button">Mensajes</Link>
        </nav>
      </header>

      <main className="mis-cursos-admin-main">
        <section className="mis-cursos-section">
          <h2>Mis Cursos</h2>
          <input type="text" placeholder="Buscar curso..." className="search-bar" />
          <div className="cursos-grid">
            <Link to="/curso-python-admin" className="curso-card">
              <img src="/python-icon.png" alt="Python" className="curso-icon" />
            </Link>
            <Link to="/curso-figma-admin" className="curso-card">
              <img src="/figma-icon.png" alt="Figma" className="curso-icon" />
            </Link>
            <Link to="/agregar-curso" className="curso-card">
              <img src="/Agregar.png" alt="Agregar" className="add-icon" />
              <p>Agregar</p>
            </Link>
          </div>
        </section>

        <section className="cursos-complementarios-section">
          <h2>Cursos Complementarios</h2>
          <input type="text" placeholder="Buscar curso..." className="search-bar" />
          <div className="cursos-grid">
            <Link to="/curso-java-admin" className="curso-card">
              <img src="/java-icon.png" alt="Java" className="curso-icon" />
            </Link>
            <Link to="/curso-tableau-admin" className="curso-card">
              <img src="/tableau-icon.png" alt="Tableau" className="curso-icon" />
            </Link>
            <Link to="/agregar-curso" className="curso-card">
              <img src="/Agregar.png" alt="Agregar" className="add-icon" />
              <p>Agregar</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="mis-cursos-admin-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default MisCursosAdmin;
