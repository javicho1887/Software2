import React from 'react';
import './CursoPython.css';

function CursoPython() {
  return (
    <div className="curso-python-container">
      <header className="curso-python-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="curso-python-main">
        <div className="curso-python-header-content">
          <button className="back-button" onClick={() => window.history.back()}>←</button>
          <h1>Curso Básico: Python</h1>
          <img src="/icon-python.png" alt="Icono Python" className="python-icon" />
        </div>

        <section className="modulos-list">
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Python</h3>
              <p>Módulo 1</p>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Python</h3>
              <p>Módulo 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CursoPython;
