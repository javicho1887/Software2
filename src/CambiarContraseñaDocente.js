import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CambiarContraseñaDocente.css';

function CambiarContraseñaDocente() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword === repeatPassword) {
      console.log('Contraseña cambiada');
    } else {
      console.log('Las contraseñas no coinciden');
    }
  };

  return (
    <div className="cambiar-contraseña-docente-container">
      <header className="cambiar-contraseña-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <Link to="/mis-cursos-docente" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-curso-docente" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil-docente">
            <img src="/user-avatar.png" alt="Docente Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="cambiar-contraseña-docente-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="Docente Avatar" className="perfil-avatar-img" />
            <h2>Hola, Docente01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><Link to="/mi-perfil-docente">Mi Perfil</Link></li>
            <li><Link to="/contactos-docente">Contactos</Link></li>
            <li><Link to="/cambiar-contraseña-docente" className="active">Cambiar Contraseña</Link></li>
            <li><Link to="/">Cerrar Sesión</Link></li>
          </ul>
        </aside>

        <section className="cambiar-contraseña-docente-content">
          <h1>Mi Cuenta</h1>
          <div className="cambiar-contraseña-docente-details">
            <h2>Cambiar Contraseña</h2>
            <form onSubmit={handlePasswordChange} className="cambiar-contraseña-docente-form">
              <label>Contraseña actual:</label>
              <input
                type="password"
                placeholder="Contraseña actual"
                required
              />
              <label>Nueva contraseña:</label>
              <input
                type="password"
                placeholder="Nueva contraseña"
                required
              />
              <label>Repetir nueva contraseña:</label>
              <input
                type="password"
                placeholder="Repetir nueva contraseña"
                required
              />
              <button type="submit">Cambiar Contraseña</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CambiarContraseñaDocente;
