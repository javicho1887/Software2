import React from 'react';
import { Link } from 'react-router-dom'; 
import './CursoExcelAdmin.css';

function AgregarModulo() {
  return (
    <div className="curso-excel-container">
      <header className="curso-excel-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos-admin" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos-admin" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-admin" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil-admin">
            <img src="/user-avatar.png" alt="Admin Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="curso-excel-main">
        <div className="curso-excel-header-content">
          <button className="back-button" onClick={() => window.history.back()}>←</button>
          <div className="titulo-con-imagen">
            <h1 className="curso-titulo">Agregar Módulo</h1>
            <img src="/editar.png" alt="Icono Agregar" className="excel-icon" />
          </div>
          <div className="imagenes-derecha">

          </div>
        </div>

        <section className="modulos-list">
          <form>
            <div className="modulo">
              <label>Nombre del Módulo:</label>
              <input type="text" placeholder="Ingrese el nombre del módulo" required />
            </div>
            <div className="modulo">
              <label>Descripción:</label>
              <textarea placeholder="Descripción del módulo" required></textarea>
            </div>
            <div className="modulo">
              <label>Duración (horas):</label>
              <input type="number" placeholder="Ingrese duración" required />
            </div>
            <div className="modulo">
              <label>Recursos:</label>
              <input type="file" accept="pdf/*" placeholder="Recursos necesarios" />
            </div>
            <button type="submit" className="submit-button">Guardar Cambios</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AgregarModulo;
