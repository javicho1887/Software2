import React from 'react';
import './RegistroDocente.css';
import { Link } from 'react-router-dom';

function RegistroDocente() {
  return (
    <div className="registro-docente-container">
      <header className="registro-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
      </header>

      <main className="registro-docente-main">
        <div className="registro-docente-box">
          <h2>Crear cuenta</h2>
          <form className="registro-form">
            <div className="input-group">
              <label>Nombres</label>
              <input type="text" name="nombres" placeholder="Ingrese sus nombres" />
            </div>

            <div className="input-group">
              <label>Apellidos</label>
              <input type="text" name="apellidos" placeholder="Ingrese sus apellidos" />
            </div>

            <div className="input-group">
              <label>DNI</label>
              <input type="text" name="dni" placeholder="Ingrese su DNI" />
            </div>

            <div className="input-group">
              <label>Fecha de Nacimiento</label>
              <div className="date-inputs">
                <input type="text" name="dia" placeholder="Día" className="date-input" />
                <input type="text" name="mes" placeholder="Mes" className="date-input" />
                <input type="text" name="anio" placeholder="Año" className="date-input" />
              </div>
            </div>

            <div className="input-group">
              <label>Correo electrónico</label>
              <input type="email" name="correo" placeholder="Ingrese su correo" />
            </div>

            <div className="input-group">
              <label>Teléfono</label>
              <input type="text" name="telefono" placeholder="Ingrese su teléfono" />
            </div>

            <button type="submit" className="register-button">Registrar</button>

            <div className="registro-links">
              <Link to="/iniciar-sesion-docente" className="login-link">Iniciar Sesión</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RegistroDocente;
