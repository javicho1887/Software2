import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function NuevaContraseña() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleNewPasswordSubmit = async (e) => {
    e.preventDefault();
  
    if (!email) {
      setPopupMessage('Error: No se pudo obtener el correo electrónico.');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setPopupMessage('Las contraseñas no coinciden.');
    } else {
      try {
        const response = await fetch('http://localhost:8000/api/actualizar-contraseña/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ correo: email, nueva_contraseña: newPassword }),  // Ajusta los nombres de los campos
        });
  
        if (response.ok) {
          setPopupMessage('Tu contraseña ha sido actualizada exitosamente.');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          setPopupMessage('Hubo un error al actualizar la contraseña. Por favor, intenta nuevamente.');
        }
      } catch (error) {
        setPopupMessage('Error del servidor. Por favor, intenta más tarde.');
      }
    }
  };
  

  // Estilos en CSS-in-JS
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const boxStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h3>Crear Nueva Contraseña</h3>
        <form onSubmit={handleNewPasswordSubmit}>
          <label htmlFor="new-password">Nueva Contraseña</label>
          <input 
            type="password" 
            id="new-password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nueva Contraseña" 
          />
          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input 
            type="password" 
            id="confirm-password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar Contraseña" 
          />
          <button type="submit" style={buttonStyle}>Actualizar Contraseña</button>
        </form>
        {popupMessage && <div className="popup">{popupMessage}</div>}
      </div>
    </div>
  );
}

export default NuevaContraseña;
