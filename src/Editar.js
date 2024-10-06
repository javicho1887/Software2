import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CambiarContraseña.css';

function EditarAdmin() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleDetailsChange = (e) => {
    e.preventDefault();
    if (newPassword === repeatPassword) {
      console.log('Detalles de la cuenta actualizados');
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
            <li><Link to="/editar-admin" className="active">Editar Cuenta</Link></li>
            <li><Link to="/">Cerrar Sesión</Link></li>
          </ul>
        </aside>

        <section className="cambiar-contraseña-content">
          <h1>Mi Cuenta</h1>
          <div className="cambiar-contraseña-details">
            <h2>Editar Detalles de la Cuenta</h2>
            <form onSubmit={handleDetailsChange} className="cambiar-contraseña-form">
              <label>Nombre:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label>Apellido:</label>
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Teléfono:</label>
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <label>Dirección:</label>
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
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
              <button type="submit">Actualizar Detalles</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EditarAdmin;
