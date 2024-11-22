import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Register.css';

function Register() {
  const navigate = useNavigate(); // Inicializa navigate

  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    dia: '',
    mes: '',
    ano: '',
    correo: '',
    telefono: '',
    contrasena: '',  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.correo.endsWith('@aloe.ulima.edu.pe')) {
        alert('El correo debe tener el dominio @aloe.ulima.edu.pe');
        return;
    }

    fetch('http://localhost:8000/api/registro/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en el registro');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Registro exitoso:', data);
        localStorage.setItem('registroExitoso', 'true');
        navigate('/'); // Redirige a la página principal
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src="/logo.png" alt="NextLevel Logo" className="logo" />
        <h2>Crear cuenta</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombres</label>
            <input 
              type="text" 
              name="nombres" 
              value={formData.nombres} 
              onChange={handleChange} 
              placeholder="Nombres" 
            />
            <label>Apellidos</label>
            <input 
              type="text" 
              name="apellidos" 
              value={formData.apellidos} 
              onChange={handleChange} 
              placeholder="Apellidos" 
            />
          </div>
          <div className="form-group">
            <label>DNI</label>
            <input 
              type="number" // Cambia a type="number" para solo permitir números
              name="dni" 
              value={formData.dni} 
              onChange={handleChange} 
              placeholder="DNI" 
            />
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento:</label>
            <input 
              type="number" 
              name="dia" 
              value={formData.dia} 
              onChange={handleChange} 
              placeholder="Día" 
              className="small-input" 
            />
            <input 
              type="number" 
              name="mes" 
              value={formData.mes} 
              onChange={handleChange} 
              placeholder="Mes" 
              className="small-input" 
            />
            <input 
              type="number" 
              name="ano" 
              value={formData.ano} 
              onChange={handleChange} 
              placeholder="Año" 
              className="small-input" 
            />
          </div>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input 
              type="email" 
              name="correo" 
              value={formData.correo} 
              onChange={handleChange} 
              placeholder="Correo electrónico" 
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password"
              name="contrasena" 
              value={formData.contrasena} 
              onChange={handleChange} 
              placeholder="Contraseña" 
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input 
              type="number" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleChange} 
              placeholder="Teléfono" 
            />
          </div>
          <button type="submit" className="register-button">Registrar</button>
        </form>
        <div className="register-links">
          <a href="/" className="login-link">Iniciar Sesión</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
