import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function CambiarContraseñaAdmin() {
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
          <Link to="/explorar-cursos-admin" className="nav-button">Explorar Cursos</Link>
          <Link to="/mis-cursos-admin" className="nav-button">Mis Cursos</Link>
          <Link to="/mensajes-admin" className="nav-button">Mensajes</Link>
          <Link to="/mi-perfil-admin">
            <img src="/user-avatar.png" alt="Admin Avatar" className="user-avatar" />
          </Link>
        </nav>
      </header>

      <main className="cambiar-contraseña-main">
        <aside className="perfil-sidebar">
          <div className="perfil-avatar">
            <img src="/user-avatar.png" alt="Admin Avatar" className="perfil-avatar-img" />
            <h2>Hola, Admin01!</h2>
          </div>
          <ul className="perfil-menu">
            <li><Link to="/mi-perfil-admin">Mi Perfil</Link></li>
            <li><Link to="/lista-profesores">Lista de Profesores</Link></li>
            <li><Link to="/lista-alumnos">Lista de Alumnos</Link></li>
            <li><Link to="/cambiar-contraseña-admin" className="active">Cambiar contraseña</Link></li>
            <li><Link to="/">Cerrar Sesión</Link></li>
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

export default CambiarContraseñaAdmin;
