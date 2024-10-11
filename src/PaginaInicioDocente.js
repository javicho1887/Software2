import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PaginaInicioDocente.css';

function PaginaInicioDocente() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Para redireccionar entre rutas

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar credenciales: usuario = docente, password = 123
    if (username === 'docente' && password === '123') {
      navigate('/mis-cursos-docente'); // Redirigir a la página de MisCursosDocente
    } else {
      alert('Usuario o contraseña incorrecta');
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
          <br/>
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
              <Link to="/recuperar-contraseña" className="forgot-password-link">Olvidé mi contraseña</Link>
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
