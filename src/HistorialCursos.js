import React from 'react';
import { Link } from 'react-router-dom';
import './HistorialCursos.css';

function HistorialCursos() {
  const cursos = [
    { id: 1, nombre: 'Excel', fecha: '20/09/2024' },
    { id: 2, nombre: 'PowerBi', fecha: '21/09/2024' },
    { id: 3, nombre: 'JAVA', fecha: '22/09/2024' },
    { id: 4, nombre: 'Figma', fecha: '23/09/2024' },
  ];

  return (
    <div className="historial-cursos-container">
      <header className="historial-cursos-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="historial-cursos-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="User Avatar" className="perfil-avatar-img" />
            <h2>Hola, User01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><a href="/mi-perfil">Mi Perfil</a></li>
            <li><a href="/historial-cursos" className="active">Historial de cursos</a></li>
            <li><a href="/contactos">Contactos</a></li>
            <li><a href="/cambiar-contraseña">Cambiar contraseña</a></li>
            <li><a href="#">Cerrar Sesión</a></li>
          </ul>
        </aside>

        <section className="historial-content">
          <h1>Mi Cuenta</h1>
          <div className="historial-details">
            <h2>Historial de Cursos</h2>
            <div className="historial-lista">
              {cursos.map((curso) => (
                <div key={curso.id} className="curso-card">
                  <p><strong>Curso:</strong> {curso.nombre}</p>
                  <p><strong>Adquirido:</strong> {curso.fecha}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HistorialCursos;
