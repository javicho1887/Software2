import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecuperarContraseña() {
  const [email, setEmail] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailTrimmed = email.trim();
  
    try {
      const response = await fetch('http://localhost:8000/api/validar-correo/', { // Incluye el prefijo 'api/'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: emailTrimmed }),
      });
  
      if (response.ok) {
        setPopupMessage('Correo electrónico encontrado. Redirigiendo para restablecer contraseña.');
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate('/nueva-contraseña', { state: { email: emailTrimmed } });
        }, 2000);
      } else {
        setPopupMessage('Tu correo no se ha encontrado.');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    } catch (error) {
      setPopupMessage('Error de conexión. Inténtalo de nuevo.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  // Estilos en línea para el pop-up
  const popupStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffdddd',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold',
    color: '#d8000c',
    transition: 'opacity 0.5s ease-in-out',
    opacity: showPopup ? 1 : 0,
    visibility: showPopup ? 'visible' : 'hidden',
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
              required
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
      {popupMessage && (
        <div style={popupStyle}>
          {popupMessage}
        </div>
      )}
    </div>
  );
}

export default RecuperarContraseña;
