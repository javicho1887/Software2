import React from 'react';
import './MisCursosDocente.css';
import { Link } from 'react-router-dom';

function MisCursosDocente() {
  return (
    <div className="mis-cursos-docente-container">
      <header className="mis-cursos-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-curso-docente" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil-docente">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="mis-cursos-docente-main">
        <h2>Mis Cursos</h2>
        <input type="text" placeholder="Buscar curso..." className="buscar-curso-input" />

        <div className="cursos-lista">
          {/* Curso Python */}
          <Link to="/anuncios-curso-docente" className="curso-card">
            <img src="/python-icon.png" alt="Python" className="curso-icon" />
            <div className="curso-info">
              <h3>Curso: Python</h3>
              <p>Sección: 745</p>
              <p>Horario: 16:00 - 18:00</p>
            </div>
          </Link>

          {/* Curso Figma */}
          <Link to="/anuncios-curso-docente" className="curso-card">
            <img src="/figma-icon.png" alt="Figma" className="curso-icon" />
            <div className="curso-info">
              <h3>Curso: Figma</h3>
              <p>Sección: 876</p>
              <p>Horario: 14:00 - 15:00</p>
            </div>
          </Link>

          {/* Curso Java */}
          <Link to="/anuncios-curso-docente" className="curso-card">
            <img src="/java-icon.png" alt="Java" className="curso-icon" />
            <div className="curso-info">
              <h3>Curso: Java</h3>
              <p>Sección: 745</p>
              <p>Horario: 20:00 - 22:00</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="mis-cursos-docente-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default MisCursosDocente;
