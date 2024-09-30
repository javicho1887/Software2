import React from 'react';
import './CursoFigma.css';

function CursoFigma() {
  return (
    <div className="curso-figma-container">
      <header className="curso-figma-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="curso-figma-main">
        <div className="curso-figma-header-content">
          <button className="back-button" onClick={() => window.history.back()}>←</button>
          <h1>Curso Básico: Figma</h1>
          <img src="/icon-figma.png" alt="Icono Figma" className="figma-icon" />
        </div>

        <section className="modulos-list">
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Figma</h3>
              <p>Módulo 1</p>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Figma</h3>
              <p>Módulo 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CursoFigma;
