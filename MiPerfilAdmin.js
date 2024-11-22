import React from 'react';
import { Link } from 'react-router-dom';
import './MiPerfilAdmin.css';

function MiPerfilAdmin() {
  return (
    <div className="mi-perfil-container">
      <header className="mi-perfil-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos-admin" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos-admin" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-admin" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil-admin" className="nav-button active">Mi Perfil</Link>
          <img src="/user-avatar.png" alt="Admin Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="mi-perfil-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="Admin Avatar" className="perfil-avatar-img" />
            <h2>Hola, Admin01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><Link to="/mi-perfil-admin" className="active">Mi Perfil</Link></li>
            <li><Link to="/lista-profesores">Lista de Profesores</Link></li>
            <li><Link to="/lista-alumnos">Lista de Alumnos</Link></li>
            <li><Link to="/cambiar-contraseña-admin">Cambiar contraseña</Link></li>
            <li><Link to="/ ">Cerrar Sesión</Link></li>
          </ul>
        </aside>

        <section className="perfil-content">
          <h1>Mi Cuenta</h1>
          <div className="perfil-details">
            <h2>Perfil</h2>
            <div className="perfil-info">
              <p><strong>Nombre:</strong> Admin01 <strong>Apellido:</strong> Admin01</p>
              <p><strong>Documento de Identificación:</strong> 88888888 <strong>Género:</strong> Binario</p>
              <p><strong>Fecha de Nacimiento:</strong></p>
              <p><strong>Email:</strong> admin01@gmail.com</p>
              <p><strong>Teléfono:</strong> 999999999</p>
            </div>
            <div className="boton-editar-container">
              <Link to="/editar-admin">
                <button className="boton-editar">Editar</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MiPerfilAdmin;
