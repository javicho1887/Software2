import React from 'react';
import { Link } from 'react-router-dom'; 


function AgregarCurso() {
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
            <h1 className="curso-titulo">Agregar Curso</h1>
          </div>
          <div className="imagenes-derecha">
          </div>
        </div>

        <section className="modulos-list">
          <form>
            <div className="modulo">
              <label>Nombre del Curso:</label>
              <input type="text" placeholder="Ingrese el nombre del curso" required />
            </div>

            <div className="modulo">
              <label>Nombre del Profesor :</label>
              <input type="text" placeholder="Ingrese Nombre del Profesor" required />
            </div>

            <div className="modulo">
              <label>Imagen del Curso:</label>
              <input type="file" accept="image/*" placeholder="Subir imagen del curso" />
            </div>
            <button type="submit" className="submit-button">Guardar Cambios</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AgregarCurso;
