import React from 'react';
import './ContactosDocente.css';

function ContactosDocente() {
  return (
    <div className="contactos-docente-container">
      <header className="contactos-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="Docente Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="contactos-docente-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="Docente Avatar" className="perfil-avatar-img" />
            <h2>Hola, Docente01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><a href="/mi-perfil-docente">Mi Perfil</a></li>
            <li><a href="#" className="active">Contactos</a></li>
            <li><a href="/cambiar-contraseña-docente">Cambiar contraseña</a></li>
            <li><a href="#">Cerrar Sesión</a></li>
          </ul>
        </aside>

        <section className="contactos-docente-content">
          <h1>Mi Cuenta</h1>
          <div className="contactos-docente-details">
            <h2>Contactos</h2>
            <div className="contactos-info">
              <p><strong>Email:</strong> admin01@gmail.com</p>
              <p><strong>Teléfono:</strong> 999888777</p>
              <p><strong>Instagram:</strong> @PractikAdmin</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactosDocente;
