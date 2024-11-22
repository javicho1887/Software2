import React from 'react';
import './ExplorarCursosAdmin.css';
import { Link } from 'react-router-dom';

function ExplorarCursosAdmin() {
  return (
    <div className="courses-admin-container">
      <header className="courses-admin-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos-admin" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos-admin" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-admin" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil-admin">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="courses-admin-layout">
        <div className="courses-admin-grid">
          <div className="course-card">
            <Link to="/curso-excel-admin">
              <img src="/excel-icon.png" alt="Excel" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-powerbi-admin">
              <img src="/powerbi-icon.png" alt="Power BI" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-java-admin">
              <img src="/java-icon.png" alt="Java" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-python-admin">
              <img src="/python-icon.png" alt="Python" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-figma-admin">
              <img src="/figma-icon.png" alt="Figma" className="course-icon" />
            </Link>
          </div>
          <div className="course-card">
            <Link to="/curso-tableau-admin">
              <img src="/tableau-icon.png" alt="Tableau" className="course-icon" />
            </Link>
          </div>
        </div>

        <div className="marketing-banner">
          <img src="/marketing-banner.png" alt="Marketing Digital" className="banner-image" />
        </div>
      </main>

      <footer className="courses-admin-footer">
        <a href="/help" className="help-link">¿Necesita ayuda?</a>
      </footer>
    </div>
  );
}

export default ExplorarCursosAdmin;
