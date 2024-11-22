import React from 'react';
import './AnunciosCursoDocente.css';
import { Link } from 'react-router-dom';

function AnunciosCursoDocente() {
  return (
    <div className="curso-container">
      <header className="curso-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-curso-docente" className="nav-button">Mensajes</Link>
        </nav>
      </header>

      <main className="curso-main">
        <h2>Curso Python - 745</h2>

        <div className="curso-content">
          <aside className="curso-sidebar">
            <ul>
            <li><Link to="/anuncios-curso-docente">Anuncios</Link></li>
          <li><Link to="/contenido-curso-docente">Contenido</Link></li>
          <li><Link to="/calificaciones-curso-docente">Calificaciones</Link></li>
          <li><Link to="/zoom-curso-docente">Zoom</Link></li>
          <li><Link to="/mensajes-curso-docente">Mensajes</Link></li>
            </ul>
          </aside>

          <section className="curso-announcements">
            <div className="announcement-box">
              <h3>Bienvenido al Curso Python!!!</h3>
              <p>Buen día alumnos, bienvenidos al curso Python, sección 745. Espero conocerlos y aprendan nuevas cosas sobre la programación.</p>
            </div>

            <div className="announcement-box">
              <h3>Horario de Asesorías</h3>
              <p>Los horarios de asesorías están disponibles en la sección Zoom, de 9 a 10 am los días miércoles. Los espero.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AnunciosCursoDocente;
