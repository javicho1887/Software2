import React from 'react';
import { Link } from 'react-router-dom';
import './MiPerfil.css';

function MiPerfil() {
  return (
    <div className="mi-perfil-container">
      <header className="mi-perfil-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/explorar-cursos" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil">
            <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="mi-perfil-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="User Avatar" className="perfil-avatar-img" />
            <h2>Hola, User01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><Link to="/mi-perfil">Mi Perfil</Link></li>
            <li><Link to="/historial-cursos">Historial de cursos</Link></li>
            <li><Link to="/contactos">Contactos</Link></li>
            <li><Link to="/cambiar-contraseña">Cambiar contraseña</Link></li>  {}
            <li><a href="/">Cerrar Sesión</a></li>
          </ul>
        </aside>

        <section className="perfil-content">
          <h1>Mi Cuenta</h1>
          <div className="perfil-details">
            <h2>Perfil</h2>
            <div className="perfil-info">
              <p><strong>Nombre:</strong> User 01 <strong>Apellido:</strong> User 01</p>
              <p><strong>Documento de Identificación:</strong> 88888888 <strong>Género:</strong> Binario</p>
              <p><strong>Fecha de Nacimiento:</strong></p>
              <p><strong>Email:</strong> user01@gmail.com</p>
              <p><strong>Teléfono:</strong> 999999999</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MiPerfil;
