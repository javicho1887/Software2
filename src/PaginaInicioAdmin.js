import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PaginaInicioDocente.css';

function PaginaInicioAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login-admin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Usuario o contraseña incorrectos");
      }

      const data = await response.json();
      console.log("Login exitoso:", data);
      localStorage.setItem("admin_id", data.Admin_id); // Guarda el Admin_id en localStorage
      navigate("/explorar-cursos-admin"); // Redirige al dashboard del administrador
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-docente-container">
      <header className="login-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
      </header>

      <main className="login-docente-main">
        <div className="login-docente-box">
          <h2>Bienvenido Admin</h2>
          <br />
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />

            <button type="submit" className="login-button">Login</button>

            <div className="login-links">
              <Link to="/recuperar-contraseña-admin" className="forgot-password-link">Olvidé mi contraseña</Link>
            </div>
          </form>

          {/* Botón para regresar al inicio */}
          <div className="back-to-home">
            <a href="/" className="back-button">Regresar al inicio</a>
          </div>
        </div>

        <div className="login-docente-image">
          <img src="/docente-image.png" alt="Admin" className="docente-image" />
        </div>
      </main>
    </div>
  );
}

export default PaginaInicioAdmin;
