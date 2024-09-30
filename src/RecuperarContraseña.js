import React, { useState } from 'react';
import './RecuperarContraseña.css';

function RecuperarContraseña() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo electrónico enviado para restablecer la contraseña:', email);
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <div className="reset-left">
          <img src="/logo.png" alt="NextLevel Logo" className="logo" />
          <h2>¿Listo para ver tu potencial?</h2>
          <h3>Restablecer contraseña</h3>
          <form className="reset-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={handleChange} 
              placeholder="Correo electrónico" 
            />
            <button type="submit" className="reset-button">Enviar Enlace</button>
          </form>
          <div className="reset-links">
            <a href="/register" className="register-link">Regístrate ahora</a>
            <a href="/" className="login-link">Iniciar Sesión</a>
          </div>
        </div>
        <div className="reset-right">
          <img src="/climbing-image.jpg" alt="Climbing" className="reset-image" />
        </div>
      </div>
    </div>
  );
}

export default RecuperarContraseña;
