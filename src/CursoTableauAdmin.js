import React from 'react';
import { Link } from 'react-router-dom';
import './CursoExcelAdmin.css';

function CursoTableauAdmin() {
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
            <h1 className="curso-titulo">Curso Básico: Tableau</h1>
            <img src="/editar.png" alt="Icono Editar" className="excel-icon" />
          </div>
          <div className="imagenes-derecha">
            <img src="/icon-tableau.png" alt="Imagen Adicional 1" className="extra-image" />
            <img src="/editar.png" alt="Imagen Adicional 2" className="extra-image" />
          </div>
        </div>

        <section className="modulos-list">
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Tableau</h3>
              <p>Módulo 1</p>
              <div className="acciones-modulo">
                <Link to="/editar-modulo" className="accion-link">Editar</Link> / 
                <Link to="" className="accion-link">Eliminar</Link>
              </div>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción a Tableau</h3>
              <p>Módulo 2</p>
              <div className="acciones-modulo">
                <Link to="/editar-modulo" className="accion-link">Editar</Link> / 
                <Link to="" className="accion-link">Eliminar</Link>
              </div>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">2</span>
            <div className="modulo-info">
              <h3>Funciones Básicas</h3>
              <p>Módulo 1</p>
              <div className="acciones-modulo">
                <Link to="/editar-modulo" className="accion-link">Editar</Link> / 
                <Link to="" className="accion-link">Eliminar</Link>
              </div>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">2</span>
            <div className="modulo-info">
              <h3>Funciones Básicas</h3>
              <p>Módulo 2</p>
              <div className="acciones-modulo">
                <Link to="/editar-modulo" className="accion-link">Editar</Link> / 
                <Link to="" className="accion-link">Eliminar</Link>
              </div>
            </div>
          </div>

          {/* Botón Agregar */}
          <div className="modulo agregar-modulo">
            <Link to="/agregar-modulo" className="agregar-link">
              <button className="agregar-button">Agregar</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CursoTableauAdmin;
