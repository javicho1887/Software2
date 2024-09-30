import React from 'react';
import './CursoExcel.css';

function CursoExcel() {
  return (
    <div className="curso-excel-container">
      <header className="curso-excel-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="curso-excel-main">
        <div className="curso-excel-header-content">
          <button className="back-button" onClick={() => window.history.back()}>←</button>
          <h1>Curso Básico: Excel</h1>
          <img src="/icon-excel.png" alt="Icono Excel" className="excel-icon" />
        </div>

        <section className="modulos-list">
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción al Excel</h3>
              <p>Módulo 1</p>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">1</span>
            <div className="modulo-info">
              <h3>Introducción al Excel</h3>
              <p>Módulo 2</p>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">2</span>
            <div className="modulo-info">
              <h3>Funciones Básicas</h3>
              <p>Módulo 1</p>
            </div>
          </div>
          <div className="modulo">
            <span className="modulo-number">2</span>
            <div className="modulo-info">
              <h3>Funciones Básicas</h3>
              <p>Módulo 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CursoExcel;
