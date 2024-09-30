import React from 'react';
import { Link } from 'react-router-dom';
import './MensajesCursoDocente.css';

function MensajesCursoDocente() {
  return (
    <div className="mensajes-curso-docente-container">
      <header className="curso-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <h2>Mensajes Curso Python - 745</h2>
        <nav className="nav-bar">
          <Link to="/mis-cursos" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes" className="nav-button">Mensajes</Link>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="mensajes-content">
        <div className="mensaje-item">
          <img src="/avatar1.png" alt="Estudiante 1" className="mensaje-avatar" />
          <div className="mensaje-text">
            <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
            <span>Curso: Python | 10/09/2024</span>
          </div>
        </div>

        <div className="mensaje-item">
          <img src="/avatar2.png" alt="Estudiante 2" className="mensaje-avatar" />
          <div className="mensaje-text">
            <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
            <span>Curso: Figma | 10/09/2024</span>
          </div>
        </div>

        <div className="mensaje-item">
          <img src="/avatar3.png" alt="Estudiante 3" className="mensaje-avatar" />
          <div className="mensaje-text">
            <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
            <span>Curso: Figma2 | 10/09/2024</span>
          </div>
        </div>

        <div className="mensaje-item">
          <img src="/avatar4.png" alt="Estudiante 4" className="mensaje-avatar" />
          <div className="mensaje-text">
            <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
            <span>Curso: Java | 10/09/2024</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MensajesCursoDocente;
