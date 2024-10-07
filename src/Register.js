import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    dia: '',
    mes: '',
    ano: '',
    correo: '',
    telefono: '',
    contrasena: '',  // Asegúrate de que tienes un estado para la contraseña
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviar datos al backend Django
    fetch('http://localhost:8000/api/registro/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),  // Convierte los datos en JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en el registro');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Registro exitoso:', data);
        // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
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
              type="text" 
              name="dni" 
              value={formData.dni} 
              onChange={handleChange} 
              placeholder="DNI" 
            />
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento:</label>
            <input 
              type="text" 
              name="dia" 
              value={formData.dia} 
              onChange={handleChange} 
              placeholder="Día" 
              className="small-input" 
            />
            <input 
              type="text" 
              name="mes" 
              value={formData.mes} 
              onChange={handleChange} 
              placeholder="Mes" 
              className="small-input" 
            />
            <input 
              type="text" 
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
            <label>Contraseña</label> {/* Cambia el campo a contraseña */}
            <input 
              type="password"  // Cambia el tipo a password
              name="contrasena" 
              value={formData.contrasena}  // Asegúrate de que está usando formData.contrasena
              onChange={handleChange} 
              placeholder="Contraseña" 
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input 
              type="text" 
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
