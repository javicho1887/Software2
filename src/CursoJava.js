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

        {/* Sección de Evaluaciones */}
        <section className="evaluaciones">
          <h2>Evaluaciones</h2>
          <div className="evaluacion">
            <div className="evaluacion-item">
              <p className="evaluacion-text"><strong>PC1</strong> (no disponible)</p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text"><strong>PC2</strong> (no disponible)</p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text"><strong>PC3</strong> (no disponible)</p>
            </div>
            <div className="evaluacion-item">
              <p className="evaluacion-text"><strong>Proyecto</strong> (no disponible)</p>
            </div>
          </div>
        </section>

        {/* Nueva Sección de Calificaciones */}
        <section className="calificaciones">
          <h2>Calificaciones</h2>
          <div className="calificacion-item">
            <p className="calificacion-text">Tu calificación actual es: <strong>85</strong></p>
          </div>
          {/* Botón con el estilo de los botones de navegación */}
          <button className="nav-button" onClick={() => alert("Redirigiendo a la página de calificaciones...")}>
            Ir
          </button>
        </section>
      </main>
    </div>
  );
}

export default CursoJava;
