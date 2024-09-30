import React, { useState } from 'react';
import './CambiarContraseña.css';

function CambiarContraseña() {
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
    <div className="cambiar-contraseña-container">
      <header className="cambiar-contraseña-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <nav className="nav-bar">
          <button className="nav-button">Explorar Cursos</button>
          <button className="nav-button">Mis Cursos</button>
          <button className="nav-button">Mensajes</button>
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
        </nav>
      </header>

      <main className="cambiar-contraseña-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="User Avatar" className="perfil-avatar-img" />
            <h2>Hola, User01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><a href="/mi-perfil">Mi Perfil</a></li>
            <li><a href="/historial-cursos">Historial de cursos</a></li>
            <li><a href="/contactos">Contactos</a></li>
            <li><a href="#" className="active">Cambiar contraseña</a></li>
            <li><a href="#">Cerrar Sesión</a></li>
          </ul>
        </aside>

        <section className="cambiar-contraseña-content">
          <h1>Mi Cuenta</h1>
          <div className="cambiar-contraseña-details">
            <h2>Cambiar Contraseña</h2>
            <form onSubmit={handlePasswordChange} className="cambiar-contraseña-form">
              <label>Contraseña actual:</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
              <label>Nueva contraseña:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label>Repetir nueva contraseña:</label>
              <input
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
              <button type="submit">Cambiar contraseña</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CambiarContraseña;
