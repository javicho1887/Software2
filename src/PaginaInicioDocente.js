import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PaginaInicioDocente.css';

function PaginaInicioDocente() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Para redireccionar entre rutas

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Objeto con los datos del usuario
    const data = {
      username: username,
      password: password,
    };

    // Enviar solicitud al backend para iniciar sesión
    try {
      const response = await fetch('http://localhost:8000/api/login/docente/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Verificar si la respuesta es exitosa
      if (response.ok) {
        // Guarda el docente_id en localStorage
        localStorage.setItem("docente_id", result.docente_id); // Asegúrate de que el backend devuelva docente_id

        // Redirigir a la página de Mis Cursos Docente
        navigate('/mis-cursos-docente');
      } else {
        // Mostrar mensaje de error
        alert(result.error || 'Usuario o contraseña incorrecta');
      }
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="login-docente-container">
      <header className="login-docente-header">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
      </header>

      <main className="login-docente-main">
        <div className="login-docente-box">
          <h2>Bienvenido Docente</h2>
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
              <Link to="/registro-docente" className="register-link">Regístrate ahora</Link>
              <Link to="/recuperar-contraseña-docente" className="forgot-password-link">Olvidé mi contraseña</Link>
            </div>
          </form>
        </div>

        <div className="login-docente-image">
          <img src="/docente-image.png" alt="Docente" className="docente-image" />
        </div>
      </main>
    </div>
  );
}

export default PaginaInicioDocente;
