import React from 'react';
import './CursoTableau.css';

function CursoTableau() {
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
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Tableau</h3>
              <p>Módulo 1</p>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Tableau</h3>
              <p>Módulo 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CursoTableau;
