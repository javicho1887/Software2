import React from 'react';
import './CursoJava.css';

function CursoJava() {
  return (
    <div className="curso-java-container">
      <header className="curso-java-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="curso-java-main">
        <div className="curso-java-header-content">
          <button className="back-button" onClick={() => window.history.back()}>←</button>
          <h1>Curso Básico: Java</h1>
          <img src="/icon-java.png" alt="Icono Java" className="java-icon" />
        </div>

        <section className="modulos-list">
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Java</h3>
              <p>Módulo 1</p>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Java</h3>
              <p>Módulo 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CursoJava;
