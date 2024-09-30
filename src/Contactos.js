import React from 'react';
import './Contactos.css';

function Contactos() {
  return (
    <div className="contactos-container">
      <header className="contactos-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="contactos-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="User Avatar" className="perfil-avatar-img" />
            <h2>Hola, User01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><a href="/mi-perfil">Mi Perfil</a></li>
            <li><a href="/historial-cursos">Historial de cursos</a></li>
            <li><a href="#" className="active">Contactos</a></li>
            <li><a href="/cambiar-contraseña">Cambiar contraseña</a></li>
            <li><a href="#">Cerrar Sesión</a></li>
          </ul>
        </aside>

        <section className="contactos-content">
          <h1>Mi Cuenta</h1>
          <div className="contactos-details">
            <h2>Contactos</h2>
            <div className="contactos-info">
              <p><strong>Email:</strong> admin01@gmail.com</p>
              <p><strong>Teléfono:</strong> 999999999</p>
              <p><strong>Instagram:</strong> @Practik</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contactos;
