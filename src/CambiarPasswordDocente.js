import React from 'react';
import './CambiarPasswordDocente.css';
import { Link } from 'react-router-dom';

function CambiarPasswordDocente() {
  return (
    <div className="password-docente-container">
      <header className="password-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
      </header>

      <main className="password-docente-main">
        <div className="password-docente-box">
          <h2>Restablecer contraseña</h2>
          <form className="password-form">
            <label htmlFor="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo" placeholder="Ingrese su correo electrónico" />

            <button type="submit" className="enviar-enlace-button">Enviar Enlace</button>

            <div className="password-links">
              <Link to="/registro-docente" className="register-link">Regístrate ahora</Link>
              <Link to="/iniciar-sesion-docente" className="login-link">Iniciar Sesión</Link>
            </div>
          </form>
        </div>

        <div className="password-docente-image">
          <img src="/docente-image.png" alt="Docente" className="docente-image" />
        </div>
      </main>
    </div>
  );
}

export default CambiarPasswordDocente;
