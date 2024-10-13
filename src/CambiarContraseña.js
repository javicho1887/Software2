import React, { useState, useEffect } from 'react';
import './CambiarContraseña.css';

function CambiarContraseña() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [userName, setUserName] = useState(''); // Estado para almacenar el nombre del usuario

  useEffect(() => {
    const storedUserName = localStorage.getItem('user_name'); // Obtiene el nombre completo desde localStorage
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      console.error('No se encontró el nombre del usuario en localStorage');
    }
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== repeatPassword) {
      setPopupMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setPopupMessage('No se encontró el token de autenticación. Inicia sesión nuevamente.');
        return;
      }

      const response = await fetch('http://localhost:8000/api/cambiar-contraseña/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
        }),
      });

      if (response.ok) {
        setPopupMessage('Tu contraseña ha sido actualizada exitosamente.');
        setCurrentPassword('');
        setNewPassword('');
        setRepeatPassword('');
      } else if (response.status === 400) {
        setPopupMessage('La contraseña actual es incorrecta.');
      } else {
        setPopupMessage('Hubo un error al actualizar la contraseña. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setPopupMessage('Error del servidor. Por favor, intenta más tarde.');
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
            <h2>Hola, {userName || 'Usuario'}!</h2> {/* Mostrar el nombre del usuario */}
          </div>
          <ul className="perfil-menu">
            <li><a href="/mi-perfil">Mi Perfil</a></li>
            <li><a href="/historial-cursos">Historial de cursos</a></li>
            <li><a href="/contactos">Contactos</a></li>
            <li><a href="#" className="active">Cambiar contraseña</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
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
            {popupMessage && <div className="popup">{popupMessage}</div>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CambiarContraseña;
