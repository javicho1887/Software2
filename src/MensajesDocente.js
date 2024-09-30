import React from 'react';
import './MensajesDocente.css';
import { Link } from 'react-router-dom';

function MensajesDocente() {
  return (
    <div className="mensajes-docente-container">
      <header className="mensajes-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-docente" className="nav-button active">Mensajes</Link>
        </nav>
      </header>

      <main className="mensajes-docente-main">
        <h2>Mensajes</h2>
        <div className="mensajes-lista">
          <div className="mensaje-card">
            <img src="/user1.png" alt="Estudiante" className="mensaje-avatar" />
            <div className="mensaje-info">
              <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
              <p>Curso: Python</p>
            </div>
            <div className="mensaje-fecha">
              <p>10/09/2024</p>
            </div>
          </div>

          <div className="mensaje-card">
            <img src="/user2.png" alt="Estudiante" className="mensaje-avatar" />
            <div className="mensaje-info">
              <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
              <p>Curso: Figma</p>
            </div>
            <div className="mensaje-fecha">
              <p>10/09/2024</p>
            </div>
          </div>

          <div className="mensaje-card">
            <img src="/user3.png" alt="Estudiante" className="mensaje-avatar" />
            <div className="mensaje-info">
              <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
              <p>Curso: Figma2</p>
            </div>
            <div className="mensaje-fecha">
              <p>10/09/2024</p>
            </div>
          </div>

          <div className="mensaje-card">
            <img src="/user4.png" alt="Estudiante" className="mensaje-avatar" />
            <div className="mensaje-info">
              <p>Hola profesor, buenas tardes, quisiera que revisara...</p>
              <p>Curso: Java</p>
            </div>
            <div className="mensaje-fecha">
              <p>10/09/2024</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MensajesDocente;
